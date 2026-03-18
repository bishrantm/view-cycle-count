/* ===========================================================================
 * shared-ui.tsx  —  Reusable Design-System Primitives
 * ===========================================================================
 *
 * Single source of truth for font constants, style presets, layout helpers,
 * and lightweight shared components used across every table / modal / tab
 * in the Physical Inventory module.
 *
 * ALL visual tokens reference CSS custom properties from:
 *   /src/styles/theme.css   —  colors, spacing, radii, typography
 *   /styles/global.css      —  additional design-system tokens
 *
 * Import example:
 *   import {
 *     FONT, FONT_INTER,
 *     CellText, TablePagination, EmptyState, SectionHeader,
 *     formatCurrency,
 *     tableHeaderCell, tableRowHover, cardContainer, ...
 *   } from "./shared-ui";
 *
 * =========================================================================== */

import React, { type CSSProperties, type ReactNode } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  PackageSearch,
} from "lucide-react";

/* ===========================================================================
 * § 1  FONT CONSTANTS
 * =========================================================================== */

/** Primary font — used for body text, table cells, labels. */
export const FONT = "var(--font-family)";
/** Alias kept for readability in files that reference both. */
export const FONT_INTER = "var(--font-family)";
/** Display / heading font. */
export const FONT_FIGTREE = "var(--font-family)";
/** Monospace font — for serial numbers, code snippets, counters. */
export const FONT_MONO = "var(--font-family-mono)";

/* ===========================================================================
 * § 2  TYPOGRAPHY STYLE PRESETS
 *
 * Ready-to-spread CSSProperties objects for common text patterns.
 * Usage:  <span style={{ ...TEXT.label, color: "var(--primary)" }}>…</span>
 * =========================================================================== */

export const TEXT = {
  /** 16 px — body / paragraph */
  body: {
    fontFamily: FONT,
    fontSize: "var(--text-base)",
    fontWeight: "var(--font-weight-normal)",
    color: "var(--foreground)",
    lineHeight: 1.5,
  } as CSSProperties,

  /** 14 px — labels, secondary body */
  label: {
    fontFamily: FONT,
    fontSize: "var(--text-label)",
    fontWeight: "var(--font-weight-normal)",
    color: "var(--foreground)",
    lineHeight: 1.4,
  } as CSSProperties,

  /** 13 px — table cells, compact body */
  bodySm: {
    fontFamily: FONT,
    fontSize: "var(--text-body-sm)",
    fontWeight: "var(--font-weight-normal)",
    color: "var(--foreground)",
    lineHeight: 1.4,
  } as CSSProperties,

  /** 12 px — captions, timestamps */
  caption: {
    fontFamily: FONT,
    fontSize: "var(--text-caption)",
    fontWeight: "var(--font-weight-normal)",
    color: "var(--text-tertiary)",
    lineHeight: 1.3,
  } as CSSProperties,

  /** 12 px — section header uppercase label */
  sectionLabel: {
    fontFamily: FONT,
    fontSize: "var(--text-caption)",
    fontWeight: "var(--font-weight-semibold)",
    color: "var(--text-secondary)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.04em",
    lineHeight: 1.3,
  } as CSSProperties,

  /** 11 px — helper text, extra-small captions */
  xs: {
    fontFamily: FONT,
    fontSize: "var(--text-xs)",
    fontWeight: "var(--font-weight-normal)",
    color: "var(--text-tertiary)",
    lineHeight: 1.2,
  } as CSSProperties,

  /** 10 px — badges, micro labels */
  badge: {
    fontFamily: FONT,
    fontSize: "var(--text-badge)",
    fontWeight: "var(--font-weight-medium)",
    lineHeight: "normal",
  } as CSSProperties,

  /** Medium weight override — spread after any TEXT preset */
  medium: { fontWeight: "var(--font-weight-medium)" } as CSSProperties,

  /** Semibold weight override */
  semibold: { fontWeight: "var(--font-weight-semibold)" } as CSSProperties,

  /** Secondary color override */
  secondary: { color: "var(--text-secondary)" } as CSSProperties,

  /** Tertiary color override */
  tertiary: { color: "var(--text-tertiary)" } as CSSProperties,

  /** Truncate (single line ellipsis) */
  truncate: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  } as CSSProperties,
} as const;

/* ===========================================================================
 * § 3  SPACING HELPERS
 *
 * Named spacing values for use in style objects.
 * Values match the CSS custom properties from theme.css.
 * =========================================================================== */

export const SPACING = {
  "0.5": "var(--spacing-0-5)",
  "1": "var(--spacing-1)",
  "1.5": "var(--spacing-1-5)",
  "2": "var(--spacing-2)",
  "2.5": "var(--spacing-2-5)",
  "3": "var(--spacing-3)",
  "3.5": "var(--spacing-3-5)",
  "4": "var(--spacing-4)",
  "5": "var(--spacing-5)",
  "6": "var(--spacing-6)",
  "8": "var(--spacing-8)",
} as const;

