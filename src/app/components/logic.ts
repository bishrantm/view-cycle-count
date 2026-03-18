// ─────────────────────────────────────────────────────────────────────────────
// logic.ts — All business logic, filtering, sorting, calculations, conditions,
// and rules that determine what gets shown or how the UI behaves.
// Components receive the results of these functions — they don't run the logic.
// ─────────────────────────────────────────────────────────────────────────────

import type { CycleCount } from "./cycle-count-store";
import type { CycleCountStatus } from "./status-badge";
import type {
  QuickFilter,
  DiscrepancyAction,
  DiscrepancyItem,
  CountItem,
  NavItem,
  NavSubItem,
} from "./data";
import { QUICK_FILTER_LABELS } from "./data";

import { searchableItems, searchableLocations, searchableCategories, categoryItemMap } from "./cycle-count-data";

// ─── List: Filtering ────────────────────────────────────────────────────────

export type SortDirection = "asc" | "desc";

/** Sort cycle counts by a given column key. */
export function sortCycleCounts(
  items: CycleCount[],
  sortKey: string | null,
  sortDirection: SortDirection
): CycleCount[] {
  if (!sortKey) return items;
  const dir = sortDirection === "asc" ? 1 : -1;

  return [...items].sort((a, b) => {
    let cmp = 0;
    switch (sortKey) {
      case "id":
        cmp = a.id.localeCompare(b.id);
        break;
      case "countBasis":
        cmp = (a.countBasis ?? "").localeCompare(b.countBasis ?? "");
        break;
      case "status":
        cmp = a.status.localeCompare(b.status);
        break;
      case "priority":
        cmp = (a.priority ?? "").localeCompare(b.priority ?? "");
        break;
      case "systemCount":
        cmp = a.systemCount - b.systemCount;
        break;
      case "actualCount":
        cmp = (a.actualCount ?? -Infinity) - (b.actualCount ?? -Infinity);
        break;
      case "discrepancy": {
        const da = a.actualCount != null ? a.actualCount - a.systemCount : -Infinity;
        const db = b.actualCount != null ? b.actualCount - b.systemCount : -Infinity;
        cmp = da - db;
        break;
      }
      case "createdOn":
        cmp = (a.createdOn ?? "").localeCompare(b.createdOn ?? "");
        break;
      case "createdBy":
        cmp = (a.createdBy ?? "").localeCompare(b.createdBy ?? "");
        break;
      case "startDate":
        cmp = (a.startDate ?? "").localeCompare(b.startDate ?? "");
        break;
      case "dueDate":
        cmp = (a.dueDate ?? "").localeCompare(b.dueDate ?? "");
        break;
      case "completedOn":
        cmp = (a.completedOn ?? "").localeCompare(b.completedOn ?? "");
        break;
      case "assignees":
        cmp = (a.assignees?.[0] ?? "").localeCompare(b.assignees?.[0] ?? "");
        break;
      case "reported":
        cmp = (a.reported ? 1 : 0) - (b.reported ? 1 : 0);
        break;
      case "description":
        cmp = (a.description ?? "").localeCompare(b.description ?? "");
        break;
      case "tags":
        cmp = (a.tags?.[0] ?? "").localeCompare(b.tags?.[0] ?? "");
        break;
      case "items":
        cmp = (a.items?.[0] ?? "").localeCompare(b.items?.[0] ?? "");
        break;
      case "categories":
        cmp = (a.categories?.[0] ?? "").localeCompare(b.categories?.[0] ?? "");
        break;
      case "locations":
        cmp = (a.locations?.[0] ?? "").localeCompare(b.locations?.[0] ?? "");
        break;
      default:
        cmp = 0;
    }
    return cmp * dir;
  });
}

/** Apply search + quick-filter to the cycle count list. */
export function filterCycleCounts(
  cycleCounts: CycleCount[],
  searchQuery: string,
  activeFilter: QuickFilter
): CycleCount[] {
  return cycleCounts.filter((cc) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const match =
        cc.id.toLowerCase().includes(q) ||
        cc.items.some((item) => item.toLowerCase().includes(q)) ||
        cc.categories.some((cat) => cat.toLowerCase().includes(q)) ||
        cc.locations.some((loc) => loc.toLowerCase().includes(q)) ||
        cc.assignee.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (activeFilter === "pending") return cc.status === "pending";
    if (activeFilter === "in_progress") return cc.status === "in_progress";
    if (activeFilter === "awaiting_approval")
      return cc.status === "awaiting_approval";
    if (activeFilter === "unassigned") return !cc.assignee;
    return true;
  });
}

