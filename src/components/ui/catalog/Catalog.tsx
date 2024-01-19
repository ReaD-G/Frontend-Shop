'use client'

import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

import { SwiperSlide } from 'swiper/react'
import Heading from '../Heading'
import Loader from '../Loader'
import ProductItem from './product-item/ProductItem'

import SwiperWrapper from '../SwiperWrapper'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
	isAll?: boolean
	isUpdate?: boolean
	removeHandler?: (id: number) => void
}

const Catalog: FC<ICatalog> = ({
	products,
	isLoading,
	title,
	isAll,
	removeHandler,
	isUpdate
}) => {
	if (isLoading) return <Loader />
	return (
		<section className="pb-6 sm:pb-8 container">
			<Heading className="mt-2 px-4 sm:px-0 text-2xl">{title}</Heading>
			{isAll ? (
				<div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 p-0 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-2">
					{products.map(product => (
						<ProductItem
							remove={removeHandler}
							isUpdate={isUpdate}
							product={product}
							key={product.id}
						/>
					))}
				</div>
			) : (
				<SwiperWrapper length={products.length}>
					{products.map(product => (
						<SwiperSlide
							key={product.id}
							className="py-5 px-2 items-center justify-center block"
						>
							<ProductItem product={product} />
						</SwiperSlide>
					))}
				</SwiperWrapper>
			)}
		</section>
	)
}

export default Catalog
