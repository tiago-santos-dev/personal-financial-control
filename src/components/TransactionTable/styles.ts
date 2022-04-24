import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing:0 0.5rem ;

    th {
      color: ${props => props.theme.colors.text.light};
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      font-weight: 400;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      border-radius: 0.25rem ;
      background: ${props => props.theme.colors.shape};
      color: ${props => props.theme.colors.text.main};

      &.income{
      color: ${props => props.theme.colors.success.main};
      font-weight: 600;
      }

      &.outcome {
      color: ${props => props.theme.colors.danger.main};
      font-weight: 600;
      }
    }
  }
`;