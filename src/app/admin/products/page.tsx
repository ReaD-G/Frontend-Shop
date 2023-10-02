import { NO_INDEX_PAGE } from '@/constants/app.constans'
import type { Metadata } from 'next'
import Products from './Products'

export const metadata: Metadata = {
	title: 'Products',
	...NO_INDEX_PAGE
}

export default function ProductsPage() {
	return <Products />
}
