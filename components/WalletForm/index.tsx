'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Loader } from '@/components';
import { API_ENDPOINTS, FIELD_NAMES } from '@/utils/enums';
import { wallet_schema } from '@/utils/validations';
import { Form, Formik } from 'formik';
import { CustomInput } from '@/components/CustomInput';
import { initValues_walletForm } from '@/utils/variables';
import { fetchFormSubmitData } from '@/utils/helpers';
import s from './index.module.scss';

export const WalletForm = () => {
	const [loading, setLoading] = useState(false);

	const router = useRouter();
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const userId = params.get('userId');
	const dealId = params.get('dealId');

	const handleSubmit = async (values: any) => {
		setLoading(true);
		const reqValue = {
			[FIELD_NAMES.WALLET_ADDRESS]: values[FIELD_NAMES.WALLET_ADDRESS],
			[FIELD_NAMES.WALLET_AMOUNT]: values[FIELD_NAMES.WALLET_AMOUNT],
			[FIELD_NAMES.USER_ID]: userId,
			[FIELD_NAMES.DEAL_ID]: dealId,
		};

		try {
			const res = await fetchFormSubmitData(API_ENDPOINTS.DIRECT_DEPOSIT, reqValue);
			if (res?.status === 200) router.push('/farewell');
		} catch (e: any) {
			setLoading(false);
		}
	};

	return (
		<>
			{!loading && (
				<Formik initialValues={initValues_walletForm} onSubmit={handleSubmit} validationSchema={wallet_schema}>
					{({ isValid }) => (
						<Form className={s.form}>
							<div className={s.fields_wrapper}>
								<CustomInput
									label={'Кошелёк'}
									placeholder={'Укажите ваш адрес USDT'}
									field_Id={FIELD_NAMES.WALLET_ADDRESS}
									field_Name={FIELD_NAMES.WALLET_ADDRESS}
								/>

								<CustomInput
									label={'Сумма'}
									placeholder={'Укажите сумму перевода'}
									field_Id={FIELD_NAMES.WALLET_AMOUNT}
									field_Name={FIELD_NAMES.WALLET_AMOUNT}
								/>
							</div>

							<button type={'submit'} className={s.submit} disabled={!isValid}>
								Подтвердить
							</button>
						</Form>
					)}
				</Formik>
			)}

			{loading && <Loader />}
		</>
	);
};
