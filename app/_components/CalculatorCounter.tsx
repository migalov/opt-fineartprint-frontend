import React, { useState } from 'react'
import Minus from './VectorIcons/Minus'
import Plus from './VectorIcons/Plus'
import ButtonCounter from './Buttons/ButtonCounter'


const CalculatorCounter = ({ title, name, step, currentValue, decrementClick, incrementClick, min }: any) => {

    const [value, setValue] = useState(currentValue);

    const handleIncrement = () => {
        setValue((prevValue: any) => prevValue + step);
        incrementClick();
    };

    const handleDecrement = () => {
        if (value <= min) return null; 
        setValue((prevValue: any) => prevValue - step);
        decrementClick();
    };

    const handleChange = (event: any) => {
        const newValue: any = parseInt(event.target.value, 10);
        if (!isNaN(newValue)) {
            setValue(newValue);
        }
    };


  return (
    <div className="flex flex-col gap-2" data-step={step}>
        <label htmlFor={name} className="text-h3 font-bold">{title}</label>
        <div className="flex flex-nowrap gap-2 items-center rounded-5 border border-gray bg-gray border-[2px] fit-content">
            <input
                type="number"
                id={name}
                className="appearance-none w-[50%] p-2 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:appearance-none"
                value={value}
                step={step}
                onChange={handleChange}
                min={min}
                inputMode="numeric"
                onKeyUp={handleIncrement}
                onKeyDown={handleDecrement}
            />
            <div className="flex gap-3 justify-center w-[50%]">
                <ButtonCounter onClick={handleDecrement}>
                    <Minus />
                </ButtonCounter>
                <ButtonCounter onClick={handleIncrement}>
                    <Plus />
                </ButtonCounter>
            </div>
        </div>
    </div>
  )
}

export default CalculatorCounter
