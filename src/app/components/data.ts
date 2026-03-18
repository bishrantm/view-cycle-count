// ─────────────────────────────────────────────────────────────────────────────
// data.ts — Single source of truth for all content, labels, mock data,
// dropdown options, status names, column definitions, and placeholder text.
// Components import content from here instead of defining it themselves.
// ─────────────────────────────────────────────────────────────────────────────

import type React from "react";
import type { CycleCountStatus } from "./status-badge";
import type { DragColumnDef } from "./draggable-column-system";
import {
  AlignJustify,
  Hash,
  Activity,
  Clock,
  CheckCircle2,
  Percent,
  TrendingUp,
  AlertTriangle,
  X,
  XCircle,
  RefreshCcw,
  BarChart3,
  Target,
  Eye,
  MapPin,
  Package,
} from "lucide-react";
import { generateMockDetail, generateDiscrepancies, generateCountItems } from "./mock-registry";

// ─── Filter & View Types ────────────────────────────────────────────────────
export type QuickFilter =
  | "all"
  | "pending"
  | "in_progress"
  | "awaiting_approval"
  | "unassigned";
export type ViewMode = "condensed" | "comfort" | "relaxed";
export type DetailTab =
  | "overview"
  | "locations"
  | "items"
  | "discrepancies"
  | "activity";

// ─── Cycle Count List: Page Labels ──────────────────────────────────────────
export const LIST_PAGE_LABELS = {
  title: "Cycle Count",
  subtitle:
    "Track stock levels of items in the item library, Serialized and Non-Serialized.",
  createButton: "Plan Cycle Count",
  searchPlaceholder:
    "Search Part No., Description, Category, Location, Assignee",
  filtersButton: "Filters",
  insightsButton: "Insights",
  addInsightsButton: "Add Insights",
  manageColumnsTitle: "Manage Columns",
  manageColumnsSubtitle: "Drag to reorder \u00b7 Toggle eye to show/hide",
  searchColumnsPlaceholder: "Search columns...",
  searchMetricsPlaceholder: "Search metrics...",
  lockedLeftLabel: "LOCKED LEFT",
  reorderableLabel: "REORDERABLE",
  resetLabel: "Reset",
  recordsPerPageLabel: "Records per page",
  prevLabel: "Prev",
  nextLabel: "Next",
  meModeLabel: "Me mode",
  meModeInitials: "AA",
  performanceInsightsLabel: "Performance Insights",
  last30DaysLabel: "Last 30 days",
  insightsDrawerTitle: "Add Insights",
  insightsDrawerSubtitle: "Customize your dashboard with relevant metrics.",
  emptyTitle: "No cycle counts yet",
  emptyDescription:
    "Create your first cycle count to start tracking inventory accuracy across your warehouse locations.",
} as const;

// ─── Quick Filter Definitions ───────────────────────────────────────────────
export const QUICK_FILTER_LABELS: Record<QuickFilter, string> = {
  all: "Show All",
  pending: "Pending",
  in_progress: "In Progress",
  awaiting_approval: "Awaiting Approval",
  unassigned: "Unassigned",
};

// ─── Pagination Options ─────────────────────────────────────────────────────
export const RECORDS_PER_PAGE_OPTIONS = [10, 25, 50] as const;

// ─── Row Action Menu Labels ─────────────────────────────────────────────────
export const ROW_ACTION_LABELS = {
  viewDetails: "View Details",
  continueCounting: "Continue Counting",
  duplicate: "Duplicate",
  export: "Export",
  delete: "Delete",
} as const;

// ─── View Mode Options (density dropdown) ───────────────────────────────────
export const VIEW_MODE_OPTIONS: {
  value: ViewMode;
  label: string;
  description: string;
  icon: typeof AlignJustify;
}[] = [
  {
    value: "condensed",
    label: "Condensed",
    description: "Compact view",
    icon: AlignJustify,
  },
  {
    value: "comfort",
    label: "Comfort",
    description: "Balanced view",
    icon: AlignJustify,
  },
  {
    value: "relaxed",
    label: "Relaxed",
    description: "Spacious view",
    icon: AlignJustify,
  },
];

// ─── Density Config ─────────────────────────────────────────────────────────
export const DENSITY_CONFIG: Record<
  ViewMode,
  { rowHeight: string; headerHeight: string; fontSize: string }
