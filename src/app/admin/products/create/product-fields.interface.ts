export interface IProductFields {
	name: string
	price: string
	description: string
	images: { fileUrl: string; fileKey: string }[]
	categoryId: number
}
