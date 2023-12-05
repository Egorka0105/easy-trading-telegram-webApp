"use client"

import Link from "next/link";
import { useSearchParams} from "next/navigation";
import s from "./index.module.scss"

export const ConfirmDepositButton = () => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const userId = params.get('userId');

    return (
        <Link className={s.confirm_btn} href={`/payment-test/second-step?userId=${userId}`}>
            Подтвердить
        </Link>
    );
};