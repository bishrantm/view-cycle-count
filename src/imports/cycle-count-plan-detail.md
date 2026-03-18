# Cycle Count Plan Detail — Full Page Design Prompt

## Context & Migration Rationale

This screen was previously a modal overlay but is now being redesigned as a **dedicated full page**. The modal created space constraints that led to nested "fullscreen view" workarounds and slide-out drawers for secondary information (assignees, notes/attachments, reports, serial units). The new page layout should eliminate these workarounds by providing proper spatial hierarchy from the start.

The page serves two primary modes:
1. **Review Mode** (default) — Supervisors/managers review submitted counts, approve/reject discrepancies, and manage the overall plan
2. **Count Entry Mode** — Warehouse workers manually enter physical counts per location or line item on web (parallel to mobile scanning workflows)

---

## Page Structure

### Top Section — Plan Header (Persistent)

A sticky or prominent header area containing plan-level metadata:

- **Plan ID**: e.g., CC-123458
- **Plan Title/Description**: Truncated with "Read More" expansion (e.g., "Front bulkhead cabinet lower cover inlay")
- **Status Badge**: In Progress | Awaiting Approval | Completed | Cancelled
- **Priority**: Standard | High | Critical
- **Created By**: User avatar + name
- **Created On**: Date and time
- **Deadline**: Date and time
- **Completed On**: Date and time (shown only when applicable)
- **Tags**: Chip/pill list with overflow indicator (e.g., Quick count, System level, Audit 2026, Full accuracy counts, +N More)
- **Assignees**: Avatar stack with count badge. Clicking opens an inline panel or popover showing:
  - "With Permission" group (count + list of users)
  - "Without Permission" group (count + list of users)
  - "Change" action button
  - If any assignee has declined, show a **"Task Declined"** indicator prominently near the avatar stack (red text)

### Top-Level Actions (Header Area)

- **Notes/Attachment** button with count badge → opens a side panel or dedicated tab section showing:
  - Notes field (editable via "Edit Note")
  - Attachments grid with thumbnails, filenames, timestamps, and kebab menu per attachment
  - "+ Upload" action for adding new attachments
- **Primary Actions (bottom bar or header):**
  - Cancel Plan (secondary/outlined)
  - Recount Plan (text/link style)
  - Print All Count Sheet (text/link with print icon)
  - **Approve All Counts** (primary CTA, only shown when status = Awaiting Approval)

---

## Tab Structure

Organize the page content using a tab system to replace the current nested/stacked layout:

### Suggested Tabs

| Tab | Purpose |
|---|---|
| **Count Overview** | Default tab. Shows locations/items/categories with count data in review mode |
| **Count Entry** | Replaces the "Switch to Count Entry Mode" toggle. Dedicated tab for manual web entry |
| **Notes & Attachments** | Plan-level notes and file attachments (alternative: keep as side panel if tab feels heavyweight) |
| **Activity / History** | (Optional) Audit trail of actions taken on this plan |

> **Design Decision**: The "Switch to Count Entry Mode" toggle currently sits in the sidebar. In the new page, this could become a dedicated tab OR remain as a mode toggle within the Count Overview tab. A dedicated tab is cleaner for role separation (reviewers stay in Overview, counters go to Entry).

---

## Left Sidebar — Navigation Panel

A persistent left sidebar listing the countable entities for navigation. The content of this sidebar changes based on the **plan type**:

### Plan Type: Location-Based
- Heading: "N Locations"
- Each card shows:
  - Location icon (pin)
  - Location code (e.g., WH-A01)
  - Location description (e.g., Loading Dock 3, Central Distribution Center)
  - Active/selected state with highlighted border

### Plan Type: Item-Based
- Heading: "N Items"
- Each card shows:
  - Item thumbnail image (or placeholder icon)
  - Item code (e.g., P-00891)
  - Item description (e.g., Steel Bolt M8 × 40 mm – Zinc Coated)
  - Serialization badge: Non-Serialized | Serialized

### Plan Type: Category-Based
- Heading: "N Categories"
- Each card shows:
  - Category icon (geometric shapes)
  - Category name (e.g., Extra)
  - Category description (e.g., Aeronautical engine for third units)

**Common sidebar elements:**
- Search bar: "Search category, items and locations"
- Discrepancy indicator at bottom: "⚠ Discrepancy Identified" (shown when any count has variance)
- Clicking a sidebar item loads its detail in the main content area

