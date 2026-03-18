/* eslint-disable -- force module reload v2 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  MoreHorizontal,
  MapPin,
  Package,
  AlertTriangle,
  CheckCircle2,
  FileText,
  XCircle,
  Search,
  Printer,
  ChevronDown,
  ChevronUp,
  Upload,
  Paperclip,
  Plus,
  RefreshCcw,
  User,
  Check,
  X,
  Info,
  LayoutGrid,
  Pencil,
  Trash2,
  Download,
  Calendar,
  Clock,
  Tags,
  FileSpreadsheet,
  FileImage,
  FileArchive,
  File,
  MoreVertical,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
// Dialog primitives used by detail-modals.tsx
import { StatusBadge, type CycleCountStatus } from "./status-badge";
import { BackButton } from "./back-button";
import { showToast } from "./custom-toast";
import { useCycleCountStore } from "./cycle-count-store";
import { allMockPeople, Checkbox as DSCheckbox, generateSerialUnits, type SerialUnit } from "./cycle-count-data";
import { FONT, HOVER } from "../../imports/shared-ui";
import {
  SERIAL_BARCODE_ICON,
  LINK_PILL_VARIANTS,
  PILL_BASE_STYLE,
} from "../../imports/attachment-config";
import { AssigneeSelector, useAssigneeState, getPersonsById } from "./assignee-selector";
import { UnitInput } from "./unit-input";
import { ViewUnitsModal, SerialVerificationModal } from "./detail-serial-modals";
import {
  CancelPlanModal,
  ApproveAllModal,
  ApproveItemModal,
  RejectItemModal,
  RecountItemModal,
  RecountPlanModal,
  EditCountModal,
} from "./detail-modals";
import {
  generateDetailSidebar,
  generateDetailLineItems,
  generateDetailNotes,
  generateDetailAttachments,
  DETAIL_ASSIGNEE_IDS,
  DETAIL_TAGS,
  type DetailLineItem,
  type DetailLineItemStatus,
  type DetailSidebarEntry,
  type DetailNoteEntry,
  type DetailAttFileType,
  type DetailAttachment,
} from "./mock-registry";

// ─── Types ──────────────────────────────────────────────────────────────────
type DetailTab = "overview" | "entry" | "notes";

// Use registry types throughout — local aliases for brevity
type LineItemStatus = DetailLineItemStatus;
type LineItem = DetailLineItem;
type SidebarEntry = DetailSidebarEntry;
type NoteEntry = DetailNoteEntry;
type AttFileType = DetailAttFileType;
type AttachmentItem = DetailAttachment;

// ─── Mock Data (wired to mock-registry) ─────────────────────────────────────
const DEFAULT_ASSIGNEE_IDS = DETAIL_ASSIGNEE_IDS;

const MOCK_TAGS = DETAIL_TAGS;
const buildMockSidebar = generateDetailSidebar;
const buildMockLineItems = generateDetailLineItems;
const MOCK_NOTES: NoteEntry[] = generateDetailNotes();
const MOCK_ATTACHMENTS: AttachmentItem[] = generateDetailAttachments();

/* ── Thumbnail colour palette per file type (soft pastels) ── */
const ATT_THUMB: Record<AttFileType, { bg: string; color: string; Icon: React.FC<{ size?: number; style?: React.CSSProperties }> }> = {
  pdf:  { bg: "var(--file-pdf-bg)", color: "var(--file-pdf-color)", Icon: FileText },
  xlsx: { bg: "var(--file-xlsx-bg)", color: "var(--file-xlsx-color)", Icon: FileSpreadsheet },
  csv:  { bg: "var(--file-csv-bg)", color: "var(--file-csv-color)", Icon: FileSpreadsheet },
  docx: { bg: "var(--file-docx-bg)", color: "var(--file-docx-color)", Icon: FileText },
  png:  { bg: "var(--file-image-bg)", color: "var(--file-image-color)", Icon: FileImage },
  jpg:  { bg: "var(--file-image-bg)", color: "var(--file-image-color)", Icon: FileImage },
  zip:  { bg: "var(--file-archive-bg)", color: "var(--file-archive-color)", Icon: FileArchive },
};

