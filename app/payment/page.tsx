import { Suspense } from 'react';
import { Loader } from '@/components';
import s from './index.module.scss';
import { WalletForm } from '@/components/WalletForm';

export default function Page() {
	return (
		<div className={s.wallet}>
			<Suspense fallback={<Loader />}>
				<WalletForm />
			</Suspense>
		</div>
	);
}
