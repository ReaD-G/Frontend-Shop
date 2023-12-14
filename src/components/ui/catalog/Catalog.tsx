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
		<section className="py-12 sm-py-16 container">
			<Heading className="px-4 sm:px-0">{title}</Heading>
			<div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 p-0 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-4">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	)
}

export default Catalog
