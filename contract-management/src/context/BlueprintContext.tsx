import { createContext, useContext, useEffect, useState } from "react";

interface BlueprintField {
  id: string;
  type: string;
  label: string;
  x: number;
  y: number;
}

interface Blueprint {
  id: string;
  name: string;
  fields: BlueprintField[];
}

const BlueprintContext = createContext<any>(null);

export const BlueprintProvider = ({ children }: any) => {
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("blueprints");
    if (data) setBlueprints(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("blueprints", JSON.stringify(blueprints));
  }, [blueprints]);

  return (
    <BlueprintContext.Provider value={{ blueprints, setBlueprints }}>
      {children}
    </BlueprintContext.Provider>
  );
};

export const useBlueprints = () => useContext(BlueprintContext);