/** Compute badge counts for each quick filter. */
export function computeFilterCounts(
  cycleCounts: CycleCount[]
): Record<QuickFilter, number> {
  return {
    all: cycleCounts.length,
    pending: cycleCounts.filter((cc) => cc.status === "pending").length,
    in_progress: cycleCounts.filter((cc) => cc.status === "in_progress").length,
    awaiting_approval: cycleCounts.filter(
      (cc) => cc.status === "awaiting_approval"
    ).length,
    unassigned: cycleCounts.filter((cc) => !cc.assignee).length,
  };
}

/** Build the quick-filter chip data array. */
export function buildQuickFilters(
  filterCounts: Record<QuickFilter, number>
): { key: QuickFilter; label: string; count: number }[] {
  return (Object.keys(QUICK_FILTER_LABELS) as QuickFilter[]).map((key) => ({
    key,
    label: QUICK_FILTER_LABELS[key],
    count: filterCounts[key],
  }));
}

// ─── List: Pagination ───────────────────────────────────────────────────────

export function computeTotalPages(
  totalItems: number,
  recordsPerPage: number
): number {
  return Math.max(1, Math.ceil(totalItems / recordsPerPage));
}

export function paginateItems<T>(
  items: T[],
  currentPage: number,
  recordsPerPage: number
): T[] {
  return items.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );
}

// ─── List: Table Width Calculation ──────────────────────────────────────────

/** Compute total minimum table width from fixed + scrollable columns. */
export function computeTableMinWidth(
  fixedColumnsWidth: number,
  visibleColumns: { key: string; width: number }[],
  colWidths: Record<string, number>
): number {
  const scrollable = visibleColumns.reduce(
    (sum, col) => sum + (colWidths[col.key] ?? col.width),
    0
  );
  return fixedColumnsWidth + scrollable;
}

// ─── List: Cell Value Helpers ───────────────────────────────────────────────

/** Compute discrepancy value for a cycle count row. */
export function computeDiscrepancy(
  actualCount: number | null,
  systemCount: number
): { value: number | null; label: string; isMatch: boolean; hasDiscrepancy: boolean } {
  if (actualCount == null) {
    return { value: null, label: "\u2014", isMatch: false, hasDiscrepancy: false };
  }
  const disc = actualCount - systemCount;
  const isMatch = disc === 0;
  const label = isMatch ? "\u2014" : "Yes";
  return { value: disc, label, isMatch, hasDiscrepancy: !isMatch };
}

/** Extract initials from a full name. */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

/** Determine if a row should show error styling. */
export function isErrorStatus(status: CycleCountStatus): boolean {
  return status === "awaiting_approval" || status === "cancelled";
}

/** Determine if a priority is high/critical. */
export function isHighPriority(
  priority: string
): boolean {
  return priority === "High" || priority === "Critical";
}

// ─── Nested Row Data Generation ─────────────────────────────────────────────

/** Data for a single nested (child) row inside an expanded parent row. */
export interface NestedRowData {
  /** Display label — the item/location/category ID */
  label: string;
  /** Human-readable name for the child row (item name, location address, etc.) */
  name: string;
  /** Per-column cell values that mirror the parent's column keys */
  items: string[];
  categories: string[];
  locations: string[];
  status: CycleCountStatus;
  systemCount: number;
  actualCount: number | null;
  reported: boolean;
  assignees: string[];
  tags: string[];
  description: string;
  priority: string;
  completedOn: string | null;
  createdOn: string;
  createdBy: string;
  startDate: string;
  dueDate: string;
  /** Item thumbnail image URL (resolved from searchableItems) */
  image: string | null;
  /** Item ID for looking up full item details on click */
  itemId: string | null;
}

