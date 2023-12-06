'use client';

import s from './index.module.scss';
import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback, useState } from 'react';
import { Loader } from '@/components';
import { FIELD_NAMES } from '@/utils/enums';
import axios from 'axios';
import { wallet_schema } from '@/utils/validations';
import { FormSent } from '@/components/FormSent';

export const WalletForm = () => {
	const [isFormSend, setFormSend] = useState(false);
	const [amount, setAmount] = useState('');
	const [error, serError] = useState('');
	const [loading, setLoading] = useState(false);

	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const userId = params.get('userId');
	const dealId = params.get('dealId');

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		try {
			const validEmail = await wallet_schema.validate(e.target.value, { abortEarly: false });
			setAmount(() => validEmail);
			serError(() => '');
		} catch (e: any) {
			serError(e.message);
		}
	};

	const handleSubmit = useCallback(async () => {
		const reqValue = {
			[FIELD_NAMES.WALLET]: amount,
			userId: userId,
			dealId: dealId,
		};
		setLoading(true);
		try {
			const { status } = await axios.post(
				`https://crypto-bot-npm5.onrender.com/easytrading-bot/deposit/direct-deposit`,
				reqValue
			);
			if (status === 200) setFormSend(true);
		} catch (e: any) {
			await Promise.reject(e);
		} finally {
			setLoading(false);
		}
	}, [amount, dealId, userId]);

	return (
		<>
			{!loading && !isFormSend && (
				<div className={s.wallet_form}>
					<h4 className={s.title}>
						Для вашей идентификации и последующей виплати дохода введите адрес кошелька, с которого ви совершили перевод
						и сумму перевода
					</h4>

					<div className={s.form}>
						<label htmlFor={FIELD_NAMES.WALLET}>Кошелек</label>
						<input
							type={'text'}
							className={s.input}
							onChange={handleChange}
							placeholder={'Укажите ваш адрес USDT'}
							id={FIELD_NAMES.WALLET}
						/>
					</div>
					{error && <span className={s.error}>{error}</span>}

					<button onClick={handleSubmit} className={s.submit} type={'button'} disabled={!amount || !!error}>
						Подтвердить
					</button>
				</div>
			)}

			{loading && <Loader />}

			{isFormSend && <FormSent />}
		</>
	);
};
