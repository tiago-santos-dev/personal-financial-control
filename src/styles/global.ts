import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.main};
  -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1 h2 h3 h4 h5 strong {
    font-weight: 600
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: ${props => props.theme.colors.background};
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .react-modal-close {
    position: absolute;
    border: 0;
    background: transparent;
    top: 1.5rem;
    right: 1.5rem;
    transition: filter(0.2s);

    &:hover {
      filter: brightness(0.8);
    }
  }
`;