import theme from "@styles/theme";
import { BiTrashAlt } from "react-icons/bi";
import { useTransactions } from "src/hooks";
import { CurrencyBRLFormat, DateTimeFormat } from "src/utils";
import { Container } from "./styles";

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
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {CurrencyBRLFormat(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {
                    DateTimeFormat(transaction.createdAt)
                      .replace(' ', " às ")
                      .replace(':', 'h')
                  }
                </td>
                <td> <BiTrashAlt color={theme.colors.danger.light} /> </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}
