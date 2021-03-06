import styled from "styled-components";

export const Container = styled.button`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #FFF;
  background-color:${props => props.theme.colors.primary.light};
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  transition: filter 0.2s;

  @media (max-width:420px) {
  margin-top: 2rem;
  }

  &:hover{
    filter: brightness(0.9)
  }
`;