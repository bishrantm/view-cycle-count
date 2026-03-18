// ─────────────────────────────────────────────────────────────────────────────
// employee-data.ts — Mock data & column config for the Employee Listing table.
// Data-driven: one array of employees + one column definition drives the table.
// ─────────────────────────────────────────────────────────────────────────────

export type EmployeeStatus = "active" | "on_leave" | "probation" | "terminated" | "suspended";
export type Department = "Engineering" | "Operations" | "Finance" | "HR" | "Sales" | "Quality" | "Supply Chain" | "Production" | "IT" | "Admin";

export interface Employee {
  id: string;
  empCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: Department;
  designation: string;
  reportingTo: string | null;
  status: EmployeeStatus;
  joinDate: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract" | "Intern";
}

// ─── Status display config ──────────────────────────────────────────────────
export const STATUS_CONFIG: Record<EmployeeStatus, { label: string; bg: string; text: string; border: string }> = {
  active:     { label: "Active",     bg: "var(--status-completed-bg)",    text: "var(--status-completed-text)",    border: "var(--status-completed-border)" },
  on_leave:   { label: "On Leave",   bg: "var(--status-awaiting-bg)",     text: "var(--status-awaiting-text)",     border: "var(--status-awaiting-border)" },
  probation:  { label: "Probation",  bg: "var(--status-in-progress-bg)",  text: "var(--status-in-progress-text)",  border: "var(--status-in-progress-border)" },
  terminated: { label: "Terminated", bg: "var(--status-cancelled-bg)",    text: "var(--status-cancelled-text)",    border: "var(--status-cancelled-border)" },
  suspended:  { label: "Suspended",  bg: "var(--status-pending-bg)",      text: "var(--status-pending-text)",      border: "var(--status-pending-border)" },
};

// ─── Type display config ────────────────────────────────────────────────────
export const TYPE_CONFIG: Record<string, { bg: string; text: string; border: string }> = {
  "Full-Time": { bg: "var(--status-completed-bg)",   text: "var(--status-completed-text)",   border: "var(--status-completed-border)" },
  "Part-Time": { bg: "var(--status-in-progress-bg)", text: "var(--status-in-progress-text)", border: "var(--status-in-progress-border)" },
  "Contract":  { bg: "var(--status-awaiting-bg)",     text: "var(--status-awaiting-text)",    border: "var(--status-awaiting-border)" },
  "Intern":    { bg: "var(--status-pending-bg)",      text: "var(--status-pending-text)",     border: "var(--status-pending-border)" },
};

// ─── Column definitions ─────────────────────────────────────────────────────
export interface ColumnDef {
  key: string;
  label: string;
  width?: string;
  align?: "left" | "center" | "right";
  sortable?: boolean;
  visible?: boolean;
}

export const COLUMNS: ColumnDef[] = [
  { key: "empCode",      label: "Emp ID",        width: "100px",  sortable: true },
  { key: "name",         label: "Employee Name",  width: "auto",   sortable: true },
  { key: "department",   label: "Department",     width: "150px",  sortable: true },
  { key: "designation",  label: "Designation",    width: "180px",  sortable: true },
  { key: "type",         label: "Type",           width: "110px",  sortable: true },
  { key: "reportingTo",  label: "Reports To",     width: "150px",  sortable: true },
  { key: "location",     label: "Location",       width: "140px",  sortable: true },
  { key: "joinDate",     label: "Join Date",      width: "120px",  sortable: true },
  { key: "status",       label: "Status",         width: "110px",  sortable: true },
];

// ─── Avatar colour pool (from design system) ────────────────────────────────
export const AVATAR_COLORS = [
  "var(--avatar-bg-green)",
  "var(--avatar-bg-sky)",
  "var(--avatar-bg-warm)",
  "var(--avatar-bg-amber)",
  "var(--avatar-bg-teal)",
  "var(--primary-200)",
  "var(--recount-bg)",
];

