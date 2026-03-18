// ─── Shared Types, Mock Data, and Helpers for Create Cycle Count ────────────
import { useRef, useEffect, type ReactNode } from "react";
import { Check } from "lucide-react";
import imgPersonJhon from "figma:asset/b2f60024fc4777e6e373abbb78897f2319578b69.png";
import imgPersonGeorge from "figma:asset/3aa8abfe64c5d62a729b808360c39bded58287f2.png";
import imgPersonSteven from "figma:asset/f5f1f4b597930e3cb2e01d5aedb359b110c67bd9.png";
import imgPersonJames from "figma:asset/2d12dfcabab73f9c9b44c3d79cf4c39195eeab7d.png";
import imgPersonAnthony from "figma:asset/8b5cffbce56296888a79e3124ac2c4b8fb3fc65e.png";
import imgPersonFriedrich from "figma:asset/7df6d7f2d05485dbb4517c5c6a6af854d012577a.png";
import imgPersonStephenson from "figma:asset/38645a583214c47cdb3aeb006e43f0855f4eebcf.png";
import imgPersonKarls from "figma:asset/481da77b5267774461fe85683bf581ad433609d9.png";
import imgPersonJeansJanice from "figma:asset/c46613c187ee11e9efa95305d71a5def7568832a.png";
import imgPersonTomChanning from "figma:asset/73ee5d4d01065644e7eebed1a39dfb979ff21794.png";

// ─── Types ──────────────────────────────────────────────────────────────────
export type CountBasis = "item" | "location" | "category" | null;
export type Priority = "High" | "Standard" | "Low";

export interface SerialUnit {
  index: number;
  serialNo: string;
  status?: "matched" | "missing" | "added" | "relocated";
  /** Only set when status === "relocated" */
  relocatedType?: "active" | "deactivated";
  /** Original location name — only set when status === "relocated" */
  relocatedFrom?: string;
}

export interface ViewUnitsModalState {
  open: boolean;
  itemId: string;
  focusedLocationId: string;
}

export interface ReadOnlyViewUnitsModalState {
  open: boolean;
  itemId: string;
  focusedLocationId: string;
}

export interface ViewLocationsModalState {
  open: boolean;
  itemId: string;
}

export interface SelectItemsGroupModalState {
  open: boolean;
  type: "location" | "category";
  groupIds: string[];
  focusedGroupId: string;
  selectedItemIds: Set<string>;
}

export interface LotLocation {
  id: string;
  name: string;
  address: string;
  qty: string;
}

export interface LotData {
  id: string;
  name: string;
  description: string;
  status: "Active" | "Quarantine" | "Expired" | "Hold";
  totalQty: string;
  locations: LotLocation[];
}

export type ItemDetailTab = "lot" | "location" | "serialUnits";

/**
 * The four tracking-type combinations.
 *
 * Every inventory item falls into exactly one of these:
 *  • non-serialized            – plain qty by location
 *  • serialized                – individual serial units by location
 *  • lot-non-serialized        – qty by lot → lot-locations
 *  • lot-serialized            – serial units by lot → lot-locations
 */
export type TrackingType =
  | "non-serialized"
  | "serialized"
  | "lot-non-serialized"
  | "lot-serialized";

/** Derive the canonical tracking type from the item's boolean flags. */
export function getTrackingType(item: { serialized: boolean; lotControlled: boolean }): TrackingType {
  if (item.lotControlled) {
    return item.serialized ? "lot-serialized" : "lot-non-serialized";
  }
  return item.serialized ? "serialized" : "non-serialized";
}

/** Convenience predicates */
export const isLotControlled = (item: { lotControlled: boolean }) => item.lotControlled;
export const isSerialized = (item: { serialized: boolean }) => item.serialized;
export const isLotSerialized = (item: { serialized: boolean; lotControlled: boolean }) =>
  item.serialized && item.lotControlled;
export const isLotNonSerialized = (item: { serialized: boolean; lotControlled: boolean }) =>
  !item.serialized && item.lotControlled;

export interface SearchableItem {
  id: string;
  name: string;
  description: string;
  image: string;
  type: "Parts" | "Equipment" | "Material";
  status: "Active" | "Inactive";
  serialized: boolean;
  serializationType: "Serialized" | "Non-Serialized";
  lotControlled: boolean;
  lots: LotData[];
  lastCounted: string;
  onHand: string;
  categories: number;
  locationCount: number;
  locations: {
    id: string;
    name: string;
    address: string;
    qty: string;
  }[];
  assignees: string[];
}

export interface SearchableLocation {
  id: string;
  name: string;
  zone: string;
  address: string;
  description: string;
  itemCount: number;
  lastCounted: string;
}

export interface SearchableCategory {
  id: string;
  name: string;
  itemCount: number;
  description: string;
  lastCounted: string;
  type?: string;
}

export interface MockPerson {
  id: string;
  initials: string;
  name: string;
  avatar: string;
  bgColor: string;
  status?: "Task Declined" | null;
  hasPermission: boolean;
}

