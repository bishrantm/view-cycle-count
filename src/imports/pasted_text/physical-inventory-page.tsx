import React, { useState, useMemo, useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Columns3,
  ListFilter,
  PackageSearch,
  Package,
  Layers,
  BarChart3,
  Archive,
  MapPin,
  ShoppingCart,
  Factory,
  Hash,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImagePreviewModal } from "./image-preview-modal";
import { inventoryItems, type InventoryItem } from "../data/inventory-data";
import {
  useInsights,
  InsightsToggleButton,
  InsightsSection,
  InsightsDrawer,
  type InsightCategory,
} from "./insights-feature";
import { StatusBadge, ControlTypeBadge, CategoryBadge } from "./shared-badges";
import { DensityDropdown, DENSITY_CONFIG, type DensityMode } from "./density-dropdown";
import { ManageColumnsPanel, type ManageColumnDef } from "./manage-columns-panel";
import { HighlightText } from "./search-highlight";
import {
  FONT,
  CellText as SharedCellText,
  EmptyState as SharedEmptyState,
  TablePagination,
  RECORDS_PER_PAGE_OPTIONS,
} from "./shared-ui";
import { OnboardingHint } from "./onboarding-hint";

/* ═════════════════════════════════════════════════════════════════════════════
 * § 0  CONSTANTS & TYPES
 * ═════════════════════════════════════════════════════════════════════════════ */

type FilterTab = "all" | "serialized" | "non-serialized" | "lot" | "purchased" | "manufactured";

/* ═════════════════════════════════════════════════════════════════════════════
 * § 1  PAGE HEADER
 * ═════════════════════════════════════════════════════════════════════════════ */

function PageHeader() {
  return (
    <div style={{ background: "var(--background)" }}>
      <div
        className="flex items-center justify-between"
        style={{ padding: "var(--spacing-5) var(--spacing-6)" }}
      >
        {/* Title + Subtitle */}
        <div className="flex items-center" style={{ gap: "var(--spacing-2-5)" }}>
          <div
            className="flex items-center justify-center shrink-0 transition-all duration-200 hover:shadow-[0_0_0_3px_var(--primary-100)]"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "calc(var(--radius) + 2px)",
              background: "var(--primary-50)",
              padding: "var(--spacing-2)",
            }}
          >
            <Package size={20} style={{ color: "var(--primary)" }} aria-hidden="true" />
          </div>
          <div className="flex flex-col" style={{ gap: "var(--spacing-0-5)", minWidth: 0 }}>
            <p
              style={{
                fontSize: "var(--text-h5)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--foreground)",
                margin: 0,
                fontFamily: "var(--font-inter)",
                letterSpacing: "-0.18px",
              }}
            >
              Physical Inventory
            </p>
            <p
              style={{
                fontSize: "var(--text-body-sm)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--text-secondary)",
                margin: 0,
                fontFamily: "var(--font-inter)",
              }}
            >
              Track stock levels of items in the item library, Serialized and Non-serialized.
            </p>
          </div>
        </div>

        {/* Remove: Add Inventory button not needed on physical inventory page */}
      </div>
    </div>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 2  INSIGHT CATEGORY DEFINITIONS
 * ═════════════════════════════════════════════════════════════════════════════ */