export function avatarColor(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

export function initials(first: string, last: string): string {
  return `${first[0] ?? ""}${last[0] ?? ""}`.toUpperCase();
}

// ─── Departments & locations for filter dropdowns ───────────────────────────
export const ALL_DEPARTMENTS: Department[] = [
  "Engineering", "Operations", "Finance", "HR", "Sales",
  "Quality", "Supply Chain", "Production", "IT", "Admin",
];

export const ALL_LOCATIONS = [
  "HQ - Dallas, TX",
  "Plant A - Houston, TX",
  "Plant B - Detroit, MI",
  "Warehouse - Phoenix, AZ",
  "Office - New York, NY",
  "Remote",
];

// ─── Mock employee generator (deterministic, compact) ───────────────────────
const NAMES: [string, string][] = [
  ["James", "Anderson"],   ["Sarah", "Mitchell"],  ["Robert", "Chen"],
  ["Emily", "Thompson"],   ["Michael", "Rivera"],   ["Jessica", "Williams"],
  ["David", "Nguyen"],     ["Amanda", "Patel"],     ["Daniel", "Garcia"],
  ["Rachel", "Kim"],       ["Steven", "Martinez"],  ["Nicole", "Taylor"],
  ["Andrew", "Jackson"],   ["Maria", "Hernandez"], ["Kevin", "Lee"],
  ["Laura", "Robinson"],   ["Christopher", "White"],["Sophia", "Lopez"],
  ["Thomas", "Clark"],     ["Olivia", "Hall"],      ["Matthew", "Allen"],
  ["Ashley", "Young"],     ["Brian", "King"],       ["Emma", "Wright"],
  ["Jason", "Scott"],      ["Hannah", "Torres"],    ["Ryan", "Adams"],
  ["Megan", "Nelson"],     ["Anthony", "Hill"],     ["Samantha", "Moore"],
  ["Joshua", "Ramirez"],   ["Victoria", "Campbell"],["Tyler", "Reed"],
  ["Natalie", "Cook"],     ["Brandon", "Morgan"],
];

const DESIGNATIONS = [
  "Software Engineer", "Sr. Software Engineer", "Operations Manager",
  "Financial Analyst", "HR Coordinator", "Sales Executive",
  "Quality Inspector", "Supply Chain Analyst", "Production Supervisor",
  "IT Administrator", "Admin Assistant", "Team Lead",
  "Project Manager", "Warehouse Associate", "Procurement Specialist",
  "Data Analyst", "UX Designer", "DevOps Engineer",
  "Account Manager", "Plant Manager",
];

const STATUSES: EmployeeStatus[] = ["active", "active", "active", "active", "active", "active", "active", "on_leave", "probation", "terminated", "suspended"];
const TYPES: Employee["type"][] = ["Full-Time", "Full-Time", "Full-Time", "Full-Time", "Part-Time", "Contract", "Intern"];

function seededPick<T>(arr: readonly T[], seed: number): T {
  return arr[Math.abs(seed) % arr.length];
}

export function generateEmployees(): Employee[] {
  return NAMES.map(([first, last], i) => {
    const seed = (i * 2654435761) >>> 0;
    const dept = seededPick(ALL_DEPARTMENTS, seed);
    const desig = seededPick(DESIGNATIONS, seed + 1);
    const status = seededPick(STATUSES, seed + 2);
    const empType = seededPick(TYPES, seed + 3);
    const loc = seededPick(ALL_LOCATIONS, seed + 4);
    const managerIdx = i > 0 ? Math.abs((seed + 5) % i) : -1;
    const manager = managerIdx >= 0 ? `${NAMES[managerIdx][0]} ${NAMES[managerIdx][1]}` : null;
    // Stagger join dates across 2020-2025
    const year = 2020 + (i % 6);
    const month = ((seed % 12) + 1).toString().padStart(2, "0");
    const day = ((seed % 28) + 1).toString().padStart(2, "0");

    return {
      id: `EMP-${(1001 + i).toString()}`,
      empCode: `EMP-${(1001 + i).toString()}`,
      firstName: first,
      lastName: last,
      email: `${first.toLowerCase()}.${last.toLowerCase()}@omnesoft.com`,
      phone: `+1 (${500 + (i % 5)}${i % 10}) ${300 + i}-${1000 + (seed % 9000)}`,
      department: dept,
      designation: desig,
      reportingTo: manager,
      status,
      joinDate: `${month}/${day}/${year}`,
      location: loc,
      type: empType,
    };
  });
}

// ─── Page labels ────────────────────────────────────────────────────────────
export const PAGE_LABELS = {
  title: "Employees",
  subtitle: "Manage workforce directory, roles, and employment details.",
  addButton: "Add Employee",
} as const;