// ─── Mock Data ──────────────────────────────────────────────────────────────
export const searchableItems: SearchableItem[] = [
  {
    id: "P-100219-42",
    name: "Steel Bolt M8 × 40 mm – Zinc Coated",
    description: 'Steel Bolt M8 × 40 mm – Zinc Coated, high-strength Grade 8.8 hex-head fastener for structural assembly.',
    image: "https://images.unsplash.com/photo-1617123623686-2b7b339785da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJvbHQlMjBtZXRhbCUyMGZhc3RlbmVyJTIwaGFyZHdhcmV8ZW58MXx8fHwxNzcxOTIxMjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "Parts",
    status: "Active",
    serialized: false,
    serializationType: "Non-Serialized",
    lotControlled: true,
    lots: [
      {
        id: "LOT-1120000", name: "LOT-1120000", description: "Prime Location Lot 47A", status: "Active", totalQty: "1,000 EA",
        locations: [
          { id: "WH-A01", name: "WH-A01", address: "Loading Dock 3, Central Distribution Center", qty: "250 EA" },
          { id: "WH-A02", name: "WH-A02", address: "Loading Dock 3, Central Distribution Center", qty: "250 EA" },
        ],
      },
      {
        id: "LOT-1120012", name: "LOT-1120012", description: "Prime Location Lot 47A", status: "Quarantine", totalQty: "1,000 EA",
        locations: [
          { id: "WH-A01", name: "WH-A01", address: "Loading Dock 3, Central Distribution Center", qty: "500 EA" },
          { id: "WH-A02", name: "WH-A02", address: "Loading Dock 3, Central Distribution Center", qty: "500 EA" },
        ],
      },
    ],
    lastCounted: "15/10/2025, 3:44 PM",
    onHand: "6,800 EA",
    categories: 8,
    locationCount: 32,
    locations: [
      { id: "WH-A01", name: "WH-A01", address: "Loading Dock 1, Central Distribution Center", qty: "1,000 EA" },
      { id: "WH-A02", name: "WH-A02", address: "Loading Dock 2, Central Distribution Center", qty: "800 EA" },
      { id: "WH-A03", name: "WH-A03", address: "Loading Dock 3, Central Distribution Center", qty: "450 EA" },
      { id: "WH-A04", name: "WH-A04", address: "Receiving Bay 4, Central Distribution Center", qty: "320 EA" },
      { id: "WH-B01", name: "WH-B01", address: "Bulk Storage Aisle 1, West Wing Warehouse", qty: "600 EA" },
      { id: "WH-B02", name: "WH-B02", address: "Bulk Storage Aisle 2, West Wing Warehouse", qty: "550 EA" },
      { id: "WH-B03", name: "WH-B03", address: "Bulk Storage Aisle 3, West Wing Warehouse", qty: "200 EA" },
      { id: "WH-B04", name: "WH-B04", address: "Pallet Rack B4, West Wing Warehouse", qty: "180 EA" },
      { id: "WH-B05", name: "WH-B05", address: "Pallet Rack B5, West Wing Warehouse", qty: "150 EA" },
      { id: "WH-C01", name: "WH-C01", address: "Cold Storage Unit 1, East Facility", qty: "90 EA" },
      { id: "WH-C02", name: "WH-C02", address: "Cold Storage Unit 2, East Facility", qty: "75 EA" },
      { id: "WH-C05", name: "WH-C05", address: "Outbound Staging 5, East Facility", qty: "400 EA" },
      { id: "WH-C06", name: "WH-C06", address: "Outbound Staging 6, East Facility", qty: "250 EA" },
      { id: "WH-D01", name: "WH-D01", address: "Maintenance Shop Floor 1, North Annex", qty: "120 EA" },
      { id: "WH-D02", name: "WH-D02", address: "Maintenance Shop Floor 2, North Annex", qty: "95 EA" },
      { id: "WH-D03", name: "WH-D03", address: "Tool Crib D3, North Annex", qty: "60 EA" },
      { id: "AERO-01", name: "Zone Aero-01", address: "Bay 1, Aeronautics Assembly Hangar", qty: "35 EA" },
      { id: "AERO-02", name: "Zone Aero-02", address: "Bay 2, Aeronautics Assembly Hangar", qty: "40 EA" },
      { id: "AERO-03", name: "Zone Aero-03", address: "Bay 3, Aeronautics Assembly Hangar", qty: "55 EA" },
      { id: "AERO-04", name: "Zone Aero-04", address: "Bay 4, Aeronautics Assembly Hangar", qty: "30 EA" },
      { id: "MFG-01", name: "MFG-01", address: "Line 1 Staging, Manufacturing Plant A", qty: "180 EA" },
      { id: "MFG-02", name: "MFG-02", address: "Line 2 Staging, Manufacturing Plant A", qty: "160 EA" },
      { id: "MFG-03", name: "MFG-03", address: "Line 3 WIP Buffer, Manufacturing Plant A", qty: "100 EA" },
      { id: "MFG-04", name: "MFG-04", address: "Finished Goods Dock, Manufacturing Plant A", qty: "75 EA" },
      { id: "EXT-01", name: "EXT-01", address: "Vendor Consignment Yard, External Lot 1", qty: "50 EA" },
      { id: "EXT-02", name: "EXT-02", address: "Vendor Consignment Yard, External Lot 2", qty: "45 EA" },
      { id: "QC-01", name: "QC-01", address: "Quality Control Inspection Room 1", qty: "30 EA" },
      { id: "QC-02", name: "QC-02", address: "Quality Control Quarantine Bay 2", qty: "20 EA" },
      { id: "RMA-01", name: "RMA-01", address: "Returns Processing Dock, RMA Center", qty: "35 EA" },
      { id: "SP-01", name: "SP-01", address: "Spare Parts Counter, Service Building", qty: "110 EA" },
      { id: "SP-02", name: "SP-02", address: "Spare Parts Overflow, Service Building", qty: "85 EA" },
      { id: "TMP-01", name: "TMP-01", address: "Temporary Overflow Tent, Yard B", qty: "40 EA" },
    ],
    assignees: ["JM", "SK", "MT"],
  },
  {
    id: "P 200-12",
    name: "Steel Bolt M8 × 40 mm – Zinc Coated",
    description: 'Steel Bolt M8 × 40 mm – Zinc Coated, high-strength Grade 8.8 hex-head fastener for structural assembly.',
    image: "",
    type: "Parts",
    status: "Active",
    serialized: true,
    serializationType: "Serialized",
    lotControlled: true,
    lots: [
      {
        id: "LOT-1120000", name: "LOT-1120000", description: "Prime Location Lot 47A", status: "Active", totalQty: "1,000 EA",
        locations: [
          { id: "WH-A01", name: "WH-A01", address: "Loading Dock 3, Central Distribution Center", qty: "250 EA" },
          { id: "WH-A02", name: "WH-A02", address: "Loading Dock 3, Central Distribution Center", qty: "250 EA" },
        ],
      },
      {
        id: "LOT-1120012", name: "LOT-1120012", description: "Prime Location Lot 47A", status: "Quarantine", totalQty: "1,000 EA",
        locations: [
          { id: "WH-A01", name: "WH-A01", address: "Loading Dock 3, Central Distribution Center", qty: "500 EA" },
          { id: "WH-A02", name: "WH-A02", address: "Loading Dock 3, Central Distribution Center", qty: "500 EA" },
        ],
      },
    ],
    lastCounted: "15/10/2025, 2:45 PM",
    onHand: "5,000 EA",
    categories: 4,
    locationCount: 2,
    locations: [
      { id: "WH-A01", name: "WH-A01", address: "Loading Dock 1, Central Distribution Center", qty: "200 EA" },
      { id: "WH-A02", name: "WH-A02", address: "Loading Dock 2, Central Distribution Center", qty: "200 EA" },
    ],
    assignees: ["LC", "JM", "SK", "MT", "AR"],
  },
  {
    id: "DSHAE-15891",
    name: "Foam padding RF12",
    description: 'Foam padding RF12 - 3/8" X 72" X 100FT material: 10030 FR minimum order - 25 Roll per...',
    image: "",
    type: "Parts",
    status: "Active",
    serialized: true,
    serializationType: "Serialized",
    lotControlled: false,
    lots: [],
    lastCounted: "15/10/2025, 3:44 PM",
    onHand: "6,800 EA",
    categories: 3,
    locationCount: 2,
    locations: [
      { id: "WH-A01", name: "WH-A01", address: "Loading Dock 1, Central Distribution Center", qty: "3,400 EA" },
      { id: "WH-B03", name: "WH-B03", address: "Loading Dock 3, Central Distribution Center", qty: "3,400 EA" },
    ],
    assignees: ["JM"],
  },
  {
    id: "P-44210",
    name: "Aluminum Sheet 6061-T6",
    description: 'Aluminum Sheet 6061-T6 - 0.063" x 48" x 144" material: 6061 T6 temper - 10 Sheet minimum',
    image: "https://images.unsplash.com/photo-1590488630628-df246379beab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXglMjBzb2NrZXQlMjBjYXAlMjBzY3JldyUyMGNsb3NldXB8ZW58MXx8fHwxNzcxOTIxMjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "Material",
    status: "Active",
    serialized: true,
    serializationType: "Serialized",
    lotControlled: false,
    lots: [],
    lastCounted: "12/10/2025, 1:30 PM",
    onHand: "3,200 EA",
    categories: 4,
    locationCount: 3,
    locations: [
      { id: "WH-A01", name: "WH-A01", address: "Loading Dock 1, Central Distribution Center", qty: "1,200 EA" },
      { id: "WH-B03", name: "WH-B03", address: "Loading Dock 3, Central Distribution Center", qty: "1,000 EA" },
      { id: "WH-C05", name: "WH-C05", address: "Loading Dock 5, Central Distribution Center", qty: "1,000 EA" },
    ],
    assignees: ["LC", "JM"],
  },
  // ── Additional items for realistic 100+ item navigation demo ──
  ...(() => {
    const extraNames: { id: string; name: string; desc: string; type: "Parts" | "Equipment" | "Material"; ser: boolean; lc: boolean }[] = [
      { id: "P-50001", name: "Titanium Rivet 5/32\" Universal", desc: "Aircraft-grade titanium rivet for structural fastening", type: "Parts", ser: false, lc: false },
      { id: "P-50002", name: "Hydraulic Seal Kit HK-400", desc: "Complete seal kit for HK-400 series hydraulic cylinders", type: "Parts", ser: true, lc: false },
      { id: "P-50003", name: "Copper Busbar 10mm × 60mm", desc: "Electrical-grade copper busbar for power distribution", type: "Material", ser: false, lc: false },
      { id: "P-50004", name: "Stainless Hex Nut M12", desc: "A4-80 marine-grade stainless hex nut, metric thread", type: "Parts", ser: false, lc: true },
      { id: "EQ-60001", name: "Torque Wrench TW-250", desc: "Digital torque wrench 50-250 Nm range", type: "Equipment", ser: true, lc: false },
      { id: "EQ-60002", name: "Portable Oscilloscope DS-1054Z", desc: "4-channel 50MHz digital storage oscilloscope", type: "Equipment", ser: true, lc: false },
      { id: "M-70001", name: "Carbon Fiber Sheet CF-3K", desc: "3K twill weave carbon fiber panel 1m × 1.5m × 2mm", type: "Material", ser: false, lc: false },
      { id: "M-70002", name: "Epoxy Resin ER-2216", desc: "Two-part structural epoxy adhesive, 50ml cartridge", type: "Material", ser: false, lc: true },
      { id: "P-50005", name: "O-Ring Viton 18×2.5mm", desc: "Fluoroelastomer O-ring for high-temp chemical applications", type: "Parts", ser: false, lc: false },
      { id: "P-50006", name: "Bearing SKF 6205-2RS", desc: "Deep groove ball bearing, sealed, 25×52×15mm", type: "Parts", ser: true, lc: false },
      { id: "P-50007", name: "Spring Washer M10 DIN 127", desc: "Split spring lock washer, zinc plated", type: "Parts", ser: false, lc: false },
      { id: "P-50008", name: "Thread Insert Helicoil M8×1.25", desc: "Stainless steel screw thread insert for thread repair", type: "Parts", ser: false, lc: false },
      { id: "EQ-60003", name: "Heat Gun HG-2320E", desc: "Variable temperature hot air gun, 50-650°C", type: "Equipment", ser: true, lc: false },
      { id: "M-70003", name: "Nylon Rod PA6 Ø30mm", desc: "Natural nylon 6 round rod, extruded, per meter", type: "Material", ser: false, lc: false },
      { id: "P-50009", name: "Cotter Pin 3.2×25mm SS", desc: "Stainless steel split cotter pin for clevis retention", type: "Parts", ser: false, lc: false },
      { id: "P-50010", name: "Fuel Filter FF-230A", desc: "Spin-on fuel filter for diesel generator sets", type: "Parts", ser: true, lc: true },
      { id: "P-50011", name: "Cable Tie 4.8×300mm Black", desc: "UV-resistant nylon cable tie, tensile strength 22kg", type: "Parts", ser: false, lc: false },
      { id: "EQ-60004", name: "Dial Indicator 0-10mm", desc: "Precision dial gauge 0.01mm graduation, lug back", type: "Equipment", ser: true, lc: false },
      { id: "M-70004", name: "PTFE Sheet 1mm × 300 × 300", desc: "Virgin PTFE gasket sheet, FDA-compliant", type: "Material", ser: false, lc: false },
      { id: "P-50012", name: "Grease Nipple M6×1 Straight", desc: "Hydraulic grease fitting, zinc-plated steel", type: "Parts", ser: false, lc: false },
      { id: "P-50013", name: "Safety Wire 0.032\" MS20995C", desc: "Inconel safety lockwire per MIL spec", type: "Parts", ser: false, lc: false },
      { id: "EQ-60005", name: "Rivet Gun PRG-510", desc: "Pneumatic riveting gun for 3/32\"-3/16\" rivets", type: "Equipment", ser: true, lc: false },
      { id: "M-70005", name: "Kevlar Fabric KF-49 Style 120", desc: "Para-aramid plain weave fabric, 60\" wide", type: "Material", ser: false, lc: false },
      { id: "P-50014", name: "Circlip Internal DIN 472 Ø25", desc: "Internal retaining ring for 25mm bore", type: "Parts", ser: false, lc: false },
      { id: "P-50015", name: "Dowel Pin 6h7×20 ISO 2338", desc: "Unhardened precision dowel pin, alloy steel", type: "Parts", ser: false, lc: false },
      { id: "P-50016", name: "Zener Diode BZX55C5V1", desc: "5.1V 500mW axial zener diode", type: "Parts", ser: false, lc: false },
      { id: "EQ-60006", name: "Bench Grinder BG-200W", desc: "200mm wheel double-ended bench grinder", type: "Equipment", ser: true, lc: false },
      { id: "M-70006", name: "Silicone Sealant RTV-106", desc: "One-part RTV silicone, -55°C to +260°C service", type: "Material", ser: false, lc: false },
      { id: "P-50017", name: "Clevis Pin 8×40 DIN 1444", desc: "Zinc-plated clevis pin with head and cotter hole", type: "Parts", ser: false, lc: false },
      { id: "P-50018", name: "Fuse Ceramic 5A 250V 5×20", desc: "Fast-blow glass fuse for panel protection", type: "Parts", ser: false, lc: false },
    ];
    const locs = ["WH-A01", "WH-A02", "WH-B03", "WH-C05"];
    return extraNames.map((e, idx) => ({
      id: e.id,
      name: e.name,
      description: e.desc,
      image: "",
      type: e.type,
      status: "Active" as const,
      serialized: e.ser,
      serializationType: (e.ser ? "Serialized" : "Non-Serialized") as "Serialized" | "Non-Serialized",
      lotControlled: e.lc,
      lots: e.lc ? [
        { id: `LOT-E${idx}00`, name: `LOT-E${idx}00`, description: "Standard production lot", status: "Active" as const, totalQty: "500 EA", locations: [
          { id: locs[idx % 4], name: locs[idx % 4], address: "Central Distribution Center", qty: "300 EA" },
          { id: locs[(idx + 1) % 4], name: locs[(idx + 1) % 4], address: "Central Distribution Center", qty: "200 EA" },
        ]},
      ] : [],
      lastCounted: `${10 + (idx % 20)}/10/2025, ${1 + (idx % 8)}:${String((idx * 15) % 60).padStart(2, "0")} PM`,
      onHand: `${(1 + idx) * 200} EA`,
      categories: 2 + (idx % 4),
      locationCount: 1 + (idx % 3),
      locations: [
        { id: locs[idx % 4], name: locs[idx % 4], address: "Central Distribution Center", qty: `${100 + idx * 50} EA` },
        { id: locs[(idx + 1) % 4], name: locs[(idx + 1) % 4], address: "Central Distribution Center", qty: `${80 + idx * 30} EA` },
      ],
      assignees: [["JM"], ["JM", "SK"], ["LC", "JM", "SK"]][idx % 3],
    }));
  })(),
];

