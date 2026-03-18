/**
 * ── Global Assignee Selector ──
 * Reusable two-panel modal for selecting/managing assignees.
 * Used in both Create Cycle Count and Cycle Count Detail pages.
 * Any change here applies globally wherever assignees are managed.
 */
import { useState, useMemo, useCallback } from "react";
import { Search } from "lucide-react";
import {
  type MockPerson,
  FONT,
  mockPeopleWithPermission,
  mockPeopleWithoutPermission,
} from "./cycle-count-data";
import { planAssigneeSvgPaths, emptyStateSvgPaths } from "../../imports/illustrations";

// ─── Public API Types ──────────────────────────────────────────────────────
export interface AssigneeSelectorProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback when modal is closed / cancelled */
  onClose: () => void;
  /** Set of person IDs currently assigned */
  assigneeIds: Set<string>;
  /** Person ID of the primary assignee (toggle) */
  primaryAssigneeId: string | null;
  /** Callback when assignees are updated (fired on "Update Assignee(s)") */
  onUpdate: (assigneeIds: Set<string>, primaryId: string | null) => void;
  /** When true, the modal is read-only (no adding/removing/editing) */
  readOnly?: boolean;
}

/**
 * Hook that manages all assignee state – use in a parent and spread into <AssigneeSelector>.
 */
export function useAssigneeState(
  initialIds: Set<string> = new Set(),
  initialPrimary: string | null = null,
) {
  const [assigneeIds, setAssigneeIds] = useState<Set<string>>(initialIds);
  const [primaryAssigneeId, setPrimaryAssigneeId] = useState<string | null>(initialPrimary);
  const [isOpen, setIsOpen] = useState(false);

  const addAssignee = useCallback((id: string) => {
    setAssigneeIds((prev) => new Set([...prev, id]));
  }, []);

  const removeAssignee = useCallback(
    (id: string) => {
      setAssigneeIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      if (primaryAssigneeId === id) setPrimaryAssigneeId(null);
    },
    [primaryAssigneeId],
  );

  const togglePrimary = useCallback(
    (id: string) => {
      setPrimaryAssigneeId((prev) => (prev === id ? null : id));
    },
    [],
  );

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleUpdate = useCallback(
    (ids: Set<string>, primary: string | null) => {
      setAssigneeIds(ids);
      setPrimaryAssigneeId(primary);
      setIsOpen(false);
    },
    [],
  );

  return {
    assigneeIds,
    primaryAssigneeId,
    isOpen,
    addAssignee,
    removeAssignee,
    togglePrimary,
    openModal,
    closeModal,
    handleUpdate,
    setAssigneeIds,
    setPrimaryAssigneeId,
  };
}

/**
 * Get the MockPerson objects for a set of IDs.
 */
export function getPersonsById(ids: Set<string>): MockPerson[] {
  const all = [...mockPeopleWithPermission, ...mockPeopleWithoutPermission];
  return all.filter((p) => ids.has(p.id));
}