const INSIGHT_CATEGORIES: InsightCategory<InventoryItem>[] = [
  {
    key: "inventory_overview",
    label: "Inventory Overview",
    icon: Package,
    metrics: [
      {
        key: "totalItems",
        label: "Total Items",
        icon: Package,
        compute: (data) => ({ value: data.length.toLocaleString(), subtitle: "All inventory items" }),
      },
      {
        key: "activeItems",
        label: "Active Items",
        icon: Archive,
        compute: (data) => {
          const count = data.filter((i) => i.status === "Active").length;
          return { value: count.toLocaleString(), subtitle: `${Math.round((count / data.length) * 100)}% of total` };
        },
      },
      {
        key: "totalOnHand",
        label: "Total On-Hand Qty",
        icon: Layers,
        compute: (data) => ({ value: data.reduce((s, i) => s + i.onHandQty, 0).toLocaleString(), subtitle: "Across all items" }),
      },
      {
        key: "avgOnHand",
        label: "Avg On-Hand Qty",
        icon: BarChart3,
        compute: (data) => {
          const avg = data.length > 0 ? Math.round(data.reduce((s, i) => s + i.onHandQty, 0) / data.length) : 0;
          return { value: avg.toLocaleString(), subtitle: "Per item average" };
        },
      },
    ],
  },
  {
    key: "control_types",
    label: "Control Types",
    icon: Hash,
    metrics: [
      {
        key: "serializedItems",
        label: "Serialized Items",
        icon: Hash,
        compute: (data) => ({ value: data.filter((i) => i.controlType === "Serialized").length.toLocaleString() }),
      },
      {
        key: "nonSerializedItems",
        label: "Non-Serialized Items",
        icon: Hash,
        compute: (data) => ({ value: data.filter((i) => i.controlType === "Non-Serialized").length.toLocaleString() }),
      },
    ],
  },
  {
    key: "acquisition_location",
    label: "Acquisition & Location",
    icon: MapPin,
    metrics: [
      {
        key: "purchasedItems",
        label: "Purchased Items",
        icon: ShoppingCart,
        compute: (data) => ({ value: data.filter((i) => i.acquisitionMethods.includes("Purchased")).length.toLocaleString() }),
      },
      {
        key: "manufacturedItems",
        label: "Manufactured Items",
        icon: Factory,
        compute: (data) => ({ value: data.filter((i) => i.acquisitionMethods.includes("Manufactured")).length.toLocaleString() }),
      },
      {
        key: "uniqueCategories",
        label: "Unique Categories",
        icon: BarChart3,
        compute: (data) => ({ value: new Set(data.map((i) => i.primaryCategory)).size.toLocaleString() }),
      },
      {
        key: "uniqueLocations",
        label: "Unique Locations",
        icon: MapPin,
        compute: (data) => ({ value: new Set(data.flatMap((i) => i.locations)).size.toLocaleString() }),
      },
    ],
  },
];


/* ═════════════════════════════════════════════════════════════════════════════
 * § 3  TOOLBAR – Search Bar
 * ═════════════════════════════════════════════════════════════════════════════ */

function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
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
        placeholder="Search Part No., Description, Category, Stocking Units"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
        style={{
          height: "38px",
          paddingLeft: "36px",
          paddingRight: "12px",
          fontSize: "var(--text-body-sm)",
          fontWeight: "var(--font-weight-normal)",
          fontFamily: "var(--font-inter)",
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
 * ═════════════════════════════════════════════════════════════════════════════ */

function ToolbarActions({
  viewMode,
  setViewMode,
  visibleColumnCount,
  insights,
  showManageColumns,
  onToggleManageColumns,
}: {
  viewMode: DensityMode;
  setViewMode: (v: DensityMode) => void;
  visibleColumnCount: number;
  insights: ReturnType<typeof useInsights>;
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

      {/* Density dropdown (global shared component) */}
      <DensityDropdown value={viewMode} onChange={setViewMode} />

      {/* Column count badge */}
      <button
        onClick={onToggleManageColumns}
        className="flex items-center gap-1.5 border border-border transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        style={{
          height: "32px",
          paddingLeft: "8px",
          paddingRight: "4px",
          cursor: "pointer",
          borderRadius: "var(--radius-sm)",
          background: showManageColumns ? "var(--primary-50)" : "var(--background)",
          borderColor: showManageColumns ? "var(--primary-200)" : undefined,
        }}
        aria-label="Manage columns"
        aria-pressed={showManageColumns}
      >
        <Columns3 size={16} style={{ color: showManageColumns ? "var(--primary)" : "var(--text-secondary)" }} aria-hidden="true" />
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: "var(--font-weight-medium)",
            fontSize: "var(--text-caption)",
            color: showManageColumns ? "var(--primary)" : "var(--foreground)",
          }}
        >
          Columns
        </span>
        <span
          className="flex items-center justify-center rounded-full"
          style={{
            width: "20px",
            height: "20px",
            background: "var(--primary-50)",
            color: "var(--primary-600)",
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-medium)",
            fontFamily: "var(--font-inter)",
          }}
        >
          {visibleColumnCount}
        </span>
      </button>
    </div>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 5  TOOLBAR – Quick Filter Pills
 * ═════════════════════════════════════════════════════════════════════════════ */