/* ===========================================================================
 * § 4  HOVER / INTERACTIVE STATE PRESETS
 * =========================================================================== */

/** Table row hover — apply as inline or merge via state.
 *  CSS class `data-table-row` in global.css already applies this on :hover. */
export const HOVER = {
  /** Table row hover background */
  tableRow: "var(--row-hover)",
  /** Primary-50 hover (pills, tags, interactive cards) */
  primary50: "var(--primary-50)",
  /** Card hover border */
  cardBorder: "var(--primary-200)",
  /** Info card hover */
  infoCardBg: "var(--primary-50)",
  infoCardBorder: "var(--primary-200)",
  /** Surface secondary hover (buttons, dropdown items) */
  surface: "var(--secondary)",
  /** Standard transition for hover effects */
  transition: "background 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease",
} as const;

/* ===========================================================================
 * § 5  CARD / CONTAINER STYLE PRESETS
 * =========================================================================== */

/** Standard card container (modals, panels, floating cards). */
export const CARD_STYLE: CSSProperties = {
  background: "var(--card)",
  borderRadius: "var(--radius-lg)",
  border: "1px solid var(--border)",
  boxShadow: "var(--elevation-xs)",
};

/** Card with hover elevation (for clickable cards). */
export const CARD_HOVER_STYLE: CSSProperties = {
  ...CARD_STYLE,
  transition: HOVER.transition,
  cursor: "pointer",
};

/** Tab panel wrapper (used by every tab in detail views). */
export const TAB_PANEL_STYLE: CSSProperties = {
  borderRadius: "var(--radius-lg)",
  border: "1px solid var(--border)",
  background: "var(--card)",
  overflow: "hidden",
};

/** Modal overlay backdrop */
export const MODAL_OVERLAY_STYLE: CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--overlay-backdrop)",
};

/** Drawer shadow (right-side modals). */
export const DRAWER_SHADOW = "var(--elevation-drawer)";

/* ===========================================================================
 * § 6  TABLE STYLE PRESETS
 * =========================================================================== */

/** Table header cell style — spread onto <th> elements. */
export const TABLE_HEADER_STYLE: CSSProperties = {
  background: "var(--surface-secondary)",
  padding: "0 var(--spacing-3)",
  textAlign: "left" as const,
  cursor: "pointer",
};

/** Table header label text style */
export const TABLE_HEADER_TEXT: CSSProperties = {
  fontSize: "var(--text-body-sm)",
  fontWeight: "var(--font-weight-medium)",
  color: "var(--text-secondary)",
  fontFamily: FONT,
  whiteSpace: "nowrap",
};

/** Table body cell base style */
export const TABLE_CELL_STYLE: CSSProperties = {
  padding: "0 var(--spacing-3)",
};

/** Table cell content wrapper — handles overflow/ellipsis */
export const TABLE_CELL_CONTENT: CSSProperties = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

/** Sticky column style generator */
export function stickyColumnStyle(
  left: number,
  isLastSticky: boolean
): CSSProperties {
  return {
    position: "sticky",
    left: `${left}px`,
    zIndex: 2,
    background: "inherit",
    boxShadow: isLastSticky
      ? "inset -1px 0 0 0 var(--border)"
      : undefined,
  };
}

/** Standard pagination page options */
export const RECORDS_PER_PAGE_OPTIONS = [10, 25, 50, 100] as const;

/* ===========================================================================
 * § 7  TAG / BADGE STYLE PRESETS
 *
 * The base style shared by ALL tags/badges. Already exported from
 * shared-badges.tsx as `badgeBase` — re-exported here for convenience
 * so new components only need one import.
 * =========================================================================== */

/** Base inline style for all tag/badge elements. */
export const TAG_BASE: CSSProperties = {
  padding: "var(--spacing-0-5) var(--spacing-2)",
  borderRadius: "var(--radius-sm)",
  fontSize: "var(--text-caption)",
  fontWeight: "var(--font-weight-medium)",
  fontFamily: FONT,
  whiteSpace: "nowrap",
  lineHeight: "normal",
};

