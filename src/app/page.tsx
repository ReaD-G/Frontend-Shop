import { CategoryService } from '@/services/categoty.service'
import { ProductService } from '@/services/product/product.service'
import type { Metadata } from 'next'
import Dashboard from './Dashboard'

export const metadata: Metadata = {
	description:
		'Free shipping on millions of items. Get the best of Shopping and Entertainments with Bruli-Shop'
}

export const revalidate = 60

async function getProducts() {
	const { data: categories } = await CategoryService.getAll()
	let menProducts = { products: [], length: 0 }
	let womenProducts = { products: [], length: 0 }
	if (categories) {
		menProducts = await ProductService.getAll({
			page: 1,
			perPage: 5,
			categoryId: categories[0].id.toString()
		})
		womenProducts = await ProductService.getAll({
			page: 1,
			perPage: 5,
			categoryId: categories[1].id.toString()
		})
	}
	const newProducts = await ProductService.getAll({
		page: 1,
		perPage: 5
	})

	return {
		menProducts,
		womenProducts,
		newProducts
	}
}

export default async function Page() {
	const { menProducts, womenProducts, newProducts } = await getProducts()
	return (
		<Dashboard
			newProducts={newProducts.products}
			menProducts={menProducts.products}
			womenProducts={womenProducts.products}
		/>
	)
}
