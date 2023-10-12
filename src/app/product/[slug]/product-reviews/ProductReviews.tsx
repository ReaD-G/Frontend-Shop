import { useAuth } from '@/hooks/useAuth'
import { IReview } from '@/types/review.interface'
import Heading from '@/ui/Heading'
import ModalDialog from '@/ui/modal/ModalDialog'
import { useDisclosure } from '@nextui-org/react'
import LeaveReviewForm from './LeaveReviewFrom'
import ReviewItem from './ReviewItem'

interface IProductReviews {
	reviews: IReview[]
	productId: number
}
export default function ProductReviews({
	reviews,
	productId
}: IProductReviews) {
	const { isOpen, onOpenChange, onClose } = useDisclosure()
	const { user } = useAuth()

	return (
		<section id="reviews" className="mt-20">
			<div className="mb-9">
				<Heading className="mb-3">Reviews:</Heading>
				{user && (
					<button className="text-aqua" onClick={onOpenChange}>
						Leave a review
					</button>
				)}
			</div>

			<div className="grid grid-cols-4 gap-10">
				{reviews.map(review => (
					<ReviewItem key={review.id} review={review} />
				))}
			</div>

			<ModalDialog isOpen={isOpen} onClose={onClose}>
				<LeaveReviewForm productId={productId} />
			</ModalDialog>
		</section>
	)
}
