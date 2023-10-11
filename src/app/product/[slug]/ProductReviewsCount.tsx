import { IProduct } from '@/types/product.interface'
import ProductRating from '@/ui/catalog/product-item/ProductRating'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-scroll'

interface IProductReviews {
	product: IProduct
}

const ProductReviewCount = ({ product }: IProductReviews) => {
	const reviewsLength = product.reviews.length

	if (!reviewsLength) return null

	return (
		<div>
			<ProductRating product={product} />
			<div>
				<Link
					className="font-semibold text-sm cursor-pointer opacity-50"
					to="reviews"
					smooth={true}
					offset={-50}
					duration={1000}
				>
					{reviewsLength} Reviews <FiChevronRight className="inline" />
				</Link>
			</div>
		</div>
	)
}

export default ProductReviewCount
