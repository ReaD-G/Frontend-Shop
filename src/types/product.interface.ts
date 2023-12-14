import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	images: { fileUrl: string; fileKey: string }[]
	price: number
	createdAt: Date
	category: ICategory
	reviews: IReview[]
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}

export type TypePaginationProducts = {
	length: number
	products: IProduct[]
	categories?: ICategory[]
}
