'use client';
import { Modal, ModalContent, ModalTrigger, ModalTitle } from '@/shared/ui/dialog';
import { OptimizedImage } from '@/shared/ui/optimize-image';
import { ConsultationModal } from '../consultation';
import { useState, type ReactNode } from 'react';

import './vacancy.scss';
import { PolicyModal } from '../policy/policy.modal';

export function VacancyModal({ trigger, asChild }: { trigger: ReactNode; asChild?: boolean }) {
	const [isMainModalOpen, setIsMainModalOpen] = useState(false);
	const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
	const [policyOpen, setPolicyOpen] = useState(false);

	const openConsultationModal = () => {
		setIsMainModalOpen(false);
		setIsConsultationModalOpen(true);
	};

	const openPolicy = () => {
		setIsMainModalOpen(false);
		setPolicyOpen(true);
	};

	return (
		<>
			<Modal open={isMainModalOpen} onOpenChange={setIsMainModalOpen}>
				<ModalTrigger asChild={asChild}>{trigger}</ModalTrigger>
				<ModalContent className='dialog'>
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
										<span>Понятная работа</span>, с официальным трудоустройством
										и важными социальными гарантиями
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
								<button className='vacancy__button' onClick={openConsultationModal}>
									Анкета для заполнения
								</button>
								<p className='vacancy__disclaimer'>
									нажимая, вы соглашаетесь
									<br />
									<span onClick={openPolicy}>
										с условиями политики конфиденциальности
									</span>
								</p>
							</div>
						</div>
					</div>
				</ModalContent>
			</Modal>

			<ConsultationModal
				asChild
				open={isConsultationModalOpen}
				onOpenChange={setIsConsultationModalOpen}
				trigger={null}
			/>
			<PolicyModal asChild open={policyOpen} onOpenChange={setPolicyOpen} trigger={null} />
		</>
	);
}