export const searchableLocations: SearchableLocation[] = [
  { id: "WH-A01", name: "WH-A01", zone: "Zone A", address: "Loading Dock 1, Central Distribution Center", description: "Primary receiving dock with 24 items stored", itemCount: 24, lastCounted: "15/10/2025, 3:44 PM" },
  { id: "WH-A02", name: "WH-A02", zone: "Zone A", address: "Loading Dock 2, Central Distribution Center", description: "Secondary receiving area with 18 items", itemCount: 18, lastCounted: "14/10/2025, 11:00 AM" },
  { id: "WH-B03", name: "WH-B03", zone: "Zone B", address: "Loading Dock 3, Central Distribution Center", description: "Bulk storage area with 42 items", itemCount: 42, lastCounted: "13/10/2025, 9:15 AM" },
  { id: "WH-C05", name: "WH-C05", zone: "Zone C", address: "Loading Dock 5, Central Distribution Center", description: "Outbound staging with 31 items", itemCount: 31, lastCounted: "12/10/2025, 2:30 PM" },
  { id: "AERO-03", name: "Zone Aero-03", zone: "Zone Aero", address: "Bay 3, Central Warehouse", description: "Aeronautical parts storage zone", itemCount: 56, lastCounted: "15/10/2025, 5:45 PM" },
];

