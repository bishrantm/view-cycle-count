import { useState, createContext, useContext } from "react";
import { Outlet, useLocation, Link } from "react-router";
import {
  Search,
  Bell,
  ChevronRight,
  ChevronsLeft,
  LogOut,
} from "lucide-react";
import {
  SIDEBAR_EXPANDED,
  SIDEBAR_COLLAPSED,
  BREADCRUMB_LABELS,
  LAYOUT_LABELS,
} from "./data";
import {
  isNavActive,
  isSubActive,
  buildBreadcrumbs,
} from "./logic";
import { NavIcon } from "./icons";

// ─── Sidebar context so children can read collapsed state ─────────────────
const SidebarContext = createContext({ collapsed: false });
export function useSidebar() {
  return useContext(SidebarContext);
}

// ─── Types ────────────────────────────────────────────────────────────────
import type { NavItem, NavSubItem } from "./data";
import { CycleCountStoreProvider } from "./cycle-count-store";

// ─── Nav structure matching Figma ────────────────────────────────────────
const navItems: NavItem[] = [
  {
    key: "items",
    label: "Items & Inventory",
    iconKey: "items",
    children: [
      { label: "Overview", href: "/items/overview" },
      { label: "Cycle Count", href: "/" },
      { label: "Physical Inventory", href: "/items/physical-inventory" },
      { label: "Stock Transfers", href: "/items/stock-transfers" },
      { label: "Reports & Analytics", href: "/items/reports" },
    ],
  },
  {
    key: "partners",
    label: "Partners Management",
    iconKey: "partners",
    children: [
      { label: "Overview", href: "/partners/overview" },
      { label: "Partners", href: "/partners" },
      { label: "Partner Groups", href: "/partners/groups" },
      { label: "Contacts Directory", href: "/partners/contacts" },
      { label: "Credit Management", href: "/partners/credit" },
      { label: "Carrier Management", href: "/partners/carriers" },
      { label: "Partner Locations", href: "/partners/locations" },
      { label: "Qualified Vendors", href: "/partners/qualified-vendors" },
      { label: "Reports & Analytics", href: "/partners/reports" },
    ],
  },
  { key: "supply", label: "Supply Chain Management", iconKey: "supply" },
  { key: "production", label: "Production & Planning", iconKey: "production" },
  { key: "sales", label: "Sales", iconKey: "sales" },
  { key: "accounting", label: "Accounting & Finance", iconKey: "accounting" },
  { key: "people", label: "People Management", iconKey: "people",
    children: [
      { label: "Employees", href: "/people/employees" },
      { label: "Departments", href: "/people/departments" },
      { label: "Attendance", href: "/people/attendance" },
      { label: "Payroll", href: "/people/payroll" },
      { label: "Reports", href: "/people/reports" },
    ],
  },
  { key: "company", label: "Company Setup", iconKey: "company" },
];

// ─── Sidebar expanded width & collapsed width ────────────────────────────
// (imported from data.ts as SIDEBAR_EXPANDED / SIDEBAR_COLLAPSED)

// ─── Helper: Check if a path matches a nav section ──────────────────────
// (imported from logic.ts as isNavActive / isSubActive)

