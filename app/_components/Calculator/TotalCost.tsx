import React from 'react'

const TotalCost = ( {cost}: any ) => {
  return (
    <div className="flex flex-wrap justify-between">
        <h3 className="font-bold text-h2 w-[50%]">Итог:</h3>
        <span className="font-bold text-h2 w-[50%] text-right">{cost} ₽</span>
        <span className="w-full opacity-60 w-full">в том числе НДС</span>
    </div>
  )
}

export default TotalCost
