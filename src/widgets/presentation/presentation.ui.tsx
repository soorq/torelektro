import { Modal, ModalContent, ModalTrigger } from '@/shared/ui/dialog';
import { OptimizedImage } from '@/shared/ui/optimize-image';
import { PresentationModal } from './presentation.modal';
import './presentation.scss';

export function Presentation() {
	return (
		<section className='presentation' id='presentation'>
			<div className='presentation__wrapper container'>
				<div className='presentation__texts'>
					<p className='presentation__text'>
						Если вы занимаетесь <span>продажами</span>, или{' '}
						<span>производственными проектами</span>, или, просто хотите производить
						<br />
						под своим собственным брендом — <span>смело скачивайте презентацию</span>
					</p>
					<Modal>
						<ModalTrigger asChild>
							<button className='presentation__button'>Подробная презентация</button>
						</ModalTrigger>
						<ModalContent className='dialog'>
							<PresentationModal />
						</ModalContent>
					</Modal>
					<p className='presentation__disclaimer'>
						подробная презентация предоставляется исключительно на основании запроса
					</p>
				</div>
				<OptimizedImage
					src={'/presentation/laptop_2.png'}
					alt='ТОРЕЛЕКТРО. ПРЕЗЕНТАЦИЯ. презентация'
					className='presentation__img'
					height={310}
					width={550}
				/>
			</div>
		</section>
	);
}
