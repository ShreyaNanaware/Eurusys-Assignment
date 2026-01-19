import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Contract } from "../types/contract";

// Define the context type
interface ContractContextType {
  contracts: Contract[];
  setContracts: React.Dispatch<React.SetStateAction<Contract[]>>;
}

// Create the context
const ContractContext = createContext<ContractContextType | undefined>(undefined);

// Provider component
export const ContractProvider = ({ children }: { children: ReactNode }) => {
  const [contracts, setContracts] = useState<Contract[]>([]);

  // Load from localStorage
  useEffect(() => {
    const data = localStorage.getItem("contracts");
    if (data) setContracts(JSON.parse(data));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("contracts", JSON.stringify(contracts));
  }, [contracts]);

  return (
    <ContractContext.Provider value={{ contracts, setContracts }}>
      {children}
    </ContractContext.Provider>
  );
};

// Custom hook to use context
export const useContracts = (): ContractContextType => {
  const context = useContext(ContractContext);
  if (!context) throw new Error("useContracts must be used within ContractProvider");
  return context;
};
