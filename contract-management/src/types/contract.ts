import type {  ContractStatus } from "./ContractStatus";

export type FieldType = "text" | "date" | "signature" | "checkbox";

export interface BlueprintField {
  id: string;
  type: FieldType;
  label: string;
  x: number;
  y: number;
}

export interface Contract {
  id: string;
  name: string;
  blueprintName: string;
  fields: BlueprintField[];
  values: Record<string, any>;
  status: ContractStatus;
  createdAt: string;
}
