import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const $app = process.env.NEXT_PUBLIC_APP_URL;

// TreeShaking activating
const RootPage = dynamic(() => import('@/screens/root').then(p => p.RootPage), { ssr: false });

// Seo meta tags for page
export const metadata: Metadata = {
	metadataBase: new URL($app),
	title: 'ТОРЭЛЕКТРО | Профессиональные удлинители и аксессуары',
	description:
		'Профессиональные удлинители высокого качества для любых нужд. Широкий ассортимент продукции, надежные материалы, безопасное использование. Узнайте больше на нашем сайте!',
	keywords: ['Москва', 'Московская область', 'удлинители', 'Удлинители'],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		title: 'ТОРЭЛЕКТРО',
		description:
			'Профессиональные удлинители высокого качества для любых нужд. Широкий ассортимент продукции, надежные материалы, безопасное использование. Узнайте больше на нашем сайте!',
		type: 'website',
		locale: 'ru-RU',
		url: new URL($app),
		siteName: 'ТОРЭЛЕКТРО',
		images: [
			{
				url: '/meta/og.png',
				alt: 'ТОРЕЛЕКТРО логотип',
			},
		],
	},
	alternates: {
		canonical: new URL($app),
	},
	referrer: 'no-referrer-when-downgrade',
	twitter: {
		card: 'summary',
		images: [
			{
				url: '/meta/twitter.png',
				alt: 'ТОРЕЛЕКТРО логотип',
			},
		],
		title: '',
		description:
			'Профессиональные удлинители высокого качества для любых нужд. Широкий ассортимент продукции, надежные материалы, безопасное использование. Узнайте больше на нашем сайте!',
		site: new URL($app).toString(),
	},
	authors: [
		{
			name: 'Soorq',
			url: 'https://github.com/soorq',
		},
		{
			name: 'Ivan41kd',
			url: 'https://github.com/ivan41kd',
		},
	],
	verification: {
		yandex: 'your-yandex-verification-code',
	},
};

export default RootPage;
