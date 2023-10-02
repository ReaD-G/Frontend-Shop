import Checkbox from '@/ui/checkbox/Checkbox'
import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'
import { useFilters } from '../../useFilters'
import FilterWraper from '../FilterWraper'
import { RATING_VARIANTS } from './ratings-variants.data'
import { updateRatingsQuery } from './update-ratings-query'

const RatingGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWraper title="Number of reviews">
			{RATING_VARIANTS.map(rating => (
				<Checkbox
					isChecked={queryParams.ratings?.includes(rating.toString())}
					onClick={() =>
						updateQueryParams(
							'ratings',
							updateRatingsQuery(queryParams.ratings, rating.toString())
						)
					}
					key={rating}
					className="mb-2 text-sm"
				>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{
							display: 'inline-block'
						}}
						size={20}
						transition
					/>
				</Checkbox>
			))}
		</FilterWraper>
	)
}

export default RatingGroup
