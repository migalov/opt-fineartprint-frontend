import React from "react";
import CustomRadio from "./CustomRadio";

const RadioButtonGroup() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: any) => {
      setSelectedValue(event.target.value);
    };

    return (
      <div>
        <CustomRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
        />
        <CustomRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
        />
      </div>
    );
  }

  export default RadioButtonGroup