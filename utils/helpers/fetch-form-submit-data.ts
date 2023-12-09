import axios from 'axios';
import { toastMessage } from '@/utils/helpers/toasttify';

export const fetchFormSubmitData = async <T, E extends string>(
	endpoint: E,
	values: T,
	additionalFields?: Record<string, any>
) => {
	const requestData = {
		...values,
		...additionalFields,
	};
	try {
		return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, requestData);
	} catch (e: any) {
		await toastMessage(e.message, 'error');
		await Promise.reject(e);
	}
};
