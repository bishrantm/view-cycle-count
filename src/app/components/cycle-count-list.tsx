import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  RefreshCcw,
  AlignJustify,
  Check,
  Eye,
  Play,
  Trash2,
  Copy,
  FileText,
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
  Plus,
  Minus,
  ListFilter,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
} from "lucide-react";
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
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ItemImagePreviewModal, type PreviewItem } from "./item-image-preview-modal";
import { searchableItems } from "./cycle-count-data";
import { FONT, HOVER, TablePagination } from "../../imports/shared-ui";
import {
  useColumnReorder,
  ColumnHeader,
  ColumnBodyCell,
  ColumnDragPreview,
  type DragColumnDef,
} from "./draggable-column-system";
import {
  type QuickFilter,
  type ViewMode,
  LIST_PAGE_LABELS,
  RECORDS_PER_PAGE_OPTIONS,
  ROW_ACTION_LABELS,
  VIEW_MODE_OPTIONS,
  DENSITY_CONFIG,
  EXPAND_COL_W,
  ID_COL_W,
  CB_COL_W,
  ACTION_COL_W,
  COL_MIN_W,
  COL_MAX_W,
  DEFAULT_TABLE_COLUMNS,
  STICKY_HEADER_LABELS,
  INSIGHT_CATEGORIES,
} from "./data";
import {
  filterCycleCounts,
  computeFilterCounts,
  buildQuickFilters,
  computeTotalPages,
  paginateItems,
  computeTableMinWidth,
  computeDiscrepancy,
  getInitials,
  isErrorStatus,
  isHighPriority,
  sortCycleCounts,
  generateNestedRows,
  type NestedRowData,
  type SortDirection,
} from "./logic";

/* ═══════════════════════════════════════════════════════════════════════════
 * § 1  COLUMN WIDTHS — shared constants
 * ═════════════════════════════════════════════════════════════════════════════ */

const EXPAND_COL_PX = parseInt(EXPAND_COL_W);
const FIXED_LEFT_PX = EXPAND_COL_PX + parseInt(ID_COL_W) + parseInt(CB_COL_W);
const FIXED_RIGHT_PX = parseInt(ACTION_COL_W);


/* ═══════════════════════════════════════════════════════════════════════════
 * § 2  PAGE HEADER
 * ═════════════════════════════════════════════════════════════════════════════ */

