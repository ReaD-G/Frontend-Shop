import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Checkout.module.scss'

const CheckoutItem: FC<{ product: IProduct }> = ({ product }) => {
	const image = product.images.length
		? product.images[0].fileUrl
		: '/images/noImage.png'
	return (
		<div className={styles.item}>
			<Image src={image} width={100} height={100} alt={product.name} />

			<div className={styles.row}>
				<div className={styles.information}>
					<div>{product.name}</div>
					<div>{product.category.name}</div>
				</div>
				<div className={styles.price}>{convertPrice(product.price)}</div>
			</div>
		</div>
	)
}

export default CheckoutItem
