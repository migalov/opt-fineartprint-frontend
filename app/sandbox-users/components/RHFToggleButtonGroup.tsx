import React from 'react'
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { Option } from '../types/option'
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

type Props<T extends FieldValues> = {
    name: Path<T>;
    options?: Option[];
    exclusive?: boolean
};

export function RHFToggleButtonGroup<T extends FieldValues>({ name, options, exclusive = false }: Props<T>) {

    const { control } = useFormContext<T>();




    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value, ...restField } }) => (
                    <ToggleButtonGroup
                        exclusive={exclusive}
                        onChange={(_, newValue) => {
                            if (newValue.length) {
                                onChange(newValue);
                            }
                        }}
                        value={value.length ? value : [options?.[0].id]}
                        {...restField}
                    >
                        {options?.map((option) => (
                            <ToggleButton value={option.id} key={option.id}>
                                {option.label}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                )}
            >

            </Controller>
        </>
    )
}

export default RHFToggleButtonGroup