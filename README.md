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
# 📑 Contract Management Platform

A high-performance, frontend-based contract lifecycle management tool built with React, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start
1. **Clone the repo:** `git clone <your-repo-link>`
2. **Install dependencies:** `npm install`
3. **Run development server:** `npm run dev`

## 🏗️ Architecture & Design Decisions
- **Feature-Based Folder Structure:** I avoided a monolithic structure by organizing code into domain-specific folders (`blueprints`, `contracts`, `dashboard`). This improves maintainability and scalability.
- **State Machine Pattern:** The contract lifecycle follows a strict state transition map. This prevents illegal actions (e.g., you cannot sign a contract before it is sent).
- **Immutability Logic:** Contracts in the `Locked` or `Revoked` state utilize conditional rendering to disable all inputs and actions, ensuring data integrity.
- **Context API for State:** Used React Context to simulate a centralized database, allowing data to persist across different views during the session.

## 🛠️ Tech Stack
- **React 18:** Functional components with Hooks.
- **Tailwind CSS:** For a modern, responsive UI without custom CSS files.
- **Framer Motion:** Used for the side-panel animations and smooth state transitions.
- **Lucide React:** Standardized iconography.

## 📝 Assumptions & Limitations
- **Persistence:** Data is stored in `localStorage`. Clearing browser cache will reset the application.
- **Field Positioning:** Basic Y-axis stacking is used for field placement within the blueprint creator.
- **Auth:** The system assumes a single-user environment for this demonstration.

## 🔄 Contract Lifecycle

1. **Created**: Initial state after generation.
2. **Approved**: Internal verification complete.
3. **Sent**: Contract delivered to the client.
4. **Signed**: Legally acknowledged by the client.
5. **Locked**: Final state; no further edits allowed.
6. **Revoked**: Voided state; can be triggered from Created or Sent.
