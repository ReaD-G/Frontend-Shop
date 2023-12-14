import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

interface IProductRating {
	product: IProduct
	isText?: boolean
}

const ProductRating: FC<IProductRating> = ({ product, isText = false }) => {
	const [rating] = useState(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)
	return (
		<div className="mb-2 flex items-center">
			{!!product.reviews.length && (
				<span className="mr-1">
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{
							display: 'inline-block'
						}}
						size={25}
						allowFraction
						transition
					/>
					<span className="text-[#FFBC0D] text-sm ml-1">{rating}</span>
				</span>
			)}
			{isText && (
				<span className="text-xs">({product.reviews.length} review)</span>
			)}
		</div>
	)
}

export default ProductRating