---

## Main Content Area — Count Overview Tab (Review Mode)

### Content Header

When a sidebar item is selected, the main area shows:

**For Location-based plans:**
- Location icon + Location code + description
- "N Items" count (top right)
- Actions: Print Location Count Sheet

**For Item-based plans:**
- Item thumbnail + Item code + full description
- Item tags: Parts, Active badges
- Serialization type: Non-Serialized | Serialized
- "N EA to Count" (total quantity across all locations)
- Actions: Print Item Count Sheet

**For Category-based plans:**
- Category icon + Category name + description
- "N Items to Count"
- Actions: Print Category Count Sheet

---

## Line Item Cards — All States & Variants

Line items are the core data unit of the cycle count. They appear as cards in the main content area, and their content, actions, and visual treatment change based on status. There are two card types depending on context: **Location cards** (shown when navigating by item/category) and **Item cards** (shown when navigating by location).

### Location Line Item Cards (WH-A01 style)

These appear when the user has selected an item or category in the sidebar, and each card represents a location where that item exists.

#### Pending
- **Header**: Location code (e.g., WH-A01) + description | Status: "Pending" (grey, no badge outline)
- **Fields shown**: System Count only (e.g., 1000 EA)
- **Actions**: None
- **Hover state**: Subtle background highlight, no additional actions revealed

#### In Progress
- **Header**: Location code + description | Status: "In Progress" (green outlined badge)
- **Fields shown**: System Count, Started By (avatar + name), Count Started On (date + time)
- **Actions**: None (count is actively being performed)
- **Hover state**: Subtle background highlight

#### Completed (No Discrepancy)
- **Header**: Location code + description | Status: "Completed" (green filled badge)
- **Fields shown**: Prior System Count, Submitted Count (matches system — no variance indicator), Counted By (avatar + name), Reports/Attachments ("View All" link), Count Started → Completed (timestamp range)
- **Actions**: Recount, Edit Count (pencil icon)
- **Hover state**: Recount and Edit Count become more visually prominent

#### Completed (With Discrepancy, Already Approved)
- **Header**: Location code + description | Status: "Completed" (green filled badge)
- **Fields shown**: Prior System Count, Submitted Count (with variance: ↑ 1100 EA • +100 EA in green/amber), Adjusted Count (e.g., 1100 EA), Counted By (avatar + name), **Approved By** (avatar + name), Reports/Attachments ("View All" link), Count Started → Completed (timestamp range)
- **Actions**: Recount
- **Hover state**: Recount becomes more visually prominent

#### Awaiting Approval (Count Decrease)
- **Header**: Location code + description | Status: "Awaiting Approval" (amber/yellow outlined badge)
- **Fields shown**: System Count, Submitted Count (with decrease variance: ↓ 900 EA • -100 EA in red), Counted By (avatar + name), Reports/Attachments ("View All" link — may show count badge like "2" if attachments exist), Count Started → Completed (timestamp range)
- **Actions**: Edit Count (pencil icon), **Reject** (red outlined button), **Approve** (outlined button with checkmark)
- **Hover state**: Reject and Approve buttons become more visually prominent

#### Awaiting Approval (Count Increase)
- Same as decrease variant above, except:
- **Submitted Count** shows increase variance: ↑ 1100 EA • +100 EA in green/amber
- **Actions**: Same — Edit Count, Reject, Approve

#### Awaiting Approval (New Line Item Added by Counter)
- **Header**: Location code + description | Status: "Awaiting Approval" (amber/yellow outlined badge)
- **Fields shown**: System Count, Submitted Count (with variance), Counted By (avatar + name), **Location Added By** (avatar + name — different from Counted By, indicates who added this location to the plan), Reports/Attachments ("View All" link), Count Started → Completed (timestamp range)
- **Actions**: Edit Count, Reject, Approve
- **Visual distinction**: May have "New Line Item Added" banner at top of card (dark grey header bar)

#### Cancelled
- **Header**: Location code + description | Status: "Cancelled" (red filled badge)
- **Fields shown**: Prior System Count, Submitted Count, Counted By (avatar + name), **Cancelled By** (avatar + name), Reports/Attachments ("View All" link), Count Started → Completed (timestamp range)
- **Actions**: Recount
- **Hover state**: Recount becomes more visually prominent

---

### Item Line Item Cards (P-15891 style)