function PageHeader() {
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
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
 * § 3  QUICK FILTER CHIPS
 * ═════════════════════════════════════════════════════════════════════════════ */

function QuickFilterChips({
  activeFilter,
  onFilterChange,
  filterCounts,
}: {
  activeFilter: QuickFilter;
  onFilterChange: (f: QuickFilter) => void;
  filterCounts: Record<QuickFilter, number>;
}) {
  const chips = buildQuickFilters(filterCounts);
  return (
    <div className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
      {/* Me mode toggle */}
      <button
        className="flex items-center gap-1.5 rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        style={{
          height: "30px",
          padding: "0 var(--spacing-3)",
          cursor: "pointer",
          background: "var(--background)",
          borderColor: "var(--border)",
          color: "var(--text-secondary)",
          fontSize: "var(--text-label)",
          fontFamily: FONT,
        }}
      >
        <span
          className="flex items-center justify-center rounded-full shrink-0"
          style={{
            width: "18px",
            height: "18px",
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            fontSize: "var(--text-micro)",
            fontWeight: "var(--font-weight-semibold)",
            fontFamily: FONT,
          }}
        >
          {LIST_PAGE_LABELS.meModeInitials}
        </span>
        {LIST_PAGE_LABELS.meModeLabel}
      </button>

      {/* Filter chips */}
      {chips.map((chip) => {
        const isActive = chip.key === activeFilter;
        const isAll = chip.key === "all";
        return (
          <button
            key={chip.key}
            onClick={() => onFilterChange(chip.key)}
            className="flex items-center gap-1.5 rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            style={{
              height: "30px",
              padding: isAll
                ? "0 var(--spacing-3)"
                : "0 var(--spacing-2) 0 var(--spacing-3)",
              cursor: "pointer",
              background: isActive ? "var(--primary-50)" : "var(--background)",
              borderColor: isActive ? "var(--primary-600)" : "var(--border)",
              color: isActive ? "var(--primary)" : "var(--text-secondary)",
              fontSize: "var(--text-label)",
              fontFamily: FONT,
            }}
          >
            {chip.label}
            {!isAll && (
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
                {chip.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
 * § 4  DENSITY / VIEW MODE DROPDOWN
 * ═════════════════════════════════════════════════════════════════════════════ */

/** Renders 3 horizontal lines with configurable gap to represent density. */
function DensityIcon({ gap, size = 24 }: { gap: number; size?: number }) {
  const lineWidth = 14;
  const lineHeight = 2;
  const totalH = lineHeight * 3 + gap * 2;
  const startY = (size - totalH) / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={(size - lineWidth) / 2}
          y={startY + i * (lineHeight + gap)}
          width={lineWidth}
          height={lineHeight}
          rx={1}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

const DENSITY_ICON_GAP: Record<ViewMode, number> = {
  condensed: 2,
  comfort: 4,
  relaxed: 6,
};

function DensityDropdown({
  viewMode,
  onChange,
}: {
  viewMode: ViewMode;
  onChange: (v: ViewMode) => void;
}) {
  const [open, setOpen] = useState(false);
  const currentLabel =
    VIEW_MODE_OPTIONS.find((o) => o.value === viewMode)?.label ?? "Comfort";
  const Chevron = open ? ChevronUp : ChevronDown;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center shrink-0"
          style={{
            height: "38px",
            padding: "0 var(--spacing-2-5)",
            borderRadius: "var(--radius-sm)",
            border: open ? "1px solid var(--primary)" : "1px solid var(--border)",
            background: "var(--background)",
            cursor: "pointer",
            gap: "var(--spacing-1-5)",
            boxShadow: open
              ? "0 0 0 3px var(--primary-100)"
              : "var(--elevation-xs)",
            transition: HOVER.transition,
          }}
        >
          <AlignJustify size={16} style={{ color: "var(--text-secondary)" }} />
          <span
            style={{
              fontSize: "var(--text-label)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-secondary)",
              fontFamily: FONT,
              whiteSpace: "nowrap",
            }}
          >
            {currentLabel}
          </span>
          <Chevron size={14} style={{ color: "var(--text-tertiary)" }} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={4}
        style={{
          fontFamily: FONT,
          minWidth: "240px",
          padding: "var(--spacing-1) 0",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          boxShadow: "var(--elevation-popover)",
        }}
      >
        {VIEW_MODE_OPTIONS.map((opt) => {
          const isSelected = viewMode === opt.value;
          return (
            <DropdownMenuItem
              key={opt.value}
              onClick={() => onChange(opt.value)}
              style={{
                fontFamily: FONT,
                padding: "var(--spacing-2-5) var(--spacing-3)",
                gap: "var(--spacing-3)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Density icon */}
              <span
                style={{
                  color: "var(--text-tertiary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  flexShrink: 0,
                }}
              >
                <DensityIcon gap={DENSITY_ICON_GAP[opt.value]} />
              </span>

              {/* Label + Description */}
              <div
                className="flex flex-col flex-1 min-w-0"
                style={{ gap: "1px" }}
              >
                <span
                  style={{
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--foreground)",
                    fontFamily: FONT,
                  }}
                >
                  {opt.label}
                </span>
                <span
                  style={{
                    fontSize: "var(--text-caption)",
                    fontWeight: "var(--font-weight-normal)",
                    color: "var(--text-tertiary)",
                    fontFamily: FONT,
                  }}
                >
                  {opt.description}
                </span>
              </div>

              {/* Checkmark (right-aligned) */}
              <Check
                size={16}
                style={{
                  flexShrink: 0,
                  opacity: isSelected ? 1 : 0,
                  color: "var(--primary)",
                }}
              />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
 * § 5  ROW ACTION MENU
 * ═════════════════════════════════════════════════════════════════════════════ */

function RowActionMenu({
  cc,
  onDelete,
  onDuplicate,
}: {
  cc: CycleCount;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
}) {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center"
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "var(--radius-sm)",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            transition: HOVER.transition,
          }}
        >
          <MoreHorizontal size={16} style={{ color: "var(--text-secondary)" }} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={4}
        style={{ fontFamily: FONT, minWidth: "180px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem
          onClick={() => navigate(`/count/${cc.id}`)}
          style={{ fontFamily: FONT, fontSize: "var(--text-label)", gap: "var(--spacing-2)" }}
        >
          <Eye size={14} /> {ROW_ACTION_LABELS.viewDetails}
        </DropdownMenuItem>
        {cc.status === "in_progress" && (
          <DropdownMenuItem
            onClick={() => navigate(`/count/${cc.id}/execute`)}
            style={{ fontFamily: FONT, fontSize: "var(--text-label)", gap: "var(--spacing-2)" }}
          >
            <Play size={14} /> {ROW_ACTION_LABELS.continueCounting}
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          onClick={() => onDuplicate(cc.id)}
          style={{ fontFamily: FONT, fontSize: "var(--text-label)", gap: "var(--spacing-2)" }}
        >
          <Copy size={14} /> {ROW_ACTION_LABELS.duplicate}
        </DropdownMenuItem>
        <DropdownMenuItem
          style={{ fontFamily: FONT, fontSize: "var(--text-label)", gap: "var(--spacing-2)" }}
        >
          <FileText size={14} /> {ROW_ACTION_LABELS.export}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => onDelete(cc.id)}
          style={{
            fontFamily: FONT,
            fontSize: "var(--text-label)",
            gap: "var(--spacing-2)",
            color: "var(--status-cancelled-text)",
          }}
        >
          <Trash2 size={14} /> {ROW_ACTION_LABELS.delete}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
 * § 6  SORT INDICATOR
 * ═════════════════════════════════════════════════════════════════════════════ */

function SortIndicator({
  colKey,
  sortKey,
  sortDirection,
}: {
  colKey: string;
  sortKey: string | null;
  sortDirection: SortDirection;
}) {
  const isActive = sortKey === colKey;
  if (!isActive) {
    return <ArrowUpDown size={11} style={{ color: "var(--text-tertiary)", opacity: 0.5, flexShrink: 0 }} />;
  }
  const Icon = sortDirection === "asc" ? ArrowUp : ArrowDown;
  return <Icon size={11} style={{ color: "var(--primary)", flexShrink: 0 }} />;
}


/* ═══════════════════════════════════════════════════════════════════════════
 * § 7  TABLE CELL RENDERERS
 * ═════════════════════════════════════════════════════════════════════════════ */

function renderCellValue(
  colKey: string,
  cc: CycleCount,
  density: ViewMode,
) {
  const fontSize = DENSITY_CONFIG[density].fontSize;
  switch (colKey) {
    case "tags":
      return (
        <div className="flex items-center" style={{ gap: "var(--spacing-1)", overflow: "hidden", whiteSpace: "nowrap" }}>
          {cc.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="chip"
              style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-semibold)", fontFamily: FONT, flexShrink: 0 }}
            >
              {tag}
            </span>
          ))}
          <OverflowHint items={cc.tags} maxShow={2} variant="chip" label={`All ${cc.tags.length} Tags`} />
        </div>
      );

    case "items":
      return (
        <div className="flex items-center" style={{ gap: "var(--spacing-1)", overflow: "hidden", whiteSpace: "nowrap" }}>
          <CellText style={{ fontSize, flexShrink: 1, minWidth: 0 }}>{cc.items.slice(0, 2).join(", ")}</CellText>
          <OverflowHint items={cc.items} maxShow={2} label={`All ${cc.items.length} Items`} />
        </div>
      );

    case "categories":
      return (
        <div className="flex items-center" style={{ gap: "var(--spacing-1)", overflow: "hidden", whiteSpace: "nowrap" }}>
          {cc.categories[0] ? (
            <span
              className="chip"
              style={{ fontSize: "var(--text-caption)", fontFamily: FONT, flexShrink: 0 }}
            >
              {cc.categories[0]}
            </span>
          ) : (
            <CellText style={{ fontSize }}>{"\u2014"}</CellText>
          )}
          <OverflowHint items={cc.categories} maxShow={1} label={`All ${cc.categories.length} Categories`} />
        </div>
      );

    case "locations":
      return (
        <div className="flex items-center" style={{ gap: "var(--spacing-1)", overflow: "hidden", whiteSpace: "nowrap" }}>
          <CellText style={{ fontSize, flexShrink: 1, minWidth: 0 }}>{cc.locations.slice(0, 1).join(", ")}</CellText>
          <OverflowHint items={cc.locations} maxShow={1} label={`All ${cc.locations.length} Locations`} />
        </div>
      );

    case "status":
      return <StatusBadge status={cc.status} />;

    case "discrepancy": {
      const disc = computeDiscrepancy(cc.actualCount, cc.systemCount);
      return (
        <CellText
          style={{
            fontSize,
            color: disc.hasDiscrepancy
              ? "var(--status-cancelled-text)"
              : "var(--text-tertiary)",
            fontWeight: disc.hasDiscrepancy ? "var(--font-weight-medium)" : undefined,
          }}
        >
          {disc.label}
        </CellText>
      );
    }

    case "systemCount":
      return <CellText style={{ fontSize }}>{cc.systemCount.toLocaleString()}</CellText>;

    case "actualCount":
      return <CellText style={{ fontSize }}>{cc.actualCount != null ? cc.actualCount.toLocaleString() : "\u2014"}</CellText>;

    case "reported":
      return (
        <CellText style={{ fontSize }}>
          {cc.reported ? (
            <span style={{ color: "var(--status-cancelled-text)", fontWeight: "var(--font-weight-medium)" }}>Yes</span>
          ) : (
            <span style={{ color: "var(--text-tertiary)" }}>{"\u2014"}</span>
          )}
        </CellText>
      );

    case "assignees":
      return (
        <div className="flex items-center" style={{ gap: "var(--spacing-2)", overflow: "hidden", whiteSpace: "nowrap" }}>
          {/* Avatar circles grouped together */}
          <div className="flex items-center shrink-0" style={{ marginLeft: 0 }}>
            {cc.assignees.slice(0, 2).map((name, i) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-full shrink-0"
                style={{
                  width: "26px",
                  height: "26px",
                  background: "var(--primary-50)",
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--primary)",
                  fontFamily: FONT,
                  border: "2px solid var(--background)",
                  marginLeft: i > 0 ? "-6px" : "0",
                  zIndex: cc.assignees.length - i,
                  position: "relative",
                }}
              >
                {getInitials(name)}
              </div>
            ))}
          </div>
          {/* Primary assignee full name */}
          <CellText style={{ fontSize, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" }}>
            {cc.assignees[0]}
          </CellText>
          {/* Overflow count */}
          <AssigneeOverflowPopover names={cc.assignees} maxShow={2} />
        </div>
      );

    case "completedOn":
      return <CellText style={{ fontSize }}>{cc.completedOn || "\u2014"}</CellText>;

    case "description":
      return <CellText style={{ fontSize }}>{cc.description || "\u2014"}</CellText>;

    case "priority":
      return (
        <CellText
          style={{
            fontSize,
            fontWeight: isHighPriority(cc.priority) ? "var(--font-weight-semibold)" : undefined,
            color: isHighPriority(cc.priority) ? "var(--status-cancelled-text)" : undefined,
          }}
        >
          {cc.priority}
        </CellText>
      );

    case "createdOn":
      return <CellText style={{ fontSize }}>{cc.createdOn}</CellText>;

    case "createdBy":
      return <CellText style={{ fontSize }}>{cc.createdBy}</CellText>;

    case "startDate":
      return <CellText style={{ fontSize }}>{cc.startDate || "\u2014"}</CellText>;

    case "dueDate":
      return <CellText style={{ fontSize }}>{cc.dueDate || "\u2014"}</CellText>;

    default:
      return <CellText style={{ fontSize }}>{"\u2014"}</CellText>;
  }
}

/** Render a cell value for a nested (child) row using NestedRowData. */
function renderNestedCellValue(
  colKey: string,
  row: NestedRowData,
  density: ViewMode,
  onImageClick?: (row: NestedRowData) => void,
) {
  const fontSize = DENSITY_CONFIG[density].fontSize;

  // Parent-level metadata columns — blank for child rows
  if (["tags", "createdOn", "createdBy", "startDate", "dueDate", "priority", "description"].includes(colKey)) {
    return null;
  }

  switch (colKey) {
    case "items":
      return row.items.length > 0 ? (
        <div className="flex items-center" style={{ gap: "var(--spacing-2)", overflow: "hidden", whiteSpace: "nowrap" }}>
          {row.image && (
            <ImageWithFallback
              src={row.image}
              alt={row.items[0]}
              className="shrink-0 rounded object-cover transition-shadow hover:ring-2 hover:ring-primary/40"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "var(--radius-sm)",
                cursor: "pointer",
              }}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                onImageClick?.(row);
              }}
            />
          )}
          <CellText style={{ fontSize, color: "var(--foreground)", fontWeight: "var(--font-weight-medium)", flexShrink: 1, minWidth: 0 }}>
            {row.items.slice(0, 2).join(", ")}
          </CellText>
          <OverflowHint items={row.items} maxShow={2} label={`All ${row.items.length} Items`} />
        </div>
      ) : <CellText style={{ fontSize }}>{"\u2014"}</CellText>;

    case "categories":
      return row.categories.length > 0 ? (
        <div className="flex items-center" style={{ gap: "var(--spacing-1)", overflow: "hidden", whiteSpace: "nowrap" }}>
          <span
            className="chip"
            style={{ fontSize: "var(--text-caption)", fontFamily: FONT, flexShrink: 0 }}
          >
            {row.categories[0]}
          </span>
          <OverflowHint items={row.categories} maxShow={1} label={`All ${row.categories.length} Categories`} />
        </div>
      ) : <CellText style={{ fontSize }}>{"\u2014"}</CellText>;

    case "locations":
      return row.locations.length > 0 ? (
        <div className="flex items-center" style={{ gap: "var(--spacing-1)", overflow: "hidden", whiteSpace: "nowrap" }}>
          <CellText style={{ fontSize, flexShrink: 1, minWidth: 0 }}>{row.locations.slice(0, 1).join(", ")}</CellText>
          <OverflowHint items={row.locations} maxShow={1} label={`All ${row.locations.length} Locations`} />
        </div>
      ) : <CellText style={{ fontSize }}>{"\u2014"}</CellText>;

    case "status":
      return <StatusBadge status={row.status} />;

    case "discrepancy": {
      const disc = computeDiscrepancy(row.actualCount, row.systemCount);
      const varianceLabel = disc.hasDiscrepancy && disc.value != null
        ? (disc.value > 0 ? `+${disc.value.toLocaleString()}` : disc.value.toLocaleString())
        : disc.label;
      return (
        <CellText
          style={{
            fontSize,
            color: disc.hasDiscrepancy
              ? "var(--status-cancelled-text)"
              : "var(--text-tertiary)",
            fontWeight: disc.hasDiscrepancy ? "var(--font-weight-medium)" : undefined,
          }}
        >
          {varianceLabel}
        </CellText>
      );
    }

    case "systemCount":
      return <CellText style={{ fontSize }}>{row.systemCount.toLocaleString()}</CellText>;

    case "actualCount":
      return <CellText style={{ fontSize }}>{row.actualCount != null ? row.actualCount.toLocaleString() : "\u2014"}</CellText>;

    case "reported":
      return (
        <CellText style={{ fontSize }}>
          {row.reported ? (
            <span style={{ color: "var(--status-cancelled-text)", fontWeight: "var(--font-weight-medium)" }}>Yes</span>
          ) : (
            <span style={{ color: "var(--text-tertiary)" }}>{"\u2014"}</span>
          )}
        </CellText>
      );

    case "assignees":
      return row.assignees.length > 0 ? (
        <div className="flex items-center" style={{ gap: "var(--spacing-2)", overflow: "hidden", whiteSpace: "nowrap" }}>
          <div className="flex items-center shrink-0" style={{ marginLeft: 0 }}>
            {row.assignees.slice(0, 2).map((name, idx) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-full shrink-0"
                style={{
                  width: "24px",
                  height: "24px",
                  background: "var(--primary-50)",
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--primary)",
                  fontFamily: FONT,
                  border: "2px solid var(--surface-secondary)",
                  marginLeft: idx > 0 ? "-6px" : "0",
                  zIndex: row.assignees.length - idx,
                  position: "relative",
                }}
              >
                {getInitials(name)}
              </div>
            ))}
          </div>
          <CellText style={{ fontSize, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" }}>
            {row.assignees[0]}
          </CellText>
          <AssigneeOverflowPopover names={row.assignees} maxShow={2} />
        </div>
      ) : <CellText style={{ fontSize }}>{"\u2014"}</CellText>;

    case "completedOn":
      return <CellText style={{ fontSize }}>{row.completedOn || "\u2014"}</CellText>;

    default:
      return <CellText style={{ fontSize }}>{"\u2014"}</CellText>;
  }
}


/* ═══════════════════════════════════════════════════════════════════════════
 * § 8  MAIN LIST COMPONENT
 * ═════════════════════════════════════════════════════════════════════════════ */

export default function CycleCountList() {
  const navigate = useNavigate();
  const { cycleCounts, removeCycleCount, duplicateCycleCount } = useCycleCountStore();

  /* ── Core state ── */
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<QuickFilter>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("comfort");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState<number>(RECORDS_PER_PAGE_OPTIONS[0]);
  const [isLoading, setIsLoading] = useState(true);

  /* ── Expanded rows state ── */
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  /* ── Sort state ── */
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  /* ── Column state ── */
  const [columns, setColumns] = useState<DragColumnDef[]>(DEFAULT_TABLE_COLUMNS);
  const [hiddenColumns, setHiddenColumns] = useState<Set<string>>(new Set());
  const [colWidths, setColWidths] = useState<Record<string, number>>({});
  const [showManageColumns, setShowManageColumns] = useState(false);

  /* ── Item image preview modal state ── */
  const [previewItem, setPreviewItem] = useState<PreviewItem | null>(null);

  /* ── Insights ── */
  const {
    activeInsights,
    isBarVisible,
    isDrawerOpen,
    activeCount: insightActiveCount,
    timeRange: insightTimeRange,
    timeRangeLabel: insightTimeRangeLabel,
    toggle: toggleInsight,
    openDrawer: openInsightsDrawer,
    closeDrawer: closeInsightsDrawer,
    toggleDrawer: toggleInsightsDrawer,
    setTimeRange: setInsightTimeRange,
  } = useInsights();

  /* ── Column reorder hook ── */
  const tableRef = useRef<HTMLDivElement>(null);
  const visibleColumns = columns.filter((c) => !hiddenColumns.has(c.key));

  const moveColumn = useCallback(
    (from: number, to: number) => {
      setColumns((prev) => {
        const visible = prev.filter((c) => !hiddenColumns.has(c.key));
        const hidden = prev.filter((c) => hiddenColumns.has(c.key));
        const moved = [...visible];
        const [item] = moved.splice(from, 1);
        moved.splice(to, 0, item);
        return [...moved, ...hidden];
      });
    },
    [hiddenColumns]
  );

  const {
    dragState,
    draggedIndex,
    onHeaderPointerDown,
    previewElRef,
  } = useColumnReorder(visibleColumns, moveColumn, tableRef, { dragThreshold: 3 });

  /* ── Simulated loading ── */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  /* ── Derived data ── */
  const filteredCounts = filterCycleCounts(cycleCounts, searchQuery, activeFilter);
  const sortedCounts = useMemo(
    () => sortCycleCounts(filteredCounts, sortKey, sortDirection),
    [filteredCounts, sortKey, sortDirection]
  );
  const filterCnts = computeFilterCounts(cycleCounts);
  const totalPages = computeTotalPages(sortedCounts.length, recordsPerPage);
  const paginatedCounts = paginateItems(sortedCounts, currentPage, recordsPerPage);
  const tableMinWidth = computeTableMinWidth(FIXED_LEFT_PX + FIXED_RIGHT_PX, visibleColumns, colWidths);

  /* Reset page on filter/search change */
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeFilter]);

  /* ── Sort handler ── */
  const handleSort = useCallback((key: string) => {
    setSortKey((prev) => {
      if (prev === key) {
        setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
        return key;
      }
      setSortDirection("asc");
      return key;
    });
    setCurrentPage(1);
  }, []);

  /* ── Handlers ── */
  const handleDelete = useCallback(
    (id: string) => {
      removeCycleCount(id);
      showToast({ title: "Cycle count deleted", description: `${id} has been removed.`, type: "success" });
    },
    [removeCycleCount]
  );

  const handleDuplicate = useCallback(
    (id: string) => {
      const dup = duplicateCycleCount(id);
      if (dup) {
        showToast({ title: "Cycle count duplicated", description: `${dup.id} created from ${id}.`, type: "success" });
      }
    },
    [duplicateCycleCount]
  );

  /* ── Toggle expand handler ── */
  const handleToggleExpand = useCallback((ccId: string) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(ccId)) {
        next.delete(ccId);
      } else {
        next.add(ccId);
      }
      return next;
    });
  }, []);

  /* ── Nested row image click → open preview modal ── */
  const handleNestedImageClick = useCallback((row: NestedRowData) => {
    const itemId = row.itemId ?? row.items[0];
    if (!itemId) return;
    const matched = searchableItems.find((si) => si.id === itemId);
    setPreviewItem({
      id: matched?.id ?? itemId,
      name: matched?.name ?? row.label,
      image: row.image ?? matched?.image ?? "",
      description: matched?.description ?? row.description,
      type: matched?.type,
    });
  }, []);

  const handleColumnResize = useCallback((key: string, newWidth: number) => {
    const clamped = Math.min(COL_MAX_W, Math.max(COL_MIN_W, newWidth));
    setColWidths((prev) => ({ ...prev, [key]: clamped }));
  }, []);

  /* ── Column resize via pointer events ── */
  const resizeRef = useRef<{ colIdx: number; startX: number; startW: number } | null>(null);

  const handleResizeStart = useCallback(
    (e: React.PointerEvent | React.MouseEvent, colIdx: number) => {
      e.preventDefault();
      const col = visibleColumns[colIdx];
      if (!col) return;
      const startW = colWidths[col.key] ?? col.width;
      resizeRef.current = { colIdx, startX: e.clientX, startW };

      const onMove = (ev: MouseEvent) => {
        if (!resizeRef.current) return;
        const delta = ev.clientX - resizeRef.current.startX;
        const newWidth = Math.min(COL_MAX_W, Math.max(COL_MIN_W, resizeRef.current.startW + delta));
        const key = visibleColumns[resizeRef.current.colIdx]?.key;
        if (key) setColWidths((prev) => ({ ...prev, [key]: newWidth }));
      };
      const onUp = () => {
        resizeRef.current = null;
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    },
    [visibleColumns, colWidths]
  );

  const handleToggleColumnVisibility = useCallback((key: string) => {
    setHiddenColumns((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }, []);

  const handleResetColumns = useCallback(() => {
    setColumns(DEFAULT_TABLE_COLUMNS);
    setHiddenColumns(new Set());
    setColWidths({});
  }, []);


  /* ── Density config ── */
  const density = DENSITY_CONFIG[viewMode];


  /* ═════════════════════════════════════════════════════════════════════════
   * RENDER
   * ═════════════════════════════════════════════════════════════════════════ */
  return (
    <div className="flex flex-col h-full" style={{ fontFamily: FONT }}>

      {/* ── § A  Page Header ─────────────────────────────────────────────── */}
      <PageHeader />

      {/* ── § B  Content area ────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 min-h-0" style={{ padding: "var(--spacing-5) var(--spacing-6) var(--spacing-6) var(--spacing-6)" }}>

        {/* Insights Zone */}
        <InsightsSection
          categories={INSIGHT_CATEGORIES}
          data={cycleCounts}
          activeInsights={activeInsights}
          onToggle={toggleInsight}
          onOpenDrawer={openInsightsDrawer}
          timeRange={insightTimeRange}
          timeRangeLabel={insightTimeRangeLabel}
          onTimeRangeChange={setInsightTimeRange}
        />

        {/* ── Unified Card: Toolbar + Table + Pagination ── */}
        <div
          className="flex flex-col flex-1 min-h-0"
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            background: "var(--background)",
            overflow: "hidden",
          }}
        >
          {/* ── Toolbar Area (inside the card) ── */}
          <div className="flex flex-col shrink-0" style={{ padding: "var(--spacing-4) var(--spacing-4) var(--spacing-3) var(--spacing-4)" }}>
            {/* Row 1: Search + Filters button + Right actions */}
            <div className="flex items-center" style={{ gap: "var(--spacing-3)" }}>
              {/* Search */}
              <div className="relative flex-1" style={{ maxWidth: "380px" }}>
                <Search
                  size={16}
                  style={{
                    position: "absolute",
                    left: "var(--spacing-3)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "var(--text-tertiary)",
                    pointerEvents: "none",
                  }}
                />
                <input
                  type="text"
                  placeholder={LIST_PAGE_LABELS.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                  style={{
                    height: "38px",
                    paddingLeft: "36px",
                    paddingRight: "var(--spacing-3)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border)",
                    background: "var(--background)",
                    fontSize: "var(--text-label)",
                    fontFamily: FONT,
                    color: "var(--foreground)",
                    outline: "none",
                    boxShadow: "var(--elevation-xs)",
                    transition: HOVER.transition,
                  }}
                />
              </div>

              {/* Filters button */}
              <div className="flex items-center shrink-0" style={{ gap: "var(--spacing-3)" }}>
                {/* Vertical separator */}
                <div style={{ width: "1px", height: "20px", background: "var(--border)" }} />
                <button
                  className="flex items-center shrink-0"
                  style={{
                    height: "38px",
                    padding: 0,
                    cursor: "pointer",
                    border: "none",
                    background: "transparent",
                    fontFamily: FONT,
                    gap: "var(--spacing-1-5)",
                    transition: HOVER.transition,
                  }}
                >
                  <SlidersHorizontal size={14} style={{ color: "var(--text-secondary)" }} />
                  <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secondary)", fontFamily: FONT }}>
                    Filters
                  </span>
                </button>
              </div>

              {/* Right: Toolbar Actions */}
              <div className="ml-auto flex items-center shrink-0" style={{ gap: "var(--spacing-2)" }}>
                {/* Insights Toggle */}
                <InsightsToggleButton
                  isOpen={isDrawerOpen}
                  activeCount={insightActiveCount}
                  onClick={toggleInsightsDrawer}
                />

                {/* Density Toggle */}
                <DensityDropdown viewMode={viewMode} onChange={setViewMode} />

                {/* Manage Columns Toggle */}
                <button
                  onClick={() => setShowManageColumns(!showManageColumns)}
                  className="flex items-center shrink-0"
                  style={{
                    height: "38px",
                    padding: "0 var(--spacing-2-5)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border)",
                    background: showManageColumns ? "var(--primary-50)" : "var(--background)",
                    cursor: "pointer",
                    gap: "var(--spacing-1-5)",
                    boxShadow: "var(--elevation-xs)",
                    transition: HOVER.transition,
                  }}
                >
                  <LayoutGrid
                    size={16}
                    style={{ color: showManageColumns ? "var(--primary)" : "var(--text-secondary)" }}
                  />
                  <span
                    style={{
                      fontSize: "var(--text-label)",
                      fontWeight: "var(--font-weight-medium)",
                      color: showManageColumns ? "var(--primary)" : "var(--text-secondary)",
                      fontFamily: FONT,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Columns
                  </span>
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{
                      minWidth: "20px",
                      height: "20px",
                      padding: "0 var(--spacing-1)",
                      background: showManageColumns ? "var(--primary-100)" : "var(--surface-secondary)",
                      color: showManageColumns ? "var(--primary-700)" : "var(--text-secondary)",
                      fontSize: "var(--text-caption)",
                      fontWeight: "var(--font-weight-semibold)",
                      fontFamily: FONT,
                    }}
                  >
                    {visibleColumns.length + 3}
                  </span>
                </button>
              </div>
            </div>

            {/* Row 2: Quick filter pills */}
            <div style={{ marginTop: "var(--spacing-3)" }}>
              <QuickFilterChips
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                filterCounts={filterCnts}
              />
            </div>
          </div>

          {/* ── Table + Manage Columns (inside the card) ── */}
          <div className="flex flex-1 min-h-0 border-t border-border" style={{ overflow: "hidden" }}>
            {/* Table Scroll Area */}
            <div
              className="flex-1 min-w-0 overflow-auto"
              ref={tableRef}
            >
              {isLoading ? (
                <TableLoadingSkeleton />
              ) : paginatedCounts.length === 0 ? (
                <EmptyState />
              ) : (
                <table
                  className="w-full"
                  style={{
                    minWidth: `${tableMinWidth}px`,
                    borderCollapse: "separate",
                    borderSpacing: 0,
                    tableLayout: "fixed",
                    fontFamily: FONT,
                  }}
                >
                  {/* ── colgroup ── */}
                  <colgroup>
                    <col style={{ width: EXPAND_COL_W }} />
                    <col style={{ width: ID_COL_W }} />
                    <col style={{ width: CB_COL_W }} />
                    {visibleColumns.map((col) => (
                      <col key={col.key} style={{ width: `${colWidths[col.key] ?? col.width}px` }} />
                    ))}
                    <col style={{ width: ACTION_COL_W }} />
                  </colgroup>

                  {/* ── THEAD ── */}
                  <thead>
                    <tr
                      style={{
                        height: density.headerHeight,
                        background: "var(--surface-secondary)",
                      }}
                    >
                      {/* Expand */}
                      <th
                        style={{
                          position: "sticky",
                          left: 0,
                          zIndex: 3,
                          background: "var(--surface-secondary)",
                          borderBottom: "1px solid var(--border)",
                          padding: 0,
                          textAlign: "center",
                          width: EXPAND_COL_W,
                          minWidth: EXPAND_COL_W,
                        }}
                      >
                        <Plus size={14} style={{ color: "var(--primary)", margin: "0 auto" }} aria-hidden="true" />
                      </th>
                      {/* ID */}
                      <th
                        onClick={() => handleSort("id")}
                        style={{
                          position: "sticky",
                          left: EXPAND_COL_W,
                          zIndex: 2,
                          background: "var(--surface-secondary)",
                          borderBottom: "1px solid var(--border)",
                          padding: "0 var(--spacing-3)",
                          textAlign: "left",
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-secondary)",
                          fontFamily: FONT,
                          cursor: "pointer",
                          userSelect: "none",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{STICKY_HEADER_LABELS.id}</span>
                          <ListFilter size={12} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} aria-hidden="true" />
                        </div>
                      </th>
                      {/* Count Basis */}
                      <th
                        onClick={() => handleSort("countBasis")}
                        style={{
                          position: "sticky",
                          left: `calc(${EXPAND_COL_W} + ${ID_COL_W})`,
                          zIndex: 2,
                          background: "var(--surface-secondary)",
                          borderBottom: "1px solid var(--border)",
                          padding: "0 var(--spacing-3)",
                          textAlign: "left",
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-secondary)",
                          fontFamily: FONT,
                          cursor: "pointer",
                          userSelect: "none",
                          boxShadow: "inset -1px 0 0 0 var(--border)",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{STICKY_HEADER_LABELS.countBasis}</span>
                          <ListFilter size={12} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} aria-hidden="true" />
                        </div>
                      </th>
                      {/* Draggable column headers */}
                      {visibleColumns.map((col, idx) => (
                        <ColumnHeader
                          key={col.key}
                          col={col}
                          index={idx}
                          totalColumns={visibleColumns.length}
                          onResizeStart={handleResizeStart}
                          onHeaderPointerDown={onHeaderPointerDown}
                          draggedIndex={draggedIndex}
                          headerHeight={density.headerHeight}
                          renderLabel={(c) => (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSort(c.key);
                              }}
                              style={{
                                background: "none",
                                border: "none",
                                padding: 0,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "var(--spacing-1)",
                                fontFamily: FONT,
                                fontSize: "var(--text-sm)",
                                fontWeight: "var(--font-weight-medium)",
                                color: "var(--text-secondary)",
                              }}
                            >
                              {c.label}
                              <ListFilter size={12} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} aria-hidden="true" />
                            </button>
                          )}
                        />
                      ))}
                      {/* Actions */}
                      <th
                        style={{
                          position: "sticky",
                          right: 0,
                          zIndex: 3,
                          background: "var(--surface-secondary)",
                          borderBottom: "1px solid var(--border)",
                          padding: "0 var(--spacing-3)",
                          textAlign: "center",
                          boxShadow: "inset 1px 0 0 0 var(--border)",
                        }}
                      >
                        <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secondary)", fontFamily: FONT }}>Actions</span>
                      </th>
                    </tr>
                  </thead>

                  {/* ── TBODY ── */}
                  <tbody>
                    {paginatedCounts.flatMap((cc) => {
                      const isErrorRow = isErrorStatus(cc.status);
                      const isExpanded = expandedRows.has(cc.id);
                      
                      // Parent row
                      const parentRow = (
                        <tr
                          key={cc.id}
                          onClick={() => navigate(`/count/${cc.id}`)}
                          className="row-hover-group"
                          style={{
                            height: density.rowHeight,
                            cursor: "pointer",
                            transition: HOVER.transition,
                          }}
                        >
                          {/* Expand */}
                          <td
                            style={{
                              position: "sticky",
                              left: 0,
                              zIndex: 2,
                              background: "var(--background)",
                              borderBottom: "1px solid var(--border)",
                              padding: 0,
                              textAlign: "center",
                              width: EXPAND_COL_W,
                              minWidth: EXPAND_COL_W,
                            }}
                          >
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleExpand(cc.id);
                              }}
                              className="flex items-center justify-center rounded-full border mx-auto"
                              style={{
                                width: "20px",
                                height: "20px",
                                borderColor: "var(--primary-200)",
                                background: "var(--background)",
                                cursor: "pointer",
                              }}
                              aria-label={`${isExpanded ? "Collapse" : "Expand"} ${cc.id}`}
                            >
                              {isExpanded ? (
                                <Minus size={10} style={{ color: "var(--primary)" }} />
                              ) : (
                                <Plus size={10} style={{ color: "var(--primary)" }} />
                              )}
                            </button>
                          </td>
                          {/* ID */}
                          <td
                            style={{
                              position: "sticky",
                              left: EXPAND_COL_W,
                              zIndex: 2,
                              background: "var(--background)",
                              borderBottom: "1px solid var(--border)",
                              padding: "0 var(--spacing-3)",
                            }}
                          >
                            <span
                              style={{
                                fontSize: density.fontSize,
                                fontWeight: "var(--font-weight-medium)",
                                color: isErrorRow ? "var(--destructive)" : "var(--text-secondary)",
                                fontFamily: FONT,
                                whiteSpace: "nowrap",
                              }}
                            >
                              {cc.id}
                            </span>
                          </td>
                          {/* Count Basis */}
                          <td
                            style={{
                              position: "sticky",
                              left: `calc(${EXPAND_COL_W} + ${ID_COL_W})`,
                              zIndex: 2,
                              background: "var(--background)",
                              borderBottom: "1px solid var(--border)",
                              padding: "0 var(--spacing-3)",
                              boxShadow: "inset -1px 0 0 0 var(--border)",
                            }}
                          >
                            <CellText style={{ fontSize: density.fontSize }}>{cc.countBasis}</CellText>
                          </td>
                          {/* Draggable cells */}
                          {visibleColumns.map((col, idx) => (
                            <ColumnBodyCell
                              key={col.key}
                              colKey={col.key}
                              colIndex={idx}
                              width={colWidths[col.key] ?? col.width}
                              draggedIndex={draggedIndex}
                              rowHeight={density.rowHeight}
                            >
                              {renderCellValue(col.key, cc, viewMode)}
                            </ColumnBodyCell>
                          ))}
                          {/* Action */}
                          <td
                            style={{
                              position: "sticky",
                              right: 0,
                              zIndex: 2,
                              background: "var(--background)",
                              borderBottom: "1px solid var(--border)",
                              padding: "0 var(--spacing-2)",
                              textAlign: "center",
                              boxShadow: "inset 1px 0 0 0 var(--border)",
                            }}
                          >
                            <RowActionMenu cc={cc} onDelete={handleDelete} onDuplicate={handleDuplicate} />
                          </td>
                        </tr>
                      );

                      // Child rows (if expanded) — use generateNestedRows for real per-item data
                      const childRows = isExpanded ? generateNestedRows(cc).map((nRow, itemIdx) => (
                        <tr
                          key={`${cc.id}-child-${itemIdx}`}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            height: density.rowHeight,
                            background: "var(--surface-secondary)",
                          }}
                        >
                          {/* Expand column — blank for child rows */}
                          <td
                            style={{
                              position: "sticky",
                              left: 0,
                              zIndex: 2,
                              background: "var(--surface-secondary)",
                              borderBottom: "1px solid var(--border)",
                              padding: 0,
                            }}
                          />
                          {/* ID column — blank for child rows */}
                          <td
                            style={{
                              position: "sticky",
                              left: EXPAND_COL_W,
                              zIndex: 2,
                              background: "var(--surface-secondary)",
                              borderBottom: "1px solid var(--border)",
                              padding: 0,
                            }}
                          />
                          {/* Count Basis column — blank for child rows */}
                          <td
                            style={{
                              position: "sticky",
                              left: `calc(${EXPAND_COL_W} + ${ID_COL_W})`,
                              zIndex: 2,
                              background: "var(--surface-secondary)",
                              borderBottom: "1px solid var(--border)",
                              padding: 0,
                              boxShadow: "inset -1px 0 0 0 var(--border)",
                            }}
                          />
                          {/* Data cells for each visible column — widths match parent ColumnBodyCell */}
                          {visibleColumns.map((col) => {
                            const w = colWidths[col.key] ?? col.width;
                            return (
                              <td
                                key={col.key}
                                style={{
                                  width: w,
                                  minWidth: w,
                                  maxWidth: w,
                                  height: density.rowHeight,
                                  background: "var(--surface-secondary)",
                                  borderBottom: "1px solid var(--border)",
                                  padding: "0 var(--spacing-3)",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                  boxSizing: "border-box",
                                }}
                              >
                                {renderNestedCellValue(col.key, nRow, viewMode, handleNestedImageClick)}
                              </td>
                            );
                          })}
                          {/* Empty action column */}
                          <td
                            style={{
                              position: "sticky",
                              right: 0,
                              zIndex: 2,
                              background: "var(--surface-secondary)",
                              borderBottom: "1px solid var(--border)",
                              padding: 0,
                              boxShadow: "inset 1px 0 0 0 var(--border)",
                            }}
                          />
                        </tr>
                      )) : [];

                      return [parentRow, ...childRows];
                    })}
                  </tbody>
                </table>
              )}
            </div>

            {/* Manage Columns side panel */}
            {showManageColumns && (
              <ManageColumnsPanel
                columns={columns}
                hiddenColumns={hiddenColumns}
                onToggleVisibility={handleToggleColumnVisibility}
                onReorder={(reordered) => setColumns(reordered)}
                onReset={handleResetColumns}
                onClose={() => setShowManageColumns(false)}
              />
            )}
          </div>

          {/* ── Pagination (inside the card) ── */}
          {!isLoading && filteredCounts.length > 0 && (
            <div
              className="shrink-0 border-t border-border"
              style={{ padding: 0 }}
            >
              <TablePagination
                currentPage={currentPage}
                totalPages={totalPages}
                recordsPerPage={recordsPerPage}
                onPageChange={setCurrentPage}
                onRecordsPerPageChange={(rpp) => {
                  setRecordsPerPage(rpp);
                  setCurrentPage(1);
                }}
              />
            </div>
          )}
        </div>

        {/* Drag preview pill */}
        <ColumnDragPreview
          dragState={dragState}
          previewElRef={previewElRef}
        />
      </div>

      {/* Insights Drawer */}
      {isDrawerOpen && (
        <InsightsDrawer
          categories={INSIGHT_CATEGORIES}
          activeInsights={activeInsights}
          onToggle={toggleInsight}
          onClose={closeInsightsDrawer}
        />
      )}

      {/* Item Image Preview Modal */}
      {previewItem && (
        <ItemImagePreviewModal
          item={previewItem}
          onClose={() => setPreviewItem(null)}
        />
      )}
    </div>
  );
}