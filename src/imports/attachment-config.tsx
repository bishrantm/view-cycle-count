/**
 * Attachment Configuration  (attachment-config.tsx)
 * ────────────────────────────────────────────────────────────────────────────
 * Centralised definitions for file-type thumbnails, source metadata,
 * link pill variants, and shared types used by every attachment surface
 * in the application (Inventory Detail → Attachments Tab,
 * Transaction Detail Modal → Attachments Tab, etc.)
 *
 * ⚡  All colours that reference the design-system use CSS custom properties
 *    from /src/styles/theme.css so the look-and-feel can be updated in one
 *    place without touching component code.
 *
 * Usage:
 *   import {
 *     FILE_THUMB,
 *     SOURCE_META,
 *     LINK_PILL_VARIANTS,
 *     fileExtLabel,
 *     type FileType,
 *     type SourceType,
 *     type AttachmentLinkVariant,
 *   } from "./attachment-config";
 */

import React from "react";
import {
  FileText,
  FileSpreadsheet,
  FileImage,
  File,
  FileArchive,
} from "lucide-react";

/* ══════════════════════════════════════════════════════════════════════════
 * § 1  FILE TYPES
 * ═══════════════════════════════════════════════════════════════════════════ */

/** Supported file extensions across all attachment surfaces. */
export type FileType =
  | "pdf"
  | "xlsx"
  | "csv"
  | "docx"
  | "png"
  | "jpg"
  | "zip";

/** Maps a FileType to its human-friendly extension label (uppercased). */
export function fileExtLabel(type: FileType): string {
  return type.toUpperCase();
}

/* ═══════════════════════════════════════════════════════════════════════════
 * § 2  FILE-TYPE THUMBNAILS
 *   Soft-pastel colour palette + icon for the card preview area.
 * ═══════════════════════════════════════════════════════════════════════════ */

export interface FileThumbnailConfig {
  /** Background colour for the thumbnail preview area. */
  bg: string;
  /** Accent colour for the extension badge and icon tint. */
  color: string;
  /** Pre-built icon (28 px, 70 % opacity) shown inside the preview area. */
  icon: React.ReactNode;
}

const iconStyle = (color: string): React.CSSProperties => ({
  color,
  opacity: 0.7,
});

export const FILE_THUMB: Record<FileType, FileThumbnailConfig> = {
  pdf:  { bg: "var(--file-pdf-bg)", color: "var(--file-pdf-color)", icon: <FileText        size={28} style={iconStyle("var(--file-pdf-color)")} /> },
  xlsx: { bg: "var(--file-xlsx-bg)", color: "var(--file-xlsx-color)", icon: <FileSpreadsheet size={28} style={iconStyle("var(--file-xlsx-color)")} /> },
  csv:  { bg: "var(--file-csv-bg)", color: "var(--file-csv-color)", icon: <FileSpreadsheet size={28} style={iconStyle("var(--file-csv-color)")} /> },
  docx: { bg: "var(--file-docx-bg)", color: "var(--file-docx-color)", icon: <FileText        size={28} style={iconStyle("var(--file-docx-color)")} /> },
  png:  { bg: "var(--file-image-bg)", color: "var(--file-image-color)", icon: <FileImage       size={28} style={iconStyle("var(--file-image-color)")} /> },
  jpg:  { bg: "var(--file-image-bg)", color: "var(--file-image-color)", icon: <FileImage       size={28} style={iconStyle("var(--file-image-color)")} /> },
  zip:  { bg: "var(--file-archive-bg)", color: "var(--file-archive-color)", icon: <FileArchive     size={28} style={iconStyle("var(--file-archive-color)")} /> },
};

