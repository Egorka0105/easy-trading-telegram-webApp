import Link from 'next/link';
import s from './index.module.scss';

export const OpenWalletButton = () => {
	return (
		<Link className={s.open_wallet_btn} href={'https://t.me/wallet'}>
			<span>👛</span>
			<span>Открить кошелек</span>
		</Link>
	);
};
