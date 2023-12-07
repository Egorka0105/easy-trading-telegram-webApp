import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import Script from "next/script";
import 'styles/globals.css';
import 'styles/constants.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
	title: 'Easy Trading',
	description: 'Easy Trading Telegram App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<main>{children}</main>
				<ToastContainer />
			<Script src={"https://telegram.org/js/telegram-web-app.js"}/>
			</body>
		</html>
	);
}