function QuickFilterBar({
  activeFilters,
  onFilterChange,
  filterCounts,
  meMode,
  onMeModeToggle,
}: {
  activeFilters: Set<FilterTab>;
  onFilterChange: (f: FilterTab) => void;
  filterCounts: Record<FilterTab, number>;
  meMode: boolean;
  onMeModeToggle: () => void;
}) {
  const filters: { key: FilterTab; label: string; dividerAfter?: boolean }[] = [
    { key: "all", label: "Show All" },
    { key: "serialized", label: "Serialized" },
    { key: "non-serialized", label: "Non-Serialized", dividerAfter: true },
    { key: "lot", label: "Lot" },
    { key: "purchased", label: "Purchased" },
    { key: "manufactured", label: "Manufactured" },
  ];

  return (
    <div className="flex items-center gap-2">
      {/* Me mode pill */}
      <button
        onClick={onMeModeToggle}
        className="flex items-center gap-1.5 rounded-full border border-border px-3 transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        style={{
          height: "30px",
          cursor: "pointer",
          background: meMode ? "var(--primary-50)" : "var(--background)",
          borderColor: meMode ? "var(--primary-600)" : "var(--border)",
          fontSize: "var(--text-label)",
          color: meMode ? "var(--primary)" : "var(--text-secondary)",
          fontFamily: "var(--font-inter)",
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
            fontFamily: "var(--font-inter)",
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
      {filters.map((f) => {
        const isActive = f.key === "all" ? activeFilters.size === 0 : activeFilters.has(f.key);
        const count = f.key !== "all" ? filterCounts[f.key] : undefined;
        return (
          <div key={f.key} style={{ display: "contents" }}>
            <button
              onClick={() => onFilterChange(f.key)}
              className="flex items-center gap-1.5 rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              style={{
                height: "30px",
                padding: count !== undefined ? "0 var(--spacing-2) 0 var(--spacing-3)" : "0 var(--spacing-3)",
                cursor: "pointer",
                background: isActive ? "var(--primary-50)" : "var(--background)",
                borderColor: isActive ? "var(--primary-600)" : "var(--border)",
                color: isActive ? "var(--primary)" : "var(--text-secondary)",
                fontSize: "var(--text-label)",
                fontFamily: "var(--font-inter)",
              }}
            >
              {f.label}
              {count !== undefined && (
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{
                    minWidth: "20px",
                    height: "20px",
                    padding: "0 var(--spacing-1-5)",
                    background: isActive ? "var(--primary-100)" : "var(--surface-secondary)",
                    color: isActive ? "var(--primary-700)" : "var(--text-secondary)",
                    fontSize: "var(--text-caption)",
                    fontWeight: "var(--font-weight-semibold)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {count}
                </span>
              )}
            </button>
            {f.dividerAfter && (
              <div
                style={{ width: "2px", height: "20px", background: "var(--border)", borderRadius: "1px", flexShrink: 0 }}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 7  TABLE – Empty state
 * ═════════════════════════════════════════════════════════════════════════════ */

/* § 7 & 8: EmptyState and Pagination imported from shared-ui.tsx */


/* ═════════════════════════════════════════════════════════════════════════════
 * § 9  TABLE COLUMNS
 * ═════════════════════════════════════════════════════════════════════════════ */

interface ColDef {
  key: string;
  label: string;
  width: number;
  sticky?: boolean;
}

const TABLE_COLUMNS: ColDef[] = [
  { key: "partNumber", label: "Part Number", width: 180, sticky: true },
  { key: "description", label: "Description", width: 260, sticky: true },
  { key: "status", label: "Status", width: 100 },
  { key: "controlType", label: "Inventory Control Type", width: 190 },
  { key: "primaryCategory", label: "Primary Category", width: 160 },
  { key: "additionalCategories", label: "Additional Category", width: 200 },
  { key: "onHandQty", label: "On-Hand Qty", width: 130 },
  { key: "altStockingUnits", label: "Alt. Stock Units", width: 120 },
  { key: "acquisitionMethods", label: "Acquisition", width: 140 },
];


/* ═════════════════════════════════════════════════════════════════════════════
 * § 9b  TABLE – Helper cell components
 * ═════════════════════════════════════════════════════════════════════════════ */

const CellText = SharedCellText;

function OverflowHint({ items, maxShow }: { items: string[]; maxShow: number }) {
  if (items.length <= maxShow) return null;
  return (
    <span
      className="inline-flex items-center justify-center rounded-full shrink-0"
      style={{
        minWidth: "20px",
        height: "20px",
        padding: "0 var(--spacing-1)",
        background: "var(--surface-secondary)",
        border: "1px solid var(--border)",
        fontSize: "var(--text-caption)",
        fontWeight: "var(--font-weight-medium)",
        fontFamily: "var(--font-inter)",
        color: "var(--text-secondary)",
      }}
    >
      +{items.length - maxShow}
    </span>
  );
}

function AcquisitionBadge({ method }: { method: string }) {
  return (
    <span
      className="inline-flex items-center border border-border shrink-0"
      style={{
        padding: "var(--tag-padding-y) var(--tag-padding-x)",
        borderRadius: "var(--tag-radius)",
        fontSize: "var(--tag-font-size)",
        fontWeight: "var(--font-weight-medium)",
        fontFamily: "var(--font-family)",
        whiteSpace: "nowrap",
        lineHeight: "normal",
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {method}
    </span>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 10  RENDER CELL
 * ════════════════════════════════════════════════════════════════════════════ */

function renderCell(item: InventoryItem, colKey: string, d: typeof DENSITY_CONFIG[DensityMode], onImageClick?: (item: InventoryItem) => void, searchQ?: string) {
  const q = searchQ?.trim() || "";
  switch (colKey) {
    case "partNumber":
      return (
        <div className="flex items-center gap-2" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          <ImageWithFallback
            src={item.image}
            alt={item.partNumber}
            className="shrink-0 rounded object-cover transition-shadow hover:ring-2 hover:ring-primary/40"
            style={{ width: "32px", height: "32px", borderRadius: "var(--radius-sm)", cursor: "pointer" }}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              onImageClick?.(item);
            }}
          />
          <CellText style={{ color: "var(--foreground)", fontWeight: "var(--font-weight-medium)" }}>
            <HighlightText text={item.partNumber} query={q} />
          </CellText>
        </div>
      );
    case "description":
      return <CellText><HighlightText text={item.description} query={q} /></CellText>;
    case "status":
      return <StatusBadge status={item.status} />;
    case "controlType":
      return <ControlTypeBadge type={item.controlType} />;
    case "primaryCategory":
      return <CategoryBadge label={item.primaryCategory} />;
    case "additionalCategories":
      return (
        <div className="flex items-center gap-1" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          <CategoryBadge label={item.additionalCategories[0]} />
          <OverflowHint items={item.additionalCategories} maxShow={1} />
        </div>
      );
    case "onHandQty":
      return <CellText>{item.onHandQty.toLocaleString()} {item.unit}</CellText>;
    case "altStockingUnits":
      return <CellText><HighlightText text={item.altStockingUnits} query={q} /></CellText>;
    case "acquisitionMethods":
      return <AcquisitionBadge method={item.primaryAcquisition} />;
    default:
      return <CellText>—</CellText>;
  }
}


/* ═════════════════════════════════════════════════════════════════════════════
 * § 11  MAIN LIST COMPONENT
 * ═════════════════════════════════════════════════════════════════════════════ */

export function InventoryList() {
  const navigate = useNavigate();

  /* ── UI state ── */
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Set<FilterTab>>(new Set());
  const [viewMode, setViewMode] = useState<DensityMode>("comfort");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [meMode, setMeMode] = useState(false);
  const [previewItem, setPreviewItem] = useState<InventoryItem | null>(null);
  const [showManageColumns, setShowManageColumns] = useState(false);

  /* ── Onboarding hint ref (targets the first table row) ── */
  const firstRowRef = useRef<HTMLTableRowElement>(null);

  /* ── Column management state ── */
  const DEFAULT_COLUMN_ORDER: ManageColumnDef[] = useMemo(() => TABLE_COLUMNS.map((c) => ({
    key: c.key,
    label: c.label,
    locked: c.sticky,
  })), []);
  const [columnOrder, setColumnOrder] = useState<ManageColumnDef[]>(DEFAULT_COLUMN_ORDER);
  const [hiddenColumns, setHiddenColumns] = useState<Set<string>>(new Set());

  const toggleColumnVisibility = useCallback((key: string) => {
    setHiddenColumns((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const resetColumns = useCallback(() => {
    setColumnOrder(DEFAULT_COLUMN_ORDER);
    setHiddenColumns(new Set());
  }, [DEFAULT_COLUMN_ORDER]);

  const visibleTableColumns = useMemo(() => {
    const orderMap = new Map(columnOrder.map((c, i) => [c.key, i]));
    return TABLE_COLUMNS
      .filter((c) => !hiddenColumns.has(c.key))
      .sort((a, b) => (orderMap.get(a.key) ?? 0) - (orderMap.get(b.key) ?? 0));
  }, [columnOrder, hiddenColumns]);

  /* ── Insights state ── */
  const insights = useInsights([]);

  /* ── Filtering ── */
  const filteredItems = useMemo(() => {
    let items = inventoryItems;

    if (activeFilters.size > 0) {
      /* OR group: serialized, non-serialized — items matching ANY selected */
      const orFilters = ["serialized", "non-serialized"] as const;
      const activeOr = orFilters.filter((f) => activeFilters.has(f));

      /* AND group: lot, purchased, manufactured — items must match ALL selected */
      const andFilters = ["lot", "purchased", "manufactured"] as const;
      const activeAnd = andFilters.filter((f) => activeFilters.has(f));

      /* Apply OR group first */
      if (activeOr.length > 0) {
        items = items.filter((i) =>
          activeOr.some((f) => {
            if (f === "serialized") return i.controlType === "Serialized";
            if (f === "non-serialized") return i.controlType === "Non-Serialized";
            return false;
          })
        );
      }

      /* Apply AND group (each active AND filter narrows the result) */
      for (const f of activeAnd) {
        if (f === "lot") items = items.filter((i) => i.controlType === "Lot" || i.controlType === "Lot-Serialized");
        if (f === "purchased") items = items.filter((i) => i.acquisitionMethods.includes("Purchased"));
        if (f === "manufactured") items = items.filter((i) => i.acquisitionMethods.includes("Manufactured"));
      }
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (i) =>
          i.partNumber.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.primaryCategory.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeFilters, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / recordsPerPage));
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  /* ── Filter counts ── */
  const filterCounts: Record<FilterTab, number> = useMemo(() => ({
    all: inventoryItems.length,
    serialized: inventoryItems.filter((i) => i.controlType === "Serialized").length,
    "non-serialized": inventoryItems.filter((i) => i.controlType === "Non-Serialized").length,
    lot: inventoryItems.filter((i) => i.controlType === "Lot" || i.controlType === "Lot-Serialized").length,
    purchased: inventoryItems.filter((i) => i.acquisitionMethods.includes("Purchased")).length,
    manufactured: inventoryItems.filter((i) => i.acquisitionMethods.includes("Manufactured")).length,
  }), []);

  /* ── Density config ── */
  const d = DENSITY_CONFIG[viewMode];

  /* ── Handlers ── */
  const handleSearchChange = useCallback((v: string) => {
    setSearchQuery(v);
    setCurrentPage(1);
  }, []);

  const handleFilterChange = useCallback((f: FilterTab) => {
    if (f === "all") {
      setActiveFilters(new Set());
    } else {
      setActiveFilters((prev) => {
        const next = new Set(prev);

        /* Exclusive (radio) group: serialized / non-serialized — only one at a time */
        const exclusiveGroup: FilterTab[] = ["serialized", "non-serialized"];
        /* Multi-select group: lot / purchased / manufactured — can toggle freely */

        if (exclusiveGroup.includes(f)) {
          if (next.has(f)) {
            next.delete(f);
          } else {
            // Clear the other exclusive member first
            for (const k of exclusiveGroup) next.delete(k);
            next.add(f);
          }
        } else {
          if (next.has(f)) next.delete(f);
          else next.add(f);
        }

        return next;
      });
    }
    setCurrentPage(1);
  }, []);

  const handleRecordsPerPageChange = useCallback((rpp: number) => {
    setRecordsPerPage(rpp);
    setCurrentPage(1);
  }, []);

  /* ── Table width ── */
  const stickyWidth = TABLE_COLUMNS.filter((c) => c.sticky).reduce((s, c) => s + c.width, 0);
  const scrollableWidth = TABLE_COLUMNS.filter((c) => !c.sticky).reduce((s, c) => s + c.width, 0);
  const tableMinWidth = stickyWidth + scrollableWidth;

  /* ── Sticky offsets ── */
  const stickyColumns = TABLE_COLUMNS.filter((c) => c.sticky);
  const scrollColumns = TABLE_COLUMNS.filter((c) => !c.sticky);

  let cumulativeLeft = 0;
  const stickyOffsets = stickyColumns.map((c) => {
    const left = cumulativeLeft;
    cumulativeLeft += c.width;
    return left;
  });

  /* ═══════════════════════════════════════════════════════════════════════════
   * RENDER
   * ═══════════════════════════════════════════════════════════════════════════ */
  return (
    <div className="flex flex-col h-full" style={{ fontFamily: "var(--font-inter)" }}>

      {/* ── § A  Page Header ── */}
      <PageHeader />

      {/* ── § B  Content area ── */}
      <div style={{ padding: "var(--spacing-5) var(--spacing-6) var(--spacing-6) var(--spacing-6)", background: "var(--header-bg)", flex: 1 }}>
        {/* ── B.1  Insight KPI Bar ── */}
        <InsightsSection
          categories={INSIGHT_CATEGORIES}
          data={inventoryItems}
          activeInsights={insights.activeInsights}
          onToggle={insights.toggle}
          onOpenDrawer={insights.openDrawer}
          timeRange={insights.timeRange}
          timeRangeLabel={insights.timeRangeLabel}
          onTimeRangeChange={insights.setTimeRange}
        />

        {/* ── B.2  Table Card ── */}
        <div
          className="overflow-hidden"
          style={{
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border)",
            background: "var(--card)",
          }}
        >
          {/* ── B.2.1  Toolbar ── */}
          <div className="flex flex-col gap-3 p-4 pb-3">
            {/* Row 1: Search + Filters button + Right actions */}
            <div className="flex items-center gap-3">
              <SearchBar value={searchQuery} onChange={handleSearchChange} />
              <button
                className="flex items-center gap-1.5 border border-border transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                style={{
                  height: "38px",
                  padding: "0 var(--spacing-3)",
                  cursor: "pointer",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--background)",
                  boxShadow: "var(--elevation-xs)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                <SlidersHorizontal size={14} style={{ color: "var(--text-secondary)" }} />
                <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--text-secondary)" }}>
                  Filters
                </span>
              </button>
              <ToolbarActions
                viewMode={viewMode}
                setViewMode={setViewMode}
                visibleColumnCount={visibleTableColumns.length}
                insights={insights}
                showManageColumns={showManageColumns}
                onToggleManageColumns={() => setShowManageColumns(!showManageColumns)}
              />
            </div>

            {/* Row 2: Quick filter pills */}
            <QuickFilterBar
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              filterCounts={filterCounts}
              meMode={meMode}
              onMeModeToggle={() => setMeMode(!meMode)}
            />
          </div>

          {/* ── B.2.2  Data Table + Manage Columns Panel ── */}
          <div className="flex" style={{ position: "relative" }}>
            <div className="flex-1 min-w-0">
          {paginatedItems.length === 0 ? (
            <SharedEmptyState label="items" />
          ) : (
            <div className="border-t border-border overflow-auto scroll-auto-hide" style={{ height: "calc(100vh - 380px)" }}>
              <table
                className="border-collapse"
                style={{ width: "100%", minWidth: `${visibleTableColumns.reduce((s, c) => s + c.width, 0)}px`, fontFamily: "var(--font-inter)", tableLayout: "fixed" }}
              >
                {/* Colgroup */}
                <colgroup>
                  {visibleTableColumns.filter((c) => c.sticky).map((col) => (
                    <col key={col.key} style={{ width: `${col.width}px`, minWidth: `${col.width}px` }} />
                  ))}
                  {visibleTableColumns.filter((c) => !c.sticky).map((col) => (
                    <col key={col.key} style={{ width: `${col.width}px`, minWidth: `${col.width}px` }} />
                  ))}
                </colgroup>

                {/* ── Table Header ── */}
                <thead>
                  <tr style={{ background: "var(--surface-secondary)" }}>
                    {/* Sticky header cells */}
                    {(() => {
                      const stickyCols = visibleTableColumns.filter((c) => c.sticky);
                      let cumLeft = 0;
                      return stickyCols.map((col, idx) => {
                        const left = cumLeft;
                        cumLeft += col.width;
                        return (
                          <th
                            key={col.key}
                            className="border-b border-border"
                            style={{
                              position: "sticky",
                              left: `${left}px`,
                              zIndex: 2,
                              width: col.width,
                              minWidth: col.width,
                              height: d.headerH,
                              background: "var(--surface-secondary)",
                              padding: `0 var(--spacing-3)`,
                              textAlign: "left",
                              boxShadow: idx === stickyCols.length - 1 ? "inset -1px 0 0 0 var(--border)" : undefined,
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secondary)", fontFamily: "var(--font-inter)", whiteSpace: "nowrap" }}>
                                {col.label}
                              </span>
                              <ListFilter size={12} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} aria-hidden="true" />
                            </div>
                          </th>
                        );
                      });
                    })()}
                    {/* Scrollable header cells */}
                    {visibleTableColumns.filter((c) => !c.sticky).map((col) => (
                      <th
                        key={col.key}
                        className="border-b border-border"
                        style={{
                          height: d.headerH,
                          background: "var(--surface-secondary)",
                          padding: `0 var(--spacing-3)`,
                          textAlign: "left",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secondary)", fontFamily: "var(--font-inter)", whiteSpace: "nowrap" }}>
                            {col.label}
                          </span>
                          <ListFilter size={12} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} aria-hidden="true" />
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* ── Table Body ── */}
                <tbody>
                  {paginatedItems.map((item, rowIdx) => (
                    <tr
                      key={item.id}
                      ref={rowIdx === 0 ? firstRowRef : undefined}
                      className="data-table-row group"
                      style={{ background: "var(--background)", cursor: "pointer" }}
                      onClick={() => navigate(`/inventory/${item.partNumber}`)}
                    >
                      {/* Sticky body cells */}
                      {(() => {
                        const stickyCols = visibleTableColumns.filter((c) => c.sticky);
                        let cumLeft = 0;
                        return stickyCols.map((col, idx) => {
                          const left = cumLeft;
                          cumLeft += col.width;
                          return (
                            <td
                              key={col.key}
                              className="border-b border-border"
                              style={{
                                position: "sticky",
                                left: `${left}px`,
                                zIndex: 1,
                                width: col.width,
                                minWidth: col.width,
                                height: d.rowH,
                                background: "inherit",
                                padding: `0 var(--spacing-3)`,
                                boxShadow: idx === stickyCols.length - 1 ? "inset -1px 0 0 0 var(--border)" : undefined,
                              }}
                            >
                              <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: d.fontSize }}>
                                {renderCell(item, col.key, d, setPreviewItem, searchQuery)}
                              </div>
                            </td>
                          );
                        });
                      })()}
                      {/* Scrollable body cells */}
                      {visibleTableColumns.filter((c) => !c.sticky).map((col) => (
                        <td
                          key={col.key}
                          className="border-b border-border"
                          style={{
                            height: d.rowH,
                            padding: `0 var(--spacing-3)`,
                          }}
                        >
                          <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: d.fontSize }}>
                            {renderCell(item, col.key, d, setPreviewItem, searchQuery)}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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

          {/* Pagination */}
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            recordsPerPage={recordsPerPage}
            onPageChange={setCurrentPage}
            onRecordsPerPageChange={handleRecordsPerPageChange}
          />
        </div>
      </div>

      {/* ── § C  Overlays ── */}
      {insights.isDrawerOpen && (
        <InsightsDrawer
          categories={INSIGHT_CATEGORIES}
          activeInsights={insights.activeInsights}
          onToggle={insights.toggle}
          onClose={insights.closeDrawer}
        />
      )}

      {/* ── Image Preview Modal ── */}
      {previewItem && (
        <ImagePreviewModal
          item={previewItem}
          onClose={() => setPreviewItem(null)}
        />
      )}

      {/* ── Onboarding Hint ── */}
      <OnboardingHint
        storageKey="inventory-row-click-hint"
        targetRef={firstRowRef}
      />
    </div>
  );
}