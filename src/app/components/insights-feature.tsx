// ─────────────────────────────────────────────────────────────────────────────
// insights-feature.tsx — Self-contained, reusable Insights feature.
//
// Exports:
//   Types:   InsightMetric<T>, InsightCategory<T>
//   Hook:    useInsights()
//   UI:      InsightsToggleButton, InsightsSection, InsightsBar, InsightsDrawer
//
// ── Layout Zone Guidance ─────────────────────────────────────────────────────
//
// A typical list page has three layout zones stacked vertically:
//
//   ┌──────────────────────────────────────┐
//   │  HEADER ZONE  (page title + actions) │
//   ├──────────────────────────────────────┤  ← Section Spacing / Zone Gap
//   │  INSIGHTS ZONE  (KPI bar)           │  ← InsightsSection lives HERE
//   ├──────────────────────────────────────┤
//   │  TOOLBAR ZONE  (search + filters)   │
//   │  TABLE / CONTENT                    │
//   └──────────────────────────────────────┘
//
// InsightsSection  – Self-positioning wrapper that renders the InsightsBar
//                    in the "Zone Gap" between the Header and Toolbar zones.
//                    Handles visibility (collapses when no insights are active),
//                    and applies the correct zone-gap spacing tokens.
//                    Drop it directly after the Header zone <div>.
//
// InsightsToggleButton – Goes inside the Toolbar zone alongside other controls.
// InsightsDrawer       – Fixed overlay; render anywhere in the component tree.
//
// All styling uses CSS custom properties from the design-system theme.
// Only external dependency: lucide-react for icons.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback, useRef, useEffect, type CSSProperties } from "react";
import {
  Search,
  X,
  Trash2,
  BarChart3,
  Clock,
  ChevronDown,
  Plus,
  Check,
  type LucideIcon,
} from "lucide-react";
import { format, subDays, subQuarters, startOfQuarter, endOfQuarter } from "date-fns";
import { FONT } from "../../imports/shared-ui";

// ─── Types ──────────────────────────────────────────────────────────────────

export type InsightTimeRangeKey =
  | "last_7_days"
  | "last_30_days"
  | "last_90_days"
  | "this_quarter"
  | "last_quarter"
  | "ytd"
  | "all_time";

export interface InsightTimeRangeOption {
  key: InsightTimeRangeKey;
  label: string;
  shortLabel: string;
  description: string;
}

function buildTimeRangeOptions(): InsightTimeRangeOption[] {
  const now = new Date();
  return [
    {
      key: "last_7_days",
      label: "Last 7 days",
      shortLabel: "Last 7 days",
      description: `${format(subDays(now, 7), "MMM d")} – ${format(now, "MMM d, yyyy")}`,
    },
    {
      key: "last_30_days",
      label: "Last 30 days",
      shortLabel: "Last 30 days",
      description: `${format(subDays(now, 30), "MMM d")} – ${format(now, "MMM d, yyyy")}`,
    },
    {
      key: "last_90_days",
      label: "Last 90 days",
      shortLabel: "Last 90 days",
      description: `${format(subDays(now, 90), "MMM d")} – ${format(now, "MMM d, yyyy")}`,
    },
    {
      key: "this_quarter",
      label: "This quarter",
      shortLabel: "This quarter",
      description: `${format(startOfQuarter(now), "MMM d")} – ${format(endOfQuarter(now), "MMM d, yyyy")}`,
    },
    {
      key: "last_quarter",
      label: "Last quarter",
      shortLabel: "Last quarter",
      description: `${format(startOfQuarter(subQuarters(now, 1)), "MMM d")} – ${format(endOfQuarter(subQuarters(now, 1)), "MMM d, yyyy")}`,
    },
    {
      key: "ytd",
      label: "Year to date",
      shortLabel: "YTD",
      description: `Jan 1 – ${format(now, "MMM d, yyyy")}`,
    },
    {
      key: "all_time",
      label: "All time",
      shortLabel: "All time",
      description: "Since the beginning",
    },
  ];
}

export const INSIGHT_TIME_RANGE_OPTIONS: InsightTimeRangeOption[] = buildTimeRangeOptions();

