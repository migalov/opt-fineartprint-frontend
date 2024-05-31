import React from 'react'

const CalculatorRadioButton = ({ name, input, value, type = "radio" }: any) => {
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
            bg-origin-padding
        "
        type={type}
        name={name}
        value={input?.title ? input.title : value}
    />
  )
}

export default CalculatorRadioButton
