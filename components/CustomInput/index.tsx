'use client';

import { ChangeEvent, FC } from 'react';
import { Field, FormikContextType, useFormikContext } from 'formik';
import s from './index.module.scss';

interface ICustomInput {
	label: string;
	placeholder: string;
	field_Id: string;
	field_Name: string;
	type?: string;
}

export const CustomInput: FC<ICustomInput> = ({ label, placeholder, field_Id, field_Name, type = 'text', ...rest }) => {
	const { values, errors, setFieldValue }: FormikContextType<any> = useFormikContext();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value, values);
		setFieldValue(field_Name, e.target.value);
	};

	return (
		<div className={s.input_wrapper}>
			<div className={s.field}>
				<label className={s.label} htmlFor={field_Id}>
					{label}
				</label>
				<Field
					className={s.input}
					name={field_Name}
					type={type}
					id={field_Id}
					placeholder={placeholder}
					onChange={handleChange}
					autoComplete="off"
				/>
			</div>
			{errors && <span className={s.error}>{errors[field_Name] as string}</span>}
		</div>
	);
};
