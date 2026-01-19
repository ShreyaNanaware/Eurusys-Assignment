import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const CONTRACT_STATUS = {
  CREATED: 'Created',
  APPROVED: 'Approved',
  SENT: 'Sent',
  SIGNED: 'Signed',
  LOCKED: 'Locked',
  REVOKED: 'Revoked'
};

// Strict State Transition Logic
const VALID_TRANSITIONS = {
  [CONTRACT_STATUS.CREATED]: [CONTRACT_STATUS.APPROVED, CONTRACT_STATUS.REVOKED],
  [CONTRACT_STATUS.APPROVED]: [CONTRACT_STATUS.SENT],
  [CONTRACT_STATUS.SENT]: [CONTRACT_STATUS.SIGNED, CONTRACT_STATUS.REVOKED],
  [CONTRACT_STATUS.SIGNED]: [CONTRACT_STATUS.LOCKED],
  [CONTRACT_STATUS.LOCKED]: [],
  [CONTRACT_STATUS.REVOKED]: []
};

export const AppProvider = ({ children }) => {
  const [blueprints, setBlueprints] = useState(JSON.parse(localStorage.getItem('blueprints')) || []);
  const [contracts, setContracts] = useState(JSON.parse(localStorage.getItem('contracts')) || []);

  useEffect(() => {
    localStorage.setItem('blueprints', JSON.stringify(blueprints));
    localStorage.setItem('contracts', JSON.stringify(contracts));
  }, [blueprints, contracts]);

  const addBlueprint = (bp) => setBlueprints([...blueprints, { ...bp, id: Date.now() }]);
  
  const updateContractStatus = (contractId, newStatus) => {
    setContracts(prev => prev.map(c => {
      if (c.id === contractId) {
        // Validation check
        if (VALID_TRANSITIONS[c.status].includes(newStatus)) {
          return { ...c, status: newStatus };
        }
      }
      return c;
    }));
  };

  return (
    <AppContext.Provider value={{ blueprints, contracts, addBlueprint, setContracts, updateContractStatus }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);