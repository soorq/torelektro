'use client';

import { Modal, ModalContent, ModalTrigger } from '@/shared/ui/dialog/dialog';
import { OptimizedImage } from '@/shared/ui/optimize-image';
import { ConsultationModal } from '../consultation';
import { X } from '@phosphor-icons/react/dist/ssr';
import { PolicyModal } from '../policy';
import { useState } from 'react';
import './hero.scss';

export function Hero() {
	const [show, setShow] = useState(true);

	return (
		<section className='intro'>
			<div className='container'>
				<div className='intro__wrapper'>
					<div className='intro__texts'>
						<h1 className='intro__title'>
							Российские удлинители собственного производства
							<br />
							по международным стандартам
						</h1>
						<h2 className='intro__title mobile'>
							Российские удлинители собственного производства
							<br />
							по всем стандартам
						</h2>
						<p className='intro__subtitle'>
							Производство свыше 20+ видов современных электрических удлинителей, с
							отличительными силовыми и иными характеристиками и преимуществами
						</p>
						<div className='intro__bottom'>
							<Modal>
								<ModalTrigger asChild>
									<button className='intro__button'>
										Бесплатная консультация
									</button>
								</ModalTrigger>
								<ModalContent className='political transparent'>
									<ConsultationModal />
								</ModalContent>
							</Modal>
							<p className='intro__description'>
								бесплатная доставка от 50000 рублей <br />
								во все населённые пункты нашей страны
							</p>
						</div>
					</div>
					<div className='intro__img-wrapper'>
						<picture>
							<source srcSet={'/intro/main-390.png'} media='(max-width:820px)' />
							<OptimizedImage
								className='intro__img'
								src={'/intro/main2.png'}
								alt='Preview hero'
								height={780}
								width={510}
								priority
							/>
						</picture>
					</div>
				</div>
				{show && (
					<div className='intro__disclaimer'>
						<div className='intro__disclaimer-wrapper'>
							<p className='intro__disclaimer-text'>
								Если вы продолжаете использовать наш интернет-сайт,
								<br />
								<Modal>
									<ModalTrigger asChild>
										<span className='intro__disclaimer-political'>
											вы соглашаетесь с условиями политики конфиденциальности
										</span>
									</ModalTrigger>
									<ModalContent className='political transparent'>
										<PolicyModal />
									</ModalContent>
								</Modal>
								, тем самым,
								<br />
								помогаете нам сделать наш интернет-сайт комфортнее и полезнее для
								каждого человека
							</p>
							<p className='intro__disclaimer-text mobile'>
								Если вы продолжаете использовать
								<br />
								наш интернет-сайт,
								<span className='intro__disclaimer-political'>
									вы соглашаетесь
									<br />с условиями политики конфиденциальности
								</span>
								, тем самым, помогаете нам сделать
								<br />
								наш интернет-сайт комфортнее и полезнее для каждого человека и
								бизнеса
							</p>
							<div className='intro__disclaimer-button-wrapper'>
								<button
									className='intro__disclaimer-button'
									onClick={() => setShow(false)}
								>
									Подтвердить
								</button>
								<div className='intro__disclaimer-close'>
									<X
										size={15}
										weight='regular'
										className='intro__disclaimer-close-icon'
										onClick={() => setShow(false)}
									/>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
