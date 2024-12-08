//  @ts-nocheck
'use client';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ShoppingCart } from '@phosphor-icons/react/dist/ssr';
import type { Swiper as TSwiper } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { TProduct } from './catalog.type';
import { useState, useRef } from 'react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import './catalog.card.scss';
import { OptimizedImage } from '@/shared/ui/optimize-image';

export function ProductModal({ products, index }: { products: TProduct['items']; index: number }) {
	const sliderRef = useRef<TSwiper>(null);
	const [number, setNumber] = useState(index);
	const [tab, setTab] = useState(0);

	const nextElem = (products: TProduct['items'], index: number) => {
		setNumber(index);
		setTab(0);
		if (number == products.length - 1) {
			setNumber(0);
		}
		if (sliderRef.current) {
			sliderRef.current.slideTo(0);
		}
	};
	const prevElem = (products: TProduct['items'], index: number) => {
		setNumber(index);
		setTab(0);

		if (index < 0) {
			setNumber(products.length - 1);
		}
		if (sliderRef.current) {
			sliderRef.current.slideTo(0);
		}
	};
	console.log(products[number].variants[0].options);
	return (
		<div className='product__card'>
			<div className='product__card-header'>
				<div className='product__card-variants'>
					{products[number].variants.map((variant, index) => {
						return (
							<button
								key={`product_variant_${variant.variant}-${index}`}
								className={
									tab == index
										? 'product__card-variant active'
										: 'product__card-variant'
								}
								onClick={() => setTab(index)}
							>
								<>
									<span className='product__card-variant-value'>
										{variant.variant} Вт
									</span>
									<span className='product__card-variant-name'>с мощностью</span>
								</>
							</button>
						);
					})}
				</div>
				<div className='product__nav'>
					<div className='product__prev-variant'>
						<div className='product__prev-variant-info'>
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='product__prev-variant-info-icon'
							>
								<path
									d='M10.0576 1.54187C8.45065 1.54187 6.87976 2.01839 5.54361 2.91118C4.20746 3.80397 3.16606 5.07292 2.5511 6.55757C1.93614 8.04222 1.77524 9.67588 2.08874 11.252C2.40225 12.8281 3.17608 14.2758 4.31238 15.4121C5.44868 16.5484 6.89642 17.3222 8.47251 17.6357C10.0486 17.9493 11.6823 17.7884 13.1669 17.1734C14.6516 16.5584 15.9205 15.517 16.8133 14.1809C17.7061 12.8447 18.1826 11.2738 18.1826 9.66687C18.1803 7.51268 17.3236 5.44738 15.8003 3.92414C14.2771 2.4009 12.2118 1.54414 10.0576 1.54187ZM9.43262 5.91687C9.43262 5.75111 9.49847 5.59214 9.61568 5.47493C9.73289 5.35772 9.89186 5.29187 10.0576 5.29187C10.2234 5.29187 10.3824 5.35772 10.4996 5.47493C10.6168 5.59214 10.6826 5.75111 10.6826 5.91687V10.2919C10.6826 10.4576 10.6168 10.6166 10.4996 10.7338C10.3824 10.851 10.2234 10.9169 10.0576 10.9169C9.89186 10.9169 9.73289 10.851 9.61568 10.7338C9.49847 10.6166 9.43262 10.4576 9.43262 10.2919V5.91687ZM10.0576 14.0419C9.8722 14.0419 9.69094 13.9869 9.53677 13.8839C9.3826 13.7809 9.26244 13.6344 9.19148 13.4631C9.12053 13.2918 9.10196 13.1033 9.13813 12.9215C9.17431 12.7396 9.2636 12.5726 9.39471 12.4415C9.52582 12.3103 9.69287 12.2211 9.87472 12.1849C10.0566 12.1487 10.2451 12.1673 10.4164 12.2382C10.5877 12.3092 10.7341 12.4294 10.8371 12.5835C10.9401 12.7377 10.9951 12.9189 10.9951 13.1044C10.9951 13.353 10.8963 13.5915 10.7205 13.7673C10.5447 13.9431 10.3063 14.0419 10.0576 14.0419Z'
									fill='white'
								/>
							</svg>

							<div className='product__prev-variant-info-texts'>
								<p className='product__prev-variant-info-text'>
									предыдущая категория электрических удлинителей
								</p>
								<p className='product__prev-variant-info-text'>
									нажмите, чтобы перейти
								</p>
							</div>
						</div>
						<svg
							width='30'
							height='30'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='product__prev-variant-icon'
							onClick={() => {
								prevElem(products, number - 1);
							}}
						>
							<path
								d='M15 2.8125C12.5895 2.8125 10.2332 3.52728 8.22899 4.86646C6.22477 6.20564 4.66267 8.10907 3.74022 10.336C2.81778 12.563 2.57643 15.0135 3.04668 17.3777C3.51694 19.7418 4.67769 21.9134 6.38214 23.6179C8.08659 25.3223 10.2582 26.4831 12.6223 26.9533C14.9865 27.4236 17.437 27.1822 19.664 26.2598C21.8909 25.3373 23.7944 23.7752 25.1335 21.771C26.4727 19.7668 27.1875 17.4105 27.1875 15C27.1841 11.7687 25.899 8.67076 23.6141 6.3859C21.3292 4.10104 18.2313 2.81591 15 2.8125ZM18.4758 15.6633L13.7883 20.3508C13.7012 20.4379 13.5978 20.507 13.484 20.5541C13.3702 20.6013 13.2482 20.6255 13.125 20.6255C13.0018 20.6255 12.8798 20.6013 12.766 20.5541C12.6522 20.507 12.5488 20.4379 12.4617 20.3508C12.3746 20.2637 12.3055 20.1603 12.2584 20.0465C12.2112 19.9327 12.187 19.8107 12.187 19.6875C12.187 19.5643 12.2112 19.4423 12.2584 19.3285C12.3055 19.2147 12.3746 19.1113 12.4617 19.0242L16.4871 15L12.4617 10.9758C12.2858 10.7999 12.187 10.5613 12.187 10.3125C12.187 10.0637 12.2858 9.82513 12.4617 9.64922C12.6376 9.4733 12.8762 9.37448 13.125 9.37448C13.3738 9.37448 13.6124 9.4733 13.7883 9.64922L18.4758 14.3367C18.563 14.4238 18.6321 14.5272 18.6793 14.641C18.7265 14.7548 18.7507 14.8768 18.7507 15C18.7507 15.1232 18.7265 15.2452 18.6793 15.359C18.6321 15.4728 18.563 15.5762 18.4758 15.6633Z'
								fill='#FF3D00'
							/>
						</svg>
					</div>
					<div className='product__next-variant'>
						<div className='product__next-variant-info'>
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='product__next-variant-info-icon'
							>
								<path
									d='M10.0576 1.54187C8.45065 1.54187 6.87976 2.01839 5.54361 2.91118C4.20746 3.80397 3.16606 5.07292 2.5511 6.55757C1.93614 8.04222 1.77524 9.67588 2.08874 11.252C2.40225 12.8281 3.17608 14.2758 4.31238 15.4121C5.44868 16.5484 6.89642 17.3222 8.47251 17.6357C10.0486 17.9493 11.6823 17.7884 13.1669 17.1734C14.6516 16.5584 15.9205 15.517 16.8133 14.1809C17.7061 12.8447 18.1826 11.2738 18.1826 9.66687C18.1803 7.51268 17.3236 5.44738 15.8003 3.92414C14.2771 2.4009 12.2118 1.54414 10.0576 1.54187ZM9.43262 5.91687C9.43262 5.75111 9.49847 5.59214 9.61568 5.47493C9.73289 5.35772 9.89186 5.29187 10.0576 5.29187C10.2234 5.29187 10.3824 5.35772 10.4996 5.47493C10.6168 5.59214 10.6826 5.75111 10.6826 5.91687V10.2919C10.6826 10.4576 10.6168 10.6166 10.4996 10.7338C10.3824 10.851 10.2234 10.9169 10.0576 10.9169C9.89186 10.9169 9.73289 10.851 9.61568 10.7338C9.49847 10.6166 9.43262 10.4576 9.43262 10.2919V5.91687ZM10.0576 14.0419C9.8722 14.0419 9.69094 13.9869 9.53677 13.8839C9.3826 13.7809 9.26244 13.6344 9.19148 13.4631C9.12053 13.2918 9.10196 13.1033 9.13813 12.9215C9.17431 12.7396 9.2636 12.5726 9.39471 12.4415C9.52582 12.3103 9.69287 12.2211 9.87472 12.1849C10.0566 12.1487 10.2451 12.1673 10.4164 12.2382C10.5877 12.3092 10.7341 12.4294 10.8371 12.5835C10.9401 12.7377 10.9951 12.9189 10.9951 13.1044C10.9951 13.353 10.8963 13.5915 10.7205 13.7673C10.5447 13.9431 10.3063 14.0419 10.0576 14.0419Z'
									fill='white'
								/>
							</svg>

							<div className='product__next-variant-info-texts'>
								<p className='product__next-variant-info-text'>
									следующая категория электрических удлинителей
								</p>
								<p className='product__next-variant-info-text'>
									нажмите, чтобы перейти
								</p>
							</div>
						</div>
						<svg
							width='30'
							height='30'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='product__next-variant-icon'
							onClick={() => {
								nextElem(products, number + 1);
							}}
						>
							<path
								d='M15 2.8125C12.5895 2.8125 10.2332 3.52728 8.22899 4.86646C6.22477 6.20564 4.66267 8.10907 3.74022 10.336C2.81778 12.563 2.57643 15.0135 3.04668 17.3777C3.51694 19.7418 4.67769 21.9134 6.38214 23.6179C8.08659 25.3223 10.2582 26.4831 12.6223 26.9533C14.9865 27.4236 17.437 27.1822 19.664 26.2598C21.8909 25.3373 23.7944 23.7752 25.1335 21.771C26.4727 19.7668 27.1875 17.4105 27.1875 15C27.1841 11.7687 25.899 8.67076 23.6141 6.3859C21.3292 4.10104 18.2313 2.81591 15 2.8125ZM18.4758 15.6633L13.7883 20.3508C13.7012 20.4379 13.5978 20.507 13.484 20.5541C13.3702 20.6013 13.2482 20.6255 13.125 20.6255C13.0018 20.6255 12.8798 20.6013 12.766 20.5541C12.6522 20.507 12.5488 20.4379 12.4617 20.3508C12.3746 20.2637 12.3055 20.1603 12.2584 20.0465C12.2112 19.9327 12.187 19.8107 12.187 19.6875C12.187 19.5643 12.2112 19.4423 12.2584 19.3285C12.3055 19.2147 12.3746 19.1113 12.4617 19.0242L16.4871 15L12.4617 10.9758C12.2858 10.7999 12.187 10.5613 12.187 10.3125C12.187 10.0637 12.2858 9.82513 12.4617 9.64922C12.6376 9.4733 12.8762 9.37448 13.125 9.37448C13.3738 9.37448 13.6124 9.4733 13.7883 9.64922L18.4758 14.3367C18.563 14.4238 18.6321 14.5272 18.6793 14.641C18.7265 14.7548 18.7507 14.8768 18.7507 15C18.7507 15.1232 18.7265 15.2452 18.6793 15.359C18.6321 15.4728 18.563 15.5762 18.4758 15.6633Z'
								fill='#FF3D00'
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className='product__card-wrapper'>
				<div className='product__card-img-wrapper'>
					<div className='product__card-img-slider swiper'>
						<div className='product__card-img-slider-wrapper swiper-wrapper'>
							<Swiper
								loop={true}
								spaceBetween={20}
								modules={[Navigation, Pagination, Autoplay]}
								breakpoints={{ 820: { slidesPerView: 1, width: 470 } }}
								className='product__card-img-slider'
								wrapperClass='product__card-img-slider-wrapper'
								navigation={{
									enabled: true,
									nextEl: '.product__slider-right',
									prevEl: '.product__slider-left',
								}}
								pagination={{ clickable: true }}
								autoplay={{
									delay: 3000,
									disableOnInteraction: false,
								}}
								onSwiper={swiper => {
									sliderRef.current = swiper;
								}}
							>
								{Object.entries(products[number].images.gallery[0]).map(
									([key, val]) => (
										<SwiperSlide
											key={`product__card-slide-img-${key}`}
											className='product__card-slide'
										>
											<OptimizedImage
												src={val}
												alt='ТОРЕЛЕКТРО. УДЛИННИТЕЛИ. удлиннители'
												width={400}
												height={200}
												priority
												className='product__card-img'
											/>
										</SwiperSlide>
									),
								)}
							</Swiper>
						</div>
						<div className='swiper-pagination'></div>
						<div className='product__slider-prev'>
							<OptimizedImage
								alt='ТОРЕЛЕКТРО. УДЛИННИТЕЛИ. удлиннители'
								width={400}
								height={200}
								priority
								className='product__slider-left'
								src={'product/slider-right.svg'}
							/>
						</div>
					</div>
					<div className='product__slider-next'>
						<OptimizedImage
							alt='ТОРЕЛЕКТРО. УДЛИННИТЕЛИ. удлиннители'
							width={400}
							height={200}
							priority
							className='product__slider-right'
							src={'product/slider-right.svg'}
						/>
					</div>
					<div className='product__img-stickers'>
						<div className='product__img-stickers-items'>
							{Object.entries(products[number].variants[tab].options[0]).map(
								([key, val]) => {
									if (key === 'length') {
										return (
											<div className='product__img-sticker' key={key}>
												от {val} до{' '}
												{
													products[number].variants[tab].options[
														products[number].variants[tab].options
															.length - 1
													].length
												}
											</div>
										);
									}
									if (
										key !== 'article' &&
										key !== 'security' &&
										key !== 'power' &&
										key !== 'grounding'
									) {
										return (
											<div className='product__img-sticker' key={key}>
												{val}
											</div>
										);
									}

									if (key === 'grounding') {
										return (
											<div className='product__img-sticker' key={key}>
												{products[number].variants[tab].options[0].grounding
													? 'с заземлением'
													: 'без заземления'}
											</div>
										);
									}

									return null;
								},
							)}
							{products[number].temp && (
								<div className='product__card-sticker'>{products[number].temp}</div>
							)}
							{products[number].copper && (
								<div className='product__card-material'>
									{products[number].copper}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='product__card-info'>
					<div className='product__card-info-wrapper'>
						<div className='product__card-info-texts'>
							<div className='product__card-info-description'>
								<span className='product__card-title'>название товара</span>
								<h2 className='product__name'>{products[number].title}</h2>
							</div>
							<div className='product__card-info-description'>
								<span className='product__card-title'>
									краткое описание категории товара
								</span>

								<h2
									className='product__description'
									dangerouslySetInnerHTML={{
										__html: products[number].description,
									}}
								></h2>
								<h2
									className='product__description mobile'
									dangerouslySetInnerHTML={{
										__html: products[number].mobiledescrip,
									}}
								></h2>
							</div>
						</div>

						<button className='product__card-button'>Бесплатная консультация</button>

						{products[number].isProfessional ? (
							<div className='product__stickers'>
								{products[number].isProfessional && (
									<div className='product__sticker'>
										выбор настоящих профессионалов
									</div>
								)}
								{products[number].isProfessional && products[number].temp ? (
									<div className='product__sticker'>{products[number].temp}</div>
								) : null}
							</div>
						) : null}

						<div className='product__card-options'>
							{products[number].variants[tab].options.map((item, index) => {
								return (
									<div
										className='product__options'
										key={`product-options-${item.article}-${index}`}
									>
										<div className='product__option'>{item.article}</div>
										<div className='product__option'>{item.plugs}</div>
										<div className='product__option'>{item.length}</div>
										<div className='product__option'>{item.security}</div>
										<div className='product__option'>{item.power}</div>
										<div className='product__option'>{item.socket}</div>
										<div className='product__option'>
											{item.grounding == true
												? 'с заземлением'
												: 'без заземления'}
										</div>
										<div className='product__add'>
											<ShoppingCart
												size={15}
												className='product__add-icon'
												weight='fill'
												color='#fff'
											/>
										</div>
									</div>
								);
							})}
						</div>
						<div className='product__top-stickers'>
							{products[number].copper && (
								<div className='product__card-material'>
									{products[number].copper}
								</div>
							)}
							{!products[number].isProfessional
								? products[number].temp && (
										<div className='product__card-stickers'>
											<div className='product__card-sticker'>
												{products[number].temp}
											</div>
										</div>
									)
								: null}
						</div>
					</div>
					<p className='product__disclaimer'>
						вся информация о товарах и об услугах, носит исключительно информационный
						характер
					</p>
				</div>
			</div>
		</div>
	);
}
