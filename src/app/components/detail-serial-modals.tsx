// ── ViewUnitsModal, SerialVerificationModal & EditCountSelectUnitsModal for Cycle Count Detail page ──
import { useState, useMemo, useEffect } from "react";
import { Search, Plus } from "lucide-react";
import {
  generateSerialUnits,
  generateSerialUnitsWithStatus,
  Checkbox,
} from "./cycle-count-data";
import { FONT } from "../../imports/shared-ui";
import {
  searchCardIcons as searchCardSvgPaths,
  unitModalIcons as unitModalSvgPaths,
} from "../../imports/icons";

// ─── Types ──────────────────────────────────────────────────────────────────
interface LineItem {
  id: string;
  code: string;
  description: string;
  type: "location" | "item";
  status: string;
  systemCount: number;
  submittedCount: number | null;
  serialized?: boolean;
  lotControlled?: boolean;
  serialUnitsExpected?: number;
  serialUnitsScanned?: number;
  serialUnitsMatched?: number;
  image?: string;
  tags?: string[];
}

interface MockLocation {
  id: string;
  name: string;
  address: string;
  image?: string;
}

// ─── Mock location data per line-item ──────────────────────────────────────
function getLocationsForItem(itemId: string): MockLocation[] {
  const base: Record<string, MockLocation[]> = {
    "LI-1": [
      { id: "WH-A01", name: "WH-A01", address: "Zone B, Loading Dock 3, Central Distribution Center", image: "https://images.unsplash.com/photo-1758789667762-56175fe4601c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2FkaW5nJTIwZG9jayUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzcyNjM5NDU1fDA&ixlib=rb-4.1.0&q=80&w=200" },
      { id: "WH-A02", name: "WH-A02", address: "Receiving Bay, Ground Floor, North Processing Facility", image: "https://images.unsplash.com/photo-1736507748808-31bb64ce6fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlJTIwc2hlbHZlc3xlbnwxfHx8fDE3NzI1MzQzNjF8MA&ixlib=rb-4.1.0&q=80&w=200" },
      { id: "WH-A03", name: "WH-A03", address: "Shelf C4, Cold Storage Unit, East Logistics Zone", image: "https://images.unsplash.com/photo-1736507748808-31bb64ce6fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlJTIwc2hlbHZlc3xlbnwxfHx8fDE3NzI1MzQzNjF8MA&ixlib=rb-4.1.0&q=80&w=200" },
      { id: "WH-A04", name: "WH-A04", address: "Shelf 5, Cold Storage Unit, East Logistics Zone" },
      { id: "WH-A05", name: "WH-A05", address: "Shelf 5, Cold Storage Unit, East Logistics Zone" },
    ],
    "LI-3": [
      { id: "WH-A01", name: "WH-A01", address: "Zone B, Loading Dock 3, Central Distribution Center", image: "https://images.unsplash.com/photo-1758789667762-56175fe4601c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2FkaW5nJTIwZG9jayUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzcyNjM5NDU1fDA&ixlib=rb-4.1.0&q=80&w=200" },
      { id: "WH-B03", name: "WH-B03", address: "Bulk Storage Aisle 3, West Wing Warehouse", image: "https://images.unsplash.com/photo-1736507748808-31bb64ce6fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlJTIwc2hlbHZlc3xlbnwxfHx8fDE3NzI1MzQzNjF8MA&ixlib=rb-4.1.0&q=80&w=200" },
    ],
    "LI-4": [
      { id: "WH-A02", name: "WH-A02", address: "Receiving Bay, Ground Floor, North Processing Facility", image: "https://images.unsplash.com/photo-1736507748808-31bb64ce6fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlJTIwc2hlbHZlc3xlbnwxfHx8fDE3NzI1MzQzNjF8MA&ixlib=rb-4.1.0&q=80&w=200" },
      { id: "WH-B03", name: "WH-B03", address: "Bulk Storage Aisle 3, West Wing Warehouse" },
    ],
  };
  return base[itemId] || [
    { id: "WH-A01", name: "WH-A01", address: "Zone B, Loading Dock 3, Central Distribution Center", image: "https://images.unsplash.com/photo-1758789667762-56175fe4601c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2FkaW5nJTIwZG9jayUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzcyNjM5NDU1fDA&ixlib=rb-4.1.0&q=80&w=200" },
    { id: "WH-B03", name: "WH-B03", address: "Bulk Storage Aisle 3, West Wing Warehouse", image: "https://images.unsplash.com/photo-1736507748808-31bb64ce6fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlJTIwc2hlbHZlc3xlbnwxfHx8fDE3NzI1MzQzNjF8MA&ixlib=rb-4.1.0&q=80&w=200" },
  ];
}

