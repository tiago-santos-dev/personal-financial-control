import theme from "@styles/theme";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { useTransactions } from "src/hooks";
import { CurrencyBRLFormat } from "src/utils";
import { Container } from "./styles";

export const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {

    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <HiArrowSmDown size="35" color={theme.colors.success.main} />
        </header>
        <strong>
          {CurrencyBRLFormat(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <HiArrowSmUp size="35" color={theme.colors.danger.main} />
        </header>
        <strong>
          {CurrencyBRLFormat(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Saldo Total</p>
        </header>
        <strong>
          {CurrencyBRLFormat(summary.total)}
        </strong>
      </div>
    </Container>
  )
}