# 📄 Contract Management Application

Built with **⚛️ React** and **🎨 Tailwind CSS**

---

## 🚀 Project Overview

This application allows users to:

- Create **Contract Blueprints**
- Generate **Dynamic Contracts** from blueprints
- Manage contracts across multiple **lifecycle states**

It demonstrates:
- Component-driven architecture
- Dynamic form generation
- State management using **React Context API**

---

## 🧩 Technologies Used

- ⚛️ React  
- 🎨 Tailwind CSS  
- 🧠 Context API  
- 🧭 React Router  
- 🎥 Framer Motion  
- 📦 Vite  
- 🟨 JavaScript (ES6+)  

---

## 📥 Clone Repository

```bash
git clone https://github.com/your-username/contract-management.git
cd contract-management
📦 Install Dependencies & Run
npm install
npm run dev


📍 App runs at: http://localhost:5173

🎨 Tailwind CSS Setup (Vite)
npm install -D tailwindcss
npx tailwindcss init


Tailwind is configured directly with Vite for fast builds and zero runtime overhead.
📂 Folder Structure & Usage
src/context/AppContext.jsx

Centralized global state using React Context API.
Stores:

Blueprints

Contracts

Contract lifecycle statuses

src/features/blueprints/BlueprintEditor.jsx

Used to:

Create reusable blueprint templates

Define dynamic fields (Text, Date, Checkbox, Signature)

src/features/contracts/ContractCreator.jsx
Used to:

Select a blueprint

Enter contract name

Dynamically generate form fields

Save contracts based on blueprint structure

src/features/dashboard/Dashboard.jsx

Displays:

All contracts

Current lifecycle status

Summary dashboard view

src/App.jsx

Application entry point

Handles routing using React Router

Provides sidebar navigation
🧠 ContractCreator.jsx – Logic Explained
🔁 Dynamic Rendering

Blueprint fields are rendered using .map() on selectedBp.fields.
Any change in a blueprint automatically reflects in the contract form.

🧬 Inheritance

Each contract stores a copy of the blueprint fields, ensuring:

Existing contracts remain unchanged if a blueprint is edited later

Audit-safe contract history

🔐 State Isolation

Each field value is stored in formValues using unique field IDs, preventing collisions.

✨ Animations

Framer Motion is used for:

Smooth page transitions

Dynamic form rendering

Professional UI polish
🔒 Locked & Revoked Contract Logic
🔒 Locked Contracts

All inputs are disabled

No editing allowed

Contract becomes read-only

Ensures integrity after approval

❌ Revoked Contracts

Contract is visually marked as revoked

No further actions allowed

Used for compliance and audit safety
screenshots/
 ├── dashboard.png
 ├── blueprint.png
 └── contract.png# Contract.io
```
A modern web application for creating, managing, and tracking contracts using customizable blueprints with drag-and-drop field positioning.

