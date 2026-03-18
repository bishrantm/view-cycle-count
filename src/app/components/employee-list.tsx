// ─────────────────────────────────────────────────────────────────────────────
// employee-list.tsx — Employee Listing Table
// Data-driven: columns + employees from employee-data.ts render via map().
// All styling uses CSS custom properties from the design system.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useMemo, useCallback } from "react";
import {
  Search,
  Plus,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  Download,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  X,
} from "lucide-react";
import {
  generateEmployees,
  COLUMNS,
  STATUS_CONFIG,
  TYPE_CONFIG,
  ALL_DEPARTMENTS,
  ALL_LOCATIONS,
  avatarColor,
  initials,
  PAGE_LABELS,
} from "./employee-data";
import type { Employee, EmployeeStatus, Department, ColumnDef } from "./employee-data";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

// ─── Constants ──────────────────────────────────────────────────────────────
const ROWS_PER_PAGE_OPTIONS = [10, 20, 50] as const;

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function EmployeeList() {
  // ─── Data ──────────────────────────────────────────────────────────────
  const allEmployees = useMemo(() => generateEmployees(), []);

  // ─── State ─────────────────────────────────────────────────────────────
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<string>("empCode");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [statusFilter, setStatusFilter] = useState<EmployeeStatus | "all">("all");
  const [deptFilter, setDeptFilter] = useState<Department | "all">("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // ─── Filtering ─────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let list = allEmployees;
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (e) =>
          e.empCode.toLowerCase().includes(q) ||
          `${e.firstName} ${e.lastName}`.toLowerCase().includes(q) ||
          e.email.toLowerCase().includes(q) ||
          e.department.toLowerCase().includes(q) ||
          e.designation.toLowerCase().includes(q)
      );
    }
    if (statusFilter !== "all") list = list.filter((e) => e.status === statusFilter);
    if (deptFilter !== "all") list = list.filter((e) => e.department === deptFilter);
    if (locationFilter !== "all") list = list.filter((e) => e.location === locationFilter);
    return list;
  }, [allEmployees, search, statusFilter, deptFilter, locationFilter]);

  // ─── Sorting ───────────────────────────────────────────────────────────
  const sorted = useMemo(() => {
    const dir = sortDir === "asc" ? 1 : -1;
    return [...filtered].sort((a, b) => {
      let va: string, vb: string;
      if (sortKey === "name") {
        va = `${a.firstName} ${a.lastName}`;
        vb = `${b.firstName} ${b.lastName}`;
      } else {
        va = String((a as Record<string, unknown>)[sortKey] ?? "");
        vb = String((b as Record<string, unknown>)[sortKey] ?? "");
      }
      return va.localeCompare(vb) * dir;
    });
  }, [filtered, sortKey, sortDir]);

  // ─── Pagination ────────────────────────────────────────────────────────
  const totalPages = Math.max(1, Math.ceil(sorted.length / perPage));
  const safePage = Math.min(page, totalPages);
  const paged = sorted.slice((safePage - 1) * perPage, safePage * perPage);

  const handleSort = useCallback(
    (key: string) => {
      if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
      else {
        setSortKey(key);
        setSortDir("asc");
      }
      setPage(1);
    },
    [sortKey]
  );

  const activeFilterCount = [statusFilter !== "all", deptFilter !== "all", locationFilter !== "all"].filter(Boolean).length;

  const clearFilters = () => {
    setStatusFilter("all");
    setDeptFilter("all");
    setLocationFilter("all");
    setPage(1);
  };

  // ═════════════════════════════════════════════════════════════════════════
  // RENDER
  // ═════════════════════════════════════════════════════════════════════════
  return (
    <div
      className="flex flex-col"
      style={{
        height: "100%",
        background: "var(--surface-secondary)",
        fontFamily: "var(--font-family)",
      }}
    >
      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between shrink-0"
        style={{
          padding: "var(--spacing-5) var(--spacing-6)",
          background: "var(--background)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="flex flex-col" style={{ gap: "var(--spacing-0-5)" }}>
          <h1
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              lineHeight: "var(--leading-tight)",
              margin: 0,
            }}
          >
            {PAGE_LABELS.title}
          </h1>
          <p
            style={{
              fontSize: "var(--text-body-sm)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--text-secondary)",
              lineHeight: "var(--leading-normal)",
              margin: 0,
            }}
          >
            {PAGE_LABELS.subtitle}
          </p>
        </div>
        <button
          className="flex items-center"
          style={{
            height: "36px",
            padding: "0 var(--spacing-4)",
            gap: "var(--spacing-2)",
            borderRadius: "var(--radius-md)",
            border: "none",
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            fontSize: "var(--text-body-sm)",
            fontWeight: "var(--font-weight-medium)",
            cursor: "pointer",
          }}
        >
          <Plus size={16} />
          {PAGE_LABELS.addButton}
        </button>
      </div>

      {/* ── Toolbar: Search + Filters ───────────────────────────────────── */}
      <div
        className="flex flex-col shrink-0"
        style={{
          padding: "var(--spacing-3) var(--spacing-6)",
          background: "var(--background)",
          borderBottom: "1px solid var(--border)",
          gap: "var(--spacing-3)",
        }}
      >
        <div className="flex items-center" style={{ gap: "var(--spacing-3)" }}>
          {/* Search */}
          <div
            className="flex items-center flex-1"
            style={{
              height: "36px",
              maxWidth: "360px",
              padding: "0 var(--spacing-3)",
              gap: "var(--spacing-2)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              background: "var(--input-background)",
            }}
          >
            <Search size={15} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search by name, ID, email, department..."
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                flex: 1,
                fontSize: "var(--text-body-sm)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--foreground)",
              }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-tertiary)", padding: 0, display: "flex" }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Filter toggle */}
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="flex items-center"
            style={{
              height: "36px",
              padding: "0 var(--spacing-3)",
              gap: "var(--spacing-1-5)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              background: showFilters ? "var(--primary-50)" : "var(--background)",
              color: showFilters ? "var(--primary)" : "var(--text-secondary)",
              fontSize: "var(--text-body-sm)",
              fontWeight: "var(--font-weight-medium)",
              cursor: "pointer",
            }}
          >
            <Filter size={15} />
            Filters
            {activeFilterCount > 0 && (
              <span
                className="inline-flex items-center justify-center"
                style={{
                  minWidth: "18px",
                  height: "18px",
                  borderRadius: "var(--radius-full)",
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--font-weight-semibold)",
                  padding: "0 var(--spacing-1)",
                }}
              >
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Export */}
          <button
            className="flex items-center"
            style={{
              height: "36px",
              padding: "0 var(--spacing-3)",
              gap: "var(--spacing-1-5)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              background: "var(--background)",
              color: "var(--text-secondary)",
              fontSize: "var(--text-body-sm)",
              fontWeight: "var(--font-weight-medium)",
              cursor: "pointer",
            }}
          >
            <Download size={15} />
            Export
          </button>

          {/* Result count */}
          <span
            style={{
              marginLeft: "auto",
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-tertiary)",
            }}
          >
            {sorted.length} employee{sorted.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* ── Filter Row (collapsible) ──────────────────────────────────── */}
        {showFilters && (
          <div className="flex items-center" style={{ gap: "var(--spacing-3)" }}>
            <FilterSelect
              label="Status"
              value={statusFilter}
              options={[
                { value: "all", label: "All Statuses" },
                ...Object.entries(STATUS_CONFIG).map(([k, v]) => ({ value: k, label: v.label })),
              ]}
              onChange={(v) => { setStatusFilter(v as EmployeeStatus | "all"); setPage(1); }}
            />
            <FilterSelect
              label="Department"
              value={deptFilter}
              options={[
                { value: "all", label: "All Departments" },
                ...ALL_DEPARTMENTS.map((d) => ({ value: d, label: d })),
              ]}
              onChange={(v) => { setDeptFilter(v as Department | "all"); setPage(1); }}
            />
            <FilterSelect
              label="Location"
              value={locationFilter}
              options={[
                { value: "all", label: "All Locations" },
                ...ALL_LOCATIONS.map((l) => ({ value: l, label: l })),
              ]}
              onChange={(v) => { setLocationFilter(v); setPage(1); }}
            />
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "var(--text-caption)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--primary)",
                  padding: "var(--spacing-1) var(--spacing-2)",
                }}
              >
                Clear all
              </button>
            )}
          </div>
        )}
      </div>

      {/* ── Table ────────────────────────────────────────────────────────── */}
      <div className="flex-1 overflow-auto" style={{ padding: "var(--spacing-4) var(--spacing-6)" }}>
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border)",
            overflow: "hidden",
            background: "var(--background)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            {/* ── Header ─────────────────────────────────────────────────── */}
            <thead>
              <tr
                style={{
                  background: "var(--surface-secondary)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {/* Checkbox */}
                <Th style={{ width: "44px", textAlign: "center" }}>
                  <input type="checkbox" style={{ accentColor: "var(--primary)", cursor: "pointer" }} />
                </Th>
                {COLUMNS.map((col) => (
                  <Th
                    key={col.key}
                    style={{ width: col.width === "auto" ? undefined : col.width, minWidth: col.width === "auto" ? "200px" : undefined }}
                    sortable={col.sortable}
                    sorted={sortKey === col.key ? sortDir : undefined}
                    onClick={() => col.sortable && handleSort(col.key)}
                  >
                    {col.label}
                  </Th>
                ))}
                {/* Actions */}
                <Th style={{ width: "48px" }} />
              </tr>
            </thead>

            {/* ── Body ───────────────────────────────────────────────────── */}
            <tbody>
              {paged.length === 0 ? (
                <tr>
                  <td
                    colSpan={COLUMNS.length + 2}
                    style={{
                      textAlign: "center",
                      padding: "var(--spacing-12) var(--spacing-4)",
                      color: "var(--text-tertiary)",
                      fontSize: "var(--text-body-sm)",
                    }}
                  >
                    No employees found matching your criteria.
                  </td>
                </tr>
              ) : (
                paged.map((emp) => (
                  <EmployeeRow key={emp.id} emp={emp} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Pagination ───────────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between shrink-0"
        style={{
          padding: "var(--spacing-3) var(--spacing-6)",
          background: "var(--background)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="flex items-center" style={{ gap: "var(--spacing-2)" }}>
          <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>Rows per page</span>
          <select
            value={perPage}
            onChange={(e) => { setPerPage(Number(e.target.value)); setPage(1); }}
            style={{
              height: "28px",
              padding: "0 var(--spacing-2)",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border)",
              background: "var(--background)",
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--foreground)",
              cursor: "pointer",
            }}
          >
            {ROWS_PER_PAGE_OPTIONS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center" style={{ gap: "var(--spacing-3)" }}>
          <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
            {sorted.length === 0 ? "0 of 0" : `${(safePage - 1) * perPage + 1}–${Math.min(safePage * perPage, sorted.length)} of ${sorted.length}`}
          </span>
          <div className="flex items-center" style={{ gap: "var(--spacing-1)" }}>
            <PaginationButton disabled={safePage <= 1} onClick={() => setPage(safePage - 1)}>
              <ChevronLeft size={16} />
            </PaginationButton>
            <PaginationButton disabled={safePage >= totalPages} onClick={() => setPage(safePage + 1)}>
              <ChevronRight size={16} />
            </PaginationButton>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SUB-COMPONENTS (kept minimal, data-driven)
// ═══════════════════════════════════════════════════════════════════════════

/** Table header cell with optional sort indicator */
function Th({
  children,
  sortable,
  sorted,
  onClick,
  style,
}: {
  children?: React.ReactNode;
  sortable?: boolean;
  sorted?: "asc" | "desc";
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <th
      onClick={onClick}
      style={{
        padding: "0 var(--spacing-3)",
        height: "40px",
        fontSize: "var(--text-caption)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--text-secondary)",
        textAlign: "left",
        cursor: sortable ? "pointer" : "default",
        userSelect: "none",
        whiteSpace: "nowrap",
        borderBottom: "1px solid var(--border)",
        ...style,
      }}
    >
      <span className="inline-flex items-center" style={{ gap: "var(--spacing-1)" }}>
        {children}
        {sortable && (
          sorted === "asc" ? <ChevronUp size={13} /> :
          sorted === "desc" ? <ChevronDown size={13} /> :
          <ChevronsUpDown size={13} style={{ opacity: 0.35 }} />
        )}
      </span>
    </th>
  );
}

/** Single employee row — renders cells based on column order */
function EmployeeRow({ emp }: { emp: Employee }) {
  const fullName = `${emp.firstName} ${emp.lastName}`;
  const ini = initials(emp.firstName, emp.lastName);
  const avColor = avatarColor(fullName);
  const st = STATUS_CONFIG[emp.status];
  const tp = TYPE_CONFIG[emp.type];

  return (
    <tr
      className="row-hover-group"
      style={{
        borderBottom: "1px solid var(--border)",
        cursor: "pointer",
        transition: "background 0.15s ease",
      }}
    >
      {/* Checkbox */}
      <td style={{ padding: "0 var(--spacing-3)", textAlign: "center", width: "44px" }}>
        <input type="checkbox" style={{ accentColor: "var(--primary)", cursor: "pointer" }} onClick={(e) => e.stopPropagation()} />
      </td>

      {/* Emp ID */}
      <td style={{ padding: "0 var(--spacing-3)", height: "52px" }}>
        <span
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--primary)",
          }}
        >
          {emp.empCode}
        </span>
      </td>

      {/* Name + email */}
      <td style={{ padding: "0 var(--spacing-3)" }}>
        <div className="flex items-center" style={{ gap: "var(--spacing-2-5)" }}>
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "var(--radius-full)",
              background: avColor,
              color: "var(--primary-foreground)",
              fontSize: "var(--text-xs)",
              fontWeight: "var(--font-weight-semibold)",
            }}
          >
            {ini}
          </div>
          <div className="flex flex-col" style={{ gap: "var(--spacing-0)" }}>
            <span
              style={{
                fontSize: "var(--text-body-sm)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--foreground)",
                lineHeight: "var(--leading-snug)",
              }}
            >
              {fullName}
            </span>
            <span
              style={{
                fontSize: "var(--text-caption)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--text-tertiary)",
                lineHeight: "var(--leading-snug)",
              }}
            >
              {emp.email}
            </span>
          </div>
        </div>
      </td>

      {/* Department */}
      <td style={{ padding: "0 var(--spacing-3)" }}>
        <span style={{ fontSize: "var(--text-body-sm)", color: "var(--foreground)" }}>{emp.department}</span>
      </td>

      {/* Designation */}
      <td style={{ padding: "0 var(--spacing-3)" }}>
        <span style={{ fontSize: "var(--text-body-sm)", color: "var(--text-secondary)" }}>{emp.designation}</span>
      </td>

      {/* Type chip */}
      <td style={{ padding: "0 var(--spacing-3)" }}>
        <span
          className="chip chip-xs"
          style={{
            background: tp.bg,
            color: tp.text,
            border: `1px solid ${tp.border}`,
          }}
        >
          {emp.type}
        </span>
      </td>

      {/* Reports To */}
      <td style={{ padding: "0 var(--spacing-3)" }}>
        <span style={{ fontSize: "var(--text-body-sm)", color: emp.reportingTo ? "var(--foreground)" : "var(--text-tertiary)" }}>
          {emp.reportingTo ?? "—"}
        </span>
      </td>

      {/* Location */}
      <td style={{ padding: "0 var(--spacing-3)" }}>
        <div className="flex items-center" style={{ gap: "var(--spacing-1)" }}>
          <MapPin size={12} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
          <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{emp.location}</span>
        </div>
      </td>

      {/* Join Date */}
      <td style={{ padding: "0 var(--spacing-3)" }}>
        <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{emp.joinDate}</span>
      </td>

      {/* Status */}
      <td style={{ padding: "0 var(--spacing-3)" }}>
        <span
          className="chip chip-xs"
          style={{
            background: st.bg,
            color: st.text,
            border: `1px solid ${st.border}`,
          }}
        >
          {st.label}
        </span>
      </td>

      {/* Actions */}
      <td style={{ padding: "0 var(--spacing-2)", textAlign: "center" }}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--text-tertiary)",
                padding: "var(--spacing-1)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MoreHorizontal size={16} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem>Edit Details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Mail size={14} style={{ marginRight: "var(--spacing-2)" }} />
              Send Email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Phone size={14} style={{ marginRight: "var(--spacing-2)" }} />
              Call
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  );
}

/** Reusable filter select */
function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
      <span style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-medium)", color: "var(--text-tertiary)", whiteSpace: "nowrap" }}>
        {label}:
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          height: "30px",
          padding: "0 var(--spacing-2)",
          borderRadius: "var(--radius-sm)",
          border: "1px solid var(--border)",
          background: "var(--background)",
          fontSize: "var(--text-caption)",
          fontWeight: "var(--font-weight-medium)",
          color: "var(--foreground)",
          cursor: "pointer",
          maxWidth: "180px",
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

/** Small pagination button */
function PaginationButton({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        width: "28px",
        height: "28px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--border)",
        background: "var(--background)",
        color: disabled ? "var(--text-tertiary)" : "var(--foreground)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </button>
  );
}