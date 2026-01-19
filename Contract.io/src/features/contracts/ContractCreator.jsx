import React, { useState } from 'react';
import { useApp, CONTRACT_STATUS } from '../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const ContractCreator = () => {
  const { blueprints, setContracts } = useApp();
  const [selectedBp, setSelectedBp] = useState(null);
  const [contractName, setContractName] = useState('');
  const [formValues, setFormValues] = useState({});

  const handleCreate = (e) => {
    e.preventDefault();
    if (!selectedBp || !contractName) return alert("Please fill all details");

    const newContract = {
      id: Date.now(),
      name: contractName,
      blueprintName: selectedBp.name,
      status: CONTRACT_STATUS.CREATED,
      createdAt: new Date().toLocaleDateString(),
      data: formValues, // Stores the filled values
      fields: selectedBp.fields // Inherits the field structure
    };

    setContracts(prev => [...prev, newContract]);
    alert("Contract Created Successfully!");
  };

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      className="max-w-4xl mx-auto p-8"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-8">New Contract</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar: Selection */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-500 uppercase mb-2">Select Blueprint</label>
            <select 
              className="w-full p-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setSelectedBp(blueprints.find(b => b.id === Number(e.target.value)))}
            >
              <option value="">-- Choose Template --</option>
              {blueprints.map(bp => (
                <option key={bp.id} value={bp.id}>{bp.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-500 uppercase mb-2">Contract Name</label>
            <input 
              type="text" 
              className="w-full p-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. Service Agreement - Acme Corp"
              value={contractName}
              onChange={(e) => setContractName(e.target.value)}
            />
          </div>
        </div>

        {/* Main: Dynamic Form Generator */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-xl min-h-[400px]">
          <AnimatePresence mode='wait'>
            {selectedBp ? (
              <motion.form 
                key={selectedBp.id}
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onSubmit={handleCreate}
                className="space-y-6"
              >
                <h3 className="text-lg font-bold border-b pb-4">{selectedBp.name} Template</h3>
                
                {selectedBp.fields.map(field => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">{field.label}</label>
                    
                    {field.type === 'Text' && (
                      <input 
                        type="text" 
                        required
                        className="p-3 border rounded-lg focus:border-blue-500 outline-none transition"
                        onChange={(e) => setFormValues({...formValues, [field.id]: e.target.value})}
                      />
                    )}

                    {field.type === 'Date' && (
                      <input 
                        type="date" 
                        required
                        className="p-3 border rounded-lg focus:border-blue-500 outline-none transition"
                        onChange={(e) => setFormValues({...formValues, [field.id]: e.target.value})}
                      />
                    )}

                    {field.type === 'Checkbox' && (
                      <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="w-5 h-5 accent-blue-600"
                          onChange={(e) => setFormValues({...formValues, [field.id]: e.target.checked})}
                        />
                        <span className="text-sm text-gray-600">Agree to terms</span>
                      </div>
                    )}

                    {field.type === 'Signature' && (
                      <div className="p-6 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 italic text-gray-400 text-center">
                         [ Signature Field: Type your name to sign ]
                         <input 
                            type="text" 
                            placeholder="Sign here..."
                            className="mt-4 w-full p-2 bg-white border rounded font-cursive"
                            onChange={(e) => setFormValues({...formValues, [field.id]: e.target.value})}
                         />
                      </div>
                    )}
                  </div>
                ))}

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transform transition active:scale-95 shadow-lg shadow-blue-200"
                >
                  Generate & Save Contract
                </button>
              </motion.form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <p>Select a blueprint to begin filling the contract</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ContractCreator;