/** A single metric definition. `T` is your data-item type (e.g. CycleCount). */
export interface InsightMetric<T = any> {
  key: string;
  label: string;
  icon: LucideIcon;
  /** Given the full dataset, return the display value + optional subtitle. */
  compute: (data: T[]) => { value: string; subtitle?: string };
}

/** A logical grouping of metrics shown in the drawer. */
export interface InsightCategory<T = any> {
  key: string;
  label: string;
  icon: LucideIcon;
  metrics: InsightMetric<T>[];
}

// ─── Utilities ──────────────────────────────────────────────────────────────

/** Filter categories by a search string (matches metric labels). */
export function filterInsightCategories<T>(
  categories: InsightCategory<T>[],
  query: string,
): InsightCategory<T>[] {
  if (!query) return categories;
  const q = query.toLowerCase();
  return categories
    .map((cat) => ({
      ...cat,
      metrics: cat.metrics.filter((m) =>
        m.label.toLowerCase().includes(q),
      ),
    }))
    .filter((cat) => cat.metrics.length > 0);
}

/** "3 insights active" / "1 insight active" */
export function formatInsightCountLabel(count: number): string {
  return `${count} insight${count !== 1 ? "s" : ""} active`;
}

/** Build a flat lookup map from categories. */
export function buildMetricsMap<T>(
  categories: InsightCategory<T>[],
): Map<string, InsightMetric<T>> {
  return new Map(
    categories.flatMap((cat) => cat.metrics.map((m) => [m.key, m] as const)),
  );
}

// ─── Hook ───────────────────────────────────────────────────────────────────

export interface UseInsightsReturn {
  /** Set of active metric keys. */
  activeInsights: Set<string>;
  /** Whether the KPI bar above the table is visible. */
  isBarVisible: boolean;
  /** Whether the side-drawer is open. */
  isDrawerOpen: boolean;
  /** Number of active insights. */
  activeCount: number;
  /** Current time range key. */
  timeRange: InsightTimeRangeKey;
  /** Display label for the current time range. */
  timeRangeLabel: string;
  /** Toggle a single metric on/off. */
  toggle: (key: string) => void;
  /** Open the drawer. */
  openDrawer: () => void;
  /** Close the drawer. */
  closeDrawer: () => void;
  /** Toggle drawer open/closed. */
  toggleDrawer: () => void;
  /** Set the time range. */
  setTimeRange: (key: InsightTimeRangeKey) => void;
}

/** Compute the display label for a time range key + custom range. */
function computeTimeRangeLabel(
  key: InsightTimeRangeKey,
): string {
  const opt = INSIGHT_TIME_RANGE_OPTIONS.find((o) => o.key === key);
  return opt?.shortLabel ?? "Last 30 days";
}

/**
 * Manages all insights state — which metrics are active, drawer visibility,
 * time range selection, and auto-show/hide of the KPI bar.
 */
