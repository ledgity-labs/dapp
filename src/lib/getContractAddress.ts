import { ContractId, contracts } from "../../contracts/deployments";

export const getContractAddress = (contractId: ContractId, networkId: number) => {
  const contract = contracts[contractId];
  if (contract) {
    const address = contract.address[networkId];
    if (address) return address;
  }
  return undefined;
};