/** Simple seeded hash for deterministic distribution. */
function nestedHash(seed: number, salt: number): number {
  let h = ((seed * 2654435761) ^ (salt * 2246822519)) >>> 0;
  h = ((h >> 16) ^ h) * 0x45d9f3b;
  return (h >>> 0) % 1000000;
}

/**
 * Round-robin distribute a parent array across `n` child buckets so that the
 * union of all buckets === the original array (no extras, no omissions).
 */
function distributeAcross<T>(arr: T[], n: number): T[][] {
  const result: T[][] = Array.from({ length: n }, () => []);
  arr.forEach((item, idx) => {
    result[idx % n].push(item);
  });
  return result;
}

// ── Catalog lookup helpers (computed once, cached at module level) ──────────

/** Reverse map: item ID → category names that contain it. */
const _itemCategoryMap: Record<string, string[]> = (() => {
  const m: Record<string, string[]> = {};
  for (const [catId, itemIds] of Object.entries(categoryItemMap)) {
    const cat = searchableCategories.find((c) => c.id === catId);
    const catName = cat?.name ?? catId;
    for (const iid of itemIds) {
      (m[iid] ??= []).push(catName);
    }
  }
  return m;
})();

/** Reverse map: item ID → location IDs from that item's locations[]. */
const _itemLocationMap: Record<string, string[]> = (() => {
  const m: Record<string, string[]> = {};
  for (const si of searchableItems) {
    m[si.id] = si.locations.map((l) => l.id);
  }
  return m;
})();

/** Lookup: location ID → items (from parent scope) stored there. */
function itemsAtLocation(locId: string, parentItemIds: string[]): string[] {
  return parentItemIds.filter((iid) => (_itemLocationMap[iid] ?? []).includes(locId));
}

/** Lookup: category name → items (from parent scope) in that category. */
function itemsInCategory(catName: string, parentItemIds: string[]): string[] {
  const catEntry = searchableCategories.find((c) => c.name === catName);
  if (!catEntry) return [];
  const catItemIds = categoryItemMap[catEntry.id] ?? [];
  return parentItemIds.filter((iid) => catItemIds.includes(iid));
}

/** Unique category names for a set of item IDs. */
function categoriesForItems(itemIds: string[]): string[] {
  const seen = new Set<string>();
  for (const iid of itemIds) {
    for (const cat of (_itemCategoryMap[iid] ?? [])) seen.add(cat);
  }
  return [...seen];
}

/** Unique location IDs for a set of item IDs. */
function locationsForItems(itemIds: string[]): string[] {
  const seen = new Set<string>();
  for (const iid of itemIds) {
    for (const loc of (_itemLocationMap[iid] ?? [])) seen.add(loc);
  }
  return [...seen];
}

/**
 * Generate nested row data for an expanded parent cycle count.
 *
 * Every child row resolves its items, categories, and locations from the
 * searchable catalog so that each row always has at least one category
 * and at least one location (every item is associated with both).
 */
