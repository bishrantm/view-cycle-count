// ─────────────────────────────────────────────────────────────────────────────
// mock-registry.ts — Single source of truth for ALL mock/seed entity data.
//
// Every piece of mock data in the application (seed cycle counts, detail page,
// count execution, discrepancy review) is generated from the canonical pools
// defined here. This ensures:
//   • People names are consistent across list ↔ detail ↔ execution
//   • Item IDs/names match the searchable catalog in cycle-count-data.tsx
//   • Locations and categories reference real entries
//   • All relationships are coherent (a CC's items, assignees, locations connect)
//
// Downstream consumers import the generated data; they never define entities.
// ─────────────────────────────────────────────────────────────────────────────

import { mockPeopleWithPermission, searchableItems, searchableLocations, searchableCategories } from "./cycle-count-data";
import type { CycleCount } from "./cycle-count-store";
import type { CycleCountStatus } from "./status-badge";
import type { DiscrepancyItem, CountItem, CountSerialUnit, CountItemLocation } from "./data";

// ═══════════════════════════════════════════════════════════════════════════
// § 1  CANONICAL POOLS — derived from the existing catalog files
// ═══════════════════════════════════════════════════════════════════════════

/** All people with permission — single canonical name list. */
export const PEOPLE = mockPeopleWithPermission.map((p) => p.name);

/** Quick lookup: person name → avatar initials */
export const PEOPLE_INITIALS = Object.fromEntries(
  mockPeopleWithPermission.map((p) => [p.name, p.initials])
);

/** Quick lookup: person name → avatar URL (figma:asset resolved string) */
export const PEOPLE_AVATARS = Object.fromEntries(
  mockPeopleWithPermission.map((p) => [p.name, p.avatar])
);

/** Quick lookup: person name → person ID */
export const PEOPLE_IDS = Object.fromEntries(
  mockPeopleWithPermission.map((p) => [p.name, p.id])
);

/** Canonical item pool — first N items from the searchable catalog. */
const ITEMS = searchableItems;

/** Canonical location IDs */
const LOCATIONS = searchableLocations.map((l) => l.id);

/** Canonical category names */
const CATEGORIES = searchableCategories.map((c) => c.name);

/** Canonical tag pool */
const TAGS = ["Quick Count", "ABC Count", "Scheduled", "Ad Hoc", "Year End"] as const;

// ═══════════════════════════════════════════════════════════════════════════
// § 2  DETERMINISTIC PICKER — stable "random" selection from pools
// ═══════════════════════════════════════════════════════════════════════════

/** Simple seeded hash for deterministic but varied picks. */
function hash(seed: number, salt: number): number {
  let h = ((seed * 2654435761) ^ (salt * 2246822519)) >>> 0;
  h = ((h >> 16) ^ h) * 0x45d9f3b;
  return (h >>> 0) % 1000000;
}

function pickN<T>(arr: readonly T[], count: number, seed: number): T[] {
  if (count >= arr.length) return [...arr];
  const indices = new Set<number>();
  let salt = 0;
  while (indices.size < count) {
    indices.add(hash(seed, salt++) % arr.length);
  }
  return [...indices].map((i) => arr[i]);
}

function pickOne<T>(arr: readonly T[], seed: number): T {
  return arr[hash(seed, 0) % arr.length];
}

// ═══════════════════════════════════════════════════════════════════════════
// § 3  SEED CYCLE COUNTS — the 10 records that populate the list table
// ═══════════════════════════════════════════════════════════════════════════

interface SeedSpec {
  idNum: number;
  countBasis: "Item" | "Location" | "Category";
  status: CycleCountStatus;
  priority: "Standard" | "High" | "Low";
  tagCount: number;
  itemCount: number;
  assigneeCount: number;
  systemCount: number;
  actualCount: number | null;
  reported: boolean;
  approved: boolean;
  completedOn: string | null;
  tolerance: string;
  sampling: string;
  createdOnDate: string;
  startDateStr: string | null;
  dueDateStr: string | null;
  descriptionSeed: number;
}

const DESCRIPTIONS = [
  "Q1 fastener inventory verification across warehouse zones",
  "Aft fuselage panel hardware count for production line B",
  "Central distribution dock quarterly reconciliation",
  "Front bulkhead cabinet component audit",
  "Wing assembly bracket and hardware cycle count",
  "Aeronautics hangar bay quarterly parts count",
  "Engine mount bolt and stud verification",
  "Pallet rack zone partial inventory reconciliation",
  "Quality control quarantine bay recount",
  "Year-end electrical and mechanical components audit",
];

