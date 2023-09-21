import { ICartItem } from '@/types/cart.interface'

export interface ICartInitialState {
	items: ICartItem[]
}

export interface IAddToCardPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus'
}

export type TypeSize = 'SHORT' | 'TAIL' | 'GRANDE' | 'VENTI'

export interface IChangeSizePayload extends Pick<ICartItem, 'id'> {
	size: TypeSize
}
