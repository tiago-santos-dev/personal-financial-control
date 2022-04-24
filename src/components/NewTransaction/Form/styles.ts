import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 2rem;
`;

export const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.danger.light};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;

  border: 1px solid ${props => props.theme.colors.input.border};
  background: ${props => props.theme.colors.input.background};
  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
  color: ${props => props.theme.colors.text.light};
  }

  & + input {
    margin-top: 1rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0 1.5rem;
  height: 4rem;
  background: ${props => props.theme.colors.primary.light};
  color: ${props => props.theme.colors.shape};
  border: 0;
  border-radius: 0.25rem;
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: uppercase;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'red' | 'green';
}

const colors = {
  green: '#06D6A2',
  red: '#DB3766'
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) => props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')} ;
  }

  svg {
    margin-right: 1rem;
  }

  span {
    display: inline-block;
    font-size: 1rem;
    color: ${props => props.theme.colors.text.main}
  }
`;