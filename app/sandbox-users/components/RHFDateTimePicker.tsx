import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import React from 'react';

type Props<T extends FieldValues> = {
	name: Path<T>;
	label: string;
};

export default function RHFDateTimePicker<T extends FieldValues>({
	name,
	label,
}: Props<T>) {
	const { control } = useFormContext<T>();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DateTimePicker label={label} {...field} />
				</LocalizationProvider>
			)}
		/>
	);
}