// ═══════════════════════════════════════════════════════════════════════════
// MAIN LAYOUT
// ═══════════════════════════════════════════════════════════════════════════
export default function AppLayout() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);
  const [expandedSection, setExpandedSection] = useState<string | null>(() => {
    // Auto-expand the section that matches current route
    for (const item of navItems) {
      if (isNavActive(item, location.pathname)) return item.key;
    }
    return null;
  });

  const sidebarWidth = collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_EXPANDED;

  // Breadcrumbs
  const breadcrumbs = buildBreadcrumbs(location.pathname, BREADCRUMB_LABELS);

  const toggleSection = (key: string) => {
    if (collapsed) {
      setCollapsed(false);
      setExpandedSection(key);
      return;
    }
    setExpandedSection((prev) => (prev === key ? null : key));
  };

  return (
    <SidebarContext.Provider value={{ collapsed }}>
      <div className="flex h-screen w-full overflow-hidden">
        {/* ── Sidebar ── */}
        <aside
          className="flex flex-col border-r border-border shrink-0"
          style={{
            width: `${sidebarWidth}px`,
            minWidth: `${sidebarWidth}px`,
            background: "var(--sidebar)",
            transition: "width 0.2s ease, min-width 0.2s ease",
            overflow: "hidden",
          }}
        >
          {/* Sidebar Header */}
          <div
            className="flex items-center shrink-0"
            style={{
              height: "64px",
              padding: collapsed ? "0 var(--spacing-3)" : "0 var(--spacing-4)",
              gap: "var(--spacing-3)",
              justifyContent: collapsed ? "center" : "flex-start",
            }}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center justify-center shrink-0" aria-label="Omnesoft Home" style={{ textDecoration: "none" }}>
              <div
                className="flex items-center justify-center rounded-lg shrink-0"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--primary)",
                  borderRadius: "var(--radius)",
                }}
              >
                <span
                  style={{
                    color: "var(--primary-foreground)",
                    fontSize: "var(--text-h5)",
                    fontWeight: "var(--font-weight-semibold)",
                    lineHeight: "var(--leading-none)",
                  }}
                >
                  O
                </span>
              </div>
            </Link>

            {/* Brand text — hidden when collapsed */}
            {!collapsed && (
              <div className="flex flex-col flex-1 min-w-0">
                <span
                  style={{
                    fontSize: "var(--text-body-sm)",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "var(--foreground)",
                    lineHeight: "var(--leading-snug)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Omnesoft
                </span>
                <span
                  style={{
                    fontSize: "var(--text-caption)",
                    fontWeight: "var(--font-weight-normal)",
                    color: "var(--text-secondary)",
                    lineHeight: "var(--leading-snug)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Enterprise Resource Planni...
                </span>
              </div>
            )}

            {/* Collapse button */}
            {!collapsed && (
              <button
                onClick={() => setCollapsed(true)}
                className="flex items-center justify-center shrink-0 rounded-md transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                style={{
                  width: "28px",
                  height: "28px",
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                  color: "var(--text-secondary)",
                }}
                aria-label="Collapse sidebar"
              >
                <ChevronsLeft size={18} />
              </button>
            )}
          </div>

          {/* ── Nav Items ── */}
          <nav className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-auto-hide" style={{ padding: collapsed ? "var(--spacing-2) var(--spacing-2)" : "var(--spacing-2) var(--spacing-3)", gap: "var(--spacing-0-5)" }}>
            {navItems.map((item) => {
              const active = isNavActive(item, location.pathname);
              const expanded = expandedSection === item.key && !collapsed;
              const hasChildren = !!item.children;

              return (
                <div key={item.key}>
                  {/* Parent nav button */}
                  <button
                    onClick={() => {
                      if (hasChildren) {
                        toggleSection(item.key);
                      }
                    }}
                    className="flex items-center w-full rounded-lg transition-colors hover:bg-secondary/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    style={{
                      height: "44px",
                      padding: collapsed ? "0" : "0 var(--spacing-3)",
                      gap: "var(--spacing-2-5)",
                      cursor: "pointer",
                      border: "none",
                      background: active ? "var(--primary-50)" : "transparent",
                      color: active ? "var(--primary)" : "var(--text-secondary)",
                      justifyContent: collapsed ? "center" : "flex-start",
                    }}
                    title={collapsed ? item.label : undefined}
                    aria-label={item.label}
                  >
                    <div className="shrink-0 flex items-center justify-center" style={{ width: "22px", height: "22px" }}>
                      {item.iconKey ? <NavIcon name={item.iconKey} size={22} /> : item.Icon ? <item.Icon size={22} /> : null}
                    </div>
                    {!collapsed && (
                      <>
                        <span
                          className="flex-1 text-left"
                          style={{
                            fontSize: "var(--text-body-sm)",
                            fontWeight: active ? "var(--font-weight-semibold)" : "var(--font-weight-medium)",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.label}
                        </span>
                        {hasChildren && (
                          <div className="shrink-0" style={{ transition: "transform 0.15s ease", transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}>
                            <ChevronRight size={16} />
                          </div>
                        )}
                      </>
                    )}
                  </button>

                  {/* Sub-items */}
                  {expanded && hasChildren && item.children && (
                    <div
                      className="flex flex-col"
                      style={{ padding: "var(--spacing-1) 0 var(--spacing-1) var(--spacing-5)", gap: "0px" }}
                    >
                      {item.children.map((sub) => {
                        const subActive = isSubActive(sub, location.pathname);
                        return (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className="flex items-center rounded-md transition-colors hover:bg-secondary/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                            style={{
                              height: "36px",
                              padding: "0 var(--spacing-3)",
                              textDecoration: "none",
                              fontSize: "var(--text-body-sm)",
                              fontWeight: subActive ? "var(--font-weight-semibold)" : "var(--font-weight-normal)",
                              color: subActive ? "var(--primary)" : "var(--text-secondary)",
                              borderLeft: subActive ? "2px solid var(--primary)" : "2px solid transparent",
                              borderRadius: 0,
                              marginLeft: "var(--spacing-2-5)",
                            }}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ── Bottom Section ── */}
          <div
            className="flex flex-col shrink-0 border-t border-border"
            style={{ padding: collapsed ? "var(--spacing-3) var(--spacing-2)" : "var(--spacing-3) var(--spacing-4)", gap: collapsed ? "var(--spacing-2)" : "var(--spacing-3)" }}
          >
            {/* Settings + Notifications row */}
            {collapsed ? (
              /* Collapsed: stack settings, bell, avatar vertically centered */
              <div className="flex flex-col items-center" style={{ gap: "var(--spacing-2)" }}>
                <button
                  className="flex items-center justify-center rounded-md transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  style={{ width: "40px", height: "40px", cursor: "pointer", background: "transparent", border: "none", color: "var(--text-secondary)" }}
                  aria-label="Settings"
                >
                  <NavIcon name="settings" size={20} />
                </button>
                <button
                  className="flex items-center justify-center rounded-md transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  style={{ width: "40px", height: "40px", cursor: "pointer", background: "transparent", border: "none", color: "var(--text-secondary)" }}
                  aria-label="Notifications"
                >
                  <Bell size={20} />
                </button>
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "var(--primary-100)",
                    color: "var(--primary)",
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-semibold)",
                  }}
                >
                  AA
                </div>
              </div>
            ) : (
              <>
                {/* Expanded: Settings row */}
                <div className="flex items-center" style={{ justifyContent: collapsed ? "center" : "space-between" }}>
                  <button
                    className="flex items-center rounded-md transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    style={{
                      height: "36px",
                      padding: collapsed ? "0" : "0 var(--spacing-2)",
                      gap: "var(--spacing-2)",
                      cursor: "pointer",
                      background: "transparent",
                      border: "none",
                      color: "var(--text-secondary)",
                      justifyContent: "center",
                      width: collapsed ? "40px" : "auto",
                    }}
                    aria-label="Settings"
                  >
                    <NavIcon name="settings" size={20} />
                    {!collapsed && (
                      <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--font-weight-medium)" }}>
                        Settings
                      </span>
                    )}
                  </button>
                  {!collapsed && (
                    <button
                      className="flex items-center justify-center rounded-md transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      style={{ width: "36px", height: "36px", cursor: "pointer", background: "transparent", border: "none", color: "var(--text-secondary)" }}
                      aria-label="Notifications"
                    >
                      <Bell size={20} />
                    </button>
                  )}
                </div>

                {/* User */}
                <div
                  className="flex items-center"
                  style={{
                    gap: collapsed ? "0" : "var(--spacing-2-5)",
                    justifyContent: collapsed ? "center" : "flex-start",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "var(--primary-100)",
                      color: "var(--primary)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-weight-semibold)",
                    }}
                  >
                    AA
                  </div>
                  {!collapsed && (
                    <>
                      <div className="flex flex-col flex-1 min-w-0">
                        <span
                          style={{
                            fontSize: "var(--text-body-sm)",
                            fontWeight: "var(--font-weight-semibold)",
                            color: "var(--foreground)",
                            lineHeight: "var(--leading-snug)",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Ahtisham Ahmad
                        </span>
                        <span
                          style={{
                            fontSize: "var(--text-caption)",
                            fontWeight: "var(--font-weight-normal)",
                            color: "var(--text-secondary)",
                            lineHeight: "var(--leading-snug)",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          admin@omnesoft.com
                        </span>
                      </div>
                      <button
                        className="flex items-center justify-center shrink-0 rounded-md transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                        style={{ width: "28px", height: "28px", cursor: "pointer", background: "transparent", border: "none", color: "var(--text-secondary)" }}
                        aria-label="Sign out"
                      >
                        <LogOut size={16} />
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </aside>

        {/* ── Main content area ── */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          {/* ── Top Header ── */}
          <header
            className="flex items-center justify-between border-b border-border shrink-0"
            style={{
              height: "56px",
              minHeight: "56px",
              padding: "0 var(--spacing-5)",
              background: "var(--background)",
            }}
          >
            {/* Left: Expand button (when collapsed) + Breadcrumbs */}
            <div className="flex items-center gap-3">
              {collapsed && (
                <button
                  onClick={() => setCollapsed(false)}
                  className="flex items-center justify-center rounded-md transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none mr-1"
                  style={{ width: "28px", height: "28px", cursor: "pointer", background: "transparent", border: "none", color: "var(--text-secondary)", transform: "rotate(180deg)" }}
                  aria-label="Expand sidebar"
                >
                  <ChevronsLeft size={18} />
                </button>
              )}

              {/* Breadcrumbs */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center"
                style={{ gap: "var(--spacing-1-5)" }}
              >
                {breadcrumbs.map((crumb, i) => (
                  <span key={`${crumb.label}-${i}`} className="flex items-center" style={{ gap: "var(--spacing-1-5)" }}>
                    {i > 0 && (
                      <span style={{ color: "var(--text-tertiary)", fontSize: "var(--text-body-sm)" }}>/</span>
                    )}
                    {i < breadcrumbs.length - 1 ? (
                      <Link
                        to={crumb.href}
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "var(--text-body-sm)",
                          fontWeight: "var(--font-weight-medium)",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        style={{
                          color: "var(--foreground)",
                          fontSize: "var(--text-body-sm)",
                          fontWeight: "var(--font-weight-semibold)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {crumb.label}
                      </span>
                    )}
                  </span>
                ))}
              </nav>
            </div>

            {/* Right: Search + User */}
            <div className="flex items-center" style={{ gap: "var(--spacing-4)" }}>
              {/* Search */}
              <button
                className="flex items-center rounded-md transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                style={{
                  height: "36px",
                  padding: "0 var(--spacing-3-5)",
                  gap: "var(--spacing-2)",
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                  color: "var(--text-secondary)",
                }}
                aria-label="Search"
              >
                <Search size={16} />
                <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secondary)" }}>
                  Search
                </span>
              </button>

              {/* User */}
              <div className="flex items-center" style={{ gap: "var(--spacing-2-5)" }}>
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "var(--primary-100)",
                    color: "var(--primary)",
                    fontSize: "var(--text-caption)",
                    fontWeight: "var(--font-weight-semibold)",
                  }}
                >
                  AA
                </div>
                <div className="flex flex-col" style={{ lineHeight: "var(--leading-snug)" }}>
                  <span
                    style={{
                      fontSize: "var(--text-body-sm)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--foreground)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Ahtisham Ahmad
                  </span>
                  <span
                    style={{
                      fontSize: "var(--text-caption)",
                      fontWeight: "var(--font-weight-normal)",
                      color: "var(--text-secondary)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* ── Content ── */}
          <main
            className="flex-1 overflow-hidden"
            style={{ background: "var(--surface-secondary)" }}
          >
            <div style={{ maxWidth: "var(--content-max-width, 1600px)", margin: "0 auto", width: "100%", height: "100%" }}>
              <CycleCountStoreProvider>
                <Outlet />
              </CycleCountStoreProvider>
            </div>
          </main>
        </div>
      </div>
    </SidebarContext.Provider>
  );
}