export const searchableCategories: SearchableCategory[] = [
  { id: "CAT-01", name: "Engine", itemCount: 3, description: "Aeronautical engine for third units", lastCounted: "15/10/2025, 3:44 PM", type: "Parts" },
  { id: "CAT-02", name: "Spare Parts", itemCount: 86, description: "Aeronautical engine for third units", lastCounted: "14/10/2025, 11:00 AM", type: "Parts" },
  { id: "CAT-03", name: "Bottle", itemCount: 64, description: "Aeronautical engine for third units", lastCounted: "13/10/2025, 9:15 AM", type: "Parts" },
  { id: "CAT-04", name: "AE-3", itemCount: 45, description: "Aeronautical engine for third units", lastCounted: "12/10/2025, 2:30 PM", type: "Parts" },
  { id: "CAT-05", name: "Extra", itemCount: 38, description: "Aeronautical engine for third units", lastCounted: "15/10/2025, 1:36 PM", type: "Parts" },
];

// Mock: which items belong to each category
export const categoryItemMap: Record<string, string[]> = {
  "CAT-01": ["P-100219-42", "P 200-12", "DSHAE-15891", "P-50001", "P-50002", "P-50005", "P-50006", "P-50009", "P-50013", "EQ-60001", "EQ-60003", "M-70001"],
  "CAT-02": ["P-100219-42", "P-44210", "DSHAE-15891", "P 200-12", "P-50003", "P-50004", "P-50007", "P-50008", "P-50010", "P-50011", "P-50014", "P-50015", "EQ-60002", "EQ-60004", "M-70002", "M-70003"],
  "CAT-03": ["P-44210", "P-100219-42", "P-50012", "P-50016", "P-50017", "P-50018", "EQ-60005", "EQ-60006", "M-70004", "M-70005", "M-70006"],
  "CAT-04": ["DSHAE-15891", "P-44210", "P-50001", "P-50003", "P-50005", "P-50007", "P-50009", "P-50011", "P-50013", "P-50015", "P-50017"],
  "CAT-05": ["P 200-12", "P-100219-42", "P-44210", "P-50002", "P-50004", "P-50006", "P-50008", "P-50010", "P-50012", "P-50014", "P-50016", "P-50018", "EQ-60001", "EQ-60002", "EQ-60003", "M-70001", "M-70002"],
};

