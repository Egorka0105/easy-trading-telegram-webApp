export const copyToClipboard = (text: string) => {
	try {
		console.log('Текст скопійовано до буферу обміну');
	} catch (err) {
		console.error('Не вдалося скопіювати текст до буферу обміну', err);
	}
};
