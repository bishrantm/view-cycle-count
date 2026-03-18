export type CycleCountStatus =
  | "pending"
  | "in_progress"
  | "awaiting_approval"
  | "completed"
  | "cancelled"
  | "closed_incomplete"
  | "committed"
  | "archived";

import { STATUS_CONFIG } from "./data";

const statusConfig = STATUS_CONFIG;

interface StatusBadgeProps {
  status: CycleCountStatus;
  size?: "sm" | "md";
}

export function StatusBadge({ status, size = "sm" }: StatusBadgeProps) {
  const config = statusConfig[status];
  const isSm = size === "sm";

  return (
    <span
      className={`chip chip-status${isSm ? "" : ""}`}
      style={{
        background: config.bgVar,
        color: config.textVar,
        borderColor: config.borderVar,
        ...(isSm ? {} : { padding: "var(--spacing-1) var(--spacing-3)", fontSize: "var(--text-label)" }),
      }}
      role="status"
      aria-label={`Status: ${config.label}`}
    >
      {config.label}
    </span>
  );
}

export { statusConfig };