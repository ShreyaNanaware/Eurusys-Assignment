import { useState } from "react";
import { useBlueprints } from "../context/BlueprintContext";
import { useContracts } from "../context/ContractContext";
import { ContractStatus } from "../types/ContractStatus";
import { v4 as uuidv4 } from "uuid";
import type { Blueprint } from "../types/blueprint";

export default function CreateContract() {
  const { blueprints } = useBlueprints();
  const { contracts, setContracts } = useContracts();

  const [contractName, setContractName] = useState("");
  const [selectedBlueprintId, setSelectedBlueprintId] = useState("");

  const createContract = () => {
    const bp: Blueprint | undefined = blueprints.find(
      (b: { id: string; }) => b.id === selectedBlueprintId
    );
    if (!bp || !contractName) return alert("Select blueprint & enter name");

    setContracts([
      ...contracts,
      {
        id: uuidv4(),
        name: contractName,
        blueprintName: bp.name,
        fields: bp.fields,
        values: {},
        status: ContractStatus.CREATED,
        createdAt: new Date().toLocaleDateString(),
      },
    ]);

    setContractName("");
    setSelectedBlueprintId("");
  };

  return (
    <div className="container mt-5">
      <h2>Create Contract</h2>

      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Contract Name"
          value={contractName}
          onChange={(e) => setContractName(e.target.value)}
        />
        <select
          className="form-select me-2"
          value={selectedBlueprintId}
          onChange={(e) => setSelectedBlueprintId(e.target.value)}
        >
          <option value="">Select Blueprint</option>
          {blueprints.map((b: Blueprint) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
        <button className="btn btn-success" onClick={createContract}>
          Create Contract
        </button>
      </div>

      <h5>Existing Contracts</h5>
      <ul>
        {contracts.map((c) => (
          <li key={c.id}>
            {c.name} ({c.blueprintName})
          </li>
        ))}
      </ul>
    </div>
  );
}
