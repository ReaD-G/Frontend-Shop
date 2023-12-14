import { useAuth } from '@/hooks/useAuth'
import { IProduct } from '@/types/product.interface'
import FavoriteButton from '@/ui/catalog/product-item/FavoriteButton'
import { convertPrice } from '@/utils/convertPrice'
import { Heading } from '@radix-ui/themes'
import ProductReviewCount from '../ProductReviewsCount'
import AddToCartInline from './AddToCartInline'

interface IProductInformation {
	product: IProduct
}

export default function ProductInformation({ product }: IProductInformation) {
	const { user } = useAuth()
	return (
		<>
			<div className="flex flex-row justify-between">
				<Heading className="sm:text-2xl">{product.name}</Heading>
				{user && (
					<div className="ml-5 rounded-lg border p-1 items-center flex w-[45px] justify-center h-[45px]">
						<FavoriteButton productId={product.id} />
					</div>
				)}
			</div>
			<ProductReviewCount product={product} />
			<div className="sm:mt-10 flex flex-col items-center justify-between space-y-4 border-b py-4 sm:flex-row sm:space-y-0">
				<div className="flex items-end">
					<h1 className="xl:text-3xl text-2xl font-semibold">
						{convertPrice(product.price)}
					</h1>
				</div>
				{user && (
					<AddToCartInline
						className="whitespace-pre-line w-full h-12 lg:whitespace-normal"
						product={product}
					/>
				)}

				{/* Update DB for delivery !!! */}
				{/* <ul className="mt-8 space-y-2">
				<li className="flex items-center text-left text-sm font-medium">
					{product.description}
				</li>
				<li className="flex items-center text-left text-sm font-medium">
					{`Cancel anytime`}
				</li>
			</ul> */}
			</div>
			<div className="lg:col-span-3">
				<div className="border-b">
					<span className="text-sm font-medium text-gray">Описание</span>
				</div>
				<div className="mt-3 flow-root sm:mt-6">{product.description}</div>
			</div>
		</>
	)
}
