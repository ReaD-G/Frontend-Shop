'use client'

import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import Heading from '@/ui/Heading'
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
		<div className="flex flex-col sm:px-4">
			<Heading className="mb-1 mt-4 items-start w-full">{product.name}</Heading>
			<ProductReviewCount product={product} />
			<div className="flex flex-row mt-6">
				<ProductsGallery images={product.images} />
				<ProductInformation product={product} />
			</div>
			<div className="opacity-80 font-light">
				<div className="font-semibold mb-1">Description:</div>
				{product.description}
			</div>
			<SimilarProducts similarProducts={similarProducts} />
			<ProductReviews reviews={product.reviews} productId={product.id} />
		</div>
	)
}
