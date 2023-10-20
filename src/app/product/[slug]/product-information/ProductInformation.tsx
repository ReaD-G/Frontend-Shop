import { IProduct } from '@/types/product.interface'
import FavoriteButton from '@/ui/catalog/product-item/FavoriteButton'
import { convertPrice } from '@/utils/convertPrice'
import AddToCartInline from './AddToCartInline'

interface IProductInformation {
	product: IProduct
}

export default function ProductInformation({ product }: IProductInformation) {
	return (
		<div className="border rounded-lg shadow-md p-6 relative h-max">
			<div className="text-3xl font-semibold">
				{convertPrice(product.price)}
			</div>
			<div className="mt-2">$6.88 Shipping</div>

			<span className=" opacity-50 mt-1 text-sm block">
				Sales taxes may apple at checkout
			</span>
			<div className="mt-4 text-sm">
				<span className=" opacity-50 mr-1">Delivery</span> Thursday, June 10
			</div>
			<AddToCartInline product={product} />

			<div className="absolute top-6 right-6 rounded-lg border p-1 items-center flex">
				<FavoriteButton productId={product.id} />
			</div>
		</div>
	)
}
