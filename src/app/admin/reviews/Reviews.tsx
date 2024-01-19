'use client'

import { FC } from 'react'

const Reviews: FC<{
	data: { id: number; name: string; text: string; rating: string }[]
	isFetching: boolean
}> = ({ data, isFetching }) => {
	return (
		<div className="grid grid-cols-3 gap-10 mt-2 container">
			{!isFetching &&
				data.map(item => {
					return (
						<div
							key={item.id}
							className="rounded-lg p-4 shadow-lg flex items-center text-lg justify-between flex-col hover:shadow-lilac cursor-pointer text-center"
						>
							<span>Имя пользователя: {item.name}</span>
							<span>Коментарий: {item.text}</span>
							{item.rating}
						</div>
					)
				})}
		</div>
	)
}

export default Reviews