export function useInsights(
  initialKeys?: string[],
  initialTimeRange: InsightTimeRangeKey = "last_30_days",
): UseInsightsReturn {
  const [activeInsights, setActiveInsights] = useState<Set<string>>(
    () => new Set(initialKeys ?? []),
  );
  const [isBarVisible, setIsBarVisible] = useState(
    () => (initialKeys?.length ?? 0) > 0,
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [timeRange, setTimeRangeState] = useState<InsightTimeRangeKey>(initialTimeRange);

  const toggle = useCallback((key: string) => {
    setActiveInsights((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      setIsBarVisible(next.size > 0);
      return next;
    });
  }, []);

  const setTimeRange = useCallback((key: InsightTimeRangeKey) => {
    setTimeRangeState(key);
  }, []);

  const timeRangeLabel = computeTimeRangeLabel(timeRange);

  return {
    activeInsights,
    isBarVisible,
    isDrawerOpen,
    activeCount: activeInsights.size,
    timeRange,
    timeRangeLabel,
    toggle,
    openDrawer: useCallback(() => setIsDrawerOpen(true), []),
    closeDrawer: useCallback(() => setIsDrawerOpen(false), []),
    toggleDrawer: useCallback(() => setIsDrawerOpen((v) => !v), []),
    setTimeRange,
  };
}

// ─── Internal: Toggle circle ────────────────────────────────────────────────

function ToggleCircle({ isActive }: { isActive: boolean }) {
  return (
    <div
      style={{
        width: 18,
        height: 18,
        borderRadius: "var(--radius-full)",
        border: isActive ? "none" : "1.5px solid var(--border)",
        background: isActive ? "var(--primary-500)" : "var(--background)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "all 0.15s ease",
      }}
    >
      {isActive && (
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 6L5 8.5L9.5 4"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

// ─── Internal: Drawer metric card ───────────────────────────────────────────

/** Preview sample values shown in the drawer cards. Override via `previewValues` prop. */
const DEFAULT_PREVIEW_VALUES: Record<string, string> = {
  totalCounts: "24",
  activeCounts: "5",
  pendingCounts: "7",
  completedCounts: "12",
  avgAccuracy: "96.2%",
  totalVariance: "148",
  discrepancies: "6",
  matchRate: "88%",
  awaitingApproval: "3",
  cancelledCounts: "1",
  committedCounts: "9",
  totalSystemCount: "1,842",
  totalActualCount: "1,795",
  highPriority: "4",
  uniqueLocations: "12",
};

function DrawerMetricCard({
  metric,
  isActive,
  onToggle,
  previewValues,
}: {
  metric: InsightMetric;
  isActive: boolean;
  onToggle: () => void;
  previewValues?: Record<string, string>;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = metric.icon;
  const preview = (previewValues ?? DEFAULT_PREVIEW_VALUES)[metric.key] ?? "\u2014";

  return (
    <div
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-2)",
        minHeight: 54,
        padding: "var(--spacing-2) var(--spacing-2-5)",
        cursor: "pointer",
        minWidth: 0,
        overflow: "hidden",
        background: isActive
          ? "var(--primary-50)"
          : hovered
            ? "var(--surface-secondary)"
            : "var(--background)",
        border: `1px solid ${
          isActive
            ? "var(--primary-200)"
            : hovered
              ? "var(--primary-100)"
              : "var(--border)"
        }`,
        borderRadius: "var(--radius-md)",
        transition: "all 0.15s ease",
        boxShadow: hovered ? "var(--elevation-xs)" : "none",
      }}
    >
      {/* Icon box */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "var(--radius-sm)",
          background: isActive ? "var(--primary-100)" : "var(--surface-secondary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "background 0.15s ease",
        }}
      >
        <Icon
          size={14}
          style={{
            color: isActive ? "var(--primary-600)" : "var(--text-secondary)",
            transition: "color 0.15s ease",
          }}
        />
      </div>

      {/* Label + preview value */}
      <div className="flex flex-col flex-1" style={{ minWidth: 0 }}>
        <span
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--foreground)",
            fontFamily: FONT,
            lineHeight: "var(--leading-tight)",
          }}
        >
          {metric.label}
        </span>
        <span
          style={{
            fontSize: "var(--text-caption-helper)",
            fontWeight: "var(--font-weight-normal)",
            color: "var(--text-tertiary)",
            fontFamily: FONT,
            lineHeight: "var(--leading-snug)",
          }}
        >
          {preview}
        </span>
      </div>

      {/* Toggle */}
      <ToggleCircle isActive={isActive} />
    </div>
  );
}

// ─── Internal: KPI card (Performance Insights bar) ─────────────────────────

function InsightKPICard<T>({
  metricKey,
  metric,
  data,
  onRemove,
}: {
  metricKey: string;
  metric: InsightMetric<T>;
  data: T[];
  onRemove: (key: string) => void;
}) {
  const { value, subtitle } = metric.compute(data);
  const Icon = metric.icon;

  return (
    <div
      className="relative group flex flex-col justify-between border border-border transition-colors hover:border-primary/30"
      style={{
        padding: "var(--spacing-3-5) var(--spacing-4)",
        background: "var(--card)",
        fontFamily: FONT,
        borderRadius: "var(--radius-md)",
      }}
    >
      {/* Remove button */}
      <button
        onClick={() => onRemove(metricKey)}
        className="absolute bottom-2 right-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          width: "22px",
          height: "22px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          borderRadius: "var(--radius-sm)",
        }}
        aria-label={`Remove ${metric.label}`}
      >
        <Trash2 size={13} style={{ color: "var(--destructive)" }} />
      </button>

      <div
        className="flex items-center justify-between"
        style={{ marginBottom: "var(--spacing-2)" }}
      >
        <span
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--text-secondary)",
            fontFamily: FONT,
          }}
        >
          {metric.label}
        </span>
        <Icon size={16} style={{ color: "var(--text-tertiary)" }} />
      </div>
      <span
        style={{
          fontSize: "var(--text-h4)",
          fontWeight: "var(--font-weight-semibold)",
          color: "var(--foreground)",
          fontFamily: FONT,
          lineHeight: "var(--leading-tight)",
        }}
      >
        {value}
      </span>
      {subtitle && (
        <span
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-normal)",
            color: "var(--text-tertiary)",
            fontFamily: FONT,
            marginTop: "var(--spacing-1)",
          }}
        >
          {subtitle}
        </span>
      )}
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// PUBLIC COMPONENTS
// ═════════════════════════════════════════════════════════════════════════════

