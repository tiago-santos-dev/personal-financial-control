import React from "react";
import { Container } from "./styles";

interface NewTransactionButtonProps {
  onClick: () => void;
}
export const NewTransactionButton = ({
  onClick
}: NewTransactionButtonProps) => (
  <Container type="button" onClick={onClick}>
    Nova Transação
  </Container>

)