> = {
  condensed: {
    rowHeight: "32px",
    headerHeight: "36px",
    fontSize: "var(--text-caption)",
  },
  comfort: {
    rowHeight: "44px",
    headerHeight: "40px",
    fontSize: "var(--text-label)",
  },
  relaxed: {
    rowHeight: "56px",
    headerHeight: "44px",
    fontSize: "var(--text-label)",
  },
};

// ─── Column Layout Constants ────────────────────────────────────────────────
export const EXPAND_COL_W = "52px";
export const ID_COL_W = "110px";
export const CB_COL_W = "120px";
export const ACTION_COL_W = "64px";
export const COL_MIN_W = 180;
export const COL_MAX_W = 600;

// ─── Default Draggable Table Columns ────────────────────────────────────────
export const DEFAULT_TABLE_COLUMNS: DragColumnDef[] = [
  { key: "items", label: "Items", width: 240 },
  { key: "categories", label: "Categories", width: 180 },
  { key: "locations", label: "Location(s)", width: 160 },
  { key: "status", label: "Status", width: 170 },
  { key: "discrepancy", label: "Discrepancy", width: 120 },
  { key: "systemCount", label: "System Count", width: 140 },
  { key: "actualCount", label: "Actual Count", width: 140 },
  { key: "reported", label: "Reported", width: 120 },
  { key: "assignees", label: "Assignee(s)", width: 220 },
  { key: "completedOn", label: "Completed On", width: 190 },
  { key: "description", label: "Description", width: 220 },
  { key: "priority", label: "Priority", width: 140 },
  { key: "createdOn", label: "Created On", width: 190 },
  { key: "createdBy", label: "Created By", width: 180 },
  { key: "startDate", label: "Start Date", width: 190 },
  { key: "dueDate", label: "Due Date", width: 190 },
  { key: "tags", label: "Tags", width: 200 },
];

// ─── Locked (non-draggable) columns ─────────────────────────────────────────
export const LOCKED_COLUMNS = [
  { key: "id", label: "ID" },
  { key: "countBasis", label: "Count Basis" },
];

// ─── Sticky Column Header Labels ────────────────────────────────────────────
export const STICKY_HEADER_LABELS = {
  id: "ID",
  countBasis: "Count Basis",
  actions: "Actions",
} as const;

// ─── Insight Metric Definitions ─────────────────────────────────────────────
// NOTE: `compute` functions reference logic.ts indirectly via the metric key.
// The compute functions are defined here but use data-only operations.
import type { CycleCount } from "./cycle-count-store";

export interface InsightMetric {
  key: string;
  label: string;
  icon: typeof TrendingUp;
  compute: (counts: CycleCount[]) => { value: string; subtitle?: string };
}

export interface InsightCategory {
  key: string;
  label: string;
  icon: typeof BarChart3;
  metrics: InsightMetric[];
}

