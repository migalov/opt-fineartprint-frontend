import { useState } from 'react'
import Select from 'react-select'

const CustomSingleSelect = ({ options, placehoder }) => {

const [selectedOption, setSelectedOption] = useState("");

  return (
    <Select
        placeholder={placehoder}
        defaultValue={`selectedOption`}
        onChange={setSelectedOption}
        options={options}
    />
  )
}

export default CustomSingleSelect