// ─── Component ─────────────────────────────────────────────────────────────
export function AssigneeSelector({
  open,
  onClose,
  assigneeIds: initialIds,
  primaryAssigneeId: initialPrimary,
  onUpdate,
  readOnly,
}: AssigneeSelectorProps) {
  // Local working copy so user can cancel without losing previous state
  const [localIds, setLocalIds] = useState<Set<string>>(new Set(initialIds));
  const [localPrimary, setLocalPrimary] = useState<string | null>(initialPrimary);
  const [leftSearch, setLeftSearch] = useState("");
  const [rightSearch, setRightSearch] = useState("");
  const [tab, setTab] = useState<"with" | "without">("with");

  // Reset local state when modal opens
  useMemo(() => {
    if (open) {
      setLocalIds(new Set(initialIds));
      setLocalPrimary(initialPrimary);
      setLeftSearch("");
      setRightSearch("");
      setTab("with");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const allPeople = useMemo(
    () => [...mockPeopleWithPermission, ...mockPeopleWithoutPermission],
    [],
  );

  const allAssignees = useMemo(
    () => allPeople.filter((p) => localIds.has(p.id)),
    [allPeople, localIds],
  );

  const filteredAssignees = useMemo(() => {
    if (!leftSearch) return allAssignees;
    const q = leftSearch.toLowerCase();
    return allAssignees.filter((p) => p.name.toLowerCase().includes(q));
  }, [allAssignees, leftSearch]);

  const availablePeople = useMemo(() => {
    const pool = tab === "with" ? mockPeopleWithPermission : mockPeopleWithoutPermission;
    if (!rightSearch) return pool;
    const q = rightSearch.toLowerCase();
    return pool.filter((p) => p.name.toLowerCase().includes(q));
  }, [tab, rightSearch]);

  const addAssignee = (id: string) => setLocalIds((prev) => new Set([...prev, id]));
  const removeAssignee = (id: string) => {
    setLocalIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    if (localPrimary === id) setLocalPrimary(null);
  };
  const togglePrimary = (id: string) => setLocalPrimary((prev) => (prev === id ? null : id));

  if (!open) return <span style={{ display: "none" }} />;

  const hasAssignees = allAssignees.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "var(--overlay-modal)" }}
      onClick={onClose}
    >
      <div
        className="flex flex-col"
        style={{
          width: "860px",
          maxWidth: "95vw",
          height: "78vh",
          maxHeight: "78vh",
          background: "var(--background)",
          boxShadow: "var(--elevation-modal)",
          borderRadius: "var(--radius-xl)",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Two-Panel Row ── */}
        <div className="flex flex-1" style={{ overflow: "hidden", minHeight: 0 }}>
          {/* ── Left Panel: Plan Assignees ── */}
          <div
            className="flex flex-col"
            style={{ width: readOnly ? "100%" : "400px", borderRight: readOnly ? "none" : "1px solid var(--border)" }}
          >
            {/* Left Header */}
            <div
              className="flex items-center shrink-0"
              style={{
                padding: "var(--spacing-2-5) var(--spacing-4)",
                gap: "var(--spacing-2-5)",
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
                    d={planAssigneeSvgPaths.p9096200}
                    fill="var(--foreground)"
                    fillRule="evenodd"
                    opacity="0.5"
                  />
                </svg>
              </button>
              <span
                style={{
                  fontSize: "var(--text-body-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--foreground)",
                  fontFamily: FONT,
                }}
              >
                Plan Assignee
              </span>
            </div>

            {/* Left Body */}
            {hasAssignees ? (
              <div
                className="flex flex-col flex-1 overflow-y-auto scrollbar-thin scrollbar-auto-hide"
                style={{ padding: "var(--spacing-3) var(--spacing-4)", gap: "var(--spacing-3)" }}
              >
                {/* Warning banner */}
                <div
                  style={{
                    padding: "var(--spacing-2) var(--spacing-3)",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--status-awaiting-bg)",
                  }}
                >
                  <div className="flex items-start" style={{ gap: "var(--spacing-2)" }}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 13.3333 13.3333"
                      fill="none"
                      className="shrink-0"
                      style={{ marginTop: "1px" }}
                    >
                      <path d={planAssigneeSvgPaths.pa780b80} fill="var(--chart-3)" />
                    </svg>
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--status-awaiting-text)",
                        flex: 1,
                        fontFamily: FONT,
                        lineHeight: "var(--leading-body)",
                      }}
                    >
                      If you don&apos;t assign this plan to anyone, all assigned owners will be
                      notified to pick this item for cycle counting.
                    </span>
                  </div>
                </div>

                {/* Search within assignees */}
                <div
                  className="relative"
                  style={{
                    borderRadius: "var(--radius-sm)",
                    background: "var(--background)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="flex items-center"
                    style={{
                      padding: "var(--spacing-2) var(--spacing-3)",
                      gap: "var(--spacing-2)",
                    }}
                  >
                    <Search
                      size={15}
                      style={{ color: "var(--text-tertiary)", flexShrink: 0 }}
                    />
                    <input
                      type="text"
                      value={leftSearch}
                      onChange={(e) => setLeftSearch(e.target.value)}
                      placeholder="Search with username"
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--foreground)",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        padding: 0,
                        width: "100%",
                        fontFamily: FONT,
                      }}
                    />
                  </div>
                </div>

                {/* Plan Assignee count */}
                <div className="flex flex-col" style={{ gap: "var(--spacing-2)" }}>
                  <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-secondary)",
                        fontFamily: FONT,
                      }}
                    >
                      Plan Assignee(s)
                    </span>
                    <span
                      className="inline-flex items-center"
                      style={{
                        padding: "1px var(--spacing-2)",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--secondary)",
                        border: "1px solid var(--border)",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--foreground)",
                        fontFamily: FONT,
                      }}
                    >
                      {String(allAssignees.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Assignee list */}
                  <div className="flex flex-col" style={{ gap: 0 }}>
                    {filteredAssignees.map((person) => (
                      <div
                        key={person.id}
                        className="flex items-center"
                        style={{ gap: "var(--spacing-2)", height: "52px", borderBottom: "0.5px solid var(--border)" }}
                      >
                        {!readOnly && (
                          <button
                            onClick={() => removeAssignee(person.id)}
                            className="flex items-center justify-center shrink-0"
                            style={{
                              width: "20px",
                              height: "20px",
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                              padding: 0,
                            }}
                          >
                            <svg
                              width="16.67"
                              height="16.67"
                              viewBox="0 0 16.6667 16.6667"
                              fill="none"
                            >
                              <path
                                d={planAssigneeSvgPaths.p4b53080}
                                fill="var(--text-secondary)"
                              />
                            </svg>
                          </button>
                        )}
                        {readOnly && <div style={{ width: "20px", height: "20px" }} />}
                        <div
                          className="relative rounded-full shrink-0 pointer-events-none"
                          style={{ width: "34px", height: "34px" }}
                        >
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{ background: person.bgColor }}
                          >
                            <img
                              alt={person.name}
                              className="absolute inset-0 max-w-none object-cover rounded-full"
                              style={{ width: "100%", height: "100%" }}
                              src={person.avatar}
                            />
                          </div>
                          <div
                            className="absolute rounded-full"
                            style={{
                              inset: "-1.5px",
                              border: "1.5px solid var(--background)",
                              borderRadius: "var(--radius-full)",
                              pointerEvents: "none",
                            }}
                          />
                        </div>
                        <div
                          className="flex items-center justify-between"
                          style={{ flex: 1, minWidth: 0 }}
                        >
                          <div
                            className="flex flex-col"
                            style={{ gap: "1px", minWidth: 0 }}
                          >
                            <span
                              style={{
                                fontSize: "var(--text-sm)",
                                fontWeight: "var(--font-weight-medium)",
                                color: "var(--foreground)",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                fontFamily: FONT,
                              }}
                            >
                              {person.name}
                            </span>
                            {person.status && (
                              <span
                                style={{
                                  fontSize: "var(--text-caption)",
                                  fontWeight: "var(--font-weight-medium)",
                                  color: "var(--destructive)",
                                  fontFamily: FONT,
                                }}
                              >
                                {person.status}
                              </span>
                            )}
                          </div>
                          <div
                            className="flex items-center shrink-0"
                            style={{ gap: "var(--spacing-1-5)" }}
                          >
                            <button
                              onClick={() => !readOnly && togglePrimary(person.id)}
                              disabled={readOnly}
                              className="flex items-center shrink-0"
                              style={{
                                width: "32px",
                                height: "18px",
                                borderRadius: "var(--radius-full)",
                                background:
                                  localPrimary === person.id
                                    ? "var(--primary)"
                                    : "var(--secondary)",
                                padding: "var(--spacing-0-5)",
                                border: "none",
                                cursor: readOnly ? "not-allowed" : "pointer",
                                opacity: readOnly ? 0.6 : 1,
                                justifyContent:
                                  localPrimary === person.id ? "flex-end" : "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "14px",
                                  height: "14px",
                                  borderRadius: "var(--radius-full)",
                                  background: "var(--background)",
                                  boxShadow: "var(--elevation-card-item-sm)",
                                }}
                              />
                            </button>
                            <span
                              style={{
                                fontSize: "var(--text-caption)",
                                fontWeight: "var(--font-weight-medium)",
                                color: "var(--text-secondary)",
                                fontFamily: FONT,
                              }}
                            >
                              Primary
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {filteredAssignees.length === 0 && leftSearch && (
                      <div
                        className="flex items-center justify-center"
                        style={{
                          padding: "var(--spacing-5)",
                          color: "var(--text-secondary)",
                          fontSize: "var(--text-sm)",
                          fontFamily: FONT,
                        }}
                      >
                        No matching assignees
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="flex flex-col flex-1 items-center justify-center"
                style={{ padding: "var(--spacing-4)", gap: "var(--spacing-5)" }}
              >
                <div style={{ width: "160px", height: "126px" }}>
                  <svg
                    width="160"
                    height="126"
                    viewBox="0 0 175 138"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d={emptyStateSvgPaths.p2a65d300}
                      stroke="var(--border)"
                      strokeWidth="0.98"
                    />
                    <path d={emptyStateSvgPaths.p156fba80} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.p3f8a9040} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.peebbb00} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.p1c768f00} fill="var(--border)" />
                    <path
                      d={emptyStateSvgPaths.pefa1580}
                      stroke="var(--border)"
                      strokeWidth="0.98"
                    />
                    <path d={emptyStateSvgPaths.p1952100} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.p28cf9100} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.p769100} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.p50f7500} fill="var(--border)" />
                    <path
                      d={emptyStateSvgPaths.p1b70e300}
                      stroke="var(--border)"
                      strokeWidth="0.98"
                    />
                    <path d={emptyStateSvgPaths.p12197080} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.p33fa5d00} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.p31676300} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.p28ff9a00} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.p120d3180} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.pfdea600} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.p20ac7bf0} fill="var(--border)" />
                    <path d={emptyStateSvgPaths.p2ed14400} fill="var(--border)" />
                  </svg>
                </div>
                <div
                  className="flex flex-col items-center text-center"
                  style={{ gap: "var(--spacing-1-5)" }}
                >
                  <span
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--foreground)",
                      fontFamily: FONT,
                    }}
                  >
                    No Plan Assignee Added
                  </span>
                  <span
                    style={{
                      fontSize: "var(--text-caption)",
                      fontWeight: "var(--font-weight-normal)",
                      color: "var(--text-secondary)",
                      maxWidth: "260px",
                      lineHeight: "var(--leading-body)",
                      fontFamily: FONT,
                    }}
                  >
                    If you don&apos;t assign this plan to anyone, all assigned owners will be
                    notified to pick this item for cycle counting.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* ── Right Panel: Available People ── */}
          {!readOnly && (
            <div
              className="flex flex-col flex-1"
              style={{ minWidth: 0, background: "var(--secondary)" }}
            >
              <div
                className="flex flex-col"
                style={{ padding: "var(--spacing-4) var(--spacing-4) 0", gap: "var(--spacing-4)" }}
              >
                <div className="flex items-center">
                  <span
                    style={{
                      fontSize: "var(--text-body-sm)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--foreground)",
                      fontFamily: FONT,
                    }}
                  >
                    Select assignee to add to the plan
                  </span>
                </div>

                <div
                  className="flex flex-col rounded-lg"
                  style={{
                    background: "var(--background)",
                    border: "0.6px solid var(--border)",
                    boxShadow: "var(--elevation-popover)",
                    overflow: "hidden",
                  }}
                >
                  {/* Tabs */}
                  <div
                    className="relative flex items-start"
                    style={{
                      height: "32px",
                      paddingLeft: "var(--spacing-4)",
                      gap: "var(--spacing-4)",
                    }}
                  >
                    <div
                      className="absolute inset-0 pointer-events-none px-[0px] py-[8px]"
                      style={{ borderBottom: "1px solid var(--border)" }}
                    />
                    <button
                      onClick={() => {
                        setTab("with");
                        setRightSearch("");
                      }}
                      className="relative flex items-center justify-center shrink-0"
                      style={{
                        height: "32px",
                        gap: "var(--spacing-1)",
                        padding: "var(--spacing-2) 0",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 14 11.3333"
                        fill="none"
                        className="shrink-0"
                      >
                        <path
                          d={planAssigneeSvgPaths.p2af7e500}
                          fill={tab === "with" ? "var(--primary)" : "var(--text-secondary)"}
                        />
                        <path
                          d={planAssigneeSvgPaths.p291fb580}
                          fill={tab === "with" ? "var(--primary)" : "var(--text-secondary)"}
                        />
                        <path
                          d={planAssigneeSvgPaths.p11b53400}
                          fill={tab === "with" ? "var(--primary)" : "var(--text-secondary)"}
                        />
                      </svg>
                      <span
                        style={{
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-medium)",
                          color: tab === "with" ? "var(--primary)" : "var(--text-secondary)",
                          fontFamily: FONT,
                        }}
                      >
                        With Permission
                      </span>
                      {tab === "with" && (
                        <div
                          className="absolute bottom-0 left-0 right-0"
                          style={{ height: "2px", background: "var(--primary-600)" }}
                        />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setTab("without");
                        setRightSearch("");
                      }}
                      className="relative flex items-center justify-center shrink-0"
                      style={{
                        height: "32px",
                        gap: "var(--spacing-1)",
                        padding: "var(--spacing-2) 0",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 12 12.0001"
                        fill="none"
                        className="shrink-0"
                      >
                        <path
                          d={planAssigneeSvgPaths.p13d21600}
                          fill={tab === "without" ? "var(--primary)" : "var(--text-secondary)"}
                        />
                      </svg>
                      <span
                        style={{
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-medium)",
                          color:
                            tab === "without" ? "var(--primary)" : "var(--text-secondary)",
                          fontFamily: FONT,
                        }}
                      >
                        Without Permission
                      </span>
                      {tab === "without" && (
                        <div
                          className="absolute bottom-0 left-0 right-0"
                          style={{ height: "2px", background: "var(--primary-600)" }}
                        />
                      )}
                    </button>
                  </div>

                  {/* Content area */}
                  <div
                    className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-auto-hide"
                    style={{ maxHeight: "calc(78vh - 150px)" }}
                  >
                    <div
                      className="flex flex-col"
                      style={{
                        padding: "var(--spacing-3) var(--spacing-4)",
                        gap: "var(--spacing-3)",
                      }}
                    >
                      {tab === "without" && (
                        <div
                          style={{
                            padding: "var(--spacing-2) var(--spacing-3)",
                            borderRadius: "var(--radius-sm)",
                            background: "var(--status-awaiting-bg)",
                          }}
                        >
                          <div
                            className="flex items-start"
                            style={{ gap: "var(--spacing-2)" }}
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 13.3333 13.3333"
                              fill="none"
                              className="shrink-0"
                              style={{ marginTop: "1px" }}
                            >
                              <path d={planAssigneeSvgPaths.pa780b80} fill="var(--chart-3)" />
                            </svg>
                            <span
                              style={{
                                fontSize: "var(--text-sm)",
                                fontWeight: "var(--font-weight-medium)",
                                color: "var(--status-awaiting-text)",
                                flex: 1,
                                fontFamily: FONT,
                                lineHeight: "var(--leading-body)",
                              }}
                            >
                              Users without permission will get temporary access to this plan
                              only. Access is revoked when the plan is no longer active.
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Search */}
                      <div
                        className="relative"
                        style={{
                          borderRadius: "var(--radius-sm)",
                          background: "var(--background)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <div
                          className="flex items-center"
                          style={{
                            padding: "var(--spacing-2) var(--spacing-3)",
                            gap: "var(--spacing-2)",
                          }}
                        >
                          <Search
                            size={15}
                            style={{ color: "var(--text-tertiary)", flexShrink: 0 }}
                          />
                          <input
                            type="text"
                            value={rightSearch}
                            onChange={(e) => setRightSearch(e.target.value)}
                            placeholder="Search with username"
                            style={{
                              fontSize: "var(--text-sm)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--foreground)",
                              background: "transparent",
                              border: "none",
                              outline: "none",
                              padding: 0,
                              width: "100%",
                              fontFamily: FONT,
                            }}
                          />
                        </div>
                      </div>

                      {/* People list */}
                      <div className="flex flex-col" style={{ gap: "var(--spacing-2)" }}>
                        <div
                          className="flex items-center"
                          style={{ gap: "var(--spacing-2)" }}
                        >
                          <span
                            style={{
                              fontSize: "var(--text-sm)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--text-secondary)",
                              fontFamily: FONT,
                            }}
                          >
                            {tab === "with" ? "With Permission" : "Without Permission"}
                          </span>
                          <span
                            className="inline-flex items-center"
                            style={{
                              padding: "1px var(--spacing-2)",
                              borderRadius: "var(--radius-sm)",
                              background: "var(--secondary)",
                              border: "1px solid var(--border)",
                              fontSize: "var(--text-sm)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--foreground)",
                              fontFamily: FONT,
                            }}
                          >
                            {String(availablePeople.length).padStart(2, "0")}
                          </span>
                        </div>

                        <div
                          className="flex flex-col"
                          style={{ gap: 0 }}
                        >
                          {availablePeople.map((person) => {
                            const isAdded = localIds.has(person.id);
                            return (
                              <div
                                key={person.id}
                                className="flex items-center"
                                style={{ height: "52px", borderBottom: "0.5px solid var(--border)" }}
                              >
                                <div
                                  className="flex items-center flex-1"
                                  style={{
                                    gap: "var(--spacing-2-5)",
                                    padding: "var(--spacing-2) 0",
                                  }}
                                >
                                  <div
                                    className="relative rounded-full shrink-0 pointer-events-none"
                                    style={{ width: "34px", height: "34px" }}
                                  >
                                    <div
                                      className="absolute inset-0 rounded-full"
                                      style={{ background: person.bgColor }}
                                    >
                                      <img
                                        alt={person.name}
                                        className="absolute inset-0 max-w-none object-cover rounded-full"
                                        style={{ width: "100%", height: "100%" }}
                                        src={person.avatar}
                                      />
                                    </div>
                                    <div
                                      className="absolute rounded-full"
                                      style={{
                                        inset: "-1.5px",
                                        border: "1.5px solid var(--background)",
                                        borderRadius: "var(--radius-full)",
                                        pointerEvents: "none",
                                      }}
                                    />
                                  </div>
                                  <div
                                    className="flex flex-col flex-1"
                                    style={{ gap: "1px", minWidth: 0 }}
                                  >
                                    <span
                                      style={{
                                        fontSize: "var(--text-sm)",
                                        fontWeight: "var(--font-weight-medium)",
                                        color: "var(--foreground)",
                                        fontFamily: FONT,
                                      }}
                                    >
                                      {person.name}
                                    </span>
                                    {person.status && (
                                      <span
                                        style={{
                                          fontSize: "var(--text-caption)",
                                          fontWeight: "var(--font-weight-medium)",
                                          color: "var(--destructive)",
                                          fontFamily: FONT,
                                        }}
                                      >
                                        {person.status}
                                      </span>
                                    )}
                                  </div>
                                  {isAdded ? (
                                    <button
                                      onClick={() => removeAssignee(person.id)}
                                      className="flex items-center shrink-0"
                                      style={{
                                        gap: "var(--spacing-1)",
                                        padding: "var(--spacing-1-5) var(--spacing-2-5)",
                                        borderRadius: "var(--radius-sm)",
                                        background: "var(--status-cancelled-bg)",
                                        border: "none",
                                        cursor: "pointer",
                                      }}
                                    >
                                      <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 13.3333 13.3333"
                                        fill="none"
                                      >
                                        <path
                                          d={planAssigneeSvgPaths.p266be000}
                                          fill="var(--destructive)"
                                        />
                                      </svg>
                                      <span
                                        style={{
                                          fontSize: "var(--text-sm)",
                                          fontWeight: "var(--font-weight-semibold)",
                                          color: "var(--destructive)",
                                          fontFamily: FONT,
                                        }}
                                      >
                                        Remove
                                      </span>
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => addAssignee(person.id)}
                                      className="flex items-center shrink-0"
                                      style={{
                                        gap: "var(--spacing-1)",
                                        padding: "var(--spacing-1-5) var(--spacing-2-5)",
                                        borderRadius: "var(--radius-sm)",
                                        background: "var(--background)",
                                        border: "1px solid var(--border)",
                                        cursor: "pointer",
                                        boxShadow: "var(--elevation-xs)",
                                      }}
                                    >
                                      <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14.6667 10.6667"
                                        fill="none"
                                      >
                                        <path
                                          d={planAssigneeSvgPaths.p34d08d70}
                                          fill="var(--foreground)"
                                        />
                                      </svg>
                                      <span
                                        style={{
                                          fontSize: "var(--text-sm)",
                                          fontWeight: "var(--font-weight-semibold)",
                                          color: "var(--foreground)",
                                          fontFamily: FONT,
                                        }}
                                      >
                                        Add
                                      </span>
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                          {availablePeople.length === 0 && (
                            <div
                              className="flex items-center justify-center"
                              style={{
                                padding: "var(--spacing-5)",
                                color: "var(--text-secondary)",
                                fontSize: "var(--text-sm)",
                                fontFamily: FONT,
                              }}
                            >
                              No people found
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Shared Modal Footer ── */}
        <div
          className="flex items-center justify-end shrink-0"
          style={{
            padding: "var(--spacing-2-5) var(--spacing-4)",
            borderTop: "1px solid var(--border)",
            background: "var(--background)",
            gap: "var(--spacing-2)",
          }}
        >
          {!readOnly && (
            <button
              onClick={onClose}
              className="relative"
              style={{
                padding: "var(--spacing-2) var(--spacing-3)",
                borderRadius: "var(--radius-sm)",
                background: "var(--background)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)",
                boxShadow: "var(--elevation-xs)",
                fontFamily: FONT,
              }}
            >
              Cancel
            </button>
          )}
          <button
            onClick={readOnly ? onClose : () => onUpdate(localIds, localPrimary)}
            style={{
              padding: "var(--spacing-2) var(--spacing-3)",
              borderRadius: "var(--radius-sm)",
              background: readOnly ? "var(--background)" : "var(--primary)",
              border: readOnly ? "1px solid var(--border)" : "none",
              cursor: "pointer",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-semibold)",
              color: readOnly ? "var(--foreground)" : "var(--primary-foreground)",
              boxShadow: "var(--elevation-xs)",
              fontFamily: FONT,
            }}
          >
            {readOnly ? "Close" : "Update Assignee(s)"}
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Compact inline assignee display: avatar stack + manage button.
 * Typically used inside detail headers/sections.
 */
export function AssigneeAvatarStack({
  assigneeIds,
  maxVisible = 4,
  onManageClick,
}: {
  assigneeIds: Set<string>;
  maxVisible?: number;
  onManageClick: () => void;
}) {
  const persons = getPersonsById(assigneeIds);
  const visible = persons.slice(0, maxVisible);
  const overflow = persons.length - maxVisible;
  const hasDeclined = persons.some((p) => p.status === "Task Declined");

  return (
    <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
      {visible.length > 0 && (
        <div className="flex items-center">
          {visible.map((a, i) => (
            <img
              key={a.id}
              src={a.avatar}
              alt={a.name}
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "var(--radius-full)",
                border: "2px solid var(--background)",
                marginLeft: i === 0 ? 0 : "-8px",
                objectFit: "cover",
              }}
            />
          ))}
          {overflow > 0 && (
            <div
              className="flex items-center justify-center"
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "var(--radius-full)",
                background: "var(--primary-50)",
                color: "var(--primary)",
                fontSize: "var(--text-xs)",
                fontWeight: "var(--font-weight-semibold)",
                border: "2px solid var(--background)",
                marginLeft: "-8px",
                fontFamily: FONT,
              }}
            >
              +{overflow}
            </div>
          )}
        </div>
      )}
      <button
        onClick={onManageClick}
        style={{
          fontSize: "var(--text-caption)",
          fontWeight: "var(--font-weight-medium)",
          color: "var(--primary)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "var(--spacing-1) var(--spacing-2)",
          borderRadius: "var(--radius-sm)",
          fontFamily: FONT,
          transition: "background 0.15s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "var(--primary-50)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        {persons.length === 0 ? "Add Assignees" : "Manage"}
      </button>
      {hasDeclined && (
        <span
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--status-cancelled-text)",
            fontFamily: FONT,
          }}
        >
          Task Declined
        </span>
      )}
    </div>
  );
}