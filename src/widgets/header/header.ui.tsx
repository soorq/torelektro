import { DotsThree, Phone } from '@phosphor-icons/react/dist/ssr';
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
					<OptimizedLink href='/'>
						<picture>
							<source
								srcSet={'/logo/header/index-390.png'}
								media='(max-width:820px)'
							/>

							<OptimizedImage
								src={'/logo/header/index.png'}
								height={40}
								width={212}
								priority
								alt=''
								className='header__logo'
							/>
						</picture>
					</OptimizedLink>
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
							<DotsThree
								className='header__more-icon'
								weight='bold'
								color='#fff'
								size={70}
							/>
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
