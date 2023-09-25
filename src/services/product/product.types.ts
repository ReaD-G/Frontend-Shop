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
	sort?: EnumProbuctSort | string
	searchTerm?: string
	page?: string | number
	perPage?: string | number
	ratings?: string
	minPrice?: string
	maxPrice?: string
	categoryId?: string
}

export enum EnumProbuctSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}
