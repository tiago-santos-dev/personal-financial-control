import theme from "@styles/theme";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { Container } from "./styles";

export const Summary: React.FC = () => (
  <Container>
    <div>
      <header>
        <p>Entradas</p>
        <HiArrowSmDown size="35" color={theme.colors.success.main} />
      </header>
      <strong>R$ 1000,00</strong>
    </div>
    <div>
      <header>
        <p>Saídas</p>
        <HiArrowSmUp size="35" color={theme.colors.danger.main} />
      </header>
      <strong>R$ 500,00</strong>
    </div>
    <div className="highlight-background">
      <header>
        <p>Saldo Total</p>
      </header>
      <strong>R$ 500,00</strong>
    </div>
  </Container>
)