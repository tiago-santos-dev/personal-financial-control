/* eslint-disable react/jsx-no-constructed-context-values */
import { api } from "@services/api";
import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number,
  title: string,
  type: 'deposit' | 'withdraw',
  category: string,
  amount: number,
  createdAt: string
}

interface TransactionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export const TransactionProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });
    const { transaction } = response.data;
    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }} >
      {children}
    </TransactionContext.Provider>
  )

}