'use client';

export const CloseWebAppButton = () => {

	const handleClose = (): void => {
		Telegram.WebApp.close();
	};

	return (
		<button className={"close_btn_large"} type={'button'} onClick={handleClose}>
			Закрыть
		</button>
	);
};
