// ─────────────────────────────────────────────────────────────────────────────
// icons.tsx — Consolidated SVG icon registry for the entire application.
//
// Architecture:
//   1. NAV_ICON_PATHS — data table mapping icon keys → SVG path strings
//   2. NavIcon — generic stroke-based renderer (sidebar navigation)
//   3. BarcodeIcon — reusable barcode SVG (was duplicated 6× across 3 files)
//   4. CountBasisIcon — item/location/category icons for count basis cards
//   5. Checkbox — shared form checkbox with indeterminate support
//
// Usage:
//   import { NavIcon, BarcodeIcon, CountBasisIcon } from "./icons";
//   <NavIcon name="items" size={22} />
//   <BarcodeIcon width={24} height={32} fill="var(--primary)" />
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { Check } from "lucide-react";
import { searchCardIcons as searchCardSvgPaths } from "../../imports/icons";

// ═══════════════════════════════════════════════════════════════════════════
// 1. SIDEBAR NAVIGATION ICONS — data-driven path registry
// ═══════════════════════════════════════════════════════════════════════════

/** All SVG paths share: viewBox="0 0 24 24", stroke="currentColor", strokeWidth=1.6,
 *  strokeLinecap="round", strokeLinejoin="round", fill="none". */
const NAV_ICON_PATHS: Record<string, string[]> = {
  items: [
    "M12 2L2 7l10 5 10-5-10-5z",
    "M2 17l10 5 10-5",
    "M2 12l10 5 10-5",
  ],
  partners: [
    "M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0-20 0",
    "M8 12h8",
    "M12 8v8",
    "M7.5 7.5l9 9",
    "M16.5 7.5l-9 9",
  ],
  supply: [
    "M16 3h5v5",
    "M4 20L21 3",
    "M21 16v5h-5",
    "M15 15l6 6",
    "M4 4l5 5",
  ],
  production: [
    "M2 7h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z",
    "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
    "M12 12v4",
    "M2 12h20",
  ],
  sales: [
    "M8 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    "M19 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
  ],
  accounting: [
    "M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
    "M8 6h8",
    "M8 10h8",
    "M8 14h4",
  ],
  people: [
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    "M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    "M22 21v-2a4 4 0 0 0-3-3.87",
    "M16 3.13a4 4 0 0 1 0 7.75",
  ],
  company: [
    "M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
    "M9 22v-4h6v4",
    "M8 6h.01",
    "M16 6h.01",
    "M8 10h.01",
    "M16 10h.01",
    "M8 14h.01",
    "M16 14h.01",
  ],
  settings: [
    "M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
  ],
};

export type NavIconName = keyof typeof NAV_ICON_PATHS;

/** Generic stroke-based navigation icon — renders from the path registry */
export function NavIcon({ name, size = 22 }: { name: NavIconName; size?: number }) {
  const paths = NAV_ICON_PATHS[name];
  if (!paths) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. BARCODE ICON — was duplicated in select-units-modal, count-execution,
//    detail-serial-modals (6 instances). Now a single component.
// ═══════════════════════════════════════════════════════════════════════════

export function BarcodeIcon({
  width = 24,
  height = 32,
  fill = "var(--primary)",
}: {
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 9.33333 13.3333" fill="none">
      <path d={searchCardSvgPaths.p1e430ff2} fill={fill} />
      <path d={searchCardSvgPaths.p25704700} fill={fill} />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. COUNT BASIS ICONS — item / location / category (from cycle-count-data)
// ═══════════════════════════════════════════════════════════════════════════

type CountBasis = "item" | "location" | "category";

const COUNT_BASIS_PATHS: Record<CountBasis, React.ReactNode> = {
  item: (
    <>
      <path
        d="M3.5 5.25C3.5 4.2835 4.2835 3.5 5.25 3.5H22.75C23.7165 3.5 24.5 4.2835 24.5 5.25V22.75C24.5 23.7165 23.7165 24.5 22.75 24.5H5.25C4.2835 24.5 3.5 23.7165 3.5 22.75V5.25Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M8.75 10.5H19.25" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M8.75 14H19.25" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M8.75 17.5H15.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </>
  ),
  location: (
    <path
      d="M14 3.5C10.134 3.5 7 6.634 7 10.5C7 15.75 14 24.5 14 24.5C14 24.5 21 15.75 21 10.5C21 6.634 17.866 3.5 14 3.5ZM14 13.125C12.5503 13.125 11.375 11.9497 11.375 10.5C11.375 9.05025 12.5503 7.875 14 7.875C15.4497 7.875 16.625 9.05025 16.625 10.5C16.625 11.9497 15.4497 13.125 14 13.125Z"
      stroke="currentColor"
      strokeWidth="1.75"
      fill="none"
    />
  ),
  category: (
    <>
      <path d="M14 3.5L7 10.5H21L14 3.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <circle cx="19.25" cy="19.25" r="4.375" stroke="currentColor" strokeWidth="1.75" />
      <rect x="3.5" y="14.875" width="8.75" height="8.75" rx="1" stroke="currentColor" strokeWidth="1.75" />
    </>
  ),
};

export function CountBasisIcon({ basis }: { basis: CountBasis }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      {COUNT_BASIS_PATHS[basis]}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. CHECKBOX — shared form checkbox (was in cycle-count-data.tsx)
// ═══════════════════════════════════════════════════════════════════════════

export function Checkbox({
  checked,
  indeterminate,
  onChange,
  size = 20,
}: {
  checked: boolean;
  indeterminate?: boolean;
  onChange: () => void;
  size?: number;
}) {
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
