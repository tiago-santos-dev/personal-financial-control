import { useTransactions } from "src/hooks";
import { Container } from "./styles";
import { TransactionListItem } from "./TransactionListItem";

export const TransactionTable: React.FC = () => {
  const { transactions } = useTransactions();

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
              <TransactionListItem key={transaction.id} transaction={transaction} />
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}
