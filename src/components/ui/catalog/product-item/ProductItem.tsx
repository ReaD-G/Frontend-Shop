import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'

import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	const { push } = useRouter()
	const image = product.images.length
		? product.images[0].fileUrl
		: '/images/noImage.png'

	return (
		<Card isFooterBlurred shadow="lg" className="w-[225px]">
			<CardHeader className="flex flex-col overflow-hidden absolute z-20">
				<div className="flex flex-row w-full justify-between items-center">
					<h4 className="font-bold text-large">{product.name}</h4>
					<div className="bg-white items-center  flex justify-center rounded p-1">
						<FavoriteButton productId={product.id} />
					</div>
				</div>
			</CardHeader>
			<CardBody
				className="overflow-visible p-0 items-center cursor-pointer"
				onClick={() => push(`/product/${product.slug}`)}
			>
				<Image
					shadow="sm"
					radius="lg"
					isBlurred
					isZoomed
					height={300}
					width={250}
					src={image}
					alt={product.name}
					className="w-full h-auto object-cover"
				/>
			</CardBody>
			<CardFooter className="flex flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<div className="flex w-full items-center flex-row justify-between">
					<p className="text-base font-semibold text-white/80">
						{convertPrice(product.price)}
					</p>
					{/* <Button
						className="text-tiny text-white bg-black/20"
						variant="flat"
						color="default"
						radius="lg"
						size="sm"
					>
						Add to Cart
					</Button> */}
					<AddToCartButton product={product} />
				</div>
			</CardFooter>
		</Card>
	)
}

export default ProductItem
