import { Phone } from '@phosphor-icons/react/dist/ssr';
import { OptimizedImage } from '@/shared/ui/optimize-image';
import { OptimizedLink } from '@/shared/ui/optimize-link';
import { DocumentationModal } from '../documentation';
import { ContactModal } from '../contact';
import './header.scss';

export function Header() {
	return (
		<header className='header'>
			<div className='header__wrapper container'>
				<div className='header__logo-wrapper'>
					<picture>
						<source srcSet={'/logo/header/index-390.png'} media='(max-width:820px)' />

						<OptimizedImage
							src={'/logo/header/index.png'}
							height={40}
							width={212}
							priority
							alt=''
							className='header__logo'
						/>
					</picture>
				</div>
				<div className='header__info'>
					<OptimizedLink href='tel:+7 916 083 39 30'>
						<button className='header__phone'>
							<div className='header__phone-icon-wrapper'>
								<Phone
									size={50}
									className='header__phone-icon'
									weight='fill'
									color='#fff'
								/>
							</div>
							+7 916 083 39 30
						</button>
					</OptimizedLink>
					<div className='header__more-nav-wrapper'>
						<button className='header__more'>
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='header__more-icon'
							>
								<path
									d='M10 7.8125C10.4326 7.8125 10.8556 7.94079 11.2153 8.18116C11.575 8.42152 11.8554 8.76317 12.021 9.16288C12.1866 9.56259 12.2299 10.0024 12.1455 10.4268C12.0611 10.8511 11.8527 11.2409 11.5468 11.5468C11.2409 11.8527 10.8511 12.0611 10.4268 12.1455C10.0024 12.2299 9.5626 12.1866 9.16288 12.021C8.76317 11.8554 8.42153 11.575 8.18116 11.2153C7.9408 10.8556 7.8125 10.4326 7.8125 10C7.8125 9.41984 8.04297 8.86344 8.45321 8.4532C8.86344 8.04297 9.41984 7.8125 10 7.8125ZM5.9375 10C5.9375 9.56735 5.80921 9.14442 5.56884 8.78469C5.32848 8.42496 4.98683 8.14458 4.58712 7.97901C4.18741 7.81345 3.74757 7.77013 3.32324 7.85453C2.89891 7.93894 2.50913 8.14727 2.2032 8.4532C1.89728 8.75913 1.68894 9.14891 1.60453 9.57324C1.52013 9.99757 1.56345 10.4374 1.72901 10.8371C1.89458 11.2368 2.17496 11.5785 2.53469 11.8188C2.89442 12.0592 3.31735 12.1875 3.75 12.1875C4.33016 12.1875 4.88656 11.957 5.2968 11.5468C5.70703 11.1366 5.9375 10.5802 5.9375 10ZM14.0625 10C14.0625 10.4326 14.1908 10.8556 14.4312 11.2153C14.6715 11.575 15.0132 11.8554 15.4129 12.021C15.8126 12.1866 16.2524 12.2299 16.6768 12.1455C17.1011 12.0611 17.4909 11.8527 17.7968 11.5468C18.1027 11.2409 18.3111 10.8511 18.3955 10.4268C18.4799 10.0024 18.4366 9.56259 18.271 9.16288C18.1054 8.76316 17.825 8.42152 17.4653 8.18116C17.1056 7.94079 16.6826 7.8125 16.25 7.8125C15.6698 7.8125 15.1134 8.04297 14.7032 8.4532C14.293 8.86344 14.0625 9.41984 14.0625 10Z'
									fill='white'
								/>
							</svg>
						</button>
						<nav className='header__nav'>
							<div className='header__nav-wrapper'>
								<ul className='header__nav-items-list'>
									<li className='header__nav-item'>
										<OptimizedLink href='#catalog'>
											Каталог всего ассортимента компании
										</OptimizedLink>
									</li>
									<li className='header__nav-item'>
										<OptimizedLink href='#presentation'>
											Презентация для сотрудничества
										</OptimizedLink>
									</li>
									<li className='header__nav-item'>
										<OptimizedLink href='#information'>
											Информация о компании
										</OptimizedLink>
									</li>
								</ul>
								<ul className='header__nav-items-list'>
									<DocumentationModal
										trigger={
											<li className='header__nav-item header-doc'>
												Документация
											</li>
										}
									/>
									<ContactModal
										trigger={
											<li className='header__nav-item header-contact'>
												Контактная информация
											</li>
										}
									/>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}
