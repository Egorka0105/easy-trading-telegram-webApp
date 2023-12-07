import { toastMessage } from '@/utils/helpers/toasttify';

export const copyToClipboard = async (text: string): Promise<void> => {
    try {
        if (navigator.clipboard) {
			await navigator.clipboard.writeText(text);
			await toastMessage('Скопировано', 'success');
		}
    } catch (e) {
        await toastMessage(
            'Не удалось скопировать. Возможно, проблема в настройках безопасности на вашем устройстве. Скопируйте ссылку выше вручную.',
            'warning'
        );
    }
};