const SEED_SPECS: SeedSpec[] = [
  {
    idNum: 123460, countBasis: "Item", status: "pending", priority: "Standard",
    tagCount: 3, itemCount: 5, assigneeCount: 3, systemCount: 11920,
    actualCount: null, reported: false, approved: false, completedOn: null,
    tolerance: "5%", sampling: "Standard",
    createdOnDate: "10/21/2025 · 2:00 PM", startDateStr: "10/31/2025 · 1:00 PM",
    dueDateStr: "11/3/2025 · 2:00 PM", descriptionSeed: 0,
  },
  {
    idNum: 123459, countBasis: "Item", status: "pending", priority: "Standard",
    tagCount: 1, itemCount: 2, assigneeCount: 1, systemCount: 4500,
    actualCount: null, reported: false, approved: false, completedOn: null,
    tolerance: "3%", sampling: "Standard",
    createdOnDate: "10/20/2025 · 9:30 AM", startDateStr: null,
    dueDateStr: null, descriptionSeed: 1,
  },
  {
    idNum: 123458, countBasis: "Location", status: "awaiting_approval", priority: "Standard",
    tagCount: 2, itemCount: 3, assigneeCount: 2, systemCount: 8340,
    actualCount: 8295, reported: true, approved: false, completedOn: null,
    tolerance: "5%", sampling: "Standard",
    createdOnDate: "10/18/2025 · 11:15 AM", startDateStr: "10/25/2025 · 9:00 AM",
    dueDateStr: "10/30/2025 · 6:00 PM", descriptionSeed: 2,
  },
  {
    idNum: 123456, countBasis: "Item", status: "in_progress", priority: "Standard",
    tagCount: 1, itemCount: 5, assigneeCount: 3, systemCount: 11920,
    actualCount: 11920, reported: false, approved: false, completedOn: null,
    tolerance: "5%", sampling: "Standard",
    createdOnDate: "10/21/2025 · 2:00 PM", startDateStr: "10/23/2025 · 1:00 PM",
    dueDateStr: "10/31/2025 · 2:00 PM", descriptionSeed: 3,
  },
  {
    idNum: 123455, countBasis: "Category", status: "completed", priority: "Standard",
    tagCount: 0, itemCount: 2, assigneeCount: 1, systemCount: 2450,
    actualCount: 2450, reported: true, approved: true,
    completedOn: "10/25/2025 · 3:00 PM",
    tolerance: "3%", sampling: "Standard",
    createdOnDate: "10/15/2025 · 10:00 AM", startDateStr: null,
    dueDateStr: null, descriptionSeed: 4,
  },
  {
    idNum: 123454, countBasis: "Location", status: "cancelled", priority: "High",
    tagCount: 2, itemCount: 3, assigneeCount: 2, systemCount: 6780,
    actualCount: null, reported: false, approved: false, completedOn: null,
    tolerance: "5%", sampling: "Standard",
    createdOnDate: "10/12/2025 · 3:45 PM", startDateStr: "10/18/2025 · 7:00 AM",
    dueDateStr: "10/22/2025 · 4:00 PM", descriptionSeed: 5,
  },
  {
    idNum: 123453, countBasis: "Category", status: "in_progress", priority: "Standard",
    tagCount: 1, itemCount: 1, assigneeCount: 1, systemCount: 3200,
    actualCount: null, reported: false, approved: false, completedOn: null,
    tolerance: "3%", sampling: "Standard",
    createdOnDate: "10/10/2025 · 2:00 PM", startDateStr: null,
    dueDateStr: null, descriptionSeed: 6,
  },
  {
    idNum: 123452, countBasis: "Location", status: "closed_incomplete", priority: "Standard",
    tagCount: 1, itemCount: 2, assigneeCount: 2, systemCount: 1560,
    actualCount: 1490, reported: true, approved: false, completedOn: null,
    tolerance: "5%", sampling: "Standard",
    createdOnDate: "10/8/2025 · 1:30 PM", startDateStr: "10/12/2025 · 10:00 AM",
    dueDateStr: "10/16/2025 · 3:00 PM", descriptionSeed: 7,
  },
  {
    idNum: 123451, countBasis: "Location", status: "cancelled", priority: "Standard",
    tagCount: 1, itemCount: 2, assigneeCount: 1, systemCount: 920,
    actualCount: null, reported: false, approved: false, completedOn: null,
    tolerance: "3%", sampling: "Standard",
    createdOnDate: "10/5/2025 · 4:00 PM", startDateStr: null,
    dueDateStr: null, descriptionSeed: 8,
  },
  {
    idNum: 123450, countBasis: "Item", status: "committed", priority: "Standard",
    tagCount: 2, itemCount: 2, assigneeCount: 3, systemCount: 15200,
    actualCount: 15198, reported: true, approved: true,
    completedOn: "10/28/2025 · 5:00 PM",
    tolerance: "5%", sampling: "Standard",
    createdOnDate: "10/1/2025 · 9:00 AM", startDateStr: "10/15/2025 · 8:00 AM",
    dueDateStr: "10/28/2025 · 6:00 PM", descriptionSeed: 9,
  },
];

function buildCycleCount(spec: SeedSpec, index: number): CycleCount {
  const seed = spec.idNum;
  const items = pickN(ITEMS, spec.itemCount, seed).map((i) => i.id);
  const assignees = pickN(PEOPLE, spec.assigneeCount, seed + 100);
  const tags = pickN(TAGS, spec.tagCount, seed + 200);
  const locations = pickN(LOCATIONS, Math.max(1, Math.min(3, spec.itemCount)), seed + 300);
  const cats = pickN(CATEGORIES, Math.max(1, Math.min(3, spec.itemCount)), seed + 400);
  const createdBy = pickOne(PEOPLE, seed + 500);

  return {
    id: `CC-${spec.idNum}`,
    countBasis: spec.countBasis,
    tags: [...tags],
    items,
    categories: cats,
    locations,
    status: spec.status,
    assignee: assignees[0] ?? "",
    assignees,
    createdAt: `2026-02-${20 - index}`,
    tolerance: spec.tolerance,
    systemCount: spec.systemCount,
    actualCount: spec.actualCount,
    reported: spec.reported,
    approved: spec.approved,
    completedOn: spec.completedOn,
    description: DESCRIPTIONS[spec.descriptionSeed],
    sampling: spec.sampling,
    priority: spec.priority,
    createdOn: spec.createdOnDate,
    createdBy,
    startDate: spec.startDateStr,
    dueDate: spec.dueDateStr,
  };
}