These appear when the user has selected a location in the sidebar, and each card represents an item at that location. Item cards include richer metadata in the header.

#### Card Header (all states)
- Item code (e.g., P-15891)
- Tags: Parts badge, Active badge
- Serialization: Non-Serialized or Serialized (with barcode icon)
- Item description: truncated product name + material info
- Item thumbnail image (small, left-aligned)

#### Pending
- **Status**: "Pending" (grey, no badge outline)
- **Fields shown**: System Count only
- **Actions**: None

#### In Progress
- **Status**: "In Progress" (green outlined badge)
- **Fields shown**: System Count, Started By (avatar + name), Started On (date + time)
- **Actions**: None

#### Completed (No Discrepancy)
- **Status**: "Completed" (green filled badge)
- **Fields shown**: Prior System Count, Submitted Count (no variance), Counted By, Reports/Attachments ("View All"), Count Started → Completed
- **Actions**: Recount, Edit Count

#### Completed (With Discrepancy, Already Approved)
- **Status**: "Completed" (green filled badge)
- **Fields shown**: Prior System Count, Submitted Count (with variance indicator ↑/↓), Adjusted Count, Counted By, **Approved By**, Reports/Attachments ("View All"), Count Started → Completed
- **Actions**: Recount

#### Awaiting Approval (Decrease)
- **Status**: "Awaiting Approval" (amber outlined badge)
- **Fields shown**: System Count, Submitted Count (↓ 900 EA • -100 EA in red), Counted By, Reports/Attachments ("View All" — with count badge if attachments exist, e.g., "2"), Started → Completed
- **Actions**: Edit Count, **Reject** (red), **Approve** (outlined with checkmark)

#### Awaiting Approval (Increase)
- Same as decrease but with ↑ variance in green/amber

#### Awaiting Approval (New Line Item Added)
- **Status**: "Awaiting Approval" (amber outlined badge)
- **Fields shown**: System Count, Submitted Count (with variance), Counted By, **Line Item Added By** (avatar + name), Started → Completed
- **Actions**: Edit Count, Reject, Approve
- **Visual distinction**: "New Line Item Added" banner header

---

### Fullscreen / Table View Row Variants

In the fullscreen (now default page) table view, line items are condensed into rows. These rows show a compressed version of the card data.

#### Location Rows (when viewing by item)
Columns: Row number | Location code + description | Status | System Count | Submitted Count | Actions

| Status | Submitted Count | Actions |
|---|---|---|
| Pending | – (dash) | None |
| In Progress | – (dash) | None |
| Awaiting Approval | ↑ 1100 EA • +100 EA | Reject (✕), Approve (✓), ⋯ menu |
| Completed (with variance) | ↑ 1100 EA • +100 EA | Recount |
| Completed (no variance) | 1000 EA | Edit Count, Recount |
| New (added by counter) | "New" blue label next to location code | Same as Pending |

#### Item Rows (when viewing by location)
Columns: Row number | Item icon + code + description | Status | System Count | Submitted Count | Actions

Same status/action patterns as location rows, but with item metadata (thumbnail, description) instead of location info.

---

## Count Entry Mode — All Input States & Variants

Count Entry Mode transforms the view for manual data entry. Each row becomes editable with an input field replacing the Submitted Count column.

### Layout Changes from Review Mode
- Column header changes: "Submitted Count" → "Submit Count" with editable input fields
- Status column is removed (replaced by inline validation states)
- Top action bar shows: Upload, + Add New Item, **Submit Count** (primary red CTA)

### Location Row Input States (WH-A01 in Count Entry)

#### Default / Empty
- Row: Row number | Location code + description | System Count (e.g., 1000 EA) | Input field with "Enter" placeholder | "EA" unit label | ⋯ kebab menu
- Input: White background, grey placeholder text

#### Filled (No Discrepancy)
- Input shows entered value matching system count (e.g., 1000)
- Input: White background, black text
- No inline message

#### Filled (Discrepancy Detected)
- Input shows value differing from system count (e.g., 1100)
- Input: **Red border**, value in **red text**
- Inline message below row: ℹ "Count increased by +100 EA, approval required." (blue info style)

#### Locked — Being Counted by Another User
- Input shows dash (–), **disabled/greyed out**
- Inline message below row: ℹ "Location is being counted by [Joshua Pekins] and is no longer editable." (blue info style, user name is a link)

