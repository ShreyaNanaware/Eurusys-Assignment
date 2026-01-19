
export const ContractStatus = {
  CREATED: "CREATED",
  APPROVED: "APPROVED",
  SENT: "SENT",
  SIGNED: "SIGNED",
  LOCKED: "LOCKED",
  REVOKED: "REVOKED"
} as const;

export type ContractStatus = typeof ContractStatus[keyof typeof ContractStatus];



