import Range from '@/ui/range/Range'
import { FC } from 'react'
import { useFilters } from '../../useFilters'
import FilterWraper from '../FilterWraper'

const PriceGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWraper title='Price from/to'>
			<Range
				max={2000}
				fromInitialValue={queryParams.minPrice}
				toInitialValue={queryParams.maxPrice}
				onChangeFromValue={value => updateQueryParams('minPrice', value)}
				onChangeToValue={value => updateQueryParams('maxPrice', value)}
			/>
		</FilterWraper>
	)
}

export default PriceGroup
