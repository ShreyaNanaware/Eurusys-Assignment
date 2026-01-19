import { useState } from "react";
import { useBlueprints } from "../context/BlueprintContext";
import { v4 as uuidv4 } from "uuid";
import type { Blueprint, FieldType } from "../types/blueprint";

export default function CreateBlueprint() {
  const { blueprints, setBlueprints } = useBlueprints();

  const [name, setName] = useState("");
  const [fieldLabel, setFieldLabel] = useState("");
  const [fieldType, setFieldType] = useState<FieldType>("text");

  // Add new blueprint
  const addBlueprint = () => {
    if (!name) return alert("Enter blueprint name");
    setBlueprints([...blueprints, { id: uuidv4(), name, fields: [] }]);
    setName("");
  };

  // Add field to blueprint
  const addFieldToBlueprint = (bpId: string) => {
    if (!fieldLabel) return alert("Enter field label");
    setBlueprints(
      blueprints.map((bp: { id: string; fields: any; }) =>
        bp.id === bpId
          ? {
              ...bp,
              fields: [
                ...bp.fields,
                { id: uuidv4(), type: fieldType, label: fieldLabel, x: 0, y: 0 }
              ]
            }
          : bp
      )
    );
    setFieldLabel("");
    setFieldType("text");
  };

  return (
    <div className="container mt-5">
      <h2>Create Blueprint</h2>

      {/* Add new blueprint */}
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Blueprint Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-success" onClick={addBlueprint}>
          Add Blueprint
        </button>
      </div>

      {/* Existing blueprints */}
      {blueprints.map((b: Blueprint) => (
        <div key={b.id} className="card p-3 mb-3 shadow-sm">
          <h5>{b.name}</h5>
          <div className="d-flex mb-2">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Field Label"
              value={fieldLabel}
              onChange={(e) => setFieldLabel(e.target.value)}
            />
            <select
              className="form-select me-2"
              value={fieldType}
              onChange={(e) => setFieldType(e.target.value as FieldType)}
            >
              <option value="text">Text</option>
              <option value="date">Date</option>
              <option value="checkbox">Checkbox</option>
              <option value="signature">Signature</option>
            </select>
            <button
              className="btn btn-primary"
              onClick={() => addFieldToBlueprint(b.id)}
            >
              Add Field
            </button>
          </div>

          <ul>
            {b.fields.map((f) => (
              <li key={f.id}>
                {f.label} ({f.type})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
