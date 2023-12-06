export const copyToClipboard = async (text: string) => {
	try {
		await navigator.clipboard.writeText(text);
		await console.log('Текст скопійовано до буферу обміну');
	} catch (err) {
		console.error('Не вдалося', err);
	}
};
