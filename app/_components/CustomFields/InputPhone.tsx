"use client"

import { MuiTelInput } from 'mui-tel-input'
import { useState } from 'react'

const InputPhone = ({ value = "" }: any) => {
    const [numberPhone, setNumberPhone] = useState(value);

    const handleChange = (newNumberPhone: any) => {
        setNumberPhone(newNumberPhone)
    }
  
    return <MuiTelInput value={numberPhone} onChange={handleChange} />
}

export default InputPhone
