// ── Select Units Modal (two-panel, for serialized items) ──
import { Search, X } from "lucide-react";
import {
  type SearchableItem,
  type SerialUnit,
  type ViewUnitsModalState,
  generateSerialUnits,
  Checkbox,
} from "./cycle-count-data";
import { FONT } from "../../imports/shared-ui";
import { searchCardIcons as searchCardSvgPaths } from "../../imports/icons";

interface SelectUnitsModalProps {
  viewUnitsModal: ViewUnitsModalState;
  modalSelectedUnits: Record<string, Set<string>>;
  unitSearchQuery: string;
  searchableItems: SearchableItem[];
  setViewUnitsModal: React.Dispatch<React.SetStateAction<ViewUnitsModalState>>;
  setUnitSearchQuery: (q: string) => void;
  closeViewUnitsModal: () => void;
  confirmViewUnitsModal: () => void;
  toggleModalUnit: (locationId: string, serialNo: string) => void;
  toggleAllModalUnits: (locationId: string, units: SerialUnit[]) => void;
  getModalTotalSelected: () => number;
}

export function SelectUnitsModal({
  viewUnitsModal,
  modalSelectedUnits,
  unitSearchQuery,
  searchableItems,
  setViewUnitsModal,
  setUnitSearchQuery,
  closeViewUnitsModal,
  confirmViewUnitsModal,
  toggleModalUnit,
  toggleAllModalUnits,
  getModalTotalSelected,
}: SelectUnitsModalProps) {
  if (!viewUnitsModal.open) return null;

  const modalItem = searchableItems.find((i) => i.id === viewUnitsModal.itemId);
  if (!modalItem) return null;
  const focusedLocId = viewUnitsModal.focusedLocationId;
  const focusedLoc = modalItem.locations.find((l) => l.id === focusedLocId) || modalItem.locations[0];
  const unitCount = 15;
  const allUnits = generateSerialUnits(viewUnitsModal.itemId, focusedLoc.id, unitCount);
  const locModalUnits = modalSelectedUnits[focusedLoc.id] || new Set<string>();
  const filteredUnits = unitSearchQuery
    ? allUnits.filter((u) => u.serialNo.toLowerCase().includes(unitSearchQuery.toLowerCase()) || String(u.index).padStart(3, "0").includes(unitSearchQuery))
    : allUnits;
  const allSelected = filteredUnits.length > 0 && filteredUnits.every((u) => locModalUnits.has(u.serialNo));
  const totalSelected = getModalTotalSelected();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "var(--overlay-modal)" }}
      onClick={closeViewUnitsModal}
      onKeyDown={(e) => { if (e.key === "Escape") closeViewUnitsModal(); }}
    >
      <div
        className="flex flex-col rounded-xl"
        style={{
          width: "900px",
          maxWidth: "95vw",
          height: "80vh",
          maxHeight: "80vh",
          background: "var(--background)",
          boxShadow: "var(--elevation-modal)",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Modal Header ── */}
        <div
          className="flex items-center shrink-0"
          style={{
            padding: "var(--spacing-3) var(--spacing-4)",
            gap: "var(--spacing-3)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <button
            onClick={closeViewUnitsModal}
            className="flex items-center justify-center shrink-0"
            style={{ width: "24px", height: "24px", background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
          >
            <X size={16} style={{ color: "var(--foreground)", opacity: 0.5 }} />
          </button>
          <span style={{ fontSize: "var(--text-h5)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", letterSpacing: "var(--tracking-tight)", fontFamily: FONT }}>
            Select Units to Count
          </span>
        </div>

        {/* ── Modal Body: Two-Panel Layout ── */}
        <div className="flex flex-1" style={{ overflow: "hidden" }}>
          {/* ── Left Panel: Location List ── */}
          <div
            className="flex flex-col shrink-0 overflow-y-auto scrollbar-thin scrollbar-auto-hide"
            style={{
              width: "340px",
              borderRight: "1px solid var(--border)",
              padding: "var(--spacing-4)",
              gap: "var(--spacing-3)",
            }}
          >
            {modalItem.locations.map((loc) => {
              const isFocused = loc.id === focusedLoc.id;
              const locUnitCount = (modalSelectedUnits[loc.id] || new Set()).size;
              return (
                <div key={loc.id} className="relative">
                  <button
                    onClick={() => {
                      setViewUnitsModal((prev) => ({ ...prev, focusedLocationId: loc.id }));
                      setUnitSearchQuery("");
                    }}
                    className="relative w-full text-left"
                    style={{
                      height: "110px",
                      borderRadius: "var(--radius-md)",
                      background: isFocused ? "var(--primary-50)" : "var(--surface-secondary)",
                      border: "none",
                      cursor: "pointer",
                      padding: "var(--spacing-3)",
                      boxShadow: isFocused ? "var(--elevation-input-focus)" : "none",
                      overflow: "hidden",
                    }}
                  >
                    {!isFocused && (
                      <div className="absolute inset-0 pointer-events-none rounded-lg" style={{ border: "1px solid var(--border)" }} />
                    )}
                    {isFocused && (
                      <div className="absolute inset-0 pointer-events-none rounded-lg" style={{ boxShadow: "var(--elevation-input-ring)" }} />
                    )}
                    <div className="flex items-center" style={{ gap: "var(--spacing-3)", width: "100%", overflow: "hidden" }}>
                      <div
                        className="flex items-center justify-center shrink-0"
                        style={{ width: "80px", height: "82px", background: "var(--background)", border: "0.8px solid var(--border)", borderRadius: "var(--radius-sm)" }}
                      >
                        <svg width="24" height="32" viewBox="0 0 9.33333 13.3333" fill="none">
                          <path d={searchCardSvgPaths.p1e430ff2} fill="var(--primary)" />
                          <path d={searchCardSvgPaths.p25704700} fill="var(--primary)" />
                        </svg>
                      </div>
                      <div className="flex flex-col" style={{ gap: "var(--spacing-1)", flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: "var(--text-h6)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: FONT }}>
                          {loc.name}
                        </p>
                        <p style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-normal)", color: "var(--text-secondary)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", fontFamily: FONT }}>
                          {loc.address}
                        </p>
                        {locUnitCount > 0 && (
                          <span style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-medium)", color: "var(--primary)", fontFamily: FONT }}>
                            {locUnitCount} unit{locUnitCount !== 1 ? "s" : ""} selected
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                  {/* Arrow pointer for focused location */}
                  {isFocused && (
                    <div className="absolute" style={{ right: "-14px", top: "50%", transform: "translateY(-50%)", width: "27px", height: "27px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                      <div style={{ width: "19px", height: "19px", background: "var(--primary-50)", borderRadius: "var(--spacing-0-5)", transform: "rotate(-45deg)" }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Right Panel: Detail View ── */}
          <div
            className="flex flex-col flex-1"
            style={{ minWidth: 0, overflow: "hidden" }}
          >
            <div className="flex flex-col flex-1 overflow-y-auto scrollbar-thin scrollbar-auto-hide" style={{ padding: "var(--spacing-4)", gap: "var(--spacing-4)" }}>
              {/* Location Header Card */}
              <div
                className="rounded-lg"
                style={{
                  background: "var(--background)",
                  boxShadow: "var(--elevation-popover)",
                  padding: "var(--spacing-3)",
                }}
              >
                <div className="flex items-center justify-between" style={{ gap: "var(--spacing-2)" }}>
                  <div className="flex items-center" style={{ gap: "var(--spacing-2)", minWidth: 0 }}>
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{ width: "42px", height: "42px", background: "var(--background)", border: "0.8px solid var(--border)", borderRadius: "var(--radius-sm)" }}
                    >
                      <svg width="16" height="22" viewBox="0 0 9.33333 13.3333" fill="none">
                        <path d={searchCardSvgPaths.p1e430ff2} fill="var(--primary)" />
                        <path d={searchCardSvgPaths.p25704700} fill="var(--primary)" />
                      </svg>
                    </div>
                    <div className="flex flex-col" style={{ gap: "var(--spacing-1)", minWidth: 0 }}>
                      <span style={{ fontSize: "var(--text-h5)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", fontFamily: FONT }}>
                        {focusedLoc.name}
                      </span>
                      <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-normal)", color: "var(--foreground)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: FONT }}>
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
                      fontFamily: FONT,
                    }}
                  >
                    {locModalUnits.size} EA to Count
                  </span>
                </div>
              </div>

              {/* Search serial number */}
              <div
                className="relative"
                style={{
                  borderRadius: "var(--radius-sm)",
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--elevation-xs)",
                }}
              >
                <div className="flex items-center" style={{ padding: "var(--spacing-2-5) var(--spacing-3)", gap: "var(--spacing-2)" }}>
                  <Search size={16} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                  <input
                    type="text"
                    value={unitSearchQuery}
                    onChange={(e) => setUnitSearchQuery(e.target.value)}
                    placeholder="Search serial number"
                    style={{
                      fontSize: "var(--text-label)",
                      fontWeight: "var(--font-weight-normal)",
                      color: "var(--foreground)",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      padding: 0,
                      width: "100%",
                      fontFamily: FONT,
                    }}
                  />
                  {unitSearchQuery && (
                    <button
                      onClick={() => setUnitSearchQuery("")}
                      className="flex items-center justify-center shrink-0"
                      style={{ width: "16px", height: "16px", background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
                    >
                      <X size={12} style={{ color: "var(--text-tertiary)" }} />
                    </button>
                  )}
                </div>
              </div>

              {/* Count all checkbox */}
              <div
                className="flex items-center"
                style={{
                  padding: "var(--spacing-2) var(--spacing-3)",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--surface-secondary)",
                  gap: "var(--spacing-3-5)",
                  cursor: "pointer",
                }}
                onClick={() => toggleAllModalUnits(focusedLoc.id, filteredUnits)}
              >
                <Checkbox checked={allSelected} onChange={() => toggleAllModalUnits(focusedLoc.id, filteredUnits)} size={16} />
                <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--font-weight-medium)", color: "var(--foreground)", fontFamily: FONT }}>
                  Count all units in this location
                </span>
              </div>

              {/* Unit grid - 2 columns */}
              {filteredUnits.length > 0 ? (
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: "1fr 1fr",
                    gap: "var(--spacing-2)",
                  }}
                >
                  {filteredUnits.map((unit) => {
                    const isChecked = locModalUnits.has(unit.serialNo);
                    return (
                      <div
                        key={unit.serialNo}
                        className="flex items-center transition-colors"
                        style={{
                          gap: "var(--spacing-2)",
                          padding: "var(--spacing-1-5) var(--spacing-2)",
                          borderRadius: "var(--spacing-1)",
                          background: isChecked ? "var(--primary-50)" : "var(--surface-secondary)",
                          border: isChecked ? "1px solid var(--primary-200)" : "1px solid transparent",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleModalUnit(focusedLoc.id, unit.serialNo)}
                      >
                        <Checkbox checked={isChecked} onChange={() => toggleModalUnit(focusedLoc.id, unit.serialNo)} size={16} />
                        <div className="flex items-center" style={{ gap: "var(--spacing-1)" }}>
                          <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-normal)", color: "var(--text-tertiary)", width: "30px", fontFamily: FONT }}>
                            {String(unit.index).padStart(3, "0")}
                          </span>
                          <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-normal)", color: "var(--text-secondary)", fontFamily: FONT }}>
                            {unit.serialNo}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center" style={{ padding: "var(--spacing-6) var(--spacing-4)" }}>
                  <span style={{ fontSize: "var(--text-label)", color: "var(--text-tertiary)", fontFamily: FONT }}>
                    No serial units match "{unitSearchQuery}"
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Modal Footer ── */}
        <div
          className="flex items-center justify-between shrink-0"
          style={{
            padding: "var(--spacing-3) var(--spacing-4)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-normal)", color: "var(--foreground)", fontFamily: FONT }}>
            <span style={{ fontWeight: "var(--font-weight-semibold)" }}>{totalSelected}</span> Unit{totalSelected !== 1 ? "(s)" : ""} Selected
          </span>
          <div className="flex items-center" style={{ gap: "var(--spacing-3)" }}>
            <button
              onClick={closeViewUnitsModal}
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
                fontFamily: FONT,
              }}
            >
              Cancel
            </button>
            <button
              onClick={confirmViewUnitsModal}
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
                fontFamily: FONT,
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