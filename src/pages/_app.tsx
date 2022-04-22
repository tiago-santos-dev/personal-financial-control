import GlobalStyle from '@styles/global';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <GlobalStyle />
  </>
);

export default MyApp;
