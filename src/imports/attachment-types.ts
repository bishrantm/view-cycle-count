import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import {
  Search,
  FileText,
  FileSpreadsheet,
  FileImage,
  File,
  FileArchive,
  Download,
  Eye,
  ExternalLink,
  Paperclip,
  User,
  MoreVertical,
  Upload,
  Library,
} from "lucide-react";

const font = "var(--font-family)";
const fontInter = "var(--font-family)";

/* ═════════════════════════════════════════════════════════════════════════════
 * § 0  TYPES & MOCK DATA
 * ═════════════════════════════════════════════════════════════════════════════ */

type FileType = "pdf" | "xlsx" | "docx" | "png" | "jpg" | "zip" | "csv";

type SourceType =
  | "Receiving"
  | "Consumption"
  | "Adjustment"
  | "Movement"
  | "Cycle Count"
  | "Manufactured"
  | "Item Library";

interface Attachment {
  id: string;
  fileName: string;
  fileType: FileType;
  fileSize: string;
  fileSizeBytes: number;
  uploadedDate: string;
  uploadedTime: string;
  uploadedBy: string;
  source: SourceType;
  linkedTransactionId: string | null;
  linkedTransactionLabel: string | null;
  description?: string;
}

const MOCK_ATTACHMENTS: Attachment[] = [
  // ── Receiving ──
  { id: "att-1", fileName: "PO-8842_Receiving_Report.pdf", fileType: "pdf", fileSize: "2.4 MB", fileSizeBytes: 2516582, uploadedDate: "01/15/2026", uploadedTime: "2:30 PM", uploadedBy: "Sarah Chen", source: "Receiving", linkedTransactionId: "TX-ABC456", linkedTransactionLabel: "TX-ABC456 · Receiving", description: "Purchase order receiving report with inspection notes" },
  { id: "att-2", fileName: "Inbound_QC_Checklist.xlsx", fileType: "xlsx", fileSize: "845 KB", fileSizeBytes: 865280, uploadedDate: "01/15/2026", uploadedTime: "2:35 PM", uploadedBy: "Sarah Chen", source: "Receiving", linkedTransactionId: "TX-ABC456", linkedTransactionLabel: "TX-ABC456 · Receiving", description: "Quality control checklist for inbound shipment" },
  { id: "att-3", fileName: "Supplier_COA_Batch_2026-A.pdf", fileType: "pdf", fileSize: "1.1 MB", fileSizeBytes: 1153434, uploadedDate: "01/12/2026", uploadedTime: "9:15 AM", uploadedBy: "James Wilson", source: "Receiving", linkedTransactionId: "TX-DEF789", linkedTransactionLabel: "TX-DEF789 · Receiving", description: "Certificate of Analysis from supplier" },
  { id: "att-4", fileName: "Receiving_Photo_Dock3.jpg", fileType: "jpg", fileSize: "3.8 MB", fileSizeBytes: 3984588, uploadedDate: "01/12/2026", uploadedTime: "9:20 AM", uploadedBy: "James Wilson", source: "Receiving", linkedTransactionId: "TX-DEF789", linkedTransactionLabel: "TX-DEF789 · Receiving" },

  // ── Cycle Count ──
  { id: "att-5", fileName: "CycleCount_ZoneA02_Report.pdf", fileType: "pdf", fileSize: "1.8 MB", fileSizeBytes: 1887437, uploadedDate: "01/10/2026", uploadedTime: "4:00 PM", uploadedBy: "Maria Garcia", source: "Cycle Count", linkedTransactionId: "CC-2025-047", linkedTransactionLabel: "CC-2025-047 · Cycle Count", description: "Final cycle count report with variance analysis" },
  { id: "att-6", fileName: "CycleCount_Variance_Analysis.xlsx", fileType: "xlsx", fileSize: "520 KB", fileSizeBytes: 532480, uploadedDate: "01/10/2026", uploadedTime: "4:05 PM", uploadedBy: "Maria Garcia", source: "Cycle Count", linkedTransactionId: "CC-2025-047", linkedTransactionLabel: "CC-2025-047 · Cycle Count" },
  { id: "att-7", fileName: "Discrepancy_Evidence_Photo.png", fileType: "png", fileSize: "4.2 MB", fileSizeBytes: 4404019, uploadedDate: "01/10/2026", uploadedTime: "4:10 PM", uploadedBy: "Maria Garcia", source: "Cycle Count", linkedTransactionId: "CC-2025-047", linkedTransactionLabel: "CC-2025-047 · Cycle Count", description: "Evidence photo for discrepancy investigation" },

  // ── Adjustment ──
  { id: "att-8", fileName: "Adjustment_Authorization_Form.pdf", fileType: "pdf", fileSize: "340 KB", fileSizeBytes: 348160, uploadedDate: "01/08/2026", uploadedTime: "11:20 AM", uploadedBy: "Daniel Adams", source: "Adjustment", linkedTransactionId: "TX-GHI012", linkedTransactionLabel: "TX-GHI012 · Adj. Increase", description: "Management authorization for inventory adjustment" },
  { id: "att-9", fileName: "Damaged_Items_Photos.zip", fileType: "zip", fileSize: "12.6 MB", fileSizeBytes: 13212057, uploadedDate: "01/05/2026", uploadedTime: "3:45 PM", uploadedBy: "Sarah Chen", source: "Adjustment", linkedTransactionId: "TX-JKL345", linkedTransactionLabel: "TX-JKL345 · Adj. Decrease", description: "Photo evidence of damaged items removed from inventory" },

  // ── Movement ──
  { id: "att-10", fileName: "Transfer_Manifest_ZoneB05.pdf", fileType: "pdf", fileSize: "890 KB", fileSizeBytes: 911360, uploadedDate: "01/03/2026", uploadedTime: "10:00 AM", uploadedBy: "James Wilson", source: "Movement", linkedTransactionId: "TX-MNO678", linkedTransactionLabel: "TX-MNO678 · Movement (Pick)", description: "Transfer manifest for zone B05 stock movement" },
  { id: "att-11", fileName: "Movement_Confirmation.docx", fileType: "docx", fileSize: "256 KB", fileSizeBytes: 262144, uploadedDate: "01/03/2026", uploadedTime: "10:15 AM", uploadedBy: "James Wilson", source: "Movement", linkedTransactionId: "TX-MNO678", linkedTransactionLabel: "TX-MNO678 · Movement (Pick)" },

  // ── Consumption ──
  { id: "att-12", fileName: "WorkOrder_WO-4421_BOM.xlsx", fileType: "xlsx", fileSize: "1.3 MB", fileSizeBytes: 1363149, uploadedDate: "12/28/2025", uploadedTime: "8:30 AM", uploadedBy: "Maria Garcia", source: "Consumption", linkedTransactionId: "TX-PQR901", linkedTransactionLabel: "TX-PQR901 · Consumption", description: "Bill of Materials for work order consumption" },
  { id: "att-13", fileName: "Consumption_Log_Dec2025.csv", fileType: "csv", fileSize: "145 KB", fileSizeBytes: 148480, uploadedDate: "12/28/2025", uploadedTime: "8:35 AM", uploadedBy: "Maria Garcia", source: "Consumption", linkedTransactionId: "TX-PQR901", linkedTransactionLabel: "TX-PQR901 · Consumption" },

  // ── Manufactured ──
  { id: "att-14", fileName: "Production_Report_Batch44.pdf", fileType: "pdf", fileSize: "2.1 MB", fileSizeBytes: 2202009, uploadedDate: "12/20/2025", uploadedTime: "5:00 PM", uploadedBy: "Daniel Adams", source: "Manufactured", linkedTransactionId: "TX-STU234", linkedTransactionLabel: "TX-STU234 · Manufactured", description: "Production batch report with QC results" },

  // ── Item Library (attached directly to the item, not via a transaction) ──
  { id: "att-15", fileName: "Item_Specification_Sheet.pdf", fileType: "pdf", fileSize: "5.7 MB", fileSizeBytes: 5976883, uploadedDate: "11/01/2025", uploadedTime: "9:00 AM", uploadedBy: "Sarah Chen", source: "Item Library", linkedTransactionId: null, linkedTransactionLabel: null, description: "Master specification sheet for this inventory item" },
  { id: "att-16", fileName: "Safety_Data_Sheet_SDS.pdf", fileType: "pdf", fileSize: "1.9 MB", fileSizeBytes: 1992295, uploadedDate: "10/15/2025", uploadedTime: "11:00 AM", uploadedBy: "James Wilson", source: "Item Library", linkedTransactionId: null, linkedTransactionLabel: null, description: "Material safety data sheet" },
  { id: "att-17", fileName: "Part_Drawing_Rev_C.png", fileType: "png", fileSize: "8.3 MB", fileSizeBytes: 8703180, uploadedDate: "09/22/2025", uploadedTime: "2:00 PM", uploadedBy: "Daniel Adams", source: "Item Library", linkedTransactionId: null, linkedTransactionLabel: null, description: "Engineering drawing revision C" },
  { id: "att-18", fileName: "Vendor_Agreement_2025.docx", fileType: "docx", fileSize: "420 KB", fileSizeBytes: 430080, uploadedDate: "08/10/2025", uploadedTime: "3:30 PM", uploadedBy: "Sarah Chen", source: "Item Library", linkedTransactionId: null, linkedTransactionLabel: null, description: "Vendor supply agreement document" },
  { id: "att-19", fileName: "Compliance_Certificate.pdf", fileType: "pdf", fileSize: "980 KB", fileSizeBytes: 1003520, uploadedDate: "07/05/2025", uploadedTime: "1:15 PM", uploadedBy: "Maria Garcia", source: "Item Library", linkedTransactionId: null, linkedTransactionLabel: null, description: "Regulatory compliance certificate" },
  { id: "att-20", fileName: "Assembly_Instructions_v2.pdf", fileType: "pdf", fileSize: "3.2 MB", fileSizeBytes: 3355443, uploadedDate: "06/18/2025", uploadedTime: "10:45 AM", uploadedBy: "Daniel Adams", source: "Item Library", linkedTransactionId: null, linkedTransactionLabel: null, description: "Assembly and installation guide" },
];