export function generateNestedRows(cc: CycleCount): NestedRowData[] {
  let nestedKeys: string[];
  if (cc.countBasis === "Item") nestedKeys = cc.items;
  else if (cc.countBasis === "Location") nestedKeys = cc.locations;
  else if (cc.countBasis === "Category") nestedKeys = cc.categories;
  else return [];

  if (nestedKeys.length === 0) return [];

  // Pre-compute pool of items with valid images for fallback
  const itemsWithImages = searchableItems.filter((si) => si.image && si.image.length > 0);

  const n = nestedKeys.length;
  const baseSeed = nestedKeys.join("").length + cc.systemCount;

  // Distribute system count proportionally with deterministic variation
  const rawWeights = nestedKeys.map((_, i) => 1 + (nestedHash(baseSeed, i) % 5));
  const totalWeight = rawWeights.reduce((s, w) => s + w, 0);
  const systemCounts = rawWeights.map((w) =>
    Math.round((w / totalWeight) * cc.systemCount)
  );
  // Fix rounding errors on the last item
  const distributed = systemCounts.reduce((s, v) => s + v, 0);
  systemCounts[n - 1] += cc.systemCount - distributed;

  // Statuses — derive from parent status with some variation
  const childStatuses: CycleCountStatus[] = nestedKeys.map((_, i) => {
    if (cc.status === "pending") return "pending";
    if (cc.status === "cancelled") return "cancelled";
    if (cc.status === "completed" || cc.status === "committed") return cc.status;
    const statusPool: CycleCountStatus[] = ["pending", "in_progress", "completed"];
    return statusPool[nestedHash(baseSeed + 10, i) % statusPool.length];
  });

  // Actual counts — only if parent has actual count
  const actualCounts: (number | null)[] = nestedKeys.map((_, i) => {
    if (cc.actualCount == null) return null;
    if (childStatuses[i] === "pending") return null;
    const variance = (nestedHash(baseSeed + 20, i) % 7) - 3;
    return Math.max(0, systemCounts[i] + variance);
  });

  // Fix actual counts to sum to parent actualCount if present
  if (cc.actualCount != null) {
    const countedIndices = actualCounts
      .map((v, i) => (v != null ? i : -1))
      .filter((i) => i >= 0);
    if (countedIndices.length > 0) {
      const currentTotal = countedIndices.reduce((s, i) => s + (actualCounts[i] ?? 0), 0);
      const diff = cc.actualCount - currentTotal;
      const lastIdx = countedIndices[countedIndices.length - 1];
      actualCounts[lastIdx] = (actualCounts[lastIdx] ?? 0) + diff;
    }
  }

  // Pre-distribute assignees via round-robin (always needed)
  const assignBuckets = distributeAcross(cc.assignees, n);

  return nestedKeys.map((key, i) => {
    // ── Resolve items / categories / locations from CATALOG data ──
    let childItems: string[];
    let childCategories: string[];
    let childLocations: string[];

    if (cc.countBasis === "Item") {
      // Key IS the item — look up its real categories & locations
      childItems = [key];
      childCategories = _itemCategoryMap[key] ?? [];
      // Scope to locations that are on the parent CC
      const itemLocs = _itemLocationMap[key] ?? [];
      const parentLocSet = new Set(cc.locations);
      childLocations = itemLocs.filter((l) => parentLocSet.has(l));
      // If the parent didn't constrain locations, show all the item's locations
      if (childLocations.length === 0) childLocations = itemLocs;
    } else if (cc.countBasis === "Location") {
      // Key IS the location — find which parent items live at this location
      childLocations = [key];
      childItems = itemsAtLocation(key, cc.items);
      // Merge categories from all items at this location
      childCategories = categoriesForItems(childItems);
    } else {
      // Category basis — key IS the category name
      childCategories = [key];
      childItems = itemsInCategory(key, cc.items);
      // Merge locations from all items in this category
      childLocations = locationsForItems(childItems);
    }

    // Ensure we always have at least one entry (fallback to parent data)
    if (childCategories.length === 0) childCategories = cc.categories.length > 0 ? [cc.categories[0]] : [];
    if (childLocations.length === 0) childLocations = cc.locations.length > 0 ? [cc.locations[0]] : [];

    // Resolve primary itemId for image lookup
    const itemId = childItems.length > 0 ? childItems[0] : null;
    const matchedItem = itemId ? searchableItems.find((si) => si.id === itemId) : null;
    const resolvedImage = (matchedItem?.image || null)
      ?? (itemsWithImages.length > 0 ? itemsWithImages[i % itemsWithImages.length].image : null);

    // Resolve human-readable name based on count basis type
    let resolvedName = key;
    if (cc.countBasis === "Item") {
      resolvedName = matchedItem?.name || key;
    } else if (cc.countBasis === "Location") {
      const matchedLoc = searchableLocations.find((sl) => sl.id === key);
      resolvedName = matchedLoc?.address || matchedLoc?.name || key;
    } else if (cc.countBasis === "Category") {
      const matchedCat = searchableCategories.find((sc) => sc.name === key || sc.id === key);
      resolvedName = matchedCat?.name || key;
    }

    return {
      label: key,
      name: resolvedName,
      items: childItems,
      categories: childCategories,
      locations: childLocations,
      status: childStatuses[i],
      systemCount: systemCounts[i],
      actualCount: actualCounts[i],
      reported: actualCounts[i] != null && childStatuses[i] !== "pending",
      assignees: assignBuckets[i] ?? [],
      tags: cc.tags.slice(0, 1),
      description: matchedItem?.description || cc.description || "\u2014",
      priority: cc.priority,
      completedOn: childStatuses[i] === "completed" ? cc.completedOn : null,
      createdOn: cc.createdOn,
      createdBy: cc.createdBy,
      startDate: cc.startDate,
      dueDate: cc.dueDate,
      image: resolvedImage,
      itemId: itemId,
    };
  });
}

