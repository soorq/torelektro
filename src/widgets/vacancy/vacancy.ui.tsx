import { Modal, ModalContent, ModalTrigger, ModalTitle } from '@/shared/ui/dialog';
import { OptimizedImage } from '@/shared/ui/optimize-image';
import { ConsultationModal } from '../consultation';
import { PolicyModal } from '../policy';
import type { ReactNode } from 'react';

import './vacancy.scss';

export function VacancyModal({ trigger, asChild }: { trigger: ReactNode; asChild?: boolean }) {
	return (
		<Modal>
			<ModalTrigger asChild={asChild}>{trigger}</ModalTrigger>
			<ModalContent>
				<ModalTitle className='vacancy__title'>
					Вакансия для амбициозных, сильных и коммуникабельных
				</ModalTitle>
				<ModalTitle className='vacancy__title mobile'>Вакансия</ModalTitle>
				<div className='vacancy__info'>
					<OptimizedImage
						alt='ТОРЕЛЕКТРО. ВАКАНСИИ. вакансия.'
						height={200}
						width={500}
						className='vacancy__img'
						src={'/vacancy/kubok.png'}
					/>
					<div className='vacancy__info-wrapper'>
						<div className='vacancy__info-items'>
							<div className='vacancy__info-item'>
								<p className='vacancy__info-text'>
									<span>Профессиональная команда</span>, обеспечивающая цикл
									производства, сначала и до конца
								</p>
							</div>
							<div className='vacancy__info-item'>
								<p className='vacancy__info-text'>
									<span>Грамотная подготовка</span>, предоставляющая понятное
									введение в должность
								</p>
							</div>
							<div className='vacancy__info-item'>
								<p className='vacancy__info-text'>
									<span>Понятная работа</span>, с официальным трудоустройством и
									важными социальными гарантиями
								</p>
							</div>
							<div className='vacancy__info-item'>
								<p className='vacancy__info-text hide-mobile'>
									<span>Карьерная лестница</span>, c понятным ростом и
									необходимыми производственными обязанностями
								</p>
								<p className='vacancy__info-text mobile'>
									<span>Карьерная лестница</span>, c понятным ростом и
									производственными обязанностями
								</p>
							</div>
						</div>
						<div className='vacancy__bottom'>
							<ConsultationModal
								asChild
								trigger={
									<button className='vacancy__button'>
										Анкета для заполнения
									</button>
								}
							/>
							<p className='vacancy__disclaimer'>
								нажимая, вы соглашаетесь
								<br />
								<PolicyModal
									trigger={<span>с условиями политики конфиденциальности</span>}
								/>
							</p>
						</div>
					</div>
				</div>
			</ModalContent>
		</Modal>
	);
}
