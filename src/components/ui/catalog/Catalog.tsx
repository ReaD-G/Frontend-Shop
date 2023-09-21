import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Heading from '../Heading'
import Loader from '../Loader'
import Button from '../button/Button'
import SortDropdown from './SortDropdown'
import ProductItem from './product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
	isPagination?: boolean
}

const Catalog: FC<ICatalog> = ({
	products,
	isLoading,
	title,
	isPagination = false
}) => {
	if (isLoading) return <Loader />

	return (
		<section>
			{title && <Heading className="mb-5">{title}</Heading>}
			{products.length ? (
				<>
					<div className="grid grid-cols-4 gap-10">
						{products.map(product => (
							<ProductItem product={product} key={product.id} />
						))}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Catalog
