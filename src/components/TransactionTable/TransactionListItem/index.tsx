import theme from "@styles/theme";
import { BiTrashAlt } from "react-icons/bi";
import { TransactionProps } from "src/contexts/TransactionContext";
import { useTransactions } from "src/hooks";
import { CurrencyBRLFormat, DateTimeFormat } from "src/utils";
import { Button } from "./styles";

interface TransactionListItemProps {
  transaction: TransactionProps;
}
export const TransactionListItem = ({
  transaction
}: TransactionListItemProps) => {
  const { deleteTransaction } = useTransactions();
  return (
    <tr>
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
      <td>
        <Button onClick={() => {
          deleteTransaction(transaction.id)
        }} >
          <BiTrashAlt size={15} color={theme.colors.danger.light} />
        </Button>
      </td>
    </tr>
  )
}
