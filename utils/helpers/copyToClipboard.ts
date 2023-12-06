import { toastMessage } from '@/utils/helpers/toasttify';

export const copyToClipboard = async (text: string, fallback?: (text: string) => void): Promise<void> => {
	try {
		if (navigator.clipboard) {
			await navigator.clipboard.writeText(text);
			await toastMessage('Скопировано', 'success');
		}
		// } else {
		// 	fallback(text);
		// }
	} catch (e) {
		await toastMessage(
			'Не удалось скопировать. Возможно, проблема в настройках безопасности на вашем устройстве. Скопируйте ссылку выше вручную.',
			'warning'
		);
	}
};

// fallback function for browsers that do not support Clipboard
// export const fallbackCopyToClipboard = (text: string) => {
// 	const textArea = document.createElement('textarea');
// 	textArea.value = text;
// 	document.body.appendChild(textArea);
// 	textArea.select();
//
// 	try {
// 		document.execCommand('copy');
// 		toastMessage('Скопировано 2', 'success');
// 	} catch (e) {
// 		toastMessage(
// 			'Не удалось скопировать. Возможно, проблема в настройках безопасности на вашем устройстве. Скопируйте ссылку выше вручную.',
// 			'warning'
// 		);
// 	}
//
// 	document.body.removeChild(textArea);
// };
