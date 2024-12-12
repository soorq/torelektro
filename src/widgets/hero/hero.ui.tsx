'use client';

import { OptimizedImage } from '@/shared/ui/optimize-image';
import { ConsultationModal } from '../consultation';
import { useState } from 'react';
import './hero.scss';
import { PolicyModal } from '../policy/policy.modal';

export function Hero() {
	const [show, setShow] = useState(true);
	const [policyOpen, setPolicyOpen] = useState(false);
	const openPolicy = () => {
		setPolicyOpen(true);
	};

	return (
		<>
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
								Производство свыше 20+ видов современных электрических удлинителей,
								с отличительными силовыми и иными характеристиками и преимуществами
							</p>
							<div className='intro__bottom'>
								<ConsultationModal
									trigger={
										<button className='intro__button'>
											Бесплатная консультация
										</button>
									}
									asChild
								/>
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
									<PolicyModal
										trigger={
											<span>
												вы соглашаетесь с условиями политики
												конфиденциальности
											</span>
										}
										className='transparent'
									/>
									, тем самым,
									<br />
									помогаете нам сделать наш интернет-сайт комфортнее и полезнее
									для каждого человека
								</p>
								<p className='intro__disclaimer-text mobile'>
									Если вы продолжаете использовать наш интернет-сайт,
									<span
										className='intro__disclaimer-political'
										onClick={openPolicy}
									>
										вы соглашаетесь <br /> с условиями политики
										конфиденциальности
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
										<svg
											width='20'
											height='20'
											viewBox='0 0 20 20'
											fill='none'
											className='intro__disclaimer-close-icon'
											xmlns='http://www.w3.org/2000/svg'
											onClick={() => setShow(false)}
										>
											<g clip-path='url(#clip0_0_12325)'>
												<path
													d='M15.9563 15.2938C16.0023 15.3367 16.0393 15.3884 16.0649 15.4459C16.0905 15.5034 16.1043 15.5655 16.1054 15.6285C16.1065 15.6914 16.0949 15.7539 16.0714 15.8123C16.0478 15.8706 16.0127 15.9237 15.9682 15.9682C15.9237 16.0127 15.8706 16.0478 15.8123 16.0714C15.7539 16.0949 15.6914 16.1065 15.6285 16.1054C15.5655 16.1043 15.5034 16.0905 15.4459 16.0649C15.3884 16.0393 15.3367 16.0023 15.2938 15.9563L10 10.6633L4.70628 15.9563C4.61742 16.0391 4.49989 16.0842 4.37845 16.082C4.25701 16.0799 4.14115 16.0307 4.05526 15.9448C3.96938 15.8589 3.92018 15.743 3.91804 15.6216C3.9159 15.5002 3.96098 15.3826 4.04378 15.2938L9.33675 10L4.04378 4.70628C3.96098 4.61742 3.9159 4.49989 3.91804 4.37845C3.92018 4.25701 3.96938 4.14115 4.05526 4.05526C4.14115 3.96938 4.25701 3.92018 4.37845 3.91804C4.49989 3.9159 4.61742 3.96098 4.70628 4.04378L10 9.33675L15.2938 4.04378C15.3826 3.96098 15.5002 3.9159 15.6216 3.91804C15.743 3.92018 15.8589 3.96938 15.9448 4.05526C16.0307 4.14115 16.0799 4.25701 16.082 4.37845C16.0842 4.49989 16.0391 4.61742 15.9563 4.70628L10.6633 10L15.9563 15.2938Z'
													fill='#101010'
												/>
											</g>
											<defs>
												<clipPath id='clip0_0_12325'>
													<rect width='20' height='20' fill='white' />
												</clipPath>
											</defs>
										</svg>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
			<PolicyModal asChild open={policyOpen} onOpenChange={setPolicyOpen} trigger={null} />
		</>
	);
}
