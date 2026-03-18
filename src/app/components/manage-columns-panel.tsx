import React, { useState } from "react";
import {
  Search,
  LayoutGrid,
  Eye,
  EyeOff,
  GripVertical,
  X,
  RotateCcw,
} from "lucide-react";
import { FONT } from "../../imports/shared-ui";
import { type DragColumnDef } from "./draggable-column-system";
import { LOCKED_COLUMNS } from "./data";
import { filterColumnsBySearch, formatColumnsVisibleLabel } from "./logic";

// ─── Manage Columns Panel ───────────────────────────────────────────────────

export interface ManageColumnsPanelProps {
  columns: DragColumnDef[];
  hiddenColumns: Set<string>;
  onToggleVisibility: (key: string) => void;
  onReorder: (columns: DragColumnDef[]) => void;
  onReset: () => void;
  onClose: () => void;
}

export function ManageColumnsPanel({
  columns,
  hiddenColumns,
  onToggleVisibility,
  onReorder,
  onReset,
  onClose,
}: ManageColumnsPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [overIdx, setOverIdx] = useState<number | null>(null);

  const visibleCount = columns.filter((c) => !hiddenColumns.has(c.key)).length;
  const totalCount = columns.length;

  const filteredColumns = filterColumnsBySearch(columns, searchQuery);

  const handleDragStart = (e: React.DragEvent, idx: number) => {
    setDragIdx(idx);
    e.dataTransfer.effectAllowed = "move";
    // set a transparent drag image
    const el = document.createElement("div");
    el.style.position = "absolute";
    el.style.top = "-1000px";
    document.body.appendChild(el);
    e.dataTransfer.setDragImage(el, 0, 0);
    setTimeout(() => document.body.removeChild(el), 0);
  };

  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setOverIdx(idx);
  };

  const handleDrop = (e: React.DragEvent, dropIdx: number) => {
    e.preventDefault();
    if (dragIdx !== null && dragIdx !== dropIdx) {
      const next = [...columns];
      const [moved] = next.splice(dragIdx, 1);
      next.splice(dropIdx, 0, moved);
      onReorder(next);
    }
    setDragIdx(null);
    setOverIdx(null);
  };

  const handleDragEnd = () => {
    setDragIdx(null);
    setOverIdx(null);
  };

  return (
    <div
      style={{
        width: "280px",
        minWidth: "280px",
        borderLeft: "1px solid var(--border)",
        background: "var(--card)",
        display: "flex",
        flexDirection: "column",
        fontFamily: FONT,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "var(--spacing-3-5) var(--spacing-4) var(--spacing-2-5) var(--spacing-4)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="flex items-center justify-between" style={{ marginBottom: "var(--spacing-2)" }}>
          <div className="flex items-center gap-2">
            <LayoutGrid size={16} style={{ color: "var(--text-secondary)" }} />
            <span
              style={{
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)",
                fontFamily: FONT,
              }}
            >
              Manage Columns
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onReset}
              className="flex items-center gap-1 transition-colors hover:opacity-80"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "var(--text-caption)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--primary)",
                fontFamily: FONT,
                padding: 0,
              }}
            >
              <RotateCcw size={12} />
              Reset
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center rounded-md transition-colors hover:bg-secondary"
              style={{
                width: "24px",
                height: "24px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Close manage columns"
            >
              <X size={14} style={{ color: "var(--text-secondary)" }} />
            </button>
          </div>
        </div>
        <p
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-normal)",
            color: "var(--text-tertiary)",
            margin: 0,
            fontFamily: FONT,
          }}
        >
          Drag to reorder · Toggle eye to show/hide
        </p>
      </div>

      {/* Search */}
      <div style={{ padding: "var(--spacing-2-5) var(--spacing-4) var(--spacing-2) var(--spacing-4)" }}>
        <div className="relative">
          <Search
            size={14}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: "var(--text-tertiary)" }}
          />
          <input
            type="text"
            placeholder="Search columns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-ring/30"
            style={{
              height: "32px",
              paddingLeft: "30px",
              paddingRight: "var(--spacing-2-5)",
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-normal)",
              fontFamily: FONT,
              color: "var(--foreground)",
              background: "var(--background)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
            }}
          />
        </div>
      </div>

      {/* Column list */}
      <div
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-auto-hide"
        style={{ padding: "var(--spacing-1) 0" }}
      >
        {/* Locked columns */}
        {!searchQuery &&
          LOCKED_COLUMNS.filter((c) => c.key !== "expand").map((col) => (
            <div
              key={col.key}
              className="flex items-center gap-2"
              style={{
                height: "36px",
                padding: "0 var(--spacing-4)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.5 }}>
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--foreground)",
                  fontFamily: FONT,
                  flex: 1,
                }}
              >
                {col.label}
              </span>
              <span
                style={{
                  fontSize: "var(--text-micro)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--text-tertiary)",
                  fontFamily: FONT,
                  letterSpacing: "var(--tracking-wider)",
                  textTransform: "uppercase",
                }}
              >
                LOCKED LEFT
              </span>
              <Eye size={16} style={{ color: "var(--text-tertiary)", flexShrink: 0, opacity: 0.4 }} />
            </div>
          ))}

        {/* Separator + label */}
        {!searchQuery && (
          <div style={{ padding: "var(--spacing-2) var(--spacing-4) var(--spacing-1) var(--spacing-4)" }}>
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--text-tertiary)",
                fontFamily: FONT,
                letterSpacing: "var(--tracking-widest)",
                textTransform: "uppercase",
              }}
            >
              REORDERABLE
            </span>
          </div>
        )}

        {/* Draggable columns */}
        {filteredColumns.map((col, idx) => {
          const isHidden = hiddenColumns.has(col.key);
          const isDragging = dragIdx === columns.indexOf(col);
          const isOver = overIdx === columns.indexOf(col) && dragIdx !== null && dragIdx !== columns.indexOf(col);
          const realIdx = columns.indexOf(col);

          return (
            <div
              key={col.key}
              draggable={!searchQuery}
              onDragStart={(e) => handleDragStart(e, realIdx)}
              onDragOver={(e) => handleDragOver(e, realIdx)}
              onDrop={(e) => handleDrop(e, realIdx)}
              onDragEnd={handleDragEnd}
              className="flex items-center gap-2 transition-colors"
              style={{
                height: "36px",
                padding: "0 var(--spacing-4)",
                cursor: searchQuery ? "default" : "grab",
                background: isDragging
                  ? "var(--primary-50)"
                  : isOver
                  ? "var(--surface-secondary)"
                  : "transparent",
                opacity: isDragging ? 0.6 : 1,
                borderTop: isOver ? "2px solid var(--primary)" : "2px solid transparent",
              }}
            >
              {!searchQuery && (
                <GripVertical
                  size={14}
                  style={{ color: "var(--text-tertiary)", flexShrink: 0 }}
                />
              )}
              <span
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-medium)",
                  color: isHidden ? "var(--text-tertiary)" : "var(--foreground)",
                  fontFamily: FONT,
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {col.label}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleVisibility(col.key);
                }}
                className="flex items-center justify-center rounded-md transition-colors hover:bg-secondary"
                style={{
                  width: "28px",
                  height: "28px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
                aria-label={isHidden ? `Show ${col.label}` : `Hide ${col.label}`}
              >
                {isHidden ? (
                  <EyeOff size={16} style={{ color: "var(--text-tertiary)" }} />
                ) : (
                  <Eye size={16} style={{ color: "var(--primary)" }} />
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "var(--spacing-2-5) var(--spacing-4)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <span
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-normal)",
            color: "var(--text-tertiary)",
            fontFamily: FONT,
          }}
        >
          {formatColumnsVisibleLabel(visibleCount, totalCount)}
        </span>
      </div>
    </div>
  );
}