import { OptimizedImage } from '@/shared/ui/optimize-image';
import { ConsultationModal } from './consultation.modal';
import './consultation.scss';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export function Consultation() {
	return (
		<section className='consultation'>
			<div className='consultation__wrapper container'>
				<div className='consultation__texts'>
					<p className='consultation__text'>
						Если вы <span>заинтересованы</span>, нашим производством,
						<br />
						но остались важные вопросы — <br />
						<span>просто оставляйте контакты для связи</span>
					</p>
					<p className='consultation__text mobile'>
						Если вы <span>заинтересованы</span>,<br />
						нашим производством,
						<br />
						но остались важные вопросы — <br />
						<span>
							просто оставляйте контакты <br />и получайте ответы на запросы
						</span>
					</p>
					<ConsultationModal
						trigger={
							<button className='consultation__button'>
								Бесплатная консультация
							</button>
						}
						asChild
					/>
					<p className='consultation__disclaimer'>
						бесплатная консультация предоставляется исключительно на основании запроса
					</p>
				</div>
				<OptimizedImage
					height={300}
					width={550}
					src='/consultation/tele_2.png'
					alt=''
					className='consultation__img'
				/>
			</div>
		</section>
	);
}
