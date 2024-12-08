'use client';

import { Modal, ModalContent, ModalTrigger } from '@/shared/ui/dialog';
import { IMaskInput } from 'react-imask';
import { PolicyModal } from '../policy';
import { useRef } from 'react';
import './consultation.scss';

export const ConsultationModal = () => {
	const ref = useRef(null);
	const inputRef = useRef(null);

	return (
		<div className='popup__body'>
			<form className='popup__form'>
				<div className='popup__form-wrapper'>
					<h1 className='popup__form-title hide-mobile'>
						<span>Пожалуйста</span>, оставьте ваши контакты, чтобы мы перезвонили вам
					</h1>
					<h1 className='popup__form-title mobile'>
						<span>Пожалуйста</span>, оставьте ваши контакты, чтобы мы перезвонили и
						ответили
						<br />
						на все необходимые вопросы
					</h1>
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
						<button className='popup__form-button'>Бесплатная консультация</button>
						<p className='popup__disclamer'>
							нажимая, вы соглашаетесь <br />
							<Modal>
								<ModalTrigger asChild>
									<span>с условиями политики конфиденциальности</span>
								</ModalTrigger>
								<ModalContent className='political transparent'>
									<PolicyModal />
								</ModalContent>
							</Modal>
						</p>
					</div>
				</div>
			</form>
			<img className='popup__img' src={'/consultation/tele_3.png'} />
		</div>
	);
};
