import Image from 'next/image';
import Link from 'next/link';
import s from './index.module.scss';
import { CloseWebAppButton } from '@/components/CloseWebAppButton';

export default function Page() {
	return (
		<div className={s.farewell}>
			<div className={s.icon_wrapper}>
				<Image className={s.icon} src={'/thanks.png'} alt={'thanks'} width={96} height={96} />
				<span className={s.description}>Спасибо!</span>
			</div>

			<div className={s.content}>
				<p>
					Мы отправим вам сообщение, как только придет подтверждение получения платежа. Обычно переводы занимают от 3 до
					15 минут.
				</p>
				<p>
					Всю информацию по сделке вы будете получать здесь. После завершения сделки мы опубликуем результат и вы
					сможете сразу же вывести деньги.
				</p>
				<p>
					По всем вопросам можете обращаться к нашему администратору
					<Link className={s.link} href={'https://t.me/Anastasiia_Easy_Trading'}>
						@Анастасия
					</Link>
				</p>
			</div>

			<Link className={s.submit} href={'https://t.me/Anastasiia_Easy_Trading'}>
				Написать администратору
			</Link>

			<CloseWebAppButton />
		</div>
	);
}
