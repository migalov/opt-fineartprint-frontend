


import React, { useEffect } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { Schema, schema } from '../types/schema';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { RHFAutocomplete } from './RHFAutocomplete';
import { useGenders, useLanguages, useStates } from '../services/queries';
import RHFToggleButtonGroup from './RHFToggleButtonGroup';
import RHFRadioGroup from './RHFRadioGroup';
import RHFDateTimePicker  from './RHFDateTimePicker';


export function Users() {
  
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  const gendersQuery = useGenders();

    const {
      register,
      formState: { errors },
      watch
    } = useFormContext<Schema>();

    return <>
    <Stack sx={{ gap: 2 }}>
      <TextField {...register('name')} label="Name" error={!!errors.name} helperText={errors.name?.message}  />
      <TextField {...register('email')} label="Email" error={!!errors.email} helperText={errors.email?.message} />
      <RHFAutocomplete<Schema> name="states" label="States" options={statesQuery.data} />
      <RHFToggleButtonGroup<Schema> name="languagesSpoken" options={languagesQuery.data} />
      <RHFRadioGroup name="genders" label="Gender" options={gendersQuery.data} />
      <RHFDateTimePicker<Schema>
          name="registrationDateAndTime"
          label="Registration Date & Time"
      />
      <RHFToggleButtonGroup
        name="formatPrint"
        options={languagesQuery.data}
        exclusive={true}
      />
      
    </Stack>
      
    </>

}