/* ── Source metadata (colour + icon treatment per source type) ── */
const SOURCE_META: Record<SourceType, { color: string; bg: string; border: string }> = {
  Receiving:     { color: "#0d6e3f", bg: "#e9f8f1", border: "#a9e3c7" },
  Consumption:   { color: "#92400E", bg: "#FEF3C7", border: "#FCD34D" },
  Adjustment:    { color: "#1e40af", bg: "#DBEAFE", border: "#93C5FD" },
  Movement:      { color: "#6D28D9", bg: "#EDE9FE", border: "#C4B5FD" },
  "Cycle Count": { color: "#9A3412", bg: "#FFEDD5", border: "#FDBA74" },
  Manufactured:  { color: "#115E59", bg: "#CCFBF1", border: "#5EEAD4" },
  "Item Library":{ color: "var(--text-secondary)", bg: "var(--surface-secondary)", border: "var(--border)" },
};

/* ── File type icon helper ── */
function FileTypeIcon({ type, size = 16 }: { type: FileType; size?: number }) {
  const s = { flexShrink: 0 } as React.CSSProperties;
  switch (type) {
    case "pdf":  return <FileText size={size} style={{ ...s, color: "#DC2626" }} />;
    case "xlsx":
    case "csv":  return <FileSpreadsheet size={size} style={{ ...s, color: "#16A34A" }} />;
    case "docx": return <FileText size={size} style={{ ...s, color: "#2563EB" }} />;
    case "png":
    case "jpg":  return <FileImage size={size} style={{ ...s, color: "#7C3AED" }} />;
    case "zip":  return <FileArchive size={size} style={{ ...s, color: "#D97706" }} />;
    default:     return <File size={size} style={{ ...s, color: "var(--text-secondary)" }} />;
  }
}

