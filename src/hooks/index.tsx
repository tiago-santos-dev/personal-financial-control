import { useContext } from "react";
import { TransactionContext } from "src/contexts/TransactionContext";

export const useTransactions = () => {
  const context = useContext(TransactionContext);

  return context;
}