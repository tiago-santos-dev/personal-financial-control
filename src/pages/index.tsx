import { Dashboard } from '@components/Dashboard';
import Header from '@components/Header';
import { NewTransactionModal } from '@components/NewTransaction/Modal';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(true)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Head>
        <title>Controle Financeiro | Início</title>
      </Head>
      <Header />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
export default Home;
