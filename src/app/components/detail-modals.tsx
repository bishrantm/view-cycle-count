import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";
import { showToast } from "./custom-toast";
import { FONT } from "../../imports/shared-ui";
import { UnitInput } from "./unit-input";
import {
  MapPin,
  Package,
  User,
  ChevronUp,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";

// ─── Imported SVG icon paths (consolidated via icons.ts) ─────────────────────
import {
  cancelSvgPaths,
  recountSvgPaths,
  approveSvgPaths,
  approveAllSvgPaths,
  rejectSvgPaths,
} from "../../imports/icons";

// ─── Current logged-in user (used for "Rejected By" auto-fill) ───────────────
const CURRENT_USER = { name: "Ahtisham Ahmad", initials: "AA" };

// ─── Types ───────────────────────────────────────────────────────────────────
interface LineItem {
  id: string;
  code: string;
  description: string;
  type: "location" | "item";
  status: string;
  systemCount: number;
  submittedCount: number | null;
  variance: number | null;
  countedBy: string | null;
  countedByAvatar: string | null;
  serialized?: boolean;
  lotControlled?: boolean;
  image?: string;
}

// ─── Shared hook: Enter key fires a callback without stale closures ──────────
function useEnterKey(open: boolean, onEnter: () => void, enabled = true) {
  const cbRef = useRef(onEnter);
  cbRef.current = onEnter;
  useEffect(() => {
    if (!open || !enabled) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        cbRef.current();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, enabled]);
}

// ═══════════════════════════════════════════════════════════════════════════════
// Shared Micro-Components
// ═══════════════════════════════════════════════════════════════════════════════

/** Shared modal shell: styled DialogContent + outer padding wrapper */
function ModalShell({ children, maxWidth = "496px" }: { children: React.ReactNode; maxWidth?: string }) {
  return (
    <DialogContent
      className="!block p-0 border-0 gap-0 overflow-hidden rounded-none shadow-none sm:max-w-none max-w-none"
      style={{
        maxWidth,
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--elevation-modal)",
        border: "2px solid var(--border)",
      }}
      aria-describedby={undefined}
    >
      <DialogTitle className="sr-only">Dialog</DialogTitle>
      <div className="flex flex-col" style={{ padding: "var(--spacing-6)", gap: "var(--spacing-5)" }}>
        {children}
      </div>
    </DialogContent>
  );
}

/** Figma-matching icon placeholder with colored bg + SVG icon */
function IconPlaceholder({ bgColor, children }: { bgColor: string; children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "var(--radius-sm)",
        background: bgColor,
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

/** SVG icon renderer — renders path inside a sized viewBox */
function SvgIcon({ path, fill, size = 27, viewBox }: { path: string; fill: string; size?: number; viewBox: string }) {
  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none" style={{ display: "block" }}>
      <path d={path} fill={fill} />
    </svg>
  );
}

/** Multi-path SVG for recount icon */
function RecountIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" style={{ display: "block" }}>
      <g transform="translate(0.333 0.333)">
        <path d={recountSvgPaths.p22d266f2} fill="var(--recount-text)" />
        <path d={recountSvgPaths.paee3700} fill="var(--recount-text)" />
        <path d={recountSvgPaths.p31ed6100} fill="var(--recount-text)" />
        <path d={recountSvgPaths.p27abb600} fill="var(--recount-text)" />
        <path d={recountSvgPaths.p19918400} fill="var(--recount-text)" />
      </g>
    </svg>
  );
}

/** Radio option card matching Figma design */
function ModalRadioOption({
  selected,
  onSelect,
  label,
  description,
}: {
  selected: boolean;
  onSelect: () => void;
  label: string;
  description: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full text-left"
      style={{
        gap: "var(--spacing-3)",
        padding: "var(--spacing-3)",
        borderRadius: "var(--radius-md)",
        border: selected ? "1.5px solid var(--primary)" : "1px solid var(--border)",
        background: selected ? "var(--primary-50)" : "var(--background)",
        cursor: "pointer",
        boxShadow: selected ? "none" : "var(--elevation-xs)",
        transition: "border-color 0.15s ease, background 0.15s ease",
      }}
    >
      {/* Radio circle */}
      <div
        className="flex items-center justify-center"
        style={{
          width: "20px",
          height: "20px",
          minWidth: "20px",
          borderRadius: "var(--radius-full)",
          border: selected ? "2px solid var(--primary)" : "2px solid var(--border)",
          background: "var(--background)",
          marginTop: "2px",
          transition: "border-color 0.15s ease",
        }}
      >
        {selected && (
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "var(--radius-full)",
              background: "var(--primary)",
            }}
          />
        )}
      </div>

      {/* Text content */}
      <div className="flex flex-col" style={{ gap: "var(--spacing-0-5)", flex: 1, minWidth: 0 }}>
        <span
          style={{
            fontSize: "var(--text-body-sm)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--foreground)",
            fontFamily: FONT,
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-normal)",
            color: "var(--text-secondary)",
            fontFamily: FONT,
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          {description}
        </span>
      </div>
    </button>
  );
}

