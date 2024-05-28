import React from 'react'
import CalculatorRadioButton from './CalculatorRadioButton'

const CalculatorParameter = ({ parameter }: any) => {
  return (
    <div className='flex gap-4'>
        <h3 className='text-[1.125em] font-bold mt-4 mt-4'>{parameter?.title}</h3>
        <div className='flex flex-wrap items-center gap-4'>
            {
                parameter?.inputs?.map( (input: any) =>  <CalculatorRadioButton key={input.id} name={parameter.name} input={input} />)
            }
        </div>
    </div>
  )
}

export default CalculatorParameter