export const INSIGHT_CATEGORIES: InsightCategory[] = [
  {
    key: "overview",
    label: "Count Overview",
    icon: BarChart3,
    metrics: [
      {
        key: "totalCounts",
        label: "Total Counts",
        icon: Hash,
        compute: (cc) => ({ value: `${cc.length}`, subtitle: "All cycle counts" }),
      },
      {
        key: "activeCounts",
        label: "Active Counts",
        icon: Activity,
        compute: (cc) => {
          const active = cc.filter((c) => c.status === "in_progress").length;
          return { value: `${active}`, subtitle: "Currently counting" };
        },
      },
      {
        key: "pendingCounts",
        label: "Pending Counts",
        icon: Clock,
        compute: (cc) => {
          const pending = cc.filter((c) => c.status === "pending").length;
          return { value: `${pending}`, subtitle: "Not yet started" };
        },
      },
      {
        key: "completedCounts",
        label: "Completed Counts",
        icon: CheckCircle2,
        compute: (cc) => {
          const completed = cc.filter(
            (c) => c.status === "completed" || c.status === "committed"
          ).length;
          return { value: `${completed}`, subtitle: "Successfully closed" };
        },
      },
    ],
  },
  {
    key: "accuracy",
    label: "Accuracy & Difference",
    icon: Target,
    metrics: [
      {
        key: "avgAccuracy",
        label: "Average Accuracy",
        icon: Percent,
        compute: (cc) => {
          const counted = cc.filter(
            (c) => c.actualCount != null && c.systemCount > 0
          );
          if (counted.length === 0) return { value: "\u2014", subtitle: "No data yet" };
          const avg =
            counted.reduce((sum, c) => {
              const acc =
                Math.min(c.actualCount!, c.systemCount) / c.systemCount;
              return sum + acc;
            }, 0) / counted.length;
          return {
            value: `${(avg * 100).toFixed(1)}%`,
            subtitle: `From ${counted.length} counts`,
          };
        },
      },
      {
        key: "totalVariance",
        label: "Total Difference",
        icon: TrendingUp,
        compute: (cc) => {
          const counted = cc.filter((c) => c.actualCount != null);
          const totalVar = counted.reduce(
            (sum, c) => sum + Math.abs(c.actualCount! - c.systemCount),
            0
          );
          return {
            value: `${totalVar}`,
            subtitle: `${counted.length} counts measured`,
          };
        },
      },
      {
        key: "discrepancies",
        label: "Discrepancies",
        icon: AlertTriangle,
        compute: (cc) => {
          const disc = cc.filter(
            (c) => c.actualCount != null && c.actualCount !== c.systemCount
          ).length;
          return { value: `${disc}`, subtitle: "Counts with difference" };
        },
      },
      {
        key: "matchRate",
        label: "Match Rate",
        icon: CheckCircle2,
        compute: (cc) => {
          const counted = cc.filter((c) => c.actualCount != null);
          if (counted.length === 0) return { value: "\u2014", subtitle: "No data yet" };
          const matches = counted.filter(
            (c) => c.actualCount === c.systemCount
          ).length;
          return {
            value: `${((matches / counted.length) * 100).toFixed(0)}%`,
            subtitle: `${matches} of ${counted.length} match`,
          };
        },
      },
    ],
  },
  {
    key: "status",
    label: "Status",
    icon: Activity,
    metrics: [
      {
        key: "awaitingApproval",
        label: "Awaiting Approval",
        icon: Clock,
        compute: (cc) => {
          const n = cc.filter((c) => c.status === "awaiting_approval").length;
          return { value: `${n}`, subtitle: "Requires attention" };
        },
      },
      {
        key: "cancelledCounts",
        label: "Cancelled",
        icon: X,
        compute: (cc) => {
          const n = cc.filter((c) => c.status === "cancelled").length;
          return { value: `${n}`, subtitle: "Cancelled counts" };
        },
      },
      {
        key: "committedCounts",
        label: "Committed",
        icon: CheckCircle2,
        compute: (cc) => {
          const n = cc.filter((c) => c.status === "committed").length;
          return { value: `${n}`, subtitle: "Inventory adjusted" };
        },
      },
    ],
  },
  {
    key: "operational",
    label: "Operational",
    icon: BarChart3,
    metrics: [
      {
        key: "totalSystemCount",
        label: "Total System Count",
        icon: Hash,
        compute: (cc) => {
          const total = cc.reduce((sum, c) => sum + c.systemCount, 0);
          return { value: total.toLocaleString(), subtitle: "Expected inventory" };
        },
      },
      {
        key: "totalActualCount",
        label: "Total Actual Count",
        icon: Hash,
        compute: (cc) => {
          const counted = cc.filter((c) => c.actualCount != null);
          const total = counted.reduce((sum, c) => sum + c.actualCount!, 0);
          return {
            value: total.toLocaleString(),
            subtitle: `${counted.length} counts reported`,
          };
        },
      },
      {
        key: "highPriority",
        label: "High Priority",
        icon: AlertTriangle,
        compute: (cc) => {
          const n = cc.filter(
            (c) => c.priority === "High" || c.priority === "Critical"
          ).length;
          return { value: `${n}`, subtitle: "Urgent counts" };
        },
      },
      {
        key: "uniqueLocations",
        label: "Unique Locations",
        icon: Target,
        compute: (cc) => {
          const locs = new Set(cc.flatMap((c) => c.locations));
          return { value: `${locs.size}`, subtitle: "Locations being counted" };
        },
      },
    ],
  },
];

// Pre-built flat map for quick metric lookup
export const ALL_METRICS_MAP = new Map(
  INSIGHT_CATEGORIES.flatMap((cat) =>
    cat.metrics.map((m) => [m.key, m] as const)
  )
);

