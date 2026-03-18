import { type ReactNode, type CSSProperties, useState, useRef, useCallback } from "react";
import { PackageSearch } from "lucide-react";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { LIST_PAGE_LABELS } from "./data";
import { FONT, HOVER } from "../../imports/shared-ui";

// ─── Hover-controlled popover hook ──────────────────────────────────────────
function useHoverPopover(delay = 150) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const onLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), delay);
  }, [delay]);

  return { open, setOpen, onEnter, onLeave };
}

// ─── Loading Skeleton ───────────────────────────────────────────────────────
export function TableLoadingSkeleton() {
  return (
    <div className="flex flex-col gap-0">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 px-4 border-b border-border"
          style={{ height: "44px" }}
        >
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-6" />
        </div>
      ))}
    </div>
  );
}

// ─── Empty State ────────────────────────────────────────────────────────────
export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div
        className="flex items-center justify-center rounded-xl"
        style={{
          width: "64px",
          height: "64px",
          background: "var(--primary-50)",
        }}
      >
        <PackageSearch size={32} style={{ color: "var(--primary)" }} aria-hidden="true" />
      </div>
      <div className="text-center" style={{ maxWidth: "360px" }}>
        <p
          style={{
            fontSize: "var(--text-h6)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--foreground)",
            marginBottom: "var(--spacing-1)",
            fontFamily: FONT,
          }}
        >
          {LIST_PAGE_LABELS.emptyTitle}
        </p>
        <p
          style={{
            fontSize: "var(--text-label)",
            color: "var(--text-secondary)",
            lineHeight: "var(--leading-relaxed)",
            fontFamily: FONT,
          }}
        >
          {LIST_PAGE_LABELS.emptyDescription}
        </p>
      </div>
    </div>
  );
}

// ─── Cell Renderer Helper ───────────────────────────────────────────────────
export function CellText({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <span
      style={{
        fontSize: "var(--text-label)",
        color: "var(--text-secondary)",
        fontFamily: FONT,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "inline-block",
        maxWidth: "100%",
        verticalAlign: "middle",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

// ─── Overflow Hint with Hover Popover ───────────────────────────────────────
export function OverflowHint({
  items,
  maxShow,
  variant = "text",
  label,
}: {
  items: string[];
  maxShow: number;
  variant?: "text" | "chip";
  label?: string;
}) {
  if (items.length <= maxShow) return null;

  const hiddenItems = items.slice(maxShow);
  const overflowCount = hiddenItems.length;
  const { open, setOpen, onEnter, onLeave } = useHoverPopover(200);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "var(--spacing-0-5) 0",
            fontSize: "var(--text-caption)",
            color: "var(--primary)",
            fontWeight: "var(--font-weight-medium)",
            fontFamily: FONT,
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}
        >
          +{overflowCount} More
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={6}
        className=""
        style={{
          width: "auto",
          minWidth: "180px",
          maxWidth: "280px",
          padding: 0,
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          background: "var(--background)",
          boxShadow: "var(--elevation-popover)",
          fontFamily: FONT,
        }}
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {/* Header */}
        <div
          style={{
            padding: "var(--spacing-2-5) var(--spacing-3)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              fontFamily: FONT,
            }}
          >
            {label || `All ${items.length} Items`}
          </p>
        </div>
        {/* Items list */}
        <div
          className="scrollbar-thin"
          style={{
            maxHeight: "220px",
            overflowY: "auto",
            padding: "var(--spacing-1-5) var(--spacing-2)",
          }}
        >
          {variant === "chip" ? (
            <div
              className="flex flex-wrap"
              style={{ gap: "var(--spacing-1-5)" }}
            >
              {items.map((item, i) => (
                <span
                  key={i}
                  className="chip"
                  style={{
                    fontSize: "var(--text-caption)",
                    fontWeight: "var(--font-weight-semibold)",
                    fontFamily: FONT,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <div className="flex flex-col" style={{ gap: "0" }}>
              {items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "var(--spacing-1-5) var(--spacing-1)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-normal)",
                    color: "var(--text-secondary)",
                    fontFamily: FONT,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    transition: "background 0.12s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = HOVER.tableRow)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

// ─── Assignee Overflow Popover (Hover) ──────────────────────────────────────
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return (name[0] || "?").toUpperCase();
}

export function AssigneeOverflowPopover({
  names,
  maxShow,
}: {
  names: string[];
  maxShow: number;
}) {
  if (names.length <= maxShow) return null;

  const overflowCount = names.length - maxShow;
  const { open, setOpen, onEnter, onLeave } = useHoverPopover(200);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0",
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--primary)",
            fontFamily: FONT,
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}
        >
          +{overflowCount}
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={6}
        className=""
        style={{
          width: "auto",
          minWidth: "200px",
          maxWidth: "280px",
          padding: 0,
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          background: "var(--background)",
          boxShadow: "var(--elevation-popover)",
          fontFamily: FONT,
        }}
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {/* Header */}
        <div
          style={{
            padding: "var(--spacing-2-5) var(--spacing-3)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              fontFamily: FONT,
            }}
          >
            All Assignees ({names.length})
          </p>
        </div>
        {/* Assignee list */}
        <div
          className="scrollbar-thin"
          style={{
            maxHeight: "220px",
            overflowY: "auto",
            padding: "var(--spacing-1-5) var(--spacing-2)",
          }}
        >
          <div className="flex flex-col" style={{ gap: "0" }}>
            {names.map((name, i) => (
              <div
                key={i}
                className="flex items-center"
                style={{
                  gap: "var(--spacing-2)",
                  padding: "var(--spacing-1-5) var(--spacing-1)",
                  borderRadius: "var(--radius-sm)",
                  transition: "background 0.12s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = HOVER.tableRow)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{
                    width: "24px",
                    height: "24px",
                    background: "var(--primary-50)",
                    fontSize: "var(--text-xs)",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "var(--primary)",
                    fontFamily: FONT,
                  }}
                >
                  {getInitials(name)}
                </div>
                <span
                  style={{
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-normal)",
                    color: "var(--text-secondary)",
                    fontFamily: FONT,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}