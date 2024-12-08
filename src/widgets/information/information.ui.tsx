import { OptimizedImage } from '@/shared/ui/optimize-image';
import './information.scss';

export function Information() {
	return (
		<section className='information container' id='information'>
			<h2 className='information__title'>
				Информация о преимуществах компании в трех словах
			</h2>
			<div className='information__items'>
				<div className='information__item'>
					<div className='information__texts'>
						<h2 className='information__item-title'>Рациональность</h2>
						<p className='information__item-subtitle'>
							использования нашего производства определена
							<br />
							нашими высокими стандартами качества,
							<br />
							квалифицированными специалистами,
							<br />
							многолетним опытом на <span>настоящем</span> рынке
						</p>
						<p className='information__item-subtitle mobile'>
							использования нашего производства определена нашими высокими стандартами
							качества, квалифицированными специалистами, многолетним опытом на рынке
						</p>
					</div>
					<picture>
						<source srcSet={'/information/rac-390.png'} media='(max-width:820px)' />

						<OptimizedImage
							width={580}
							height={210}
							src={'/information/rac.png'}
							alt='ТОРЕЛЕКТРО. ИНФОРМАЦИЯ. информация'
							className='information__img'
						/>
					</picture>
				</div>
				<div className='information__item'>
					<div className='information__texts'>
						<h2 className='information__item-title'>Надёжность</h2>
						<p className='information__item-subtitle'>
							всех наших электрических удлинителей,
							<br />
							подтверждается, как отзывами наших партнеров,
							<br />
							так и документами сертификации,
							<br />
							выданные и заверенные специализированными
							<br />
							государственными учреждениями
						</p>
						<p className='information__item-subtitle mobile'>
							всех наших электрических удлинителей, подтверждается, документами
							сертификации, заверенные специализированными государственными
							учреждениями
						</p>
					</div>
					<picture>
						<source srcSet={'/information/nad-390.png'} media='(max-width:820px)' />
						<OptimizedImage
							width={580}
							height={210}
							src={'/information/nad.png'}
							alt='ТОРЕЛЕКТРО. ИНФОРМАЦИЯ. информация'
							className='information__img'
						/>
					</picture>
				</div>
				<div className='information__item'>
					<div className='information__texts'>
						<h2 className='information__item-title'>Производительность</h2>
						<p className='information__item-subtitle'>
							всех наших электрических удлинителей,
							<br />
							определена силовыми характеристиками,
							<br />
							способными «выдерживать»
							<br />
							большинство видов инструментов
						</p>
						<p className='information__item-subtitle mobile'>
							всех наших электрических удлинителей, определена силовыми
							характеристиками,
							<br />
							способными «выдерживать» большинство видов инструментов
						</p>
					</div>
					<picture>
						<source srcSet={'/information/pro-390.png'} media='(max-width:820px)' />

						<OptimizedImage
							width={580}
							height={210}
							src={'/information/pro.png'}
							alt='ТОРЕЛЕКТРО. ИНФОРМАЦИЯ. информация'
							className='information__img'
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
