import Home from '@/app/Home'
import { CategoryService } from '@/services/categoty.service'
import { ProductService } from '@/services/product/product.service'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	description:
		'Free shipping on millions of items. Get the best of Shopping and Entertainments with Bruli-Shop'
}

export const revalidate = 60

async function getProducts() {
	const { data: categories } = await CategoryService.getAll()
	const data = await ProductService.getAll({
		page: 1,
		perPage: 5,
		ratings: ''
	})

	return {
		data,
		categories
	}
}

export default async function Page() {
	const { data, categories } = await getProducts()
	return (
		<Home
			products={data.products}
			categories={categories}
			length={data.length}
		/>
	)
}
