import { NO_INDEX_PAGE } from '@/constants/app.constans'
import type { Metadata } from 'next'
import CreateProduct from './CreateProduct'

export const metadata: Metadata = {
	title: 'Edit product',
	...NO_INDEX_PAGE
}

export default async function CreateProductPage() {
	return <CreateProduct />
}
