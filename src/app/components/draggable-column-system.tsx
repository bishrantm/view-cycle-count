/**
 * DraggableColumnSystem — Pointer-event-based column reorder with FLIP slide animation.
 *
 * Performance: cursor tracking is decoupled from React state. The floating
 * preview pill is positioned via direct DOM writes on a ref — zero React
 * re-renders during pointer movement. React only re-renders on:
 *   - drag start  (1 render)
 *   - column swap (1 render per swap, for placeholder + FLIP)
 *   - drag end    (1 render)
 *
 * Integration note:
 *   The hook identifies draggable columns via the `data-drag-col` attribute
 *   (set automatically by ColumnHeader / ColumnBodyCell). This means the table
 *   can freely mix sticky, fixed, and draggable columns — only elements with
 *   `data-drag-col` participate in FLIP animations and hit-testing.
 *
 * Exports:
 *   useColumnReorder    — core hook
 *   ColumnDragPreview   — floating pill
 *   ColumnHeader        — <th> with drag grip + resize handle + border lines
 *   ColumnBodyCell      — <td> with drag placeholder styling
 *   ColumnDef / DragColumnDef / DragState types
 *   injectDragKeyframes — no-op kept for backward compat
 *
 * All styling uses CSS custom properties from theme.css.
 */

import React, { useRef, useState, useCallback, useEffect, useLayoutEffect } from "react";
import { GripVertical } from "lucide-react";
import { FONT } from "../../imports/shared-ui";

// =====================================================================
// Types
// =====================================================================

export interface ColumnDef {
  key: string;
  label: string;
  width: number;
}

/** Backward-compatible alias used by data.ts & manage-columns-panel.tsx */
export type DragColumnDef = ColumnDef;

/** Lightweight drag state — no cursor coords (those live in refs). */
export interface DragState {
  key: string;
  currentIndex: number;
  width: number;
  label: string;
}

/** Backward-compatible alias (kept for any external consumers) */
export interface DragItem {
  type: string;
  index: number;
  key: string;
  width: number;
  label: string;
}

// =====================================================================
// Attribute constant — used by ColumnHeader, ColumnBodyCell, and the hook
// =====================================================================

/** Data attribute placed on draggable <th> and <td> elements. */
const DRAG_COL_ATTR = "data-drag-col";
const DRAG_COL_TH_SELECTOR = `th[${DRAG_COL_ATTR}]`;
const DRAG_COL_TD_SELECTOR = `td[${DRAG_COL_ATTR}]`;

// =====================================================================
// Options
// =====================================================================

export interface ColumnReorderOptions {
  /** Minimum pointer movement (px) before drag activates. Default 3. */
  dragThreshold?: number;
  /** Width of the edge-scroll zone (px). Default 80. */
  edgeZone?: number;
  /** Max scroll speed (px/frame). Default 20. */
  maxScrollSpeed?: number;
  /** FLIP slide duration (ms). Default 150. */
  flipDuration?: number;
  /** FLIP easing. Default "cubic-bezier(0.25, 1, 0.5, 1)". */
  flipEasing?: string;
}

// =====================================================================
// Constants
// =====================================================================

/** Shared horizontal padding for header + body cells (matches sticky columns) */
const CELL_PAD = "var(--spacing-3)"; // 12px

// =====================================================================
// Hook: useColumnReorder
// =====================================================================