#### Locked — Already Approved (Increase)
- Input shows the approved value (e.g., 1100), **disabled/greyed out**
- Inline message below row: ↑ "+100 EA units has been approved and is no longer editable." (green success banner background)

#### Locked — Already Approved by Manager (Decrease)
- Input shows the approved value (e.g., 900), **disabled/greyed out**
- Inline message below row: ↓ "-100 EA units has been approved by a manager and is no longer editable." (green success banner background)

#### Cancelled by Another User
- Input shows the value (e.g., 1000), **disabled/greyed out**
- Inline message below row: ℹ "Cancelled by [Joshua Pekins]" (blue info style, user name is a link)

### Item Row Input States (P-00891 in Count Entry)

Same state patterns as location rows, but with item-specific metadata:
- Row: Row number | Item icon + code + truncated description | System Count | Input field | "EA" unit label | ⋯ kebab menu

#### Default / Empty
- Input: "Enter" placeholder, white background

#### Filled (No Discrepancy)
- Input: value matching system, white background

#### Filled (Discrepancy Detected)
- Input: **Red border**, red text value
- Inline message: ℹ "Count increased by +100 EA, approval required."

#### Locked — Being Counted by Another User
- Input: dash, disabled
- Inline message: ℹ "Location is being counted by [Joshua Pekins] and is no longer editable."

#### Locked — Already Approved (Increase)
- Input: approved value, disabled
- Inline message: ↑ "+100 EA units has been approved and is no longer editable." (green banner)

#### Locked — Already Approved by Manager (Decrease)
- Input: approved value, disabled
- Inline message: ↓ "-100 EA units has been approved by a manager and is no longer editable." (green banner)

#### Cancelled
- Input: value, disabled
- Inline message: ℹ "Cancelled by [Joshua Pekins]"

---

## Confirmation Dialogs (Modals)

These are action confirmation dialogs triggered by buttons throughout the page. They remain as modals even in the new page layout.

### Edit Count

- **Trigger**: "Edit Count" action on a Completed line item
- **Header icon**: Green pencil
- **Title**: Edit Count in location "[Location Code]" / Edit Count for item "[Item Code]"
- **Subtitle**: "Change the submitted count for the selected location."
- **Content**:
  - Submitted Count display: e.g., ↑ 1100 EA • +100 EA
  - System Count display: e.g., 1000 EA
  - Input field: "Enter new count" with EA unit label
  - Warning note (amber): "Note: This only updates the submitted count for this cycle count. It will not change on-hand inventory until the results are reviewed and approved."
- **Actions**: Cancel (esc) | **Update Submitted Count** (primary blue)

### Cancel Plan (In Progress)

- **Trigger**: "Cancel Plan" button when plan status = In Progress
- **Header icon**: Red circle X
- **Title**: "Would you like to cancel the plan?"
- **Content**:
  - Summary stats: Total Location in Plan, Counted Line Items, Pending Line Items, Awaiting Approval Line Items (e.g., 2 Locations, 3 Items, 9 Items, 3 Items)
  - Two radio options:
    1. **Discard Counts & Cancel** (default selected): "Close this plan and undo all counts and inventory adjustments recorded in it."
    2. **Mark as Closed (Incomplete)**: "Keep all counts and adjustments already recorded, and set the plan status to Closed (Incomplete) and its remaining line items are Cancelled."
- **Actions**: Cancel (esc) | **Confirm Plan Cancellation** (primary blue with icon)

### Cancel Plan (Pending)

- **Trigger**: "Cancel Plan" button when plan status = Pending (no counts started)
- **Header icon**: Red circle X
- **Title**: "Would you like to cancel the plan?"
- **Subtitle**: "This will put the status to cancelled."
- **Content**: Simple confirmation, no radio options needed
- **Actions**: Cancel (esc) | **Confirm Plan Cancellation** (primary blue)

### Recount — Location Specific

- **Trigger**: "Recount" button on a completed location line item
- **Header icon**: Blue recount/refresh
- **Title**: "Select Location Recount Method"
- **Content**:
  - Location info: Code + description (e.g., WH-A01, Loading Dock 3)
  - Count summary: Submitted Count (with variance), Prior System Count, Change in Valuation (e.g., $22.50 with edit icon), Counted By (avatar + name)
  - Two radio options:
    1. **Recount in this plan** (default selected): "Send this location back to Pending in the current plan so it can be counted again."
    2. **New Plan**: "Change the line item's status to Cancelled in the current plan, then create a new cycle count plan for it."
