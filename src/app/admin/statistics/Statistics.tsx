import { convertPrice } from '@/utils/convertPrice'

interface StatisticItem {
	name: string
	value: number
}

const Statistics = ({ data }: { data: StatisticItem[] }) => {
	return (
		<div className="grid grid-cols-4 gap-10 mt-2 container">
			{data?.length &&
				data.map((item, index) => (
					<div
						key={item.name}
						className="rounded-lg p-6 shadow-lg flex items-center text-lg justify-between flex-col hover:shadow-lilac cursor-pointer text-center"
					>
						<div className="text-xl text-semibold">{item.name}</div>
						<div>
							{index === data.length - 1
								? convertPrice(item.value || 0)
								: item.value}
						</div>
					</div>
				))}
		</div>
	)
}

export default Statistics
