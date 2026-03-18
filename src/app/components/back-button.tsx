import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { FONT, HOVER } from "../../imports/shared-ui";

/**
 * BackButton — a reusable square icon-only back navigation button.
 *
 * Renders a bordered, rounded square with a left-arrow icon.
 * On hover the background fills with `var(--row-hover)` and the border
 * darkens subtly, matching the Omnesoft ERP design system.
 *
 * @example
 *   import { BackButton } from "./components/back-button";
 *
 *   // With react-router navigate
 *   const navigate = useNavigate();
 *   <BackButton onClick={() => navigate("/")} />
 *
 *   // With custom label tooltip
 *   <BackButton onClick={goBack} title="Back to list" />
 *
 *   // Custom size
 *   <BackButton onClick={goBack} size={40} iconSize={18} />
 */
export interface BackButtonProps {
  /** Click handler — typically calls navigate(-1) or navigate("/") */
  onClick: () => void;
  /** Accessible title / tooltip (default: "Go back") */
  title?: string;
  /** Outer button size in px (default: 36) */
  size?: number;
  /** Icon size in px (default: 16) */
  iconSize?: number;
  /** Extra className on the outer button */
  className?: string;
  /** Extra inline styles on the outer button */
  style?: React.CSSProperties;
}

export function BackButton({
  onClick,
  title = "Go back",
  size = 36,
  iconSize = 16,
  className = "",
  style,
}: BackButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={title}
      aria-label={title}
      className={`inline-flex items-center justify-center shrink-0 transition-colors ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "var(--radius-md)",
        border: `1px solid ${hovered ? "var(--primary-200)" : "var(--border)"}`,
        background: hovered ? HOVER.tableRow : "var(--background)",
        cursor: "pointer",
        padding: 0,
        fontFamily: FONT,
        boxShadow: hovered
          ? "var(--elevation-card)"
          : "var(--elevation-xs)",
        transition: "background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",
        ...style,
      }}
    >
      <ArrowLeft
        size={iconSize}
        style={{
          color: hovered ? "var(--foreground)" : "var(--text-secondary)",
          transition: "color 0.15s ease",
        }}
      />
    </button>
  );
}