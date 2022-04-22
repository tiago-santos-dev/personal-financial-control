import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <GlobalStyle />
  </>
);

export default MyApp;