export function useColumnReorder(
  columns: ColumnDef[],
  moveColumn: (from: number, to: number) => void,
  scrollContainerRef: React.RefObject<HTMLElement | null>,
  options?: ColumnReorderOptions
) {
  const {
    dragThreshold = 3,
    edgeZone = 80,
    maxScrollSpeed = 20,
    flipDuration = 150,
    flipEasing = "cubic-bezier(0.25, 1, 0.5, 1)",
  } = options ?? {};

  // React state — only set on drag start / swap / end
  const [dragState, setDragState] = useState<DragState | null>(null);

  // Ref that holds the preview DOM element — positioned via direct style writes
  const previewElRef = useRef<HTMLDivElement | null>(null);

  // Mutable refs for the tight pointer-move loop
  const columnsRef = useRef(columns);
  columnsRef.current = columns;
  const moveColumnRef = useRef(moveColumn);
  moveColumnRef.current = moveColumn;
  const sessionRef = useRef<(DragState & { startX: number; startY: number }) | null>(null);
  const scrollRafRef = useRef<number | null>(null);
  const scrollSpeedRef = useRef(0);

  // ---- Swap cooldown: prevent oscillation at column boundaries ----
  const lastSwapTimeRef = useRef(0);

  // ---- FLIP snapshot ref ----
  const flipSnapshotRef = useRef<Map<string, number>>(new Map());

  // ---- Edge scroll rAF loop ----
  const startEdgeScroll = useCallback(() => {
    if (scrollRafRef.current !== null) return;
    const tick = () => {
      const el = scrollContainerRef.current;
      if (!el || scrollSpeedRef.current === 0) {
        scrollRafRef.current = null;
        return;
      }
      el.scrollLeft += scrollSpeedRef.current;
      scrollRafRef.current = requestAnimationFrame(tick);
    };
    scrollRafRef.current = requestAnimationFrame(tick);
  }, [scrollContainerRef]);

  const stopEdgeScroll = useCallback(() => {
    scrollSpeedRef.current = 0;
    if (scrollRafRef.current !== null) {
      cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = null;
    }
  }, []);

  /**
   * Snapshot draggable-column left positions before a swap.
   * Only reads elements with `data-drag-col` so sticky/fixed columns are ignored.
   */
  const snapshotColumnPositions = useCallback(() => {
    const scrollEl = scrollContainerRef.current;
    if (!scrollEl) return;
    const ths = scrollEl.querySelectorAll<HTMLElement>(DRAG_COL_TH_SELECTOR);
    const map = new Map<string, number>();
    ths.forEach((th) => {
      const key = th.getAttribute(DRAG_COL_ATTR);
      if (key) {
        map.set(key, th.getBoundingClientRect().left);
      }
    });
    flipSnapshotRef.current = map;
  }, [scrollContainerRef]);

  // ---- FLIP: apply after React commits a column reorder ----
  useLayoutEffect(() => {
    const snapshot = flipSnapshotRef.current;
    if (!snapshot.size) return;

    const scrollEl = scrollContainerRef.current;
    if (!scrollEl) {
      snapshot.clear();
      return;
    }

    // Build a map from column key → { th, tds[] } from the new DOM order
    const ths = scrollEl.querySelectorAll<HTMLElement>(DRAG_COL_TH_SELECTOR);
    const trs = scrollEl.querySelectorAll("tbody tr");

    type FlipEntry = { delta: number; th: HTMLElement; tds: HTMLElement[] };
    const entries: FlipEntry[] = [];

    ths.forEach((th) => {
      const key = th.getAttribute(DRAG_COL_ATTR);
      if (!key) return;
      const prevLeft = snapshot.get(key);
      if (prevLeft === undefined) return;

      const newLeft = th.getBoundingClientRect().left;
      const delta = prevLeft - newLeft;
      if (Math.abs(delta) < 0.5) return;

      // Collect matching body cells
      const tds: HTMLElement[] = [];
      trs.forEach((tr) => {
        const td = tr.querySelector<HTMLElement>(`td[${DRAG_COL_ATTR}="${key}"]`);
        if (td) tds.push(td);
      });

      entries.push({ delta, th, tds });
    });

    snapshot.clear();
    if (entries.length === 0) return;

    // Invert
    entries.forEach(({ delta, th, tds }) => {
      th.style.transition = "none";
      th.style.transform = `translateX(${delta}px)`;
      tds.forEach((td) => {
        td.style.transition = "none";
        td.style.transform = `translateX(${delta}px)`;
      });
    });

    // Force reflow
    void scrollEl.offsetHeight;

    // Play
    requestAnimationFrame(() => {
      entries.forEach(({ th, tds }) => {
        th.style.transition = `transform ${flipDuration}ms ${flipEasing}`;
        th.style.transform = "";
        tds.forEach((td) => {
          td.style.transition = `transform ${flipDuration}ms ${flipEasing}`;
          td.style.transform = "";
        });
      });

      // Cleanup inline styles after animation
      setTimeout(() => {
        entries.forEach(({ th, tds }) => {
          th.style.transition = "";
          th.style.transform = "";
          tds.forEach((td) => {
            td.style.transition = "";
            td.style.transform = "";
          });
        });
      }, flipDuration + 10);
    });
  }, [columns, scrollContainerRef, flipDuration, flipEasing]);

  // ---- Pointer down — call this from your <th> ----
  const onHeaderPointerDown = useCallback(
    (e: React.PointerEvent, index: number) => {
      if (e.button !== 0) return;
      e.preventDefault();

      const col = columnsRef.current[index];
      if (!col) return;

      const startX = e.clientX;
      const startY = e.clientY;
      let activated = false;

      const pending = {
        key: col.key,
        currentIndex: index,
        width: col.width,
        label: col.label,
        startX,
        startY,
      };

      const onPointerMove = (ev: PointerEvent) => {
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;

        if (!activated) {
          if (Math.abs(dx) + Math.abs(dy) < dragThreshold) return;
          activated = true;
          sessionRef.current = { ...pending };
          setDragState({
            key: pending.key,
            currentIndex: pending.currentIndex,
            width: pending.width,
            label: pending.label,
          });
        }

        const session = sessionRef.current;
        if (!session) return;

        // Position preview pill via direct DOM write — NO React re-render
        const el = previewElRef.current;
        if (el) {
          el.style.left = `${ev.clientX + 12}px`;
          el.style.top = `${ev.clientY - 14}px`;
          el.style.display = "";
        }

        // ---- Live column reorder via DOM-read hit-testing ----
        const scrollEl = scrollContainerRef.current;
        if (scrollEl) {
          // Read actual bounding rects of draggable <th>s (accounts for sticky offsets)
          const dragThs = scrollEl.querySelectorAll<HTMLElement>(DRAG_COL_TH_SELECTOR);
          const cursorX = ev.clientX;

          for (let i = 0; i < dragThs.length; i++) {
            if (i === session.currentIndex) continue;
            const rect = dragThs[i].getBoundingClientRect();
            if (cursorX >= rect.left && cursorX < rect.right) {
              // Swap cooldown — prevent oscillation at column boundaries
              const now = performance.now();
              if (now - lastSwapTimeRef.current < flipDuration) break;
              lastSwapTimeRef.current = now;

              snapshotColumnPositions();
              moveColumnRef.current(session.currentIndex, i);
              session.currentIndex = i;
              setDragState({
                key: session.key,
                currentIndex: i,
                width: session.width,
                label: session.label,
              });
              break;
            }
          }

          // ---- Edge scrolling ----
          const containerRect = scrollEl.getBoundingClientRect();
          const distFromLeft = ev.clientX - containerRect.left;
          const distFromRight = containerRect.right - ev.clientX;

          let speed = 0;
          if (distFromLeft < edgeZone && distFromLeft >= 0) {
            const ratio = 1 - distFromLeft / edgeZone;
            speed = -(ratio * ratio * maxScrollSpeed);
          } else if (distFromRight < edgeZone && distFromRight >= 0) {
            const ratio = 1 - distFromRight / edgeZone;
            speed = ratio * ratio * maxScrollSpeed;
          }

          if (speed !== 0 && scrollSpeedRef.current === 0) {
            scrollSpeedRef.current = speed;
            startEdgeScroll();
          } else if (speed === 0 && scrollSpeedRef.current !== 0) {
            stopEdgeScroll();
          } else {
            scrollSpeedRef.current = speed;
          }
        }
      };

      const onPointerUp = () => {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        stopEdgeScroll();
        sessionRef.current = null;
        setDragState(null);
      };

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    },
    [scrollContainerRef, startEdgeScroll, stopEdgeScroll, snapshotColumnPositions, dragThreshold, edgeZone, maxScrollSpeed, flipDuration]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopEdgeScroll();
    };
  }, [stopEdgeScroll]);

  return {
    /** Current drag state (null when idle). */
    dragState,
    /** Index of the column being dragged (null when idle). Convenience shortcut. */
    draggedIndex: dragState?.currentIndex ?? null,
    /** Bind this to your <th onPointerDown={(e) => onHeaderPointerDown(e, colIndex)}>. */
    onHeaderPointerDown,
    /** Pass this ref to <ColumnDragPreview> (or your own preview container). */
    previewElRef,
  };
}

