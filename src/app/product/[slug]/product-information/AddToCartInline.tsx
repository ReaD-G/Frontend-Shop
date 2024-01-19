import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import { Button } from '@nextui-org/react'
import cn from 'classnames'
import { FC } from 'react'

const AddToCartInline: FC<{ product: IProduct; className?: string }> = ({
	product,
	className
}) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div className="mt-1.5 lg:pl-5 inline-block ">
			<Button
				className="text-semibold text-black text-lg border-gray hover:border-lilac border-1.5 hover:bg-lilac hover:text-white"
				variant="bordered"
				radius="lg"
				size="md"
				fullWidth
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
								product,
								quantity: 1,
								price: product.price
							})
				}
			>
				{currentElement ? 'Удалить из карзины' : 'Добавить в корзину'}
			</Button>
		</div>
	)
}

export default AddToCartInline
