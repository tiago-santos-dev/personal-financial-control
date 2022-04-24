import { Summary } from "@components/Summary";
import { TransactioTable } from "@components/TransactionTable";
import { Container } from "./styles";

export const Dashboard: React.FC = () => (
  <Container>
    <Summary />
    <TransactioTable />
  </Container>
)
