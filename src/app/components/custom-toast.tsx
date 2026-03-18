/**
 * Custom toast component matching the Omnesoft ERP design system.
 * Uses Sonner's toast.custom() to render a styled card toast in the top-right corner.
 *
 * Usage:
 *   import { showToast } from "./components/custom-toast";
 *   showToast({ title: "Record saved", description: "Cycle count CC-2026-001 was created.", type: "success" });
 */
import React from "react";
import { toast } from "sonner";
import { XCircle, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { FONT } from "../../imports/shared-ui";

/* ─── Types ───────────────────────────────────────────────────────────────── */
type ToastType = "success" | "error" | "warning" | "info";

interface ShowToastOptions {
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

/* ─── Icon / colour map keyed by type ─────────────────────────────────────── */
const typeConfig: Record<
  ToastType,
  {
    Icon: typeof XCircle;
    iconColor: string;
    borderColor: string;
  }
> = {
  error: {
    Icon: XCircle,
    iconColor: "var(--destructive)",
    borderColor: "var(--status-cancelled-border)",
  },
  success: {
    Icon: CheckCircle2,
    iconColor: "var(--status-completed-text)",
    borderColor: "var(--status-completed-border)",
  },
  warning: {
    Icon: AlertCircle,
    iconColor: "var(--status-awaiting-text)",
    borderColor: "var(--status-awaiting-border)",
  },
  info: {
    Icon: Info,
    iconColor: "var(--primary)",
    borderColor: "var(--primary-200)",
  },
};

/* ─── Toast card component ────────────────────────────────────────────────── */
function ToastCard({
  title,
  description,
  type = "info",
  id,
}: ShowToastOptions & { id: string | number }) {
  const { Icon, iconColor, borderColor } = typeConfig[type];

  return (
    <div
      style={{
        fontFamily: FONT,
        display: "flex",
        gap: "var(--spacing-3)",
        alignItems: "flex-start",
        padding: "var(--spacing-4)",
        background: "var(--card)",
        border: `1px solid ${borderColor}`,
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--elevation-popover)",
        minWidth: 280,
        maxWidth: 380,
      }}
    >
      <Icon
        size={18}
        style={{
          color: iconColor,
          flexShrink: 0,
          marginTop: "var(--spacing-0-5)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-1)", flex: 1 }}>
        <span
          style={{
            fontFamily: FONT,
            fontSize: "var(--text-body-sm)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--foreground)",
            lineHeight: "var(--leading-normal)",
          }}
        >
          {title}
        </span>
        {description && (
          <span
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--text-secondary)",
              lineHeight: "var(--leading-body)",
            }}
          >
            {description}
          </span>
        )}
      </div>
      <button
        onClick={() => toast.dismiss(id)}
        aria-label="Dismiss"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "var(--spacing-0-5)",
          color: "var(--text-tertiary)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--radius-sm)",
          transition: "color 0.15s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--foreground)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--text-tertiary)")}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M9 1L1 9M1 1L9 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

/* ─── Public API ──────────────────────────────────────────────────────────── */
export function showToast(options: ShowToastOptions) {
  return toast.custom(
    (id) => <ToastCard {...options} id={id} />,
    {
      duration: options.duration ?? 5000,
      position: "top-right",
    }
  );
}