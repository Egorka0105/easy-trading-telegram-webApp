import type { Metadata } from 'next';
import Script from 'next/script';
import { Roboto } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import './globals.css';
import Head from 'next/head';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
	title: 'Easy Trading',
	description: 'Easy Trading Telegram App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<Head>
				<script src="https://telegram.org/js/telegram-web-app.js" async></script>
				<title>East Trading Web App</title>
			</Head>
			<body className={roboto.className}>
				<main>{children}</main>
				<ToastContainer />
			</body>
		</html>
	);
}
