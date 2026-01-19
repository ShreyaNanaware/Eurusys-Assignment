import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import CreateBlueprint from "./pages/CreateBlueprint";
import CreateContract from "./pages/CreateContract";
import Dashboard from "./pages/Dashboard";
import { BlueprintProvider } from "./context/BlueprintContext";
import { ContractProvider } from "./context/ContractContext";

function App() {
  return (
    <BlueprintProvider>
      <ContractProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blueprint" element={<CreateBlueprint />} />
          <Route path="/contract" element={<CreateContract />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ContractProvider>
    </BlueprintProvider>
  );
}

export default App;
