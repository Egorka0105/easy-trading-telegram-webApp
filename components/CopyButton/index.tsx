'use client';

import {copyToClipboard, fallbackCopyToClipboard} from '@/utils/helpers';
import s from './index.module.scss';

export const CopyButton = () => {
	const handleClick = () => {
		copyToClipboard('TPCrSKPgRzyjxsmJMLRt27HKMcVkXmHyn1', fallbackCopyToClipboard);
		// copyToClipboard('TPCrSKPgRzyjxsmJMLRt27HKMcVkXmHyn1');
	};

	return (
		<button className={s.copy_btn} type={'button'} onClick={handleClick}>
			Копировать
		</button>
	);
};
