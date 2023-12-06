import Link from 'next/link';
import s from './index.module.scss';

export const OpenWalletButton = () => {
	return (
		<Link className={s.open_wallet_btn} href={'https://t.me/wallet'}>
			<span className={s.icon}>👛</span>
			<span className={s.title}>Открыть кошелёк</span>
		</Link>
	);
};
