import { Modal, ModalContent, ModalTrigger } from '@/shared/ui/dialog';
import { ConsultationModal } from '../consultation';
import { PolicyModal } from '../policy';
import './vacancy.scss';

export function VacancyModal() {
	return (
		<div className='vacancy__wrapper'>
			<h2 className='vacancy__title'>Вакансия для амбициозных, сильных и коммуникабельных</h2>
			<h2 className='vacancy__title mobile'>Вакансия</h2>
			<div className='vacancy__info'>
				<img className='vacancy__img' src={'/vacancy/kubok.png'} />
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
								<span>Грамотная подготовка</span>, предоставляющая понятное введение
								в должность
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
								<span>Карьерная лестница</span>, c понятным ростом и необходимыми
								производственными обязанностями
							</p>
							<p className='vacancy__info-text mobile'>
								<span>Карьерная лестница</span>, c понятным ростом и
								производственными обязанностями
							</p>
						</div>
					</div>
					<div className='vacancy__bottom'>
						<Modal>
							<ModalTrigger asChild>
								<button className='vacancy__button'>Анкета для заполнения</button>
							</ModalTrigger>
							<ModalContent className='popup'>
								<ConsultationModal />
							</ModalContent>
						</Modal>
						<p className='vacancy__disclaimer'>
							нажимая, вы соглашаетесь
							<br />
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
			</div>
		</div>
	);
}
