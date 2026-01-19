import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './features/dashboard/Dashboard';
import BlueprintEditor from './features/blueprints/BlueprintEditor';
import ContractCreator from './features/contracts/ContractCreator';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 flex">
          {/* Navigation Sidebar */}
          <nav className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col gap-4 shadow-sm">
            <h1 className="text-xl font-black text-blue-600 mb-8 tracking-tighter">CONTRACT.IO</h1>
            <Link to="/" className="p-3 hover:bg-blue-50 rounded-xl font-medium transition text-gray-700">Dashboard</Link>
            <Link to="/create-blueprint" className="p-3 hover:bg-blue-50 rounded-xl font-medium transition text-gray-700">Build Template</Link>
            <Link to="/new-contract" className="p-3 hover:bg-blue-50 rounded-xl font-medium transition text-gray-700">New Contract</Link>
          </nav>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto h-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/create-blueprint" element={<BlueprintEditor />} />
              <Route path="/new-contract" element={<ContractCreator />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;