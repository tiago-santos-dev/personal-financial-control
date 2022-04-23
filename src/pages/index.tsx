import Header from '@components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Controle Financeiro | Início</title>
    </Head>
    <Header />
    <main>
      <h1>Welcome</h1>
    </main>
  </>
);
export default Home;