/** Stats summary cell: label + value */
function StatCell({ label, value, width }: { label: string; value: React.ReactNode; width?: string }) {
  return (
    <div className="flex flex-col" style={{ gap: "var(--spacing-1)", width: width ?? "180px" }}>
      <span
        style={{
          fontSize: "var(--text-caption)",
          fontWeight: "var(--font-weight-medium)",
          color: "var(--text-secondary)",
          fontFamily: FONT,
        }}
      >
        {label}
      </span>
      <div
        style={{
          fontSize: "var(--text-sm)",
          fontWeight: "var(--font-weight-semibold)",
          color: "var(--foreground)",
          fontFamily: FONT,
        }}
      >
        {value}
      </div>
    </div>
  );
}

/** Warning/note banner (amber) */
function WarningNote({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-start"
      style={{
        padding: "var(--spacing-2) var(--spacing-3)",
        background: "var(--status-awaiting-bg)",
        borderRadius: "var(--radius-md)",
        gap: "var(--spacing-2)",
      }}
    >
      <AlertTriangle
        size={16}
        style={{
          color: "var(--status-awaiting-text)",
          flexShrink: 0,
          marginTop: "2px",
        }}
      />
      <span
        style={{
          fontSize: "var(--text-caption)",
          fontWeight: "var(--font-weight-medium)",
          color: "var(--status-awaiting-text)",
          fontFamily: FONT,
          lineHeight: "var(--leading-relaxed)",
        }}
      >
        {children}
      </span>
    </div>
  );
}

/** ESC keyboard shortcut pill */
function EscPill() {
  return (
    <span
      className="inline-flex items-center"
      style={{
        padding: "2px var(--spacing-1-5)",
        borderRadius: "var(--radius-sm)",
        background: "var(--surface-secondary)",
        border: "1px solid var(--border)",
        fontSize: "var(--text-caption)",
        fontWeight: "var(--font-weight-medium)",
        color: "var(--text-secondary)",
        lineHeight: "var(--leading-16)",
      }}
    >
      esc
    </span>
  );
}

/** Enter/Return keyboard shortcut pill (for primary button) */
function EnterPill() {
  return (
    <span
      className="inline-flex items-center"
      style={{
        padding: "2px var(--spacing-1-5)",
        borderRadius: "var(--radius-sm)",
        background: "var(--overlay-white-subtle)",
        lineHeight: "var(--leading-16)",
      }}
    >
      <svg width="10" height="6" viewBox="0 0 9.5 6" fill="none">
        <path d={cancelSvgPaths.p1d069a00} fill="var(--primary-foreground)" />
      </svg>
    </span>
  );
}

