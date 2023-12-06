import * as yup from 'yup';
import { FIELD_NAMES } from '@/utils/enums';

const amount_schema: any = yup.string().matches(/^(0|[1-9]\d*)\.?,?\d*$/, 'Неверное число').required('Поле обязательно');

const wallet_address_schema: any = yup
	.string()
	.matches(/^[\w\d]{20,40}$/, 'Неверный формат адреса USDT')
	.required('Поле обязательно');

export const wallet_schema: any = yup.object().shape({
	[FIELD_NAMES.WALLET_ADDRESS]: wallet_address_schema,
	[FIELD_NAMES.WALLET_AMOUNT]: amount_schema,
});