import React, { useState, useEffect, useRef, useCallback, type ReactNode, type CSSProperties } from "react";
import { CountMethodModal } from "./count-method-modal";
import CreateCycleCount from "./create-cycle-count";
import type { CountBasis } from "./cycle-count-data";
import {
  Search,
  SlidersHorizontal,
  Plus,
  MoreHorizontal,
  ChevronDown,
  ListFilter,
  RefreshCcw,
  LayoutGrid,
  AlignJustify,
  Check,
  EyeOff,
  Play,
  Trash2,
  Copy,
  FileText,
  Printer,
  UserPlus,
  XCircle,

  PackageSearch,
  X,
  RotateCcw,
  Minus,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { StatusBadge } from "./status-badge";
import { ManageColumnsPanel } from "./manage-columns-panel";
import { useInsights, InsightsToggleButton, InsightsSection, InsightsDrawer } from "./insights-feature";
import { TableLoadingSkeleton, EmptyState, CellText, OverflowHint, AssigneeOverflowPopover } from "./list-table-helpers";
import { useCycleCountStore, type CycleCount } from "./cycle-count-store";
import { showToast } from "./custom-toast";
import { FONT, TablePagination } from "../../imports/shared-ui";
import {
  useColumnReorder,
  ColumnHeader,
  ColumnBodyCell,
  ColumnDragPreview,
  injectDragKeyframes,
  type DragColumnDef,
} from "./draggable-column-system";
import {
  type QuickFilter,
  type ViewMode,
  LIST_PAGE_LABELS,
  RECORDS_PER_PAGE_OPTIONS,
  ROW_ACTION_LABELS,
  VIEW_MODE_OPTIONS as viewModeOptions,
  DENSITY_CONFIG as densityConfig,
  EXPAND_COL_W,
  ID_COL_W,
  CB_COL_W,
  ACTION_COL_W,
  COL_MIN_W,
  COL_MAX_W,
  DEFAULT_TABLE_COLUMNS,
  LOCKED_COLUMNS,
  STICKY_HEADER_LABELS,
  INSIGHT_CATEGORIES,
} from "./data";
import {
  filterCycleCounts,
  computeFilterCounts,
  buildQuickFilters,
  computeTotalPages,
  paginateItems,
  computeDiscrepancy,
  getInitials,
  isErrorStatus,
  isHighPriority,
  formatColumnsVisibleLabel,
  filterColumnsBySearch,
} from "./logic";


/* ═════════════════════════════════════════════════════════════════════════════
 * § 1  HOOKS
 * ═════════════════════════════════════════════════════════════════════════════ */

// ─── Column Resize Hook (by index) ─────────────────────────────────────────
function useColumnResize(columns: DragColumnDef[]) {
  const [widths, setWidths] = useState<Record<string, number>>(() => {
    const m: Record<string, number> = {};
    if (!columns) return m;
    for (let i = 0; i < columns.length; i++) {
      const c = columns[i];
      if (c != null && typeof c === "object" && "key" in c) {
        m[c.key] = c.width;
      }
    }
    return m;
  });
  const dragRef = useRef<{
    key: string;
    startX: number;
    startW: number;
  } | null>(null);

  const onResizeStart = useCallback((e: React.MouseEvent, colIndex: number, cols: DragColumnDef[]) => {
    e.preventDefault();
    e.stopPropagation();
    const col = cols[colIndex];
    if (!col) return;
    const key = col.key;
    dragRef.current = { key, startX: e.clientX, startW: widths[key] ?? col.width };

    const onMouseMove = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      const delta = ev.clientX - dragRef.current.startX;
      const newW = Math.min(COL_MAX_W, Math.max(COL_MIN_W, dragRef.current.startW + delta));
      setWidths((prev) => ({ ...prev, [dragRef.current!.key]: newW }));
    };

    const onMouseUp = () => {
      dragRef.current = null;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, [widths]);

  return { widths, onResizeStart };
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 2  PAGE HEADER
 * ═════════════════════════════════════════════════════════════════════════════ */

function PageHeader({ onCreateNew }: { onCreateNew: () => void }) {
  return (
    <div className="shrink-0" style={{ background: "var(--background)" }}>
      <div
        className="flex items-center justify-between"
        style={{ padding: "18px var(--spacing-6) 18px var(--spacing-6)" }}
      >
        {/* Title + Subtitle */}
        <div className="flex items-center" style={{ gap: "var(--spacing-2-5)" }}>
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "calc(var(--radius) + 2px)",
              background: "var(--primary-50)",
              padding: "var(--spacing-2)",
            }}
          >
            <RefreshCcw size={20} style={{ color: "var(--primary)" }} aria-hidden="true" />
          </div>
          <div className="flex flex-col" style={{ gap: "var(--spacing-1)", minWidth: 0 }}>
            <p
              style={{
                fontSize: "var(--text-h5)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--foreground)",
                margin: 0,
                fontFamily: FONT,
                letterSpacing: "var(--tracking-tight)",
              }}
            >
              {LIST_PAGE_LABELS.title}
            </p>
            <p
              style={{
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--text-secondary)",
                margin: 0,
                fontFamily: FONT,
              }}
            >
              {LIST_PAGE_LABELS.subtitle}
            </p>
          </div>
        </div>

        {/* Create Button */}
        <button
          onClick={onCreateNew}
          className="flex items-center shrink-0 gap-1.5 transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          style={{
            height: "36px",
            paddingLeft: "14px",
            paddingRight: "16px",
            borderRadius: "calc(var(--radius) - 4px)",
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            border: "none",
            cursor: "pointer",
            boxShadow: "var(--elevation-card)",
          }}
        >
          <Plus size={18} aria-hidden="true" />
          <span
            style={{
              fontSize: "var(--text-label)",
              fontWeight: "var(--font-weight-semibold)",
              lineHeight: "var(--leading-20)",
              letterSpacing: "var(--tracking-wide)",
              fontFamily: FONT,
              whiteSpace: "nowrap",
            }}
          >
            {LIST_PAGE_LABELS.createButton}
          </span>
        </button>
      </div>
    </div>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 3  TOOLBAR – Search Bar
 * ═════════════════════════════════════════════════════════════════════════════ */

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative flex-1" style={{ maxWidth: "500px" }}>
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: "var(--text-secondary)" }}
        aria-hidden="true"
      />
      <input
        type="text"
        placeholder="Search Part No., Description, Category, Location, Assignee"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
        style={{
          height: "38px",
          paddingLeft: "36px",
          paddingRight: "12px",
          fontSize: "var(--text-body-sm)",
          fontWeight: "var(--font-weight-normal)",
          fontFamily: FONT,
          color: "var(--foreground)",
          background: "var(--background)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-sm)",
          boxShadow: "var(--elevation-xs)",
        }}
      />
    </div>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 4  TOOLBAR – Right-side action controls
 *      (Insights toggle · View mode dropdown · Column count badge)
 * ═════════════════════════════════════════════════════════════════════════════ */