/** Generate the 10 seed cycle counts for the list table. */
export function generateSeedCycleCounts(): CycleCount[] {
  return SEED_SPECS.map((spec, i) => buildCycleCount(spec, i));
}

// ═══════════════════════════════════════════════════════════════════════════
// § 4  DETAIL PAGE — CC-123456 mock detail, derived from the same pools
// ═══════════════════════════════════════════════════════════════════════════

/** Get the seed record for CC-123456 so detail page data aligns with the list. */
function getCC123456(): CycleCount {
  return generateSeedCycleCounts().find((cc) => cc.id === "CC-123456")!;
}

/** Items that CC-123456 references — looked up from the searchable catalog. */
function getDetailItems() {
  const cc = getCC123456();
  return cc.items
    .map((id) => ITEMS.find((item) => item.id === id))
    .filter(Boolean) as typeof ITEMS;
}

export function generateMockDetail() {
  const cc = getCC123456();
  const detailItems = getDetailItems();
  const counters = cc.assignees.slice(0, 2);

  // Build item rows with plausible count data
  const itemRows = detailItems.map((item, idx) => {
    const expected = [560, 220, 150, 340, 80][idx % 5];
    // First two have discrepancies, next two match, rest pending
    const counted = idx < 2 ? expected - 2 : idx < 4 ? expected : null;
    const variance = counted != null ? counted - expected : null;
    const status = counted == null ? "pending" : variance !== 0 ? "discrepancy" : "matched";
    return {
      id: item.id,
      name: item.name,
      expected,
      counted,
      variance,
      status,
    };
  });

  const countedItems = itemRows.filter((i) => i.counted != null);
  const matchedItems = countedItems.filter((i) => i.variance === 0);
  const discrepancyItems = countedItems.filter((i) => i.variance !== 0);
  const pendingItems = itemRows.filter((i) => i.counted == null);

  // Build location rows from the CC's locations
  const locationRows = cc.locations.map((locId, idx) => {
    const loc = searchableLocations.find((l) => l.id === locId);
    const locName = loc ? `${loc.name} - Rack ${idx + 1}` : locId;
    const itemsTotal = Math.ceil(itemRows.length / cc.locations.length) + (idx === 0 ? itemRows.length % cc.locations.length : 0);
    const itemsCounted = Math.min(itemsTotal, countedItems.length > idx ? itemsTotal - 1 : 0);
    return {
      id: `LOC-${String(idx + 3).padStart(3, "0")}`,
      name: locName,
      itemsTotal,
      itemsCounted,
      status: (itemsCounted >= itemsTotal ? "completed" : itemsCounted > 0 ? "in_progress" : "pending") as "completed" | "in_progress" | "pending",
    };
  });

  // Activity log using actual people and item names
  const counter1 = counters[0] ?? PEOPLE[0];
  const counter2 = counters[1] ?? PEOPLE[1];
  const discItem1 = discrepancyItems[0];
  const matchItem1 = matchedItems[0];

  const activityLog = [
    {
      id: 1,
      action: "Count started",
      user: cc.createdBy,
      time: "Feb 17, 2026 09:30 AM",
      type: "info",
    },
    {
      id: 2,
      action: `${counter1} began counting ${locationRows[0]?.name ?? "Zone A"}`,
      user: "System",
      time: "Feb 17, 2026 09:45 AM",
      type: "info",
    },
    ...(discItem1
      ? [{
          id: 3,
          action: `${discItem1.id} counted: ${discItem1.counted} (expected ${discItem1.expected}) \u2014 Discrepancy flagged`,
          user: counter1,
          time: "Feb 18, 2026 10:12 AM",
          type: "warning",
        }]
      : []),
    ...(matchItem1
      ? [{
          id: 4,
          action: `${matchItem1.id} counted: ${matchItem1.counted} \u2014 Matched`,
          user: counter1,
          time: "Feb 18, 2026 10:25 AM",
          type: "success",
        }]
      : []),
    ...(locationRows.length > 1
      ? [{
          id: 5,
          action: `${counter2} began counting ${locationRows[1]?.name ?? "Zone B"}`,
          user: "System",
          time: "Feb 19, 2026 08:00 AM",
          type: "info",
        }]
      : []),
    ...(discrepancyItems.length > 1
      ? [{
          id: 6,
          action: `${discrepancyItems[1].id} counted: ${discrepancyItems[1].counted} (expected ${discrepancyItems[1].expected}) \u2014 Discrepancy flagged`,
          user: counter2,
          time: "Feb 19, 2026 11:30 AM",
          type: "warning",
        }]
      : []),
  ];

  return {
    id: cc.id,
    name: `Q1 ${cc.categories[0] ?? "Inventory"} Check`,
    status: cc.status,
    countBasis: cc.countBasis,
    countTag: cc.tags[0] ?? "Quick Count",
    createdBy: cc.createdBy,
    createdAt: "Feb 17, 2026 at 09:30 AM",
    updatedAt: "Feb 20, 2026 at 02:15 PM",
    notes: `Focus on high-turnover ${(cc.categories[0] ?? "inventory").toLowerCase()} items in ${cc.locations.join(" and ")}.`,
    progress: {
      total: itemRows.length,
      counted: countedItems.length,
      matched: matchedItems.length,
      discrepancy: discrepancyItems.length,
      pending: pendingItems.length,
    },
    locations: locationRows,
    items: itemRows,
    counters: counters.map((name, idx) => ({
      id: `U-${String(idx + 2).padStart(3, "0")}`,
      name,
      role: idx === 0 ? "Warehouse Associate" : "Inventory Lead",
      itemsAssigned: Math.ceil(itemRows.length / counters.length),
      itemsCounted: Math.ceil(countedItems.length / counters.length),
      avatar: name.split(" ").map((n) => n[0]).join("").toUpperCase(),
    })),
    activityLog,
  };
}

