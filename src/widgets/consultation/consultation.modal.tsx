'use client';

import { Modal, ModalContent, ModalTrigger } from '@/shared/ui/dialog';
import { OptimizedImage } from '@/shared/ui/optimize-image';
import { type ReactNode, useRef } from 'react';
import { IMaskInput } from 'react-imask';
import { PolicyModal } from '../policy';
import './consultation.scss';

export function ConsultationModal({ trigger, asChild }: { trigger: ReactNode; asChild?: boolean }) {
	const ref = useRef(null);
	const inputRef = useRef(null);

	return (
		<Modal>
			<ModalTrigger asChild={asChild}>{trigger}</ModalTrigger>
			<ModalContent>
				<div className='popup__body'>
					<form className='popup__form'>
						<div className='popup__form-wrapper'>
							<h2 className='popup__form-title hide-mobile'>
								<span>Пожалуйста</span>, оставьте ваши контакты, чтобы мы
								перезвонили вам
							</h2>
							<h2 className='popup__form-title mobile'>
								<span>Пожалуйста</span>, оставьте ваши контакты, чтобы мы
								перезвонили и ответили
								<br />
								на все необходимые вопросы
							</h2>
							<div className='popup__form-input'>
								<p className='popup__input-name'>номер сотового телефона</p>
								<IMaskInput
									mask='+{7} 000 000 00 00'
									value='+7'
									ref={ref}
									inputRef={inputRef}
									className='popup__input'
									lazy={false}
									placeholderChar=' '
								/>
							</div>
							<div className='popup__button-wrapper'>
								<button className='popup__form-button'>
									Бесплатная консультация
								</button>
								<p className='popup__disclamer'>
									нажимая, вы соглашаетесь <br />
									<PolicyModal
										trigger={
											<span>с условиями политики конфиденциальности</span>
										}
									/>
								</p>
							</div>
						</div>
					</form>
					<OptimizedImage
						width={500}
						height={300}
						alt='ТОРЕЛЕКТРО. КОНСУЛЬТАЦИЯ. консультация.'
						className='popup__img'
						src={'/consultation/tele_3.png'}
					/>
				</div>
			</ModalContent>
		</Modal>
	);
}
