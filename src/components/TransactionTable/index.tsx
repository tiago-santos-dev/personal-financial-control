import { api } from "@services/api";
import theme from "@styles/theme";
import { useEffect, useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { Container } from "./styles";

interface Transaction {
  id: number,
  title: string,
  type: 'deposit' | 'withdraw',
  category: string,
  amount: number,
  createdAt: string
}

export const TransactionTable: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
                <td> <BiTrashAlt color={theme.colors.danger.light} /> </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}