function ToolbarActions({
  insights,
  viewMode,
  setViewMode,
  visibleColumnCount,
  showManageColumns,
  onToggleManageColumns,
}: {
  insights: ReturnType<typeof useInsights>;
  viewMode: ViewMode;
  setViewMode: (v: ViewMode) => void;
  visibleColumnCount: number;
  showManageColumns: boolean;
  onToggleManageColumns: () => void;
}) {
  return (
    <div className="ml-auto flex items-center gap-2">
      {/* Insights toggle */}
      <InsightsToggleButton
        isOpen={insights.isDrawerOpen}
        activeCount={insights.activeCount}
        onClick={insights.toggleDrawer}
      />

      {/* View mode dropdown */}
      <ViewModeDropdown viewMode={viewMode} setViewMode={setViewMode} />

      {/* Column count badge – toggles Manage Columns panel */}
      <button
        onClick={onToggleManageColumns}
        className="flex items-center gap-2 border transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        style={{
          height: "38px",
          padding: "0 var(--spacing-2-5)",
          cursor: "pointer",
          borderRadius: "var(--radius-sm)",
          background: showManageColumns ? "var(--primary-50)" : "var(--background)",
          borderColor: showManageColumns ? "var(--primary-200)" : "var(--border)",
          boxShadow: "var(--elevation-xs)",
        }}
        aria-label="Manage columns"
        aria-pressed={showManageColumns}
      >
        <LayoutGrid size={16} style={{ color: showManageColumns ? "var(--primary)" : "var(--text-secondary)" }} aria-hidden="true" />
        <span
          style={{
            fontSize: "var(--text-label)",
            fontWeight: "var(--font-weight-medium)",
            color: showManageColumns ? "var(--primary)" : "var(--foreground)",
            fontFamily: FONT,
            whiteSpace: "nowrap",
          }}
        >
          Columns
        </span>
        <span
          className="flex items-center justify-center rounded-full"
          style={{
            minWidth: "22px",
            height: "22px",
            padding: "0 var(--spacing-1)",
            background: "var(--status-in-progress-bg)",
            color: "var(--status-in-progress-text)",
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-semibold)",
            fontFamily: FONT,
          }}
        >
          {visibleColumnCount + 3}
        </span>
      </button>
    </div>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 4a  View Mode Dropdown (sub-component of ToolbarActions)
 * ═════════════════════════════════════════════════════════════════════════════ */