/** Modal footer with Cancel + Confirm buttons */
function ModalFooter({
  onCancel,
  onConfirm,
  confirmLabel,
  confirmDisabled,
}: {
  onCancel: () => void;
  onConfirm: () => void;
  confirmLabel: string;
  confirmDisabled?: boolean;
}) {
  return (
    <div className="flex items-center" style={{ gap: "var(--spacing-3)", width: "100%", paddingTop: "var(--spacing-1)" }}>
      {/* Cancel button */}
      <button
        type="button"
        onClick={onCancel}
        className="flex items-center justify-center"
        style={{
          gap: "var(--spacing-2)",
          padding: "var(--spacing-2-5) var(--spacing-4)",
          borderRadius: "var(--radius-sm)",
          border: "1px solid var(--border)",
          background: "var(--background)",
          cursor: "pointer",
          boxShadow: "var(--elevation-xs)",
          flexShrink: 0,
          height: "40px",
        }}
      >
        <EscPill />
        <span
          style={{
            fontSize: "var(--text-body-sm)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--foreground)",
            fontFamily: FONT,
          }}
        >
          Cancel
        </span>
      </button>

      {/* Confirm button */}
      <button
        type="button"
        onClick={onConfirm}
        disabled={confirmDisabled}
        className="flex items-center justify-center flex-1"
        style={{
          gap: "var(--spacing-2)",
          padding: "var(--spacing-2-5) var(--spacing-5)",
          borderRadius: "var(--radius-sm)",
          border: "none",
          background: confirmDisabled ? "var(--primary-200)" : "var(--primary)",
          cursor: confirmDisabled ? "not-allowed" : "pointer",
          boxShadow: "var(--elevation-xs)",
          opacity: confirmDisabled ? 0.6 : 1,
          height: "40px",
        }}
      >
        <EnterPill />
        <span
          style={{
            fontSize: "var(--text-body-sm)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--primary-foreground)",
            fontFamily: FONT,
            whiteSpace: "nowrap",
          }}
        >
          {confirmLabel}
        </span>
      </button>
    </div>
  );
}

/** Stats info card (summary panel in modals like Cancel, Approve All) */
function StatsCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "var(--surface-secondary)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--border)",
        padding: "var(--spacing-3)",
      }}
    >
      <div className="flex flex-wrap" style={{ gap: "var(--spacing-3) var(--spacing-6)" }}>
        {children}
      </div>
    </div>
  );
}

