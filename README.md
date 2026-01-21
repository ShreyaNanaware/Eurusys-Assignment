# Eurusys-Assignment
This project is deployed on Netlify: [View Live Site](https://calm-bublanina-158fbb.netlify.app)

Contract.io is a modern, single-page contract management application built with React, TypeScript, and Tailwind CSS. It allows users to create reusable contract templates (Blueprints), generate contracts from these templates, and manage their full lifecycle in a visually appealing, SaaS-style dashboard.
This project is a Contract Management Application built using React and Tailwind CSS.
It helps users create contract templates called blueprints and generate contracts from them.
The app allows dynamic form creation based on selected blueprints, making contract creation faster.
Users can manage contracts through different lifecycle stages like Created, Locked, and Revoked.
It ensures data safety by keeping existing contracts unchanged even if templates are edited later.
The project uses React Context API for global state management.
Smooth animations are added using Framer Motion for a better user experience.
Overall, this application simplifies contract creation and management in a professional way.

A modern web application for creating, managing, and tracking contracts using customizable blueprints with drag-and-drop field positioning.

✨ Features
Blueprint Management
Visual Designer: Drag-and-drop interface to position fields on an A4 canvas (794px × 1123px)
Field Types: Support for text, date, checkbox, and signature (image upload) fields
Color-Coded Fields: Visual distinction between field types with a legend
Persistent Positioning: Field positions are saved and maintained across sessions
Search & Filter: Quick search functionality to find blueprints
View & Delete: Preview blueprints in read-only mode or remove them
Contract Management
Blueprint-Based Creation: Select from existing blueprints to create contracts
Value Entry: Fill in all blueprint fields with actual contract data
Signature Upload: Upload signature images (converted to base64) with 1.5cm × 3cm dimensions
A4 Document Preview: Real-time preview of the contract as a formatted A4 document
Status Tracking: Visual workflow tracker with 5 stages
Status Workflow:
Created → Approved → Sent → Signed → Locked
Revokable at Created or Sent stages
Simplified Status Display:
Active (Created/Approved)
Pending (Sent)
Signed (Signed/Locked)
Revoked
Print to PDF: Browser-native print functionality to export contracts as PDF
User Experience
Toast Notifications: Modern toast messages for success and error feedback
Confirmation Modals: Clean modal dialogs for destructive actions
Fixed Sidebar: Always-accessible navigation
Responsive Tables: Organized data display with search and filtering
Action Buttons: Quick access to view, change status, and delete operations
🛠 Tech Stack
Frontend Framework: React 19.2.0 with TypeScript
Build Tool: Vite 7.2.4
Styling: TailwindCSS 3.4.19
Routing: React Router DOM 7.12.0
Icons: React Icons 5.5.0
Notifications: React Hot Toast 2.6.0
State Management: React Hooks (useState, useEffect, useMemo)
Data Persistence: localStorage (browser-native)
Image Handling: FileReader API for base64 conversion
📦 Setup Instructions
Prerequisites
Before starting, ensure you have the following installed on your system:

Node.js: Version 18.0.0 or higher (Download)
npm: Comes bundled with Node.js (v9+ recommended)
Git: For version control (optional)
Modern Web Browser: Chrome, Firefox, Edge, or Safari
Installation Steps
Extract or Clone the Project

# If using Git
git clone <repository-url>
cd contract-manager

# OR if you have a zip file
# Extract the contract-manager folder and navigate to it
cd contract-manager
Install Dependencies

npm install
This will install all required packages including:

React and React DOM
TypeScript
Vite (build tool)
TailwindCSS (styling)
React Router DOM (routing)
React Hot Toast (notifications)
React Icons
All dev dependencies
Verify Installation

npm run lint
This ensures all dependencies are correctly installed and there are no configuration issues.

Start Development Server

npm run dev
Expected output:

VITE v7.2.4  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
Open in Browser

Navigate to http://localhost:5173
The application should load with the sidebar navigation
You'll see "Contracts" page by default (empty state)
Verify Application is Working

Click "Blueprints" in sidebar (build template)
Click "New Blueprint" button (create template)
If the modal opens, the application is working correctly
Building for Production
Create Production Build

npm run build
This creates an optimized bundle in the dist/ folder.

Preview Production Build

npm run preview
Opens the production build at http://localhost:4173

Deploy

Upload the contents of the dist/ folder to any static hosting service
Supports: Netlify, Vercel, GitHub Pages, AWS S3, etc.
Troubleshooting Setup
Issue: npm install fails with dependency errors

Solution: Delete node_modules folder and package-lock.json, then run npm install again
Try using Node.js LTS version
Issue: Port 5173 already in use

Solution: Kill the process using that port or Vite will automatically use the next available port
Issue: TypeScript errors during build

Solution: Run npm run lint to identify issues, ensure TypeScript version is compatible
Issue: Vite not found

Solution: Run npm install -g vite or use npx vite instead
🚀 Available Scripts
npm run dev - Start development server with hot reload
npm run build - Build production-ready bundle
npm run preview - Preview production build locally
npm run lint - Run ESLint for code quality checks
### Common Issues & Solutions

**Issue:** Port 5173 already in use  
**Solution:** Kill the process using that port or Vite will automatically use the next available port

**Issue:** TypeScript errors during build  
**Solution:** Run `npm run lint` to identify issues, ensure TypeScript version is compatible

**Issue:** Vite not found  
**Solution:** Run `npm install -g vite` or use `npx vite` instead

---

### Folder Structure

```text
talwin/
├── public/                 # Static assets (images, logos)
├── src/
│   ├── components/         # Atomic UI elements used everywhere
│   │   └── ui/
│   │       └── Badge.jsx    # Status indicators
│   ├── context/            # THE STATE ENGINE
│   │   └── AppContext.jsx   # Context Provider & Lifecycle logic
│   ├── features/           # BUSINESS DOMAINS (Non-Monolithic)
│   │   ├── blueprints/
│   │   │   └── BlueprintEditor.jsx
│   │   ├── contracts/
│   │   │   ├── ContractCreator.jsx
│   │   │   └── ContractDetail.jsx
│   │   └── dashboard/
│   │       └── Dashboard.jsx
│   ├── hooks/              # Custom reusable logic
│   ├── App.jsx             # ROUTER & LAYOUT SHELL
│   ├── main.jsx            # Entry point
│   └── index.css           # Global Styles & Violet Theme
├── package.json            # Project Metadata
└── README.md               # Lifecycle & Flow documentation 
```
The Data Flow Explained
In your ContractCreator.jsx, the flow works like this:

Pull: It pulls blueprints from the AppContext.

Transform: It transforms a static Blueprint into a live newContract object.

Push: It pushes the new object back to the global contracts state.

User Journey: Step-by-Step
1. Designing a Blueprint

Before generating a contract, define its structure:

Navigate to "Build Template" via the sidebar.

Give your blueprint a name (e.g., "Freelance Agreement").

Add fields such as Text, Date, Checkbox, or Signature.

Action: Click "Save Blueprint". This stores the field metadata in the global state.

2. Creating a Contract

Once a blueprint exists, you can create a contract instance:

Navigate to "New Contract".

Select your saved blueprint from the dropdown.

Inheritance: The form dynamically generates based on the fields defined in Step 1.

Fill in the details and click "Generate & Save".

3. Managing the Lifecycle (FSM)

Contracts follow a Finite State Machine (FSM) logic. Go to your Dashboard and click a contract to open the Detail Panel:

Approval: Move from Created ➔ Approved after internal review.

Sending: Mark as Sent when the document is dispatched.

Execution: Move to Signed once the counterparty acknowledges.

Finalization: Move to Locked.

🚦 Understanding the Rules
Action	Availability	Result
Edit Data	Only in Created or Approved	Saves changes to localStorage.
Revoke	Available in Created or Sent	Moves contract to a permanent void state.
Lock	Only from Signed	Disables all buttons/inputs; contract becomes read-only.
🖥 Developer Features (Shortcuts)

Showcase the non-monolithic nature of the code:

Responsive Theme: Toggle dark/light mode; the Black & Violet theme adapts.

Persistence: Refresh the page; useLocalStorage keeps your data intact.

Validation: Attempt to create a contract without a name; the system prevents it, demonstrating robust form handling.

📄 File Structure Reference

To help evaluators understand the code layout:

features/dashboard/ – View existing contracts.

features/blueprints/ – Create and manage templates.

features/contracts/ – Generate contracts from templates.
💾 Data Storage
All data is stored in browser localStorage:

Blueprints: Stored with key pattern blueprint_{id}
Contracts: Stored with key pattern contract_{id}
Format: JSON serialized objects
Persistence: Data persists across browser sessions
Limitations:
Storage limit ~5-10MB (browser dependent)
Data is local to the browser/device
Clearing browser data will delete all records
Data Backup
To backup data manually:

Open browser DevTools (F12)
Go to Application/Storage → Local Storage
Copy all contract-manager keys and values
Save to external file
🎨 Field Types
Type	Description	Default Size	Color
Text	Single-line text input	200×35px	Blue
Date	Date picker	160×35px	Green
Checkbox	Boolean checkbox	140×35px	Purple
Signature	Image upload (base64)	240×50px (displays as 113×57px)	Orange
📐 A4 Specifications
Canvas Dimensions: 794px × 1123px (at 96 DPI)
Physical Size: 210mm × 297mm
Print Settings: A4 page size, no margins
Field Positioning: Pixel-perfect positioning preserved in print
🔄 Contract Status Workflow
```text
Created → Approved → Sent → Signed → Locked
   ↓                    ↓
Revoked ←──────────────┘
```

Display Status Mapping:
- Active: Created, Approved
- Pending: Sent
- Signed: Signed, Locked
- Revoked
� Architecture and Design Decisions
Application Architecture
```text
The application follows a Component-Based Architecture using React with TypeScript, organized into clear layers:

┌─────────────────────────────────────────────┐
│          User Interface Layer               │
│   (Pages, Components, Modals, Toasts)       │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│        Business Logic Layer                 │
│  (Hooks, State Management, Event Handlers)  │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│         Data Persistence Layer              │
│       (localStorage, db.ts utilities)       │
└─────────────────────────────────────────────┘
```
Key Design Decisions
1. Client-Side Only Architecture
Decision: Build as a pure frontend application with no backend
Rationale:
Faster prototyping and development
No server infrastructure required
Instant data access without API latency
Suitable for single-user, local document management
Trade-off: Cannot support multi-user collaboration or cloud sync
2. localStorage for Data Persistence
Decision: Use browser's localStorage API for all data storage
Rationale:
Simple implementation without database setup
Native browser support, no external dependencies
Synchronous API for predictable data operations
Data persists across browser sessions
Trade-off:
Limited storage (~5-10MB)
Data not accessible across devices
No backup/restore functionality
Vulnerable to browser data clearing
3. Blueprint-Contract Pattern
Decision: Separate blueprints (templates) from contracts (instances)
Rationale:
Reusability - create multiple contracts from one blueprint
Consistency - ensure all contracts follow the same structure
Efficiency - define field positions once, reuse many times
Flexibility - modify blueprint without affecting existing contracts
Implementation: Contracts store blueprintId reference and copy of fields with values
4. Drag-and-Drop Field Positioning
Decision: Use custom drag-and-drop hook instead of external libraries
Rationale:
react-draggable deprecated/incompatible with React 19
Custom implementation provides precise control
No additional dependencies
Better performance for our specific use case
Implementation:
useDraggable hook manages mouse events
Canvas-relative positioning
Boundary checking to keep fields within A4 canvas
5. A4 Canvas Standard
Decision: Fix canvas to A4 paper dimensions (794×1123px at 96 DPI)
Rationale:
Matches real-world document size
Print-friendly layout
Predictable field positioning
Professional document appearance
Implementation: Pixel-perfect positioning that translates to print
6. React Router for Navigation
Decision: Use client-side routing with React Router DOM v7
Rationale:
SPA experience without page reloads
Clean URL structure
Supports browser back/forward navigation
Easy to add new routes
Routes:
/contracts - Contract list
/contracts/create - New contract form
/contracts/view/:id - Contract details
/blueprints - Blueprint list
/blueprints/create - Blueprint designer
/blueprints/view/:id - Blueprint preview
7. TypeScript for Type Safety
Decision: Use TypeScript throughout the application
Rationale:
Catch errors at compile time
Better IDE support and autocomplete
Self-documenting code
Easier refactoring
Types: Centralized in types/ folder
8. TailwindCSS for Styling
Decision: Use utility-first CSS framework
Rationale:
Rapid UI development
Consistent design system
No CSS naming conflicts
Built-in responsive utilities
Small bundle size with purging
Customization: Extended with custom colors in tailwind.config.ts
9. Component Composition
Decision: Create reusable components (ConfirmModal, DraggableField, etc.)
Rationale:
DRY principle (Don't Repeat Yourself)
Consistent UI patterns
Easier maintenance
Testability
Strategy: Split UI into logical, reusable pieces
10. Status Workflow System
Decision: Implement linear workflow with revoke option
Rationale:
Mirrors real-world contract processes
Clear progression path
Audit trail (status history via updatedAt)
Prevents accidental modifications (locked state)
Workflow: Created → Approved → Sent → Signed → Locked (+ Revoked)
11. Base64 for Signature Images
Decision: Convert uploaded images to base64 strings
Rationale:
No file storage infrastructure needed
Images embedded directly in contract data
Portable - contract contains all data
Works with localStorage
Trade-off: Increases storage size, limited to smaller images
12. Toast Notifications + Modals
Decision: Use react-hot-toast for feedback, custom modals for confirmations
Rationale:
Better UX than native alert() and confirm()
Non-blocking notifications
Consistent design
Accessible and customizable
Implementation: Toaster in root, modals per component
State Management Strategy
Local State: useState for component-specific state
Shared State: Props passing for parent-child communication
Derived State: useMemo for computed values
Side Effects: useEffect for data loading and subscriptions
No Global State: Application is simple enough to not require Redux/Context
File Organization
/src
  /components     - Reusable UI components
  /hooks          - Custom React hooks (business logic)
  /pages          - Route-level components
  /types          - TypeScript interfaces
  /storage        - Data layer utilities
Rationale: Clear separation of concerns, easy to navigate, scalable structure

Performance Optimizations
Lazy Loading: Routes could be code-split (not implemented yet)
useMemo: Prevent unnecessary recalculations (selectedBlueprint)
Event Delegation: Single event handler for multiple items
Debouncing: Search input could be debounced (future enhancement)
Virtual Scrolling: For large lists (future enhancement)
Security Considerations
No Authentication: Application is client-side only
No Encryption: Data stored in plain text in localStorage
XSS Protection: React's built-in escaping prevents XSS
Input Validation: Basic validation on required fields
Note: Not suitable for sensitive data without backend implementation
Testing Strategy (Not Implemented)
Recommended approach:

Unit tests: Components with Jest + React Testing Library
Integration tests: User flows with Cypress
Type checking: TypeScript compiler
Linting: ESLint for code quality
� Assumptions and Limitations
Assumptions
User Environment
Modern Browser: Users have access to a modern browser (Chrome, Firefox, Safari, Edge) released within the last 2 years
JavaScript Enabled: Browser has JavaScript enabled
localStorage Available: Browser supports localStorage (not in private/incognito mode limitations)
Screen Resolution: Users have at least 1280x720 resolution for optimal viewing
Single Device: User works on a single device (no cross-device sync needed)
Usage Patterns
Single User: Application is used by one person at a time
English Language: All UI text is in English only
Small Scale: User manages fewer than 100 blueprints and 500 contracts
Occasional Use: Not designed for high-frequency transaction processing
Trust Environment: User trusts their browser and device security
Data
Non-Sensitive Data: Contracts don't contain highly sensitive or regulated information
No Compliance Requirements: No GDPR, HIPAA, or other regulatory compliance needed
Local Data Acceptable: User accepts data is stored locally and not backed up
Image Size: Signature images are under 2MB
Field Count: Blueprints have fewer than 50 fields
Technical
Internet for Initial Load: Internet connection required for first load (to fetch dependencies)
No Offline Mode: Application doesn't need to work completely offline after initial load
Print Capability: User's browser supports window.print() API
Date Format: US date format (MM/DD/YYYY) is acceptable
No Accessibility Requirements: WCAG compliance not required (though basic accessibility is implemented)
Known Limitations
Data Storage
Storage Capacity:

Limited to ~5-10MB depending on browser
Approximately 50-100 contracts with signatures before hitting limits
No warning when approaching storage limit
No Data Sync:

Data doesn't sync across browsers or devices
Cannot access contracts from different computers
No cloud backup functionality
Data Persistence:

Data can be lost if:
Browser data/cache is cleared
Browser is uninstalled
User logs out (in some browsers)
Storage quota is exceeded
No automatic backup system
No Data Export:

Cannot export contracts to formats other than print-to-PDF
No JSON/CSV/XML export functionality
No bulk operations
Functionality
Single User Only:

No user authentication or multi-user support
Cannot share contracts with other users
No collaboration features
No permission system
No Real-Time Updates:

Changes only reflected after page refresh in some cases
No WebSocket or real-time sync
No conflict
