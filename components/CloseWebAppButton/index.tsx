'use client';

import s from './index.module.scss';
import {useEffect} from "react";

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

	const handleClose = (): void => {
		alert(window.Telegram);
		alert(window.Telegram.WebApp);
		window.Telegram.WebApp.close();
	};

	return (
		<button className={s.closeApp} type={'button'} onClick={handleClose}>
			Закрыть
		</button>
	);
};
