import { ContractStatus } from "../types/ContractStatus";

export const nextStatusMap: Record<ContractStatus, ContractStatus[]> = {
  CREATED: [ContractStatus.APPROVED, ContractStatus.REVOKED],
  APPROVED: [ContractStatus.SENT],
  SENT: [ContractStatus.SIGNED, ContractStatus.REVOKED],
  SIGNED: [ContractStatus.LOCKED],
  LOCKED: [],
  REVOKED: []
};

export function canTransition(
  current: ContractStatus,
  next: ContractStatus
): boolean {
  return nextStatusMap[current]?.includes(next);
}