function fileExtLabel(type: FileType): string {
  return type.toUpperCase();
}

/* ═════════════════════════════════════════════════════════════════════════════
 * § 1  SOURCE FILTER PILLS
 * ═════════════════════════════════════════════════════════════════════════════ */

type SourceFilter = "all" | SourceType;

const SOURCE_FILTERS: { key: SourceFilter; label: string }[] = [
  { key: "all",           label: "All Files" },
  { key: "Item Library",  label: "Item Library" },
  { key: "Receiving",     label: "Receiving" },
  { key: "Cycle Count",   label: "Cycle Count" },
  { key: "Adjustment",    label: "Adjustment" },
  { key: "Movement",      label: "Movement" },
  { key: "Consumption",   label: "Consumption" },
  { key: "Manufactured",  label: "Manufactured" },
];

function SourceFilterBar({
  active,
  onChange,
  counts,
}: {
  active: SourceFilter;
  onChange: (f: SourceFilter) => void;
  counts: Record<SourceFilter, number>;
}) {
  return (
    <div className="flex items-center flex-wrap gap-2">
      {SOURCE_FILTERS.map((f) => {
        const isActive = active === f.key;
        const count = counts[f.key] ?? 0;
        if (f.key !== "all" && count === 0) return null;
        return (
          <button
            key={f.key}
            onClick={() => onChange(f.key)}
            className="inline-flex items-center gap-1.5 rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            style={{
              height: "30px",
              padding: count !== undefined ? "0 var(--spacing-2) 0 var(--spacing-3)" : "0 var(--spacing-3)",
              cursor: "pointer",
              background: isActive ? "var(--primary-50)" : "var(--background)",
              borderColor: isActive ? "var(--primary-600)" : "var(--border)",
              color: isActive ? "var(--primary)" : "var(--text-secondary)",
              fontSize: "var(--text-label)",
              fontFamily: font,
              fontWeight: "var(--font-weight-medium)" as any,
            }}
          >
            {f.label}
            <span
              className="flex items-center justify-center rounded-full"
              style={{
                minWidth: "20px",
                height: "20px",
                padding: "0 var(--spacing-1-5)",
                background: isActive ? "var(--primary-100)" : "var(--surface-secondary)",
                color: isActive ? "var(--primary-700)" : "var(--text-secondary)",
                fontSize: "var(--text-caption)",
                fontWeight: "var(--font-weight-semibold)" as any,
                fontFamily: fontInter,
              }}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════════════════
 * § 2  SUMMARY STATS BAR
 * ═════════════════════════════════════════════════════════════════════════════ */

function SummaryStatsBar({ items }: { items: Attachment[] }) {
  const totalSize = items.reduce((sum, a) => sum + a.fileSizeBytes, 0);
  const formatSize = (bytes: number) => {
    if (bytes >= 1073741824) return `${(bytes / 1073741824).toFixed(1)} GB`;
    if (bytes >= 1048576) return `${(bytes / 1048576).toFixed(1)} MB`;
    return `${(bytes / 1024).toFixed(0)} KB`;
  };

  const uniqueUploaders = new Set(items.map(a => a.uploadedBy)).size;
  const linkedCount = items.filter(a => a.linkedTransactionId).length;
  const itemLibraryCount = items.filter(a => a.source === "Item Library").length;

  return (
    <div
      className="flex items-center flex-wrap"
      style={{
        padding: "var(--spacing-2) var(--spacing-4)",
        borderBottom: "1px solid var(--border)",
        background: "var(--header-bg)",
        gap: "var(--spacing-5)",
      }}
    >
      <div className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
        <Paperclip size={13} style={{ color: "var(--text-tertiary)" }} />
        <span style={{ fontFamily: font, fontWeight: "var(--font-weight-normal)" as any, fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
          {items.length} file{items.length !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
        <Download size={13} style={{ color: "var(--text-tertiary)" }} />
        <span style={{ fontFamily: font, fontWeight: "var(--font-weight-normal)" as any, fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
          {formatSize(totalSize)} total
        </span>
      </div>
      <div className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
        <ExternalLink size={13} style={{ color: "var(--text-tertiary)" }} />
        <span style={{ fontFamily: font, fontWeight: "var(--font-weight-normal)" as any, fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
          {linkedCount} from transactions
        </span>
      </div>
      <div className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
        <Library size={13} style={{ color: "var(--text-tertiary)" }} />
        <span style={{ fontFamily: font, fontWeight: "var(--font-weight-normal)" as any, fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
          {itemLibraryCount} from Item Library
        </span>
      </div>
      <div className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
        <User size={13} style={{ color: "var(--text-tertiary)" }} />
        <span style={{ fontFamily: font, fontWeight: "var(--font-weight-normal)" as any, fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
          {uniqueUploaders} contributor{uniqueUploaders !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════════════════
 * § 3  THUMBNAIL CARD
 * ═════════════════════════════════════════════════════════════════════════════ */

/* Colour palette for the thumbnail preview area — soft pastels */
const THUMB_BG: Record<FileType, { bg: string; color: string; icon: React.ReactNode }> = {
  pdf:  { bg: "#FDF6F6", color: "#DC2626", icon: <FileText size={28} style={{ color: "#DC2626", opacity: 0.7 }} /> },
  xlsx: { bg: "#F4FAF6", color: "#16A34A", icon: <FileSpreadsheet size={28} style={{ color: "#16A34A", opacity: 0.7 }} /> },
  csv:  { bg: "#F4FAF6", color: "#16A34A", icon: <FileSpreadsheet size={28} style={{ color: "#16A34A", opacity: 0.7 }} /> },
  docx: { bg: "#F4F7FD", color: "#2563EB", icon: <FileText size={28} style={{ color: "#2563EB", opacity: 0.7 }} /> },
  png:  { bg: "#F8F5FD", color: "#7C3AED", icon: <FileImage size={28} style={{ color: "#7C3AED", opacity: 0.7 }} /> },
  jpg:  { bg: "#F8F5FD", color: "#7C3AED", icon: <FileImage size={28} style={{ color: "#7C3AED", opacity: 0.7 }} /> },
  zip:  { bg: "#FDF9F2", color: "#D97706", icon: <FileArchive size={28} style={{ color: "#D97706", opacity: 0.7 }} /> },
};

function ThumbnailCard({ att }: { att: Attachment }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tb = THUMB_BG[att.fileType] ?? { bg: "var(--surface-secondary)", color: "var(--text-secondary)", icon: <File size={28} style={{ color: "var(--text-secondary)" }} /> };
  const srcMeta = SOURCE_META[att.source];

  useEffect(() => {
    if (!menuOpen) return;
    function close(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [menuOpen]);

  const formatDate = (d: string, t: string) => {
    try {
      const [mm, dd, yyyy] = d.split("/");
      const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      return `${dd} ${months[parseInt(mm, 10) - 1]} ${yyyy}, ${t.toLowerCase()}`;
    } catch { return `${d}, ${t}`; }
  };

  return (
    <div
      className="relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "180px",
        borderRadius: "var(--radius-lg)",
        background: "var(--card)",
        border: `1px solid ${hovered ? "var(--primary-200)" : "var(--border)"}`,
        boxShadow: hovered ? "var(--elevation-card)" : "0px 1px 2px 0px rgba(16,24,40,0.04)",
        flexShrink: 0,
        transition: "border-color 0.15s ease, box-shadow 0.15s ease",
        cursor: "default",
      }}
    >
      {/* ── Thumbnail preview area ── */}
      <div
        className="relative shrink-0 w-full flex items-center justify-center"
        style={{
          height: "88px",
          background: tb.bg,
          borderTopLeftRadius: "calc(var(--radius-lg) - 1px)",
          borderTopRightRadius: "calc(var(--radius-lg) - 1px)",
          overflow: "hidden",
        }}
      >
        {tb.icon}
        {/* File extension badge */}
        <span
          className="absolute"
          style={{
            top: "var(--spacing-1-5)",
            right: "var(--spacing-1-5)",
            padding: "1px var(--spacing-1)",
            borderRadius: "var(--radius-xs)",
            background: "rgba(255,255,255,0.88)",
            border: "1px solid var(--border)",
            fontFamily: fontInter,
            fontWeight: "var(--font-weight-semibold)" as any,
            fontSize: "9px",
            color: tb.color,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {fileExtLabel(att.fileType)}
        </span>
      </div>

      {/* ── Source pill — sits between preview and info ── */}
      <div style={{ padding: "var(--spacing-1-5) var(--spacing-2) 0" }}>
        {att.linkedTransactionId ? (
          <a
            href="#"
            className="inline-flex items-center"
            onClick={(e) => e.preventDefault()}
            style={{
              maxWidth: "100%",
              padding: "1px var(--spacing-1-5)",
              borderRadius: "9999px",
              background: "var(--surface-secondary)",
              border: "1px solid var(--border)",
              fontFamily: font,
              fontWeight: "var(--font-weight-medium)" as any,
              fontSize: "var(--text-badge)",
              color: "var(--text-secondary)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              gap: "var(--spacing-0-5)",
              textDecoration: "none",
              transition: "background 0.15s ease, border-color 0.15s ease, color 0.15s ease",
            }}
            title={att.linkedTransactionLabel ?? att.linkedTransactionId}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--primary-50)";
              e.currentTarget.style.borderColor = "var(--primary-200)";
              e.currentTarget.style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--surface-secondary)";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <ExternalLink size={9} style={{ flexShrink: 0, marginRight: "2px" }} />
            {att.linkedTransactionId}
          </a>
        ) : (
          <span
            className="inline-flex items-center"
            style={{
              padding: "1px var(--spacing-1-5)",
              borderRadius: "9999px",
              background: srcMeta.bg,
              border: `1px solid ${srcMeta.border}`,
              fontFamily: font,
              fontWeight: "var(--font-weight-medium)" as any,
              fontSize: "var(--text-badge)",
              color: srcMeta.color,
              whiteSpace: "nowrap",
              gap: "var(--spacing-0-5)",
            }}
          >
            <Library size={9} style={{ flexShrink: 0 }} />
            Item Library
          </span>
        )}
      </div>

      {/* ── File name + date + actions ── */}
      <div
        className="flex items-start w-full"
        style={{ padding: "var(--spacing-1-5) var(--spacing-2) var(--spacing-2)", gap: "var(--spacing-1)" }}
      >
        <div className="flex flex-col flex-1 min-w-0" style={{ gap: "2px" }}>
          <p
            className="overflow-hidden"
            style={{
              fontFamily: font,
              fontWeight: "var(--font-weight-medium)" as any,
              fontSize: "var(--text-label)",
              color: "var(--foreground)",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              margin: 0,
              lineHeight: 1.3,
            }}
            title={att.fileName}
          >
            {att.fileName}
          </p>
          <p
            className="overflow-hidden"
            style={{
              fontFamily: font,
              fontWeight: "var(--font-weight-normal)" as any,
              fontSize: "var(--text-caption)",
              color: "var(--text-tertiary)",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {formatDate(att.uploadedDate, att.uploadedTime)}
          </p>
          <p
            className="overflow-hidden"
            style={{
              fontFamily: font,
              fontWeight: "var(--font-weight-normal)" as any,
              fontSize: "var(--text-badge)",
              color: "var(--text-tertiary)",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {att.fileSize} · {att.uploadedBy}
          </p>
        </div>

        {/* More vert menu */}
        <div ref={menuRef} className="relative shrink-0" style={{ marginTop: "1px" }}>
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="flex items-center justify-center transition-colors hover:bg-secondary"
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "var(--radius-xs)",
              cursor: "pointer",
              border: "none",
              background: "transparent",
            }}
          >
            <MoreVertical size={14} style={{ color: "var(--text-secondary)" }} />
          </button>
          {menuOpen && (
            <div
              className="absolute z-50 border border-border"
              style={{
                top: "calc(100% + 2px)",
                right: 0,
                minWidth: "120px",
                borderRadius: "var(--radius-md)",
                background: "var(--card)",
                boxShadow: "var(--elevation-card)",
                padding: "var(--spacing-1)",
              }}
            >
              {[
                { label: "Preview", icon: <Eye size={13} style={{ color: "var(--text-secondary)" }} /> },
                { label: "Download", icon: <Download size={13} style={{ color: "var(--text-secondary)" }} /> },
              ].map((item) => (
                <button
                  key={item.label}
                  className="flex items-center w-full transition-colors hover:bg-secondary"
                  style={{
                    height: "30px",
                    padding: "0 var(--spacing-2)",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    border: "none",
                    background: "transparent",
                    gap: "var(--spacing-1-5)",
                    fontFamily: font,
                    fontWeight: "var(--font-weight-medium)" as any,
                    fontSize: "var(--text-caption)",
                    color: "var(--foreground)",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════════════════
 * § 4  THUMBNAIL GRID
 * ═════════════════════════════════════════════════════════════════════════════ */

function ThumbnailGrid({ items }: { items: Attachment[] }) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center" style={{ padding: "var(--spacing-8)", gap: "var(--spacing-2)" }}>
        <Paperclip size={32} style={{ color: "var(--text-tertiary)" }} />
        <span style={{ fontFamily: font, fontSize: "var(--text-label)", color: "var(--text-secondary)" }}>No attachments found</span>
        <span style={{ fontFamily: font, fontSize: "var(--text-caption)", color: "var(--text-tertiary)" }}>Try adjusting your search or filter</span>
      </div>
    );
  }

  return (
    <div
      className="flex flex-wrap"
      style={{ padding: "var(--spacing-4)", gap: "var(--spacing-3)" }}
    >
      {items.map((att) => (
        <ThumbnailCard key={att.id} att={att} />
      ))}
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════════════════
 * § 5  MAIN COMPONENT — AttachmentsTab
 * ═════════════════════════════════════════════════════════════════════════════ */

export function AttachmentsTab() {
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("all");

  const handleSearchChange = useCallback((v: string) => { setSearch(v); }, []);
  const handleSourceFilterChange = useCallback((f: SourceFilter) => { setSourceFilter(f); }, []);

  /* Filter logic */
  const filteredItems = useMemo(() => {
    let items = MOCK_ATTACHMENTS;
    if (sourceFilter !== "all") {
      items = items.filter((a) => a.source === sourceFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((a) =>
        a.fileName.toLowerCase().includes(q) ||
        a.uploadedBy.toLowerCase().includes(q) ||
        (a.linkedTransactionId?.toLowerCase().includes(q) ?? false) ||
        (a.description?.toLowerCase().includes(q) ?? false) ||
        a.source.toLowerCase().includes(q)
      );
    }
    return items;
  }, [search, sourceFilter]);

  /* Source counts (always computed against the search-filtered full set) */
  const sourceCounts = useMemo(() => {
    const searchFiltered = search.trim()
      ? MOCK_ATTACHMENTS.filter((a) => {
          const q = search.toLowerCase();
          return (
            a.fileName.toLowerCase().includes(q) ||
            a.uploadedBy.toLowerCase().includes(q) ||
            (a.linkedTransactionId?.toLowerCase().includes(q) ?? false) ||
            (a.description?.toLowerCase().includes(q) ?? false) ||
            a.source.toLowerCase().includes(q)
          );
        })
      : MOCK_ATTACHMENTS;

    const counts: Record<SourceFilter, number> = { all: searchFiltered.length } as any;
    SOURCE_FILTERS.forEach((f) => {
      if (f.key === "all") return;
      counts[f.key] = searchFiltered.filter((a) => a.source === f.key).length;
    });
    return counts;
  }, [search]);

  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border)",
        background: "var(--card)",
      }}
    >
      {/* Toolbar */}
      <div className="flex flex-col gap-3 p-4 pb-3">
        {/* Row 1: Search + Upload button */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative flex-1" style={{ maxWidth: "500px" }}>
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--text-secondary)" }}
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Search files, transactions..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              style={{
                height: "38px",
                paddingLeft: "36px",
                paddingRight: "12px",
                fontFamily: font,
                fontWeight: "var(--font-weight-normal)" as any,
                fontSize: "var(--text-body-sm)",
                color: "var(--foreground)",
                background: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                boxShadow: "var(--elevation-xs)",
              }}
            />
          </div>

          {/* Upload button */}
          <button
            className="flex items-center border border-border transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            style={{
              height: "38px",
              padding: "0 var(--spacing-3)",
              borderRadius: "var(--radius-sm)",
              background: "var(--background)",
              cursor: "pointer",
              gap: "var(--spacing-1-5)",
              fontFamily: font,
              fontWeight: "var(--font-weight-semibold)" as any,
              fontSize: "var(--text-label)",
              color: "var(--text-secondary)",
              boxShadow: "var(--elevation-xs)",
            }}
          >
            <Upload size={14} style={{ color: "var(--text-secondary)" }} />
            Upload File
          </button>
        </div>

        {/* Source filter pills */}
        <SourceFilterBar active={sourceFilter} onChange={handleSourceFilterChange} counts={sourceCounts} />
      </div>

      {/* Summary stats */}
      <SummaryStatsBar items={filteredItems} />

      {/* Thumbnail grid */}
      <ThumbnailGrid items={filteredItems} />
    </div>
  );
}