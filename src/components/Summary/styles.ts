import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
  margin-top: -5rem;

  div {
    background: ${props => props.theme.colors.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    color: ${props => props.theme.colors.text.dark};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        transform: rotate(45deg)
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: ${props => props.theme.colors.success.main};
      color: ${props => props.theme.colors.shape};

      header > svg {
        transform: rotate(0)
      }
    }
  }
`;