🌐 **Live Demo**: [https://cm-assignment-dusky.vercel.app/](https://calm-bublanina-158fbb.netlify.app/)

## 📋 Overview

Contract.io is a modern, single-page contract management application built with React, TypeScript, and Tailwind CSS. It allows users to create reusable contract templates (Blueprints), generate contracts from these templates, and manage their full lifecycle in a visually appealing, SaaS-style dashboard.
This project is a Contract Management Application built using React and Tailwind CSS.
It helps users create contract templates called blueprints and generate contracts from them.
The app allows dynamic form creation based on selected blueprints, making contract creation faster.
Users can manage contracts through different lifecycle stages like Created, Locked, and Revoked.
It ensures data safety by keeping existing contracts unchanged even if templates are edited later.
The project uses React Context API for global state management.
Smooth animations are added using Framer Motion for a better user experience.

## ✨ Features

### Blueprint Management
- **Visual Designer**: Drag-and-drop interface to position fields on an A4 canvas (794px × 1123px)
- **Field Types**: Support for text, date, checkbox, and signature (image upload) fields
- **Color-Coded Fields**: Visual distinction between field types with a legend
- **Persistent Positioning**: Field positions are saved and maintained across sessions
- **Search & Filter**: Quick search functionality to find blueprints
- **View & Delete**: Preview blueprints in read-only mode or remove them

### Contract Management
- **Blueprint-Based Creation**: Select from existing blueprints to create contracts
- **Value Entry**: Fill in all blueprint fields with actual contract data
- **Signature Upload**: Upload signature images (converted to base64) with 1.5cm × 3cm dimensions
- **A4 Document Preview**: Real-time preview of the contract as a formatted A4 document
- **Status Tracking**: Visual workflow tracker with 5 stages
- **Status Workflow**: 
  - Created → Approved → Sent → Signed → Locked
  - Revokable at Created or Sent stages
- **Simplified Status Display**: 
  - **Active** (Created/Approved)
  - **Pending** (Sent)
  - **Signed** (Signed/Locked)
  - **Revoked**
- **Print to PDF**: Browser-native print functionality to export contracts as PDF

### User Experience
- **Toast Notifications**: Modern toast messages for success and error feedback
- **Confirmation Modals**: Clean modal dialogs for destructive actions
- **Fixed Sidebar**: Always-accessible navigation
- **Responsive Tables**: Organized data display with search and filtering
- **Action Buttons**: Quick access to view, change status, and delete operations

## 🛠 Tech Stack

- **Frontend Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.2.4
- **Styling**: TailwindCSS 3.4.19
- **Routing**: React Router DOM 7.12.0
- **Icons**: React Icons 5.5.0
- **Notifications**: React Hot Toast 2.6.0
- **State Management**: React Hooks (useState, useEffect, useMemo)
- **Data Persistence**: localStorage (browser-native)
- **Image Handling**: FileReader API for base64 conversion

## 📦 Setup Instructions

### Prerequisites

Before starting, ensure you have the following installed on your system:

- **Node.js**: Version 18.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: Comes bundled with Node.js (v9+ recommended)
- **Git**: For version control (optional)
- **Modern Web Browser**: Chrome, Firefox, Edge, or Safari

### Installation Steps

1. **Extract or Clone the Project**
   ```bash
   # If using Git
   git clone <repository-url>
   cd contract-manager
   
   # OR if you have a zip file
   # Extract the contract-manager folder and navigate to it
   cd contract-manager
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   
   This will install all required packages including:
   - React and React DOM
   - TypeScript
   - Vite (build tool)
   - TailwindCSS (styling)
   - React Router DOM (routing)
   - React Hot Toast (notifications)
   - React Icons
   - All dev dependencies

3. **Verify Installation**
   ```bash
   npm run lint
   ```
   This ensures all dependencies are correctly installed and there are no configuration issues.

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   Expected output:
   ```
   VITE v7.2.4  ready in XXX ms
   
   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ➜  press h + enter to show help
   ```

5. **Open in Browser**
   - Navigate to `http://localhost:5173`
   - The application should load with the sidebar navigation
   - You'll see "Contracts" page by default (empty state)

6. **Verify Application is Working**
   - Click "Blueprints" in sidebar(Build template button)
   - Click "New Blueprint" button (New contract)
   - If the modal opens, the application is working correctly

### Building for Production

1. **Create Production Build**
   ```bash
   npm run build
   ```
   
   This creates an optimized bundle in the `dist/` folder.

2. **Preview Production Build**
   ```bash
   npm run preview
   ```
   
   Opens the production build at `http://localhost:4173`

3. **Deploy**
   - Upload the contents of the `dist/` folder to any static hosting service
   - Supports: Netlify, Vercel, GitHub Pages, AWS S3, etc.

### Troubleshooting Setup

**Issue**: `npm install` fails with dependency errors
- **Solution**: Delete `node_modules` folder and `package-lock.json`, then run `npm install` again
- Try using Node.js LTS version

**Issue**: Port 5173 already in use
- **Solution**: Kill the process using that port or Vite will automatically use the next available port

**Issue**: TypeScript errors during build
- **Solution**: Run `npm run lint` to identify issues, ensure TypeScript version is compatible

**Issue**: Vite not found
- **Solution**: Run `npm install -g vite` or use `npx vite` instead

## 🚀 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

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


## 📖 Usage Guide
### 1. Open the App
Go to
🌐 https://calm‑bublanina‑158fbb.netlify.app/
You should see the dashboard or main page with a sidebar navigation
### Build Template (Create a Blueprint)
Click “Blueprints” in the sidebar.
You’ll see a list of existing blueprints (empty if none are created yet).
Click “New Blueprint”.
A modal opens where you can add fields:
Text — for names or descriptions
Date — for dates
Checkbox — for yes/no values
Signature — upload an image for a signature
Once you add a field, Fill in values for each field:
   - **Text fields**: Enter text
   - **Date fields**: Select from date picker
   - **Checkbox fields**: Check/uncheck
   - **Signature fields**: Upload image file it appears on the A4 canvas.
You can drag and position fields anywhere on the canvas.
Continue adding as many fields as you need.
Give your blueprint a name (e.g., Freelance Agreement).
Click Save Blueprint.

### Creating Create New Contract

After you have at least one blueprint:
Click “Contracts” in the sidebar.
Click “New Contract”.
In the form:
Select a blueprint from a dropdown.
Enter a contract name.
The form auto‑generates based on the fields you placed in the blueprint:
Type text
Pick dates
Check checkboxes
Upload signature images
You see a live A4 preview showing how the contract will look when printed.
When done, click Save Contract.
👉 This creates a new contract with status “Created”.
### Dashboard / Contract ListThe dashboard (or Contracts page) shows all existing contracts in a table or list.

You’ll see:
Contract names
Status
Actions like:
View
Update status
Delete
You can also:
Search contracts
Filter by status

## 🔄 Contract Status Workflow
Each contract goes through a standard lifecycle: 

```
Created → Approved → Sent → Signed → Locked
   ↓                    ↓
Revoked ←──────────────┘

Display Status Mapping:
- Active: Created, Approved
- Pending: Sent
- Signed: Signed, Locked
- Revoked: Revoked
```

**How it works:**

1. When a contract is first saved it is **Created**.
2. Click a button to move it to **Approved**.
3. Then to **Sent** (for review or client delivery).
4. Then to **Signed** after signature upload.
5. Finally, to **Locked** when complete.
6. You can **Revoke** a contract (only at certain stages: Created or Sent).

The UI shows a **visual tracker** so you can see the current status of a contract.

---

## 📄 View Contract & Print

When viewing a contract:

- You see a **detailed preview** of the filled contract.
- All fields appear in their correct positions.
- Click **Print / PDF** to export the contract using the browser print dialog.

---

## 🖋 Signature Upload

For signature fields:

1. Click the **upload input**.
2. Select an **image file** (under ~2MB).
3. The app converts it to **base64**.
4. The signature appears in the **contract print preview**.

---

## 🧠 Behind the Scenes

- Blueprints and contracts are stored in **localStorage** — no backend database.
- Editing a blueprint does **not affect existing contracts** (contracts keep a copy of their blueprint fields).
- All data persists across sessions until browser localStorage is cleared.

---

## 🛠 Example User Journey

1. Go to **Blueprints**.
2. Create a blueprint called **“Employment Agreement”**:
   - Add **Text**: Employee Name
   - Add **Date**: Start Date
   - Add **Signature**: Employer Signature
3. **Save** the blueprint.
4. Go to **Contracts**.
5. Click **New Contract**:
   - Choose the “Employment Agreement” blueprint.
   - Fill in all fields.
   - Upload signatures.
6. Save the contract (**status = Created**).
7. Move status: **Created → Approved → Sent**.
8. When signed, mark **Signed**.
9. Finally, mark **Locked**.
10. **Print** the contract to PDF.

---

## 📌 Quick Navigation Summary

| Section       | What You Do                                           |
|---------------|------------------------------------------------------|
| Blueprints    | Create templates for contracts                       |
| Contracts     | Generate and manage contract instances               |
| Dashboard/List| View all contracts, filter & search                 |
| Status Controls | Advance contract through the lifecycle            |
| View/Print    | Preview & export final contract                      |

---

This README can serve as a **quick reference guide** for end users to understand the workflow, signature handling, and contract management features.


## 💾 Data Storage

All data is stored in **browser localStorage**:

- **Blueprints**: Stored with key pattern `blueprint_{id}`
- **Contracts**: Stored with key pattern `contract_{id}`
- **Format**: JSON serialized objects
- **Persistence**: Data persists across browser sessions
- **Limitations**: 
  - Storage limit ~5-10MB (browser dependent)
  - Data is local to the browser/device
  - Clearing browser data will delete all records

### Data Backup

To backup data manually:
1. Open browser DevTools (F12)
2. Go to Application/Storage → Local Storage
3. Copy all contract-manager keys and values
4. Save to external file

## 🎨 Field Types

| Type | Description | Default Size | Color |
|------|-------------|--------------|-------|
| Text | Single-line text input | 200×35px | Blue |
| Date | Date picker | 160×35px | Green |
| Checkbox | Boolean checkbox | 140×35px | Purple |
| Signature | Image upload (base64) | 240×50px (displays as 113×57px) | Orange |

## 📐 A4 Specifications

- **Canvas Dimensions**: 794px × 1123px (at 96 DPI)
- **Physical Size**: 210mm × 297mm
- **Print Settings**: A4 page size, no margins
- **Field Positioning**: Pixel-perfect positioning preserved in print

## 🔄 Contract Status Workflow

```
Created → Approved → Sent → Signed → Locked
   ↓                    ↓
Revoked ←──────────────┘

Display Status Mapping:
- Active: Created, Approved
- Pending: Sent
- Signed: Signed, Locked
- Revoked: Revoked
```

## � Architecture and Design Decisions
## 🏛 Application Architecture

The Contract Manager follows a **Component-Based Architecture** using React with localStorage for persistence. The application is structured in layers for maintainability and scalability.

```
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
### Key Design Decisions

#### 1. **Client-Side Only Architecture**
- **Decision**: The app is a pure frontend application with no backend.
- **Rationale**: 
  - Rapid prototyping and deployment
  - No server or database required
  - Instant access to blueprints and contracts
  - Ideal for single-user or small-team local contract management
- **Trade-off**: Multi-user collaboration or cloud sync is not supported.

#### 2. **localStorage for Data Persistence**
- **Decision**: Use browser `localStorage` for all data storage.
- **Rationale**:
  - Simple setup, no database configuration
  - Data persists across browser sessions
  - Native browser API, no external dependencies
  - Synchronous operations make field positions and contract data predictable
- **Trade-off**:
  - Limited storage (~5–10MB)
  - Data is not accessible across devices
  - Clearing browser data deletes all blueprints/contracts

#### 3. **Blueprint-Contract Separation**
- **Decision**: Blueprints act as templates, contracts are instances.
- **Rationale**:
  - Reusability: One blueprint can generate multiple contracts
  - Consistency: Contracts follow the same structure as blueprint
  - Efficiency: Field positions are defined once
  - Flexibility: Blueprint updates do not alter existing contracts
- **Implementation**: Contracts store a copy of blueprint fields and their values along with `blueprintId`.

#### 4. **Custom Drag-and-Drop Field Positioning**
- **Decision**: Use a custom `useDraggable` hook for field positioning on the A4 canvas.
- **Rationale**:
  - Lightweight, precise control without extra dependencies
  - Works with React 19 without compatibility issues
  - Ensures pixel-perfect placement for printing
- **Implementation**:
  - Hook handles mouse/touch events
  - Positions are relative to canvas boundaries
  - Prevents fields from overflowing the A4 area

#### 5. **A4 Canvas Standard**
- **Decision**: Fix canvas to A4 dimensions (794×1123px at 96 DPI)
- **Rationale**:
  - Matches real-world document size
  - Print-ready formatting
  - Predictable field positioning
  - Professional appearance for exports
- **Implementation**: Drag-and-drop field positions translate directly to print layout.

#### 6. **React Router for SPA Navigation**
- **Decision**: Use React Router DOM v7 for routing.
- **Rationale**:
  - Single-page app experience without reloads
  - Clean URL structure
  - Supports browser navigation
  - Easy to extend with new pages
- **Routes**:
  - `/contracts` – Contract list
  - `/contracts/create` – New contract form
  - `/contracts/view/:id` – Contract details
  - `/blueprints` – Blueprint list
  - `/blueprints/create` – Blueprint editor
  - `/blueprints/view/:id` – Blueprint preview

#### 7. **TypeScript for Type Safety**
- **Decision**: Use TypeScript across the app.
- **Rationale**:
  - Catch errors at compile time
  - Better IDE support & autocomplete
  - Self-documenting types for blueprints and contracts
  - Easier future refactoring
- **Types**: Centralized in `src/types` folder

#### 8. **TailwindCSS for Styling**
- **Decision**: Utility-first CSS with Tailwind v3.
- **Rationale**:
  - Fast UI development
  - Consistent, responsive design system
  - Avoids CSS naming conflicts
  - Built-in responsive utilities
- **Customization**: Tailored colors and theme in `tailwind.config.ts`

#### 9. **Component Composition**
- **Decision**: Reusable components for DRY, maintainable UI.
- **Rationale**:
  - Consistent UI patterns
  - Easier maintenance and updates
  - Testable components
- **Examples**: `ConfirmModal`, `DraggableField`, `BlueprintCard`, `ContractTable`.

#### 10. **Contract Status Workflow**
- **Decision**: Linear lifecycle with a Revoke option.
- **Rationale**:
  - Mirrors real-world contract processes
  - Clear visual tracker in the UI
  - Prevents accidental edits after locking
- **Workflow**: `Created → Approved → Sent → Signed → Locked (+ Revoked)`

#### 11. **Base64 for Signature Images**
- **Decision**: Convert uploaded signature images to base64.
- **Rationale**:
  - No backend or file storage needed
  - Contract data remains self-contained
  - Works with localStorage
- **Trade-off**: Increases storage size, suitable only for small images (<2MB)

#### 12. **Toast Notifications & Modals**
- **Decision**: Use `react-hot-toast` for feedback and custom modals for confirmations.
- **Rationale**:
  - Modern, non-blocking UX
  - Clear feedback for users
  - Accessible and consistent design
- **Implementation**: Toaster placed in root; modals per component as needed.


### State Management Strategy

- **Local State**: useState for component-specific state
- **Shared State**: Props passing for parent-child communication
- **Derived State**: useMemo for computed values
- **Side Effects**: useEffect for data loading and subscriptions
- **No Global State**: Application is simple enough to not require Redux/Context

### File Organization

```
/src
  /components     - Reusable UI components
  /hooks          - Custom React hooks (business logic)
  /pages          - Route-level components
  /types          -  interfaces
  /storage        - Data layer utilities
```

**Rationale**: Clear separation of concerns, easy to navigate, scalable structure

### Performance Optimizations

1. **Lazy Loading**: Routes could be code-split (not implemented yet)
2. **useMemo**: Prevent unnecessary recalculations (selectedBlueprint)
3. **Event Delegation**: Single event handler for multiple items
4. **Debouncing**: Search input could be debounced (future enhancement)
5. **Virtual Scrolling**: For large lists (future enhancement)

### Security Considerations

- **No Authentication**: Application is client-side only
- **No Encryption**: Data stored in plain text in localStorage
- **XSS Protection**: React's built-in escaping prevents XSS
- **Input Validation**: Basic validation on required fields
- **Note**: Not suitable for sensitive data without backend implementation

### Testing Strategy (Not Implemented)

**Recommended approach:**
- Unit tests: Components with Jest + React Testing Library
- Integration tests: User flows with Cypress
- Type checking: TypeScript compiler
- Linting: ESLint for code quality

## � Assumptions and Limitations

### Assumptions

#### User Environment
1. **Modern Browser**: Users have access to a modern browser (Chrome, Firefox, Safari, Edge) released within the last 2 years
2. **JavaScript Enabled**: Browser has JavaScript enabled
3. **localStorage Available**: Browser supports localStorage (not in private/incognito mode limitations)
4. **Screen Resolution**: Users have at least 1280x720 resolution for optimal viewing
5. **Single Device**: User works on a single device (no cross-device sync needed)

#### Usage Patterns
6. **Single User**: Application is used by one person at a time
7. **English Language**: All UI text is in English only
8. **Small Scale**: User manages fewer than 100 blueprints and 500 contracts
9. **Occasional Use**: Not designed for high-frequency transaction processing
10. **Trust Environment**: User trusts their browser and device security

#### Data
11. **Non-Sensitive Data**: Contracts don't contain highly sensitive or regulated information
12. **No Compliance Requirements**: No GDPR, HIPAA, or other regulatory compliance needed
13. **Local Data Acceptable**: User accepts data is stored locally and not backed up
14. **Image Size**: Signature images are under 2MB
15. **Field Count**: Blueprints have fewer than 50 fields

#### Technical
16. **Internet for Initial Load**: Internet connection required for first load (to fetch dependencies)
17. **No Offline Mode**: Application doesn't need to work completely offline after initial load
18. **Print Capability**: User's browser supports window.print() API
19. **Date Format**: US date format (MM/DD/YYYY) is acceptable
20. **No Accessibility Requirements**: WCAG compliance not required (though basic accessibility is implemented)

### Known Limitations

#### Data Storage
1. **Storage Capacity**: 
   - Limited to ~5-10MB depending on browser
   - Approximately 50-100 contracts with signatures before hitting limits
   - No warning when approaching storage limit

2. **No Data Sync**:
   - Data doesn't sync across browsers or devices
   - Cannot access contracts from different computers
   - No cloud backup functionality

3. **Data Persistence**:
   - Data can be lost if:
     - Browser data/cache is cleared
     - Browser is uninstalled
     - User logs out (in some browsers)
     - Storage quota is exceeded
   - No automatic backup system

4. **No Data Export**:
   - Cannot export contracts to formats other than print-to-PDF
   - No JSON/CSV/XML export functionality
   - No bulk operations

#### Functionality
5. **Single User Only**:
   - No user authentication or multi-user support
   - Cannot share contracts with other users
   - No collaboration features
   - No permission system

6. **No Real-Time Updates**:
   - Changes only reflected after page refresh in some cases
   - No WebSocket or real-time sync
   - No conflict resolution

7. **Limited Search**:
   - Simple text matching only
   - No advanced filters (date ranges, status combinations, etc.)
   - No full-text search across all fields
   - Search is case-insensitive but exact match

8. **Status Workflow**:
   - Cannot skip status steps (must go in order)
   - Cannot go backward in workflow (except revoke)
   - Once locked, contract cannot be unlocked
   - No custom workflows per blueprint

9. **Field Types**:
   - Limited to 4 field types (text, date, checkbox, signature)
   - No support for:
     - Dropdowns/select fields
     - Multi-line text areas
     - Number fields with validation
     - Currency fields
     - File attachments (other than signatures)
     - Rich text/formatting

10. **Signature Handling**:
    - Only image uploads (no draw signature)
    - Fixed size (1.5cm × 3cm)
    - No signature validation
    - Stored as base64 (increases storage size)

#### User Experience
11. **No Undo/Redo**:
    - Cannot undo deletions
    - No version history
    - No recovery for accidentally deleted items

12. **No Validation Rules**:
    - Cannot set required fields
    - No format validation (email, phone, etc.)
    - No min/max length constraints
    - No conditional logic

13. **Limited Error Handling**:
    - Basic error messages via toasts
    - No detailed error logs
    - No error reporting system

14. **Print Limitations**:
    - Depends on browser's print implementation
    - No custom PDF generation
    - May have inconsistencies across browsers
    - No print templates or customization

15. **No Mobile Optimization**:
    - Drag-and-drop difficult on touch devices
    - Small canvas on mobile screens
    - Not responsive below 768px
    - Recommended for desktop use only

#### Performance
16. **Client-Side Processing**:
    - All operations happen in browser
    - Can be slow with many contracts
    - No pagination on lists
    - No lazy loading of data

17. **Memory Usage**:
    - All data loaded into memory at once
    - Can cause performance issues with 100+ items
    - No virtualization for long lists

18. **Image Processing**:
    - Base64 conversion happens on main thread
    - Can freeze UI for large images
    - No image optimization or compression

#### Security
19. **No Authentication**:
    - Anyone with device access can view/modify contracts
    - No password protection
    - No user accounts

20. **No Encryption**:
    - Data stored in plain text
    - Visible in browser DevTools
    - Not suitable for confidential information

21. **XSS Vulnerabilities**:
    - While React provides some protection
    - User-uploaded images not sanitized beyond file type

22. **No Audit Trail**:
    - Only updatedAt timestamp
    - No detailed change history
    - Cannot see who made what changes
    - No rollback capability

#### Browser Compatibility
23. **Modern Browsers Only**:
    - Requires ES6+ support
    - No IE11 support
    - May not work in older browser versions

24. **localStorage Dependency**:
    - Doesn't work in private/incognito mode (with restrictions)
    - Blocked if user disables storage

25. **Print API Dependency**:
    - Relies on browser's native print dialog
    - Different results across browsers
    - No control over print settings

### Constraints

- **Development**: Single developer, rapid prototyping focus
- **Timeline**: Built for quick deployment without backend infrastructure
- **Scope**: Prototype/MVP, not production-ready system
- **Scale**: Designed for personal/small team use, not enterprise
- **Maintenance**: No dedicated maintenance team or SLA

### Recommended Use Cases

**✅ Good For:**
- Personal contract management
- Small team internal documents
- Prototyping contract workflows
- Learning React/TypeScript
- Template-based document generation

**❌ Not Suitable For:**
- Enterprise contract management
- Multi-user collaboration
- Legally binding e-signatures
- Sensitive or regulated data
- High-volume processing
- Mobile-first workflows
- Offline-first requirements

### Mitigation Strategies

For production use, consider:
1. **Backend Integration**: Add Node.js/Express API with database
2. **Cloud Storage**: Migrate from localStorage to cloud database
3. **Authentication**: Implement user accounts and permissions
4. **Validation**: Add comprehensive input validation
5. **Testing**: Implement unit and integration tests
6. **Accessibility**: Add ARIA labels and keyboard navigation
7. **Mobile**: Make responsive for mobile devices
8. **Export**: Add PDF generation library (e.g., jsPDF)
9. **Backup**: Implement export/import functionality
10. **Monitoring**: Add error tracking (e.g., Sentry)

## 🐛 Legacy Limitations Summary

1. **No Backend**: All data stored in localStorage (not suitable for production)
2. **Single User**: No multi-user support or authentication
3. **No Export**: Contracts cannot be exported except via print
4. **Storage Limit**: Browser localStorage has size constraints
5. **No Collaboration**: Changes are local only

## 🔮 Future Enhancements

- Backend API integration
- Database persistence
- User authentication
- Contract templates
- Email notifications
- PDF export without print dialog
- Bulk operations
- Contract versioning
- Audit trail
- Digital signatures

## 📝 License

This project is private and not licensed for public use.

## 👨‍💻 Development

### Adding New Field Types

1. Update `FormField['type']` in `src/types/blueprint.types.ts`
2. Add default size in `DEFAULT_SIZE` object in `CreateBlueprint.tsx`
3. Add color scheme in `FIELD_COLORS` object
4. Add rendering logic in `DraggableField.tsx`
5. Add value input logic in `CreateContract.tsx`
6. Add preview rendering in `ViewContract.tsx`

### Modifying Status Workflow

1. Update `Contract['status']` type in `src/types/contracts.types.ts`
2. Modify workflow array in `ViewContract.tsx` `getNextStatus()`
3. Update color mappings in status functions
4. Adjust `canRevoke()` logic if needed

## 🆘 Troubleshooting

**Issue**: Fields not appearing after creation
- **Solution**: Ensure field label is not empty before clicking Add

**Issue**: Contract not saving
- **Solution**: Check that blueprint is selected and contract name is filled

**Issue**: Signature image not displaying
- **Solution**: Ensure image file is valid and under browser size limits (~2MB recommended)

**Issue**: Status tracker not updating
- **Solution**: Refresh page or check browser console for errors

**Issue**: Data disappeared
- **Solution**: Check if browser data/localStorage was cleared. Always backup important data.

 

**Version**: 0.0.0  
**Last Updated**: January 2026
 
