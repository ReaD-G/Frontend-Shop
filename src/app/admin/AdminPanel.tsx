'use client'

import { IListProducts, IListReviews } from '@/app/admin/admin-list.interface'
import { getAdminUrl } from '@/config/url.config'
import { ProductService } from '@/services/product/product.service'
import { ReviewService } from '@/services/review.service'
import { StatisticsService } from '@/services/statistics.service'
import Loader from '@/ui/Loader'
import { Tab, Tabs } from '@nextui-org/react'
import { useMutation, useQueries } from '@tanstack/react-query'
import { FC } from 'react'
import { FaOpencart } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'
import { FcStatistics } from 'react-icons/fc'
import { GiJewelCrown } from 'react-icons/gi'
import Products from './products/Products'
import Reviews from './reviews/Reviews'
import Statistics from './statistics/Statistics'

const AdminPanel: FC = () => {
	const [statistics, allProducts, reviews] = useQueries({
		queries: [
			{
				queryKey: ['statistics'],
				queryFn: () => StatisticsService.getMain(),
				staleTime: Infinity,
				select: ({ data }) => data
			},
			{
				queryKey: ['get admin products'],
				queryFn: () => ProductService.getAll(),
				staleTime: Infinity,
				select: data => ({
					products: data.products.map((product): IListProducts => {
						return {
							id: product.id,
							viewUrl: `/product/${product.slug}`,
							editUrl: getAdminUrl(`/products/edit/${product.id}`),
							...product
						}
					}),
					createUrl: getAdminUrl(`/products/create/`)
				})
			},
			{
				queryKey: ['get admin reviews'],
				queryFn: () => ReviewService.getAll(),
				staleTime: Infinity,

				select: ({ data }) =>
					data.map((review): IListReviews => {
						return {
							id: review.id,
							name: review.user.name,
							text: review.text,
							rating: Array.from({ length: review.rating })
									.map(() => '⭐')
									.join(' ')
							
						}
					})
			}
		]
	})

	const { data: reviewItems, isFetching: isFetchingReviews } = reviews

	const { data: info } = statistics
	const { data, refetch, isFetching } = allProducts

	const { mutate } = useMutation(
		['delete product'],
		(id: number) => ProductService.delete(id),
		{
			onSuccess: () => refetch()
		}
	)

	return isFetching ? (
		<Loader />
	) : (
		<div className="container items-center w-full flex flex-col ">
			<Tabs size="lg" className="mt-5 flex items-center">
				<Tab
					className="w-full flex container"
					key="statistic"
					title={
						<div className="flex items-center space-x-2 text-lg">
							<FcStatistics size={25} />
							<span>Статистика</span>
						</div>
					}
				>
					<Statistics data={info} />
				</Tab>
				<Tab
					key="products"
					title={
						<div className="flex items-center space-x-2 text-lg">
							<GiJewelCrown size={25} color="#dea8f7" />
							<span>Украшения</span>
						</div>
					}
					className="flex w-full container"
				>
					<Products
						handleDelete={mutate}
						products={data.products}
						createUrl={data.createUrl}
					/>
				</Tab>
				<Tab
					key="reviews"
					title={
						<div className="flex items-center space-x-2 text-lg">
							<FaRegStarHalfStroke size={25} color="#FFD700" />
							<span>Отзывы</span>
						</div>
					}
					className="w-full flex container"
				>
					<Reviews data={reviewItems} isFetching={isFetchingReviews} />
				</Tab>
				<Tab
					key="orders"
					title={
						<div className="flex items-center space-x-2 text-lg">
							<FaOpencart size={25} />
							<span>Заказы</span>
						</div>
					}
					className="w-full flex container"
				>
					{/* <Orders /> */}
				</Tab>
			</Tabs>
		</div>
	)
}

export default AdminPanel