// ─── Status Badge Config ────────────────────────────────────────────────────
export const STATUS_CONFIG: Record<
  CycleCountStatus,
  { label: string; bgVar: string; textVar: string; borderVar: string }
> = {
  pending: {
    label: "Pending",
    bgVar: "var(--status-pending-bg)",
    textVar: "var(--status-pending-text)",
    borderVar: "var(--status-pending-border)",
  },
  in_progress: {
    label: "In Progress",
    bgVar: "var(--status-in-progress-bg)",
    textVar: "var(--status-in-progress-text)",
    borderVar: "var(--status-in-progress-border)",
  },
  awaiting_approval: {
    label: "Awaiting Approval",
    bgVar: "var(--status-awaiting-bg)",
    textVar: "var(--status-awaiting-text)",
    borderVar: "var(--status-awaiting-border)",
  },
  completed: {
    label: "Completed",
    bgVar: "var(--status-completed-bg)",
    textVar: "var(--status-completed-text)",
    borderVar: "var(--status-completed-border)",
  },
  cancelled: {
    label: "Cancelled",
    bgVar: "var(--status-cancelled-bg)",
    textVar: "var(--status-cancelled-text)",
    borderVar: "var(--status-cancelled-border)",
  },
  closed_incomplete: {
    label: "Closed (Incomplete)",
    bgVar: "var(--status-closed-bg)",
    textVar: "var(--status-closed-text)",
    borderVar: "var(--status-closed-border)",
  },
  committed: {
    label: "Committed",
    bgVar: "var(--status-committed-bg)",
    textVar: "var(--status-committed-text)",
    borderVar: "var(--status-committed-border)",
  },
  archived: {
    label: "Archived",
    bgVar: "var(--status-archived-bg)",
    textVar: "var(--status-archived-text)",
    borderVar: "var(--status-archived-border)",
  },
};

// ─── Detail Page Data ───────────────────────────────────────────────────────

export const DETAIL_TABS: {
  id: DetailTab;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}[] = [
  { id: "overview", label: "Overview", icon: Eye },
  { id: "locations", label: "Locations", icon: MapPin },
  { id: "items", label: "Items", icon: Package },
  { id: "discrepancies", label: "Discrepancies", icon: AlertTriangle },
  { id: "activity", label: "Activity Log", icon: Activity },
];

export const DETAIL_PAGE_LABELS = {
  backLabel: "Back to cycle count list",
  continueCountingButton: "Continue Counting",
  reviewDiscrepanciesButton: "Review Discrepancies",
  commitCountButton: "Commit Count",
  exportReportLabel: "Export Report",
  archiveCountLabel: "Archive Count",
  cancelCountLabel: "Cancel Count",
  commitDialogTitle: "Commit Cycle Count",
  commitDialogDescription:
    "This will apply inventory adjustments based on the counted quantities. This action cannot be undone.",
  commitDialogConfirm: "Commit & Adjust Inventory",
  archiveDialogTitle: "Archive Cycle Count",
  archiveDialogDescription:
    "This will move the cycle count to the archive. You can still view it from the archived section.",
  archiveDialogConfirm: "Archive Count",
  cancelLabel: "Cancel",
  commitSuccessTitle: "Cycle count committed",
  commitSuccessDescription: "Inventory adjustments have been applied.",
  archiveSuccessTitle: "Cycle count archived",
} as const;

export const MOCK_DETAIL = generateMockDetail();

// ─── Discrepancy Review Data ────────────────────────────────────────────────

export type DiscrepancyAction = "pending" | "approved" | "rejected" | "recount";

export interface DiscrepancyItem {
  id: string;
  name: string;
  category: string;
  location: string;
  expectedQty: number;
  countedQty: number;
  variance: number;
  countedBy: string;
  countedAt: string;
  action: DiscrepancyAction;
  reviewNote: string;
}

export const INITIAL_DISCREPANCIES: DiscrepancyItem[] = generateDiscrepancies();

export const DISCREPANCY_ACTION_CONFIG: Record<
  DiscrepancyAction,
  {
    label: string;
    icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
    bg: string;
    text: string;
    border: string;
  }