// =====================================================================
// ColumnDragPreview — default floating pill
// =====================================================================

export interface ColumnDragPreviewProps {
  dragState: DragState | null;
  previewElRef: React.RefObject<HTMLDivElement | null>;
  /** Override default rendering. Receives the label string. */
  renderPreview?: (label: string) => React.ReactNode;
}

/**
 * Default floating preview pill that follows the cursor.
 *
 * Positioning is handled by the hook via direct DOM writes to `previewElRef` —
 * this component never re-renders during pointer movement.
 */
export function ColumnDragPreview({ dragState, previewElRef, renderPreview }: ColumnDragPreviewProps) {
  if (!dragState) return null;

  return (
    <div
      ref={previewElRef}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        left: -9999,
        top: -9999,
        display: "none",
      }}
    >
      {renderPreview ? (
        renderPreview(dragState.label)
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-1)",
            height: 28,
            padding: "0 var(--spacing-3)",
            backgroundColor: "var(--card)",
            border: "1px solid var(--primary-200)",
            borderRadius: "var(--radius-md, 6px)",
            boxShadow: "var(--drag-preview-shadow)",
          }}
        >
          <GripVertical
            style={{ width: 12, height: 12, color: "var(--primary)", flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-caption-helper)",
              lineHeight: "var(--line-height-caption-helper)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--primary)",
              whiteSpace: "nowrap",
            }}
          >
            {dragState.label}
          </span>
        </div>
      )}
    </div>
  );
}