// ══════════════════════════════════════════════════════════════════════════
// § 5  DISCREPANCY REVIEW — items with variance from CC-123456
// ═══════════════════════════════════════════════════════════════════════════

export function generateDiscrepancies(): DiscrepancyItem[] {
  const detail = generateMockDetail();
  const cc = getCC123456();
  const counters = cc.assignees.slice(0, 2);

  // Items with discrepancies, plus two extra to make 4 total
  const discItems = detail.items.filter((i) => i.status === "discrepancy");
  // Add two more plausible discrepancy items from the catalog
  const extraItems = ITEMS.filter(
    (item) => !detail.items.some((d) => d.id === item.id)
  ).slice(0, Math.max(0, 4 - discItems.length));

  const allDiscItems = [
    ...discItems.map((d) => {
      const catalogItem = ITEMS.find((i) => i.id === d.id);
      return {
        id: d.id,
        name: catalogItem?.name ?? d.id,
        category: catalogItem?.type ?? "Parts",
        expectedQty: d.expected,
        countedQty: d.counted!,
        variance: d.variance!,
      };
    }),
    ...extraItems.map((item, idx) => {
      const expected = [45, 30][idx % 2];
      const counted = idx === 0 ? expected + 7 : expected - 5;
      return {
        id: item.id,
        name: item.name,
        category: item.type,
        expectedQty: expected,
        countedQty: counted,
        variance: counted - expected,
      };
    }),
  ];

  return allDiscItems.map((item, idx) => {
    const locIdx = idx % cc.locations.length;
    const loc = searchableLocations.find((l) => l.id === cc.locations[locIdx]);
    const counter = counters[idx % counters.length] ?? PEOPLE[0];
    return {
      id: item.id,
      name: item.name,
      category: item.category,
      location: loc ? `${loc.name} - ${loc.address}` : cc.locations[locIdx],
      expectedQty: item.expectedQty,
      countedQty: item.countedQty,
      variance: item.variance,
      countedBy: counter,
      countedAt: `Feb ${18 + idx}, 2026 ${10 + idx}:${String((idx * 15) % 60).padStart(2, "0")} AM`,
      action: "pending" as const,
      reviewNote: "",
    };
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// § 6  COUNT EXECUTION — items to count for CC-123456
// ═══════════════════════════════════════════════════════════════════════════

function generateSerialUnits(itemId: string, count: number): CountSerialUnit[] {
  const numPart = itemId.replace(/\D/g, "");
  const base = parseInt(numPart.slice(-5) || "10000", 10);
  const units: CountSerialUnit[] = [];
  for (let i = 0; i < count; i++) {
    units.push({ index: i + 1, serialNo: `${base + 1000 - i * 3}` });
  }
  return units;
}

function generateLocations(
  itemId: string,
  totalUnits: number,
  locationData: { id: string; name: string; address: string }[]
): CountItemLocation[] {
  const allUnits = generateSerialUnits(itemId, totalUnits);
  let unitIndex = 0;
  return locationData.map((loc, locIdx) => {
    const isLast = locIdx === locationData.length - 1;
    const unitsForLoc = isLast
      ? allUnits.slice(unitIndex)
      : allUnits.slice(unitIndex, unitIndex + Math.ceil(totalUnits / locationData.length));
    unitIndex += unitsForLoc.length;
    return {
      id: loc.id,
      name: loc.name,
      address: loc.address,
      units: unitsForLoc.map((u, i) => ({ ...u, index: i + 1 })),
    };
  });
}

export function generateCountItems(): CountItem[] {
  const cc = getCC123456();
  const detailItems = getDetailItems();

  // Build count items from the CC's item references
  const countItems: CountItem[] = detailItems.map((item, idx) => {
    const expected = [560, 220, 150, 340, 80, 220, 12, 8, 6][idx % 9];
    const isSerialized = item.serialized;
    const itemLocations = item.locations.slice(0, 2);

    const base: CountItem = {
      id: item.id,
      name: item.name,
      category: item.type,
      location: itemLocations.length > 0
        ? `${itemLocations[0].name} - ${itemLocations[0].address}`
        : cc.locations[idx % cc.locations.length],
      expectedQty: expected,
      countedQty: null,
      note: "",
      status: "pending",
      serialized: isSerialized,
    };

    if (isSerialized) {
      const locData = itemLocations.length >= 2
        ? itemLocations.map((l) => ({ id: l.id, name: l.name, address: l.address }))
        : [{ id: itemLocations[0]?.id ?? "WH-A01", name: itemLocations[0]?.name ?? "WH-A01", address: itemLocations[0]?.address ?? "Loading Dock 1" }];
      base.expectedSerialUnits = generateSerialUnits(item.id, expected);
      base.countedSerialNos = [];
      base.locations = generateLocations(item.id, expected, locData);
    }

    return base;
  });

  // If we have fewer than 9 items, pad with extra non-serialized catalog items
  if (countItems.length < 9) {
    const usedIds = new Set(countItems.map((i) => i.id));
    const extras = ITEMS.filter((i) => !usedIds.has(i.id) && !i.serialized).slice(0, 9 - countItems.length);
    extras.forEach((item, idx) => {
      const locRef = item.locations[0];
      countItems.push({
        id: item.id,
        name: item.name,
        category: item.type,
        location: locRef ? `${locRef.name} - ${locRef.address}` : "WH-A01",
        expectedQty: [80, 220, 340][idx % 3],
        countedQty: null,
        note: "",
        status: "pending",
        serialized: false,
      });
    });
  }

  return countItems;
}

// ═══════════════════════════════════════════════════════════════════════════
// § 7  DETAIL PAGE — sidebar entries, line items, notes, attachments
// ═══════════════════════════════════════════════════════════════════════════

// ─── Types (shared between mock-registry and cycle-count-detail) ─────────

export type DetailLineItemStatus =
  | "pending"
  | "in_progress"
  | "completed"
  | "completed_approved"
  | "awaiting_approval"
  | "cancelled";

export interface DetailLineItem {
  id: string;
  code: string;
  description: string;
  type: "location" | "item";
  status: DetailLineItemStatus;
  systemCount: number;
  submittedCount: number | null;
  adjustedCount?: number | null;
  variance: number | null;
  countedBy: string | null;
  countedByAvatar: string | null;
  approvedBy?: string | null;
  cancelledBy?: string | null;
  startedOn: string | null;
  completedOn: string | null;
  attachments: number;
  isNew?: boolean;
  serialized?: boolean;
  lotControlled?: boolean;
  tags?: string[];
  image?: string;
  serialUnitsExpected?: number;
  serialUnitsScanned?: number;
  serialUnitsMatched?: number;
}

export interface DetailSidebarEntry {
  id: string;
  code: string;
  description: string;
  icon: "location" | "item" | "category";
  itemCount?: number;
  discrepancy?: boolean;
  trackingType?: string;
  image?: string;
  totalUnits?: number;
  uom?: string;
}

export interface DetailNoteEntry {
  id: string;
  text: string;
  author: string;
  avatar: string | null;
  timestamp: string;
}

export type DetailAttFileType = "pdf" | "xlsx" | "docx" | "png" | "jpg" | "zip" | "csv";
export interface DetailAttachment {
  id: string;
  fileName: string;
  fileType: DetailAttFileType;
  fileSize: string;
  uploadedDate: string;
  uploadedTime: string;
  uploadedBy: string;
  serialUnit?: string;
}

// ─── Constants ───────────────────────────────────────────────────────────

/** Default assignee IDs for the detail page */
export const DETAIL_ASSIGNEE_IDS = new Set(["p1", "p2", "p3", "p4", "p5", "p6", "p9", "p10", "p12"]);

/** Tags shown on the detail page */
export const DETAIL_TAGS = ["Quick count", "System level", "Audit 2026", "Full accuracy counts"];

// ─── Helper: resolve person avatar by name ──────────────────────────────

function personAvatar(name: string): string | null {
  return PEOPLE_AVATARS[name] ?? null;
}

// ─── Unsplash image bank — categorized by entity type ───────────────────
// Using canonical Unsplash URLs already present in the codebase.

const IMG = {
  // Warehouse / loading dock
  warehouseDock1: "https://images.unsplash.com/photo-1758789667762-56175fe4601c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2FkaW5nJTIwZG9jayUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzcyNjM5NDU1fDA&ixlib=rb-4.1.0&q=80&w=200",
  warehouseShelves: "https://images.unsplash.com/photo-1736507748808-31bb64ce6fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlJTIwc2hlbHZlc3xlbnwxfHx8fDE3NzI1MzQzNjF8MA&ixlib=rb-4.1.0&q=80&w=200",
  // Aeronautical
  aircraft: "https://images.unsplash.com/photo-1606336783080-15e2bacd9cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJjcmFmdCUyMGVuZ2luZSUyMHR1cmJpbmV8ZW58MXx8fHwxNzcyNjM5NDU1fDA&ixlib=rb-4.1.0&q=80&w=200",
  // Items
  steelBolt: "https://images.unsplash.com/photo-1617123623686-2b7b339785da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJvbHQlMjBpbmR1c3RyaWFsJTIwaGFyZHdhcmV8ZW58MXx8fHwxNzcyNjM5NDUyfDA&ixlib=rb-4.1.0&q=80&w=200",
  foam: "https://images.unsplash.com/photo-1609089792573-2ec8b9e263ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2FtJTIwcGFja2FnaW5nJTIwbWF0ZXJpYWwlMjByb2xsfGVufDF8fHx8MTc3MjYzOTQ1M3ww&ixlib=rb-4.1.0&q=80&w=200",
  aluminum: "https://images.unsplash.com/photo-1661069387900-54d5843b704d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMHNoZWV0JTIwbWV0YWwlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MjYzOTQ1M3ww&ixlib=rb-4.1.0&q=80&w=200",
  rivet: "https://images.unsplash.com/photo-1666172052364-4558e18a3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXRhbml1bSUyMHJpdmV0JTIwZmFzdGVuZXIlMjBtZXRhbHxlbnwxfHx8fDE3NzI2Mzk0NTR8MA&ixlib=rb-4.1.0&q=80&w=200",
  hydraulic: "https://images.unsplash.com/photo-1724342388597-c0f20d3b6c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyYXVsaWMlMjBzZWFsJTIwa2l0JTIwcnViYmVyfGVufDF8fHx8MTc3MjYzOTQ1NHww&ixlib=rb-4.1.0&q=80&w=200",
  bottle: "https://images.unsplash.com/photo-1654718421032-8aee5603b51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJvdHRsZSUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzcyNjM5NDU2fDA&ixlib=rb-4.1.0&q=80&w=200",
  brakePart: "https://images.unsplash.com/photo-1761040100230-8c8e6fc64638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFrZSUyMGRpc2MlMjBhdXRvbW90aXZlJTIwcGFydHxlbnwxfHx8fDE3NzI2Mzk0NTJ8MA&ixlib=rb-4.1.0&q=80&w=200",
} as const;

// Item ID → image URL mapping (from the catalog)
const ITEM_IMAGE: Record<string, string> = {
  "P-100219-42": IMG.steelBolt,
  "P 200-12": IMG.steelBolt,
  "DSHAE-15891": IMG.foam,
  "P-44210": IMG.aluminum,
  "P-50001": IMG.rivet,
  "P-50002": IMG.hydraulic,
  "P-50003": IMG.brakePart,
  "P-50004": IMG.hydraulic,
};

// Location ID → image URL mapping
const LOC_IMAGE: Record<string, string> = {
  "WH-A01": IMG.warehouseDock1,
  "WH-A02": IMG.warehouseShelves,
  "WH-B03": IMG.warehouseShelves,
  "AERO-03": IMG.aircraft,
  "WH-D01": IMG.warehouseDock1,
  "MFG-01": IMG.aircraft,
};

// ─── Sidebar Generator ──────────────────────────────────────────────────

export function generateDetailSidebar(countBasis: string): DetailSidebarEntry[] {
  if (countBasis === "Location") {
    // Pull from canonical locations
    const locIds = ["WH-A01", "WH-A02", "WH-B03", "AERO-03"];
    return locIds.map((locId, idx) => {
      const loc = searchableLocations.find((l) => l.id === locId);
      return {
        id: locId,
        code: loc?.name ?? locId,
        description: loc?.address ?? locId,
        icon: "location" as const,
        itemCount: loc?.itemCount ?? [12, 8, 15, 6][idx],
        discrepancy: idx === 0, // first location has discrepancy
        totalUnits: [4200, 2800, 6500, 1800][idx],
        uom: "EA",
        image: LOC_IMAGE[locId] ?? IMG.warehouseDock1,
      };
    });
  }

  if (countBasis === "Category") {
    const catIds = ["CAT-01", "CAT-02", "CAT-03"];
    return catIds.map((catId, idx) => {
      const cat = searchableCategories.find((c) => c.id === catId);
      return {
        id: catId,
        code: cat?.name ?? catId,
        description: cat?.description ?? "Category",
        icon: "category" as const,
        itemCount: cat?.itemCount ?? [3, 86, 64][idx],
        discrepancy: idx === 1, // Spare Parts has discrepancy
        totalUnits: [950, 12400, 8200][idx],
        uom: "EA",
        image: [IMG.aircraft, IMG.steelBolt, IMG.bottle][idx],
      };
    });
  }

  // Item-based
  const itemIds = ["P-100219-42", "P 200-12", "DSHAE-15891", "P-44210", "P-50001", "P-50002"];
  return itemIds.map((itemId, idx) => {
    const item = ITEMS.find((i) => i.id === itemId);
    const trackTypes = ["Non-Serialized", "Serialized", "Lot (Serialized)", "Lot (Non-Serialized)", "Non-Serialized", "Serialized"];
    return {
      id: itemId,
      code: item?.id ?? itemId,
      description: item?.name ?? itemId,
      icon: "item" as const,
      itemCount: item?.locationCount ?? [32, 2, 2, 3, 2, 1][idx],
      discrepancy: idx === 1, // second item has discrepancy
      trackingType: trackTypes[idx],
      totalUnits: [3000, 1500, 800, 2400, 600, 250][idx],
      uom: "EA",
      image: ITEM_IMAGE[itemId] ?? IMG.steelBolt,
    };
  });
}

// ─── Line Items Generator ───────────────────────────────────────────────

/** Canonical people used for counting / approving / cancelling */
const COUNTER_NAMES = [PEOPLE[0], PEOPLE[1], PEOPLE[2], PEOPLE[4]]; // Jhon, George, Steven, Anthony
const APPROVER_NAME = PEOPLE[3]; // James Stewart

interface LineItemSpec {
  code: string;
  description: string;
  type: "item" | "location";
  status: DetailLineItemStatus;
  systemCount: number;
  submittedCount: number | null;
  adjustedCount?: number | null;
  variance: number | null;
  counterIdx: number; // index into COUNTER_NAMES, -1 = null
  approvedBy?: string | null;
  cancelledBy?: string | null;
  startedOn: string | null;
  completedOn: string | null;
  attachments: number;
  isNew?: boolean;
  serialized?: boolean;
  lotControlled?: boolean;
  tags?: string[];
  serialUnitsExpected?: number;
  serialUnitsScanned?: number;
  serialUnitsMatched?: number;
}

function buildLineItem(spec: LineItemSpec, idx: number): DetailLineItem {
  const counter = spec.counterIdx >= 0 ? COUNTER_NAMES[spec.counterIdx] : null;
  return {
    id: `LI-${idx + 1}`,
    code: spec.code,
    description: spec.description,
    type: spec.type,
    status: spec.status,
    systemCount: spec.systemCount,
    submittedCount: spec.submittedCount,
    adjustedCount: spec.adjustedCount ?? undefined,
    variance: spec.variance,
    countedBy: counter,
    countedByAvatar: counter ? personAvatar(counter) : null,
    approvedBy: spec.approvedBy ?? undefined,
    cancelledBy: spec.cancelledBy ?? undefined,
    startedOn: spec.startedOn,
    completedOn: spec.completedOn,
    attachments: spec.attachments,
    isNew: spec.isNew,
    serialized: spec.serialized,
    lotControlled: spec.lotControlled,
    tags: spec.tags,
    image: ITEM_IMAGE[spec.code] ?? LOC_IMAGE[spec.code] ?? IMG.steelBolt,
    serialUnitsExpected: spec.serialUnitsExpected,
    serialUnitsScanned: spec.serialUnitsScanned,
    serialUnitsMatched: spec.serialUnitsMatched,
  };
}

/** Line items when viewing by location or category → shows items at that entity */
function locationCategoryLineItems(): DetailLineItem[] {
  const items = ITEMS;
  const specs: LineItemSpec[] = [
    { code: items[0]?.id ?? "P-100219-42", description: `${items[0]?.name ?? "Hex Bolt M10x40"} – Zinc Coated, high-strength`, type: "item", status: "awaiting_approval", systemCount: 1000, submittedCount: 1100, variance: 100, counterIdx: 0, startedOn: "10/24/2025 09:30 AM", completedOn: "10/24/2025 02:15 PM", attachments: 2, serialized: true, lotControlled: true, tags: ["Parts", "Active"], serialUnitsExpected: 1000, serialUnitsScanned: 1100, serialUnitsMatched: 920 },
    { code: items[0]?.id ?? "P-100219-42", description: items[0]?.name ?? "Steel Bolt M8 × 40 mm – Zinc Coated", type: "item", status: "completed_approved", systemCount: 1000, submittedCount: 1100, adjustedCount: 1100, variance: 100, counterIdx: 1, approvedBy: APPROVER_NAME, startedOn: "10/23/2025 08:00 AM", completedOn: "10/23/2025 04:30 PM", attachments: 0, serialized: false, lotControlled: true, tags: ["Parts", "Active"] },
    { code: items[3]?.id ?? "P-44210", description: items[3]?.name ?? "Aluminum Sheet 6061-T6", type: "item", status: "completed", systemCount: 500, submittedCount: 500, variance: 0, counterIdx: 2, startedOn: "10/22/2025 10:00 AM", completedOn: "10/22/2025 11:45 AM", attachments: 1, serialized: true, lotControlled: false, tags: ["Material", "Active"], serialUnitsExpected: 500, serialUnitsScanned: 500, serialUnitsMatched: 488 },
    { code: items[2]?.id ?? "DSHAE-15891", description: items[2]?.name ?? "Foam padding RF12", type: "item", status: "in_progress", systemCount: 800, submittedCount: null, variance: null, counterIdx: 3, startedOn: "10/25/2025 09:00 AM", completedOn: null, attachments: 0, serialized: true, lotControlled: false, tags: ["Parts", "Active"], serialUnitsExpected: 800, serialUnitsScanned: 340 },
    { code: items[4]?.id ?? "P-50001", description: items[4]?.name ?? "Titanium Rivet 5/32\" Universal", type: "item", status: "pending", systemCount: 300, submittedCount: null, variance: null, counterIdx: -1, startedOn: null, completedOn: null, attachments: 0, serialized: false, lotControlled: false, tags: ["Parts", "Active"] },
    { code: items[5]?.id ?? "P-50003", description: items[5]?.name ?? "Copper Busbar 10mm × 60mm", type: "item", status: "awaiting_approval", systemCount: 1000, submittedCount: 900, variance: -100, counterIdx: 0, startedOn: "10/24/2025 10:00 AM", completedOn: "10/24/2025 03:00 PM", attachments: 0, serialized: false, lotControlled: false, tags: ["Material", "Active"], isNew: true },
    { code: items[6]?.id ?? "P-50004", description: items[6]?.name ?? "Stainless Hex Nut M12", type: "item", status: "cancelled", systemCount: 400, submittedCount: 380, variance: -20, counterIdx: 1, cancelledBy: APPROVER_NAME, startedOn: "10/20/2025 08:00 AM", completedOn: "10/20/2025 12:00 PM", attachments: 1, serialized: false, lotControlled: true, tags: ["Parts", "Active"] },
  ];
  return specs.map((s, i) => buildLineItem(s, i));
}

/** Line items when viewing by item → shows locations where that item exists */
function itemBasedLineItems(parentSerialized: boolean): DetailLineItem[] {
  const locs = searchableLocations;
  const specs: LineItemSpec[] = [
    { code: locs[0]?.id ?? "WH-A01", description: locs[0]?.address ?? "Loading Dock 1, Central Distribution Center", type: "location", status: "awaiting_approval", systemCount: 1000, submittedCount: 1100, variance: 100, counterIdx: 0, startedOn: "10/24/2025 09:30 AM", completedOn: "10/24/2025 02:15 PM", attachments: 2, ...(parentSerialized ? { serialized: true, serialUnitsExpected: 1000, serialUnitsScanned: 1100, serialUnitsMatched: 920 } : {}) },
    { code: locs[1]?.id ?? "WH-A02", description: locs[1]?.address ?? "Loading Dock 2, Central Distribution Center", type: "location", status: "completed_approved", systemCount: 1000, submittedCount: 1100, adjustedCount: 1100, variance: 100, counterIdx: 1, approvedBy: APPROVER_NAME, startedOn: "10/23/2025 08:00 AM", completedOn: "10/23/2025 04:30 PM", attachments: 0, ...(parentSerialized ? { serialized: true, serialUnitsExpected: 1000, serialUnitsScanned: 1100, serialUnitsMatched: 1000 } : {}) },
    { code: locs[2]?.id ?? "WH-B03", description: locs[2]?.address ?? "Bulk Storage Aisle 3, West Wing Warehouse", type: "location", status: "completed", systemCount: 500, submittedCount: 500, variance: 0, counterIdx: 2, startedOn: "10/22/2025 10:00 AM", completedOn: "10/22/2025 11:45 AM", attachments: 0, ...(parentSerialized ? { serialized: true, serialUnitsExpected: 500, serialUnitsScanned: 500, serialUnitsMatched: 500 } : {}) },
    { code: locs[3]?.id ?? "WH-C05", description: locs[3]?.address ?? "Outbound Staging 5, East Facility", type: "location", status: "in_progress", systemCount: 800, submittedCount: null, variance: null, counterIdx: 3, startedOn: "10/25/2025 09:00 AM", completedOn: null, attachments: 0, ...(parentSerialized ? { serialized: true, serialUnitsExpected: 800, serialUnitsScanned: 340 } : {}) },
    { code: "AERO-01", description: "Bay 1, Aeronautics Assembly Hangar", type: "location", status: "pending", systemCount: 300, submittedCount: null, variance: null, counterIdx: -1, startedOn: null, completedOn: null, attachments: 0, ...(parentSerialized ? { serialized: true } : {}) },
    { code: "WH-D01", description: "Maintenance Shop Floor 1, North Annex", type: "location", status: "awaiting_approval", systemCount: 1000, submittedCount: 900, variance: -100, counterIdx: 0, startedOn: "10/24/2025 10:00 AM", completedOn: "10/24/2025 03:00 PM", attachments: 0, ...(parentSerialized ? { serialized: true, serialUnitsExpected: 1000, serialUnitsScanned: 900, serialUnitsMatched: 850 } : {}) },
    { code: "MFG-01", description: "Line 1 Staging, Manufacturing Plant A", type: "location", status: "cancelled", systemCount: 400, submittedCount: 380, variance: -20, counterIdx: 1, cancelledBy: APPROVER_NAME, startedOn: "10/20/2025 08:00 AM", completedOn: "10/20/2025 12:00 PM", attachments: 1, ...(parentSerialized ? { serialized: true, serialUnitsExpected: 400, serialUnitsScanned: 380, serialUnitsMatched: 370 } : {}) },
  ];
  return specs.map((s, i) => buildLineItem(s, i));
}

export function generateDetailLineItems(_sidebarId: string, countBasis: string, sidebarTrackingType?: string): DetailLineItem[] {
  const isLocationBased = countBasis === "Location";
  const isCategoryBased = countBasis === "Category";
  if (isLocationBased || isCategoryBased) return locationCategoryLineItems();
  // For item-based view, determine if parent item is serialized from its tracking type
  const parentSerialized = !!sidebarTrackingType && (sidebarTrackingType === "Serialized" || sidebarTrackingType === "Lot (Serialized)");
  return itemBasedLineItems(parentSerialized);
}

// ─── Notes Generator ────────────────────────────────────────────────────

export function generateDetailNotes(): DetailNoteEntry[] {
  return [
    { id: "n-1", text: "Focus on high-turnover fastener items in Zone B and WH-A01. Ensure all serialized items have their serial numbers scanned and verified against system records.", author: PEOPLE[0], avatar: null, timestamp: "Oct 24, 2025 03:45 PM" },
    { id: "n-2", text: "Report any damaged or missing items immediately. Escalate to supervisor if difference exceeds 5%.", author: PEOPLE[1], avatar: null, timestamp: "Oct 23, 2025 11:20 AM" },
    { id: "n-3", text: "Zone B racks 4-7 have been relocated since last count. Updated map attached.", author: PEOPLE[7] ?? "Maya Thompson", avatar: null, timestamp: "Oct 22, 2025 09:10 AM" },
  ];
}

// ─── Attachments Generator ──────────────────────────────────────────────

export function generateDetailAttachments(): DetailAttachment[] {
  return [
    { id: "att-1", fileName: "CycleCount_ZoneA02_Report.pdf", fileType: "pdf", fileSize: "2.4 MB", uploadedDate: "10/24/2025", uploadedTime: "3:00 PM", uploadedBy: PEOPLE[0], serialUnit: "158910-01" },
    { id: "att-2", fileName: "Discrepancy_Photo_P15891.jpg", fileType: "jpg", fileSize: "1.8 MB", uploadedDate: "10/23/2025", uploadedTime: "4:30 PM", uploadedBy: PEOPLE[1], serialUnit: "158910-02" },
    { id: "att-3", fileName: "Inventory_Report_Q4_2025.xlsx", fileType: "xlsx", fileSize: "340 KB", uploadedDate: "10/21/2025", uploadedTime: "2:00 PM", uploadedBy: PEOPLE[7] ?? "Maya Thompson" },
    { id: "att-4", fileName: "Count_Sheet_WH_A01.pdf", fileType: "pdf", fileSize: "1.1 MB", uploadedDate: "10/20/2025", uploadedTime: "9:15 AM", uploadedBy: PEOPLE[3], serialUnit: "442100-05" },
    { id: "att-5", fileName: "Receiving_Photo_Dock3.png", fileType: "png", fileSize: "3.8 MB", uploadedDate: "10/19/2025", uploadedTime: "9:20 AM", uploadedBy: PEOPLE[3] },
    { id: "att-6", fileName: "Adjustment_Auth_Form.docx", fileType: "docx", fileSize: "256 KB", uploadedDate: "10/18/2025", uploadedTime: "11:20 AM", uploadedBy: PEOPLE[5] ?? "Daniel Adams", serialUnit: "500010-03" },
  ];
}