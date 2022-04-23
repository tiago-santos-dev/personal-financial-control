import GlobalStyle from '@styles/global';
import theme from '@styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
