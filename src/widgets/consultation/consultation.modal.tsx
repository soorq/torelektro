'use client';

import { Modal, ModalContent, ModalTrigger } from '@/shared/ui/dialog';
import { OptimizedImage } from '@/shared/ui/optimize-image';
import { FormEvent, useState, type ReactNode } from 'react';
import { MailService } from '@/shared/api/mail';
import { IMaskInput } from 'react-imask';
import parsePhoneNumber, { isPossiblePhoneNumber } from 'libphonenumber-js';
import './consultation.scss';
import { PolicyModal } from '../policy/policy.modal';

export function ConsultationModal({
	trigger,
	asChild,
	sku,
	className,
	open,
	onOpenChange,
}: {
	trigger?: ReactNode;
	asChild?: boolean;
	sku?: string;
	className?: string;
	open?: boolean;
	// eslint-disable-next-line
	onOpenChange?: (open: boolean) => void;
}) {
	const [isValid, setIsValid] = useState<boolean | null>();
	const [sent, setSent] = useState<boolean>(false);
	const handler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const phone: string | any = new FormData(e.currentTarget).get('phone')?.toString();

		const number = parsePhoneNumber(phone.trim(), 'RU');
		const numberValid = isPossiblePhoneNumber(phone);
		if (number?.isValid() == true || numberValid == true) {
			try {
				if (sku) {
					// eslint-disable-next-line
					const status = await MailService.order({ dto: { phone: phone ?? '', sku } });
				} else {
					// eslint-disable-next-line
					const status = await MailService.consultation({ dto: { phone: phone ?? '' } });
				}

				setIsValid(true);
				setSent(true);
			} catch (error) {
				throw new Error(error?.toString());
			}
		} else {
			setIsValid(false);
			setSent(false);
		}
	};

	return (
		<Modal open={open && open} onOpenChange={onOpenChange}>
			<ModalTrigger asChild={asChild}>{trigger}</ModalTrigger>
			<ModalContent className={className}>
				<div className='popup__body'>
					<form className='popup__form' action='#' onSubmit={handler}>
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
									unmask={true}
									className={`popup__input ${isValid == false ? 'invalid' : ''}`}
									required
									minLength={16}
									lazy={false}
									id='phone'
									name='phone'
									placeholderChar=' '
								/>
							</div>
							<div className='popup__button-wrapper'>
								<button className='popup__form-button'>
									{sent == false
										? 'Бесплатная консультация'
										: 'Сообщение отправлено!'}
								</button>
								<p className='popup__disclamer'>
									нажимая, вы соглашаетесь <br />
									<PolicyModal
										trigger={
											<span>с условиями политики конфиденциальности</span>
										}
										className='transparent'
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
