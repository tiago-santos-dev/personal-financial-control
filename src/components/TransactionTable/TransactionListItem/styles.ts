import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;