// Helper: get items for a location (items whose locations[] contains this loc ID)
export const getItemsForLocation = (locId: string): SearchableItem[] =>
  searchableItems.filter((item) => item.locations.some((l) => l.id === locId));

// Helper: get items for a category
export const getItemsForCategory = (catId: string): SearchableItem[] => {
  const ids = categoryItemMap[catId] || [];
  return searchableItems.filter((item) => ids.includes(item.id));
};

// ─── Mock People Database (for Plan Assignees) ─────────────────────────────
export const mockPeopleWithPermission: MockPerson[] = [
  { id: "p1", initials: "JS", name: "Jhon Smith", avatar: imgPersonJhon, bgColor: "var(--avatar-bg-green)", hasPermission: true },
  { id: "p2", initials: "GO", name: "George Orwell", avatar: imgPersonGeorge, bgColor: "var(--avatar-bg-sky)", hasPermission: true },
  { id: "p3", initials: "SC", name: "Steven Campbell", avatar: imgPersonSteven, bgColor: "var(--avatar-bg-warm)", status: "Task Declined", hasPermission: true },
  { id: "p4", initials: "JS2", name: "James Stewart", avatar: imgPersonJames, bgColor: "var(--avatar-bg-amber)", hasPermission: true },
  { id: "p5", initials: "AS", name: "Anthony Simmons", avatar: imgPersonAnthony, bgColor: "var(--avatar-bg-teal)", hasPermission: true },
  { id: "p6", initials: "FE", name: "Friedrich Engels", avatar: imgPersonFriedrich, bgColor: "var(--avatar-bg-warm)", hasPermission: true },
  { id: "p9", initials: "SS", name: "Shamrock Shanks", avatar: imgPersonStephenson, bgColor: "var(--avatar-bg-sky)", hasPermission: true },
  { id: "p10", initials: "JJ", name: "Jeans Janice", avatar: imgPersonJeansJanice, bgColor: "var(--avatar-bg-warm)", hasPermission: true },
  { id: "p12", initials: "TC", name: "Tom Channing", avatar: imgPersonTomChanning, bgColor: "var(--avatar-bg-amber)", hasPermission: true },
  { id: "p13", initials: "KM", name: "Karls Manberg", avatar: imgPersonKarls, bgColor: "var(--avatar-bg-teal)", hasPermission: true },
  { id: "p14", initials: "CM", name: "Cindy Mathews", avatar: imgPersonGeorge, bgColor: "var(--avatar-bg-sky)", hasPermission: true },
];

