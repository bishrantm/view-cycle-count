import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RefreshCcw,
  Check,
  X,
  RotateCcw,
  Lock,
  Clock,
} from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
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
  type DiscrepancyItem,
  INITIAL_DISCREPANCIES,
  DISCREPANCY_ACTION_CONFIG,
  DISCREPANCY_PAGE_LABELS as LABELS,
} from "./data";
import {
  computeDiscrepancySummary,
  approveToastDescription,
  rejectToastDescription,
  recountToastDescription,
  formatVariance,
} from "./logic";

export default function DiscrepancyReview() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setItems] = useState<DiscrepancyItem[]>(INITIAL_DISCREPANCIES);
  const [showRecountDialog, setShowRecountDialog] = useState(false);
  const [recountTarget, setRecountTarget] = useState<string | null>(null);
  const [recountNote, setRecountNote] = useState("");

  const updateItem = (itemId: string, updates: Partial<DiscrepancyItem>) => {
    setItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, ...updates } : item)));
  };

  const handleApprove = (itemId: string) => {
    updateItem(itemId, { action: "approved" });
    showToast({ title: LABELS.approveToastTitle, description: approveToastDescription(itemId), type: "success" });
  };

  const handleReject = (itemId: string) => {
    updateItem(itemId, { action: "rejected" });
    showToast({ title: LABELS.rejectToastTitle, description: rejectToastDescription(itemId), type: "info" });
  };

  const handleRequestRecount = () => {
    if (recountTarget) {
      updateItem(recountTarget, { action: "recount", reviewNote: recountNote });
      setShowRecountDialog(false);
      setRecountNote("");
      showToast({ title: LABELS.recountToastTitle, description: recountToastDescription(recountTarget), type: "info" });
    }
  };

  const summary = computeDiscrepancySummary(items);

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
            aria-label={LABELS.backLabel}
          >
            <ArrowLeft size={18} style={{ color: "var(--foreground)" }} />
          </button>
          <div>
            <h4 style={{ margin: 0 }}>{LABELS.title} — {id}</h4>
            <p style={{ fontSize: "var(--text-label)", color: "var(--text-secondary)", margin: 0 }}>
              {items.length} differences to review
            </p>
          </div>
        </div>
        {summary.allResolved && (
          <Button onClick={() => navigate(`/count/${id}`)} className="gap-1.5">
            <Lock size={16} />
            {LABELS.commitButton}
          </Button>
        )}
      </div>

      {/* Summary Bar */}
      <div
        className="flex items-center gap-6 px-6 py-3 border-b border-border"
        style={{ background: "var(--background)" }}
      >
        <SummaryChip icon={Clock} label={LABELS.summaryBadgePending} count={summary.pending} color="var(--status-pending-text)" bg="var(--status-pending-bg)" />
        <SummaryChip icon={CheckCircle2} label={LABELS.summaryBadgeApproved} count={summary.approved} color="var(--status-completed-text)" bg="var(--status-completed-bg)" />
        <SummaryChip icon={XCircle} label={LABELS.summaryBadgeRejected} count={summary.rejected} color="var(--status-cancelled-text)" bg="var(--status-cancelled-bg)" />
        <SummaryChip icon={RefreshCcw} label={LABELS.summaryBadgeRecount} count={summary.recount} color="var(--status-in-progress-text)" bg="var(--status-in-progress-bg)" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          {/* Variance Cards */}
          <div className="flex flex-col gap-4">
            {items.map((item) => {
              const ac = DISCREPANCY_ACTION_CONFIG[item.action];
              const AcIcon = ac.icon;
              const varianceDisplay = formatVariance(item.variance);

              return (
                <div
                  key={item.id}
                  className="rounded-lg border overflow-hidden transition-shadow"
                  style={{
                    background: "var(--card)",
                    borderColor: item.action === "pending" ? "var(--status-awaiting-border)" : "var(--border)",
                  }}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="flex items-center justify-center rounded-md"
                        style={{
                          width: "44px",
                          height: "44px",
                          background: item.variance > 0 ? "var(--status-in-progress-bg)" : "var(--variance-negative-bg)",
                        }}
                      >
                        <AlertTriangle
                          size={20}
                          style={{
                            color: item.variance > 0 ? "var(--status-in-progress-text)" : "var(--variance-negative-text)",
                          }}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            style={{
                              fontSize: "var(--text-label)",
                              fontWeight: "var(--font-weight-semibold)",
                              color: "var(--foreground)",
                            }}
                          >
                            {item.id} — {item.name}
                          </span>
                          {/* Action Badge */}
                          <span
                            className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 border"
                            style={{
                              background: ac.bg,
                              color: ac.text,
                              borderColor: ac.border,
                              fontSize: "var(--text-caption)",
                              fontWeight: "var(--font-weight-medium)",
                            }}
                            role="status"
                            aria-label={`Review status: ${ac.label}`}
                          >
                            <AcIcon size={12} style={{ color: ac.text }} aria-hidden="true" />
                            {ac.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mt-1">
                          <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
                            {item.category} &middot; {item.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Variance Display */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4" style={{ minWidth: "240px" }}>
                        <VarianceField label={LABELS.expectedLabel} value={item.expectedQty} />
                        <VarianceField label={LABELS.countedLabel} value={item.countedQty} />
                        <div className="flex flex-col items-center">
                          <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
                            {LABELS.varianceLabel}
                          </span>
                          <span
                            style={{
                              fontSize: "var(--text-h6)",
                              fontWeight: "var(--font-weight-semibold)",
                              color: item.variance === 0
                                ? "var(--variance-match-text)"
                                : "var(--variance-negative-text)",
                            }}
                          >
                            {varianceDisplay}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      {item.action === "pending" && (
                        <div className="flex items-center gap-1.5">
                          <Button
                            size="sm"
                            onClick={() => handleApprove(item.id)}
                            className="gap-1"
                            style={{ background: "var(--status-completed-text)" }}
                          >
                            <Check size={14} />
                            {LABELS.approveButton}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReject(item.id)}
                            className="gap-1"
                          >
                            <X size={14} />
                            {LABELS.rejectButton}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setRecountTarget(item.id);
                              setShowRecountDialog(true);
                            }}
                            className="gap-1"
                          >
                            <RotateCcw size={14} />
                            {LABELS.recountButton}
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {item.action !== "pending" && (
                    <div
                      className="flex items-center gap-3 px-4 py-2.5 border-t border-border"
                      style={{ background: "var(--surface-secondary)" }}
                    >
                      <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
                        Counted by {item.countedBy} on {item.countedAt}
                      </span>
                      {item.reviewNote && (
                        <>
                          <span style={{ color: "var(--text-tertiary)" }}>&middot;</span>
                          <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
                            Note: {item.reviewNote}
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recount Dialog */}
      <Dialog open={showRecountDialog} onOpenChange={setShowRecountDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{LABELS.recountDialogTitle}</DialogTitle>
            <DialogDescription>
              {LABELS.recountDialogDescription.replace("{item}", recountTarget || "")}
              {` Add an optional note explaining why a recount is needed.`}
            </DialogDescription>
          </DialogHeader>
          <div className="py-2">
            <Textarea
              value={recountNote}
              onChange={(e) => setRecountNote(e.target.value)}
              placeholder={LABELS.recountDialogNotePlaceholder}
              rows={3}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRecountDialog(false)}>
              {LABELS.cancelLabel}
            </Button>
            <Button onClick={handleRequestRecount} className="gap-1.5">
              <RotateCcw size={14} />
              {LABELS.recountDialogConfirm}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Helper Components ──────────────────────────────────────────────────────
function SummaryChip({
  icon: Icon,
  label,
  count,
  color,
  bg,
}: {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  label: string;
  count: number;
  color: string;
  bg: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center justify-center rounded-full"
        style={{ width: "24px", height: "24px", background: bg }}
      >
        <Icon size={14} style={{ color }} />
      </div>
      <span style={{ fontSize: "var(--text-label)", color: "var(--text-secondary)" }}>
        {label}
      </span>
      <span
        style={{
          fontSize: "var(--text-label)",
          fontWeight: "var(--font-weight-semibold)",
          color: "var(--foreground)",
        }}
      >
        {count}
      </span>
    </div>
  );
}

function VarianceField({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
        {label}
      </span>
      <span
        style={{
          fontSize: "var(--text-h6)",
          fontWeight: "var(--font-weight-medium)",
          color: "var(--foreground)",
        }}
      >
        {value}
      </span>
    </div>
  );
}