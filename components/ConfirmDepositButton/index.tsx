'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import s from './index.module.scss';

export const ConfirmDepositButton = () => {
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const userId = params.get('userId');
	const dealId = params.get('dealId');

	return (
		<Link className={s.confirm_btn} href={`/payment?userId=${userId}&dealId=${dealId}`}>
			Подтвердить
		</Link>
	);
};
