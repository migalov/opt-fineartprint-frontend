import React from 'react'
import TitleH2 from './TitleH2'

const ListParameters = ({ children }: any) => {
  return (
    <>
        <TitleH2>Параметры заказа</TitleH2>
        { children }
    </>
  )
}

export default ListParameters
