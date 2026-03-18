1. The "Performance Guardian" Prompt
Goal: Prevent memory bloat by forcing the AI to use efficient layer structures. Where to put it: guidelines/performance.md
# Performance & Memory Optimization Rules

## Strict Layer Limits
- **Flat Hierarchy:** Avoid nesting frames more than 5 levels deep. Deep nesting exponentially increases memory usage.
- **Auto Layout over Groups:** Never use "Groups" (CMD+G). Use "Auto Layout" (Shift+A) frames. This reduces the calculation overhead for Figma's rendering engine.
- **Hidden Layer Policy:** Do not create "hidden" versions of components for state changes. Use Component Properties or Variable Modes instead.

## Asset Management
- **Vector Complexity:** If a vector path exceeds 100 nodes, automatically simplify the path or prompt the user to rasterize it.
- **Image Handling:** Never import images at 100% scale. Resize all images to their display dimensions before placement. 
- **Icons:** Use a single consolidated icon library. Do not create new vector shapes for repeated icons.

2. The "Clean Architecture" Prompt
Goal: Organize the project so that "versions" don't become a mess of disconnected files. Where to put it: guidelines/organization.md
# File Structure & Naming Convention

## Page Organization
- **Page 1: Design System:** Contains only local styles, variables, and main components.
- **Page 2: Scratchpad:** All messy iterations and versions go here.
- **Page 3: Production:** Only the final, optimized screens for export/dev handoff.

## Version Control Rules
- **Naming:** Every major iteration must be wrapped in a Frame named `[V.XX] Feature Name | Date`.
- **Archive Policy:** Move any version older than 10 iterations to a separate "Archive" file to keep the current working file memory footprint below 500MB. 

3. The "Recovery & Maintenance" Prompt
Goal: A prompt you can run manually when you start seeing "Memory Warning" alerts. Action: Copy/Paste this into the Make AI Chat when the file feels laggy.
### TASK: Deep Clean Project
Scan the current page and perform the following maintenance:
1. Identify all detached component instances and re-attach them to the library.
2. Find all duplicate layers (identical geometry and position) and delete them.
3. Remove all unused local styles (Colors/Type) that aren't mapped to any layers.
4. Flatten all static illustrations that do not require further editing.
5. Report the total number of layers reduced after the operation.