export const mockPeopleWithoutPermission: MockPerson[] = [
  { id: "p7", initials: "SS2", name: "Stephenson Steward", avatar: imgPersonStephenson, bgColor: "var(--avatar-bg-sky)", hasPermission: false },
  { id: "p15", initials: "KM2", name: "Karls Manberg", avatar: imgPersonKarls, bgColor: "var(--avatar-bg-teal)", hasPermission: false },
  { id: "p16", initials: "SL", name: "Stuart Little", avatar: imgPersonFriedrich, bgColor: "var(--avatar-bg-warm)", hasPermission: false },
  { id: "p17", initials: "JJ2", name: "Jeans Janice", avatar: imgPersonJeansJanice, bgColor: "var(--avatar-bg-warm)", hasPermission: false },
  { id: "p18", initials: "TC2", name: "Tom Channing", avatar: imgPersonTomChanning, bgColor: "var(--avatar-bg-amber)", hasPermission: false },
];

// All people combined for lookups
export const allMockPeople: MockPerson[] = [...mockPeopleWithPermission, ...mockPeopleWithoutPermission];

// Map item assignee initials → person ID
export const initialsToPersonId: Record<string, string> = {
  JM: "p1", LC: "p2", SK: "p3", MT: "p4", AR: "p5", FE: "p6",
};

export const TAG_MAX = 5;
export const tagSuggestions = [
  "Priority Standard",
  "Priority standard new 2",
  "Priority standard for engine",
  "Priority-standard for check",
  "Audit for 2026",
  "Simplified counting 2",
  "Simplified counting 3",
  "Solo plans",
  "Quick Count",
  "ABC Count",
  "Scheduled",
  "Ad Hoc",
  "Year End",
];

