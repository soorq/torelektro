import { Modal, ModalContent, ModalTrigger, ModalTitle } from '@/shared/ui/dialog/dialog';
import type { ReactNode } from 'react';
import './contact.scss';

export function ContactModal({ trigger, asChild }: { trigger: ReactNode; asChild?: boolean }) {
	return (
		<Modal>
			<ModalTrigger asChild={asChild}>{trigger}</ModalTrigger>
			<ModalContent>
				<ModalTitle className='contacts__title'>Контактная информация</ModalTitle>
				<div className='contacts__info-items'>
					<div className='contacts__map'>
						<div>
							<a
								rel='noopener noreferrer'
								target='_blank'
								href='https://yandex.ru/maps/?from=mapframe&ll=38.055295%2C55.692628&mode=routes&rtext=~55.692627%2C38.055294&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoNnzgYQhVAxV5C&source=mapframe&utm_medium=mapframe&utm_source=maps&z=17'
							></a>{' '}
							<iframe
								src='https://yandex.com/map-widget/v1/?um=constructor%3A4208a45148ad864e53373df2efc7c84c6db1ba357b67f8adcb3971c81760af9a&amp;source=constructor'
								width='100%'
								height='470'
								frameBorder='0'
							></iframe>
						</div>
					</div>
					<div className='contacts__info-cards'>
						<div className='contacts__info-card'>
							<p className='contacts__info-text'>+7 495 198 62 55</p>
							<p className='contacts__info-text'>+7 916 083 39 30</p>
							<p className='contacts__info-text'>tor@torelektro.ru</p>
						</div>
						<div className='contacts__info-card'>
							<div className='contacts__info'>
								<p className='contacts__info-text'>ООО «ТОРЭЛЕКТРО»</p>
							</div>
							<div className='contacts__info'>
								<p className='contacts__info-address'>
									140016, Россия,
									<br />
									Московская область,
									<br />
									Люберецкий район, Торбеево, 48
								</p>
							</div>
							<div className='contacts__info-legals'>
								<div className='contacts__info-legal'>
									<p className='contacts__info-legal-text'>1245000026600</p>
									<p className='contacts__info-legal-text'>5027326376</p>
									<p className='contacts__info-legal-text'>502701001</p>
									<p className='contacts__info-legal-text'>75706083</p>
									<p className='contacts__info-legal-text'>46448000000</p>
								</div>
								<div className='contacts__info-legal'>
									<p className='contacts__info-legal-name'>ОГРН</p>
									<p className='contacts__info-legal-name'>ИНН</p>
									<p className='contacts__info-legal-name'>КПП</p>

									<p className='contacts__info-legal-name'>ОКПО</p>
									<p className='contacts__info-legal-name'>ОКАТО</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ModalContent>
		</Modal>
	);
}
