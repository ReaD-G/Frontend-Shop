import { ICartItem } from '@/types/cart.interface'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Cart.module.scss'
import CartAction from './cart-actions/CartActions'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	const image = item.product.images.length
		? item.product.images[0].fileUrl
		: '/images/noImage.png'
	return (
		<div className={styles.item}>
			<Image src={image} width={100} height={100} alt={item.product.name} />

			<div>
				<div className={styles.name}>{item.product.name}</div>
				<div className={styles.price}>{convertPrice(item.product.price)}</div>
				<CartAction item={item} />
			</div>
		</div>
	)
}

export default CartItem
