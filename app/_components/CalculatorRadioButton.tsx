import React from 'react'

const CalculatorRadioButton = ({ name, input }: any) => {
  return (
    <input
        className="
            appearance-none
            cursor-pointer
            before:content-[attr(value)]
            checked:bg-primary
            rounded-[15px]
            border-2
            border-gray
            bg-gray
            hover:bg-white
            checked:bg-white
            hover:border-primary
            checked:border-primary
            p-4
            hover:font-medium
            checked:font-medium
        "
        type="radio"
        name={name}
        value={input?.title}
    />
  )
}

export default CalculatorRadioButton
