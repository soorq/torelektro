'use client';

import { OptimizedImage } from '@/shared/ui/optimize-image';
import { OptimizedLink } from '@/shared/ui/optimize-link';
import { ModalTitle } from '@/shared/ui/dialog';
import { MailService } from '@/shared/api/mail';
import parsePhoneNumber from 'libphonenumber-js';

import { IMaskInput } from 'react-imask';
import { FormEvent, useState } from 'react';
import './presentation.scss';

export function PresentationModal() {
	const [isValid, setIsValid] = useState<boolean | null>();
	const handler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const dto: Record<string, string> = Object.assign(
			Object.fromEntries(new FormData(e.currentTarget)),
		);

		const number = parsePhoneNumber(dto.phone.trim());
		if (number?.isValid() == true) {
			try {
				// eslint-disable-next-line
				const status = await MailService.presentation({ dto });
			} catch (error) {
				throw new Error(error?.toString());
			}
		} else {
			setIsValid(false);
		}
	};

	return (
		<div className='popup__body'>
			<form action='#' className='popup__form' onSubmit={handler}>
				<div className='popup__form-wrapper'>
					<ModalTitle className='popup__form-title hide-mobile'>
						<span>Пожалуйста</span>, оставьте ваши контакты, чтобы мы отправили вам
						презентацию
					</ModalTitle>
					<ModalTitle className='popup__form-title mobile'>
						<span>Пожалуйста</span>, оставьте ваши контакты, чтобы мы перезвонили и
						ответили
						<br />
						на все необходимые вопросы
					</ModalTitle>
					<div className='popup__form-input'>
						<p className='popup__input-name'>номер сотового телефона</p>
						<IMaskInput
							mask='+{7} 000 000 00 00'
							value='+7'
							unmask={true}
							className={`popup__input ${isValid == false ? 'invalid' : ''}`}
							required
							minLength={16}
							lazy={false}
							id='phone'
							name='phone'
						/>
					</div>
					<div className='popup__button-wrapper'>
						<button className='popup__form-button' type='submit'>
							Подробная презентация
						</button>
						<p className='popup__disclamer'>
							нажимая, вы соглашаетесь <br />
							<OptimizedLink prefetch href='/policy'>
								{' '}
								<span>с условиями политики конфиденциальности</span>
							</OptimizedLink>
						</p>
					</div>
				</div>
			</form>
			<OptimizedImage
				alt='ТОРЕЛЕКТРО. ПРЕЗЕНТАЦИЯ. презентация'
				width={550}
				height={310}
				className='popup__img'
				src={'/presentation/laptop_3.png'}
			/>
		</div>
	);
}
