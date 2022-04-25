/* eslint-disable react/jsx-no-constructed-context-values */
import { api } from "@services/api";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface TransactionProps {
  id: string,
  title: string,
  type: 'deposit' | 'withdraw',
  category: string,
  amount: number,
  createdAt: string
}

interface TransactionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

interface TransactionContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  deleteTransaction: (id: string) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export const TransactionProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

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

  const deleteTransaction = async (id: string) => {
    try {
      await api.delete(`/transactions/${id}`);

      const filteredTransactions = transactions
        .filter(transaction => transaction.id !== id);

      setTransactions(filteredTransactions);

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction, deleteTransaction }} >
      {children}
    </TransactionContext.Provider>
  )

}