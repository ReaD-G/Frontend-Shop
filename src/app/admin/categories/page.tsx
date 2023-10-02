import { NO_INDEX_PAGE } from '@/constants/app.constans'
import type { Metadata } from 'next'
import Categories from './Categories'

export const metadata: Metadata = {
	title: 'Category',
	...NO_INDEX_PAGE
}

export default function CategoriesPage() {
	return <Categories />
}