- **Actions**: Cancel (esc) | **Confirm Recount** (primary blue)

### Recount — Item Specific

- **Trigger**: "Recount" button on a completed item line item
- **Header icon**: Blue recount/refresh
- **Title**: "Select Item Recount Method"
- **Content**:
  - Item info: Code + Active badge + Non-Serialized badge, description, material info
  - Count summary: Submitted Count (with variance, e.g., ↓ 900 EA • -100 EA), Prior System Count, Change in Valuation, Counted By
  - Two radio options:
    1. **Recount in this plan** (default selected): "Send this item back to Pending in the current plan so it can be counted again."
    2. **New Plan**: "Change the line item's status to Cancelled in the current plan, then create a new cycle count plan for it."
- **Actions**: Cancel (esc) | **Confirm Recount** (primary blue)
- **Note on "New Plan"**: Selecting this and confirming opens a new tab taking the user to the **Cycle Count creation flow**, with all information prefilled and the plan type set to **Count by Items**.

### Recount Plan (Entire Plan)

- **Trigger**: "Recount Plan" button in footer/header actions
- **Header icon**: Blue recount/refresh
- **Title**: "Select Recount Plan Method"
- **Content**:
  - Two radio options:
    1. **Unapproved Counts** (default selected): "Recount Line Items that are incomplete."
    2. **Full Plan**: "Create a new cycle count plan with all original items. The current plan will be closed as Closed (Incomplete)."
- **Actions**: Cancel (esc) | **Confirm Recount** (primary blue)

### Approve Count (Single — Location)

- **Trigger**: "Approve" button on a location line item with status = Awaiting Approval
- **Header icon**: Green checkmark circle
- **Title**: "Would you like to approve count?"
- **Content**:
  - Location info: Code + description
  - Count summary: Submitted Count (with variance, e.g., ↑ 1100 EA • +100 EA), Prior System Count, Change in Valuation (e.g., $22.50 with edit icon), Counted By (avatar + name)
  - Warning note (amber): "Note: Approving will adjust on-hand for any item with a discrepancy."
- **Actions**: Cancel (esc) | **Approve Count** (primary blue with icon)

### Approve Count (Single — Item)

- **Trigger**: "Approve" button on an item line item with status = Awaiting Approval
- **Header icon**: Green checkmark circle
- **Title**: "Would you like to approve count?"
- **Content**:
  - Item info: Code + Active badge + Non-Serialized badge, description, material
  - Count summary: Submitted Count (with variance), Prior System Count, Change in Valuation, Counted By
  - Warning note (amber): "Note: Approving will adjust on-hand for any item with a discrepancy."
- **Actions**: Cancel (esc) | **Approve Count** (primary blue with icon)

### Approve All Counts

- **Trigger**: "Approve All Counts" primary CTA in page footer/header
- **Header icon**: Blue double-checkmark
- **Title**: "Would you like to approve all counts?"
- **Subtitle**: "Review items with identified discrepancies before approving all counts."
- **Content**:
  - Summary stats: Items Affected (e.g., 2 Items), Total Unapproved Line Items (e.g., 5 Line Items)
  - Warning note (amber): "Note: Approving will adjust on-hand for any item with a discrepancy."
- **Actions**: Cancel (esc) | **Approve All Counts** (primary blue with icon)

### Reject Count — Location (Item Count context)

- **Trigger**: "Reject" button on a location line item with status = Awaiting Approval (when viewing by item)
- **Header icon**: Red circle X
- **Title**: "Would you like to reject count?"
- **Content**:
  - Location info: Code + description
  - Count summary: Submitted Count (with variance), Prior System Count, Change in Valuation, Counted By
  - Two radio options:
    1. **Reject and recount** (default selected): "Sets this line item back to Pending in the current plan so it can be counted again."
    2. **Reject and keep system count**: "Cancels the line item in the current plan to maintain the prior system count."
- **Actions**: Cancel (esc) | **Confirm Count Rejection** (primary blue with icon)
- **Interactions**:
  - "Reject and recount" → Sets line item status back to **Pending**
  - "Reject and keep system count" → Sets line item to **Cancelled**. Once the overall plan's line items are all completed, the plan status becomes **Closed (Incomplete)**

### Reject Count — Item (Location Count context)

