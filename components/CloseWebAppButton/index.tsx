'use client';

import s from './index.module.scss';

export const CloseWebAppButton = () => {
	const handleClose = (): void => {
		// @ts-ignore
		if (window) window.Telegram.WebApp.close();
	};

	return (
		<button className={s.closeApp} type={'button'} onClick={handleClose}>
			Закрыть
		</button>
	);
};