// =====================================================================
// ColumnHeader — <th> with drag grip, resize handle, border lines
// =====================================================================

interface ColumnHeaderProps {
  col: ColumnDef;
  index: number;
  totalColumns: number;
  onResizeStart: (e: React.PointerEvent | React.MouseEvent, index: number) => void;
  onHeaderPointerDown: (e: React.PointerEvent, index: number) => void;
  draggedIndex: number | null;
  /** Custom label renderer */
  renderLabel?: (col: ColumnDef) => React.ReactNode;
  /** Header row height from density config */
  headerHeight?: number | string;
  colMin?: number;
  colMax?: number;
}

export function ColumnHeader({
  col,
  index,
  totalColumns,
  onResizeStart,
  onHeaderPointerDown,
  draggedIndex,
  renderLabel,
  headerHeight,
}: ColumnHeaderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isSource = draggedIndex === index;
  const isLastCol = index === totalColumns - 1;

  return (
    <th
      data-drag-col={col.key}
      onPointerDown={(e) => onHeaderPointerDown(e, index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: col.width,
        minWidth: col.width,
        maxWidth: col.width,
        position: "relative",
        backgroundColor: "var(--surface-secondary)",
        borderBottom: "1px solid var(--border)",
        borderRight: isLastCol ? "none" : "1px solid var(--border)",
        padding: `0 ${CELL_PAD}`,
        height: headerHeight ?? 40,
        boxSizing: "border-box",
        userSelect: "none",
        whiteSpace: "nowrap",
        textAlign: "left",
        cursor: isSource ? "grabbing" : "grab",
      }}
    >
      {/* Header content */}
      <div
        className="flex items-center"
        style={{
          gap: "var(--spacing-1)",
          overflow: "hidden",
        }}
      >
        {/* Grip handle — absolutely positioned in the th padding zone */}
        <div
          style={{
            position: "absolute",
            left: "var(--spacing-0-5)",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 14,
            height: 14,
            flexShrink: 0,
            opacity: isHovered || isSource ? 1 : 0,
            transition: "opacity 0.15s ease",
            color: "var(--text-secondary)",
            pointerEvents: "none",
          }}
        >
          <GripVertical style={{ width: 14, height: 14 }} />
        </div>

        {renderLabel ? (
          renderLabel(col)
        ) : (
          <span
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-caption-helper)",
              lineHeight: "var(--line-height-caption-helper)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-secondary)",
            }}
          >
            {col.label}
          </span>
        )}
      </div>

      {/* Resize handle */}
      <div
        onMouseDown={(e) => {
          e.stopPropagation();
          onResizeStart(e, index);
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
        }}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 6,
          cursor: "col-resize",
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 2,
            top: 8,
            bottom: 8,
            width: 2,
            borderRadius: "var(--radius-full, 9999px)",
            backgroundColor: isHovered ? "var(--border)" : "transparent",
            transition: "background-color 0.15s ease",
          }}
        />
      </div>
    </th>
  );
}

// =====================================================================
// ColumnBodyCell — <td> with drag placeholder styling
// =====================================================================

interface ColumnBodyCellProps {
  colKey: string;
  colIndex: number;
  width: number;
  children: React.ReactNode;
  draggedIndex: number | null;
  rowHeight?: number | string;
  isLastRow?: boolean;
}

export function ColumnBodyCell({
  colKey,
  colIndex,
  width,
  children,
  draggedIndex,
  rowHeight,
  isLastRow = false,
}: ColumnBodyCellProps) {
  return (
    <td
      data-drag-col={colKey}
      style={{
        height: rowHeight ?? 44,
        width,
        minWidth: width,
        maxWidth: width,
        padding: `0 ${CELL_PAD}`,
        borderBottom: "1px solid var(--border)",
        backgroundColor: "inherit",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {children}
    </td>
  );
}

// =====================================================================
// Backward compat: no-op keyframe injector (new system uses FLIP, no keyframes needed)
// =====================================================================

export function injectDragKeyframes() {
  // No-op — the new pointer-event system uses FLIP animations instead of CSS keyframes.
  // Kept for backward compatibility so existing callers don't break.
}