// ─── LocationCardImage – renders the 80×80 thumbnail inside a bordered box ─
function LocationCardImage({
  image,
  size = 80,
}: {
  image?: string;
  size?: number;
}) {
  return (
    <div
      className="shrink-0 overflow-hidden"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "var(--radius-sm)",
        border: "0.8px solid var(--border)",
        background: "var(--background)",
        position: "relative",
      }}
    >
      {image ? (
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          className="flex items-center justify-center"
          style={{ width: "100%", height: "100%" }}
        >
          <svg
            width={size < 60 ? 16 : 24}
            height={size < 60 ? 22 : 32}
            viewBox="0 0 9.33333 13.3333"
            fill="none"
          >
            <path d={searchCardSvgPaths.p1e430ff2} fill="var(--primary)" />
            <path d={searchCardSvgPaths.p25704700} fill="var(--primary)" />
          </svg>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ViewUnitsModal – read-only view of serial units for a line item
// Shows mismatch indicators when submitted count matches system count but
// different serial numbers were scanned (matched/missing/added).
// ═══════════════════════════════════════════════════════════════════════════════
type ViewUnitsFilter = "all" | "matched" | "missing" | "added" | "relocated";

export function ViewUnitsModal({
  item,
  onClose,
}: {
  item: LineItem;
  onClose: () => void;
}) {
  const locations = getLocationsForItem(item.id);
  const [focusedLocId, setFocusedLocId] = useState(locations[0]?.id || "");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<ViewUnitsFilter>("all");

  const focusedLoc =
    locations.find((l) => l.id === focusedLocId) || locations[0];

  const allUnits = useMemo(
    () =>
      generateSerialUnitsWithStatus(item.id, focusedLoc?.id || "", {
        serialUnitsExpected: item.serialUnitsExpected,
        serialUnitsScanned: item.serialUnitsScanned,
        serialUnitsMatched: item.serialUnitsMatched,
        systemCount: item.systemCount,
        submittedCount: item.submittedCount,
      }),
    [item.id, focusedLoc?.id, item.serialUnitsExpected, item.serialUnitsScanned, item.serialUnitsMatched, item.systemCount, item.submittedCount]
  );

  const matchedCount = allUnits.filter((u) => u.status === "matched").length;
  const missingCount = allUnits.filter((u) => u.status === "missing").length;
  const addedCount = allUnits.filter((u) => u.status === "added").length;
  const relocatedCount = allUnits.filter((u) => u.status === "relocated").length;
  const hasDiscrepancies = missingCount > 0 || addedCount > 0 || relocatedCount > 0;

  const tabFilteredUnits = useMemo(() => {
    if (activeFilter === "all") return allUnits;
    return allUnits.filter((u) => u.status === activeFilter);
  }, [allUnits, activeFilter]);

  const filteredUnits = useMemo(() => {
    if (!searchQuery.trim()) return tabFilteredUnits;
    const q = searchQuery.toLowerCase();
    return tabFilteredUnits.filter(
      (u) =>
        u.serialNo.toLowerCase().includes(q) ||
        String(u.index).padStart(3, "0").includes(q)
    );
  }, [tabFilteredUnits, searchQuery]);

  const statusConfig = {
    matched: { bg: "var(--status-completed-bg)", text: "var(--status-completed-text)", border: "var(--status-completed-border)", label: "Matched" },
    missing: { bg: "var(--status-cancelled-bg)", text: "var(--status-cancelled-text)", border: "var(--status-cancelled-border)", label: "Missing" },
    added: { bg: "var(--status-in-progress-bg)", text: "var(--status-in-progress-text)", border: "var(--status-in-progress-border)", label: "Newly Added" },
    relocated: { bg: "var(--status-awaiting-bg)", text: "var(--status-awaiting-text)", border: "var(--status-awaiting-border)", label: "Relocated" },
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "var(--overlay-modal)" }}
      onClick={onClose}
    >
      <div
        className="flex flex-col"
        style={{
          width: "880px",
          maxWidth: "95vw",
          height: "80vh",
          maxHeight: "80vh",
          background: "var(--background)",
          boxShadow: "var(--elevation-modal)",
          overflow: "hidden",
          borderRadius: "var(--radius-lg)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div
          className="flex items-center shrink-0"
          style={{
            padding: "var(--spacing-3) var(--spacing-4)",
            gap: "var(--spacing-3)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <button
            onClick={onClose}
            className="flex items-center justify-center shrink-0"
            style={{ width: "24px", height: "24px", background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path clipRule="evenodd" d={unitModalSvgPaths.p9096200} fill="var(--foreground)" fillRule="evenodd" opacity="0.5" />
            </svg>
          </button>
          <span style={{ fontSize: "var(--text-h5)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", letterSpacing: "var(--tracking-tight)", fontFamily: FONT }}>
            View Serial Units — {item.code}
          </span>
        </div>

        {/* ── Two-Panel Body ── */}
        <div className="flex flex-1" style={{ overflow: "hidden" }}>
          {/* ── Left Panel: Locations ── */}
          <div className="flex flex-col shrink-0 scrollbar-thin scrollbar-auto-hide" style={{ width: "340px", borderRight: "1px solid var(--border)", padding: "var(--spacing-4)", gap: "var(--spacing-3)", overflowY: "auto" }}>
            {locations.map((loc) => {
              const isFocused = loc.id === focusedLoc.id;
              return (
                <div key={loc.id} className="relative">
                  <button
                    onClick={() => { setFocusedLocId(loc.id); setSearchQuery(""); setActiveFilter("all"); }}
                    className="relative w-full text-left"
                    style={{ height: "110px", borderRadius: "var(--radius-md)", background: isFocused ? "var(--primary-50)" : "var(--surface-secondary)", border: "none", cursor: "pointer", padding: "var(--spacing-3)", boxShadow: isFocused ? "var(--elevation-input-focus)" : "none", overflow: "hidden" }}
                  >
                    {!isFocused && <div className="absolute inset-0 pointer-events-none" style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-md)" }} />}
                    {isFocused && <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "var(--elevation-input-ring)", borderRadius: "var(--radius-md)" }} />}
                    <div className="flex items-center" style={{ gap: "var(--spacing-4)", width: "100%", overflow: "hidden" }}>
                      <LocationCardImage image={loc.image} size={80} />
                      <div className="flex flex-col" style={{ gap: "var(--spacing-1)", flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: "var(--text-h6)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: FONT }}>{loc.name}</p>
                        <p style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-normal)", color: "var(--text-secondary)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", fontFamily: FONT }}>{loc.address}</p>
                      </div>
                    </div>
                  </button>
                  {isFocused && (
                    <div className="absolute" style={{ right: "-14px", top: "50%", transform: "translateY(-50%)", width: "27px", height: "27px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                      <div style={{ width: "19px", height: "19px", background: "var(--primary-50)", borderRadius: "2px", transform: "rotate(-45deg)" }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Right Panel: Units Grid ── */}
          <div className="flex flex-col flex-1" style={{ minWidth: 0, overflow: "hidden" }}>
            <div className="flex flex-col flex-1 overflow-y-auto scrollbar-thin scrollbar-auto-hide" style={{ padding: "var(--spacing-4)", gap: "var(--spacing-4)" }}>
              {/* Location header card */}
              <div style={{ background: "var(--background)", boxShadow: "var(--elevation-popover)", padding: "var(--spacing-3)", borderRadius: "var(--radius-sm)" }}>
                <div className="flex items-center justify-between" style={{ gap: "var(--spacing-2)" }}>
                  <div className="flex items-center" style={{ gap: "var(--spacing-2)", minWidth: 0 }}>
                    <LocationCardImage image={focusedLoc.image} size={42} />
                    <div className="flex flex-col" style={{ gap: "var(--spacing-1)", minWidth: 0 }}>
                      <span style={{ fontSize: "var(--text-h5)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", fontFamily: FONT }}>{focusedLoc.name}</span>
                      <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-normal)", color: "var(--foreground)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: FONT }}>{focusedLoc.address}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center shrink-0" style={{ padding: "var(--spacing-1) var(--spacing-1-5)", borderRadius: "var(--radius-sm)", background: "var(--secondary)", fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", whiteSpace: "nowrap", fontFamily: FONT }}>{allUnits.length} EA</span>
                </div>
              </div>

              {/* Discrepancy summary banner */}
              {hasDiscrepancies && (
                <div className="flex items-center" style={{ padding: "var(--spacing-2-5) var(--spacing-3)", borderRadius: "var(--radius-sm)", background: "var(--status-awaiting-bg)", border: "1px solid var(--status-awaiting-border)", gap: "var(--spacing-2)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="var(--status-awaiting-text)" />
                  </svg>
                  <span style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-medium)", color: "var(--status-awaiting-text)", fontFamily: FONT, lineHeight: "var(--leading-relaxed)" }}>
                    Serial mismatch detected — <strong style={{ fontWeight: "var(--font-weight-semibold)" }}>{matchedCount}</strong> matched
                    {missingCount > 0 && <>, <strong style={{ fontWeight: "var(--font-weight-semibold)" }}>{missingCount}</strong> missing</>}
                    {addedCount > 0 && <>, <strong style={{ fontWeight: "var(--font-weight-semibold)" }}>{addedCount}</strong> newly added</>}
                    {relocatedCount > 0 && <>, <strong style={{ fontWeight: "var(--font-weight-semibold)" }}>{relocatedCount}</strong> relocated</>}
                  </span>
                </div>
              )}

              {/* Filter tabs */}
              {hasDiscrepancies && (
                <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
                  {([
                    { key: "all" as ViewUnitsFilter, label: "All", count: allUnits.length },
                    { key: "matched" as ViewUnitsFilter, label: "Matched", count: matchedCount },
                    { key: "missing" as ViewUnitsFilter, label: "Missing", count: missingCount },
                    { key: "added" as ViewUnitsFilter, label: "Newly Added", count: addedCount },
                    { key: "relocated" as ViewUnitsFilter, label: "Relocated", count: relocatedCount },
                  ] as const).filter((t) => t.count > 0).map((tab) => {
                    const isActive = activeFilter === tab.key;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => { setActiveFilter(tab.key); setSearchQuery(""); }}
                        className="inline-flex items-center shrink-0"
                        style={{ height: "28px", padding: "var(--spacing-1) var(--spacing-2-5)", borderRadius: "var(--radius-full)", background: isActive ? "var(--primary-50)" : "var(--background)", border: isActive ? "1px solid var(--primary)" : "1px solid var(--border)", cursor: "pointer", gap: "var(--spacing-1-5)", fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-medium)", color: isActive ? "var(--primary)" : "var(--text-secondary)", fontFamily: FONT }}
                      >
                        {tab.label}
                        <span className="inline-flex items-center justify-center" style={{ height: "16px", minWidth: "16px", padding: "0 var(--spacing-1)", borderRadius: "var(--radius-full)", background: isActive ? "var(--primary)" : "var(--surface-secondary)", fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-semibold)", color: isActive ? "var(--primary-foreground)" : "var(--text-tertiary)", fontFamily: FONT }}>
                          {tab.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Search */}
              <div style={{ borderRadius: "var(--radius-sm)", background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--elevation-xs)" }}>
                <div className="flex items-center" style={{ padding: "var(--spacing-2-5) var(--spacing-3)", gap: "var(--spacing-2)" }}>
                  <Search size={16} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search serial number" style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-medium)", color: "var(--foreground)", background: "transparent", border: "none", outline: "none", padding: 0, width: "100%", fontFamily: FONT }} />
                </div>
              </div>

              {/* Unit grid */}
              <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-2)" }}>
                {filteredUnits.map((unit) => {
                  const st = unit.status && unit.status !== "matched" ? statusConfig[unit.status] : null;
                  const showLabel = hasDiscrepancies && unit.status && unit.status !== "matched";
                  const isRelocated = unit.status === "relocated";
                  return (
                    <div
                      key={unit.serialNo}
                      className="flex flex-col"
                      style={{ gap: "0", padding: "var(--spacing-1-5) var(--spacing-2)", borderRadius: "var(--radius-sm)", background: st ? st.bg : "var(--surface-secondary)", border: st ? `1px solid ${st.border}` : "1px solid transparent" }}
                    >
                      <div className="flex items-center justify-between" style={{ gap: "var(--spacing-2)" }}>
                        <div className="flex items-center" style={{ gap: "var(--spacing-1-5)", minWidth: 0 }}>
                          {hasDiscrepancies && (
                            <div style={{ width: "6px", height: "6px", borderRadius: "var(--radius-full)", background: unit.status === "matched" ? "var(--status-completed-text)" : unit.status === "missing" ? "var(--status-cancelled-text)" : unit.status === "relocated" ? "var(--status-awaiting-text)" : "var(--status-in-progress-text)", flexShrink: 0 }} />
                          )}
                          <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-normal)", color: "var(--text-tertiary)", width: "30px", fontFamily: "var(--font-family-mono)" }}>{String(unit.index).padStart(3, "0")}</span>
                          <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-normal)", color: st ? st.text : "var(--text-secondary)", fontFamily: "var(--font-family-mono)" }}>{unit.serialNo}</span>
                        </div>
                        {showLabel && st && (
                          <span className="flex items-center" style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-semibold)", color: st.text, fontFamily: FONT, whiteSpace: "nowrap", flexShrink: 0, gap: "var(--spacing-1)" }}>
                            {st.label}
                            {isRelocated && unit.relocatedType && (
                              <span className="chip chip-xs" style={{ fontSize: "var(--text-micro)", fontWeight: "var(--font-weight-medium)", color: unit.relocatedType === "active" ? "var(--status-completed-text)" : "var(--text-tertiary)", background: unit.relocatedType === "active" ? "var(--status-completed-bg)" : "var(--surface-secondary)", border: `1px solid ${unit.relocatedType === "active" ? "var(--status-completed-border)" : "var(--border)"}`, padding: "0 var(--spacing-1)", borderRadius: "var(--radius-sm)", lineHeight: "16px", fontFamily: FONT }}>
                                {unit.relocatedType === "active" ? "Active" : "Deactivated"}
                              </span>
                            )}
                          </span>
                        )}
                      </div>
                      {isRelocated && unit.relocatedFrom && (
                        <div className="flex items-center" style={{ marginTop: "var(--spacing-1)", paddingLeft: hasDiscrepancies ? "calc(6px + var(--spacing-1-5))" : "0", gap: "var(--spacing-1)" }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" fill="var(--text-tertiary)" />
                          </svg>
                          <span style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-normal)", color: "var(--text-tertiary)", fontFamily: FONT }}>
                            From <span style={{ fontWeight: "var(--font-weight-medium)", color: "var(--text-secondary)" }}>{unit.relocatedFrom}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {filteredUnits.length === 0 && (
                <div className="flex items-center justify-center" style={{ padding: "var(--spacing-6)", color: "var(--text-tertiary)", fontSize: "var(--text-body-sm)", fontFamily: FONT }}>
                  No serial units found
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="flex items-center justify-between shrink-0" style={{ padding: "var(--spacing-3) var(--spacing-4)", borderTop: "1px solid var(--border)" }}>
          {hasDiscrepancies ? (
            <div className="flex items-center" style={{ gap: "var(--spacing-4)" }}>
              {[
                { color: "var(--status-completed-text)", label: "Matched" },
                { color: "var(--status-cancelled-text)", label: "Missing from scan" },
                { color: "var(--status-in-progress-text)", label: "Newly added" },
                { color: "var(--status-awaiting-text)", label: "Relocated" },
              ].map((leg) => (
                <div key={leg.label} className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "var(--radius-full)", background: leg.color, flexShrink: 0 }} />
                  <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", fontFamily: FONT }}>{leg.label}</span>
                </div>
              ))}
            </div>
          ) : <div />}
          <button onClick={onClose} className="inline-flex items-center justify-center" style={{ padding: "var(--spacing-2) var(--spacing-4)", borderRadius: "var(--radius-sm)", background: "var(--background)", border: "1px solid var(--border)", cursor: "pointer", fontSize: "var(--text-label)", fontWeight: "var(--font-weight-medium)", color: "var(--foreground)", fontFamily: FONT }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SerialVerificationModal – select serial units for Count Entry
// Matches the two-panel layout from the Figma LocationLineItemSerialVerification
// Left panel: location cards with images, address, "Count all" toggle
// Right panel: header card, tabs, search, "Select All" checkbox, unit grid
// ═══════════════════════════════════════════════════════════════════════════════
type RightPanelTab = "units_to_count" | "units_in_system";

export function SerialVerificationModal({
  item,
  onClose,
  onConfirm,
}: {
  item: LineItem;
  onClose: () => void;
  onConfirm: (selectedCount: number) => void;
}) {
  const locations = getLocationsForItem(item.id);
  const [focusedLocId, setFocusedLocId] = useState(locations[0]?.id || "");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUnits, setSelectedUnits] = useState<
    Record<string, Set<string>>
  >({});
  const [countAllPerLoc, setCountAllPerLoc] = useState<
    Record<string, boolean>
  >({});
  const [activeTab, setActiveTab] = useState<RightPanelTab>("units_to_count");

  const focusedLoc =
    locations.find((l) => l.id === focusedLocId) || locations[0];
  const unitCount = 16;
  const allUnits = useMemo(
    () => generateSerialUnits(item.id, focusedLoc?.id || "", unitCount),
    [item.id, focusedLoc?.id, unitCount]
  );
  // Generate a larger "system" set for the Units in System tab
  const systemUnits = useMemo(
    () => generateSerialUnitsWithStatus(item.id, focusedLoc?.id || "", {
      serialUnitsExpected: 200,
      serialUnitsScanned: 200,
      serialUnitsMatched: 200,
      systemCount: 200,
      submittedCount: 200,
    }),
    [item.id, focusedLoc?.id]
  );

  const locSelectedSet = selectedUnits[focusedLoc.id] || new Set<string>();

  const displayUnits = activeTab === "units_to_count" ? allUnits : systemUnits;

  const filteredUnits = useMemo(() => {
    if (!searchQuery.trim()) return displayUnits;
    const q = searchQuery.toLowerCase();
    return displayUnits.filter(
      (u) =>
        u.serialNo.toLowerCase().includes(q) ||
        String(u.index).padStart(3, "0").includes(q)
    );
  }, [displayUnits, searchQuery]);

  const allSelected =
    filteredUnits.length > 0 &&
    filteredUnits.every((u) => locSelectedSet.has(u.serialNo));

  const toggleUnit = (serialNo: string) => {
    setSelectedUnits((prev) => {
      const current = new Set(prev[focusedLoc.id] || []);
      if (current.has(serialNo)) {
        current.delete(serialNo);
      } else {
        current.add(serialNo);
      }
      return { ...prev, [focusedLoc.id]: current };
    });
  };

  const toggleAll = () => {
    setSelectedUnits((prev) => {
      const current = new Set(prev[focusedLoc.id] || []);
      if (allSelected) {
        filteredUnits.forEach((u) => current.delete(u.serialNo));
      } else {
        filteredUnits.forEach((u) => current.add(u.serialNo));
      }
      return { ...prev, [focusedLoc.id]: current };
    });
  };

  const toggleCountAllInLoc = (locId: string) => {
    const wasOn = !!countAllPerLoc[locId];
    setCountAllPerLoc((prev) => ({ ...prev, [locId]: !wasOn }));
    const units = generateSerialUnits(item.id, locId, unitCount);
    setSelectedUnits((prev) => {
      const current = new Set(prev[locId] || []);
      if (!wasOn) {
        units.forEach((u) => current.add(u.serialNo));
      } else {
        current.clear();
      }
      return { ...prev, [locId]: current };
    });
  };

  const getTotalSelected = () => {
    let total = 0;
    Object.values(selectedUnits).forEach((s) => {
      total += s.size;
    });
    return total;
  };

  const totalSelected = getTotalSelected();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "var(--overlay-modal)" }}
      onClick={onClose}
    >
      <div
        className="flex flex-col"
        style={{
          width: "920px",
          maxWidth: "95vw",
          height: "80vh",
          maxHeight: "80vh",
          background: "var(--background)",
          boxShadow: "var(--elevation-modal)",
          overflow: "hidden",
          borderRadius: "var(--radius-lg)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div
          className="flex items-center shrink-0"
          style={{
            padding: "var(--spacing-3) var(--spacing-4)",
            gap: "var(--spacing-3)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <button
            onClick={onClose}
            className="flex items-center justify-center shrink-0"
            style={{
              width: "24px",
              height: "24px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                clipRule="evenodd"
                d={unitModalSvgPaths.p9096200}
                fill="var(--foreground)"
                fillRule="evenodd"
                opacity="0.5"
              />
            </svg>
          </button>
          <span
            style={{
              fontSize: "var(--text-h5)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            Confirm Serial Numbers for {item.code}
          </span>
        </div>

        {/* ── Two-Panel Body ── */}
        <div className="flex flex-1" style={{ overflow: "hidden" }}>
          {/* ── Left Panel: Location Cards ── */}
          <div
            className="flex flex-col shrink-0 scrollbar-thin scrollbar-auto-hide"
            style={{
              width: "340px",
              borderRight: "1px solid var(--border)",
              padding: "var(--spacing-4)",
              gap: "var(--spacing-4)",
              overflowY: "auto",
            }}
          >
            {locations.map((loc) => {
              const isFocused = loc.id === focusedLoc.id;
              const locUnitCount = (
                selectedUnits[loc.id] || new Set()
              ).size;
              const isCountAll = !!countAllPerLoc[loc.id];

              return (
                <div
                  key={loc.id}
                  className="flex flex-col"
                  style={{ gap: "0" }}
                >
                  <div className="relative">
                    <button
                      onClick={() => {
                        setFocusedLocId(loc.id);
                        setSearchQuery("");
                      }}
                      className="relative w-full text-left"
                      style={{
                        height: "110px",
                        borderRadius: "var(--radius-md)",
                        background: isFocused
                          ? "var(--primary-50)"
                          : "var(--surface-secondary)",
                        border: "none",
                        cursor: "pointer",
                        padding: "var(--spacing-3)",
                        boxShadow: isFocused
                          ? "var(--elevation-input-focus)"
                          : "none",
                        overflow: "hidden",
                      }}
                    >
                      {!isFocused && (
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            border: "1px solid var(--border)",
                            borderRadius: "var(--radius-md)",
                          }}
                        />
                      )}
                      {isFocused && (
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            boxShadow: "var(--elevation-input-ring)",
                            borderRadius: "var(--radius-md)",
                          }}
                        />
                      )}
                      <div
                        className="flex items-center"
                        style={{
                          gap: "var(--spacing-4)",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <LocationCardImage image={loc.image} size={80} />
                        <div
                          className="flex flex-col"
                          style={{
                            gap: "var(--spacing-1)",
                            flex: 1,
                            minWidth: 0,
                          }}
                        >
                          <p
                            style={{
                              fontSize: "var(--text-h6)",
                              fontWeight: "var(--font-weight-semibold)",
                              color: "var(--foreground)",
                              margin: 0,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {loc.name}
                          </p>
                          <p
                            style={{
                              fontSize: "var(--text-label)",
                              fontWeight: "var(--font-weight-normal)",
                              color: "var(--text-secondary)",
                              margin: 0,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {loc.address}
                          </p>
                          {locUnitCount > 0 && (
                            <span
                              style={{
                                fontSize: "var(--text-caption)",
                                fontWeight: "var(--font-weight-medium)",
                                color: "var(--primary)",
                              }}
                            >
                              {locUnitCount} unit
                              {locUnitCount !== 1 ? "s" : ""} selected
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                    {isFocused && (
                      <div
                        className="absolute"
                        style={{
                          right: "-14px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: "27px",
                          height: "27px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: 2,
                        }}
                      >
                        <div
                          style={{
                            width: "19px",
                            height: "19px",
                            background: "var(--primary-50)",
                            borderRadius: "2px",
                            transform: "rotate(-45deg)",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  {/* Count all units in this Location toggle */}
                  <div
                    className="flex items-center"
                    style={{
                      padding: "var(--spacing-2-5) var(--spacing-3)",
                      gap: "var(--spacing-2-5)",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleCountAllInLoc(loc.id)}
                  >
                    <Checkbox
                      checked={isCountAll}
                      onChange={() => toggleCountAllInLoc(loc.id)}
                      size={16}
                    />
                    <span
                      style={{
                        fontSize: "var(--text-caption)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--foreground)",
                      }}
                    >
                      Count all units in this Lot
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Right Panel: Detail View ── */}
          <div
            className="flex flex-col flex-1"
            style={{ minWidth: 0, overflow: "hidden" }}
          >
            <div
              className="flex flex-col flex-1 overflow-y-auto scrollbar-thin scrollbar-auto-hide"
              style={{
                padding: "var(--spacing-4)",
                gap: "var(--spacing-5)",
              }}
            >
              {/* Location header card */}
              <div
                style={{
                  background: "var(--background)",
                  boxShadow: "var(--elevation-popover)",
                  padding: "var(--spacing-3)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <div
                  className="flex flex-col"
                  style={{ gap: "var(--spacing-5)" }}
                >
                  <div
                    className="flex items-center justify-between"
                    style={{ gap: "var(--spacing-2)" }}
                  >
                    <div
                      className="flex items-center"
                      style={{ gap: "var(--spacing-2)", minWidth: 0 }}
                    >
                      <LocationCardImage
                        image={focusedLoc.image}
                        size={42}
                      />
                      <div
                        className="flex flex-col"
                        style={{
                          gap: "var(--spacing-1)",
                          minWidth: 0,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "var(--text-h5)",
                            fontWeight: "var(--font-weight-semibold)",
                            color: "var(--foreground)",
                          }}
                        >
                          {focusedLoc.name}
                        </span>
                        <span
                          style={{
                            fontSize: "var(--text-label)",
                            fontWeight: "var(--font-weight-normal)",
                            color: "var(--foreground)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {focusedLoc.address}
                        </span>
                      </div>
                    </div>
                    <span
                      className="inline-flex items-center shrink-0"
                      style={{
                        padding: "var(--spacing-1) var(--spacing-1-5)",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--secondary)",
                        fontSize: "var(--text-label)",
                        fontWeight: "var(--font-weight-semibold)",
                        color: "var(--foreground)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {locSelectedSet.size} EA to Count
                    </span>
                  </div>

                  {/* Search + Add New Unit row */}
                  <div
                    className="flex items-center justify-between"
                    style={{ gap: "var(--spacing-3)" }}
                  >
                    <div
                      style={{
                        borderRadius: "var(--radius-sm)",
                        background: "var(--background)",
                        border: "1px solid var(--border)",
                        width: "200px",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        className="flex items-center"
                        style={{
                          padding: "var(--spacing-2-5) var(--spacing-3)",
                          gap: "var(--spacing-2)",
                        }}
                      >
                        <Search
                          size={16}
                          style={{
                            color: "var(--text-tertiary)",
                            flexShrink: 0,
                          }}
                        />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) =>
                            setSearchQuery(e.target.value)
                          }
                          placeholder="Search serial number"
                          style={{
                            fontSize: "var(--text-label)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--foreground)",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            padding: 0,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <button
                      className="inline-flex items-center justify-center shrink-0"
                      style={{
                        padding:
                          "var(--spacing-2) var(--spacing-3)",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--background)",
                        border: "1px solid var(--border)",
                        cursor: "pointer",
                        gap: "var(--spacing-1-5)",
                        fontSize: "var(--text-label)",
                        fontWeight: "var(--font-weight-semibold)",
                        color: "var(--foreground)",
                        boxShadow: "var(--elevation-xs)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Plus size={16} style={{ color: "var(--text-secondary)" }} />
                      Add New Unit
                    </button>
                  </div>
                </div>
              </div>

              {/* Tab pills: Units to Count / Units in System */}
              <div
                className="flex items-center"
                style={{ gap: "var(--spacing-2)" }}
              >
                <button
                  onClick={() => {
                    setActiveTab("units_to_count");
                    setSearchQuery("");
                  }}
                  className="inline-flex items-center shrink-0"
                  style={{
                    height: "30px",
                    padding:
                      "var(--spacing-1-5) var(--spacing-3) var(--spacing-1-5) var(--spacing-3)",
                    borderRadius: "var(--radius-full)",
                    background: "var(--background)",
                    border:
                      activeTab === "units_to_count"
                        ? "1px solid var(--primary-600)"
                        : "1px solid var(--border)",
                    cursor: "pointer",
                    gap: "var(--spacing-1-5)",
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-normal)",
                    color:
                      activeTab === "units_to_count"
                        ? "var(--primary)"
                        : "var(--text-secondary)",
                    boxShadow: "var(--elevation-xs)",
                  }}
                >
                  Units to Count
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      height: "18px",
                      minWidth: "18px",
                      padding: "0 var(--spacing-2)",
                      borderRadius: "var(--radius-full)",
                      background:
                        activeTab === "units_to_count"
                          ? "var(--primary-50)"
                          : "var(--muted-foreground)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-weight-semibold)",
                      color:
                        activeTab === "units_to_count"
                          ? "var(--primary)"
                          : "var(--text-secondary)",
                    }}
                  >
                    {allUnits.length}
                  </span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab("units_in_system");
                    setSearchQuery("");
                  }}
                  className="inline-flex items-center shrink-0"
                  style={{
                    height: "30px",
                    padding:
                      "var(--spacing-1-5) var(--spacing-3) var(--spacing-1-5) var(--spacing-3)",
                    borderRadius: "var(--radius-full)",
                    background: "var(--background)",
                    border:
                      activeTab === "units_in_system"
                        ? "1px solid var(--primary-600)"
                        : "1px solid var(--border)",
                    cursor: "pointer",
                    gap: "var(--spacing-1-5)",
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-normal)",
                    color:
                      activeTab === "units_in_system"
                        ? "var(--primary)"
                        : "var(--text-secondary)",
                    boxShadow: "var(--elevation-xs)",
                  }}
                >
                  Units in System
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      height: "18px",
                      minWidth: "18px",
                      padding: "0 var(--spacing-2)",
                      borderRadius: "var(--radius-full)",
                      background:
                        activeTab === "units_in_system"
                          ? "var(--primary-50)"
                          : "var(--muted-foreground)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-weight-semibold)",
                      color:
                        activeTab === "units_in_system"
                          ? "var(--primary)"
                          : "var(--text-secondary)",
                    }}
                  >
                    {systemUnits.length}
                  </span>
                </button>
              </div>

              {/* Select all checkbox */}
              <div
                className="flex items-center"
                style={{
                  padding: "var(--spacing-2) var(--spacing-2)",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--surface-secondary)",
                  border: "1px solid var(--border)",
                  gap: "var(--spacing-2-5)",
                  cursor: "pointer",
                }}
                onClick={toggleAll}
              >
                <Checkbox
                  checked={allSelected}
                  onChange={toggleAll}
                  size={16}
                />
                <span
                  style={{
                    fontSize: "var(--text-body-sm)",
                    fontWeight: "var(--font-weight-normal)",
                    color: "var(--foreground)",
                  }}
                >
                  Select All {filteredUnits.length} Serial Units
                </span>
              </div>

              {/* Unit grid — 2 columns */}
              <div
                className="grid"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                  gap: "var(--spacing-2)",
                }}
              >
                {filteredUnits.map((unit) => {
                  const isChecked = locSelectedSet.has(unit.serialNo);
                  return (
                    <div
                      key={unit.serialNo}
                      className="flex items-center"
                      style={{
                        gap: "var(--spacing-2)",
                        padding:
                          "var(--spacing-1-5) var(--spacing-2)",
                        borderRadius: "var(--spacing-1)",
                        background: "var(--surface-secondary)",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleUnit(unit.serialNo)}
                    >
                      <Checkbox
                        checked={isChecked}
                        onChange={() => toggleUnit(unit.serialNo)}
                        size={16}
                      />
                      <div
                        className="flex items-center"
                        style={{ gap: "var(--spacing-1)" }}
                      >
                        <span
                          style={{
                            fontSize: "var(--text-label)",
                            fontWeight: "var(--font-weight-normal)",
                            color: "var(--text-tertiary)",
                            width: "30px",
                          }}
                        >
                          {String(unit.index).padStart(3, "0")}
                        </span>
                        <span
                          style={{
                            fontSize: "var(--text-label)",
                            fontWeight: "var(--font-weight-normal)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {unit.serialNo}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div
          className="flex items-center justify-between shrink-0"
          style={{
            padding: "var(--spacing-3) var(--spacing-4)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <span
            style={{
              fontSize: "var(--text-label)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--foreground)",
            }}
          >
            <span style={{ fontWeight: "var(--font-weight-semibold)" }}>
              {totalSelected}
            </span>{" "}
            Unit{totalSelected !== 1 ? "(s)" : ""} Selected
          </span>
          <div
            className="flex items-center"
            style={{ gap: "var(--spacing-3)" }}
          >
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center"
              style={{
                padding: "var(--spacing-2) var(--spacing-4)",
                borderRadius: "var(--radius-sm)",
                background: "var(--background)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--foreground)",
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => onConfirm(totalSelected)}
              className="inline-flex items-center justify-center"
              style={{
                padding: "var(--spacing-2) var(--spacing-4)",
                borderRadius: "var(--radius-sm)",
                background: "var(--primary)",
                border: "none",
                cursor: "pointer",
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--primary-foreground)",
              }}
            >
              Select Units
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EditCountSelectUnitsModal — confirm button uses EDIT_CONFIRM_LABEL – Edit Count for serialized/lot-serialized items
// Two-panel layout: locations on the left, selectable serial units on the right.
// ALL units are pre-selected by default so users can deselect what they don't need.
// ═══════════════════════════════════════════════════════════════════════════════

export function EditCountSelectUnitsModal({
  item,
  onClose,
  onConfirm,
}: {
  item: LineItem;
  onClose: () => void;
  onConfirm: (selectedCount: number) => void;
}) {
  const locations = getLocationsForItem(item.id);
  const [focusedLocId, setFocusedLocId] = useState(locations[0]?.id || "");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUnits, setSelectedUnits] = useState<
    Record<string, Set<string>>
  >({});
  const [countAllPerLoc, setCountAllPerLoc] = useState<
    Record<string, boolean>
  >({});
  const [activeTab, setActiveTab] = useState<RightPanelTab>("units_to_count");
  const [initialized, setInitialized] = useState(false);
  const EDIT_CONFIRM_LABEL = "Update Count";

  const focusedLoc =
    locations.find((l) => l.id === focusedLocId) || locations[0];
  const unitCount = 16;
  const allUnits = useMemo(
    () => generateSerialUnits(item.id, focusedLoc?.id || "", unitCount),
    [item.id, focusedLoc?.id, unitCount]
  );
  // Generate a larger "system" set for the Units in System tab
  const systemUnits = useMemo(
    () => generateSerialUnitsWithStatus(item.id, focusedLoc?.id || "", {
      serialUnitsExpected: 200,
      serialUnitsScanned: 200,
      serialUnitsMatched: 200,
      systemCount: 200,
      submittedCount: 200,
    }),
    [item.id, focusedLoc?.id]
  );

  const locSelectedSet = selectedUnits[focusedLoc.id] || new Set<string>();

  // ── Pre-select ALL units in ALL locations on mount ──
  useEffect(() => {
    if (initialized) return;
    const initial: Record<string, Set<string>> = {};
    const allPerLoc: Record<string, boolean> = {};
    for (const loc of locations) {
      const units = generateSerialUnits(item.id, loc.id, unitCount);
      initial[loc.id] = new Set(units.map((u) => u.serialNo));
      allPerLoc[loc.id] = true;
    }
    setSelectedUnits(initial);
    setCountAllPerLoc(allPerLoc);
    setInitialized(true);
  }, [initialized, locations, item.id, unitCount]);

  const displayUnits = activeTab === "units_to_count" ? allUnits : systemUnits;

  const filteredUnits = useMemo(() => {
    if (!searchQuery.trim()) return displayUnits;
    const q = searchQuery.toLowerCase();
    return displayUnits.filter(
      (u) =>
        u.serialNo.toLowerCase().includes(q) ||
        String(u.index).padStart(3, "0").includes(q)
    );
  }, [displayUnits, searchQuery]);

  const allSelected =
    filteredUnits.length > 0 &&
    filteredUnits.every((u) => locSelectedSet.has(u.serialNo));

  const toggleUnit = (serialNo: string) => {
    setSelectedUnits((prev) => {
      const current = new Set(prev[focusedLoc.id] || []);
      if (current.has(serialNo)) {
        current.delete(serialNo);
      } else {
        current.add(serialNo);
      }
      return { ...prev, [focusedLoc.id]: current };
    });
  };

  const toggleAll = () => {
    setSelectedUnits((prev) => {
      const current = new Set(prev[focusedLoc.id] || []);
      if (allSelected) {
        filteredUnits.forEach((u) => current.delete(u.serialNo));
      } else {
        filteredUnits.forEach((u) => current.add(u.serialNo));
      }
      return { ...prev, [focusedLoc.id]: current };
    });
  };

  const toggleCountAllInLoc = (locId: string) => {
    const wasOn = !!countAllPerLoc[locId];
    setCountAllPerLoc((prev) => ({ ...prev, [locId]: !wasOn }));
    const units = generateSerialUnits(item.id, locId, unitCount);
    setSelectedUnits((prev) => {
      const current = new Set(prev[locId] || []);
      if (!wasOn) {
        units.forEach((u) => current.add(u.serialNo));
      } else {
        current.clear();
      }
      return { ...prev, [locId]: current };
    });
  };

  const getTotalSelected = () => {
    let total = 0;
    Object.values(selectedUnits).forEach((s) => {
      total += s.size;
    });
    return total;
  };

  const totalSelected = getTotalSelected();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "var(--overlay-modal)" }}
      onClick={onClose}
    >
      <div
        className="flex flex-col"
        style={{
          width: "920px",
          maxWidth: "95vw",
          height: "80vh",
          maxHeight: "80vh",
          background: "var(--background)",
          boxShadow: "var(--elevation-modal)",
          overflow: "hidden",
          borderRadius: "var(--radius-lg)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div
          className="flex items-center shrink-0"
          style={{
            padding: "var(--spacing-3) var(--spacing-4)",
            gap: "var(--spacing-3)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <button
            onClick={onClose}
            className="flex items-center justify-center shrink-0"
            style={{
              width: "24px",
              height: "24px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                clipRule="evenodd"
                d={unitModalSvgPaths.p9096200}
                fill="var(--foreground)"
                fillRule="evenodd"
                opacity="0.5"
              />
            </svg>
          </button>
          <span
            style={{
              fontSize: "var(--text-h5)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            Edit Count — Select Units for {item.code}
          </span>
        </div>

        {/* ── Two-Panel Body ── */}
        <div className="flex flex-1" style={{ overflow: "hidden" }}>
          {/* ── Left Panel: Location Cards ── */}
          <div
            className="flex flex-col shrink-0 scrollbar-thin scrollbar-auto-hide"
            style={{
              width: "340px",
              borderRight: "1px solid var(--border)",
              padding: "var(--spacing-4)",
              gap: "var(--spacing-4)",
              overflowY: "auto",
            }}
          >
            {locations.map((loc) => {
              const isFocused = loc.id === focusedLoc.id;
              const locUnitCount = (
                selectedUnits[loc.id] || new Set()
              ).size;
              const isCountAll = !!countAllPerLoc[loc.id];

              return (
                <div
                  key={loc.id}
                  className="flex flex-col"
                  style={{ gap: "0" }}
                >
                  <div className="relative">
                    <button
                      onClick={() => {
                        setFocusedLocId(loc.id);
                        setSearchQuery("");
                      }}
                      className="relative w-full text-left"
                      style={{
                        height: "110px",
                        borderRadius: "var(--radius-md)",
                        background: isFocused
                          ? "var(--primary-50)"
                          : "var(--surface-secondary)",
                        border: "none",
                        cursor: "pointer",
                        padding: "var(--spacing-3)",
                        boxShadow: isFocused
                          ? "var(--elevation-input-focus)"
                          : "none",
                        overflow: "hidden",
                      }}
                    >
                      {!isFocused && (
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            border: "1px solid var(--border)",
                            borderRadius: "var(--radius-md)",
                          }}
                        />
                      )}
                      {isFocused && (
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            boxShadow: "var(--elevation-input-ring)",
                            borderRadius: "var(--radius-md)",
                          }}
                        />
                      )}
                      <div
                        className="flex items-center"
                        style={{
                          gap: "var(--spacing-4)",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <LocationCardImage image={loc.image} size={80} />
                        <div
                          className="flex flex-col"
                          style={{
                            gap: "var(--spacing-1)",
                            flex: 1,
                            minWidth: 0,
                          }}
                        >
                          <p
                            style={{
                              fontSize: "var(--text-h6)",
                              fontWeight: "var(--font-weight-semibold)",
                              color: "var(--foreground)",
                              margin: 0,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {loc.name}
                          </p>
                          <p
                            style={{
                              fontSize: "var(--text-label)",
                              fontWeight: "var(--font-weight-normal)",
                              color: "var(--text-secondary)",
                              margin: 0,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {loc.address}
                          </p>
                          {locUnitCount > 0 && (
                            <span
                              style={{
                                fontSize: "var(--text-caption)",
                                fontWeight: "var(--font-weight-medium)",
                                color: "var(--primary)",
                              }}
                            >
                              {locUnitCount} unit
                              {locUnitCount !== 1 ? "s" : ""} selected
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                    {isFocused && (
                      <div
                        className="absolute"
                        style={{
                          right: "-14px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: "27px",
                          height: "27px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: 2,
                        }}
                      >
                        <div
                          style={{
                            width: "19px",
                            height: "19px",
                            background: "var(--primary-50)",
                            borderRadius: "2px",
                            transform: "rotate(-45deg)",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  {/* Count all units in this Location toggle */}
                  <div
                    className="flex items-center"
                    style={{
                      padding: "var(--spacing-2-5) var(--spacing-3)",
                      gap: "var(--spacing-2-5)",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleCountAllInLoc(loc.id)}
                  >
                    <Checkbox
                      checked={isCountAll}
                      onChange={() => toggleCountAllInLoc(loc.id)}
                      size={16}
                    />
                    <span
                      style={{
                        fontSize: "var(--text-caption)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--foreground)",
                      }}
                    >
                      Count all units in this Lot
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Right Panel: Detail View ── */}
          <div
            className="flex flex-col flex-1"
            style={{ minWidth: 0, overflow: "hidden" }}
          >
            <div
              className="flex flex-col flex-1 overflow-y-auto scrollbar-thin scrollbar-auto-hide"
              style={{
                padding: "var(--spacing-4)",
                gap: "var(--spacing-5)",
              }}
            >
              {/* Location header card */}
              <div
                style={{
                  background: "var(--background)",
                  boxShadow: "var(--elevation-popover)",
                  padding: "var(--spacing-3)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <div
                  className="flex flex-col"
                  style={{ gap: "var(--spacing-5)" }}
                >
                  <div
                    className="flex items-center justify-between"
                    style={{ gap: "var(--spacing-2)" }}
                  >
                    <div
                      className="flex items-center"
                      style={{ gap: "var(--spacing-2)", minWidth: 0 }}
                    >
                      <LocationCardImage
                        image={focusedLoc.image}
                        size={42}
                      />
                      <div
                        className="flex flex-col"
                        style={{
                          gap: "var(--spacing-1)",
                          minWidth: 0,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "var(--text-h5)",
                            fontWeight: "var(--font-weight-semibold)",
                            color: "var(--foreground)",
                          }}
                        >
                          {focusedLoc.name}
                        </span>
                        <span
                          style={{
                            fontSize: "var(--text-label)",
                            fontWeight: "var(--font-weight-normal)",
                            color: "var(--foreground)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {focusedLoc.address}
                        </span>
                      </div>
                    </div>
                    <span
                      className="inline-flex items-center shrink-0"
                      style={{
                        padding: "var(--spacing-1) var(--spacing-1-5)",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--secondary)",
                        fontSize: "var(--text-label)",
                        fontWeight: "var(--font-weight-semibold)",
                        color: "var(--foreground)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {locSelectedSet.size} EA to Count
                    </span>
                  </div>

                  {/* Search + Add New Unit row */}
                  <div
                    className="flex items-center justify-between"
                    style={{ gap: "var(--spacing-3)" }}
                  >
                    <div
                      style={{
                        borderRadius: "var(--radius-sm)",
                        background: "var(--background)",
                        border: "1px solid var(--border)",
                        width: "200px",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        className="flex items-center"
                        style={{
                          padding: "var(--spacing-2-5) var(--spacing-3)",
                          gap: "var(--spacing-2)",
                        }}
                      >
                        <Search
                          size={16}
                          style={{
                            color: "var(--text-tertiary)",
                            flexShrink: 0,
                          }}
                        />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) =>
                            setSearchQuery(e.target.value)
                          }
                          placeholder="Search serial number"
                          style={{
                            fontSize: "var(--text-label)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--foreground)",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            padding: 0,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <button
                      className="inline-flex items-center justify-center shrink-0"
                      style={{
                        padding:
                          "var(--spacing-2) var(--spacing-3)",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--background)",
                        border: "1px solid var(--border)",
                        cursor: "pointer",
                        gap: "var(--spacing-1-5)",
                        fontSize: "var(--text-label)",
                        fontWeight: "var(--font-weight-semibold)",
                        color: "var(--foreground)",
                        boxShadow: "var(--elevation-xs)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Plus size={16} style={{ color: "var(--text-secondary)" }} />
                      Add New Unit
                    </button>
                  </div>
                </div>
              </div>

              {/* Tab pills: Units to Count / Units in System */}
              <div
                className="flex items-center"
                style={{ gap: "var(--spacing-2)" }}
              >
                <button
                  onClick={() => {
                    setActiveTab("units_to_count");
                    setSearchQuery("");
                  }}
                  className="inline-flex items-center shrink-0"
                  style={{
                    height: "30px",
                    padding:
                      "var(--spacing-1-5) var(--spacing-3) var(--spacing-1-5) var(--spacing-3)",
                    borderRadius: "var(--radius-full)",
                    background: "var(--background)",
                    border:
                      activeTab === "units_to_count"
                        ? "1px solid var(--primary-600)"
                        : "1px solid var(--border)",
                    cursor: "pointer",
                    gap: "var(--spacing-1-5)",
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-normal)",
                    color:
                      activeTab === "units_to_count"
                        ? "var(--primary)"
                        : "var(--text-secondary)",
                    boxShadow: "var(--elevation-xs)",
                  }}
                >
                  Units to Count
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      height: "18px",
                      minWidth: "18px",
                      padding: "0 var(--spacing-2)",
                      borderRadius: "var(--radius-full)",
                      background:
                        activeTab === "units_to_count"
                          ? "var(--primary-50)"
                          : "var(--muted-foreground)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-weight-semibold)",
                      color:
                        activeTab === "units_to_count"
                          ? "var(--primary)"
                          : "var(--text-secondary)",
                    }}
                  >
                    {allUnits.length}
                  </span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab("units_in_system");
                    setSearchQuery("");
                  }}
                  className="inline-flex items-center shrink-0"
                  style={{
                    height: "30px",
                    padding:
                      "var(--spacing-1-5) var(--spacing-3) var(--spacing-1-5) var(--spacing-3)",
                    borderRadius: "var(--radius-full)",
                    background: "var(--background)",
                    border:
                      activeTab === "units_in_system"
                        ? "1px solid var(--primary-600)"
                        : "1px solid var(--border)",
                    cursor: "pointer",
                    gap: "var(--spacing-1-5)",
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-normal)",
                    color:
                      activeTab === "units_in_system"
                        ? "var(--primary)"
                        : "var(--text-secondary)",
                    boxShadow: "var(--elevation-xs)",
                  }}
                >
                  Units in System
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      height: "18px",
                      minWidth: "18px",
                      padding: "0 var(--spacing-2)",
                      borderRadius: "var(--radius-full)",
                      background:
                        activeTab === "units_in_system"
                          ? "var(--primary-50)"
                          : "var(--muted-foreground)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-weight-semibold)",
                      color:
                        activeTab === "units_in_system"
                          ? "var(--primary)"
                          : "var(--text-secondary)",
                    }}
                  >
                    {systemUnits.length}
                  </span>
                </button>
              </div>

              {/* Select all checkbox */}
              <div
                className="flex items-center"
                style={{
                  padding: "var(--spacing-2) var(--spacing-2)",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--surface-secondary)",
                  border: "1px solid var(--border)",
                  gap: "var(--spacing-2-5)",
                  cursor: "pointer",
                }}
                onClick={toggleAll}
              >
                <Checkbox
                  checked={allSelected}
                  onChange={toggleAll}
                  size={16}
                />
                <span
                  style={{
                    fontSize: "var(--text-body-sm)",
                    fontWeight: "var(--font-weight-normal)",
                    color: "var(--foreground)",
                  }}
                >
                  Select All {filteredUnits.length} Serial Units
                </span>
              </div>

              {/* Unit grid — 2 columns */}
              <div
                className="grid"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                  gap: "var(--spacing-2)",
                }}
              >
                {filteredUnits.map((unit) => {
                  const isChecked = locSelectedSet.has(unit.serialNo);
                  return (
                    <div
                      key={unit.serialNo}
                      className="flex items-center"
                      style={{
                        gap: "var(--spacing-2)",
                        padding:
                          "var(--spacing-1-5) var(--spacing-2)",
                        borderRadius: "var(--spacing-1)",
                        background: "var(--surface-secondary)",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleUnit(unit.serialNo)}
                    >
                      <Checkbox
                        checked={isChecked}
                        onChange={() => toggleUnit(unit.serialNo)}
                        size={16}
                      />
                      <div
                        className="flex items-center"
                        style={{ gap: "var(--spacing-1)" }}
                      >
                        <span
                          style={{
                            fontSize: "var(--text-label)",
                            fontWeight: "var(--font-weight-normal)",
                            color: "var(--text-tertiary)",
                            width: "30px",
                          }}
                        >
                          {String(unit.index).padStart(3, "0")}
                        </span>
                        <span
                          style={{
                            fontSize: "var(--text-label)",
                            fontWeight: "var(--font-weight-normal)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {unit.serialNo}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div
          className="flex items-center justify-between shrink-0"
          style={{
            padding: "var(--spacing-3) var(--spacing-4)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <span
            style={{
              fontSize: "var(--text-label)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--foreground)",
            }}
          >
            <span style={{ fontWeight: "var(--font-weight-semibold)" }}>
              {totalSelected}
            </span>{" "}
            Unit{totalSelected !== 1 ? "(s)" : ""} Selected
          </span>
          <div
            className="flex items-center"
            style={{ gap: "var(--spacing-3)" }}
          >
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center"
              style={{
                padding: "var(--spacing-2) var(--spacing-4)",
                borderRadius: "var(--radius-sm)",
                background: "var(--background)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--foreground)",
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => onConfirm(totalSelected)}
              className="inline-flex items-center justify-center"
              style={{
                padding: "var(--spacing-2) var(--spacing-4)",
                borderRadius: "var(--radius-sm)",
                background: "var(--primary)",
                border: "none",
                cursor: "pointer",
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--primary-foreground)",
              }}
            >
              Select Units
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}