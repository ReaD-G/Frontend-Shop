export interface IProductFields {
	name: string
	price: string | number
	slug: string
	description: string
	images: { fileUrl: string; fileKey: string }[]
	categoryId: number
}