/** Safe accessor — returns a neutral fallback for unknown types. */
export function getFileThumbnail(type: string): FileThumbnailConfig {
  return (
    FILE_THUMB[type as FileType] ?? {
      bg: "var(--surface-secondary)",
      color: "var(--text-secondary)",
      icon: <File size={28} style={{ color: "var(--text-secondary)", opacity: 0.7 }} />,
    }
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * § 3  SOURCE / TRANSACTION-TYPE METADATA
 *   Coloured treatment for source-filter pills and source badges.
 * ═══════════════════════════════════════════════════════════════════════════ */

export type SourceType =
  | "Receiving"
  | "Consumption"
  | "Adjustment"
  | "Movement"
  | "Cycle Count"
  | "Manufactured"
  | "Item Library";

export interface SourceMetaConfig {
  /** Text / icon colour. */
  color: string;
  /** Background tint. */
  bg: string;
  /** Border colour. */
  border: string;
}

export const SOURCE_META: Record<SourceType, SourceMetaConfig> = {
  Receiving:      { color: "var(--source-receiving-text)", bg: "var(--source-receiving-bg)", border: "var(--source-receiving-border)" },
  Consumption:    { color: "var(--source-consumption-text)", bg: "var(--source-consumption-bg)", border: "var(--source-consumption-border)" },
  Adjustment:     { color: "var(--source-adjustment-text)", bg: "var(--source-adjustment-bg)", border: "var(--source-adjustment-border)" },
  Movement:       { color: "var(--source-movement-text)", bg: "var(--source-movement-bg)", border: "var(--source-movement-border)" },
  "Cycle Count":  { color: "var(--source-cycle-count-text)", bg: "var(--source-cycle-count-bg)", border: "var(--source-cycle-count-border)" },
  Manufactured:   { color: "var(--source-manufactured-text)", bg: "var(--source-manufactured-bg)", border: "var(--source-manufactured-border)" },
  "Item Library": { color: "var(--text-secondary)", bg: "var(--surface-secondary)", border: "var(--border)" },
};

/* ═══════════════════════════════════════════════════════════════════════════
 * § 4  LINK PILL VARIANTS
 *   Defines the pill shown between the thumbnail preview and file-info
 *   area.  The variant describes *what* the pill links to, or indicates
 *   that the attachment has no specific linkage.
 *
 *   ┌──────────────────────┬──────────────────────────────────────────────┐
 *   │ Variant              │ Where it's used                             │
 *   ├──────────────────────┼──────────────────────────────────────────────┤
 *   │ transaction          │ Inventory Detail → Attachments tab          │
 *   │                      │ Pill links to the related transaction       │
 *   │                      │ (ExternalLink icon + TX ID).                │
 *   ├──────────────────────┼──────────────────────────────────────────────┤
 *   │ serial-unit          │ Transaction Detail Modal → Attachments tab  │
 *   │                      │ Pill indicates the linked serial unit       │
 *   │                      │ (barcode icon + serial number).             │
 *   ├──────────────────────┼──────────────────────────────────────────────┤
 *   │ item-library         │ Inventory Detail → Attachments tab          
 *   │                      │ Pill uses source-coloured treatment for     │
 *   │                      │ "Item Library" entries (Library icon).      │
 *   ├──────────────────────┼─────────────────────────────────────────────┤
 *   │ transaction-level    │ Transaction Detail Modal → Attachments tab  │
 *   │                      │ Neutral pill with "Transaction attachment"  │
 *   │                      │ text when file is not linked to a specific  │
 *   │                      │ serial unit.                                │
 *   └──────────────────────┴──────────────────────────────────────────────┘
 * ═══════════════════════════════════════════════════════════════════════════ */

export type AttachmentLinkVariant =
  | "transaction"
  | "serial-unit"
  | "item-library"
  | "transaction-level";

export interface LinkPillConfig {
  /** Human-readable description of this pill variant. */
  description: string;
  /** Default label shown inside the pill (can be overridden with dynamic text). */
  defaultLabel: string;
  /** Whether the pill is interactive (clickable link with hover effect). */
  interactive: boolean;
  /** Static style tokens — all reference design-system CSS variables. */
  style: {
    background: string;
    border: string;
    color: string;
  };
  /** Hover style tokens (only applies when `interactive: true`). */
  hoverStyle?: {
    background: string;
    border: string;
    color: string;
  };
}

/**
 * Serialized-item barcode icon (inline SVG, 10 × 10 px).
 * Matches the SERIALIZED_ICON from shared-badges.tsx at pill scale.
 */
export const SERIAL_BARCODE_ICON = (
  <svg
    width="10"
    height="10"
    viewBox="0 0 16 16"
    fill="none"
    style={{ flexShrink: 0, marginRight: "2px" }}
  >
    <path
      d="M2.91 12.36H1.45V3.64H2.91M4.36 12.36H3.64V3.64H4.36M7.27 12.36H5.09V3.64H7.27M8.73 12.36H8V3.64H8.73M10.91 12.36H9.45V3.64H10.91M12.36 12.36H11.64V3.64H12.36M14.55 12.36H13.09V3.64H14.55V12.36Z"
      fill="currentColor"
    />
  </svg>
);

export const LINK_PILL_VARIANTS: Record<AttachmentLinkVariant, LinkPillConfig> = {
  /* ── Transaction link (Inventory Detail Attachments tab) ── */
  transaction: {
    description:
      "Links to a specific transaction. Shown in the Inventory Detail → Attachments tab when the file was uploaded via a transaction (Receiving, Adjustment, etc.).",
    defaultLabel: "TX-000000",
    interactive: true,
    style: {
      background: "var(--surface-secondary)",
      border: "var(--border)",
      color: "var(--text-secondary)",
    },
    hoverStyle: {
      background: "var(--primary-50)",
      border: "var(--primary-200)",
      color: "var(--primary)",
    },
  },

  /* ── Serial-unit link (Transaction Detail Attachments tab) ── */
  "serial-unit": {
    description:
      "Indicates a linked serial unit. Shown in the Transaction Detail Modal → Attachments tab when the file is associated with a specific serial unit. Uses a barcode icon to differentiate from transaction links.",
    defaultLabel: "000000-00",
    interactive: true,
    style: {
      background: "var(--surface-secondary)",
      border: "var(--border)",
      color: "var(--text-secondary)",
    },
    hoverStyle: {
      background: "var(--primary-50)",
      border: "var(--primary-200)",
      color: "var(--primary)",
    },
  },

  /* ── Item Library source (Inventory Detail Attachments tab) ── */
  "item-library": {
    description:
      "Source badge for files uploaded directly to the item library rather than through a transaction. Uses the Item Library source-colour treatment.",
    defaultLabel: "Item Library",
    interactive: false,
    style: {
      background: "var(--surface-secondary)",
      border: "var(--border)",
      color: "var(--text-secondary)",
    },
  },

  /* ── Transaction-level fallback (Transaction Detail Attachments tab) ── */
  "transaction-level": {
    description:
      "Neutral pill for files attached to the transaction as a whole (not linked to a specific serial unit). Shown in the Transaction Detail Modal → Attachments tab.",
    defaultLabel: "Transaction attachment",
    interactive: false,
    style: {
      background: "var(--surface-secondary)",
      border: "var(--border)",
      color: "var(--text-tertiary)",
    },
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
 * § 5  SHARED PILL STYLE HELPERS
 *   Common inline-style objects used by all pill instances.
 * ═══════════════════════════════════════════════════════════════════════════ */

const font = "var(--font-family)";

/** Base inline styles shared by every link pill regardless of variant. */
export const PILL_BASE_STYLE: React.CSSProperties = {
  padding: "1px var(--spacing-1-5)",
  borderRadius: "var(--radius-full)",
  fontFamily: font,
  fontWeight: "var(--font-weight-medium)" as any,
  fontSize: "var(--text-badge)",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  gap: "var(--spacing-0-5)",
  textDecoration: "none",
  transition: "background 0.15s ease, border-color 0.15s ease, color 0.15s ease",
};

/** Builds the full inline style for a pill from its variant config. */
export function pillStyle(variant: AttachmentLinkVariant): React.CSSProperties {
  const cfg = LINK_PILL_VARIANTS[variant];
  return {
    ...PILL_BASE_STYLE,
    background: cfg.style.background,
    border: `1px solid ${cfg.style.border}`,
    color: cfg.style.color,
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
 * § 6  THUMBNAIL CARD STYLE CONSTANTS
 *   Reusable style objects for the ThumbnailCard layout shared across
 *   all attachment surfaces.
 * ═══════════════════════════════════════════════════════════════════════════ */

/** Card container border + shadow (idle state). */
export const CARD_IDLE_STYLE: React.CSSProperties = {
  minWidth: 0,
  borderRadius: "var(--radius-lg)",
  background: "var(--card)",
  boxShadow: "var(--elevation-xs)",
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
  cursor: "default",
};

/** Card container border + shadow (hovered state). */
export const CARD_HOVER_BORDER = "var(--primary-200)";
export const CARD_HOVER_SHADOW = "var(--elevation-card)";

/** Thumbnail preview area (top section). */
export const THUMBNAIL_PREVIEW_STYLE: React.CSSProperties = {
  height: "88px",
  borderTopLeftRadius: "calc(var(--radius-lg) - 1px)",
  borderTopRightRadius: "calc(var(--radius-lg) - 1px)",
  overflow: "hidden",
};

/** Extension badge (top-right of preview area). */
export const EXT_BADGE_STYLE: React.CSSProperties = {
  top: "var(--spacing-1-5)",
  right: "var(--spacing-1-5)",
  padding: "1px var(--spacing-1)",
  borderRadius: "var(--radius-sm)",
  background: "var(--overlay-white-strong)",
  border: "1px solid var(--border)",
  fontFamily: font,
  fontWeight: "var(--font-weight-semibold)" as any,
  fontSize: "var(--text-micro)",
  letterSpacing: "var(--tracking-caps)",
  textTransform: "uppercase",
};

/** Pill container padding (between preview and file info). */
export const PILL_CONTAINER_PADDING: React.CSSProperties = {
  padding: "var(--spacing-1-5) var(--spacing-2) 0",
};

/** File-info section padding. */
export const FILE_INFO_PADDING: React.CSSProperties = {
  padding: "var(--spacing-1-5) var(--spacing-2) var(--spacing-2)",
  gap: "var(--spacing-1)",
};

/** File name text style. */
export const FILE_NAME_STYLE: React.CSSProperties = {
  fontFamily: font,
  fontWeight: "var(--font-weight-medium)" as any,
  fontSize: "var(--text-body-sm)",
  color: "var(--foreground)",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  margin: 0,
  lineHeight: "var(--leading-snug)",
};

/** Meta-row text style (date, file size, uploader). */
export const FILE_META_STYLE: React.CSSProperties = {
  fontFamily: font,
  fontWeight: "var(--font-weight-normal)" as any,
  fontSize: "var(--text-caption)",
  color: "var(--text-tertiary)",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  margin: 0,
  lineHeight: "var(--leading-snug)",
};

/* ═══════════════════════════════════════════════════════════════════════════
 * § 7  DATE FORMATTER
 * ═══════════════════════════════════════════════════════════════════════════ */

const MONTH_ABBR = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/**
 * Converts "MM/DD/YYYY" + "H:MM AM/PM" into "DD Mon YYYY, h:mm am/pm".
 * Falls back to raw concatenation on parse failure.
 */
export function formatAttachmentDate(date: string, time: string): string {
  try {
    const [mm, dd, yyyy] = date.split("/");
    return `${dd} ${MONTH_ABBR[parseInt(mm, 10) - 1]} ${yyyy}, ${time.toLowerCase()}`;
  } catch {
    return `${date}, ${time}`;
  }
}