/** Figma-style info card for line item details */
function ItemInfoCard({ item }: { item: LineItem }) {
  const variance = item.variance ?? 0;
  const isIncrease = variance > 0;
  const isDecrease = variance < 0;

  const trackingType = (() => {
    const ser = item.serialized === true;
    const lot = item.lotControlled === true;
    if (ser && lot) return "Lot (Serialized)";
    if (!ser && lot) return "Lot (Non-Serialized)";
    if (ser && !lot) return "Serialized";
    return "Non-Serialized";
  })();

  return (
    <div
      style={{
        background: "var(--surface-secondary)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--border)",
        padding: "var(--spacing-3)",
        width: "100%",
      }}
    >
      <div className="flex flex-col" style={{ gap: "var(--spacing-3)" }}>
        {/* Item header row */}
        <div className="flex items-center" style={{ gap: "var(--spacing-2-5)" }}>
          {/* Item icon */}
          <div
            className="flex items-center justify-center"
            style={{
              width: "40px",
              height: "40px",
              minWidth: "40px",
              borderRadius: "var(--radius-md)",
              background: "var(--background)",
              border: "1px solid var(--border)",
            }}
          >
            {item.type === "location" ? (
              <MapPin size={18} style={{ color: "var(--primary)" }} />
            ) : (
              <Package size={18} style={{ color: "var(--text-secondary)" }} />
            )}
          </div>

          {/* Item details */}
          <div className="flex flex-col" style={{ gap: "var(--spacing-0-5)", flex: 1, minWidth: 0 }}>
            <div className="flex items-center flex-wrap" style={{ gap: "var(--spacing-2)" }}>
              <span
                style={{
                  fontSize: "var(--text-body-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--foreground)",
                  fontFamily: FONT,
                }}
              >
                {item.code}
              </span>
              {/* Tracking type badge */}
              <span
                className="chip chip-status"
                style={{
                  background: "var(--surface-secondary)",
                  color: "var(--text-secondary)",
                  borderColor: "var(--border)",
                }}
              >
                {trackingType}
              </span>
            </div>
            <span
              style={{
                fontSize: "var(--text-caption)",
                color: "var(--text-secondary)",
                fontFamily: FONT,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                lineHeight: "var(--leading-normal)",
              }}
            >
              {item.description}
            </span>
          </div>
        </div>

        {/* Stats grid */}
        <div className="flex flex-wrap" style={{ gap: "var(--spacing-3) var(--spacing-6)" }}>
          {/* Submitted Count */}
          <StatCell
            label="Submitted Count"
            value={
              item.submittedCount !== null ? (
                <div className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
                  <span>{item.submittedCount.toLocaleString()} EA</span>
                  {variance !== 0 && (
                    <>
                      <span style={{
                        width: "3px", height: "3px", borderRadius: "var(--radius-full)",
                        background: "var(--text-tertiary)", flexShrink: 0,
                      }} />
                      <span
                        style={{
                          color: isIncrease
                            ? "var(--status-completed-text)"
                            : isDecrease
                              ? "var(--status-cancelled-text)"
                              : "var(--foreground)",
                          fontSize: "var(--text-caption)",
                        }}
                      >
                        {variance > 0 ? "+" : ""}{variance} EA
                      </span>
                    </>
                  )}
                </div>
              ) : (
                <span style={{ color: "var(--text-tertiary)" }}>—</span>
              )
            }
          />

          {/* Prior System Count */}
          <StatCell label="Prior System Count" value={`${item.systemCount.toLocaleString()} EA`} />

          {/* Change in Valuation */}
          <StatCell
            label="Change in Valuation"
            value={
              variance !== 0 ? (
                <span
                  style={{
                    color: isDecrease ? "var(--status-cancelled-text)" : "var(--status-completed-text)",
                  }}
                >
                  {isDecrease ? "-" : "+"}${Math.abs(variance * 12.50).toFixed(2)}
                </span>
              ) : (
                <span>$0.00</span>
              )
            }
          />

          {/* Counted By */}
          <StatCell
            label="Counted By"
            value={
              item.countedBy ? (
                <div className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
                  {item.countedByAvatar ? (
                    <img
                      src={item.countedByAvatar}
                      alt=""
                      style={{
                        width: "20px", height: "20px",
                        borderRadius: "var(--radius-full)", objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: "20px", height: "20px",
                        borderRadius: "var(--radius-full)", background: "var(--primary-100)",
                      }}
                    >
                      <User size={10} style={{ color: "var(--primary)" }} />
                    </div>
                  )}
                  <span>{item.countedBy}</span>
                </div>
              ) : (
                <span style={{ color: "var(--text-tertiary)" }}>—</span>
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Cancel Plan Modal
// ═══════════════════════════════════════════════════════════════════════════════
export function CancelPlanModal({
  open,
  onOpenChange,
  planId,
  status,
  totalLocations,
  countedLineItems,
  pendingLineItems,
  awaitingLineItems,
  onConfirmAction,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planId: string;
  status: string;
  totalLocations: number;
  countedLineItems: number;
  pendingLineItems: number;
  awaitingLineItems: number;
  onConfirmAction?: (option: "discard" | "close") => void;
}) {
  const [cancelOption, setCancelOption] = useState<"discard" | "close">("discard");

  useEffect(() => {
    if (open) setCancelOption("discard");
  }, [open]);

  const handleConfirm = useCallback(() => {
    onOpenChange(false);
    onConfirmAction?.(cancelOption);
    showToast({
      title: cancelOption === "discard" ? "Plan cancelled" : "Plan closed (incomplete)",
      description: `${planId} has been ${cancelOption === "discard" ? "cancelled" : "closed as incomplete"}.`,
      type: "success",
    });
  }, [cancelOption, onOpenChange, planId, onConfirmAction]);

  useEnterKey(open, handleConfirm);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <ModalShell>
        {/* Header */}
        <div className="flex flex-col" style={{ gap: "var(--spacing-4)" }}>
          <IconPlaceholder bgColor="var(--status-cancelled-bg)">
            <SvgIcon
              path={cancelSvgPaths.p14cf7c80}
              fill="var(--status-cancelled-text)"
              viewBox="0 0 26.6667 26.6667"
            />
          </IconPlaceholder>

          <span
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              fontFamily: FONT,
            }}
          >
            Would you like to cancel the plan?
          </span>

          {status === "pending" && (
            <span
              style={{
                fontSize: "var(--text-body)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-secondary)",
                fontFamily: FONT,
                marginTop: "calc(-1 * var(--spacing-2))",
              }}
            >
              This will put the status to cancelled.
            </span>
          )}
        </div>

        {/* Stats card */}
        {status !== "pending" && (
          <StatsCard>
            <StatCell label="Total Locations in Plan" value={`${totalLocations} Locations`} />
            <StatCell label="Counted Line Items" value={`${countedLineItems} Items`} />
            <StatCell label="Pending Line Items" value={`${pendingLineItems} Items`} />
            <StatCell label="Awaiting Approval Line Items" value={`${awaitingLineItems} Items`} />
          </StatsCard>
        )}

        {/* Radio options */}
        {status !== "pending" && (
          <div className="flex flex-col" style={{ gap: "var(--spacing-2)" }}>
            <ModalRadioOption
              selected={cancelOption === "discard"}
              onSelect={() => setCancelOption("discard")}
              label="Discard Counts & Cancel"
              description="Close this plan and undo all counts and inventory adjustments recorded in it."
            />
            <ModalRadioOption
              selected={cancelOption === "close"}
              onSelect={() => setCancelOption("close")}
              label="Mark as Closed (Incomplete)"
              description="Keep all counts and adjustments already recorded, and set the plan status to Closed (Incomplete) and its remaining line items are Cancelled."
            />
          </div>
        )}

        {/* Footer */}
        <ModalFooter
          onCancel={() => onOpenChange(false)}
          onConfirm={handleConfirm}
          confirmLabel="Confirm Plan Cancellation"
        />
      </ModalShell>
    </Dialog>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Approve All Counts Modal
// ═══════════════════════════════════════════════════════════════════════════════
export function ApproveAllModal({
  open,
  onOpenChange,
  itemsAffected,
  totalUnapproved,
  onConfirm: onConfirmProp,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  itemsAffected: number;
  totalUnapproved: number;
  onConfirm?: () => void;
}) {
  const handleConfirm = useCallback(() => {
    onOpenChange(false);
    onConfirmProp?.();
    showToast({
      title: "All counts approved",
      description: "Inventory adjustments will be applied.",
      type: "success",
    });
  }, [onOpenChange, onConfirmProp]);

  useEnterKey(open, handleConfirm);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <ModalShell>
        {/* Header */}
        <div className="flex flex-col" style={{ gap: "var(--spacing-4)" }}>
          <div className="flex flex-col" style={{ gap: "var(--spacing-3)" }}>
            <IconPlaceholder bgColor="var(--status-completed-bg)">
              <SvgIcon
                path={approveAllSvgPaths.p27924280}
                fill="var(--brand-accent)"
                viewBox="0 0 26.6667 20.0933"
              />
            </IconPlaceholder>

            <div className="flex flex-col" style={{ gap: "var(--spacing-1-5)" }}>
              <span
                style={{
                  fontSize: "var(--text-h4)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--foreground)",
                  fontFamily: FONT,
                }}
              >
                Would you like to approve all counts?
              </span>
              <span
                style={{
                  fontSize: "var(--text-body-sm)",
                  color: "var(--text-secondary)",
                  fontFamily: FONT,
                }}
              >
                Review items with identified discrepancies before approving all counts.
              </span>
            </div>
          </div>

          {/* Stats card */}
          <StatsCard>
            <StatCell label="Items Affected" value={`${itemsAffected} Items`} />
            <StatCell label="Total Unapproved Line Items" value={`${totalUnapproved} Line Items`} />
          </StatsCard>

          {/* Warning */}
          <WarningNote>
            <strong style={{ fontWeight: "var(--font-weight-semibold)" }}>Note: </strong>
            Approving will adjust on-hand for any item with a discrepancy.
          </WarningNote>
        </div>

        {/* Footer */}
        <ModalFooter
          onCancel={() => onOpenChange(false)}
          onConfirm={handleConfirm}
          confirmLabel="Approve All Counts"
        />
      </ModalShell>
    </Dialog>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Approve Single Item Modal
// ═══════════════════════════════════════════════════════════════════════════════
export function ApproveItemModal({
  open,
  onOpenChange,
  item,
  onConfirm: onConfirmProp,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: LineItem | null;
  onConfirm?: (item: LineItem) => void;
}) {
  const handleConfirm = useCallback(() => {
    onOpenChange(false);
    if (item) {
      onConfirmProp?.(item);
      showToast({
        title: "Count approved",
        description: `${item.code} count has been approved.`,
        type: "success",
      });
    }
  }, [item, onOpenChange, onConfirmProp]);

  useEnterKey(open, handleConfirm);

  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={() => onOpenChange(false)}>
      <ModalShell>
        {/* Header */}
        <div className="flex flex-col" style={{ gap: "var(--spacing-3)" }}>
          <IconPlaceholder bgColor="var(--status-completed-bg)">
            <SvgIcon
              path={approveSvgPaths.pf9bc8c0}
              fill="var(--brand-accent)"
              viewBox="0 0 26.6667 26.6667"
            />
          </IconPlaceholder>

          <span
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              fontFamily: FONT,
            }}
          >
            Would you like to approve count?
          </span>
        </div>

        {/* Item info card */}
        <ItemInfoCard item={item} />

        {/* Warning */}
        <WarningNote>
          <strong style={{ fontWeight: "var(--font-weight-semibold)" }}>Note: </strong>
          Approving will adjust on-hand for any item with a discrepancy.
        </WarningNote>

        {/* Footer */}
        <ModalFooter
          onCancel={() => onOpenChange(false)}
          onConfirm={handleConfirm}
          confirmLabel="Approve Count"
        />
      </ModalShell>
    </Dialog>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Reject Item Modal
// ═══════════════════════════════════════════════════════════════════════════════
export function RejectItemModal({
  open,
  onOpenChange,
  item,
  onConfirm: onConfirmProp,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: LineItem | null;
  onConfirm?: (item: LineItem, option: "recount" | "keep" | "newplan", rejectedBy?: string) => void;
}) {
  const [rejectOption, setRejectOption] = useState<"recount" | "keep" | "newplan">("recount");

  useEffect(() => {
    if (open) setRejectOption("recount");
  }, [open]);

  const isKeepSelected = rejectOption === "keep";

  const handleConfirm = useCallback(() => {
    onOpenChange(false);
    if (item) {
      onConfirmProp?.(item, rejectOption, isKeepSelected ? CURRENT_USER.name : undefined);
      const desc =
        rejectOption === "recount"
          ? `${item.code} has been set back to Pending for recount.`
          : rejectOption === "keep"
            ? `${item.code} count rejected by ${CURRENT_USER.name}. System count maintained.`
            : `${item.code} count rejected. New plan created.`;
      showToast({ title: "Count rejected", description: desc, type: "success" });
    }
  }, [item, rejectOption, isKeepSelected, onOpenChange, onConfirmProp]);

  useEnterKey(open, handleConfirm);

  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={() => onOpenChange(false)}>
      <ModalShell>
        {/* Header */}
        <div className="flex flex-col" style={{ gap: "var(--spacing-3)" }}>
          <IconPlaceholder bgColor="var(--status-cancelled-bg)">
            <SvgIcon
              path={rejectSvgPaths.p14cf7c80}
              fill="var(--status-cancelled-text)"
              viewBox="0 0 26.6667 26.6667"
            />
          </IconPlaceholder>

          <span
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              fontFamily: FONT,
            }}
          >
            Would you like to reject the count?
          </span>
        </div>

        {/* Item info card */}
        <ItemInfoCard item={item} />

        {/* Radio options */}
        <div className="flex flex-col" style={{ gap: "var(--spacing-2)" }}>
          <ModalRadioOption
            selected={rejectOption === "recount"}
            onSelect={() => setRejectOption("recount")}
            label="Reject and recount"
            description="Sets this line item back to Pending in the current plan so it can be counted again."
          />
          <ModalRadioOption
            selected={rejectOption === "keep"}
            onSelect={() => setRejectOption("keep")}
            label="Reject and keep system count"
            description="Cancels the line item in the current plan to maintain the prior system count."
          />
          {item.type === "item" && (
            <ModalRadioOption
              selected={rejectOption === "newplan"}
              onSelect={() => setRejectOption("newplan")}
              label="Reject and create a new plan"
              description="Cancels the line item in the current plan, then creates a new cycle count plan for this item in all locations."
            />
          )}
        </div>

        {/* Rejected By — auto-filled with current user when "keep" is selected */}
        {isKeepSelected && (
          <div
            style={{
              background: "var(--surface-secondary)",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border)",
              padding: "var(--spacing-3)",
            }}
          >
            <div className="flex items-center" style={{ gap: "var(--spacing-3)" }}>
              <div className="flex flex-col" style={{ gap: "var(--spacing-1)" }}>
                <span
                  style={{
                    fontSize: "var(--text-caption)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--text-secondary)",
                    fontFamily: FONT,
                  }}
                >
                  Rejected By
                </span>
                <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{
                      width: "24px",
                      height: "24px",
                      background: "var(--primary-100)",
                      color: "var(--primary)",
                      fontSize: "var(--text-caption)",
                      fontWeight: "var(--font-weight-semibold)",
                      fontFamily: FONT,
                    }}
                  >
                    {CURRENT_USER.initials}
                  </div>
                  <span
                    style={{
                      fontSize: "var(--text-body-sm)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--foreground)",
                      fontFamily: FONT,
                    }}
                  >
                    {CURRENT_USER.name}
                  </span>
                  <span
                    className="chip chip-status"
                    style={{
                      background: "var(--surface-secondary)",
                      color: "var(--text-tertiary)",
                      borderColor: "var(--border)",
                    }}
                  >
                    You
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <ModalFooter
          onCancel={() => onOpenChange(false)}
          onConfirm={handleConfirm}
          confirmLabel="Confirm Count Rejection"
        />
      </ModalShell>
    </Dialog>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Recount Item Modal
// ═══════════════════════════════════════════════════════════════════════════════
export function RecountItemModal({
  open,
  onOpenChange,
  item,
  onConfirm: onConfirmProp,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: LineItem | null;
  onConfirm?: (item: LineItem, option: "same" | "new") => void;
}) {
  const [recountOption, setRecountOption] = useState<"same" | "new">("same");

  useEffect(() => {
    if (open) setRecountOption("same");
  }, [open]);

  const handleConfirm = useCallback(() => {
    onOpenChange(false);
    if (item) {
      onConfirmProp?.(item, recountOption);
      showToast({
        title: "Recount initiated",
        description:
          recountOption === "same"
            ? `${item.code} has been set back to Pending for recount.`
            : `${item.code} cancelled. New cycle count plan created.`,
        type: "success",
      });
    }
  }, [item, recountOption, onOpenChange, onConfirmProp]);

  useEnterKey(open, handleConfirm);

  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={() => onOpenChange(false)}>
      <ModalShell>
        {/* Header */}
        <div className="flex flex-col" style={{ gap: "var(--spacing-3)" }}>
          <IconPlaceholder bgColor="var(--recount-bg)">
            <RecountIcon />
          </IconPlaceholder>

          <span
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              fontFamily: FONT,
            }}
          >
            Select Item Recount Method
          </span>
        </div>

        {/* Item info card */}
        <ItemInfoCard item={item} />

        {/* Radio options */}
        <div className="flex flex-col" style={{ gap: "var(--spacing-2)" }}>
          <ModalRadioOption
            selected={recountOption === "same"}
            onSelect={() => setRecountOption("same")}
            label="Recount in this plan"
            description="Send this item back to Pending in the current plan so it can be counted again."
          />
          <ModalRadioOption
            selected={recountOption === "new"}
            onSelect={() => setRecountOption("new")}
            label="New Plan"
            description="Change the line item's status to Cancelled in the current plan, then create a new cycle count plan for it."
          />
        </div>

        {/* Footer */}
        <ModalFooter
          onCancel={() => onOpenChange(false)}
          onConfirm={handleConfirm}
          confirmLabel="Confirm Recount"
        />
      </ModalShell>
    </Dialog>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Recount Plan Modal
// ═══════════════════════════════════════════════════════════════════════════════
export function RecountPlanModal({
  open,
  onOpenChange,
  onConfirm: onConfirmProp,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm?: (option: "unapproved" | "full") => void;
}) {
  const [recountOption, setRecountOption] = useState<"unapproved" | "full">("unapproved");

  useEffect(() => {
    if (open) setRecountOption("unapproved");
  }, [open]);

  const handleConfirm = useCallback(() => {
    onOpenChange(false);
    onConfirmProp?.(recountOption);
    showToast({
      title: "Recount initiated",
      description: recountOption === "unapproved"
        ? "Unapproved line items have been reset for recount."
        : "A new plan has been created with all original items.",
      type: "success",
    });
  }, [recountOption, onOpenChange, onConfirmProp]);

  useEnterKey(open, handleConfirm);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <ModalShell>
        {/* Header */}
        <div className="flex flex-col" style={{ gap: "var(--spacing-3)" }}>
          <IconPlaceholder bgColor="var(--recount-bg)">
            <RecountIcon />
          </IconPlaceholder>

          <span
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              fontFamily: FONT,
            }}
          >
            Select Recount Plan Method
          </span>
        </div>

        {/* Radio options */}
        <div className="flex flex-col" style={{ gap: "var(--spacing-2)" }}>
          <ModalRadioOption
            selected={recountOption === "unapproved"}
            onSelect={() => setRecountOption("unapproved")}
            label="Unapproved Counts"
            description="Recount Line Items that are incomplete."
          />
          <ModalRadioOption
            selected={recountOption === "full"}
            onSelect={() => setRecountOption("full")}
            label="Full Plan"
            description="Create a new cycle count plan with all original items. The current plan will be closed as Closed (Incomplete)."
          />
        </div>

        {/* Footer */}
        <ModalFooter
          onCancel={() => onOpenChange(false)}
          onConfirm={handleConfirm}
          confirmLabel="Confirm Recount"
        />
      </ModalShell>
    </Dialog>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Edit Count Modal
