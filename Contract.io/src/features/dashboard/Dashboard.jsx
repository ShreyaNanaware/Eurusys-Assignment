import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Badge } from '../../components/ui/Badge';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';
import ContractDetail from '../contracts/ContractDetail';

const Dashboard = () => {

    
  const { contracts } = useApp();
  const [selectedContract, setSelectedContract] = useState(null);

  return (
    <div className="relative p-8 min-h-screen bg-gray-50 overflow-hidden">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Contract Management</h1>
        <p className="text-gray-500">Manage and track your contract lifecycles</p>
      </header>

      {/* Main Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Contract Name</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Blueprint</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Created Date</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {contracts.length > 0 ? (
              contracts.map((contract) => (
                <tr key={contract.id} className="hover:bg-blue-50/50 transition-colors group">
                  <td className="px-6 py-4 font-semibold text-gray-700">{contract.name}</td>
                  <td className="px-6 py-4 text-gray-500">{contract.blueprintName}</td>
                  <td className="px-6 py-4"><Badge status={contract.status} /></td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{contract.createdAt}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => setSelectedContract(contract)}
                      className="inline-flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-600 transition shadow-sm"
                    >
                      <Eye size={16} /> View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-20 text-center text-gray-400">
                  No contracts found. Create one to get started!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Side Panel Overlay */}
      <AnimatePresence>
        {selectedContract && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedContract(null)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            
            {/* Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
                <h3 className="font-bold text-lg text-gray-800">Review Contract</h3>
                <button 
                  onClick={() => setSelectedContract(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-2">
                {/* Reusing the detail component we built earlier */}
                <ContractDetail contract={selectedContract} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;