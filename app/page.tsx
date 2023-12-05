import Image from 'next/image';
import { ConfirmDepositButton, OpenWalletButton } from '@/components';
import s from './page.module.scss';
import { CopyButton } from '@/components/CopyButton';

export default function Home() {
	return (
		<div className={s.home}>
			<div className={s.titles_wrapper}>
				<p className={s.title}>
					Отправляйте только <strong>USDT TRC20</strong> на єтот адрес. Другие активи могут не дойти.
				</p>

				<p className={s.sub_title}>
					Для отправки используйте QR или номер кошелька. После оплати нажмите подтвердить платеж
				</p>
			</div>

			<div className={s.qr_wrapper}>
				<Image className={s.qr} src={'/qr.png'} alt={'qr cod'} width={177} height={169} />
				<span className={s.address}>TPCrSKPgRzyjxsmJMLRt27HKMcVkXmHyn1</span>
			</div>

			<div className={s.buttons_wrapper}>
				<CopyButton />
				<ConfirmDepositButton />
			</div>

			<div>
				<h4>Нет кошелька с USDT?</h4>

				<h5>Воспользуйтесь telegram wallet и пополните кошелек любим удобним способом</h5>

				<OpenWalletButton />
			</div>
		</div>
	);
}
