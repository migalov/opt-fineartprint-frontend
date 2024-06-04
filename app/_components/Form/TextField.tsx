import { TextField } from "@mui/material"

type InputTextFieldProps = {
    id: string,
    label: string,
    required?: boolean,
    error?: boolean,
    helperText?: string
}

const InputTextField = ({id, label, required, error, helperText}: InputTextFieldProps) => {
  return (
    <TextField
        required={required}
        id={id}
        label={label}
        error={error}
        helperText={helperText}
        color="primary"
        
    />
  )
}

export default InputTextField
