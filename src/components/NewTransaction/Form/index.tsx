import theme from "@styles/theme";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { useTransactions } from "src/hooks";
import { ErrorMessage, Input, RadioBox, SubmitButton, Title, TransactionTypeContainer } from "./styles";

type Inputs = {
  title: string,
  amount: number,
  category: string,
};

interface NewTransactionFormProps {
  handleCloseModal: () => void
}

export const NewTransactionForm = ({
  handleCloseModal
}: NewTransactionFormProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');
  const { createTransaction } = useTransactions();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await createTransaction({
        type,
        ...data
      })
      reset();
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title>Cadastrar Transação</Title>
      <Input {...register("title", { required: true })} placeholder='Nome' />
      {errors.amount && <ErrorMessage>É necessário informar um nome</ErrorMessage>}
      <Input type="number" {...register('amount', { required: true, valueAsNumber: true })} placeholder='Preço' />
      {errors.amount && <ErrorMessage>É necessário informar o valor</ErrorMessage>}

      <TransactionTypeContainer >
        <RadioBox
          type="button"
          activeColor="green"
          isActive={type === 'deposit'}
          onClick={() => setType('deposit')}
        >
          <FiArrowDownCircle size={28} color={theme.colors.success.main} />
          <span>Entrada</span>
        </RadioBox>

        <RadioBox
          type="button"
          activeColor="red"
          isActive={type === 'withdraw'}
          onClick={() => setType('withdraw')}
        >
          <FiArrowUpCircle size={28} color={theme.colors.danger.main} />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>
      <Input {...register("category", { required: true })} placeholder='Categoria' />
      {errors.category && <ErrorMessage>É necessário informar uma categoria</ErrorMessage>}

      <SubmitButton type="submit" > Cadastrar</SubmitButton>
    </form>
  );
}