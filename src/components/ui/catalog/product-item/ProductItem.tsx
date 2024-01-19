import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'

import { useAuth } from '@/hooks/useAuth'
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import FavoriteButton from './FavoriteButton'

const ProductItem: FC<{
	product: IProduct
	isUpdate?: boolean
	remove?: (id: number) => void
}> = ({ product, isUpdate, remove }): JSX.Element => {
	const { user } = useAuth()
	const { push } = useRouter()

	const image = product.images.length
		? product.images[0].fileUrl
		: '/images/noImage.png'

	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		sortItem => sortItem.product.id === product.id
	)

	return (
		<Card
			fullWidth
			key={product.id}
			className="bg-transparent shadow-gray shadow-lg hover:shadow-lg rounded-lg hover:shadow-lilac"
		>
			<CardBody
				className="overflow-visible items-center cursor-pointer p-0 bg-white"
				onClick={() => push(`/product/${product.slug}`)}
			>
				<Image radius="lg" alt={image} src={image} isZoomed />
			</CardBody>
			<CardFooter className="overflow-hidden bottom-0 w-full bg-white shadow-small z-10">
				<div className="flex flex-col w-full ">
					<div className="flex flex-col w-full justify-between">
						<span className="text-semibold text-xl">{product.name}</span>
						<span className="text-default-500 text-bold text-lg">
							{convertPrice(product.price)}
						</span>
					</div>
					{user && (
						<div className="absolute bg-black/30 top-2 right-2 p-2 rounded-lg items-center flex">
							<FavoriteButton
								sizeIcon={25}
								className="text-lilac"
								product={product}
							/>
						</div>
					)}
					{user && !isUpdate && (
						<Button
							className="text-semibold text-black text-lg border-gray hover:border-lilac border-1.5 hover:bg-lilac hover:text-white"
							variant="bordered"
							radius="lg"
							size="md"
							onClick={() =>
								currentElement
									? removeFromCart({ id: currentElement.id })
									: addToCart({ product, quantity: 1, price: product.price })
							}
						>
							{currentElement ? 'Убрать из корзины' : 'Добавить в корзину'}
						</Button>
					)}
					{isUpdate && (
						<div className="flex flex-row justify-between">
							<Button
								className="text-semibold text-black text-lg border-gray hover:border-lilac border-1.5 hover:bg-lilac hover:text-white"
								variant="bordered"
								radius="lg"
								size="md"
								onClick={() => push(`${product.editUrl}`)}
							>
								Обновить
							</Button>
							<Button
								className="text-semibold text-black text-lg border-gray hover:border-lilac border-1.5 hover:bg-lilac hover:text-white"
								variant="bordered"
								radius="lg"
								size="md"
								onClick={() => remove(product.id)}
							>
								Удалить
							</Button>
						</div>
					)}
				</div>
			</CardFooter>
		</Card>
	)
}

export default ProductItem
