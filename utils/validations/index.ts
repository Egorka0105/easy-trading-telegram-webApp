import * as yup from 'yup';


export const wallet_schema: any = yup.string().matches(/^[\w\d]{20,40}$/, 'Неверный формат адреса USDT').required('Поле обязательно');