/** Re-export FONT and HOVER from the shared design-system primitives (single source of truth). */
export { FONT, HOVER, TAG_BASE, TAG_COLORS, tagStyle, CARD_STYLE, CARD_HOVER_STYLE, TAB_PANEL_STYLE, MODAL_OVERLAY_STYLE, TABLE_HEADER_STYLE, TABLE_HEADER_TEXT, TABLE_CELL_STYLE, TABLE_CELL_CONTENT } from "../../imports/shared-ui";

// ─── Mock serial unit generator ─────────────────────────────────────────────
export function generateSerialUnits(itemId: string, locationId: string, count: number): SerialUnit[] {
  const numPart = itemId.replace(/\D/g, "");
  const base = parseInt(numPart.slice(-5) || "10000", 10);
  const locSeed = locationId.charCodeAt(locationId.length - 1) || 0;
  const units: SerialUnit[] = [];
  for (let i = 0; i < count; i++) {
    units.push({
      index: i + 1,
      serialNo: `${base + locSeed * 100 - i * 2}`,
    });
  }
  return units;
}

/**
 * Generate serial units WITH mismatch status for the View Units modal.
 * Compares "system" serials vs "submitted" serials to flag:
 *  - "matched"  → serial exists in both system and submitted
 *  - "missing"  → serial exists in system but NOT submitted (expected but not found)
 *  - "added"    → serial exists in submitted but NOT system (newly scanned)
 *
 * Uses the line item's serialUnitsExpected / serialUnitsScanned / serialUnitsMatched
 * to determine how many mismatches to generate.
 */
export function generateSerialUnitsWithStatus(
  itemId: string,
  locationId: string,
  item: {
    serialUnitsExpected?: number;
    serialUnitsScanned?: number;
    serialUnitsMatched?: number;
    systemCount: number;
    submittedCount: number | null;
  }
): SerialUnit[] {
  const numPart = itemId.replace(/\D/g, "");
  const base = parseInt(numPart.slice(-5) || "10000", 10);
  const locSeed = locationId.charCodeAt(locationId.length - 1) || 0;

  const expected = item.serialUnitsExpected ?? item.systemCount;
  const scanned = item.serialUnitsScanned ?? (item.submittedCount ?? expected);
  const matched = item.serialUnitsMatched ?? Math.min(expected, scanned);

  // How many units are in each bucket
  const missingCount = expected - matched;   // in system, not submitted
  const addedCount = scanned - matched;      // in submitted, not system

  // Relocated: split ~50/50 from the "added" bucket
  const relocatedCount = addedCount > 1 ? Math.max(1, Math.round(addedCount * 0.5)) : 0;
  const pureAddedCount = addedCount - relocatedCount;

  // Pool of realistic origin locations for relocated units
  const originLocations = [
    { name: "WH-A01", address: "Zone B, Loading Dock 3" },
    { name: "WH-B03", address: "Bulk Storage Aisle 3, West Wing" },
    { name: "WH-C05", address: "Outbound Staging 5, East Facility" },
    { name: "WH-D02", address: "Maintenance Shop Floor 2, North Annex" },
    { name: "MFG-01", address: "Line 1 Staging, Manufacturing Plant A" },
    { name: "AERO-02", address: "Bay 2, Aeronautics Assembly Hangar" },
    { name: "QC-01", address: "Quality Control Inspection Room 1" },
    { name: "EXT-01", address: "Vendor Consignment Yard, External Lot 1" },
  ];

  const units: SerialUnit[] = [];
  let idx = 1;

  // 1. Matched units (exist in both system and submitted)
  for (let i = 0; i < matched; i++) {
    units.push({
      index: idx++,
      serialNo: `SN-${base + locSeed * 100 - i * 2}`,
      status: "matched",
    });
  }

  // 2. Missing units (in system but not in submitted scan)
  for (let i = 0; i < missingCount; i++) {
    units.push({
      index: idx++,
      serialNo: `SN-${base + locSeed * 100 + 5000 + i * 3}`,
      status: "missing",
    });
  }

  // 3. Added units (scanned/submitted but not in system)
  for (let i = 0; i < pureAddedCount; i++) {
    units.push({
      index: idx++,
      serialNo: `SN-${base + locSeed * 100 + 9000 + i * 7}`,
      status: "added",
    });
  }

  // 4. Relocated units (found at a different location than expected)
  for (let i = 0; i < relocatedCount; i++) {
    const origin = originLocations[(base + locSeed + i) % originLocations.length];
    units.push({
      index: idx++,
      serialNo: `SN-${base + locSeed * 100 + 7000 + i * 11}`,
      status: "relocated",
      relocatedType: i % 3 === 2 ? "deactivated" : "active",
      relocatedFrom: origin.name,
    });
  }

  return units;
}

