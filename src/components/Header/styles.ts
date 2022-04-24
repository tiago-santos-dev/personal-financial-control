import styled from "styled-components";

export const Container = styled.header`
  background: ${props => props.theme.colors.primary.main};
`;

export const Content = styled.header`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.5rem 1rem 6rem;

`;