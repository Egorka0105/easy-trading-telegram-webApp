import Image from 'next/image';
import { ConfirmDepositButton, OpenWalletButton } from '@/components';
import s from './page.module.scss';
import { CopyButton } from '@/components/CopyButton';

export default function Home() {
	return (
		<div className={s.home}>
			<div className={s.titles_wrapper}>
				<p className={s.title}>
					Отправляйте только <strong>USDT TRC20</strong> на этот адрес. Другие активы могут не дойти.
				</p>
				<p className={s.sub_title}>
					Для отправки используйте QR или адрес кошелька. После оплаты нажмите подтвердить платеж
				</p>
			</div>

			<div className={s.qr_wrapper}>
				<Image priority className={s.qr} src={'/qr.png'} alt={'qr cod'} width={177} height={169} />
				<span className={s.address}>TPCrSKPgRzyjxsmJMLRt27HKMcVkXmHyn1</span>
			</div>

			<div className={s.buttons_wrapper}>
				<CopyButton />
				<ConfirmDepositButton />
			</div>

			<div className={s.wallet_wrapper}>
				<h4 className={s.title}>Нет кошелька с USDT?</h4>
				<h5 className={s.description}>Воспользуйтесь telegram wallet и пополните кошелек любым удобным способом</h5>
				<OpenWalletButton />
			</div>
		</div>
	);
}
