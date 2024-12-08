import { Modal, ModalContent, ModalTrigger } from '@/shared/ui/dialog/dialog';
import { OptimizedImage } from '@/shared/ui/optimize-image';
import { OptimizedLink } from '@/shared/ui/optimize-link';
import { VacancyModal } from '../vacancy';
import { ContactModal } from '../contact';
import { PolicyModal } from '../policy';
import './footer.scss';

export function Footer() {
	return (
		<footer className='footer'>
			<div className='container footer__wrapper'>
				<div className='footer__logo-wrapper'>
					<OptimizedImage
						src={'/logo/footer/index.png'}
						height={40}
						width={212}
						priority
						alt='Логотип ТОРЕЛЕКТРО'
						className='footer__logo'
					/>
				</div>
				<div className='footer__info'>
					<nav className='footer__nav'>
						<ul className='footer__info-items'>
							<li className='footer__info-item'>
								<a href='#catalog'> Каталог всего ассортимента компании </a>
							</li>
							<li className='footer__info-item'>
								<a href='#presentation'> Презентация для сотрудничества </a>
							</li>
							<li className='footer__info-item'>
								<a href='#faq'> Популярные вопросы </a>
							</li>
						</ul>
						<ul className='footer__info-items'>
							<Modal>
								<ModalTrigger asChild>
									<li className='footer__info-item footer-vacancy'>Вакансия</li>
								</ModalTrigger>
								<ModalContent className='vacancy'>
									<VacancyModal />
								</ModalContent>
							</Modal>
							<Modal>
								<ModalTrigger asChild>
									<li className='footer__info-item footer-document'>
										Документация
									</li>
								</ModalTrigger>
								<ModalContent className='documentation'>
									{/* <DocumentationModal /> */}
								</ModalContent>
							</Modal>

							<Modal>
								<ModalTrigger asChild>
									<li className='footer__info-item footer-contact'>
										Контактная информация
									</li>
								</ModalTrigger>
								<ModalContent className='contacts'>
									<ContactModal />
								</ModalContent>
							</Modal>
						</ul>
					</nav>
					<div className='footer__socials'>
						<div className='footer__contacts'>
							<p className='footer__contact-item'>
								<a href='tel:+7 916 083 39 30'> +7 916 083 39 30 </a>
							</p>
							<p className='footer__contact-item'>
								<a href='mailto:tor@torelektro.ru'> tor@torelektro.ru </a>
							</p>
						</div>
						<div className='footer__telegram'>
							<OptimizedLink href='https://t.me/+79160833930'>
								<svg
									width='30'
									height='30'
									viewBox='0 0 30 30'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM15.5375 11.0737C14.0786 11.6805 11.1627 12.9365 6.78987 14.8417C6.07979 15.124 5.70782 15.4003 5.67396 15.6704C5.61673 16.1269 6.18839 16.3066 6.96684 16.5514C7.07273 16.5847 7.18244 16.6192 7.29492 16.6558C8.0608 16.9047 9.09103 17.196 9.62661 17.2075C10.1124 17.218 10.6547 17.0177 11.2533 16.6067C15.3389 13.8488 17.448 12.4548 17.5804 12.4247C17.6738 12.4035 17.8032 12.3769 17.891 12.4548C17.9787 12.5328 17.97 12.6804 17.9608 12.72C17.9041 12.9614 15.6602 15.0476 14.4989 16.1272C14.1369 16.4638 13.8801 16.7025 13.8276 16.757C13.71 16.8792 13.5902 16.9947 13.475 17.1058C12.7635 17.7917 12.2299 18.306 13.5045 19.146C14.1171 19.5496 14.6072 19.8834 15.0962 20.2164C15.6302 20.5801 16.1629 20.9428 16.852 21.3946C17.0276 21.5097 17.1953 21.6292 17.3586 21.7457C17.9801 22.1887 18.5384 22.5868 19.2282 22.5233C19.6291 22.4864 20.0431 22.1095 20.2533 20.9854C20.7503 18.3289 21.727 12.5731 21.9528 10.2012C21.9726 9.99341 21.9477 9.72746 21.9277 9.61072C21.9077 9.49397 21.866 9.32763 21.7142 9.2045C21.5345 9.05867 21.257 9.02792 21.133 9.0301C20.5688 9.04004 19.7032 9.34102 15.5375 11.0737Z'
										fill='white'
									/>
								</svg>
							</OptimizedLink>
						</div>
					</div>
				</div>
				<p className='footer__disclaimer'>
					Настоящий интернет-сайт, а также вся информация о товарах и об услугах,
					предоставленная на нём, носит исключительно
					<br />
					информационный характер и ни при каких условиях не является офертой,
					определяемой действующим российским законодательством
				</p>
				<div className='footer__docs'>
					<Modal>
						<ModalTrigger asChild>
							<p className='footer__docs-item footer-political'>
								Политика конфиденциальности
							</p>
						</ModalTrigger>
						<ModalContent className='political'>
							<PolicyModal />
						</ModalContent>
					</Modal>
					<p className='footer__docs-item'>ООО «ТОРЭЛЕКТРО» · 1245000026600</p>
				</div>
				<div className='footer__map'>
					<div>
						<iframe
							src='https://yandex.com/map-widget/v1/?um=constructor%3A4208a45148ad864e53373df2efc7c84c6db1ba357b67f8adcb3971c81760af9a&amp;source=constructor'
							width='100%'
							height='150'
							frameBorder='0'
						></iframe>
					</div>
				</div>
			</div>
		</footer>
	);
}
