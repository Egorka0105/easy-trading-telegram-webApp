import { toastMessage } from '@/utils/helpers/toasttify';

export const copyToClipboard = async (text: string) => {
	try {
		await window.navigator.clipboard.writeText(text);
		await toastMessage('Скопировано', 'success');
	} catch (e) {
		await toastMessage('Не удалось копировать', 'warning');
	}
};
