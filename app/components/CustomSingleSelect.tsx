import { useState } from 'react'
import Select from 'react-select'

const CustomSingleSelect = ({ options, placehoder }: any) => {

const [selectedOption, setSelectedOption]:any = useState("");

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
