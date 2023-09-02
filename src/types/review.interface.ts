import { IUser } from './user.interface'

export interface IReview {
	id: number
	text: string
	rating: number
	user: IUser
	createdAt: Date
}
