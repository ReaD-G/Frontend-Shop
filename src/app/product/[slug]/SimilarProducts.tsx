import { IProduct } from '@/types/product.interface'
import ProductItem from '@/ui/catalog/product-item/ProductItem'
import { Heading } from '@radix-ui/themes'

interface ISimilarProducts {
	similarProducts: IProduct[]
}

export default function SimilarProducts({ similarProducts }: ISimilarProducts) {
	return (
		<div className="mt-20">
			<Heading className="mb-7">Похожие товары:</Heading>
			{similarProducts.length ? (
				<div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 p-0 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
					{similarProducts.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				<div>There are no products</div>
			)}
		</div>
	)
}
