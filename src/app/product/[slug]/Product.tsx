'use client'

import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import ProductsGallery from './ProductGallery'
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
		<section className="mx-auto max-w-screen-xl">
			<div className="container mx-auto px-4">
				<div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
					<div className="lg:col-span-3 lg:row-end-1">
						<ProductsGallery images={product.images} />
					</div>
					<div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
						<ProductInformation product={product} />
					</div>
				</div>
				<SimilarProducts similarProducts={similarProducts} />
				<ProductReviews reviews={product.reviews} productId={product.id} />
			</div>
		</section>
	)
}