// ─── Helpers ────────────────────────────────────────────────────────────────
export function SectionCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={className}
      style={{
        background: "var(--card)",
        padding: "var(--spacing-5) var(--spacing-6)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {children}
    </div>
  );
}

// ─── Count Basis Icons (matching Figma) ─────────────────────────────────────
export function CountByItemIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M3.5 5.25C3.5 4.2835 4.2835 3.5 5.25 3.5H22.75C23.7165 3.5 24.5 4.2835 24.5 5.25V22.75C24.5 23.7165 23.7165 24.5 22.75 24.5H5.25C4.2835 24.5 3.5 23.7165 3.5 22.75V5.25Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M8.75 10.5H19.25" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M8.75 14H19.25" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M8.75 17.5H15.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function CountByLocationIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 3.5C10.134 3.5 7 6.634 7 10.5C7 15.75 14 24.5 14 24.5C14 24.5 21 15.75 21 10.5C21 6.634 17.866 3.5 14 3.5ZM14 13.125C12.5503 13.125 11.375 11.9497 11.375 10.5C11.375 9.05025 12.5503 7.875 14 7.875C15.4497 7.875 16.625 9.05025 16.625 10.5C16.625 11.9497 15.4497 13.125 14 13.125Z"
        stroke="currentColor"
        strokeWidth="1.75"
        fill="none"
      />
    </svg>
  );
}

export function CountByCategoryIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 3.5L7 10.5H21L14 3.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <circle cx="19.25" cy="19.25" r="4.375" stroke="currentColor" strokeWidth="1.75" />
      <rect x="3.5" y="14.875" width="8.75" height="8.75" rx="1" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

// ─── Checkbox Component ─────────────────────────────────────────────────────
export function Checkbox({ checked, indeterminate, onChange, size = 20 }: { checked: boolean; indeterminate?: boolean; onChange: () => void; size?: number }) {
  const isActive = checked || indeterminate;
  return (
    <div
      onClick={(e) => { e.stopPropagation(); onChange(); }}
      onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); e.stopPropagation(); onChange(); } }}
      className="flex items-center justify-center rounded transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "var(--radius-sm)",
        border: isActive ? "none" : "2px solid var(--border)",
        background: isActive ? "var(--primary)" : "var(--surface-secondary)",
        cursor: "pointer",
        flexShrink: 0,
      }}
      aria-checked={indeterminate ? "mixed" : checked}
      role="checkbox"
      tabIndex={0}
    >
      {indeterminate ? (
        <svg width={size - 6} height={size - 6} viewBox="0 0 14 14" fill="none">
          <rect x="2" y="6" width="10" height="2" rx="1" fill="var(--primary-foreground)" />
        </svg>
      ) : checked ? (
        <Check size={size - 6} color="var(--primary-foreground)" strokeWidth={2.5} />
      ) : null}
    </div>
  );
}

// ─── Time Picker Popover Content ─────────────────────────────────────────
export function TimePickerContent({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (val: string) => void;
  options: string[];
}) {
  const selectedRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({ block: "center" });
    }
  }, []);

  const formatOpt = (val: string) => {
    const [h, m] = val.split(":");
    const hour = parseInt(h, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const h12 = hour % 12 || 12;
    return `${h12}:${m} ${ampm}`;
  };

  return (
    <div
      className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-auto-hide"
      style={{ maxHeight: "180px", padding: "var(--spacing-1) 0" }}
    >
      {options.map((opt) => {
        const isSelected = value === opt;
        return (
          <button
            key={opt}
            ref={isSelected ? selectedRef : undefined}
            onClick={() => onChange(opt)}
            className="flex items-center justify-between px-3 transition-colors hover:bg-secondary/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            style={{
              height: "36px",
              cursor: "pointer",
              border: "none",
              background: isSelected ? "var(--primary-50)" : "transparent",
              fontFamily: FONT,
              fontSize: "var(--text-label)",
              fontWeight: isSelected ? "var(--font-weight-medium)" : "var(--font-weight-normal)",
              color: isSelected ? "var(--primary)" : "var(--foreground)",
              borderRadius: "var(--radius-sm)",
              margin: "0 var(--spacing-1)",
              padding: "0 var(--spacing-2)",
            }}
          >
            <span>{formatOpt(opt)}</span>
            {isSelected && <Check size={14} style={{ color: "var(--primary)" }} />}
          </button>
        );
      })}
    </div>
  );
}

// ─── Lot Status Styles ──────────────────────────────────────────────────────
export const LOT_STATUS_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  Active: { bg: "var(--status-completed-bg)", text: "var(--status-completed-text)", border: "var(--status-completed-border)" },
  Quarantine: { bg: "var(--status-cancelled-bg)", text: "var(--status-cancelled-text)", border: "var(--status-cancelled-border)" },
  Expired: { bg: "var(--status-closed-bg)", text: "var(--status-closed-text)", border: "var(--status-closed-border)" },
  Hold: { bg: "var(--status-awaiting-bg)", text: "var(--status-awaiting-text)", border: "var(--status-awaiting-border)" },
};