/** Convenience: tag color sets keyed by semantic role. */
export const TAG_COLORS = {
  active: {
    bg: "var(--status-completed-bg)",
    border: "var(--status-completed-border)",
    color: "var(--status-completed-text)",
  },
  inactive: {
    bg: "var(--status-pending-bg)",
    border: "var(--status-pending-border)",
    color: "var(--status-pending-text)",
  },
  warning: {
    bg: "var(--status-awaiting-bg)",
    border: "var(--status-awaiting-border)",
    color: "var(--status-awaiting-text)",
  },
  purple: {
    bg: "var(--recount-bg)",
    border: "var(--recount-text)",
    color: "var(--recount-text)",
  },
  neutral: {
    bg: "var(--surface-secondary)",
    border: "var(--border)",
    color: "var(--foreground)",
  },
  primary: {
    bg: "var(--primary-50)",
    border: "var(--primary-200)",
    color: "var(--primary)",
  },
  negative: {
    bg: "var(--variance-negative-bg)",
    border: "var(--variance-negative-text)",
    color: "var(--variance-negative-text)",
  },
  positive: {
    bg: "var(--variance-match-bg)",
    border: "var(--variance-match-text)",
    color: "var(--variance-match-text)",
  },
} as const;

/** Build a complete tag style from a TAG_COLORS entry */
export function tagStyle(
  colorSet: { bg: string; border: string; color: string }
): CSSProperties {
  return {
    ...TAG_BASE,
    background: colorSet.bg,
    color: colorSet.color,
    borderColor: colorSet.border,
  };
}

/* ===========================================================================
 * § 8  AVATAR HELPER
 * =========================================================================== */

/** Inline avatar circle — initials fallback.
 *  size in px (default 24). */
export function AvatarCircle({
  name,
  size = 24,
  bg = "var(--chart-3)",
  color = "white",
}: {
  name: string;
  size?: number;
  bg?: string;
  color?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div
      className="shrink-0 rounded-full flex items-center justify-center"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: bg,
        color,
        fontFamily: FONT,
        fontWeight: "var(--font-weight-medium)",
        fontSize: `${Math.round(size * 0.42)}px`,
      }}
    >
      {initials}
    </div>
  );
}

/* ===========================================================================
 * § 9  CellText — Shared table cell text wrapper
 * =========================================================================== */

