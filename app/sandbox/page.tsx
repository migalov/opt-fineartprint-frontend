'use client'

import React from 'react'
import globalApi, { registerUserService, postCompany, putCompany, postOrder } from '../globalApi';


const page = () => {

      function onRegisterUserService  (event) {
        event.preventDefault();
        registerUserService();
      }
      function onPostCompany  (event) {
        event.preventDefault();
        postCompany();
      }
      function onPostOrder  (event) {
        event.preventDefault();
        postOrder();
      }
      function onPutCompany  (event) {
        event.preventDefault();
        putCompany("3");
      }

  return (
    <>
        <form onSubmit={onRegisterUserService}>
            <button>Регаем рандомного юзера</button>
        </form>
        <form onSubmit={onPostCompany}>
            <button>регистрируем на пользователя компанию</button>
        </form>
        <form onSubmit={onPostOrder}>
            <button>Делаем заказ и регистрируем на него компанию</button>
        </form>
        <form onSubmit={onPutCompany}>
            <button>Меняем данные компании</button>
        </form>
    </>

  )
}

export default page
