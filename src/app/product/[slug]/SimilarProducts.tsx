import { IProduct } from '@/types/product.interface'
import SwiperWrapper from '@/ui/SwiperWrapper'
import ProductItem from '@/ui/catalog/product-item/ProductItem'
import { Heading } from '@radix-ui/themes'
import { SwiperSlide } from 'swiper/react'

interface ISimilarProducts {
	similarProducts: IProduct[]
}

export default function SimilarProducts({ similarProducts }: ISimilarProducts) {
	return (
		<>
			<Heading className="mt-10">Похожие товары:</Heading>
			<SwiperWrapper length={similarProducts.length}>
				{similarProducts.map(product => (
					<SwiperSlide key={product.id} className="py-5 px-2">
						<ProductItem product={product} />
					</SwiperSlide>
				))}
			</SwiperWrapper>
		</>
	)
}
