'use client'

import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import { Heading } from '@radix-ui/themes'
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
		<section className="mx-auto container px-2">
			<div className="flex md:flex-row flex-col w-full mt-4">
				<Heading className="text-2xl  justify-center mb-2 items-center flex md:hidden">
					{product.name}
				</Heading>
				<ProductsGallery images={product.images} />
				<div className="md:w-1/2 ml-4">
					<ProductInformation product={product} />
				</div>
			</div>
			<SimilarProducts similarProducts={similarProducts} />
			<ProductReviews reviews={product.reviews} productId={product.id} />
		</section>
	)
}
