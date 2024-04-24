

import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
interface MyForm {
    name: string;
    age: number;
}

const FormUIKit = () => {

  const {
    register,
    handleSubmit,
    clearErrors,
    watch,
    reset,
    setValue,
    control,
    formState: { errors } } = useForm<MyForm>({
    defaultValues: {
      age: 18
    }
  });

  const submit: SubmitHandler<MyForm> = data => {
    console.log(data);
  };

  const error: SubmitErrorHandler<MyForm> = data => {
    console.log(data);
  };

  const isName = (_: any) => {
    console.log("Вызов");
    return true
  }
  return (
    <form onSubmit={handleSubmit(submit, error)}>
        <input type="text" {...register("name", { required: true })} aria-invalid={errors.name ? true : false} />
        <Controller
          name="age"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        <button>Отправить</button>
        <button type="button" onClick={() => clearErrors()}>Очистить ошибки</button>
        <button type="button" onClick={() => reset({
          age: 0,
          name: undefined
        })}>Очистить форму</button>
        <button type="button" onClick={() => setValue("name", "Michel")}>Установить имя</button>
        {watch('age')}
    </form>
  )
}

export default FormUIKit
