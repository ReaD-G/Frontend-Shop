import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'

import { useAuth } from '@/hooks/useAuth'
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import cn from 'classnames'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import FavoriteButton from './FavoriteButton'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	const { push } = useRouter()
	const { user } = useAuth()
	const [visibleIcon, setVisibleIcon] = useState(false)

	const image = product.images.length
		? product.images[0].fileUrl
		: '/images/noImage.png'

	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cortItem => cortItem.product.id === product.id
	)

	return (
		<div className="flex w-full items-center justify-center rounded-lg bg-transparent px-4 sm:px-0">
			<Card
				fullWidth
				key={product.id}
				className="bg-transparent shadow-sm shadow-white hover:shadow-lg hover:shadow-red-primary"
				onMouseOut={() => setVisibleIcon(false)}
				onMouseOver={() => setVisibleIcon(true)}
			>
				<CardBody
					className="overflow-visible items-center cursor-pointer p-0 bg-white"
					onClick={() => push(`/product/${product.slug}`)}
				>
					<div className="relative bg-white">
						<Image
							radius="lg"
							alt={image}
							className="w-[260px] md:h-[160px] sm:h-[220px] md:w-[260px] sm:w-[350px] object-contain"
							src={image}
						/>
					</div>
				</CardBody>
				<CardFooter className="overflow-hidden bottom-0 w-full bg-[#323232] shadow-small z-10">
					<div className="flex flex-row w-full justify-between">
						<div className="flex flex-col">
							<span>{product.name}</span>
							<span className="text-default-500">
								{convertPrice(product.price)}
							</span>
						</div>
						{user && (
							<div className="items-center flex justify-center rounded p-0.5  bg-white w-[30px] h-[30px]">
								<FavoriteButton productId={product.id} />
							</div>
						)}
					</div>
				</CardFooter>
			</Card>
			{user && (
				<div
					onMouseOutCapture={() => setVisibleIcon(false)}
					onMouseOverCapture={() => setVisibleIcon(true)}
					className={cn(
						visibleIcon ? 'flex' : 'hidden',
						'z-10 absolute overflow-hidden rounded  items-center justify-center'
					)}
				>
					<Button
						className="text-semibold text-white bg-black/50"
						variant="flat"
						color="default"
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
				</div>
			)}
		</div>
	)
}

export default ProductItem
