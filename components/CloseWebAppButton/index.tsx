'use client';

import s from './index.module.scss';
import { useEffect } from 'react';

// Объявление глобальной переменной Telegram
declare global {
	interface Window {
		Telegram: {
			WebApp: {
				close: () => void;
			};
		};
	}
}

export const CloseWebAppButton = () => {
	const handleClose = (e: any): void => {
		alert(e.view.Telegram.WebApp);
		if (window.Telegram.WebApp) {
			e.view.Telegram.WebApp.close();
		} else {
			alert(window.Telegram);
		}
	};

	return (
		<button className={s.closeApp} type={'button'} onClick={handleClose}>
			Закрыть
		</button>
	);
};
