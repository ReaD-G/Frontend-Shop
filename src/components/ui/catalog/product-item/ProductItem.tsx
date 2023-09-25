import { IProduct } from '@/types/product.interface'
import AddToCartButton from '@/ui/catalog/product-item/AddToCartButton'
import { convertPrice } from '@/utils/convertPrice'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import ProductRating from './ProductRating'

const DynamicFavoriteButton = dynamic(() => import('./FavoriteButton'), {
	ssr: false
})

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	console.log(product)
	return (
		<div className="animate-scaleIn">
			<div className="bg-white rounded-xl relative overflow-hidden">
				<div className="absolute top-2 right-3 z-10">
					<DynamicFavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`category/${product.slug}`}>
					<Image
						width={225}
						height={225}
						src={product.images[0]}
						alt={product.name}
					/>
				</Link>
			</div>
			<Link href={`category/${product.slug}`}>
				<h3 className="mt-2 font-semibold">{product.name}</h3>
			</Link>
			<Link
				href={`category/${product.category.slug}`}
				className="text-aqua text-xs mb-2"
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} />
			<div className=" text-2xl font-semibolt">
				{convertPrice(product.price)}
			</div>
		</div>
	)
}

export default ProductItem