> = {
  pending: {
    label: "Pending Review",
    icon: Clock,
    bg: "var(--status-pending-bg)",
    text: "var(--status-pending-text)",
    border: "var(--status-pending-border)",
  },
  approved: {
    label: "Approved",
    icon: CheckCircle2,
    bg: "var(--status-completed-bg)",
    text: "var(--status-completed-text)",
    border: "var(--status-completed-border)",
  },
  rejected: {
    label: "Rejected",
    icon: XCircle,
    bg: "var(--status-cancelled-bg)",
    text: "var(--status-cancelled-text)",
    border: "var(--status-cancelled-border)",
  },
  recount: {
    label: "Recount Requested",
    icon: RefreshCcw,
    bg: "var(--status-in-progress-bg)",
    text: "var(--status-in-progress-text)",
    border: "var(--status-in-progress-border)",
  },
};

export const DISCREPANCY_PAGE_LABELS = {
  title: "Discrepancy Review",
  backLabel: "Back to count detail",
  summaryBadgeAll: "All Items",
  summaryBadgePending: "Pending",
  summaryBadgeApproved: "Approved",
  summaryBadgeRejected: "Rejected",
  summaryBadgeRecount: "Recount",
  approveButton: "Approve",
  rejectButton: "Reject",
  recountButton: "Request Recount",
  commitButton: "Commit Count",
  allResolvedMessage: "All discrepancies have been resolved",
  reviewNoteLabel: "Review Note",
  recountDialogTitle: "Request Recount",
  recountDialogDescription:
    "Add a note for the counter explaining why a recount is needed.",
  recountDialogNotePlaceholder:
    "e.g., Physical count appears inconsistent with recent receiving records...",
  recountDialogConfirm: "Request Recount",
  cancelLabel: "Cancel",
  expectedLabel: "Expected",
  countedLabel: "Counted",
  varianceLabel: "Difference",
  countedByLabel: "Counted by",
  approveToastTitle: "Difference approved",
  rejectToastTitle: "Difference rejected",
  recountToastTitle: "Recount requested",
} as const;

// ─── Count Execution Data ───────────────────────────────────────────────────

export interface CountSerialUnit {
  index: number;
  serialNo: string;
}

/** A location where a serialized item's units physically reside */
export interface CountItemLocation {
  id: string;
  name: string;
  address: string;
  /** Serial units stored at this location */
  units: CountSerialUnit[];
}

export interface CountItem {
  id: string;
  name: string;
  category: string;
  location: string;
  expectedQty: number;
  countedQty: number | null;
  note: string;
  status: "pending" | "counted" | "skipped";
  /** Whether this item is serialized (requires individual unit selection) */
  serialized: boolean;
  /** Expected serial units for serialized items */
  expectedSerialUnits?: CountSerialUnit[];
  /** Serial numbers that have been confirmed as counted */
  countedSerialNos?: string[];
  /** Locations where serialized units reside (multi-location modal) */
  locations?: CountItemLocation[];
}

export const INITIAL_COUNT_ITEMS: CountItem[] = generateCountItems();

export const EXECUTION_PAGE_LABELS = {
  title: "Count Execution",
  backLabel: "Back to count detail",
  progressLabel: "Progress",
  itemLabel: "Item",
  categoryLabel: "Category",
  locationLabel: "Location",
  expectedQtyLabel: "Expected Quantity",
  enterQtyPlaceholder: "Enter counted quantity",
  confirmButton: "Confirm Count",
  skipButton: "Skip Item",
  notesButton: "Add Note",
  submitButton: "Submit Count",
  saveDraftButton: "Save Draft",
  submitDialogTitle: "Submit Count Results",
  submitDialogDescription:
    "This will submit all counted items for review. Items with differences will require discrepancy resolution.",
  submitDialogConfirm: "Submit Results",
  cancelLabel: "Cancel",
  invalidQtyTitle: "Invalid quantity",
  invalidQtyDescription: "Please enter a valid non-negative number.",
  varianceDetectedTitle: "Difference detected",
  itemMatchedTitle: "Item matched",
  submitSuccessTitle: "Count submitted",
  submitSuccessDescription:
    "Your count has been submitted for review. Discrepancies will be flagged for approval.",
} as const;

// ─── App Layout / Navigation Data ───────────────────────────────────────────

