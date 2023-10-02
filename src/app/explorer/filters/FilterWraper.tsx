import { FC, PropsWithChildren } from 'react'

interface IFilterWraper {
	title: string
}

const FilterWraper: FC<PropsWithChildren<IFilterWraper>> = ({
	title,
	children
}) => {
	return (
		<div className="mb-6">
			<div className="mb-3 font-semibold">{title}</div>
			<div>{children}</div>
		</div>
	)
}

export default FilterWraper