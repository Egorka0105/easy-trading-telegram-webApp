'use client';

import { useRouter } from 'next/navigation';

export const GoBackButton = () => {
	const router = useRouter();

	const handleClick = () => {
		router.back();
	};

	return (
		<button className={'close_btn_large'} type={'button'} onClick={handleClick}>
			Назад
		</button>
	);
};