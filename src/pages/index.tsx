import { Dashboard } from '@components/Dashboard';
import Header from '@components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Controle Financeiro | Início</title>
    </Head>
    <Header />
    <Dashboard />
  </>
);
export default Home;