function formatAttDate(d: string, t: string): string {
  try {
    const [mm, dd, yyyy] = d.split("/");
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${parseInt(dd, 10)} ${months[parseInt(mm, 10) - 1]} ${yyyy}, ${t.toLowerCase()}`;
  } catch { return `${d}, ${t}`; }
}

// ─── Status Configs for Line Items ──────────────────────────────────────────
const LINE_STATUS_CONFIG: Record<LineItemStatus, { label: string; bg: string; text: string; border: string }> = {
  pending: { label: "Pending", bg: "var(--status-pending-bg)", text: "var(--status-pending-text)", border: "var(--status-pending-border)" },
  in_progress: { label: "In Progress", bg: "var(--status-in-progress-bg)", text: "var(--status-in-progress-text)", border: "var(--status-in-progress-border)" },
  completed: { label: "Completed", bg: "var(--status-completed-bg)", text: "var(--status-completed-text)", border: "var(--status-completed-border)" },
  completed_approved: { label: "Completed", bg: "var(--status-completed-bg)", text: "var(--status-completed-text)", border: "var(--status-completed-border)" },
  awaiting_approval: { label: "Awaiting Approval", bg: "var(--status-awaiting-bg)", text: "var(--status-awaiting-text)", border: "var(--status-awaiting-border)" },
  cancelled: { label: "Cancelled", bg: "var(--status-cancelled-bg)", text: "var(--status-cancelled-text)", border: "var(--status-cancelled-border)" },
};

/** Shared grid layout for data rows — fixed 4 columns so cells fill the width */
const DATA_GRID_STYLE: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "var(--spacing-4) var(--spacing-5)",
  alignItems: "start",
};

// ═══════════════════════════════════════════════════════════════════════════════
// Main Component
// ═══════════════════════════════════════════════════════════════════════════════
export default function CycleCountDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getCycleCount, updateCycleCount } = useCycleCountStore();
  const cc = getCycleCount(id || "");

  const [activeTab, setActiveTab] = useState<DetailTab>("overview");
  const [selectedSidebarId, setSelectedSidebarId] = useState<string>("");
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [isDescOverflowing, setIsDescOverflowing] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);

  // Assignee state (uses global assignee selector)
  const assigneeState = useAssigneeState(DEFAULT_ASSIGNEE_IDS, "p1");

  // Dialogs
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showRecountPlanDialog, setShowRecountPlanDialog] = useState(false);
  const [showApproveAllDialog, setShowApproveAllDialog] = useState(false);
  const [approveItemDialog, setApproveItemDialog] = useState<LineItem | null>(null);
  const [rejectItemDialog, setRejectItemDialog] = useState<LineItem | null>(null);
  const [recountItemDialog, setRecountItemDialog] = useState<LineItem | null>(null);
  const [editCountDialog, setEditCountDialog] = useState<LineItem | null>(null);
  const [viewUnitsItem, setViewUnitsItem] = useState<LineItem | null>(null);
  const [serialVerifyItem, setSerialVerifyItem] = useState<LineItem | null>(null);
  // Options state managed inside modal components

  // ─── Line item status overrides (for approve / reject / recount actions) ───
  const [itemOverrides, setItemOverrides] = useState<Record<string, Partial<LineItem>>>({});
  // Clear overrides when sidebar selection changes (mock IDs repeat across entities)
  useEffect(() => { setItemOverrides({}); }, [selectedSidebarId]);

  const handleApproveItem = useCallback((item: LineItem) => {
    setItemOverrides((prev) => ({
      ...prev,
      [item.id]: {
        status: "completed_approved" as LineItemStatus,
        adjustedCount: item.submittedCount,
        approvedBy: "James Stewart",
        completedOn: item.completedOn ?? new Date().toLocaleString("en-US", { month: "2-digit", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true }),
      },
    }));
  }, []);

  // Count Entry Mode
  const [entryValues, setEntryValues] = useState<Record<string, string>>({});

  // Notes feed state
  const [notes, setNotes] = useState<NoteEntry[]>(MOCK_NOTES);
  const [newNoteText, setNewNoteText] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);

  const handleAddNote = useCallback(() => {
    const trimmed = newNoteText.trim();
    if (!trimmed) return;
    const now = new Date();
    const formatted = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) + " " + now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    setNotes((prev) => [
      { id: `n-${Date.now()}`, text: trimmed, author: "You", avatar: null, timestamp: formatted },
      ...prev,
    ]);
    setNewNoteText("");
    setIsAddingNote(false);
  }, [newNoteText]);

  // Sidebar pointer tracking (refs declared early, logic after activeSidebarId)
  const sidebarScrollRef = useRef<HTMLDivElement>(null);
  const [pointerPos, setPointerPos] = useState<{ top: number; visible: boolean }>({ top: 0, visible: false });

  // Build data
  const countBasis = cc?.countBasis || "Item";
  const sidebar = useMemo(() => buildMockSidebar(countBasis), [countBasis]);
  const activeSidebarId = selectedSidebarId || sidebar[0]?.id || "";
  const activeSidebar = sidebar.find((s) => s.id === activeSidebarId);
  // Derive parent serialization from sidebar tracking type — applies globally
  // for Item-based counts where the selected item is Serialized or Lot (Serialized)
  const parentTrackingType = activeSidebar?.trackingType;
  const rawLineItems = useMemo(() => buildMockLineItems(activeSidebarId, countBasis, parentTrackingType), [activeSidebarId, countBasis, parentTrackingType]);

  const handleApproveAll = useCallback(() => {
    setItemOverrides((prev) => {
      const next = { ...prev };
      rawLineItems.forEach((li) => {
        if (li.status === "awaiting_approval" && !next[li.id]) {
          next[li.id] = {
            status: "completed_approved" as LineItemStatus,
            adjustedCount: li.submittedCount,
            approvedBy: "James Stewart",
            completedOn: li.completedOn ?? new Date().toLocaleString("en-US", { month: "2-digit", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true }),
          };
        }
      });
      return next;
    });
  }, [rawLineItems]);

  // ─── Edit Count handler ───────────────────────────────────────────────
  const handleEditCount = useCallback((item: LineItem, newCount: number) => {
    const newVariance = newCount - item.systemCount;
    setItemOverrides((prev) => ({
      ...prev,
      [item.id]: {
        ...prev[item.id],
        submittedCount: newCount,
        variance: newVariance,
        status: (item.status === "completed" ? "awaiting_approval" : item.status) as LineItemStatus,
      },
    }));
  }, []);

  // ─── Reject Item handler ──────────────────────────────────────────────
  const handleRejectItem = useCallback((item: LineItem, option: "recount" | "keep" | "newplan") => {
    if (option === "recount") {
      setItemOverrides((prev) => ({
        ...prev,
        [item.id]: {
          status: "pending" as LineItemStatus,
          submittedCount: null,
          variance: null,
          countedBy: null,
          countedByAvatar: null,
          startedOn: null,
          completedOn: null,
          approvedBy: undefined,
        },
      }));
    } else {
      setItemOverrides((prev) => ({
        ...prev,
        [item.id]: {
          status: "cancelled" as LineItemStatus,
          cancelledBy: "James Stewart",
        },
      }));
    }
  }, []);

  // ─── Recount Item handler ─────────────────────────────────────────────
  const handleRecountItem = useCallback((item: LineItem, option: "same" | "new") => {
    if (option === "same") {
      setItemOverrides((prev) => ({
        ...prev,
        [item.id]: {
          status: "pending" as LineItemStatus,
          submittedCount: null,
          variance: null,
          countedBy: null,
          countedByAvatar: null,
          startedOn: null,
          completedOn: null,
          approvedBy: undefined,
        },
      }));
    } else {
      setItemOverrides((prev) => ({
        ...prev,
        [item.id]: {
          status: "cancelled" as LineItemStatus,
          cancelledBy: "James Stewart",
        },
      }));
    }
  }, []);

  // ─── Recount Plan handler ─────────────────────────────────────────────
  const handleRecountPlan = useCallback((option: "unapproved" | "full") => {
    if (option === "unapproved") {
      setItemOverrides((prev) => {
        const next = { ...prev };
        rawLineItems.forEach((li) => {
          if (li.status !== "completed" && li.status !== "completed_approved" && li.status !== "cancelled") {
            next[li.id] = {
              status: "pending" as LineItemStatus,
              submittedCount: null,
              variance: null,
              countedBy: null,
              countedByAvatar: null,
              startedOn: null,
              completedOn: null,
              approvedBy: undefined,
            };
          }
        });
        return next;
      });
    } else {
      updateCycleCount(cc.id, { status: "closed_incomplete" });
    }
  }, [rawLineItems, updateCycleCount, cc.id]);

  const planCancelled = cc.status === "cancelled";
  const planClosedIncomplete = cc.status === "closed_incomplete";
  // When the plan is cancelled, force all line items to cancelled status
  // When closed_incomplete: completed/completed_approved stay, cancelled stays, rest become cancelled
  const lineItems = useMemo(() => {
    // First apply user-driven overrides (approve, reject, etc.)
    const withOverrides = rawLineItems.map((li) => {
      const override = itemOverrides[li.id];
      return override ? { ...li, ...override } : li;
    });
    if (planCancelled) {
      return withOverrides.map((li) => ({ ...li, status: "cancelled" as LineItemStatus }));
    }
    if (planClosedIncomplete) {
      return withOverrides.map((li) => {
        if (li.status === "completed" || li.status === "completed_approved" || li.status === "cancelled") {
          return li;
        }
        return { ...li, status: "cancelled" as LineItemStatus };
      });
    }
    return withOverrides;
  }, [rawLineItems, planCancelled, planClosedIncomplete, itemOverrides]);

  const filteredSidebar = useMemo(() => {
    if (!sidebarSearch) return sidebar;
    const q = sidebarSearch.toLowerCase();
    return sidebar.filter((s) => s.code.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));
  }, [sidebar, sidebarSearch]);

  const hasDiscrepancy = lineItems.some((li) => li.variance !== null && li.variance !== 0);
  const awaitingCount = lineItems.filter((li) => li.status === "awaiting_approval").length;

  // Stats
  const totalLineItems = lineItems.length;
  const completedLineItems = lineItems.filter((li) => li.status === "completed" || li.status === "completed_approved").length;
  const pendingLineItems = lineItems.filter((li) => li.status === "pending").length;
  const awaitingLineItems = lineItems.filter((li) => li.status === "awaiting_approval").length;

  // Sidebar pointer position tracker
  const updatePointer = useCallback(() => {
    const scrollEl = sidebarScrollRef.current;
    if (!scrollEl) return;
    const selectedBtn = scrollEl.querySelector(`[data-sidebar-id="${activeSidebarId}"]`) as HTMLElement | null;
    if (!selectedBtn) {
      setPointerPos((p) => (p.visible ? { top: 0, visible: false } : p));
      return;
    }
    const scrollRect = scrollEl.getBoundingClientRect();
    const btnRect = selectedBtn.getBoundingClientRect();
    const centerY = btnRect.top + btnRect.height / 2 - scrollRect.top;
    const isVisible = centerY > 6 && centerY < scrollRect.height - 6;
    setPointerPos({ top: centerY, visible: isVisible });
  }, [activeSidebarId]);

  useEffect(() => {
    // Small RAF delay to ensure DOM has updated after selection change
    const rafId = requestAnimationFrame(updatePointer);
    const scrollEl = sidebarScrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", updatePointer, { passive: true });
    }
    return () => {
      cancelAnimationFrame(rafId);
      scrollEl?.removeEventListener("scroll", updatePointer);
    };
  }, [updatePointer]);

  // Detect if description text overflows its single-line container
  useEffect(() => {
    const el = descRef.current;
    if (el && !descriptionExpanded) {
      setIsDescOverflowing(el.scrollWidth > el.clientWidth);
    }
  }, [descriptionExpanded]);

  if (!cc) {
    return (
      <div className="flex flex-col items-center justify-center" style={{ gap: "var(--spacing-4)", minHeight: "400px" }}>
        <XCircle size={40} style={{ color: "var(--text-tertiary)" }} />
        <p style={{ fontSize: "var(--text-h6)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)" }}>Cycle count not found</p>
        <Button variant="outline" onClick={() => navigate("/")}>
          <ArrowLeft size={16} />
          Back to list
        </Button>
      </div>
    );
  }

  const tabs: { id: DetailTab; label: string }[] = [
    { id: "overview", label: "Count Overview" },
    { id: "entry", label: "Count Entry" },
    { id: "notes", label: "Notes & Attachments" },
  ];

  return (
    <div className="flex flex-col" style={{ padding: "var(--spacing-5)", gap: "var(--spacing-4)", height: "100%", overflow: "hidden" }}>
      {/* ═══ Unified Plan Details + Tabs Card ══════════════════════════════ */}
      <div
        className="shrink-0"
        style={{
          background: "var(--card)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          boxShadow: "var(--elevation-card)",
          overflow: "hidden",
        }}
      >
        {/* Header row: Back button + ID + Status + Priority + Tags count + Assignees + Actions */}
        <div className="flex items-center justify-between" style={{ padding: "var(--spacing-3) var(--spacing-6) var(--spacing-1)" }}>
          <div className="flex items-center" style={{ gap: "var(--spacing-3)" }}>
            <BackButton onClick={() => navigate("/")} title="Back to Cycle Counts" />
            <span style={{ fontSize: "var(--text-h5)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", fontFamily: FONT }}>{cc.id}</span>
            <StatusBadge status={cc.status} size="sm" />
            {cc.priority !== "Standard" && (() => {
              const isHigh = cc.priority === "High";
              const dotColor = isHigh ? "var(--destructive)" : "var(--text-tertiary)";
              const pillBg = isHigh ? "var(--status-cancelled-bg)" : "var(--secondary)";
              const pillText = isHigh ? "var(--status-cancelled-text)" : "var(--text-secondary)";
              const pillBorder = isHigh ? "var(--status-cancelled-border)" : "var(--border)";
              const pillLabel = isHigh ? "High Priority" : "Low Priority";
              return (
                <span
                  className="chip chip-status"
                  style={{ background: pillBg, color: pillText, borderColor: pillBorder }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "var(--radius-full)", background: dotColor, flexShrink: 0 }} />
                  {pillLabel}
                </span>
              );
            })()}
            {/* Tags count with icon + hover popover */}
            {MOCK_TAGS.length > 0 && (
              <div className="relative" style={{ display: "inline-flex" }}>
                <span
                  className="chip chip-status peer"
                  style={{
                    background: "var(--surface-secondary)",
                    color: "var(--text-secondary)",
                    borderColor: "var(--border)",
                    cursor: "default",
                  }}
                >
                  <Tags size={12} style={{ color: "var(--text-tertiary)" }} />
                  {MOCK_TAGS.length} Tags
                </span>
                {/* Hover popover — flex-wrap so tags size naturally */}
                <div
                  className="absolute left-0 top-full hidden peer-hover:flex hover:flex flex-wrap"
                  style={{
                    marginTop: "var(--spacing-1)",
                    padding: "var(--spacing-2) var(--spacing-3)",
                    background: "var(--card)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--elevation-card)",
                    zIndex: 20,
                    gap: "var(--spacing-1-5)",
                    maxWidth: "320px",
                  }}
                >
                  {MOCK_TAGS.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "var(--spacing-0-5) var(--spacing-2)",
                        borderRadius: "var(--radius-sm)",
                        fontSize: "var(--text-caption)",
                        fontWeight: "var(--font-weight-medium)",
                        background: "var(--surface-secondary)",
                        color: "var(--foreground)",
                        border: "1px solid var(--border)",
                        fontFamily: FONT,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: action buttons (pulled out of dropdown per reference) */}
          <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
            {cc.status !== "cancelled" && cc.status !== "closed_incomplete" && (
              <Button variant="outline" onClick={() => setShowCancelDialog(true)} className="gap-1.5">
                <XCircle size={14} />
                Cancel Plan
              </Button>
            )}
            {cc.status !== "cancelled" && cc.status !== "closed_incomplete" && (
              <Button variant="outline" onClick={() => setShowRecountPlanDialog(true)} className="gap-1.5">
                <RefreshCcw size={14} />
                Recount Plan
              </Button>
            )}
            <Button variant="outline" className="gap-1.5">
              <Printer size={14} />
              Print Count Sheet
            </Button>
            {cc.status !== "cancelled" && cc.status !== "closed_incomplete" && cc.status !== "completed" && cc.status !== "committed" && (
              <Button variant="outline" className="gap-1.5" onClick={() => {
                showToast({ title: "Edit Plan", description: `Editing ${cc.id} plan details.`, type: "info" });
              }}>
                <Pencil size={14} />
                Edit Plan
              </Button>
            )}
            {cc.status === "awaiting_approval" && (
              <Button onClick={() => setShowApproveAllDialog(true)} className="gap-1.5">
                <CheckCircle2 size={14} />
                Approve All Counts
              </Button>
            )}
          </div>
        </div>

        {/* Description — "more" only shown when text actually overflows */}
        <div style={{ paddingTop: "0", paddingRight: "var(--spacing-6)", paddingBottom: "var(--spacing-3)", paddingLeft: "calc(var(--spacing-6) + 36px + var(--spacing-3))" }}>
          {descriptionExpanded ? (
            <div>
              <p style={{ fontSize: "var(--text-body-sm)", color: "var(--text-secondary)", margin: 0, fontFamily: FONT, lineHeight: "var(--leading-body)" }}>
                {cc.description}
                <button
                  onClick={() => setDescriptionExpanded(false)}
                  className="inline-flex items-center"
                  style={{
                    gap: "var(--spacing-0-5)",
                    marginLeft: "var(--spacing-1-5)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: "var(--text-body-sm)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--primary)",
                    fontFamily: FONT,
                    verticalAlign: "baseline",
                  }}
                >
                  Show less
                  <ChevronUp size={12} />
                </button>
              </p>
            </div>
          ) : (
            <p
              ref={descRef}
              style={{
                fontSize: "var(--text-body-sm)",
                color: "var(--text-secondary)",
                margin: 0,
                fontFamily: FONT,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {cc.description}
              {isDescOverflowing && (
                <button
                  onClick={() => setDescriptionExpanded(true)}
                  style={{
                    marginLeft: "var(--spacing-1-5)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: "var(--text-body-sm)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--primary)",
                    fontFamily: FONT,
                  }}
                >
                  more
                </button>
              )}
            </p>
          )}
        </div>

        {/* ─── Tabs (inside same card) ──────────────────────────────────────── */}
        <div className="flex items-center" style={{ padding: "0 var(--spacing-6)", gap: "var(--spacing-6)", borderTop: "1px solid var(--border)" }} role="tablist">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className="relative transition-colors"
                style={{
                  paddingBottom: "var(--spacing-2-5)",
                  paddingTop: "var(--spacing-3)",
                  cursor: "pointer",
                  color: isActive ? "var(--primary)" : "var(--text-secondary)",
                  fontWeight: isActive ? "var(--font-weight-semibold)" : "var(--font-weight-medium)",
                  fontSize: "var(--text-label)",
                  fontFamily: FONT,
                  background: "transparent",
                  border: "none",
                }}
              >
                {tab.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0"
                    style={{ height: "2px", background: "var(--primary)", borderRadius: "1px 1px 0 0" }}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ═══ Content + Right Detail Sidebar Row ═════════════════════════════ */}
      <div className="flex flex-1" style={{ gap: "var(--spacing-4)", minHeight: 0 }}>

      {/* ═══ Content Area Card (left) ════════════════════════════════════════ */}
      <div
        className="flex flex-col flex-1"
        style={{
          background: "var(--card)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          boxShadow: "var(--elevation-card)",
          overflow: "hidden",
          minHeight: "0",
        }}
      >

      {/* ─── Content Area ─────────────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar — visible on overview & entry tabs only, collapsible */}
        {activeTab !== "notes" && (
        <div
          className="flex flex-col"
          style={{
            width: "var(--detail-sidebar-width, 300px)",
            minWidth: "var(--detail-sidebar-width, 300px)",
            background: "var(--background)",
            borderRight: "1px solid var(--border)",
          }}
        >
            {/* Sidebar header — height matched to content header */}
            <div className="flex items-center" style={{ padding: "18px 12px", borderBottom: "1px solid var(--border)" }}>
              <div
                className="flex items-center flex-1"
                style={{
                  background: "var(--input-background)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "var(--spacing-1-5) var(--spacing-3)",
                  gap: "var(--spacing-2)",
                  height: "32px",
                }}
              >
                <Search size={14} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                <input
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  placeholder="Search category, items and locations"
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    flex: 1,
                    fontSize: "var(--text-caption)",
                    color: "var(--foreground)",
                  }}
                />
              </div>
            </div>

            {/* Sidebar items — wrapper is position:relative so the pointer can sit outside the scroll clip */}
            <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
              <div ref={sidebarScrollRef} className="scroll-overlay" style={{ height: "100%" }}>
                {filteredSidebar.map((entry) => {
                  const isSelected = entry.id === activeSidebarId;
                  return (
                    <button
                      key={entry.id}
                      data-sidebar-id={entry.id}
                      onClick={() => setSelectedSidebarId(entry.id)}
                      className="flex items-start w-full text-left"
                      style={{
                        position: "relative",
                        padding: isSelected ? "var(--spacing-2-5) var(--spacing-3) var(--spacing-2-5) calc(var(--spacing-3) - 1px)" : "var(--spacing-2-5) var(--spacing-3)",
                        gap: "var(--spacing-2-5)",
                        cursor: "pointer",
                        background: isSelected ? "var(--primary-50)" : "transparent",
                        borderTop: "none",
                        borderRight: isSelected ? "none" : "none",
                        borderBottom: isSelected ? "1px solid var(--primary-100)" : "1px solid var(--border)",
                        borderLeftWidth: isSelected ? "3px" : "0px",
                        borderLeftStyle: "solid",
                        borderLeftColor: "var(--primary)",
                        transition: "background 0.15s ease, border-color 0.15s ease",
                        ...(isSelected ? { boxShadow: "inset 0 0 0 1px var(--primary-100)" } : {}),
                      }}
                      onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = HOVER.tableRow; }}
                      onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.background = isSelected ? "var(--primary-50)" : "transparent"; }}
                    >
                      {/* Thumbnail / icon fallback */}
                      <div
                        className="flex items-center justify-center shrink-0 overflow-hidden"
                        style={{
                          width: "36px",
                          height: "36px",
                          minWidth: "36px",
                          borderRadius: "var(--radius-sm)",
                          background: isSelected ? "var(--primary-100)" : "var(--surface-secondary)",
                          border: isSelected ? "1.5px solid var(--primary-200)" : "1px solid var(--border)",
                          transition: "background 0.15s ease, border-color 0.15s ease",
                        }}
                      >
                        {entry.image ? (
                          <img
                            src={entry.image}
                            alt={entry.code}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "inherit",
                            }}
                          />
                        ) : entry.icon === "location" ? (
                          <MapPin size={16} style={{ color: isSelected ? "var(--primary)" : "var(--text-secondary)" }} />
                        ) : entry.icon === "category" ? (
                          <LayoutGrid size={16} style={{ color: isSelected ? "var(--primary)" : "var(--text-secondary)" }} />
                        ) : (
                          <Package size={16} style={{ color: isSelected ? "var(--primary)" : "var(--text-secondary)" }} />
                        )}
                      </div>
                      <div className="flex flex-col" style={{ flex: 1, minWidth: 0, gap: "var(--spacing-0-5)" }}>
                        <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
                          <span
                            style={{
                              fontSize: "var(--text-label)",
                              fontWeight: "var(--font-weight-semibold)",
                              color: isSelected ? "var(--primary)" : "var(--foreground)",
                            }}
                          >
                            {entry.code}
                          </span>
                          {entry.itemCount !== undefined && (
                            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>
                              {entry.itemCount} {countBasis === "Item" ? "locations" : "items"}
                            </span>
                          )}
                        </div>
                        <span
                          style={{
                            fontSize: "var(--text-caption)",
                            color: "var(--text-secondary)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {entry.description}
                        </span>
                        {entry.trackingType && (
                          <span
                            className="chip chip-xs self-start"
                            style={{
                              background: isSelected ? "var(--primary-100)" : "var(--surface-secondary)",
                              color: isSelected ? "var(--primary-700)" : "var(--text-secondary)",
                              border: isSelected ? "1px solid var(--primary-200)" : "1px solid var(--border)",
                              fontFamily: FONT,
                            }}
                          >
                            {entry.trackingType}
                          </span>
                        )}
                        {entry.discrepancy && (
                          <span
                            style={{
                              fontSize: "var(--text-xs)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--status-awaiting-text)",
                            }}
                          >
                            Discrepancy Identified
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right-pointing caret on selected item */}
              {pointerPos.visible && (
                <div
                  style={{
                    position: "absolute",
                    top: pointerPos.top,
                    right: "-1px",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    pointerEvents: "none",
                    transition: "top 0.15s ease-out",
                    filter: "drop-shadow(1px 0 2px rgba(0,0,0,0.06))",
                  }}
                >
                  {/* Outer border triangle */}
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" style={{ display: "block" }}>
                    <path d="M0 0L9 9L0 18" fill="var(--primary-50)" />
                    <path d="M0 0L9 9L0 18" fill="none" stroke="var(--primary-200)" strokeWidth="1" />
                    {/* Cover the left stroke so it blends into the sidebar */}
                    <line x1="0" y1="0" x2="0" y2="18" stroke="var(--primary-50)" strokeWidth="2" />
                  </svg>
                </div>
              )}
            </div>


          </div>
        )}

          {/* Main Content — changes per tab */}
          {activeTab === "overview" || activeTab === "entry" ? (
          <div className="flex-1 scroll-overlay" style={{ background: "var(--surface-secondary)" }}>
            {/* Content header — visually connected to sidebar selection */}
            <div
              className="flex flex-col"
              style={{
                borderBottom: "1px solid var(--border)",
                background: "var(--background)",
              }}
            >
              {/* Row 1: Product info + units-to-count badge */}
              <div
                className="flex items-center justify-between"
                style={{ padding: "var(--spacing-2-5) var(--spacing-3) 0" }}
              >
                <div className="flex items-center" style={{ gap: "var(--spacing-2-5)" }}>
                  {/* Thumbnail */}
                  {activeSidebar?.image ? (
                    <img
                      src={activeSidebar.image}
                      alt={activeSidebar.code}
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "var(--radius-md)",
                        objectFit: "cover",
                        flexShrink: 0,
                        border: "1.5px solid var(--primary-200)",
                      }}
                    />
                  ) : (
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "var(--radius-md)",
                        background: "var(--primary-50)",
                        border: "1.5px solid var(--primary-200)",
                        flexShrink: 0,
                      }}
                    >
                      {countBasis === "Location" ? (
                        <MapPin size={18} style={{ color: "var(--primary)" }} />
                      ) : countBasis === "Category" ? (
                        <LayoutGrid size={18} style={{ color: "var(--primary)" }} />
                      ) : (
                        <Package size={18} style={{ color: "var(--primary)" }} />
                      )}
                    </div>
                  )}
                  <div style={{ minWidth: 0 }}>
                    <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
                      <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", fontFamily: FONT }}>
                        {activeSidebar?.code}
                      </span>
                      {activeSidebar?.trackingType && (
                        <span
                          className="chip chip-xs"
                          style={{
                            background: "var(--surface-secondary)",
                            color: "var(--text-secondary)",
                            borderColor: "var(--border)",
                            fontFamily: FONT,
                          }}
                        >
                          {activeSidebar.trackingType}
                        </span>
                      )}

                    </div>
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--text-secondary)",
                        fontFamily: FONT,
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "360px",
                        marginTop: "2px",
                      }}
                    >
                      {activeSidebar?.description}
                    </span>
                  </div>
                </div>

                {/* Units to count badge */}
                {activeSidebar?.totalUnits != null && (
                  <span
                    className="chip"
                    style={{
                      background: "var(--surface-secondary)",
                      borderColor: "var(--border)",
                      fontSize: "var(--text-caption)",
                      fontFamily: FONT,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)" }}>
                      {activeSidebar.totalUnits.toLocaleString()} {activeSidebar.uom || "EA"}
                    </span>
                    <span style={{ color: "var(--text-secondary)", fontWeight: "var(--font-weight-normal)" }}>
                      to Count
                    </span>
                  </span>
                )}
              </div>

              {/* Row 2: Action buttons */}
              <div
                className="flex items-center justify-end"
                style={{
                  padding: "var(--spacing-2) var(--spacing-3)",
                  gap: "var(--spacing-2)",
                }}
              >
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Printer size={14} />
                  Print Item Count Sheet
                </Button>
                {activeTab === "entry" && !planCancelled && !planClosedIncomplete && (
                  <Button
                    size="sm"
                    className="gap-1.5"
                    onClick={() =>
                      showToast({ title: "Count submitted", description: "Your count has been submitted for review.", type: "success" })
                    }
                  >
                    Submit Count
                  </Button>
                )}
              </div>
            </div>

            {/* Line Items */}
            <div style={{ padding: "var(--spacing-3) var(--spacing-4)" }}>
              {/* Section label — anchors the line items to the selected sidebar entry */}
              <div
                className="flex items-center justify-between"
                style={{
                  marginBottom: "var(--spacing-3)",
                }}
              >
                <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
                  <span
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--text-secondary)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      fontFamily: FONT,
                    }}
                  >
                    {countBasis === "Item" ? "Locations" : "Items"}
                  </span>
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      minWidth: "22px",
                      height: "22px",
                      padding: "0 var(--spacing-1-5)",
                      borderRadius: "var(--radius-full)",
                      background: "var(--primary-50)",
                      fontSize: "var(--text-caption)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--primary)",
                      fontFamily: FONT,
                      lineHeight: "var(--leading-none)",
                    }}
                  >
                    {totalLineItems}
                  </span>
                </div>
                {awaitingLineItems > 0 && (
                  <span
                    className="chip chip-status"
                    style={{
                      background: "var(--status-awaiting-bg)",
                      color: "var(--status-awaiting-text)",
                      borderColor: "var(--status-awaiting-border)",
                    }}
                  >
                    {awaitingLineItems} awaiting approval
                  </span>
                )}
              </div>
              {activeTab === "overview" ? (
                <div className="flex flex-col" style={{ gap: "var(--spacing-3)" }}>
                  {lineItems.map((li) => (
                    <LineItemCard
                      key={li.id}
                      item={li}
                      planCancelled={planCancelled || planClosedIncomplete}
                      onApprove={() => setApproveItemDialog(li)}
                      onReject={() => setRejectItemDialog(li)}
                      onRecount={() => setRecountItemDialog(li)}
                      onEditCount={() => { setEditCountDialog(li); }}
                      onViewUnits={() => setViewUnitsItem(li)}
                    />
                  ))}
                </div>
              ) : (
                /* Count Entry Mode */
                <div className="flex flex-col" style={{ borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", overflow: "hidden", boxShadow: "var(--elevation-xs)" }}>
                  {/* Table Header */}
                  <div
                    className="flex items-center"
                    style={{
                      background: "var(--surface-secondary)",
                      borderBottom: "1px solid var(--border)",
                      padding: "0 var(--spacing-4)",
                      height: "44px",
                    }}
                  >
                    <span style={{ width: "40px", fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-semibold)", color: "var(--text-secondary)", fontFamily: "var(--font-family)" }}>#</span>
                    <span style={{ flex: 1, fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-semibold)", color: "var(--text-secondary)", fontFamily: "var(--font-family)" }} className="flex items-center">
                      {countBasis === "Item" ? "Location" : "Item"}
                      <span
                        className="chip chip-pill inline-flex items-center justify-center"
                        style={{
                          marginLeft: "var(--spacing-2)",
                          padding: "0 var(--spacing-2)",
                          fontSize: "var(--text-caption)",
                          fontWeight: "var(--font-weight-medium)",
                          background: activeTab === "entry" ? "var(--status-in-progress-bg)" : "var(--surface-secondary)",
                          color: activeTab === "entry" ? "var(--status-in-progress-text)" : "var(--foreground)",
                          height: "22px",
                          minWidth: "22px",
                          textAlign: "center",
                          border: activeTab === "entry" ? "1px solid var(--status-in-progress-border)" : "1px solid var(--border)",
                        }}
                      >
                        {totalLineItems}
                      </span>
                    </span>
                    <span style={{ width: "120px", fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-semibold)", color: "var(--text-secondary)", textAlign: "right", fontFamily: "var(--font-family)" }}>System Count</span>
                    <span style={{ width: "160px", fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-semibold)", color: "var(--text-secondary)", textAlign: "center", paddingLeft: "var(--spacing-4)", fontFamily: "var(--font-family)" }}>Submit Count</span>
                  </div>

                  {lineItems.map((li, idx) => {
                    const val = entryValues[li.id] || "";
                    const numVal = val ? parseInt(val, 10) : null;
                    const hasDiscrep = numVal !== null && numVal !== li.systemCount;
                    const isLocked = li.status === "completed_approved" || li.status === "cancelled";
                    const showApprovedIndicator = isLocked && li.status === "completed_approved";
                    const showCountingIndicator = li.status === "in_progress" && !!li.countedBy;
                    const showDiscrepIndicator = hasDiscrep && !li.serialized;
                    const hasIndicator = showApprovedIndicator || showCountingIndicator || showDiscrepIndicator;
                    return (
                      <div key={li.id} style={{ borderBottom: "1px solid var(--border)" }}>
                        {/* Main row */}
                        <div
                          className="flex items-center"
                          style={{
                            padding: "0 var(--spacing-4)",
                            minHeight: "48px",
                            background: "var(--background)",
                            transition: "background 0.15s ease",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = HOVER.tableRow; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--background)"; }}
                        >
                          <span style={{ width: "40px", fontSize: "var(--text-caption)", color: "var(--text-tertiary)", fontFamily: "var(--font-family)", flexShrink: 0, alignSelf: "flex-start", paddingTop: "var(--spacing-3)" }}>{idx + 1}</span>
                          <div className="flex flex-col flex-1" style={{ gap: "var(--spacing-0-5)", minWidth: 0, paddingTop: "var(--spacing-2)", paddingBottom: "var(--spacing-2)" }}>
                            <div className="flex items-center" style={{ gap: "var(--spacing-2)", minWidth: 0 }}>
                              {li.type === "location" ? <MapPin size={15} style={{ color: "var(--primary)", flexShrink: 0 }} /> : <Package size={15} style={{ color: "var(--primary)", flexShrink: 0 }} />}
                              <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", fontFamily: "var(--font-family)" }}>{li.code}</span>
                            </div>
                            <span style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingLeft: "23px", fontFamily: "var(--font-family)" }}>{li.description}</span>
                          </div>
                          <span style={{ width: "120px", fontSize: "var(--text-label)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secondary)", textAlign: "right", flexShrink: 0, fontFamily: "var(--font-family)" }}>{li.systemCount.toLocaleString()} EA</span>
                          <div style={{ width: "160px", paddingLeft: "var(--spacing-4)", flexShrink: 0 }} className="flex items-center justify-center">
                            {li.serialized ? (
                              <SerialEntryButton
                                item={li}
                                isLocked={isLocked}
                                onSelect={() => setSerialVerifyItem(li)}
                              />
                            ) : isLocked ? (
                              <UnitInput
                                value={li.submittedCount !== null ? li.submittedCount.toLocaleString() : ""}
                                disabled
                                width="120px"
                                height="36px"
                                textAlign="left"
                                placeholder="—"
                              />
                            ) : (
                              <UnitInput
                                value={val}
                                onChange={(v) => setEntryValues((prev) => ({ ...prev, [li.id]: v }))}
                                variant={hasDiscrep ? "error" : "default"}
                                width="120px"
                                height="36px"
                                textAlign="left"
                              />
                            )}
                          </div>
                        </div>

                        {/* Full-width indicator bar below the row */}
                        {hasIndicator && (
                          <div
                            className="flex items-center"
                            style={{
                              margin: "0 var(--spacing-4) var(--spacing-3) calc(40px + var(--spacing-4))",
                              padding: "var(--spacing-1-5) var(--spacing-3)",
                              borderRadius: "var(--radius-sm)",
                              background: "transparent",
                              gap: "var(--spacing-2)",
                            }}
                          >
                            {showApprovedIndicator && (
                              <>
                                <CheckCircle2 size={13} style={{ color: "var(--status-completed-text)", flexShrink: 0 }} />
                                <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", fontFamily: FONT }}>
                                  <span style={{ fontWeight: "var(--font-weight-semibold)", color: "var(--status-completed-text)" }}>Approved</span>
                                  {li.variance !== null && li.variance !== 0 && (
                                    <span style={{ fontWeight: "var(--font-weight-medium)", marginLeft: "6px", color: li.variance > 0 ? "var(--status-awaiting-text)" : "var(--destructive)" }}>
                                      {li.variance > 0 ? "+" : ""}{li.variance} EA variance
                                    </span>
                                  )}
                                </span>
                              </>
                            )}
                            {showCountingIndicator && !showApprovedIndicator && (
                              <>
                                <Info size={13} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                                <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", fontFamily: FONT }}>
                                  Location is being counted by{" "}
                                  <span style={{ fontWeight: "var(--font-weight-semibold)", color: "var(--primary)" }}>{li.countedBy}</span>
                                  {" "}and is no longer editable.
                                </span>
                              </>
                            )}
                            {showDiscrepIndicator && !showApprovedIndicator && !showCountingIndicator && (
                              <>
                                <AlertTriangle size={13} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                                <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", fontFamily: FONT }}>
                                  <span style={{ fontWeight: "var(--font-weight-semibold)", color: numVal! > li.systemCount ? "var(--status-awaiting-text)" : "var(--destructive)" }}>
                                    {numVal! > li.systemCount ? "+" : ""}{numVal! - li.systemCount} EA
                                  </span>
                                  <span style={{ fontWeight: "var(--font-weight-normal)", marginLeft: "4px" }}>
                                    — approval required
                                  </span>
                                </span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          ) : activeTab === "notes" ? (
          /* ─── Notes & Attachments Tab ─────────────────────────────────── */
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-auto-hide" style={{ padding: "var(--spacing-4)" }}>
            <div className="flex" style={{ gap: "var(--spacing-6)" }}>
            {/* ── Notes (left) ── */}
            <div className="flex-1" style={{ minWidth: 0 }}>
              <div className="flex items-center justify-between" style={{ marginBottom: "var(--spacing-3)" }}>
                <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", fontFamily: FONT }}>Notes ({notes.length})</span>
                {!isAddingNote && (
                  <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setIsAddingNote(true)}>
                    <Plus size={14} />
                    Add Note
                  </Button>
                )}
              </div>

              {/* Add Note input */}
              {isAddingNote && (
                <div
                  style={{
                    marginBottom: "var(--spacing-3)",
                    padding: "var(--spacing-3)",
                    border: "1px solid var(--primary-200)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--card)",
                  }}
                >
                  <textarea
                    autoFocus
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    placeholder="Write a note..."
                    rows={3}
                    style={{
                      width: "100%",
                      resize: "vertical",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-sm)",
                      padding: "var(--spacing-2-5) var(--spacing-3)",
                      fontSize: "var(--text-label)",
                      fontFamily: FONT,
                      color: "var(--foreground)",
                      background: "var(--input-background)",
                      outline: "none",
                      lineHeight: "var(--leading-loose)",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary-300)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
                    onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleAddNote(); }}
                  />
                  <div className="flex items-center justify-end" style={{ gap: "var(--spacing-2)", marginTop: "var(--spacing-2)" }}>
                    <Button variant="outline" size="sm" onClick={() => { setIsAddingNote(false); setNewNoteText(""); }}>Cancel</Button>
                    <Button size="sm" onClick={handleAddNote} disabled={!newNoteText.trim()}>Post Note</Button>
                  </div>
                </div>
              )}

              {/* Notes feed */}
              <div className="flex flex-col" style={{ gap: "var(--spacing-2-5)" }}>
                {notes.map((note) => (
                  <div
                    key={note.id}
                    style={{
                      padding: "var(--spacing-3) var(--spacing-4)",
                      background: "var(--surface-secondary)",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border)",
                      transition: "border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary-200)"; e.currentTarget.style.boxShadow = "var(--elevation-card-item)"; e.currentTarget.style.background = HOVER.tableRow; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = "var(--card)"; }}
                  >
                    <div className="flex items-center" style={{ gap: "var(--spacing-2)", marginBottom: "var(--spacing-2)" }}>
                      <div
                        className="flex items-center justify-center"
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "var(--radius-full)",
                          background: "var(--primary-100)",
                          flexShrink: 0,
                        }}
                      >
                        <User size={12} style={{ color: "var(--primary)" }} />
                      </div>
                      <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-medium)", color: "var(--foreground)", fontFamily: FONT }}>{note.author}</span>
                      <span style={{ fontSize: "var(--text-caption)", color: "var(--text-tertiary)", fontFamily: FONT }}>{note.timestamp}</span>
                    </div>
                    <p style={{ fontSize: "var(--text-label)", color: "var(--foreground)", margin: 0, lineHeight: "var(--leading-loose)", fontFamily: FONT }}>
                      {note.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Attachments (right) ── */}
            <div style={{ width: "380px", flexShrink: 0 }}>
              <div className="flex items-center justify-between" style={{ marginBottom: "var(--spacing-3)" }}>
                <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", fontFamily: FONT }}>
                  Attachments ({MOCK_ATTACHMENTS.length})
                </span>
              </div>

              {/* Drag & drop zone */}
              <div
                className="flex flex-col items-center justify-center"
                style={{
                  padding: "var(--spacing-5)",
                  border: "2px dashed var(--border)",
                  borderRadius: "var(--radius-md)",
                  background: "var(--surface-secondary)",
                  marginBottom: "var(--spacing-3)",
                  transition: "border-color 0.15s ease, background 0.15s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary-300)"; e.currentTarget.style.background = "var(--primary-50)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--surface-secondary)"; }}
              >
                <Upload size={20} style={{ color: "var(--text-tertiary)", marginBottom: "var(--spacing-2)" }} />
                <span style={{ fontSize: "var(--text-label)", color: "var(--text-secondary)", textAlign: "center", fontFamily: FONT }}>
                  Drop files here, or{" "}
                  <span style={{ color: "var(--primary)", cursor: "pointer", fontWeight: "var(--font-weight-medium)" }}>browse</span>
                </span>
                <span style={{ fontSize: "var(--text-caption)", color: "var(--text-tertiary)", marginTop: "var(--spacing-1)", fontFamily: FONT }}>
                  PDF, JPG, PNG, XLSX up to 10MB
                </span>
              </div>

              {/* Attachment thumbnail grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "var(--spacing-3)",
                }}
              >
                {MOCK_ATTACHMENTS.map((att) => (
                  <AttachmentThumbnailCard key={att.id} att={att} />
                ))}
              </div>
            </div>
          </div>
          </div>
          ) : null}
        </div>{/* close flex wrapper (sidebar + content) */}
      </div>{/* close Content Area Card */}

      {/* ═══ Right Detail Sidebar (always visible) ═══════════════════════════ */}
      <div
        className="flex flex-col shrink-0"
        style={{
          width: "280px",
          gap: "var(--spacing-2)",
        }}
      >

        {/* CREATED card */}
        <div style={{ background: "var(--card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", padding: "var(--spacing-2-5) var(--spacing-3) var(--spacing-3)", boxShadow: "var(--elevation-card)" }}>
          <span style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-semibold)", color: "var(--text-secondary)", letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: FONT }}>Created</span>

          <div className="flex flex-col" style={{ marginTop: "var(--spacing-3)", gap: "2px" }}>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-tertiary)", fontFamily: FONT }}>Created By</span>
            <div className="flex items-center" style={{ gap: "var(--spacing-2)", marginTop: "var(--spacing-1)" }}>
              {(() => {
                const person = allMockPeople.find((p) => p.name === cc.createdBy);
                if (person) {
                  return <img src={person.avatar} alt={person.name} style={{ width: "24px", height: "24px", borderRadius: "var(--radius-full)", objectFit: "cover" }} />;
                }
                const initials = cc.createdBy.split(" ").map((n) => n[0]).join("").toUpperCase();
                return (
                  <div className="flex items-center justify-center" style={{ width: "24px", height: "24px", borderRadius: "var(--radius-full)", background: "var(--primary-50)", color: "var(--primary)", fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-medium)", fontFamily: FONT }}>
                    {initials}
                  </div>
                );
              })()}
              <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--font-weight-normal)", color: "var(--foreground)", fontFamily: FONT }}>{cc.createdBy}</span>
            </div>
          </div>

          <div className="flex flex-col" style={{ marginTop: "var(--spacing-3)", gap: "2px" }}>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-tertiary)", fontFamily: FONT }}>Created On</span>
            <div className="flex items-center" style={{ gap: "var(--spacing-1-5)", marginTop: "var(--spacing-1)" }}>
              <Clock size={14} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
              <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--font-weight-normal)", color: "var(--foreground)", fontFamily: FONT, whiteSpace: "nowrap" }}>{cc.createdOn}</span>
            </div>
          </div>

          <div className="flex flex-col" style={{ marginTop: "var(--spacing-3)", gap: "2px" }}>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-tertiary)", fontFamily: FONT }}>Completed On</span>
            <div className="flex items-center" style={{ gap: "var(--spacing-1-5)", marginTop: "var(--spacing-1)" }}>
              <Calendar size={14} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
              <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--font-weight-normal)", color: cc.completedOn ? "var(--foreground)" : "var(--text-tertiary)", fontFamily: FONT, whiteSpace: "nowrap" }}>
                {cc.completedOn || "\u2014"}
              </span>
            </div>
          </div>
        </div>

        {/* SCHEDULED DATE card — only shown when dates exist */}
        {(cc.startDate || cc.dueDate) && (
        <div style={{ background: "var(--card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", padding: "var(--spacing-2-5) var(--spacing-3) var(--spacing-3)", boxShadow: "var(--elevation-card)" }}>
          <span style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-semibold)", color: "var(--text-secondary)", letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: FONT }}>Scheduled Date</span>

          <div className="flex flex-col" style={{ gap: "var(--spacing-3)", marginTop: "var(--spacing-3)" }}>
            {cc.startDate && (
            <div className="flex flex-col" style={{ gap: "var(--spacing-0-5)" }}>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--text-tertiary)", fontFamily: FONT }}>Start Date</span>
              <div className="flex items-center" style={{ gap: "var(--spacing-1-5)", marginTop: "var(--spacing-1)" }}>
                <Calendar size={14} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--font-weight-normal)", color: "var(--foreground)", fontFamily: FONT, whiteSpace: "nowrap" }}>{cc.startDate}</span>
              </div>
            </div>
            )}
            {cc.dueDate && (
            <div className="flex flex-col" style={{ gap: "var(--spacing-0-5)" }}>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--text-tertiary)", fontFamily: FONT }}>Due Date</span>
              <div className="flex items-center" style={{ gap: "var(--spacing-1-5)", marginTop: "var(--spacing-1)" }}>
                <Calendar size={14} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--font-weight-normal)", color: "var(--foreground)", fontFamily: FONT, whiteSpace: "nowrap" }}>{cc.dueDate}</span>
              </div>
            </div>
            )}
          </div>
        </div>
        )}

        {/* PLAN ASSIGNEE card */}
        {(() => {
          const MAX_VISIBLE = 3;
          const allAssignees = getPersonsById(assigneeState.assigneeIds);
          const visibleAssignees = allAssignees.slice(0, MAX_VISIBLE);
          const overflowCount = allAssignees.length - MAX_VISIBLE;
          return (
        <div style={{ background: "var(--card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", padding: "var(--spacing-2-5) var(--spacing-3) var(--spacing-3)", boxShadow: "var(--elevation-card)" }}>
          <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
            <span style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-semibold)", color: "var(--text-secondary)", letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: FONT }}>Plan Assignee</span>
            <span
              className="flex items-center justify-center"
              style={{
                minWidth: "18px",
                height: "18px",
                padding: "0 var(--spacing-1-5)",
                borderRadius: "var(--radius-full)",
                background: "var(--surface-secondary)",
                border: "1px solid var(--border)",
                fontSize: "var(--text-xs)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-secondary)",
                fontFamily: FONT,
                lineHeight: "var(--leading-none)",
              }}
            >
              {allAssignees.length}
            </span>
          </div>

          <div className="flex flex-col" style={{ marginTop: "var(--spacing-3)", gap: "var(--spacing-2-5)" }}>
            {visibleAssignees.map((person) => (
              <div key={person.id} className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
                <img src={person.avatar} alt={person.name} style={{ width: "28px", height: "28px", borderRadius: "var(--radius-full)", objectFit: "cover", flexShrink: 0 }} />
                <div className="flex flex-col" style={{ gap: "0px", minWidth: 0 }}>
                  <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--font-weight-normal)", color: "var(--foreground)", fontFamily: FONT, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{person.name}</span>
                  {person.status === "Task Declined" && (
                    <span style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-normal)", color: "var(--destructive)", fontFamily: FONT, lineHeight: "var(--line-height-caption-helper)" }}>Declined</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {overflowCount > 0 && (
            <button
              onClick={assigneeState.openModal}
              style={{
                marginTop: "var(--spacing-2)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "var(--spacing-1) 0",
                fontSize: "var(--text-caption)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--primary)",
                fontFamily: FONT,
              }}
            >
              +{overflowCount} more
            </button>
          )}

          {cc.status !== "cancelled" && cc.status !== "closed_incomplete" && (
          <button
            onClick={assigneeState.openModal}
            className="flex items-center justify-center"
            style={{
              marginTop: "var(--spacing-3)",
              width: "100%",
              padding: "var(--spacing-2) var(--spacing-2)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              background: "var(--surface-secondary)",
              cursor: "pointer",
              gap: "var(--spacing-1-5)",
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--primary)",
              fontFamily: FONT,
              transition: "background 0.15s ease, border-color 0.15s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--primary-50)"; e.currentTarget.style.borderColor = "var(--primary)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--surface-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            <Pencil size={12} />
            Update Assignee
          </button>
          )}
        </div>
          );
        })()}
      </div>

      </div>{/* close Content + Right Sidebar row */}

      {/* ─── Redesigned Modals ──────────────────────────────────────────── */}
      <CancelPlanModal
        open={showCancelDialog}
        onOpenChange={setShowCancelDialog}
        planId={cc.id}
        status={cc.status}
        totalLocations={sidebar.length}
        countedLineItems={completedLineItems}
        pendingLineItems={pendingLineItems}
        awaitingLineItems={awaitingLineItems}
        onConfirmAction={(option) => {
          if (option === "discard") {
            updateCycleCount(cc.id, { status: "cancelled" });
          } else {
            updateCycleCount(cc.id, { status: "closed_incomplete" });
          }
        }}
      />
      <RecountPlanModal
        open={showRecountPlanDialog}
        onOpenChange={setShowRecountPlanDialog}
        onConfirm={handleRecountPlan}
      />
      <ApproveAllModal
        open={showApproveAllDialog}
        onOpenChange={setShowApproveAllDialog}
        itemsAffected={awaitingLineItems}
        totalUnapproved={awaitingLineItems}
        onConfirm={handleApproveAll}
      />
      <ApproveItemModal
        open={!!approveItemDialog}
        onOpenChange={(open) => { if (!open) setApproveItemDialog(null); }}
        item={approveItemDialog}
        onConfirm={handleApproveItem}
      />
      <RejectItemModal
        open={!!rejectItemDialog}
        onOpenChange={(open) => { if (!open) setRejectItemDialog(null); }}
        item={rejectItemDialog}
        onConfirm={handleRejectItem}
      />
      <RecountItemModal
        open={!!recountItemDialog}
        onOpenChange={(open) => { if (!open) setRecountItemDialog(null); }}
        item={recountItemDialog}
        onConfirm={handleRecountItem}
      />
      <EditCountModal
        open={!!editCountDialog}
        onOpenChange={(open) => { if (!open) setEditCountDialog(null); }}
        item={editCountDialog}
        onConfirm={handleEditCount}
      />

      {/* ─── Assignee Selector Modal (Global Component) ──────────────────── */}
      <AssigneeSelector
        open={assigneeState.isOpen}
        onClose={assigneeState.closeModal}
        assigneeIds={assigneeState.assigneeIds}
        primaryAssigneeId={assigneeState.primaryAssigneeId}
        onUpdate={assigneeState.handleUpdate}
        readOnly={planClosedIncomplete}
      />

      {/* ─── View Units Modal ──────────────��───────────────────────────── */}
      {viewUnitsItem && (
        <ViewUnitsModal
          item={viewUnitsItem}
          onClose={() => setViewUnitsItem(null)}
        />
      )}

      {/* ─── Serial Verification Modal ─────────────────────────────────── */}
      {serialVerifyItem && (
        <SerialVerificationModal
          item={serialVerifyItem}
          onClose={() => setSerialVerifyItem(null)}
          onConfirm={(selectedCount) => {
            setEntryValues((prev) => ({ ...prev, [serialVerifyItem.id]: String(selectedCount) }));
            showToast({ title: "Serial Units Verified", description: `${selectedCount} serial units confirmed for ${serialVerifyItem.code}.`, type: "success" });
            setSerialVerifyItem(null);
          }}
        />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Helper Components
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * SerialEntryButton — renders in the Count Entry tab's "Submit Count" column
 * for serialized items. Instead of a numeric input, shows a button that opens
 * the serial verification modal, with scan-progress feedback.
 */
function SerialEntryButton({
  item,
  isLocked,
  onSelect,
}: {
  item: LineItem;
  isLocked: boolean;
  onSelect: () => void;
}) {
  const hasSerialData = item.serialUnitsExpected != null && item.serialUnitsScanned != null;
  const scanned = item.serialUnitsScanned ?? 0;
  const expected = item.serialUnitsExpected ?? item.systemCount;
  const isDisabledByOther = item.status === "in_progress" && !!item.countedBy;
  const isPending = item.status === "pending";
  const isComplete = scanned >= expected && hasSerialData;
  const isLockedComplete = isLocked && item.status === "completed_approved";

  // Progress ring percentage
  const pct = hasSerialData && expected > 0 ? Math.min(100, Math.round((scanned / expected) * 100)) : 0;

  // Determine label & count
  let label: string;
  let countLabel: string | null = null;
  let btnBg: string;
  let btnBorder: string;
  let labelColor: string;

  if (isComplete || isLockedComplete) {
    label = isLocked ? "View Serials" : "All Scanned";
    countLabel = `${scanned} / ${expected}`;
    btnBg = isLocked ? "var(--background)" : "var(--status-completed-bg)";
    btnBorder = isLocked ? "var(--border)" : "var(--status-completed-border)";
    labelColor = isLocked ? "var(--primary)" : "var(--status-completed-text)";
  } else if (isDisabledByOther) {
    label = "Select Serials";
    countLabel = null;
    btnBg = "var(--background)";
    btnBorder = "var(--border)";
    labelColor = "var(--text-tertiary)";
  } else if (isPending) {
    label = "Scan Serials";
    countLabel = `0 / ${expected}`;
    btnBg = "var(--background)";
    btnBorder = "var(--border)";
    labelColor = "var(--text-secondary)";
  } else {
    label = hasSerialData ? "Scanning" : "Scan Serials";
    countLabel = hasSerialData ? `${scanned} / ${expected}` : `0 / ${expected}`;
    btnBg = "var(--background)";
    btnBorder = "var(--border)";
    labelColor = "var(--text-secondary)";
  }

  // Barcode icon removed per design — clean text-only buttons

  // Right circle — only show for completed, locked-complete, disabled, or in-progress scanning
  const showCircle = isComplete || isLockedComplete || isDisabledByOther || (hasSerialData && !isPending);
  const circleIndicator = showCircle ? (
    (isComplete || isLockedComplete) ? (
      <svg width="26" height="26" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10.5" fill="none" stroke="var(--status-completed-text)" strokeWidth="1.5" />
        <path d="M7.5 12.5L10.5 15.5L16.5 9" fill="none" stroke="var(--status-completed-text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : isDisabledByOther ? (
      <svg width="26" height="26" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10.5" fill="none" stroke="var(--border)" strokeWidth="1.5" />
      </svg>
    ) : (
      <svg width="26" height="26" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10" fill="none" stroke="var(--border)" strokeWidth="1.5" />
        <circle
          cx="12" cy="12" r="10" fill="none"
          stroke="var(--text-tertiary)"
          strokeWidth="1.5"
          strokeDasharray={`${pct * 0.6283} 62.83`}
          strokeLinecap="round"
          transform="rotate(-90 12 12)"
          style={{ transition: "stroke-dasharray 0.3s ease" }}
        />
      </svg>
    )
  ) : null;

  return (
    <div
      className="flex items-center"
      style={{ gap: "var(--spacing-2)", cursor: isDisabledByOther ? "not-allowed" : "pointer", opacity: isDisabledByOther ? 0.5 : 1 }}
      onClick={isDisabledByOther ? undefined : onSelect}
    >
      {/* Button area — clean text pill, no barcode, no gray bg */}
      <div
        className="inline-flex items-center"
        style={{
          padding: "var(--spacing-1-5) var(--spacing-3)",
          borderRadius: "var(--radius-sm)",
          border: `1px solid ${btnBorder}`,
          background: btnBg,
          gap: "var(--spacing-2)",
          fontFamily: "var(--font-family)",
          transition: "border-color 0.15s ease, background 0.15s ease",
        }}
        onMouseEnter={(e) => { if (!isDisabledByOther) { e.currentTarget.style.borderColor = "var(--primary-200)"; e.currentTarget.style.background = "var(--row-hover)"; } }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = btnBorder; e.currentTarget.style.background = btnBg; }}
      >
        <div className="flex flex-col" style={{ minWidth: 0, gap: "var(--spacing-0-5)" }}>
          <span
            style={{
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-semibold)",
              color: labelColor,
              whiteSpace: "nowrap",
              lineHeight: "var(--leading-16)",
              fontFamily: "var(--font-family)",
            }}
          >
            {label}
          </span>
          {countLabel && (
            <span
              style={{
                fontSize: "var(--text-caption-helper)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--text-tertiary)",
                lineHeight: "var(--leading-16)",
                fontFamily: "var(--font-family-mono)",
              }}
            >
              {countLabel}
            </span>
          )}
        </div>
      </div>

      {/* Circle indicator — outside the bordered area */}
      {circleIndicator}
    </div>
  );
}

/** Derives 4-type tracking label matching cycle-count creation's SearchableItem model */
function trackingTypeLabel(item: LineItem): string {
  const ser = item.serialized === true;
  const lot = item.lotControlled === true;
  if (ser && lot) return "Lot (Serialized)";
  if (!ser && lot) return "Lot (Non-Serialized)";
  if (ser && !lot) return "Serialized";
  return "Non-Serialized";
}

function VarianceDisplay({ systemCount, submittedCount, variance }: { systemCount: number; submittedCount: number | null; variance: number | null }) {
  if (submittedCount === null || variance === null) return <span style={{ color: "var(--text-tertiary)", fontFamily: FONT, lineHeight: "22px", display: "block", fontSize: "var(--text-label)" }}>{"\u2014"}</span>;
  const isIncrease = variance > 0;
  const isDecrease = variance < 0;
  const isMatch = variance === 0;
  return (
    <span
      className="inline-flex items-center"
      style={{
        fontWeight: "var(--font-weight-semibold)",
        color: isMatch ? "var(--variance-match-text)" : isIncrease ? "var(--variance-positive-text)" : "var(--variance-negative-text)",
        fontSize: "var(--text-label)",
        fontFamily: FONT,
        gap: "var(--spacing-1-5)",
        lineHeight: "22px",
        height: "22px",
      }}
    >
      {submittedCount.toLocaleString()} EA
      {variance !== 0 && (
        <span
          className="chip chip-xs"
          style={{
            background: isMatch ? "var(--variance-match-bg)" : "var(--variance-negative-bg)",
            color: isMatch ? "var(--variance-match-text)" : "var(--variance-negative-text)",
            border: "none",
            fontWeight: "var(--font-weight-semibold)",
          }}
        >
          {isIncrease ? "+" : ""}{variance.toLocaleString()}
        </span>
      )}
    </span>
  );
}

// RadioOption moved to detail-modals.tsx

function LineItemCard({
  item,
  planCancelled = false,
  onApprove,
  onReject,
  onRecount,
  onEditCount,
  onViewUnits,
}: {
  item: LineItem;
  planCancelled?: boolean;
  onApprove: () => void;
  onReject: () => void;
  onRecount: () => void;
  onEditCount: () => void;
  onViewUnits?: () => void;
}) {
  const statusCfg = LINE_STATUS_CONFIG[item.status];
  const isPending = item.status === "pending";
  const isInProgress = item.status === "in_progress";
  const isAwaiting = item.status === "awaiting_approval";
  const isCompleted = item.status === "completed" || item.status === "completed_approved";
  const isCancelled = item.status === "cancelled";
  // When plan is cancelled, suppress all interactive actions
  const hasActions = !planCancelled && (isAwaiting || isCompleted || isCancelled);

  // Serialized unit mismatch detection
  const hasSerialized = item.serialized === true;
  const hasSerialData = hasSerialized && item.serialUnitsExpected != null && item.serialUnitsScanned != null;
  const serialMismatch = hasSerialData && item.serialUnitsScanned !== item.serialUnitsExpected;
  const serialPartialMatch = hasSerialData && item.serialUnitsMatched != null && item.serialUnitsMatched < item.serialUnitsScanned!;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderRadius: "var(--radius-md)",
        border: isHovered ? "1px solid var(--primary-200)" : "1px solid var(--border)",
        overflow: "hidden",
        background: isHovered ? HOVER.tableRow : "var(--card)",
        boxShadow: isHovered ? "var(--elevation-card-item)" : "var(--elevation-xs)",
        transition: "border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease",
        cursor: "default",
      }}
    >
      {/* ── New line item banner ─────────────────────────────────────── */}
      {item.isNew && (
        <div
          className="flex items-center"
          style={{
            padding: "var(--spacing-1) var(--spacing-4)",
            background: "var(--foreground)",
            color: "var(--background)",
            fontSize: "var(--text-xs)",
            fontWeight: "var(--font-weight-medium)",
            gap: "var(--spacing-1-5)",
          }}
        >
          <Plus size={12} />
          New Line Item Added
        </div>
      )}

      {/* ── Header row: Icon + Code/Description + Status ─────────── */}
      <div
        className="flex items-center"
        style={{ padding: "var(--spacing-3) var(--spacing-4)", gap: "var(--spacing-3)" }}
      >
        {/* Thumbnail */}
        {item.image ? (
          <img
            src={item.image}
            alt={item.code}
            style={{
              width: "48px",
              height: "48px",
              minWidth: "48px",
              borderRadius: "var(--radius-md)",
              objectFit: "cover",
              border: "1px solid var(--border)",
            }}
          />
        ) : (
          <div
            className="flex items-center justify-center rounded-md"
            style={{
              width: "48px",
              height: "48px",
              minWidth: "48px",
              background: isPending ? "var(--surface-secondary)" : "var(--primary-50)",
            }}
          >
            {item.type === "location" ? (
              <MapPin size={20} style={{ color: isPending ? "var(--text-secondary)" : "var(--primary)" }} />
            ) : (
              <Package size={20} style={{ color: isPending ? "var(--text-secondary)" : "var(--primary)" }} />
            )}
          </div>
        )}

        {/* Code + Description (stacked) */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="flex flex-col" style={{ gap: "2px" }}>
            <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-semibold)", color: "var(--foreground)", fontFamily: FONT }}>
              {item.code}
            </span>
            <span
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--text-secondary)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontFamily: FONT,
              }}
            >
              {item.description}
            </span>
          </div>
          {/* Tags + serialized badge */}
          <div className="flex items-center flex-wrap" style={{ gap: "var(--spacing-1-5)", marginTop: "var(--spacing-1)" }}>
            {item.tags?.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "var(--spacing-0-5) var(--spacing-2)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "var(--text-caption)",
                  fontWeight: "var(--font-weight-medium)",
                  background: "var(--surface-secondary)",
                  color: "var(--text-tertiary)",
                  lineHeight: "var(--leading-18)",
                }}
              >
                {tag}
              </span>
            ))}
            {item.type === "item" && (
              <span
                className="chip"
                style={{
                  background: "var(--surface-secondary)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border)",
                  fontFamily: FONT,
                }}
              >
                {trackingTypeLabel(item)}
              </span>
            )}
          </div>
        </div>

        {/* Status badge */}
        <span
          className="chip chip-status shrink-0"
          style={{
            fontWeight: "var(--font-weight-semibold)",
            background: statusCfg.bg,
            color: statusCfg.text,
            borderColor: statusCfg.border,
          }}
        >
          {statusCfg.label}
        </span>
      </div>

      {/* ── Data section: Status-adaptive metadata ───────────────── */}
      <div
        style={{
          padding: "0 var(--spacing-4) var(--spacing-3)",
        }}
      >
        {/* Pending */}
        {isPending && (
          <div style={DATA_GRID_STYLE}>
            <DataCell label="System Count" value={`${item.systemCount.toLocaleString()} EA`} />
            {item.type === "item" && <DataCell label="Tracking" value={trackingTypeLabel(item)} />}
          </div>
        )}

        {/* In Progress */}
        {isInProgress && (
          <div style={DATA_GRID_STYLE}>
            <DataCell label="System Count" value={`${item.systemCount.toLocaleString()} EA`} />
            {item.type === "item" && <DataCell label="Tracking" value={trackingTypeLabel(item)} />}
            {hasSerialData && (
              <DataCell
                label="Units Scanned"
                value={`${item.serialUnitsScanned!.toLocaleString()} / ${item.serialUnitsExpected!.toLocaleString()}`}
                valueColor={item.serialUnitsScanned! < item.serialUnitsExpected! ? "var(--status-awaiting-text)" : undefined}
              />
            )}
            {item.countedBy && (
              <PersonCell label="Started By" name={item.countedBy} avatar={item.countedByAvatar} />
            )}
            {item.startedOn && (
              <DataCell label="Started On" value={item.startedOn} />
            )}
          </div>
        )}

        {/* Awaiting Approval */}
        {isAwaiting && (
          <>
            <div style={DATA_GRID_STYLE}>
              <DataCell label="System Count" value={`${item.systemCount.toLocaleString()} EA`} />
              {item.submittedCount !== null && (
                <div style={{ minWidth: 0, overflow: "hidden" }}>
                  <span style={{ fontSize: "var(--text-caption)", color: "var(--text-tertiary)", display: "block", lineHeight: "var(--leading-18)", fontFamily: FONT }}>
                    Submitted Count
                  </span>
                  <VarianceDisplay systemCount={item.systemCount} submittedCount={item.submittedCount} variance={item.variance} />
                </div>
              )}
              {item.countedBy && (
                <PersonCell label="Counted By" name={item.countedBy} avatar={item.countedByAvatar} />
              )}
              {item.startedOn && (
                <DataCell label="Started" value={item.startedOn} />
              )}
              {item.completedOn && (
                <DataCell label="Completed" value={item.completedOn} />
              )}
              {item.attachments > 0 && (
                <AttachmentCell count={item.attachments} />
              )}
            </div>
            {/* Serialized unit discrepancy detail for awaiting */}
            {hasSerialized && hasSerialData && (serialMismatch || serialPartialMatch) && (
              <div
                className="flex items-center"
                style={{
                  marginTop: "var(--spacing-2)",
                  padding: "var(--spacing-2) var(--spacing-3)",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--surface-secondary)",
                  border: "1px solid var(--border)",
                  gap: "var(--spacing-2)",
                }}
              >
                <AlertTriangle size={14} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", fontFamily: FONT }}>
                  <span style={{ fontWeight: "var(--font-weight-semibold)" }}>Serial mismatch</span>
                  <span style={{ fontWeight: "var(--font-weight-normal)", marginLeft: "4px" }}>
                    {Math.abs(item.serialUnitsExpected! - item.serialUnitsScanned!).toLocaleString()} unit{Math.abs(item.serialUnitsExpected! - item.serialUnitsScanned!) !== 1 ? "s" : ""} {item.serialUnitsScanned! > item.serialUnitsExpected! ? "over" : "short"}
                  </span>
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); onViewUnits?.(); }}
                  style={{
                    fontSize: "var(--text-caption)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--primary)",
                    background: "transparent",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    padding: "var(--spacing-1) var(--spacing-2-5)",
                    marginLeft: "auto",
                    fontFamily: FONT,
                    textDecoration: "none",
                    transition: "background 0.15s ease, border-color 0.15s ease",
                    lineHeight: 1.4,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--primary-50)"; e.currentTarget.style.borderColor = "var(--primary-200)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border)"; }}
                >
                  View Units
                </button>
              </div>
            )}
          </>
        )}

        {/* Completed / Completed+Approved */}
        {isCompleted && (
          <>
            <div style={DATA_GRID_STYLE}>
              <DataCell label="Prior System Count" value={`${item.systemCount.toLocaleString()} EA`} />
              {item.submittedCount !== null && (
                <div style={{ minWidth: 0, overflow: "hidden" }}>
                  <span style={{ fontSize: "var(--text-caption)", color: "var(--text-tertiary)", display: "block", lineHeight: "var(--leading-18)", fontFamily: FONT }}>
                    Submitted Count
                  </span>
                  <VarianceDisplay systemCount={item.systemCount} submittedCount={item.submittedCount} variance={item.variance} />
                </div>
              )}
              {item.adjustedCount != null && (
                <DataCell label="Adjusted Count" value={`${item.adjustedCount.toLocaleString()} EA`} />
              )}
              {item.countedBy && (
                <PersonCell label="Counted By" name={item.countedBy} avatar={item.countedByAvatar} />
              )}
              {item.approvedBy && (
                <PersonCell label="Approved By" name={item.approvedBy} avatar={null} iconType="approved" />
              )}
              {item.startedOn && (
                <DataCell label="Started" value={item.startedOn} />
              )}
              {item.completedOn && (
                <DataCell label="Completed" value={item.completedOn} />
              )}
              {item.attachments > 0 && (
                <AttachmentCell count={item.attachments} />
              )}
            </div>
            {/* Serialized unit discrepancy detail for completed */}
            {hasSerialized && hasSerialData && (serialMismatch || serialPartialMatch) && (
              <div
                className="flex items-center"
                style={{
                  marginTop: "var(--spacing-2)",
                  padding: "var(--spacing-2) var(--spacing-3)",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--surface-secondary)",
                  border: "1px solid var(--border)",
                  gap: "var(--spacing-2)",
                }}
              >
                <AlertTriangle size={14} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", fontFamily: FONT }}>
                  <span style={{ fontWeight: "var(--font-weight-semibold)" }}>Serial mismatch</span>
                  <span style={{ fontWeight: "var(--font-weight-normal)", marginLeft: "4px" }}>
                    {Math.abs(item.serialUnitsExpected! - item.serialUnitsScanned!).toLocaleString()} unit{Math.abs(item.serialUnitsExpected! - item.serialUnitsScanned!) !== 1 ? "s" : ""} {item.serialUnitsScanned! > item.serialUnitsExpected! ? "over" : "short"}
                  </span>
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); onViewUnits?.(); }}
                  style={{
                    fontSize: "var(--text-caption)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--primary)",
                    background: "transparent",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    padding: "var(--spacing-1) var(--spacing-2-5)",
                    marginLeft: "auto",
                    fontFamily: FONT,
                    textDecoration: "none",
                    transition: "background 0.15s ease, border-color 0.15s ease",
                    lineHeight: 1.4,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--primary-50)"; e.currentTarget.style.borderColor = "var(--primary-200)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border)"; }}
                >
                  View Units
                </button>
              </div>
            )}
          </>
        )}

        {/* Cancelled */}
        {isCancelled && (
          <>
            <div style={DATA_GRID_STYLE}>
              <DataCell label="Prior System Count" value={`${item.systemCount.toLocaleString()} EA`} />
              {item.submittedCount !== null && (
                <div style={{ minWidth: 0, overflow: "hidden" }}>
                  <span style={{ fontSize: "var(--text-caption)", color: "var(--text-tertiary)", display: "block", lineHeight: "var(--leading-18)", fontFamily: FONT }}>
                    Submitted Count
                  </span>
                  <VarianceDisplay systemCount={item.systemCount} submittedCount={item.submittedCount} variance={item.variance} />
                </div>
              )}
              {item.countedBy && (
                <PersonCell label="Counted By" name={item.countedBy} avatar={item.countedByAvatar} />
              )}
              {item.cancelledBy && (
                <PersonCell label="Cancelled By" name={item.cancelledBy} avatar={null} iconType="cancelled" />
              )}
              {item.startedOn && (
                <DataCell label="Started" value={item.startedOn} />
              )}
              {item.completedOn && (
                <DataCell label="Completed" value={item.completedOn} />
              )}
              {item.attachments > 0 && (
                <AttachmentCell count={item.attachments} />
              )}
            </div>
          </>
        )}
      </div>

      {/* ── Action footer ──────────────────────────────────────────── */}
      {hasActions && (
        <div
          className="flex items-center justify-between"
          style={{
            padding: "var(--spacing-2) var(--spacing-4)",
            borderTop: "1px solid var(--border)",
          }}
        >
          {/* Left side: secondary actions */}
          <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
            {isAwaiting && (
              <Button variant="outline" size="sm" className="gap-1.5" onClick={onEditCount}>
                <Pencil size={13} />
                Edit Count
              </Button>
            )}
            {isCompleted && item.status === "completed" && (
              <Button variant="outline" size="sm" className="gap-1.5" onClick={onEditCount}>
                <Pencil size={13} />
                Edit Count
              </Button>
            )}
            {(isCompleted || isCancelled) && (
              <Button variant="outline" size="sm" className="gap-1.5" onClick={onRecount}>
                <RefreshCcw size={13} />
                Recount
              </Button>
            )}
          </div>
          {/* Right side: primary actions */}
          <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
            {isAwaiting && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                  onClick={onReject}
                  style={{ color: "var(--destructive)", borderColor: "var(--status-cancelled-border)" }}
                >
                  <X size={13} />
                  Reject
                </Button>
                <Button size="sm" className="gap-1.5" onClick={onApprove}>
                  <Check size={13} />
                  Approve
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Micro-components for LineItemCard ─────────────────────────────────────────

function DataCell({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <div style={{ minWidth: 0, overflow: "hidden" }}>
      <span style={{ fontSize: "var(--text-caption)", color: "var(--text-tertiary)", display: "block", lineHeight: "var(--leading-18)", fontFamily: FONT, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {label}
      </span>
      <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-medium)", color: valueColor || "var(--foreground)", fontFamily: FONT, lineHeight: "var(--leading-20)", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {value}
      </span>
    </div>
  );
}

function PersonCell({ label, name, avatar, iconType }: { label: string; name: string; avatar: string | null; iconType?: "approved" | "cancelled" }) {
  return (
    <div style={{ minWidth: 0, overflow: "hidden" }}>
      <span style={{ fontSize: "var(--text-caption)", color: "var(--text-tertiary)", display: "block", lineHeight: "var(--leading-18)", fontFamily: FONT, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {label}
      </span>
      <div className="flex items-center" style={{ gap: "var(--spacing-1-5)", height: "22px", lineHeight: "22px", minWidth: 0 }}>
        {avatar ? (
          <img src={avatar} alt="" style={{ width: "22px", height: "22px", borderRadius: "var(--radius-full)", objectFit: "cover" }} />
        ) : iconType === "approved" ? (
          <div className="flex items-center justify-center rounded-full" style={{ width: "22px", height: "22px", background: "var(--status-completed-bg)" }}>
            <CheckCircle2 size={12} style={{ color: "var(--status-completed-text)" }} />
          </div>
        ) : iconType === "cancelled" ? (
          <div className="flex items-center justify-center rounded-full" style={{ width: "22px", height: "22px", background: "var(--status-cancelled-bg)" }}>
            <XCircle size={12} style={{ color: "var(--status-cancelled-text)" }} />
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-full" style={{ width: "22px", height: "22px", background: "var(--primary-50)" }}>
            <User size={12} style={{ color: "var(--primary)" }} />
          </div>
        )}
        <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-medium)", color: "var(--foreground)", fontFamily: FONT, lineHeight: "22px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>
          {name}
        </span>
      </div>
    </div>
  );
}

function AttachmentCell({ count }: { count: number }) {
  return (
    <div style={{ minWidth: 0, overflow: "hidden" }}>
      <span style={{ fontSize: "var(--text-caption)", color: "var(--text-tertiary)", display: "block", lineHeight: "var(--leading-18)", fontFamily: FONT }}>
        Attachments
      </span>
      <button
        className="flex items-center"
        style={{
          fontSize: "var(--text-label)",
          fontWeight: "var(--font-weight-medium)",
          color: "var(--primary)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
          gap: "var(--spacing-1)",
          fontFamily: FONT,
          height: "22px",
          lineHeight: "22px",
        }}
      >
        <Paperclip size={14} />
        {count} {count === 1 ? "file" : "files"}
      </button>
    </div>
  );
}

function FieldPair({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)", display: "block", marginBottom: "var(--spacing-0-5)", fontFamily: FONT }}>
        {label}
      </span>
      <span style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-medium)", color: "var(--foreground)", fontFamily: FONT }}>
        {value}
      </span>
    </div>
  );
}

// ── Attachment Thumbnail Card (Notes & Attachments tab) ──────────────────────
/* ── Serial-unit pill (from attachment-config) ── */
function SerialUnitPill({ serialNo }: { serialNo: string }) {
  const [hovered, setHovered] = useState(false);
  const cfg = LINK_PILL_VARIANTS["serial-unit"];
  const style: React.CSSProperties = {
    ...PILL_BASE_STYLE,
    display: "inline-flex",
    alignItems: "center",
    background: hovered && cfg.hoverStyle ? cfg.hoverStyle.background : cfg.style.background,
    border: `1px solid ${hovered && cfg.hoverStyle ? cfg.hoverStyle.border : cfg.style.border}`,
    color: hovered && cfg.hoverStyle ? cfg.hoverStyle.color : cfg.style.color,
    cursor: cfg.interactive ? "pointer" : "default",
  };
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      {SERIAL_BARCODE_ICON}
      {serialNo}
    </a>
  );
}

function AttachmentThumbnailCard({ att }: { att: AttachmentItem }) {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tb = ATT_THUMB[att.fileType] ?? { bg: "var(--surface-secondary)", color: "var(--text-secondary)", Icon: File };
  const ThumbIcon = tb.Icon;

  useEffect(() => {
    if (!menuOpen) return;
    function close(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [menuOpen]);

  return (
    <div
      className="relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "var(--radius-lg)",
        background: "var(--card)",
        border: `1px solid ${hovered ? "var(--primary-200)" : "var(--border)"}`,
        boxShadow: hovered ? "var(--elevation-card)" : "var(--elevation-xs)",
        transition: "border-color 0.15s ease, box-shadow 0.15s ease",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      {/* ── Thumbnail preview area ── */}
      <div
        className="relative shrink-0 w-full flex items-center justify-center"
        style={{
          height: "80px",
          background: tb.bg,
          overflow: "hidden",
        }}
      >
        <ThumbIcon size={28} style={{ color: tb.color, opacity: 0.7, flexShrink: 0 }} />
        {/* File extension badge */}
        <span
          className="absolute"
          style={{
            top: "var(--spacing-1-5)",
            right: "var(--spacing-1-5)",
            padding: "1px var(--spacing-1)",
            borderRadius: "var(--radius-xs)",
            background: "var(--overlay-white-strong)",
            border: "1px solid var(--border)",
            fontFamily: FONT,
            fontWeight: "var(--font-weight-semibold)",
            fontSize: "var(--text-micro)",
            color: tb.color,
            letterSpacing: "var(--tracking-caps)",
            textTransform: "uppercase",
          }}
        >
          {att.fileType.toUpperCase()}
        </span>
      </div>

      {/* ── Serial-unit pill or Plan Attachment pill ── */}
      <div style={{ padding: "var(--spacing-2) var(--spacing-2-5) 0" }}>
        {att.serialUnit ? (
          <SerialUnitPill serialNo={att.serialUnit} />
        ) : (
          <span
            style={{
              ...PILL_BASE_STYLE,
              display: "inline-flex",
              alignItems: "center",
              background: "var(--surface-secondary)",
              border: "1px solid var(--border)",
              color: "var(--text-tertiary)",
              cursor: "default",
              fontSize: "var(--text-caption-helper)",
            }}
          >
            Plan Attachment
          </span>
        )}
      </div>

      {/* ── File info ── */}
      <div
        className="flex items-start w-full"
        style={{ padding: "var(--spacing-1-5) var(--spacing-2-5) var(--spacing-2-5)", gap: "var(--spacing-1)" }}
      >
        <div className="flex flex-col flex-1 min-w-0" style={{ gap: "var(--spacing-0-5)" }}>
          <p
            className="overflow-hidden"
            style={{
              fontFamily: FONT,
              fontWeight: "var(--font-weight-semibold)",
              fontSize: "var(--text-body-sm)",
              color: "var(--foreground)",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              margin: 0,
              lineHeight: "var(--leading-normal)",
            }}
            title={att.fileName}
          >
            {att.fileName}
          </p>
          <p
            className="overflow-hidden"
            style={{
              fontFamily: FONT,
              fontWeight: "var(--font-weight-normal)",
              fontSize: "var(--text-caption)",
              color: "var(--text-secondary)",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              margin: 0,
              lineHeight: "var(--leading-normal)",
            }}
          >
            {formatAttDate(att.uploadedDate, att.uploadedTime)}
          </p>
          <p
            className="overflow-hidden"
            style={{
              fontFamily: FONT,
              fontWeight: "var(--font-weight-normal)",
              fontSize: "var(--text-caption)",
              color: "var(--text-tertiary)",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              margin: 0,
              lineHeight: "var(--leading-normal)",
            }}
          >
            {att.fileSize} {"\u00B7"} {att.uploadedBy}
          </p>
        </div>

        {/* More vert menu */}
        <div ref={menuRef} className="relative shrink-0" style={{ marginTop: "1px" }}>
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="flex items-center justify-center transition-colors"
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "var(--radius-xs)",
              cursor: "pointer",
              border: "none",
              background: "transparent",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface-secondary)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <MoreVertical size={14} style={{ color: "var(--text-secondary)" }} />
          </button>
          {menuOpen && (
            <div
              className="absolute z-50"
              style={{
                top: "calc(100% + 2px)",
                right: 0,
                minWidth: "120px",
                borderRadius: "var(--radius-md)",
                background: "var(--card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--elevation-card)",
                padding: "var(--spacing-1)",
              }}
            >
              {[
                { label: "Preview", icon: <Search size={13} style={{ color: "var(--text-secondary)" }} /> },
                { label: "Download", icon: <Download size={13} style={{ color: "var(--text-secondary)" }} /> },
              ].map((item) => (
                <button
                  key={item.label}
                  className="flex items-center w-full"
                  style={{
                    height: "30px",
                    padding: "0 var(--spacing-2)",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    border: "none",
                    background: "transparent",
                    gap: "var(--spacing-1-5)",
                    fontFamily: FONT,
                    fontWeight: "var(--font-weight-medium)",
                    fontSize: "var(--text-caption)",
                    color: "var(--foreground)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface-secondary)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
