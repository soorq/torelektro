import { Modal, ModalContent, ModalTrigger } from '@/shared/ui/dialog';
import { TProduct } from './catalog.type';

export function CatalogCard({
	product,
	items,
	index,
}: {
	product: TProduct['items'][0];
	items: TProduct['items'];
	index: number;
}) {
	const renderArticle = (product: TProduct['items'][0]) => {
		const firstIndex = product.variants[0].options[0].article;
		const lastIndexLength = product.variants[product.variants.length - 1].options.length - 1;
		const lastIndex =
			product.variants[product.variants.length - 1].options[lastIndexLength].article;

		return (
			<div className='catalog__card-articles'>
				{firstIndex}-{lastIndex}
			</div>
		);
	};

	return (
		<div className='catalog__card swiper-slide'>
			<div className='catalog__card-wrapper'>
				<div className='catalog__card-img-wrapper'>
					<img className='catalog__card-img' src={product.images.main} />
				</div>
				<div className='catalog__card-info'>
					<p className='catalog__card-name'>{product.title} </p>
					<div className='catalog__card-chars'>
						<div className='catalog__char'>
							<p className='catalog__char-name'>
								сечение кабеля: <br />
							</p>
							<p className='catalog__char-value'>
								{product.variants.map(item => {
									return item.options[0].plugs + ' · ';
								})}
							</p>
						</div>
						<div className='catalog__char'>
							<p className='catalog__char-name'>
								длина кабеля: <br />
							</p>
							<p className='catalog__char-value'>
								от {product.variants[0].options[0].length} до{' '}
								{
									product.variants[0].options[
										product.variants[0].options.length - 1
									].length
								}
							</p>
						</div>
						<div className='catalog__char'>
							<p className='catalog__char-name'> защита кабеля:</p>
							<p className='catalog__char-value'>
								{product.variants[0].options[0].security} <span> · </span>
								{product.grounding == true ? 'с заземлением' : 'без заземления'}
							</p>
						</div>
					</div>
					<Modal>
						<ModalTrigger className='catalog__card-button'>Посмотреть</ModalTrigger>
						<ModalContent>
							{/* <ProductModal products={items} index={index} /> */}
						</ModalContent>
					</Modal>
				</div>
				{renderArticle(product)}
			</div>
		</div>
	);
}
