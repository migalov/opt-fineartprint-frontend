import React from 'react'
import Input from '../_components/CustomFields/CustomInput'

const SignUp = () => {
  return (
    <div className="container mx-auto">
      <h1 className='font-bold text-h1 mb-6'>Регистрация</h1>
      <form action="" className='p-8 rounded-15 shadow-default flex flex-col gap-4 p-4'>
        <Input
          label={"Ваше имя"}
          name={"firstName"}
          type={"text"}
        />
        <Input
          label={"Ваша фамилия"}
          name={"lastName"}
          type={"text"}
        />
        <Input
          label={"Телефон"}
          name={"phone"}
          type={"number"}
        />
        <Input
          label={"Email"}
          name={"email"}
          type={"email"}
        />
        <Input
          label={"Название компании"}
          name={"company"}
          type={"text"}
        />
        <Input
          label={"Пароль"}
          name={"password"}
          type={"password"}
        />
        <Input
          label={"Подтверждение пароля"}
          name={"confirmPassword"}
          type={"password"}
        />
    </form>
    </div>
    
    
  )
}

export default SignUp
