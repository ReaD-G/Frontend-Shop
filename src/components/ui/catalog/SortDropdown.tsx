import { EnumProbuctSort } from '@/services/product/product.types'
import { Dispatch, FC, SetStateAction } from 'react'

interface ISortDropdown {
	sortType: EnumProbuctSort
	setSortType: Dispatch<SetStateAction<EnumProbuctSort>>
}

const SortDropdown: FC<ISortDropdown> = ({ sortType, setSortType }) => {
	return (
		<div className="text-right mb-5">
			<select
				value={sortType}
				onChange={e => setSortType(e.target.value as any)}
				className=" appearance-none border-gray py-1 px-2 bg-white"
			>
				{(
					Object.keys(EnumProbuctSort) as Array<keyof typeof EnumProbuctSort>
				).map(key => {
					return (
						<option key={key} value={EnumProbuctSort[key]}>
							{EnumProbuctSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
