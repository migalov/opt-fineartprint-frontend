import React from 'react'
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { Option } from '../types/option'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

type Props<T extends FieldValues> = {
    name: Path<T>;
    options?: Option[];
    label: string;
};
const CustomRadio = styled(Radio)(({ theme }) => ({
    width: 100,
    height: 40,
    borderRadius: 4,
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&.Mui-checked': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }));

export function RHFRadioGroup<T extends FieldValues>({ name, options, label }: Props<T>) {

    const { control } = useFormContext<T>();




    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState: {error}}) => (
                    <FormControl {...field} error={!!error}>
                        <FormLabel>{label}</FormLabel>
                        <RadioGroup>
                            {
                                options?.map((option) => 
                                    <FormControlLabel
                                        value={option.id}
                                        control={<CustomRadio checked={field.value === option.id} name="radio-buttons" value={option.id} />}
                                        label={option.label}
                                        key={option.id}
                                    />
                                )
                            }
                        </RadioGroup>
                    </FormControl>
                )}
            >

            </Controller>
        </>
    )
}

export default RHFRadioGroup
