import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import { IoCartOutline, IoCartSharp } from 'react-icons/io5'

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cortItem => cortItem.product.id === product.id
	)
	return (
		<button
			className="text-secondary"
			onClick={() =>
				currentElement
					? removeFromCart({ id: currentElement.id })
					: addToCart({ product, quantity: 1, price: product.price })
			}
		>
			{currentElement ? <IoCartSharp /> : <IoCartOutline />}
		</button>
	)
}

export default AddToCartButton
