import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string,
  amount: number,
  categorie: string,
};

export const NewTransactionForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => { };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("title")} placeholder='Nome' />

      <input {...register("amount", { required: true })} placeholder='Preço' />
      {/* errors will return when field validation fails  */}
      {errors.amount && <span>This field is required</span>}

      <input {...register("categorie", { required: true })} placeholder='Categoria' />
      {/* errors will return when field validation fails  */}
      {errors.categorie && <span>This field is required</span>}

      <button type="submit" > Cadastrar</button>
    </form>
  );
}