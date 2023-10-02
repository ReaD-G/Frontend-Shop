'use client'

import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import { Heading } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import ProductsGallery from './ProductGallery'
import ProductReviewCount from './ProductReviewsCount'
import SimilarProducts from './SimilarProducts'
import ProductInformation from './product-information/ProductInformation'
import ProductReviews from './product-reviews/ProductReviews'

interface IProductPage {
	initialProduct: IProduct
	similarProducts: IProduct[]
	slug?: string
}

export default function Product({
	initialProduct,
	similarProducts,
	slug = ''
}: IProductPage) {
	const { data: product } = useQuery(
		['get product', initialProduct.id],
		() => ProductService.getBySlug(slug),
		{
			initialData: initialProduct,
			enabled: !!slug
		}
	)

	return (
		<>
			<Heading className="mb-1">{product.name}</Heading>
			<ProductReviewCount product={product} />
			<div
				className="grid gap-12 mt-6"
				style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
			>
				<ProductsGallery images={product.images} />
				<div className="opacity-80 font-light">
					<div className="font-semibold mb-1">Description:</div>
					{product.description}
				</div>
				<ProductInformation product={product} />
			</div>
			<SimilarProducts similarProducts={similarProducts} />
			<ProductReviews reviews={product.reviews} productId={product.id} />
		</>
	)
}
