import { ICartItem } from "./cart.interface"
import { IUser } from "./user.interface"

export enum OrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

export interface IOrder {
	id: number
	createdAt: string
	items: ICartItem[]
	status: OrderStatus
	user: IUser
	total: number
}
