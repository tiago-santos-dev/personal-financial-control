import { Summary } from "@components/Summary";
import { TransactionTable } from "@components/TransactionTable";
import { Container } from "./styles";

export const Dashboard: React.FC = () => (
  <Container>
    <Summary />
    <TransactionTable />
  </Container>
)