// ─── List: Insights Filtering ───────────────────────────────────────────────

import type { InsightCategory } from "./data";

/** Filter insight categories by search query. */
export function filterInsightCategories(
  categories: InsightCategory[],
  searchQuery: string
): InsightCategory[] {
  if (!searchQuery) return categories;
  return categories
    .map((cat) => ({
      ...cat,
      metrics: cat.metrics.filter((m) =>
        m.label.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.metrics.length > 0);
}

/** Format the insight count label (singular/plural). */
export function formatInsightCountLabel(count: number): string {
  return `${count} insight${count !== 1 ? "s" : ""} active`;
}

// ─── List: Column Visibility ────────────────────────────────────────────────

/** Format the columns-visible footer label. */
export function formatColumnsVisibleLabel(
  visible: number,
  total: number
): string {
  return `${visible} of ${total} columns visible`;
}

/** Filter columns by search query for the manage-columns panel. */
export function filterColumnsBySearch(
  columns: { key: string; label: string }[],
  searchQuery: string
): typeof columns {
  if (!searchQuery) return columns;
  return columns.filter((c) =>
    c.label.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

// ─── Detail Page Logic ──────────────────────────────────────────────────────

/** Compute progress percentage. */
export function computeProgressPercent(
  counted: number,
  total: number
): number {
  if (total === 0) return 0;
  return Math.round((counted / total) * 100);
}

/** Filter detail items to only discrepancies. */
export function filterDiscrepancyItems<
  T extends { status: string }
>(items: T[]): T[] {
  return items.filter((item) => item.status === "discrepancy");
}

/** Determine which action buttons to show based on status. */
export function getDetailActionVisibility(status: CycleCountStatus) {
  return {
    showContinueCounting: status === "in_progress",
    showReviewDiscrepancies: status === "awaiting_approval",
    showCommitCount:
      status === "completed" || status === "awaiting_approval",
    showArchive: status === "committed",
    showCancel:
      status !== "committed" && status !== "archived",
  };
}

// ─── Discrepancy Review Logic ───────────────────────────────────────────────

/** Compute summary counts for discrepancy items. */
export function computeDiscrepancySummary(items: DiscrepancyItem[]) {
  return {
    total: items.length,
    pending: items.filter((i) => i.action === "pending").length,
    approved: items.filter((i) => i.action === "approved").length,
    rejected: items.filter((i) => i.action === "rejected").length,
    recount: items.filter((i) => i.action === "recount").length,
    allResolved: items.every((i) => i.action !== "pending"),
  };
}

/** Generate the toast description for an approved variance. */
export function approveToastDescription(itemId: string): string {
  return `${itemId} variance has been approved. Inventory will be adjusted on commit.`;
}

/** Generate the toast description for a rejected variance. */
export function rejectToastDescription(itemId: string): string {
  return `${itemId} counted value was rejected. Original quantity will be retained.`;
}

/** Generate the toast description for a recount request. */
export function recountToastDescription(itemId: string): string {
  return `A recount has been requested for ${itemId}.`;
}

/** Format variance display string. */
export function formatVariance(variance: number): string {
  if (variance > 0) return `+${variance}`;
  return `${variance}`;
}

// ─── Count Execution Logic ──────────────────────────────────────────────────

/** Validate a counted quantity input. */
export function validateCountedQty(
  input: string
): { valid: boolean; qty: number } {
  const qty = parseInt(input, 10);
  return { valid: !isNaN(qty) && qty >= 0, qty };
}

/** Compute counted items progress. */
export function computeCountProgress(items: CountItem[]) {
  const counted = items.filter((i) => i.status === "counted").length;
  const total = items.length;
  return {
    counted,
    total,
    percent: total === 0 ? 0 : Math.round((counted / total) * 100),
  };
}

/** Generate variance toast description. */
export function varianceToastDescription(
  itemId: string,
  expected: number,
  actual: number
): string {
  const diff = actual - expected;
  return `${itemId}: Expected ${expected}, counted ${actual} (${diff > 0 ? "+" : ""}${diff})`;
}

/** Generate item-matched toast description. */
export function matchToastDescription(itemId: string): string {
  return `${itemId} count confirmed.`;
}

// ─── App Layout: Navigation Logic ───────────────────────────────────────────

/** Check if a top-level nav item is active. */
export function isNavActive(item: NavItem, pathname: string): boolean {
  if (item.children) {
    return item.children.some((c) => isSubActive(c, pathname));
  }
  return item.href === pathname;
}

/** Check if a sub-nav item is active. */
export function isSubActive(sub: NavSubItem, pathname: string): boolean {
  if (sub.href === "/") {
    return (
      pathname === "/" ||
      pathname === "/create" ||
      pathname.startsWith("/count/")
    );
  }
  return pathname === sub.href || pathname.startsWith(sub.href + "/");
}

/** Build breadcrumbs array based on current path. */
export function buildBreadcrumbs(
  pathname: string,
  labels: {
    root: string;
    cycleCount: string;
    planCycleCount: string;
    countExecution: string;
    discrepancyReview: string;
    countDetail: string;
  }
): { label: string; href: string }[] {
  const crumbs = [{ label: labels.root, href: "/" }];
  if (pathname === "/" || pathname === "") {
    crumbs.push({ label: labels.cycleCount, href: "/" });
  } else if (pathname === "/create") {
    crumbs.push({ label: labels.cycleCount, href: "/" });
    crumbs.push({ label: labels.planCycleCount, href: "/create" });
  } else if (pathname.includes("/execute")) {
    crumbs.push({ label: labels.cycleCount, href: "/" });
    crumbs.push({ label: labels.countExecution, href: pathname });
  } else if (pathname.includes("/discrepancies")) {
    crumbs.push({ label: labels.cycleCount, href: "/" });
    crumbs.push({ label: labels.discrepancyReview, href: pathname });
  } else if (pathname.includes("/count/")) {
    crumbs.push({ label: labels.cycleCount, href: "/" });
    crumbs.push({ label: labels.countDetail, href: pathname });
  } else if (pathname.startsWith("/people/")) {
    // People Management section
    crumbs[0] = { label: "People Management", href: "/people/employees" };
    const segment = pathname.split("/").pop() ?? "";
    const pageLabel = segment.charAt(0).toUpperCase() + segment.slice(1);
    crumbs.push({ label: pageLabel, href: pathname });
  }
  return crumbs;
}

// ─── Store: Date Formatting ─────────────────────────────────────────────────

/** Format current date/time as "M/D/YYYY · H:MM AM/PM". */
export function formatNow(): string {
  const d = new Date();
  const month = (d.getMonth() + 1).toString();
  const day = d.getDate().toString();
  const year = d.getFullYear();
  const h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${month}/${day}/${year} · ${h12}:${m} ${ampm}`;
}

/** Format time value "HH:MM" to "H:MM AM/PM". */
export function formatTimeOption(val: string): string {
  const [h, m] = val.split(":");
  const hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const h12 = hour % 12 || 12;
  return `${h12}:${m} ${ampm}`;
}

// ─── Store: ID Generation ───────────────────────────────────────────────────

/** Generate the next CC-XXXXXX ID. */
export function generateNextId(cycleCounts: { id: string }[]): string {
  let maxNum = 0;
  for (const cc of cycleCounts) {
    const num = parseInt(cc.id.replace("CC-", ""), 10);
    if (!isNaN(num) && num > maxNum) maxNum = num;
  }
  return `CC-${(maxNum + 1).toString().padStart(6, "0")}`;
}

/** Generate the archive toast description. */
export function archiveToastDescription(id: string): string {
  return `${id} has been moved to the archive.`;
}