export const PRODUCTS = '/products'

export type TypeProductData = {
	name: string
	slug: string
	description?: string
	images: string[]
	price: number
	categoryId: number
}

export type TypeProductDataFilters = {
	sort?: EnumProbuctSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}

export enum EnumProbuctSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}
