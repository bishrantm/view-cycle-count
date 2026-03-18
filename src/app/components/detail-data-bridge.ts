// ─────────────────────────────────────────────────────────────────────────────
// detail-data-bridge.ts
//
// Bridge module that re-exports mock-registry generators with the exact names
// that cycle-count-detail.tsx uses internally. This allows the detail page to
// import from this bridge and get registry-derived data without needing to
// refactor its own function signatures.
// ─────────────────────────────────────────────────────────────────────────────

export {
  generateDetailSidebar as buildMockSidebar,
  generateDetailLineItems as buildMockLineItems,
  generateDetailNotes,
  generateDetailAttachments,
  DETAIL_ASSIGNEE_IDS,
  DETAIL_TAGS,
  type DetailLineItem as LineItem,
  type DetailLineItemStatus as LineItemStatus,
  type DetailSidebarEntry as SidebarEntry,
  type DetailNoteEntry as NoteEntry,
  type DetailAttFileType as AttFileType,
  type DetailAttachment as AttachmentItem,
} from "./mock-registry";

// Pre-generated arrays (called once at module scope for consumers)
import { generateDetailNotes, generateDetailAttachments } from "./mock-registry";
export const MOCK_NOTES = generateDetailNotes();
export const MOCK_ATTACHMENTS = generateDetailAttachments();
