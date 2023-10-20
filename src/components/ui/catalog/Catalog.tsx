'use client'

import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Heading from '../Heading'
import Loader from '../Loader'
import ProductItem from './product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <Loader />
	return (
		<section className="container max-sm:mt-12 mb-10">
			<Heading>{title}</Heading>
			<div className="grid grid-cols-1 place-items-center sm:grid-cols-3 p-0 lg:grid-cols-4 gap-4">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	)
}

export default Catalog
