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
		<div className="flex flex-col w-full mt-4 sm:mt-0">
			<div className="flex flex-row justify-between">
				<Heading className="text-2xl hidden md:flex">{product.name}</Heading>
				{user && (
					<div className="hidden ml-5 rounded-lg border p-1 items-center md:flex w-[45px] justify-center h-[45px]">
						<FavoriteButton
							sizeIcon={25}
							className="text-lilac"
							product={product}
						/>
					</div>
				)}
			</div>
			<ProductReviewCount product={product} />
			<div className="flex flex-col items-center justify-between space-y-4 border-b py-4 sm:flex-row sm:space-y-0">
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
				<span className="text-lg font-medium">Описание:</span>
				<div
					dangerouslySetInnerHTML={{ __html: product.description }}
					className="flow-root"
				/>
			</div>
		</div>
	)
}
