import { useSyncExternalStore, useCallback, type ReactNode } from "react";
import type { CycleCountStatus } from "./status-badge";
import { formatNow, generateNextId } from "./logic";
import { generateSeedCycleCounts } from "./mock-registry";

// ─── Shared CycleCount Interface ────────────────────────────────────────────
export interface CycleCount {
  id: string;
  countBasis: "Item" | "Location" | "Category";
  tags: string[];
  items: string[];
  categories: string[];
  locations: string[];
  status: CycleCountStatus;
  assignee: string;
  assignees: string[];
  createdAt: string;
  // Expanded-view fields
  tolerance: string;
  systemCount: number;
  actualCount: number | null;
  reported: boolean;
  approved: boolean;
  completedOn: string | null;
  description: string;
  sampling: string;
  priority: "Standard" | "High" | "Low";
  createdOn: string;
  createdBy: string;
  startDate: string | null;
  dueDate: string | null;
}

// ═══════════════════════════════════════════════════════════════════════════════
// Module-level singleton store (no Provider needed)
// ═══════════════════════════════════════════════════════════════════════════════

let _cycleCounts: CycleCount[] = generateSeedCycleCounts();
const _listeners = new Set<() => void>();

function _emit() {
  _listeners.forEach((l) => l());
}

function _subscribe(listener: () => void) {
  _listeners.add(listener);
  return () => { _listeners.delete(listener); };
}

function _getSnapshot(): CycleCount[] {
  return _cycleCounts;
}

function addCycleCount(cc: CycleCount) {
  _cycleCounts = [cc, ..._cycleCounts];
  _emit();
}

function removeCycleCount(id: string) {
  _cycleCounts = _cycleCounts.filter((cc) => cc.id !== id);
  _emit();
}

function updateCycleCount(id: string, patch: Partial<CycleCount>) {
  _cycleCounts = _cycleCounts.map((cc) =>
    cc.id === id ? { ...cc, ...patch } : cc
  );
  _emit();
}

function duplicateCycleCount(id: string): CycleCount | null {
  const original = _cycleCounts.find((cc) => cc.id === id);
  if (!original) return null;
  const newId = generateNextId(_cycleCounts);
  const duplicate: CycleCount = {
    ...original,
    id: newId,
    status: "pending",
    createdAt: new Date().toISOString().split("T")[0],
    createdOn: formatNow(),
    actualCount: null,
    reported: false,
    approved: false,
    completedOn: null,
  };
  _cycleCounts = [duplicate, ..._cycleCounts];
  _emit();
  return duplicate;
}

function getNextId(): string {
  return generateNextId(_cycleCounts);
}

function getCycleCount(id: string): CycleCount | undefined {
  return _cycleCounts.find((cc) => cc.id === id);
}

// ─── Context Shape (kept for API compatibility) ─────────────────────────────
interface CycleCountStoreCtx {
  cycleCounts: CycleCount[];
  addCycleCount: (cc: CycleCount) => void;
  removeCycleCount: (id: string) => void;
  updateCycleCount: (id: string, patch: Partial<CycleCount>) => void;
  duplicateCycleCount: (id: string) => CycleCount | null;
  getNextId: () => string;
  getCycleCount: (id: string) => CycleCount | undefined;
}

// ─── No-op Provider (kept for backwards compatibility so existing JSX doesn't break) ───
export function CycleCountStoreProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

// ─── Hook (no Provider required!) ───────────────────────────────────────────
export function useCycleCountStore(): CycleCountStoreCtx {
  const cycleCounts = useSyncExternalStore(_subscribe, _getSnapshot, _getSnapshot);

  return {
    cycleCounts,
    addCycleCount,
    removeCycleCount,
    updateCycleCount,
    duplicateCycleCount,
    getNextId,
    getCycleCount: useCallback(
      (id: string) => cycleCounts.find((cc) => cc.id === id),
      [cycleCounts]
    ),
  };
}