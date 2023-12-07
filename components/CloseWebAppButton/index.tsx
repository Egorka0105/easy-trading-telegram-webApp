'use client';

import s from './index.module.scss';
import { useEffect } from 'react';

const tg = Telegram.WebApp;

export const CloseWebAppButton = () => {
	useEffect(() => {
		tg.ready();
	}, []);

	const handleClose = (): void => {
		tg.close();
	};

	return (
		<button className={s.closeApp} type={'button'} onClick={handleClose}>
			Закрыть
		</button>
	);
};
