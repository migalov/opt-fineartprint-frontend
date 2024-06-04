import React from 'react'

const NumberOrder = ({ idOrder }: any) => {
  return (
    <div className="flex items-center gap-4">
        <h3 className="text-h3 font-bold">Внутренний номер заказа</h3>
        <span className="inline py-2 min-w-[10em] bg-gray rounded-[8px] text-center text-message">{idOrder}</span>
    </div>
  )
}

export default NumberOrder