function ViewModeDropdown({
  viewMode,
  setViewMode,
}: {
  viewMode: ViewMode;
  setViewMode: (v: ViewMode) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 border border-border transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          style={{
            height: "38px",
            padding: "0 var(--spacing-2-5)",
            cursor: "pointer",
            borderRadius: "var(--radius-sm)",
            background: "var(--background)",
            fontFamily: FONT,
            boxShadow: "var(--elevation-xs)",
          }}
          aria-label="Change view mode"
        >
          <AlignJustify size={16} style={{ color: "var(--text-secondary)" }} aria-hidden="true" />
          <span
            style={{
              fontSize: "var(--text-label)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--foreground)",
              whiteSpace: "nowrap",
            }}
          >
            {viewModeOptions.find((o) => o.value === viewMode)?.label ?? "Comfort"}
          </span>
          <ChevronDown size={14} style={{ color: "var(--text-tertiary)" }} aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" style={{ minWidth: "220px" }}>
        {viewModeOptions.map((option) => {
          const OptionIcon = option.icon;
          const isSelected = viewMode === option.value;
          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setViewMode(option.value)}
              className="flex items-center gap-3"
              style={{ padding: "var(--spacing-2) var(--spacing-3)" }}
            >
              <OptionIcon
                size={18}
                style={{ color: "var(--text-secondary)", flexShrink: 0 }}
                aria-hidden="true"
              />
              <div className="flex flex-col flex-1" style={{ gap: "1px" }}>
                <span
                  style={{
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--foreground)",
                    fontFamily: FONT,
                  }}
                >
                  {option.label}
                </span>
                <span
                  style={{
                    fontSize: "var(--text-caption)",
                    fontWeight: "var(--font-weight-normal)",
                    color: "var(--text-secondary)",
                    fontFamily: FONT,
                  }}
                >
                  {option.description}
                </span>
              </div>
              {isSelected && (
                <Check
                  size={16}
                  style={{ color: "var(--primary)", flexShrink: 0 }}
                  aria-hidden="true"
                />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 5  TOOLBAR – Quick Filter Pills
 * ═════════════════════════════════════════════════════════════════════════════ */

function QuickFilterBar({
  activeFilter,
  onFilterChange,
  filterCounts,
}: {
  activeFilter: QuickFilter;
  onFilterChange: (f: QuickFilter) => void;
  filterCounts: ReturnType<typeof computeFilterCounts>;
}) {
  const quickFilters = buildQuickFilters(filterCounts);

  return (
    <div className="flex items-center gap-2">
      {/* "Me mode" pill */}
      <button
        className="flex items-center gap-1.5 rounded-full border border-border px-3 transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        style={{
          height: "30px",
          cursor: "pointer",
          background: "var(--background)",
          fontSize: "var(--text-label)",
          color: "var(--text-secondary)",
          fontFamily: FONT,
        }}
      >
        <span
          className="flex items-center justify-center rounded-full"
          style={{
            width: "18px",
            height: "18px",
            background: "var(--primary-50)",
            color: "var(--primary)",
            fontSize: "var(--text-xs)",
            fontWeight: "var(--font-weight-semibold)",
            fontFamily: FONT,
          }}
        >
          AA
        </span>
        Me mode
      </button>

      {/* Divider */}
      <div
        style={{ width: "2px", height: "20px", background: "var(--border)", borderRadius: "1px" }}
        aria-hidden="true"
      />

      {/* Status filter pills */}
      {quickFilters.map((f) => {
        const isActive = activeFilter === f.key;
        return (
          <button
            key={f.key}
            onClick={() => onFilterChange(f.key)}
            className="flex items-center gap-1.5 rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            style={{
              height: "30px",
              padding: f.key === "all" ? "0 var(--spacing-3)" : "0 var(--spacing-2) 0 var(--spacing-3)",
              cursor: "pointer",
              background: isActive ? "var(--primary-50)" : "var(--background)",
              borderColor: isActive ? "var(--primary-600)" : "var(--border)",
              color: isActive ? "var(--primary)" : "var(--text-secondary)",
              fontSize: "var(--text-label)",
              fontFamily: FONT,
            }}
          >
            {f.label}
            {f.key !== "all" && (
              <span
                className="flex items-center justify-center rounded-full"
                style={{
                  minWidth: "20px",
                  height: "20px",
                  padding: "0 var(--spacing-1-5)",
                  background: isActive ? "var(--primary-100)" : "var(--secondary)",
                  color: isActive ? "var(--primary-700)" : "var(--text-secondary)",
                  fontSize: "var(--text-caption)",
                  fontWeight: "var(--font-weight-semibold)",
                  fontFamily: FONT,
                }}
              >
                {f.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 6  TABLE – Cell renderers
 * ═════════════════════════════════════════════════════════════════════════════ */

function renderCellValue(cc: CycleCount, colKey: string) {
  switch (colKey) {
    case "tags":
      return cc.tags.length > 0 ? (
        <div className="flex items-center gap-1.5" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          <span
            className="inline-flex items-center border border-border shrink-0"
            style={{
              borderRadius: "var(--radius-sm)",
              padding: "1px var(--spacing-2)",
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              background: "var(--background)",
              fontFamily: FONT,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            }}
          >
            {cc.tags[0]}
          </span>
          {cc.tags.length > 1 && <OverflowHint items={cc.tags} maxShow={1} variant="chip" label={`All Tags (${cc.tags.length})`} />}
        </div>
      ) : (
        <CellText>-</CellText>
      );
    case "items":
      return (
        <div className="flex items-center gap-1" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          <CellText style={{ flexShrink: 1, minWidth: 0 }}>{cc.items.slice(0, 2).join(", ")}</CellText>
          <OverflowHint items={cc.items} maxShow={2} label={`All Items (${cc.items.length})`} />
        </div>
      );
    case "categories":
      return (
        <div className="flex items-center gap-1" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          <CellText style={{ flexShrink: 1, minWidth: 0 }}>{cc.categories[0]}</CellText>
          <OverflowHint items={cc.categories} maxShow={1} label={`All Categories (${cc.categories.length})`} />
        </div>
      );
    case "locations":
      return (
        <div className="flex items-center gap-1" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          <CellText style={{ flexShrink: 1, minWidth: 0 }}>{cc.locations[0]}</CellText>
          <OverflowHint items={cc.locations} maxShow={1} label={`All Locations (${cc.locations.length})`} />
        </div>
      );
    case "status":
      return <StatusBadge status={cc.status} />;
    case "discrepancy": {
      const { value: discVal, label: discLabel, isMatch } = computeDiscrepancy(cc.actualCount, cc.systemCount);
      if (discVal === null) return <CellText>{"\u2014"}</CellText>;
      return (
        <span
          className="inline-flex items-center"
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-medium)",
            fontFamily: FONT,
            color: isMatch ? "var(--variance-match-text)" : "var(--variance-negative-text)",
            whiteSpace: "nowrap",
          }}
        >
          {discLabel}
        </span>
      );
    }
    case "assignees": {
      const assigneeList = (cc as any).assignees as string[] | undefined;
      const names = assigneeList && assigneeList.length > 0 ? assigneeList : cc.assignee ? [cc.assignee] : [];
      if (names.length === 0) return <CellText>—</CellText>;
      return (
        <div className="flex items-center gap-1" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          {names.slice(0, 2).map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-full shrink-0"
              style={{
                width: "22px",
                height: "22px",
                background: "var(--primary-50)",
                fontSize: "var(--text-badge)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--primary)",
                fontFamily: FONT,
                border: i > 0 ? "1px solid var(--card)" : "none",
                marginLeft: i > 0 ? "-6px" : "0",
              }}
              title={name}
            >
              {getInitials(name)}
            </div>
          ))}
          <CellText style={{ flexShrink: 1, minWidth: 0, marginLeft: "var(--spacing-1)" }}>
            {names[0]}
          </CellText>
          {names.length > 1 && <AssigneeOverflowPopover names={names} maxShow={1} />}
        </div>
      );
    }
    case "tolerance":
      return <CellText>{cc.tolerance}</CellText>;
    case "systemCount":
      return <CellText>{cc.systemCount}</CellText>;
    case "actualCount":
      return <CellText>{cc.actualCount ?? "—"}</CellText>;
    case "reported":
      return <CellText>{cc.reported ? "Yes" : ""}</CellText>;
    case "approved":
      return <CellText>{cc.approved ? "Yes" : ""}</CellText>;
    case "completedOn":
      return <CellText>{cc.completedOn ?? "—"}</CellText>;
    case "description":
      return <CellText>{cc.description}</CellText>;
    case "sampling":
      return <CellText>{cc.sampling}</CellText>;
    case "priority": {
      const isHigh = isHighPriority(cc.priority);
      const dotColor = isHigh ? "var(--destructive)" : cc.priority === "Standard" ? "var(--status-in-progress-text)" : "var(--text-tertiary)";
      const pillBg = isHigh ? "var(--status-cancelled-bg)" : cc.priority === "Standard" ? "var(--status-in-progress-bg)" : "var(--status-pending-bg)";
      const pillText = isHigh ? "var(--status-cancelled-text)" : cc.priority === "Standard" ? "var(--status-in-progress-text)" : "var(--status-pending-text)";
      const pillBorder = isHigh ? "var(--status-cancelled-border)" : cc.priority === "Standard" ? "var(--status-in-progress-border)" : "var(--status-pending-border)";
      const pillLabel = isHigh ? "High Priority" : cc.priority === "Low" ? "Low Priority" : cc.priority;
      return (
        <span
          className="chip chip-status"
          style={{ background: pillBg, color: pillText, borderColor: pillBorder }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "var(--radius-full)", background: dotColor, flexShrink: 0 }} />
          {pillLabel}
        </span>
      );
    }
    case "createdOn":
      return <CellText>{cc.createdOn}</CellText>;
    case "createdBy":
      return (
        <div className="flex items-center gap-1.5" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          <div
            className="flex items-center justify-center rounded-full shrink-0"
            style={{
              width: "20px",
              height: "20px",
              background: "var(--primary-50)",
              fontSize: "var(--text-badge)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--primary)",
              fontFamily: FONT,
            }}
          >
            {getInitials(cc.createdBy)}
          </div>
          <CellText style={{ flexShrink: 1, minWidth: 0 }}>{cc.createdBy}</CellText>
        </div>
      );
    case "startDate":
      return <CellText>{cc.startDate}</CellText>;
    case "dueDate":
      return <CellText>{cc.dueDate}</CellText>;
    default:
      return <CellText>—</CellText>;
  }
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 7  TABLE – Row action menu
 * ═════════════════════════════════════════════════════════════════════════════ */

function RowActions({ cc }: { cc: CycleCount }) {
  const isActive = cc.status === "pending" || cc.status === "in_progress" || cc.status === "awaiting_approval";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center justify-center rounded-md transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          style={{ width: "28px", height: "28px", cursor: "pointer", background: "transparent", border: "none" }}
          aria-label={`Actions for ${cc.id}`}
          onClick={(e) => e.stopPropagation()}
        >
          <MoreHorizontal size={16} style={{ color: "var(--text-secondary)" }} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
        {isActive && (
          <DropdownMenuItem onClick={() => {
            showToast({ title: "Change Assignee", description: `Open assignee selection for ${cc.id}.`, type: "info" });
          }}><UserPlus size={14} /> Change Assignee</DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => {
          showToast({ title: "Print Count Sheet", description: `Preparing count sheet for ${cc.id}.`, type: "info" });
        }}><Printer size={14} /> Print Count Sheet</DropdownMenuItem>
        {isActive && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={() => {
                showToast({ title: "Cancel Plan", description: `${cc.id} has been cancelled.`, type: "success" });
              }}
            ><XCircle size={14} /> Cancel Plan</DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 8  TABLE – Sticky header columns (Expand · ID · Count Basis)
 * ═════════════════════════════════════════════════════════════════════════════ */

function StickyHeaderCells({
  d,
  expandLeft,
  idLeft,
  cbLeft,
}: {
  d: (typeof densityConfig)[ViewMode];
  expandLeft: string;
  idLeft: string;
  cbLeft: string;
}) {
  return (
    <>
      {/* Expand */}
      <th
        className="border-b border-border"
        style={{
          position: "sticky",
          left: expandLeft,
          zIndex: 2,
          width: EXPAND_COL_W,
          minWidth: EXPAND_COL_W,
          height: d.headerHeight,
          background: "var(--surface-secondary)",
          padding: 0,
          textAlign: "center",
        }}
      >
        <Plus size={14} style={{ color: "var(--primary)", margin: "0 auto" }} aria-hidden="true" />
      </th>
      {/* ID */}
      <th
        className="border-b border-border"
        style={{
          position: "sticky",
          left: idLeft,
          zIndex: 2,
          width: ID_COL_W,
          minWidth: ID_COL_W,
          height: d.headerHeight,
          background: "var(--surface-secondary)",
          padding: "0 var(--spacing-3)",
          textAlign: "left",
        }}
      >
        <div className="flex items-center justify-between">
          <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secondary)", fontFamily: FONT }}>ID</span>
          <ListFilter size={12} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} aria-hidden="true" />
        </div>
      </th>
      {/* Count Basis */}
      <th
        className="border-b border-border"
        style={{
          position: "sticky",
          left: cbLeft,
          zIndex: 2,
          width: CB_COL_W,
          minWidth: CB_COL_W,
          height: d.headerHeight,
          background: "var(--surface-secondary)",
          padding: "0 var(--spacing-3)",
          textAlign: "left",
          boxShadow: "inset -1px 0 0 0 var(--border)",
        }}
      >
        <div className="flex items-center justify-between">
          <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secondary)", fontFamily: FONT }}>Count Basis</span>
          <ListFilter size={12} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} aria-hidden="true" />
        </div>
      </th>
    </>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 9  TABLE – Sticky body cells (Expand · ID · Count Basis)
 * ═════════════════════════════════════════════════════════════════════════════ */

function StickyBodyCells({
  cc,
  d,
  expandLeft,
  idLeft,
  cbLeft,
  isErrorRow,
}: {
  cc: CycleCount;
  d: (typeof densityConfig)[ViewMode];
  expandLeft: string;
  idLeft: string;
  cbLeft: string;
  isErrorRow: boolean;
}) {
  return (
    <>
      {/* Expand */}
      <td
        className="border-b border-border"
        style={{
          position: "sticky",
          left: expandLeft,
          zIndex: 1,
          width: EXPAND_COL_W,
          minWidth: EXPAND_COL_W,
          height: d.rowHeight,
          background: "inherit",
          padding: 0,
          textAlign: "center",
        }}
      >
        <button
          className="flex items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none mx-auto"
          style={{ width: "20px", height: "20px", borderColor: "var(--primary-200)", background: "var(--background)", cursor: "pointer" }}
          aria-label={`Expand ${cc.id}`}
        >
          <Plus size={10} style={{ color: "var(--primary)" }} />
        </button>
      </td>
      {/* ID */}
      <td
        className="border-b border-border"
        style={{
          position: "sticky",
          left: idLeft,
          zIndex: 1,
          width: ID_COL_W,
          minWidth: ID_COL_W,
          height: d.rowHeight,
          background: "inherit",
          padding: "0 var(--spacing-3)",
        }}
      >
        <span
          style={{
            fontSize: d.fontSize,
            fontWeight: "var(--font-weight-medium)",
            color: isErrorRow ? "var(--destructive)" : "var(--text-secondary)",
            fontFamily: FONT,
          }}
        >
          {cc.id}
        </span>
      </td>
      {/* Count Basis */}
      <td
        className="border-b border-border"
        style={{
          position: "sticky",
          left: cbLeft,
          zIndex: 1,
          width: CB_COL_W,
          minWidth: CB_COL_W,
          height: d.rowHeight,
          background: "inherit",
          padding: "0 var(--spacing-3)",
          boxShadow: "inset -1px 0 0 0 var(--border)",
        }}
      >
        <CellText style={{ fontSize: d.fontSize }}>{cc.countBasis}</CellText>
      </td>
    </>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 10  TABLE – Actions column (header + body)
 * ═════════════════════════════════════════════════════════════════════════════ */

function ActionsHeaderCell({ d }: { d: (typeof densityConfig)[ViewMode] }) {
  return (
    <th
      className="border-b border-border"
      style={{
        position: "sticky",
        right: 0,
        zIndex: 2,
        width: ACTION_COL_W,
        minWidth: ACTION_COL_W,
        height: d.headerHeight,
        background: "var(--surface-secondary)",
        padding: 0,
        textAlign: "center",
        boxShadow: "inset 1px 0 0 0 var(--border)",
      }}
    >
      <div className="flex items-center justify-center h-full">
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secondary)", fontFamily: FONT }}>Actions</span>
      </div>
    </th>
  );
}

function ActionsBodyCell({ cc, d }: { cc: CycleCount; d: (typeof densityConfig)[ViewMode] }) {
  return (
    <td
      className="border-b border-border"
      style={{
        position: "sticky",
        right: 0,
        zIndex: 1,
        width: ACTION_COL_W,
        minWidth: ACTION_COL_W,
        height: d.rowHeight,
        background: "inherit",
        padding: 0,
        boxShadow: "inset 1px 0 0 0 var(--border)",
      }}
    >
      <div className="flex items-center justify-center h-full">
        <RowActions cc={cc} />
      </div>
    </td>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 12  MAIN LIST COMPONENT
 * ═════════════════════════════════════════════════════════════════════════════ */

export default function CycleCountList() {
  const { cycleCounts } = useCycleCountStore();

  /* ── UI state ── */
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<QuickFilter>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("comfort");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [showManageColumns, setShowManageColumns] = useState(false);
  const [hiddenColumns, setHiddenColumns] = useState<Set<string>>(new Set());
  const insights = useInsights();

  /* ── Modal state for Create flow ── */
  const [showMethodModal, setShowMethodModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedCountBasis, setSelectedCountBasis] = useState<Exclude<CountBasis, null>>("item");

  /* ── Column order (draggable) ── */
  const [columnOrder, setColumnOrder] = useState<DragColumnDef[]>(DEFAULT_TABLE_COLUMNS);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const moveColumn = useCallback((fromIndex: number, toIndex: number) => {
    setColumnOrder((prev) => {
      const visible = prev.filter((c): c is DragColumnDef => c != null && !hiddenColumns.has(c.key));
      const fromKey = visible[fromIndex]?.key;
      const toKey = visible[toIndex]?.key;
      if (!fromKey || !toKey) return prev;
      const realFrom = prev.findIndex((c) => c?.key === fromKey);
      const realTo = prev.findIndex((c) => c?.key === toKey);
      if (realFrom < 0 || realTo < 0) return prev;
      const next = [...prev];
      const [moved] = next.splice(realFrom, 1);
      if (!moved) return prev;
      next.splice(realTo, 0, moved);
      return next.filter((c): c is DragColumnDef => c != null);
    });
  }, [hiddenColumns]);

  /* ── Column visibility ── */
  const toggleColumnVisibility = useCallback((key: string) => {
    setHiddenColumns((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const resetColumns = useCallback(() => {
    setColumnOrder(DEFAULT_TABLE_COLUMNS);
    setHiddenColumns(new Set());
  }, []);

  /* ── Derived: visible columns ── */
  const visibleColumns = columnOrder.filter((c): c is DragColumnDef => c != null && !hiddenColumns.has(c.key));

  /* ── Column resize ── */
  const { widths: colWidths, onResizeStart: onColResizeStart } = useColumnResize(DEFAULT_TABLE_COLUMNS);

  /* ── Column drag (pointer-event based) ── */
  const { dragState: columnDragState, onHeaderPointerDown, previewElRef, draggedIndex } = useColumnReorder(
    visibleColumns.map((c) => ({ ...c, width: colWidths[c.key] ?? c.width })),
    moveColumn,
    scrollContainerRef
  );

  useEffect(() => { injectDragKeyframes(); }, []);

  /* ── Table width ── */
  const fixedWidth = 52 + 110 + 120 + 64; // expand + id + cb + actions
  const scrollableWidth = visibleColumns.reduce((sum, col) => sum + (colWidths[col.key] ?? col.width), 0);
  const tableMinWidth = fixedWidth + scrollableWidth;

  /* ── Loading sim ── */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  /* ── Filtering + pagination ── */
  const filteredCounts = filterCycleCounts(cycleCounts, searchQuery, activeFilter);
  const totalPages = computeTotalPages(filteredCounts.length, recordsPerPage);
  const paginatedCounts = paginateItems(filteredCounts, currentPage, recordsPerPage);
  const filterCounts = computeFilterCounts(cycleCounts);

  /* ── Density config ── */
  const d = densityConfig[viewMode];

  /* ── Sticky column offsets ── */
  const expandLeft = "0px";
  const idLeft = EXPAND_COL_W;
  const cbLeft = `calc(${EXPAND_COL_W} + ${ID_COL_W})`;

  /* ── Handlers ── */
  const handleSearchChange = useCallback((v: string) => {
    setSearchQuery(v);
    setCurrentPage(1);
  }, []);

  const handleFilterChange = useCallback((f: QuickFilter) => {
    setActiveFilter(f);
    setCurrentPage(1);
  }, []);

  const handleRecordsPerPageChange = useCallback((rpp: number) => {
    setRecordsPerPage(rpp);
    setCurrentPage(1);
  }, []);

  /* ═══════════════════════════════════════════════════════════════════════════
   * RENDER
   * ═══════════════════════════════════════════════════════════════════════════ */
  return (
    <div className="flex flex-col h-full" style={{ fontFamily: FONT }}>

      {/* ── § A  Page Header ─────────────────────────────────────────────── */}
      <PageHeader onCreateNew={() => setShowMethodModal(true)} />

      {/* ── § B  Content area ────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 min-h-0" style={{ padding: "var(--spacing-5) var(--spacing-6) var(--spacing-6) var(--spacing-6)" }}>

        {/* ── B.1  Insight KPI Bar ── */}
        <InsightsSection
          categories={INSIGHT_CATEGORIES}
          data={cycleCounts}
          activeInsights={insights.activeInsights}
          onToggle={insights.toggle}
          onOpenDrawer={insights.openDrawer}
          timeRange={insights.timeRange}
          timeRangeLabel={insights.timeRangeLabel}
          onTimeRangeChange={insights.setTimeRange}
        />

        {/* ── B.2  Table Card ── */}
        <div
          className="flex flex-col flex-1 min-h-0 rounded-lg border border-border overflow-hidden"
          style={{ background: "var(--card)" }}
        >
          {/* ── B.2.1  Toolbar ── */}
          <div className="flex flex-col gap-3 p-4 pb-3 shrink-0">
            {/* Row 1: Search + Filters button + Right actions */}
            <div className="flex items-center gap-3">
              <SearchBar value={searchQuery} onChange={handleSearchChange} />
              <button
                className="flex items-center gap-1.5 border border-border transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                style={{
                  height: "38px",
                  padding: "0 var(--spacing-2-5)",
                  cursor: "pointer",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--background)",
                  fontFamily: FONT,
                  boxShadow: "var(--elevation-xs)",
                }}
              >
                <SlidersHorizontal size={14} style={{ color: "var(--text-secondary)" }} />
                <span
                  style={{
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--foreground)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Filters
                </span>
              </button>
              <ToolbarActions
                insights={insights}
                viewMode={viewMode}
                setViewMode={setViewMode}
                visibleColumnCount={visibleColumns.length}
                showManageColumns={showManageColumns}
                onToggleManageColumns={() => setShowManageColumns((v) => !v)}
              />
            </div>

            {/* Row 2: Quick filter pills */}
            <QuickFilterBar
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              filterCounts={filterCounts}
            />
          </div>

          {/* ── B.2.2  Data Display ── */}
          {isLoading ? (
            <TableLoadingSkeleton />
          ) : paginatedCounts.length === 0 ? (
            <EmptyState onCreateNew={() => setShowMethodModal(true)} />
          ) : (
            <>
              {/* ── Table + Manage Columns side panel ── */}
              <div className="flex flex-1 min-h-0 border-t border-border" style={{ overflow: "hidden" }}>
                <div ref={scrollContainerRef} className="relative overflow-x-auto flex-1 overflow-y-auto scrollbar-auto-hide">
                  <ColumnDragPreview dragState={columnDragState} previewElRef={previewElRef} />
                  <table
                    className="border-collapse"
                    style={{ width: `${tableMinWidth}px`, fontFamily: FONT, tableLayout: "fixed" }}
                  >
                    {/* Colgroup */}
                    <colgroup>
                      <col style={{ width: EXPAND_COL_W, minWidth: EXPAND_COL_W }} />
                      <col style={{ width: ID_COL_W, minWidth: ID_COL_W }} />
                      <col style={{ width: CB_COL_W, minWidth: CB_COL_W }} />
                      {visibleColumns.map((col) => {
                        const w = colWidths[col.key] ?? col.width;
                        return <col key={col.key} style={{ width: `${w}px`, minWidth: `${w}px` }} />;
                      })}
                      <col style={{ width: ACTION_COL_W, minWidth: ACTION_COL_W }} />
                    </colgroup>

                    {/* ── Table Header ── */}
                    <thead style={{ position: "sticky", top: 0, zIndex: 3 }}>
                      <tr style={{ background: "var(--surface-secondary)" }}>
                        <StickyHeaderCells d={d} expandLeft={expandLeft} idLeft={idLeft} cbLeft={cbLeft} />

                        {/* Scrollable (draggable + resizable) columns */}
                        {visibleColumns.map((col, colIdx) => {
                          const w = colWidths[col.key] ?? col.width;
                          return (
                            <ColumnHeader
                              key={col.key}
                              col={{ ...col, width: w }}
                              index={colIdx}
                              totalColumns={visibleColumns.length}
                              onResizeStart={(e, idx) => onColResizeStart(e, idx, visibleColumns)}
                              headerHeight={d.headerHeight}
                              colMin={COL_MIN_W}
                              colMax={COL_MAX_W}
                              draggedIndex={draggedIndex}
                              onHeaderPointerDown={onHeaderPointerDown}
                              renderLabel={(c) => (
                                <div className="flex items-center justify-between flex-1" style={{ overflow: "hidden" }}>
                                  <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secondary)", fontFamily: FONT, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.label}</span>
                                  <ListFilter size={12} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} aria-hidden="true" />
                                </div>
                              )}
                            />
                          );
                        })}

                        <ActionsHeaderCell d={d} />
                      </tr>
                    </thead>

                    {/* ── Table Body ── */}
                    <tbody>
                      {paginatedCounts.map((cc, index) => {
                        const rowBg = "var(--background)";
                        const isErrorRow = isErrorStatus(cc.status);
                        return (
                          <tr
                            key={cc.id}
                            className="row-hover-group group"
                            style={{ backgroundColor: "var(--background)" }}
                          >
                            <StickyBodyCells
                              cc={cc}
                              d={d}
                              expandLeft={expandLeft}
                              idLeft={idLeft}
                              cbLeft={cbLeft}
                              isErrorRow={isErrorRow}
                            />

                            {/* Scrollable columns */}
                            {visibleColumns.map((col, colIdx) => {
                              const w = colWidths[col.key] ?? col.width;
                              return (
                                <ColumnBodyCell
                                  key={col.key}
                                  colKey={col.key}
                                  colIndex={colIdx}
                                  width={w}
                                  rowHeight={d.rowHeight}
                                  draggedIndex={draggedIndex}
                                  isLastRow={index === paginatedCounts.length - 1}
                                >
                                  <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: d.fontSize }}>
                                    {renderCellValue(cc, col.key)}
                                  </div>
                                </ColumnBodyCell>
                              );
                            })}

                            <ActionsBodyCell cc={cc} d={d} />
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Manage Columns Panel (inline right) */}
                {showManageColumns && (
                  <ManageColumnsPanel
                    columns={columnOrder}
                    hiddenColumns={hiddenColumns}
                    onToggleVisibility={toggleColumnVisibility}
                    onReorder={setColumnOrder}
                    onReset={resetColumns}
                    onClose={() => setShowManageColumns(false)}
                  />
                )}
              </div>

              {/* ── Pagination ── */}
              <TablePagination
                currentPage={currentPage}
                totalPages={totalPages}
                recordsPerPage={recordsPerPage}
                onPageChange={setCurrentPage}
                onRecordsPerPageChange={handleRecordsPerPageChange}
              />
            </>
          )}
        </div>
      </div>

      {/* ── § C  Overlays ────────────────────────────────────────────────── */}

      {/* Insights Drawer */}
      {insights.isDrawerOpen && (
        <InsightsDrawer
          categories={INSIGHT_CATEGORIES}
          activeInsights={insights.activeInsights}
          onToggle={insights.toggle}
          onClose={insights.closeDrawer}
        />
      )}

      {/* Count Method Selection Modal */}
      <CountMethodModal
        open={showMethodModal}
        onClose={() => setShowMethodModal(false)}
        onSelect={(method) => {
          setSelectedCountBasis(method);
          setShowMethodModal(false);
          setShowCreateModal(true);
        }}
      />

      {/* Full Create Cycle Count Modal */}
      <CreateCycleCount
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        initialCountBasis={selectedCountBasis}
      />
    </div>
  );
}