export interface NavSubItem {
  label: string;
  href: string;
}
export interface NavItem {
  key: string;
  label: string;
  Icon?: React.ComponentType<{ size?: number }>;
  iconKey?: string; // key into NavIcon registry (icons.tsx)
  href?: string;
  children?: NavSubItem[];
}

// NavItems are defined in app-layout.tsx since they reference local SVG icon components.
// We export only the constants and labels here.
export const SIDEBAR_EXPANDED = 260;
export const SIDEBAR_COLLAPSED = 64;

export const LAYOUT_LABELS = {
  searchPlaceholder: "Search...",
  logoutLabel: "Log out",
} as const;

export const BREADCRUMB_LABELS = {
  root: "Items & Inventory",
  cycleCount: "Cycle Count",
  planCycleCount: "Plan Cycle Count",
  countExecution: "Count Execution",
  discrepancyReview: "Discrepancy Review",
  countDetail: "Count Detail",
} as const;

// ─── Create Cycle Count: Page Labels ────────────────────────────────────────
export const CREATE_PAGE_LABELS = {
  pageTitle: "Plan Cycle Count",
  backAriaLabel: "Back to list",
  descriptionLabel: "Describe the Plan (optional)",
  descriptionPlaceholder: "Enter description about the plan",
  priorityLabel: "Priority",
  schedulePlanLabel: "Schedule Plan",
  addTagsLabel: "Add Tags",
  tagsLabel: "Tags",
  tagsSelectedSuffix: "Selected",
  tagInputPlaceholder: "Enter up to 5 tags",
  enterToAdd: "to add",
  enterKey: "Enter",
  startDateLabel: "Start Date",
  dueDateLabel: "Due Date",
  timeOptionalLabel: "Time (Optional)",
  clearLabel: "Clear",
  doneLabel: "Done",
  cancelAtDueDateLabel: "Cancel plan at specified due date/time",
  chooseWhatToCountTitle: "Choose what to count",
  chooseWhatToCountSubtitle: "Search and add items, locations, or categories to include.",
  learnMoreLabel: "Learn more",
  basisItemTitle: "Count by Item",
  basisItemDescription: "Select individual items to count across all their stored locations.",
  basisLocationTitle: "Count by Location",
  basisLocationDescription: "Select warehouse locations and count every item stored there.",
  basisCategoryTitle: "Count by Category",
  basisCategoryDescription: "Select item categories and count all items belonging to them.",
  searchByItemPlaceholder: "Enter item, serial number location  or category",
  searchByLocationPlaceholder: "Enter location",
  searchByCategoryPlaceholder: "Enter category",
  searchTabAll: "All",
  searchTabItems: "Items",
  searchTabLocations: "Locations",
  searchTabCategory: "Category",
  didYouMeanPrefix: "Did you mean:",
  noResultsMessage: "No Item, Location or Category found.",
  emptyStateTitle: "Ready to plan a count?",
  emptyStateDescription: "Search items or locations, choose a count basis (ABC, location, item), then set due date/time and recurrence.",
  changeCountMethodLabel: "← Change count method",
  additionalInstructionsTitle: "Additional Instructions",
  instructionsPlaceholder: "Type your notes here",
  instructionsMaxLength: 2500,
  discardLabel: "Discard",
  createButtonLabel: "Create Cycle Count",
  discardDialogTitle: "Discard draft?",
  discardDialogDescription: "Are you sure you want to discard this cycle count? All unsaved changes will be lost.",
  continueEditingLabel: "Continue Editing",
  createSuccessTitle: "Cycle count created successfully!",
  createSuccessDescriptionPrefix: "Plan",
  createSuccessDescriptionSuffix: "has been created and is ready for execution.",
  planAssigneesTitle: "Plan Assignees",
  countAllLotsLabel: "Count all Lots",
  countAllLocationsLabel: "Count all Locations",
  countAllUnitsLabel: "Count all Units",
  viewUnitsLabel: "View Units",
  viewLocationsLabel: "View Locations",
  lotLabel: "Lot",
  lotTab: "Lot",
  locationTab: "Location",
  serialUnitsTab: "Serial Units",
  toCountSuffix: "to Count",
  directSearchLabel: "Direct Search",
  prevLabel: "Prev",
  nextLabel: "Next",
  selectDateLabel: "Select date",
} as const;