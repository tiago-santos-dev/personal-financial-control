import { Dashboard } from '@components/Dashboard';
import Header from '@components/Header';
import { NewTransactionModal } from '@components/NewTransaction/Modal';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { TransactionProvider } from 'src/contexts/TransactionContext';

const Home: NextPage = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionProvider >
      <Head>
        <title>Controle Financeiro | Início</title>
      </Head>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionProvider>
  );
}
export default Home;
