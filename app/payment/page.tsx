import { Suspense } from 'react';
import { Loader } from '@/components';
import { WalletForm } from '@/components/WalletForm';
import s from './index.module.scss';

export default function Page() {
	return (
		<div className={s.wallet}>
			<h4 className={s.title}>
				Для вашей идентификации и последующей выплаты дохода введите адрес кошелька, с которого вы совершили перевод и
				сумму перевода
			</h4>
			<Suspense fallback={<Loader />}>
				<WalletForm />
			</Suspense>
		</div>
	);
}
