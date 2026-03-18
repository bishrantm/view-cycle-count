import { useState, useMemo, useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Save,
  Send,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Package,
  SkipForward,
  Search,
  Barcode,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { showToast } from "./custom-toast";
import {
  type CountItem,
  type CountItemLocation,
  type CountSerialUnit,
  INITIAL_COUNT_ITEMS,
  EXECUTION_PAGE_LABELS as LABELS,
} from "./data";
import {
  validateCountedQty,
  computeCountProgress,
  varianceToastDescription,
  matchToastDescription,
} from "./logic";
import { Checkbox } from "./cycle-count-data";
import { searchCardIcons as searchCardSvgPaths } from "../../imports/icons";
import { FONT } from "../../imports/shared-ui";

export default function CountExecution() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setItems] = useState<CountItem[]>(INITIAL_COUNT_ITEMS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [tempQty, setTempQty] = useState("");

  // ── Select Units Modal state ──────────────────────────────────────────────
  const [selectUnitsOpen, setSelectUnitsOpen] = useState(false);
  const [modalFocusedLocId, setModalFocusedLocId] = useState<string | null>(null);
  const [modalUnitSearch, setModalUnitSearch] = useState("");
  // Temp selected units per location while modal is open: { [locationId]: Set<serialNo> }
  const [modalSelectedUnits, setModalSelectedUnits] = useState<Record<string, Set<string>>>({});

  const currentItem = items[currentIndex];
  const { counted: countedCount, percent: progressPercent } = computeCountProgress(items);

  const updateItem = (index: number, updates: Partial<CountItem>) => {
    setItems((prev) => prev.map((item, i) => (i === index ? { ...item, ...updates } : item)));
  };

  // ─── Serial unit helpers (for confirmed count display) ──────────────────
  const currentCountedSerials = useMemo(() => {
    return new Set(currentItem.countedSerialNos ?? []);
  }, [currentItem.countedSerialNos]);

  const serialCountedQty = (currentItem.countedSerialNos ?? []).length;
  const serialExpectedQty = currentItem.expectedQty;

  // ─── Open Select Units Modal ──────────────────────────────────────────────
  const openSelectUnitsModal = useCallback(() => {
    const locs = currentItem.locations ?? [];
    // Pre-populate modal selections from already-counted serials
    const countedSet = new Set(currentItem.countedSerialNos ?? []);
    const initialSelections: Record<string, Set<string>> = {};
    locs.forEach((loc) => {
      const selected = new Set<string>();
      loc.units.forEach((u) => {
        if (countedSet.has(u.serialNo)) selected.add(u.serialNo);
      });
      initialSelections[loc.id] = selected;
    });
    setModalSelectedUnits(initialSelections);
    setModalFocusedLocId(locs[0]?.id ?? null);
    setModalUnitSearch("");
    setSelectUnitsOpen(true);
  }, [currentItem]);

  const closeSelectUnitsModal = () => {
    setSelectUnitsOpen(false);
    setModalUnitSearch("");
  };

  const toggleModalUnit = (locId: string, serialNo: string) => {
    setModalSelectedUnits((prev) => {
      const locSet = new Set(prev[locId] ?? []);
      if (locSet.has(serialNo)) locSet.delete(serialNo);
      else locSet.add(serialNo);
      return { ...prev, [locId]: locSet };
    });
  };

  const toggleAllModalUnits = (locId: string, units: CountSerialUnit[]) => {
    setModalSelectedUnits((prev) => {
      const locSet = new Set(prev[locId] ?? []);
      const allSelected = units.length > 0 && units.every((u) => locSet.has(u.serialNo));
      if (allSelected) {
        units.forEach((u) => locSet.delete(u.serialNo));
      } else {
        units.forEach((u) => locSet.add(u.serialNo));
      }
      return { ...prev, [locId]: locSet };
    });
  };

  const getModalTotalSelected = () => {
    let total = 0;
    for (const set of Object.values(modalSelectedUnits)) total += set.size;
    return total;
  };

  const confirmSelectUnits = () => {
    // Collect all selected serial numbers across locations
    const allSelected: string[] = [];
    for (const set of Object.values(modalSelectedUnits)) {
      set.forEach((s) => allSelected.push(s));
    }
    updateItem(currentIndex, { countedSerialNos: allSelected });
    setSelectUnitsOpen(false);
    setModalUnitSearch("");
  };

  // ─── Non-serialized: Confirm Count ─────────────────────────────────────────

  const handleConfirmCount = () => {
    const { valid, qty } = validateCountedQty(tempQty);
    if (!valid) {
      showToast({ title: LABELS.invalidQtyTitle, description: LABELS.invalidQtyDescription, type: "error" });
      return;
    }
    updateItem(currentIndex, { countedQty: qty, status: "counted" });
    setTempQty("");

    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    const hasVariance = qty !== currentItem.expectedQty;
    if (hasVariance) {
      showToast({ title: LABELS.varianceDetectedTitle, description: varianceToastDescription(currentItem.id, currentItem.expectedQty, qty), type: "warning" });
    } else {
      showToast({ title: LABELS.itemMatchedTitle, description: matchToastDescription(currentItem.id), type: "success" });
    }
  };

  // ─── Serialized: Confirm Count ─────────────────────────────────────────────

  const handleConfirmSerializedCount = () => {
    const countedQty = (currentItem.countedSerialNos ?? []).length;
    if (countedQty === 0) {
      showToast({ title: "No units selected", description: "Please select at least one serial unit to confirm the count.", type: "error" });
      return;
    }
    updateItem(currentIndex, { countedQty, status: "counted" });

    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    const hasVariance = countedQty !== currentItem.expectedQty;
    if (hasVariance) {
      showToast({ title: LABELS.varianceDetectedTitle, description: varianceToastDescription(currentItem.id, currentItem.expectedQty, countedQty), type: "warning" });
    } else {
      showToast({ title: LABELS.itemMatchedTitle, description: matchToastDescription(currentItem.id), type: "success" });
    }
  };

  const handleSkip = () => {
    updateItem(currentIndex, { status: "skipped" });
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setTempQty("");
  };

  const handleSubmitAll = () => {
    showToast({ title: LABELS.submitSuccessTitle, description: LABELS.submitSuccessDescription, type: "success" });
    navigate(`/count/${id}`);
  };

  const allCounted = items.every((i) => i.status === "counted" || i.status === "skipped");

  // Reset state when switching items
  const handleSwitchItem = (index: number) => {
    setCurrentIndex(index);
    const item = items[index];
    setTempQty(item.countedQty !== null && !item.serialized ? String(item.countedQty) : "");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div
        className="flex items-center justify-between px-6 border-b border-border"
        style={{ height: "56px", minHeight: "56px", background: "var(--background)" }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(`/count/${id}`)}
            className="flex items-center justify-center rounded-md transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            style={{ width: "36px", height: "36px", cursor: "pointer", background: "transparent", border: "none" }}
            aria-label="Back to count detail"
          >
            <ArrowLeft size={18} style={{ color: "var(--foreground)" }} />
          </button>
          <div>
            <h4 style={{ margin: 0 }}>Count Execution — {id}</h4>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span style={{ fontSize: "var(--text-label)", color: "var(--text-secondary)" }}>
            {countedCount} of {items.length} items counted
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              showToast({ title: "Progress saved", description: "You can continue counting later.", type: "info" });
              navigate(`/count/${id}`);
            }}
            className="gap-1.5"
          >
            <Save size={14} />
            Save & Exit
          </Button>
          {allCounted && (
            <Button onClick={() => setShowSubmitDialog(true)} className="gap-1.5">
              <Send size={14} />
              Submit Count
            </Button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-3 border-b border-border" style={{ background: "var(--background)" }}>
        <div className="flex items-center gap-3">
          <Progress value={progressPercent} className="h-2 flex-1" />
          <span
            style={{
              fontSize: "var(--text-label)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--primary)",
              minWidth: "36px",
            }}
          >
            {progressPercent}%
          </span>
        </div>
      </div>

      {/* Main Content - Split View */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Item List */}
        <div
          className="flex flex-col border-r border-border overflow-y-auto scrollbar-thin scrollbar-auto-hide"
          style={{ width: "320px", minWidth: "320px", background: "var(--background)" }}
        >
          <div
            className="px-4 py-3 border-b border-border"
            style={{ background: "var(--surface-secondary)" }}
          >
            <p
              style={{
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)",
                margin: 0,
              }}
            >
              Items to Count ({items.length})
            </p>
          </div>
          {items.map((item, index) => {
            const isActive = index === currentIndex;
            const hasVariance = item.countedQty !== null && item.countedQty !== item.expectedQty;
            return (
              <button
                key={item.id}
                onClick={() => handleSwitchItem(index)}
                className="flex items-center gap-3 px-4 py-3 text-left transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                style={{
                  cursor: "pointer",
                  background: isActive ? "var(--primary-50)" : "var(--background)",
                  borderLeft: isActive ? "3px solid var(--primary)" : "3px solid transparent",
                  border: "none",
                  borderBottom: "1px solid var(--border)",
                }}
                aria-current={isActive ? "true" : undefined}
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "28px",
                    height: "28px",
                    minWidth: "28px",
                    background:
                      item.status === "counted"
                        ? hasVariance
                          ? "var(--status-awaiting-bg)"
                          : "var(--status-completed-bg)"
                        : item.status === "skipped"
                          ? "var(--status-pending-bg)"
                          : isActive
                            ? "var(--primary)"
                            : "var(--secondary)",
                    color:
                      item.status === "counted"
                        ? hasVariance
                          ? "var(--status-awaiting-text)"
                          : "var(--status-completed-text)"
                        : item.status === "skipped"
                          ? "var(--status-pending-text)"
                          : isActive
                            ? "var(--primary-foreground)"
                            : "var(--text-tertiary)",
                  }}
                >
                  {item.status === "counted" ? (
                    hasVariance ? (
                      <AlertTriangle size={14} aria-hidden="true" />
                    ) : (
                      <CheckCircle2 size={14} aria-hidden="true" />
                    )
                  ) : item.status === "skipped" ? (
                    <SkipForward size={14} aria-hidden="true" />
                  ) : (
                    <span style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-semibold)" }}>
                      {index + 1}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
                    <p
                      style={{
                        fontSize: "var(--text-label)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--foreground)",
                        margin: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.id}
                    </p>
                    {item.serialized && (
                      <span
                        className="chip inline-flex items-center"
                        style={{
                          padding: "1px var(--spacing-1-5)",
                          borderRadius: "var(--radius-full)",
                          fontSize: "var(--text-caption)",
                          fontWeight: "var(--font-weight-medium)",
                          background: "var(--recount-bg)",
                          color: "var(--recount-text)",
                          gap: "var(--spacing-1)",
                          lineHeight: "var(--leading-relaxed)",
                        }}
                      >
                        <Barcode size={10} />
                        Serialized
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: "var(--text-caption)",
                      color: "var(--text-secondary)",
                      margin: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Count Entry */}
        <div className="flex-1 flex flex-col overflow-y-auto scrollbar-thin scrollbar-auto-hide p-8" style={{ background: "var(--surface-secondary)" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto", width: "100%" }}>
            {/* Item Header */}
            <div
              className="rounded-lg border border-border p-6 mb-6"
              style={{ background: "var(--card)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Package size={16} style={{ color: "var(--primary)" }} aria-hidden="true" />
                    <span
                      style={{
                        fontSize: "var(--text-label)",
                        fontWeight: "var(--font-weight-semibold)",
                        color: "var(--primary)",
                      }}
                    >
                      {currentItem.id}
                    </span>
                    {currentItem.serialized && (
                      <span
                        className="chip inline-flex items-center"
                        style={{
                          padding: "1px var(--spacing-1-5)",
                          borderRadius: "var(--radius-full)",
                          fontSize: "var(--text-caption)",
                          fontWeight: "var(--font-weight-medium)",
                          background: "var(--recount-bg)",
                          color: "var(--recount-text)",
                          gap: "var(--spacing-1)",
                          lineHeight: "var(--leading-relaxed)",
                        }}
                      >
                        <Barcode size={10} />
                        Serialized
                      </span>
                    )}
                  </div>
                  <h4 style={{ margin: 0 }}>{currentItem.name}</h4>
                  <p
                    style={{
                      fontSize: "var(--text-label)",
                      color: "var(--text-secondary)",
                      margin: "var(--spacing-1) 0 0",
                    }}
                  >
                    {currentItem.category}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: "var(--text-caption)",
                    color: "var(--text-secondary)",
                  }}
                >
                  Item {currentIndex + 1} of {items.length}
                </span>
              </div>

              {/* Location */}
              <div
                className="flex items-center gap-2 p-3 rounded-md mb-4"
                style={{ background: "var(--surface-secondary)" }}
              >
                <MapPin size={14} style={{ color: "var(--primary)" }} aria-hidden="true" />
                <span
                  style={{
                    fontSize: "var(--text-label)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {currentItem.location}
                </span>
              </div>

              {/* Expected Quantity */}
              <div
                className="flex items-center justify-between p-3 rounded-md"
                style={{ background: "var(--primary-50)", border: "1px solid var(--primary-200)" }}
              >
                <span
                  style={{
                    fontSize: "var(--text-label)",
                    color: "var(--primary-700)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  Expected {currentItem.serialized ? "Units" : "Quantity"}
                </span>
                <span
                  style={{
                    fontSize: "var(--text-h4)",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "var(--primary-800)",
                  }}
                >
                  {currentItem.expectedQty}{currentItem.serialized ? " EA" : ""}
                </span>
              </div>
            </div>

            {/* ─── SERIALIZED: Select Units Card ─── */}
            {currentItem.serialized ? (
              <div
                className="rounded-lg border border-border mb-6"
                style={{ background: "var(--card)", overflow: "hidden" }}
              >
                {/* Header */}
                <div
                  className="flex items-center justify-between"
                  style={{
                    padding: "var(--spacing-3) var(--spacing-4)",
                    borderBottom: "1px solid var(--border)",
                    background: "var(--surface-secondary)",
                  }}
                >
                  <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
                    <Barcode size={16} style={{ color: "var(--foreground)" }} />
                    <span
                      style={{
                        fontSize: "var(--text-label)",
                        fontWeight: "var(--font-weight-semibold)",
                        color: "var(--foreground)",
                        fontFamily: FONT,
                      }}
                    >
                      Serial Unit Selection
                    </span>
                  </div>
                  <span
                    className="chip inline-flex items-center"
                    style={{
                      padding: "var(--spacing-0-5) var(--spacing-2)",
                      borderRadius: "var(--radius-sm)",
                      background: serialCountedQty === serialExpectedQty ? "var(--status-completed-bg)" : serialCountedQty > 0 ? "var(--status-in-progress-bg)" : "var(--secondary)",
                      fontSize: "var(--text-caption)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: serialCountedQty === serialExpectedQty ? "var(--status-completed-text)" : serialCountedQty > 0 ? "var(--status-in-progress-text)" : "var(--text-secondary)",
                    }}
                  >
                    {serialCountedQty} / {serialExpectedQty} selected
                  </span>
                </div>

                {/* Body: prompt to open modal */}
                <div
                  className="flex flex-col items-center justify-center"
                  style={{ padding: "var(--spacing-6) var(--spacing-4)", gap: "var(--spacing-3)" }}
                >
                  {serialCountedQty > 0 ? (
                    <>
                      {/* Summary of selections */}
                      <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
                        <CheckCircle2 size={20} style={{ color: serialCountedQty === serialExpectedQty ? "var(--status-completed-text)" : "var(--status-in-progress-text)" }} />
                        <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-medium)", color: "var(--foreground)", fontFamily: FONT }}>
                          {serialCountedQty} unit{serialCountedQty !== 1 ? "s" : ""} selected across {currentItem.locations?.length ?? 1} location{(currentItem.locations?.length ?? 1) !== 1 ? "s" : ""}
                        </span>
                      </div>
                      {/* Location breakdown */}
                      {currentItem.locations && currentItem.locations.length > 0 && (
                        <div className="flex flex-wrap items-center justify-center" style={{ gap: "var(--spacing-2)" }}>
                          {currentItem.locations.map((loc) => {
                            const countedInLoc = loc.units.filter((u) => currentCountedSerials.has(u.serialNo)).length;
                            return (
                              <span
                                key={loc.id}
                                className="chip"
                                style={{
                                  background: countedInLoc > 0 ? "var(--status-in-progress-bg)" : "var(--secondary)",
                                  color: countedInLoc > 0 ? "var(--status-in-progress-text)" : "var(--text-secondary)",
                                  borderColor: countedInLoc > 0 ? "var(--status-in-progress-border)" : "var(--border)",
                                  fontFamily: FONT,
                                }}
                              >
                                {loc.name}: {countedInLoc}/{loc.units.length}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <Barcode size={32} style={{ color: "var(--text-tertiary)" }} />
                      <span style={{ fontSize: "var(--text-label)", color: "var(--text-secondary)", fontFamily: FONT, textAlign: "center" }}>
                        Select which serial units were found at each location
                      </span>
                    </>
                  )}
                  <Button
                    onClick={openSelectUnitsModal}
                    variant={serialCountedQty > 0 ? "outline" : "default"}
                    className="gap-1.5"
                  >
                    <Search size={14} />
                    {serialCountedQty > 0 ? "Edit Unit Selection" : "Select Units to Count"}
                  </Button>
                </div>

                {/* Difference preview */}
                {serialCountedQty > 0 && (
                  <div
                    className="flex items-center gap-2"
                    style={{
                      padding: "var(--spacing-2-5) var(--spacing-4)",
                      borderTop: "1px solid var(--border)",
                      background:
                        serialCountedQty === serialExpectedQty
                          ? "var(--variance-match-bg)"
                          : "var(--variance-negative-bg)",
                    }}
                  >
                    {serialCountedQty === serialExpectedQty ? (
                      <CheckCircle2 size={14} style={{ color: "var(--variance-match-text)" }} aria-hidden="true" />
                    ) : (
                      <AlertTriangle size={14} style={{ color: "var(--variance-negative-text)" }} aria-hidden="true" />
                    )}
                    <span
                      style={{
                        fontSize: "var(--text-label)",
                        fontWeight: "var(--font-weight-medium)",
                        color:
                          serialCountedQty === serialExpectedQty
                            ? "var(--variance-match-text)"
                            : "var(--variance-negative-text)",
                        fontFamily: FONT,
                      }}
                    >
                      {serialCountedQty === serialExpectedQty
                        ? "All units accounted for"
                        : `Difference: ${serialCountedQty - serialExpectedQty > 0 ? "+" : ""}${serialCountedQty - serialExpectedQty} unit${Math.abs(serialCountedQty - serialExpectedQty) !== 1 ? "s" : ""}`}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              /* ─── NON-SERIALIZED: Quantity Input ─── */
              <div
                className="rounded-lg border border-border p-6 mb-6"
                style={{ background: "var(--card)" }}
              >
                <div className="flex flex-col gap-3">
                  <label
                    style={{
                      fontSize: "var(--text-label)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--foreground)",
                    }}
                  >
                    Enter Counted Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    <Input
                      type="number"
                      min={0}
                      value={tempQty}
                      onChange={(e) => setTempQty(e.target.value)}
                      placeholder="0"
                      className="flex-1"
                      style={{
                        fontSize: "var(--text-h4)",
                        fontWeight: "var(--font-weight-semibold)",
                        textAlign: "center",
                        height: "48px",
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleConfirmCount();
                      }}
                      autoFocus
                      aria-label="Counted quantity"
                    />
                  </div>

                  {/* Variance Preview */}
                  {tempQty && !isNaN(parseInt(tempQty)) && (
                    <div
                      className="flex items-center gap-2 p-2.5 rounded-md"
                      style={{
                        background:
                          parseInt(tempQty) === currentItem.expectedQty
                            ? "var(--variance-match-bg)"
                            : "var(--variance-negative-bg)",
                      }}
                    >
                      {parseInt(tempQty) === currentItem.expectedQty ? (
                        <CheckCircle2 size={14} style={{ color: "var(--variance-match-text)" }} aria-hidden="true" />
                      ) : (
                        <AlertTriangle size={14} style={{ color: "var(--variance-negative-text)" }} aria-hidden="true" />
                      )}
                      <span
                        style={{
                          fontSize: "var(--text-label)",
                          fontWeight: "var(--font-weight-medium)",
                          color:
                            parseInt(tempQty) === currentItem.expectedQty
                              ? "var(--variance-match-text)"
                              : "var(--variance-negative-text)",
                        }}
                      >
                        {parseInt(tempQty) === currentItem.expectedQty
                          ? "Quantity matches expected"
                          : `Difference: ${parseInt(tempQty) - currentItem.expectedQty > 0 ? "+" : ""}${parseInt(tempQty) - currentItem.expectedQty}`}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mb-6">
              {currentItem.serialized ? (
                <Button
                  onClick={handleConfirmSerializedCount}
                  disabled={serialCountedQty === 0}
                  className="flex-1 gap-1.5"
                >
                  <Check size={16} />
                  Confirm Count ({serialCountedQty} unit{serialCountedQty !== 1 ? "s" : ""})
                </Button>
              ) : (
                <Button
                  onClick={handleConfirmCount}
                  disabled={!tempQty || isNaN(parseInt(tempQty))}
                  className="flex-1 gap-1.5"
                >
                  <Check size={16} />
                  Confirm Count
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => setShowNotes(!showNotes)}
                className="gap-1.5"
              >
                <MessageSquare size={14} />
                Note
              </Button>
              <Button
                variant="ghost"
                onClick={handleSkip}
                style={{ color: "var(--text-secondary)" }}
                className="gap-1.5"
              >
                <SkipForward size={14} />
                Skip
              </Button>
            </div>

            {/* Notes */}
            {showNotes && (
              <div className="flex flex-col gap-2 mb-6 p-3 rounded-md border border-border" style={{ background: "var(--surface-secondary)" }}>
                <Textarea
                  value={currentItem.note}
                  onChange={(e) => updateItem(currentIndex, { note: e.target.value })}
                  placeholder="Add a note for this item (e.g., damaged packaging, missing label)..."
                  rows={2}
                />
                <div className="flex justify-end">
                  <Button size="sm" variant="outline" onClick={() => setShowNotes(false)}>
                    Done
                  </Button>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  if (currentIndex > 0) {
                    handleSwitchItem(currentIndex - 1);
                  }
                }}
                disabled={currentIndex === 0}
                className="gap-1.5"
              >
                <ChevronLeft size={16} />
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  if (currentIndex < items.length - 1) {
                    handleSwitchItem(currentIndex + 1);
                  }
                }}
                disabled={currentIndex === items.length - 1}
                className="gap-1.5"
              >
                Next
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SELECT UNITS TO COUNT MODAL
          ═══════════════════════════════════════════════════════════════════════ */}
      {selectUnitsOpen && currentItem.serialized && currentItem.locations && (
        <SelectUnitsCountModal
          locations={currentItem.locations}
          focusedLocId={modalFocusedLocId}
          setFocusedLocId={setModalFocusedLocId}
          unitSearch={modalUnitSearch}
          setUnitSearch={setModalUnitSearch}
          selectedUnits={modalSelectedUnits}
          toggleUnit={toggleModalUnit}
          toggleAllUnits={toggleAllModalUnits}
          totalSelected={getModalTotalSelected()}
          onClose={closeSelectUnitsModal}
          onConfirm={confirmSelectUnits}
        />
      )}

      {/* Submit Dialog */}
      <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Count</DialogTitle>
            <DialogDescription>
              You are about to submit all counted items. Items with differences will be flagged for discrepancy review.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2 py-2">
            <div className="flex items-center justify-between px-3 py-2 rounded-md" style={{ background: "var(--surface-secondary)" }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} style={{ color: "var(--status-completed-text)" }} aria-hidden="true" />
                <span style={{ fontSize: "var(--text-label)", color: "var(--text-secondary)" }}>Matched</span>
              </div>
              <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)" }}>
                {items.filter((i) => i.status === "counted" && i.countedQty === i.expectedQty).length}
              </span>
            </div>
            <div className="flex items-center justify-between px-3 py-2 rounded-md" style={{ background: "var(--surface-secondary)" }}>
              <div className="flex items-center gap-2">
                <AlertTriangle size={14} style={{ color: "var(--status-awaiting-text)" }} aria-hidden="true" />
                <span style={{ fontSize: "var(--text-label)", color: "var(--text-secondary)" }}>Discrepancies</span>
              </div>
              <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)" }}>
                {items.filter((i) => i.status === "counted" && i.countedQty !== i.expectedQty).length}
              </span>
            </div>
            <div className="flex items-center justify-between px-3 py-2 rounded-md" style={{ background: "var(--surface-secondary)" }}>
              <div className="flex items-center gap-2">
                <SkipForward size={14} style={{ color: "var(--status-pending-text)" }} aria-hidden="true" />
                <span style={{ fontSize: "var(--text-label)", color: "var(--text-secondary)" }}>Skipped</span>
              </div>
              <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)" }}>
                {items.filter((i) => i.status === "skipped").length}
              </span>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSubmitDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmitAll} className="gap-1.5">
              <Send size={14} />
              Submit Count
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SELECT UNITS TO COUNT — MODAL COMPONENT
   Two-panel layout: locations left, unit checkboxes right
   ═══════════════════════════════════════════════════════════════════════════════ */

interface SelectUnitsCountModalProps {
  locations: CountItemLocation[];
  focusedLocId: string | null;
  setFocusedLocId: (id: string) => void;
  unitSearch: string;
  setUnitSearch: (q: string) => void;
  selectedUnits: Record<string, Set<string>>;
  toggleUnit: (locId: string, serialNo: string) => void;
  toggleAllUnits: (locId: string, units: CountSerialUnit[]) => void;
  totalSelected: number;
  onClose: () => void;
  onConfirm: () => void;
}

function SelectUnitsCountModal({
  locations,
  focusedLocId,
  setFocusedLocId,
  unitSearch,
  setUnitSearch,
  selectedUnits,
  toggleUnit,
  toggleAllUnits,
  totalSelected,
  onClose,
  onConfirm,
}: SelectUnitsCountModalProps) {
  const focusedLoc = locations.find((l) => l.id === focusedLocId) ?? locations[0];
  const locSelectedSet = selectedUnits[focusedLoc.id] ?? new Set<string>();
  const filteredUnits = unitSearch
    ? focusedLoc.units.filter(
        (u) =>
          u.serialNo.toLowerCase().includes(unitSearch.toLowerCase()) ||
          String(u.index).padStart(3, "0").includes(unitSearch)
      )
    : focusedLoc.units;
  const allFilteredSelected = filteredUnits.length > 0 && filteredUnits.every((u) => locSelectedSet.has(u.serialNo));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "var(--overlay-modal)" }}
      onClick={onClose}
      onKeyDown={(e) => { if (e.key === "Escape") onClose(); }}
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
            onClick={onClose}
            className="flex items-center justify-center shrink-0"
            style={{ width: "24px", height: "24px", background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
          >
            <X size={16} style={{ color: "var(--foreground)", opacity: 0.5 }} />
          </button>
          <span style={{ fontSize: "var(--text-h5)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", letterSpacing: "var(--tracking-tight)", fontFamily: FONT }}>
            Select Units to Count
          </span>
        </div>

        {/* ── Modal Body: Two-Panel ── */}
        <div className="flex flex-1" style={{ overflow: "hidden" }}>
          {/* ── Left Panel: Locations ── */}
          <div
            className="flex flex-col shrink-0 overflow-y-auto scrollbar-thin scrollbar-auto-hide"
            style={{
              width: "340px",
              borderRight: "1px solid var(--border)",
              padding: "var(--spacing-4)",
              gap: "var(--spacing-3)",
            }}
          >
            {locations.map((loc) => {
              const isFocused = loc.id === focusedLoc.id;
              const locUnitCount = (selectedUnits[loc.id] ?? new Set()).size;
              return (
                <div key={loc.id} className="relative">
                  <button
                    onClick={() => {
                      setFocusedLocId(loc.id);
                      setUnitSearch("");
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

          {/* ── Right Panel: Units ── */}
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
                    {locSelectedSet.size} EA to Count
                  </span>
                </div>
              </div>

              {/* Search */}
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
                    value={unitSearch}
                    onChange={(e) => setUnitSearch(e.target.value)}
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
                  {unitSearch && (
                    <button
                      onClick={() => setUnitSearch("")}
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
                onClick={() => toggleAllUnits(focusedLoc.id, filteredUnits)}
              >
                <Checkbox checked={allFilteredSelected} onChange={() => toggleAllUnits(focusedLoc.id, filteredUnits)} size={16} />
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
                    const isChecked = locSelectedSet.has(unit.serialNo);
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
                        onClick={() => toggleUnit(focusedLoc.id, unit.serialNo)}
                      >
                        <Checkbox checked={isChecked} onChange={() => toggleUnit(focusedLoc.id, unit.serialNo)} size={16} />
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
                    No serial units match "{unitSearch}"
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
                fontFamily: FONT,
              }}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
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