/** Truncating text span for table cells — all tables reuse this. */
export function CellText({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <span
      style={{
        fontFamily: FONT,
        color: "var(--text-secondary)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/* ===========================================================================
 * § 10  SectionHeader — Compact uppercase section label
 * =========================================================================== */

/**
 * Uppercase section label with optional count badge and trailing extra content.
 * Used in modal overview tabs, detail sections, etc.
 */
export function SectionHeader({
  label,
  extra,
  count,
}: {
  label: string;
  extra?: ReactNode;
  count?: number;
}) {
  return (
    <div
      className="flex items-center justify-between"
      style={{ marginBottom: "var(--spacing-1-5)" }}
    >
      <div className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
        <span style={TEXT.sectionLabel}>{label}</span>
        {count !== undefined && (
          <span
            className="inline-flex items-center justify-center rounded-full"
            style={{
              minWidth: "20px",
              height: "18px",
              padding: "0 var(--spacing-1-5)",
              background: "var(--surface-secondary)",
              border: "1px solid var(--border)",
              fontFamily: FONT,
              fontWeight: "var(--font-weight-semibold)",
              fontSize: "var(--text-caption)",
              color: "var(--text-secondary)",
              lineHeight: "normal",
            }}
          >
            {count}
          </span>
        )}
      </div>
      {extra}
    </div>
  );
}

/* ===========================================================================
 * § 11  EmptyState — Shared empty-data illustration
 * =========================================================================== */

/**
 * Centered empty-state block with icon, title, and subtitle.
 * `label` is the entity name (e.g. "transactions", "serial units").
 * Pass a custom `icon` to override the default PackageSearch.
 */
export function EmptyState({
  label = "results",
  title,
  subtitle,
  icon,
}: {
  label?: string;
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        padding: "var(--spacing-6) var(--spacing-4)",
        minHeight: "280px",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "var(--primary-50)",
          marginBottom: "var(--spacing-4)",
        }}
      >
        {icon ?? (
          <PackageSearch
            size={28}
            style={{ color: "var(--primary)" }}
            aria-hidden="true"
          />
        )}
      </div>
      <p
        style={{
          fontSize: "var(--text-base)",
          fontWeight: "var(--font-weight-medium)",
          color: "var(--foreground)",
          fontFamily: FONT,
          margin: "0 0 var(--spacing-1) 0",
        }}
      >
        {title ?? `No ${label} found`}
      </p>
      <p
        style={{
          fontSize: "var(--text-label)",
          fontWeight: "var(--font-weight-normal)",
          color: "var(--text-secondary)",
          fontFamily: FONT,
          margin: 0,
        }}
      >
        {subtitle ?? "Try adjusting your search or filter criteria"}
      </p>
    </div>
  );
}

/* ===========================================================================
 * § 12  TablePagination — Shared pagination bar
 * =========================================================================== */

export interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  recordsPerPage: number;
  onPageChange: (page: number) => void;
  onRecordsPerPageChange: (rpp: number) => void;
  /** Override the page-size options (defaults to RECORDS_PER_PAGE_OPTIONS). */
  pageSizeOptions?: readonly number[];
}

/**
 * Full-width pagination bar with records-per-page selector + page buttons.
 * Drop-in replacement for every local Pagination function in the codebase.
 */
export function TablePagination({
  currentPage,
  totalPages,
  recordsPerPage,
  onPageChange,
  onRecordsPerPageChange,
  pageSizeOptions = RECORDS_PER_PAGE_OPTIONS,
}: TablePaginationProps) {
  return (
    <div
      className="flex items-center justify-between px-4 border-t border-border"
      style={{ height: "48px", background: "var(--background)" }}
    >
      {/* ── Left: records-per-page ── */}
      <div className="flex items-center gap-2">
        <span
          style={{
            fontSize: "var(--text-label)",
            color: "var(--text-secondary)",
            fontFamily: FONT,
          }}
        >
          Records per page
        </span>
        <select
          className="rounded-md border border-border px-2 py-1 transition-colors hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          style={{
            fontSize: "var(--text-label)",
            background: "var(--background)",
            color: "var(--foreground)",
            fontFamily: FONT,
            height: "30px",
            cursor: "pointer",
          }}
          value={recordsPerPage}
          onChange={(e) => onRecordsPerPageChange(Number(e.target.value))}
          aria-label="Records per page"
        >
          {pageSizeOptions.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      {/* ── Right: page buttons ── */}
      <div className="flex items-center gap-1">
        {/* First */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center rounded-md transition-all duration-150 hover:bg-secondary disabled:opacity-40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          style={{
            width: "32px",
            height: "32px",
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
          aria-label="First page"
        >
          <ChevronsLeft
            size={16}
            style={{ color: "var(--text-secondary)" }}
          />
        </button>

        {/* Prev */}
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="flex items-center gap-1 rounded-md transition-all duration-150 hover:bg-secondary disabled:opacity-40 px-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          style={{
            height: "32px",
            cursor: "pointer",
            fontSize: "var(--text-label)",
            color: "var(--text-secondary)",
            background: "transparent",
            border: "none",
            fontFamily: FONT,
          }}
          aria-label="Previous page"
        >
          <ChevronLeft size={14} /> Prev
        </button>

        {/* Page numbers */}
        {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
          const pageNum = i + 1;
          const isCurrent = currentPage === pageNum;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className="flex items-center justify-center rounded-md transition-all duration-150 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              style={{
                width: "32px",
                height: "32px",
                cursor: "pointer",
                background: isCurrent ? "var(--primary)" : "transparent",
                color: isCurrent
                  ? "var(--primary-foreground)"
                  : "var(--text-secondary)",
                fontWeight: isCurrent
                  ? "var(--font-weight-semibold)"
                  : "var(--font-weight-normal)",
                fontSize: "var(--text-label)",
                border: "none",
                borderRadius: "var(--radius-sm)",
                fontFamily: FONT,
              }}
              aria-label={`Page ${pageNum}`}
              aria-current={isCurrent ? "page" : undefined}
            >
              {pageNum}
            </button>
          );
        })}
        {totalPages > 5 && (
          <span
            style={{
              color: "var(--text-tertiary)",
              fontSize: "var(--text-label)",
              padding: "0 var(--spacing-1)",
            }}
          >
            ...
          </span>
        )}

        {/* Next */}
        <button
          onClick={() =>
            onPageChange(Math.min(totalPages, currentPage + 1))
          }
          disabled={currentPage === totalPages || totalPages === 0}
          className="flex items-center gap-1 rounded-md transition-all duration-150 hover:bg-secondary disabled:opacity-40 px-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          style={{
            height: "32px",
            cursor: "pointer",
            fontSize: "var(--text-label)",
            color: "var(--text-secondary)",
            background: "transparent",
            border: "none",
            fontFamily: FONT,
          }}
          aria-label="Next page"
        >
          Next <ChevronRight size={14} />
        </button>

        {/* Last */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages || totalPages === 0}
          className="flex items-center justify-center rounded-md transition-all duration-150 hover:bg-secondary disabled:opacity-40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          style={{
            width: "32px",
            height: "32px",
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
          aria-label="Last page"
        >
          <ChevronsRight
            size={16}
            style={{ color: "var(--text-secondary)" }}
          />
        </button>
      </div>
    </div>
  );
}

/* ===========================================================================
 * § 13  UTILITY FUNCTIONS
 * =========================================================================== */

/** Format a number as currency: `$ 1,234.56` or `-$ 180.00`. */
export function formatCurrency(val: number | null | undefined): string {
  if (val === null || val === undefined) return "-";
  const prefix = val < 0 ? "-" : "";
  return `${prefix}$ ${Math.abs(val).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

/** Clamp a number between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}