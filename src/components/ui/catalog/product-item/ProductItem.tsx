import { IProduct } from '@/types/product.interface'
import AddToCartButton from '@/ui/catalog/product-item/AddToCartButton'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className="animate-scaleIn">
			<div className="bg-white rounded-xl relative overflow-hidden">
				<div className="absolute top-2 right-3 z-1">
					<FavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						width={225}
						height={225}
						src={product.images[0]}
						alt={product.name}
						className="block mx-auto"
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3 className="mt-2 font-semibold">{product.name}</h3>
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className="text-aqua text-xs mb-2"
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} isText />
			<div className=" text-2xl font-semibolt">
				{convertPrice(product.price)}
			</div>
		</div>
	)
}

export default ProductItem
