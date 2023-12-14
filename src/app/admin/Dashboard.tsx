'use client'

import { StatisticsService } from '@/services/statistics.service'
import { convertPrice } from '@/utils/convertPrice'
import { Tab, Tabs } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from './Dashboard.module.scss'
import Categories from './categories/Categories'
import Orders from './orders/Orders'
import Products from './products/Products'
import Reviews from './reviews/Reviews'

const Dashboard: FC = () => {
	const { replace } = useRouter()
	const pathname = usePathname()
	const { data } = useQuery(['statistics'], () => StatisticsService.getMain(), {
		select: ({ data }) => data
	})

	return (
		<div className="flex flex-col items-center w-full">
			<Tabs size="lg" className="mt-2 flex items-center">
				<Tab key="statistic" title="Statistic">
					<div className={styles.wrapper}>
						{data?.length &&
							data.map((item, index) => (
								<div key={item.name} className={styles.item}>
									<div>{item.name}</div>
									<div>
										{index === data.length - 1
											? convertPrice(item.value || 0)
											: item.value}
									</div>
								</div>
							))}
					</div>
				</Tab>
				<Tab
					// href={replace(pathname)}
					key="products"
					title="Products"
					className="flex w-full container"
				>
					<Products />
				</Tab>
				<Tab
					key="categories"
					title="Categories"
					className="w-full flex container"
				>
					<Categories />
				</Tab>
				<Tab key="reviews" title="Reviews" className="w-full flex container">
					<Reviews />
				</Tab>
				<Tab key="orders" title="Orders" className="w-full flex container">
					<Orders />
				</Tab>
			</Tabs>
		</div>
	)
}

export default Dashboard
