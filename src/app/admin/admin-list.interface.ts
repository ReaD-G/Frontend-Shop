import { ICategory } from '@/types/category.interface'
import { IReview } from '@/types/review.interface'

export interface IListItem {
	id: number
	editUrl?: string
	viewUrl?: string
	createUrl?: string
	items: string[]
}

export interface IListReviews {
	id: number
	name: string
	text: string
	rating: string
}

export interface IListProducts {
	id: number
	editUrl?: string
	viewUrl?: string
	createUrl?: string
	name: string
	slug: string
	description: string
	images: { fileUrl: string; fileKey: string }[]
	price: number
	createdAt: Date
	category: ICategory
	reviews: IReview[]
}

export interface IAdminListItem {
	listItem: IListItem
	removeHandler?: () => void
}
