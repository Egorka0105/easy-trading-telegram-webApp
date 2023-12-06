import { Suspense } from 'react';
import { Loader } from '@/components';
import { WalletForm } from '@/components/WalletForm';
import s from './index.module.scss';

export default function Page() {
	return (
		<div className={s.wallet}>
			<Suspense fallback={<Loader />}>
				<WalletForm />
			</Suspense>
		</div>
	);
}