- **Trigger**: "Reject" button on an item line item with status = Awaiting Approval (when viewing by location)
- **Header icon**: Red circle X
- **Title**: "Would you like to reject the count?"
- **Content**:
  - Item info: Code + Active badge + Non-Serialized badge, description, material
  - Count summary: Submitted Count (with variance), Prior System Count, Change in Valuation, Counted By
  - Three radio options:
    1. **Reject and recount** (default selected): "Sets this line item back to Pending in the current plan so it can be counted again."
    2. **Reject and keep system count**: "Cancels the line item in the current plan to maintain the prior system count."
    3. **Reject and create a new plan**: "Cancels the line item in the current plan, then creates a new cycle count plan for this item in all locations."
- **Actions**: Cancel (esc) | **Confirm Count Rejection** (primary blue with icon)
- **Interactions**:
  - "Reject and recount" → Sets line item status back to **Pending**
  - "Reject and keep system count" → Sets line item to **Cancelled**. Once the overall plan's line items are completed, plan status becomes **Closed (Incomplete)**
  - "Reject and create a new plan" → Opens a **new tab** taking the user to the **Cycle Count creation flow**, with all information prefilled and plan type set to **Count by Items**

---

## Side Panels (Right Drawer or Inline Expansion)

These panels currently open as right-side drawers over the modal. In the page layout, they can be:
- **Option A**: Right-side slide-out panels (overlay or push content)
- **Option B**: Inline expansion within the main content area
- **Option C**: Dedicated sub-tabs or sections within the page

### Report & Attachments Panel
- **Triggered by**: "View All" on a line item's Reports/Attachments row
- **Header**: "Report & Attachments [Item Code]"
- **Content**:
  - Dropdown selector for report type (e.g., "Camera Scan Skip Report")
  - Report fields: Reason (e.g., "Item is damaged"), Description (e.g., "The corner is off"), Reported By (avatar + name), Date/Time
  - Notes section
  - Attachments grid: Image thumbnails with filename, date, kebab menu per attachment
  - "+ Upload" action for adding new attachments

### Serial Units Panel
- **Triggered by**: "View Units" link on serialized items
- **Header**: "Serial Units [Item Code]"
- **Tabs**: System Units | Submitted Units
- **Content**: Searchable two-column grid of serial numbers (sequential ID + serial number, e.g., 001: 100219-44, 002: 100219-45)

### Assignee Panel
- **Triggered by**: Clicking assignee avatar stack
- **Header**: "Assignee"
- **Content**:
  - "With Permission" section: count + user list (avatar + name)
  - "Without Permission" section: count + user list
  - "Change" button (top right)

---

## Nested Grouping in Main Content

The hierarchy varies by plan type:

**Location-based plan** (sidebar = locations):
- Selected Location → List of item line items at that location
- Each line item card shows item code, description, tags, serialization, status, counts, actions

**Item-based plan** (sidebar = items):
- Selected Item → List of location line items where that item exists
- Each row shows location code, description, status, system count, submitted count
- Progress indicator: "2000/3000 EA" showing counted vs. total

**Category-based plan** (sidebar = categories):
- Selected Category → Grouped by Item → Under each item, list of location rows
- Two-level nesting: Item header (P-00891, 2000/3000 EA) → Location rows underneath

---

## Responsive Considerations

- The left sidebar should be collapsible or convert to a dropdown on smaller viewports
- Count Entry Mode needs to be optimized for tablet use (warehouse workers on tablets)
- Data-dense tables should support horizontal scrolling on constrained widths
- Print actions should generate proper print-optimized layouts

---

## Key Design Decisions to Make

1. **Tab vs. Toggle for Count Entry Mode**: Should Count Entry be a separate tab or a mode toggle within the same view? Tab provides clearer separation; toggle preserves spatial context.

2. **Side panels vs. tabs for Notes/Attachments and Reports**: Side panels work for quick glances; tabs work better if users frequently reference this data.

3. **Fullscreen View elimination**: Since we're now on a full page, the "Full Screen View" and "Exit Fullscreen" buttons should be removed. Ensure the default page layout provides enough space that fullscreen was compensating for.

4. **Bottom action bar**: Should plan-level actions (Cancel, Recount Plan, Print All, Approve All) be in a sticky bottom bar, the page header, or both?

5. **Discrepancy summary**: Consider adding a summary banner or count showing total discrepancies, pending approvals, and completion percentage at the top of the page for quick status assessment.