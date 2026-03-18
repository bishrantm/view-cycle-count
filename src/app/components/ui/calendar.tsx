"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "./utils";
import { FONT } from "../../../imports/shared-ui";

/**
 * Calendar component built on react-day-picker v8.
 *
 * All layout uses inline styles to avoid Tailwind v4 / table-element
 * specificity issues.  Colors reference CSS custom properties from the
 * design-system theme so they stay in sync with the rest of the app.
 */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      styles={{
        root: { fontFamily: FONT },
        months: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-2)",
        },
        month: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-2)",
        },
        caption: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100%",
          paddingTop: "var(--spacing-1)",
          paddingBottom: "var(--spacing-1)",
        },
        caption_label: {
          fontSize: "var(--text-body-sm)",
          fontWeight: "var(--font-weight-medium)" as any,
          fontFamily: FONT,
          color: "var(--foreground)",
        },
        nav: {
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-1)",
        },
        nav_button_previous: {
          position: "absolute",
          left: "var(--spacing-1)",
        },
        nav_button_next: {
          position: "absolute",
          right: "var(--spacing-1)",
        },
        table: {
          width: "100%",
          borderCollapse: "collapse",
        },
        head_row: {
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
        },
        head_cell: {
          width: "32px",
          fontSize: "var(--text-caption)",
          fontWeight: "var(--font-weight-normal)" as any,
          fontFamily: FONT,
          color: "var(--text-tertiary)",
          textAlign: "center",
          padding: "var(--spacing-1) 0",
        },
        row: {
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          marginTop: "var(--spacing-0-5)",
        },
        cell: {
          position: "relative",
          padding: 0,
          textAlign: "center",
        },
        day: {
          width: "32px",
          height: "32px",
          padding: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--radius-sm)",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: "var(--text-caption)",
          fontWeight: "var(--font-weight-normal)" as any,
          fontFamily: FONT,
          color: "var(--foreground)",
          transition: "background 0.1s ease, color 0.1s ease",
        },
      }}
      classNames={{
        nav_button: cn(
          "inline-flex items-center justify-center rounded-md border border-border",
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-secondary",
          "cursor-pointer transition-colors",
        ),
        day_range_start:
          "day-range-start",
        day_range_end:
          "day-range-end",
        day_selected: "",
        day_today: "",
        day_outside: "day-outside",
        day_disabled: "",
        day_range_middle: "",
        day_hidden: "",
        ...classNames,
      }}
      modifiersStyles={{
        selected: {
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          fontWeight: "var(--font-weight-medium)" as any,
          borderRadius: "var(--radius-sm)",
        },
        today: {
          background: "var(--surface-secondary)",
          color: "var(--foreground)",
          fontWeight: "var(--font-weight-semibold)" as any,
          borderRadius: "var(--radius-sm)",
        },
        outside: {
          color: "var(--text-tertiary)",
          opacity: 0.5,
        },
        disabled: {
          color: "var(--text-tertiary)",
          opacity: 0.4,
          cursor: "not-allowed",
        },
        hidden: {
          visibility: "hidden",
        },
        range_start: {
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          borderRadius: "var(--radius-sm) 0 0 var(--radius-sm)",
          fontWeight: "var(--font-weight-medium)" as any,
        },
        range_end: {
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
          fontWeight: "var(--font-weight-medium)" as any,
        },
        range_middle: {
          background: "var(--primary-50)",
          color: "var(--primary-700)",
          borderRadius: 0,
        },
      }}
      components={{
        IconLeft: ({ className, ...iconProps }) => (
          <ChevronLeft
            className={cn("size-4", className)}
            style={{ color: "var(--foreground)" }}
            {...iconProps}
          />
        ),
        IconRight: ({ className, ...iconProps }) => (
          <ChevronRight
            className={cn("size-4", className)}
            style={{ color: "var(--foreground)" }}
            {...iconProps}
          />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };