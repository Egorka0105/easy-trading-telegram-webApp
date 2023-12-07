'use client';

import s from './index.module.scss';
import { useEffect } from 'react';

export const CloseWebAppButton = () => {
	useEffect(() => {
		Telegram.WebApp.ready();
	}, []);

	const handleClose = (): void => {
		Telegram.WebApp.close();
	};

	return (
		<button className={s.closeApp} type={'button'} onClick={handleClose}>
			Закрыть
		</button>
	);
};
