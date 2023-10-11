import { NO_INDEX_PAGE } from '@/constants/app.constans'
import type { Metadata } from 'next'
import EditProduct from './EditProduct'

export const metadata: Metadata = {
	title: 'Edit product',
	...NO_INDEX_PAGE
}

export default async function EditProductPage({ params }) {
	return <EditProduct id={params.slug} />
}
