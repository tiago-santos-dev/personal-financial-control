import theme from "@styles/theme";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { ErrorMessage, Input, SubmitButton, Title, TransactionTypeContainer } from "./styles";

type Inputs = {
  title: string,
  amount: number,
  categorie: string,
};

export const NewTransactionForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title>Cadastrar Transação</Title>
      {/* register your input into the hook by invoking the "register" function */}
      <Input {...register("title", { required: true })} placeholder='Nome' />
      {errors.amount && <ErrorMessage>É necessário informar um nome</ErrorMessage>}
      <Input {...register("amount", { required: true })} placeholder='Preço' />
      {/* errors will return when field validation fails  */}
      {errors.amount && <ErrorMessage>É necessário informar o valor</ErrorMessage>}

      <TransactionTypeContainer >
        <button type="button">
          <FiArrowDownCircle size={28} color={theme.colors.success.main} />
          <span>Entrada</span>
        </button>

        <button type="button">
          <FiArrowUpCircle size={28} color={theme.colors.danger.main} />
          <span>Saída</span>
        </button>
      </TransactionTypeContainer>
      <Input {...register("categorie", { required: true })} placeholder='Categoria' />
      {/* errors will return when field validation fails  */}
      {errors.categorie && <ErrorMessage>É necessário informar uma categoria</ErrorMessage>}

      <SubmitButton type="submit" > Cadastrar</SubmitButton>
    </form>
  );
}