// ─── Internal: Time Range Dropdown ──────────────────────────────────────────

function TimeRangeDropdown({
  value,
  label,
  onChange,
}: {
  value: InsightTimeRangeKey;
  label: string;
  onChange: (key: InsightTimeRangeKey) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  const handleSelect = (key: InsightTimeRangeKey) => {
    onChange(key);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* Trigger pill */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-1 rounded-full border transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        style={{
          height: "26px",
          paddingLeft: "var(--spacing-2-5)",
          paddingRight: "var(--spacing-2)",
          cursor: "pointer",
          background: isOpen ? "var(--primary-50)" : "var(--background)",
          borderColor: isOpen ? "var(--primary-200)" : "var(--border)",
          fontSize: "var(--text-caption)",
          fontWeight: "var(--font-weight-normal)",
          color: isOpen ? "var(--primary)" : "var(--text-secondary)",
          fontFamily: FONT,
          whiteSpace: "nowrap",
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select time range"
      >
        <Clock
          size={12}
          style={{ color: isOpen ? "var(--primary)" : "var(--text-tertiary)" }}
        />
        <span style={{ padding: "0 var(--spacing-0-5)" }}>{label}</span>
        <ChevronDown
          size={12}
          style={{
            color: isOpen ? "var(--primary)" : "var(--text-tertiary)",
            transform: isOpen ? "rotate(180deg)" : "none",
            transition: "transform 0.15s ease",
          }}
        />
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + var(--spacing-1))",
            left: 0,
            zIndex: 30,
            minWidth: "240px",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--elevation-card)",
            fontFamily: FONT,
            overflow: "hidden",
          }}
          role="listbox"
          aria-label="Time range options"
        >
          {/* Preset options */}
          <div style={{ padding: "var(--spacing-1)" }}>
            {INSIGHT_TIME_RANGE_OPTIONS.map((opt) => {
              const isSelected = value === opt.key;
              const isHovered = hoveredKey === opt.key;
              return (
                <button
                  key={opt.key}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(opt.key)}
                  onMouseEnter={() => setHoveredKey(opt.key)}
                  onMouseLeave={() => setHoveredKey(null)}
                  className="flex items-center w-full transition-colors"
                  style={{
                    gap: "var(--spacing-2-5)",
                    padding: "var(--spacing-2) var(--spacing-2-5)",
                    cursor: "pointer",
                    background: isSelected
                      ? "var(--primary-50)"
                      : isHovered
                        ? "var(--surface-secondary)"
                        : "transparent",
                    border: "none",
                    borderRadius: "var(--radius-sm)",
                    textAlign: "left",
                  }}
                >
                  <div className="flex flex-col flex-1" style={{ minWidth: 0 }}>
                    <span
                      style={{
                        fontSize: "var(--text-caption)",
                        fontWeight: isSelected
                          ? "var(--font-weight-semibold)"
                          : "var(--font-weight-medium)",
                        color: isSelected
                          ? "var(--primary)"
                          : "var(--foreground)",
                        fontFamily: FONT,
                        lineHeight: "var(--leading-snug)",
                      }}
                    >
                      {opt.label}
                    </span>
                    <span
                      style={{
                        fontSize: "var(--text-caption-helper)",
                        fontWeight: "var(--font-weight-normal)",
                        color: isSelected ? "var(--primary-400)" : "var(--text-tertiary)",
                        fontFamily: FONT,
                        lineHeight: "var(--leading-snug)",
                      }}
                    >
                      {opt.description}
                    </span>
                  </div>
                  {isSelected && (
                    <Check
                      size={14}
                      style={{
                        color: "var(--primary)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── 1. InsightsToggleButton (toolbar) ──────────────────────────────────────

export interface InsightsToggleButtonProps {
  isOpen: boolean;
  activeCount: number;
  onClick: () => void;
  style?: CSSProperties;
}

/**
 * Toolbar button: icon + "Insights" label + count badge.
 * Drop this into any toolbar row.
 */
export function InsightsToggleButton({
  isOpen,
  activeCount,
  onClick,
  style,
}: InsightsToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 border transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      style={{
        height: "38px",
        paddingLeft: "var(--spacing-2)",
        paddingRight: "var(--spacing-2-5)",
        cursor: "pointer",
        borderRadius: "var(--radius-sm)",
        background: isOpen ? "var(--primary-50)" : "var(--background)",
        borderColor: isOpen ? "var(--primary-200)" : "var(--border)",
        boxShadow: "var(--elevation-xs)",
        ...style,
      }}
      aria-label="Toggle insights"
      aria-pressed={isOpen}
    >
      <BarChart3
        size={16}
        style={{ color: isOpen ? "var(--primary)" : "var(--text-secondary)" }}
        aria-hidden="true"
      />
      <span
        style={{
          fontSize: "var(--text-label)",
          fontWeight: "var(--font-weight-medium)",
          color: isOpen ? "var(--primary)" : "var(--text-secondary)",
          fontFamily: FONT,
          whiteSpace: "nowrap",
        }}
      >
        Insights
      </span>
      {activeCount > 0 && (
        <span
          className="flex items-center justify-center rounded-full"
          style={{
            minWidth: "18px",
            height: "18px",
            padding: "0 var(--spacing-1)",
            background: "var(--primary-100)",
            color: "var(--primary-700)",
            fontSize: "var(--text-xs)",
            fontWeight: "var(--font-weight-semibold)",
            fontFamily: FONT,
          }}
        >
          {activeCount}
        </span>
      )}
    </button>
  );
}

// ─── 2. InsightsSection (self-positioning wrapper) ────────────────────────

export interface InsightsSectionProps<T> {
  /** Your metric category definitions. */
  categories: InsightCategory<T>[];
  /** The data array passed to each metric's `compute` function. */
  data: T[];
  /** Currently active metric keys. */
  activeInsights: Set<string>;
  /** Called when user removes a KPI card. */
  onToggle: (key: string) => void;
  /** Called when user clicks "+ Add Insights". */
  onOpenDrawer: () => void;
  /** Optional: title text (default "Performance Insights"). */
  title?: string;
  /** Current time range key (from useInsights hook). */
  timeRange?: InsightTimeRangeKey;
  /** Display label for the current time range (from useInsights hook). */
  timeRangeLabel?: string;
  /** Called when user selects a preset time range (from useInsights hook). */
  onTimeRangeChange?: (key: InsightTimeRangeKey) => void;
  style?: CSSProperties;
}

/**
 * Self-positioning wrapper that renders the InsightsBar
 * in the "Zone Gap" between the Header and Toolbar zones.
 * Handles visibility (collapses when no insights are active),
 * and applies the correct zone-gap spacing tokens.
 * Drop it directly after the Header zone <div>.
 */
export function InsightsSection<T>({
  categories,
  data,
  activeInsights,
  onToggle,
  onOpenDrawer,
  title = "Performance Insights",
  timeRange = "last_30_days",
  timeRangeLabel = "Last 30 days",
  onTimeRangeChange,
  style,
}: InsightsSectionProps<T>) {
  if (activeInsights.size === 0) return null;

  const metricsMap = buildMetricsMap(categories);

  return (
    <div
      className="relative shrink-0"
      style={{
        marginBottom: "var(--spacing-4)",
        ...style,
      }}
    >
      {/* Header row */}
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: "var(--spacing-3)" }}
      >
        <div className="flex items-center gap-3">
          <span
            style={{
              fontSize: "var(--text-body-sm)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--foreground)",
              fontFamily: FONT,
            }}
          >
            {title}
          </span>
          <TimeRangeDropdown
            value={timeRange}
            label={timeRangeLabel}
            onChange={onTimeRangeChange ?? (() => {})}
          />
        </div>
        <button
          onClick={onOpenDrawer}
          className="flex items-center gap-1.5 transition-colors hover:opacity-80"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "var(--text-body-sm)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--primary)",
            fontFamily: FONT,
          }}
        >
          <Plus size={14} style={{ color: "var(--primary)" }} />
          Add Insights
        </button>
      </div>

      {/* KPI cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "var(--spacing-3)",
          paddingBottom: "var(--spacing-1)",
        }}
      >
        {Array.from(activeInsights).map((key) => {
          const metric = metricsMap.get(key);
          if (!metric) return null;
          return (
            <InsightKPICard
              key={key}
              metricKey={key}
              metric={metric}
              data={data}
              onRemove={onToggle}
            />
          );
        })}
      </div>
    </div>
  );
}

// ─── 3. InsightsBar (Performance Insights KPI row above content) ────────────

export interface InsightsBarProps<T> {
  /** Your metric category definitions. */
  categories: InsightCategory<T>[];
  /** The data array passed to each metric's `compute` function. */
  data: T[];
  /** Currently active metric keys. */
  activeInsights: Set<string>;
  /** Called when user removes a KPI card. */
  onToggle: (key: string) => void;
  /** Called when user clicks "+ Add Insights". */
  onOpenDrawer: () => void;
  /** Optional: title text (default "Performance Insights"). */
  title?: string;
  /** Current time range key (from useInsights hook). */
  timeRange?: InsightTimeRangeKey;
  /** Display label for the current time range (from useInsights hook). */
  timeRangeLabel?: string;
  /** Called when user selects a preset time range (from useInsights hook). */
  onTimeRangeChange?: (key: InsightTimeRangeKey) => void;
  style?: CSSProperties;
}

/**
 * The "Performance Insights" KPI bar rendered above the table.
 * Only renders when there are active insights.
 */
export function InsightsBar<T>({
  categories,
  data,
  activeInsights,
  onToggle,
  onOpenDrawer,
  title = "Performance Insights",
  timeRange = "last_30_days",
  timeRangeLabel = "Last 30 days",
  onTimeRangeChange,
  style,
}: InsightsBarProps<T>) {
  if (activeInsights.size === 0) return null;

  const metricsMap = buildMetricsMap(categories);

  return (
    <div style={{ marginBottom: "var(--spacing-4)", ...style }}>
      {/* Header row */}
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: "var(--spacing-3)" }}
      >
        <div className="flex items-center gap-3">
          <span
            style={{
              fontSize: "var(--text-body-sm)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--foreground)",
              fontFamily: FONT,
            }}
          >
            {title}
          </span>
          <TimeRangeDropdown
            value={timeRange}
            label={timeRangeLabel}
            onChange={onTimeRangeChange ?? (() => {})}
          />
        </div>
        <button
          onClick={onOpenDrawer}
          className="flex items-center gap-1.5 transition-colors hover:opacity-80"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "var(--text-body-sm)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--primary)",
            fontFamily: FONT,
          }}
        >
          <Plus size={14} style={{ color: "var(--primary)" }} />
          Add Insights
        </button>
      </div>

      {/* KPI cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "var(--spacing-3)",
          paddingBottom: "var(--spacing-1)",
        }}
      >
        {Array.from(activeInsights).map((key) => {
          const metric = metricsMap.get(key);
          if (!metric) return null;
          return (
            <InsightKPICard
              key={key}
              metricKey={key}
              metric={metric}
              data={data}
              onRemove={onToggle}
            />
          );
        })}
      </div>
    </div>
  );
}

// ─── 4. InsightsDrawer (right-side panel) ───────────────────────────────────

export interface InsightsDrawerProps<T> {
  /** Your metric category definitions. */
  categories: InsightCategory<T>[];
  /** Currently active metric keys. */
  activeInsights: Set<string>;
  /** Called when user toggles a metric. */
  onToggle: (key: string) => void;
  /** Called when user closes the drawer. */
  onClose: () => void;
  /** Optional preview values for drawer cards (key → display string). */
  previewValues?: Record<string, string>;
  /** Optional: drawer title (default "Add Insights"). */
  title?: string;
  /** Optional: drawer subtitle. */
  subtitle?: string;
  style?: CSSProperties;
}

/**
 * Full-height right-side drawer for toggling insight metrics on/off.
 * Includes backdrop, search, categorised 2-col grid, and footer.
 */
export function InsightsDrawer<T>({
  categories,
  activeInsights,
  onToggle,
  onClose,
  previewValues,
  title = "Add Insights",
  subtitle = "Customize your dashboard with relevant metrics.",
  style,
}: InsightsDrawerProps<T>) {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCategories = filterInsightCategories(categories, searchQuery);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "var(--overlay-backdrop)",
        }}
        aria-hidden="true"
      />

      {/* Right-side drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "400px",
          zIndex: 50,
          background: "var(--card)",
          borderLeft: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          fontFamily: FONT,
          boxShadow: "var(--elevation-drawer)",
          ...style,
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "var(--spacing-4) var(--spacing-5) var(--spacing-3) var(--spacing-5)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{ marginBottom: "var(--spacing-1)" }}
          >
            <span
              style={{
                fontSize: "var(--text-body-sm)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)",
                fontFamily: FONT,
              }}
            >
              {title}
            </span>
            <button
              onClick={onClose}
              className="flex items-center justify-center transition-colors hover:bg-secondary"
              style={{
                width: "28px",
                height: "28px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                borderRadius: "var(--radius-sm)",
              }}
              aria-label="Close insights panel"
            >
              <X size={16} style={{ color: "var(--text-secondary)" }} />
            </button>
          </div>
          <p
            style={{
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--text-tertiary)",
              margin: 0,
              fontFamily: FONT,
              lineHeight: "var(--leading-normal)",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Search */}
        <div style={{ padding: "var(--spacing-2-5) var(--spacing-5)" }}>
          <div className="relative">
            <Search
              size={14}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--text-tertiary)" }}
            />
            <input
              type="text"
              placeholder="Search metrics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-ring/30"
              style={{
                height: "32px",
                paddingLeft: "var(--spacing-8)",
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

        {/* Metric categories — 2-col grid */}
        <div
          className="flex-1 overflow-y-auto scrollbar-thin scrollbar-auto-hide"
          style={{ padding: "var(--spacing-1) 0 var(--spacing-4) 0", overflowX: "hidden" }}
        >
          {filteredCategories.map((cat, catIdx) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={cat.key}
                style={{
                  paddingTop: catIdx > 0 ? "var(--spacing-2)" : undefined,
                  marginTop: catIdx > 0 ? "var(--spacing-2)" : undefined,
                }}
              >
                {/* Category header */}
                <div
                  className="flex items-center gap-1.5"
                  style={{
                    padding: "var(--spacing-2-5) var(--spacing-5) var(--spacing-2) var(--spacing-5)",
                  }}
                >
                  <CatIcon size={12} style={{ color: "var(--text-tertiary)" }} />
                  <span
                    style={{
                      fontSize: "var(--text-caption-helper)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--text-secondary)",
                      fontFamily: FONT,
                      textTransform: "uppercase",
                      letterSpacing: "var(--tracking-caps)",
                    }}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Metrics — 2-col grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "var(--spacing-2)",
                    padding: "0 var(--spacing-5)",
                  }}
                >
                  {cat.metrics.map((metric) => (
                    <DrawerMetricCard
                      key={metric.key}
                      metric={metric}
                      isActive={activeInsights.has(metric.key)}
                      onToggle={() => onToggle(metric.key)}
                      previewValues={previewValues}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: "var(--spacing-2-5) var(--spacing-5)",
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
            {formatInsightCountLabel(activeInsights.size)}
          </span>
          {activeInsights.size > 0 && (
            <div className="flex items-center" style={{ gap: "var(--spacing-1)" }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "var(--radius-full)",
                  background: "var(--primary-500)",
                }}
              />
              <span
                style={{
                  fontSize: "var(--text-caption-helper)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--primary-600)",
                  fontFamily: FONT,
                }}
              >
                {activeInsights.size} active
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}