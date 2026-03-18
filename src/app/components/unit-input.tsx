/**
 * ── UnitInput ──
 * Reusable input component for entering numeric values with a Unit of Measure suffix.
 * Matches the Figma "Unit Input" design: left input box + right UoM badge.
 *
 * Variants:
 *  - default: standard border, white input bg
 *  - error:   red border (discrepancy / validation)
 *  - disabled: non-editable, muted text
 *
 * All styling uses CSS custom properties from the design system so it can be
 * re-themed by updating theme.css / global.css alone.
 */
import React, { useCallback, type CSSProperties, forwardRef } from "react";

export interface UnitInputProps {
  /** Current value (controlled) */
  value: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Unit of measure label shown in the right badge (default "EA") */
  unit?: string;
  /** Placeholder text shown when value is empty */
  placeholder?: string;
  /** Visual variant */
  variant?: "default" | "error";
  /** Disable editing */
  disabled?: boolean;
  /** Fixed width for the whole component (CSS value). Defaults to 125px matching Figma. */
  width?: string;
  /** Fixed height (CSS value). Defaults to 40px matching Figma. */
  height?: string;
  /** Text alignment inside the input */
  textAlign?: "left" | "center" | "right";
  /** Additional className on the root wrapper */
  className?: string;
  /** Additional inline styles on the root wrapper */
  style?: React.CSSProperties;
  /** HTML name attribute */
  name?: string;
  /** onBlur handler */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** onFocus handler */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  /** onKeyDown handler */
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  /** Auto-focus */
  autoFocus?: boolean;
}

export const UnitInput = forwardRef<HTMLInputElement, UnitInputProps>(
  (
    {
      value,
      onChange,
      unit = "EA",
      placeholder = "Enter",
      variant = "default",
      disabled = false,
      width = "125px",
      height = "40px",
      textAlign = "left",
      className,
      style,
      name,
      onBlur,
      onFocus,
      onKeyDown,
      autoFocus,
    },
    ref,
  ) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
      },
      [onChange],
    );

    const isError = variant === "error";

    /* ── Border color logic ─────────────────────────────────── */
    const borderColor = isError ? "var(--destructive)" : "var(--border)";

    return (
      <div
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "stretch",
          width,
          height,
          borderRadius: "var(--radius-sm)",
          boxShadow: "var(--elevation-xs)",
          overflow: "hidden",
          cursor: disabled ? "not-allowed" : "text",
          ...style,
        }}
      >
        {/* ── Input Box (left) ── */}
        <div
          style={{
            flex: "1 1 0",
            position: "relative",
            minWidth: 0,
          }}
        >
          <input
            ref={ref}
            type="text"
            inputMode="numeric"
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            autoFocus={autoFocus}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            style={{
              width: "100%",
              height: "100%",
              padding: "0 var(--spacing-4)",
              fontSize: "var(--text-body-sm)",
              fontWeight: "var(--font-weight-normal)",
              color: disabled ? "var(--text-tertiary)" : isError ? "var(--destructive)" : "var(--foreground)",
              background: disabled ? "var(--surface-secondary)" : "var(--input-background)",
              cursor: disabled ? "not-allowed" : "text",
              border: "none",
              outline: "none",
              textAlign,
              fontFamily: "var(--font-family)",
              position: "relative",
              zIndex: 1,
            }}
          />
          {/* Inset border – left side only (top, left, bottom) */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              border: `1px solid ${borderColor}`,
              borderTopLeftRadius: "var(--radius-sm)",
              borderBottomLeftRadius: "var(--radius-sm)",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          />
        </div>

        {/* ── Unit Badge (right) ── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            padding: "0 var(--spacing-2-5)",
            background: "var(--surface-secondary)",
          }}
        >
          <span
            style={{
              fontSize: "var(--text-label)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              letterSpacing: "var(--tracking-wide)",
              whiteSpace: "nowrap",
              lineHeight: "var(--leading-20)",
              fontFamily: "var(--font-family)",
            }}
          >
            {unit}
          </span>
          {/* Inset border – right side only (top, right, bottom) */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              borderTop: `1px solid ${borderColor}`,
              borderBottom: `1px solid ${borderColor}`,
              borderRight: `1px solid ${borderColor}`,
              borderLeft: "none",
              borderTopRightRadius: "var(--radius-sm)",
              borderBottomRightRadius: "var(--radius-sm)",
            }}
          />
        </div>
      </div>
    );
  },
);

UnitInput.displayName = "UnitInput";