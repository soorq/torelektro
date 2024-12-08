import { Presentation } from '@/widgets/presentation';
import { Consultation } from '@/widgets/consultation';
import { Information } from '@/widgets/information';
import { Catalog } from '@/features/catalog';
import { Nuances } from '@/widgets/nuaces';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Hero } from '@/widgets/hero';
import { Faq } from '@/widgets/faq';

export function RootPage() {
	return (
		<>
			<Header />
			<main className='main'>
				<Hero />
				<Catalog />
				<Presentation />
				<Information />
				<Consultation />
				<Faq />
				<Nuances />
			</main>
			<Footer />
		</>
	);
}
