'use client'

import { OrderService } from '@/services/order.service'
import Heading from '@/ui/Heading'
import { convertPrice } from '@/utils/convertPrice'
import { useQuery } from '@tanstack/react-query'

export default function MyOrders() {
	const { data: orders } = useQuery(
		['my orders'],
		() => OrderService.getByUserId(),
		{
			select: ({ data }) => data
		}
	)
	return (
		<div className="flex flex-col">
			<Heading>My orders</Heading>
			<section>
				{orders?.length ? (
					orders.map(order =>
						order.items.map(item => (
							<div
								className="rounded-lg bg-white shadow flex gap-10 p-7 my-7"
								key={order.id}
							>
								<span>#{order.id}</span>
								<span>{order.status}</span>
								<span>
									{new Date(order.createdAt).toLocaleDateString('ru-Ru')}
								</span>
								<span>{convertPrice(order.total)}</span>
							</div>
						))
					)
				) : (
					<div>Orders not found!</div>
				)}
			</section>
		</div>
	)
}