// ═══════════════════════════════════════════════════════════════════════════════
export function EditCountModal({
  open,
  onOpenChange,
  item,
  onConfirm: onConfirmProp,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: LineItem | null;
  onConfirm?: (item: LineItem, newCount: number) => void;
}) {
  const [newCount, setNewCount] = useState("");

  useEffect(() => {
    if (open) setNewCount("");
  }, [open]);

  const handleConfirm = useCallback(() => {
    if (!newCount.trim()) return;
    onOpenChange(false);
    if (item) {
      const parsed = parseInt(newCount, 10);
      if (!isNaN(parsed)) {
        onConfirmProp?.(item, parsed);
      }
      showToast({
        title: "Count updated",
        description: `${item.code} submitted count has been updated to ${newCount} EA.`,
        type: "success",
      });
    }
  }, [item, newCount, onOpenChange, onConfirmProp]);

  useEnterKey(open, handleConfirm, !!newCount.trim());

  if (!item) return null;

  const numVal = newCount ? parseInt(newCount, 10) : null;
  const newVariance = numVal !== null && !isNaN(numVal) ? numVal - item.systemCount : null;

  return (
    <Dialog open={open} onOpenChange={() => onOpenChange(false)}>
      <ModalShell>
        {/* Header */}
        <div className="flex flex-col" style={{ gap: "var(--spacing-3)" }}>
          <IconPlaceholder bgColor="var(--status-in-progress-bg)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ display: "block" }}>
              <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                fill="var(--status-in-progress-text)"
              />
            </svg>
          </IconPlaceholder>

          <div className="flex flex-col" style={{ gap: "var(--spacing-1-5)" }}>
            <span
              style={{
                fontSize: "var(--text-h4)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)",
                fontFamily: FONT,
              }}
            >
              Edit Count for "{item.code}"
            </span>
            <span
              style={{
                fontSize: "var(--text-body-sm)",
                color: "var(--text-secondary)",
                fontFamily: FONT,
              }}
            >
              Change the submitted count for the selected {item.type === "location" ? "location" : "item"}.
            </span>
          </div>
        </div>

        {/* Current info */}
        <StatsCard>
          <StatCell
            label="Current Submitted Count"
            value={item.submittedCount !== null ? `${item.submittedCount.toLocaleString()} EA` : "—"}
          />
          <StatCell label="System Count" value={`${item.systemCount.toLocaleString()} EA`} />
        </StatsCard>

        {/* Input */}
        <div>
          <label
            style={{
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-secondary)",
              display: "block",
              marginBottom: "var(--spacing-1-5)",
              fontFamily: FONT,
            }}
          >
            Enter new count
          </label>
          <UnitInput
            value={newCount}
            onChange={(v) => setNewCount(v)}
            placeholder="Enter new count"
            width="100%"
            height="40px"
            variant={newVariance !== null && newVariance !== 0 ? "error" : "default"}
          />
          {newVariance !== null && newVariance !== 0 && (
            <span
              style={{
                fontSize: "var(--text-caption)",
                color: newVariance > 0 ? "var(--status-completed-text)" : "var(--status-cancelled-text)",
                marginTop: "var(--spacing-1)",
                display: "block",
                fontFamily: FONT,
              }}
            >
              {newVariance > 0 ? "+" : ""}{newVariance} EA difference from system count
            </span>
          )}
        </div>

        {/* Warning */}
        <WarningNote>
          <strong style={{ fontWeight: "var(--font-weight-semibold)" }}>Note: </strong>
          This only updates the submitted count for this cycle count. It will not change on-hand inventory until the results are reviewed and approved.
        </WarningNote>

        {/* Footer */}
        <ModalFooter
          onCancel={() => onOpenChange(false)}
          onConfirm={handleConfirm}
          confirmLabel="Update Submitted Count"
          confirmDisabled={!newCount.trim()}
        />
      </ModalShell>
    </Dialog>
  );
}