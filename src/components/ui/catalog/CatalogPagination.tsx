import { ProductService } from '@/services/product/product.service'
import { EnumProbuctSort } from '@/services/product/product.types'
import { TypePaginationProducts } from '@/types/product.interface'
import Loader from '@/ui/Loader'
import Button from '@/ui/button/Button'
import { Heading } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import SortDropdown from './SortDropdown'
import ProductItem from './product-item/ProductItem'

interface ICatalogPagination {
	data: TypePaginationProducts
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [page, setPage] = useState(1)

	const [sortType, setSortType] = useState<EnumProbuctSort>(
		EnumProbuctSort.NEWEST
	)

	const { data: response, isLoading } = useQuery(
		['products', sortType, page],
		() =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType
			}),
		{
			initialData: data,
			keepPreviousData: true
		}
	)

	if (isLoading) return <Loader />

	return (
		<section>
			{title && <Heading className="mb-5">{title}</Heading>}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			{response.products.length ? (
				<>
					<div className="grid grid-cols-4 gap-10">
						{response.products.map(product => (
							<ProductItem product={product} key={product.id} />
						))}
					</div>
					<div className="text-center mt-16">
						{Array.from({ length: response.length / 4 }).map((_, index) => {
							const pageNumber = index + 1
							return (
								<Button
									key={index}
									size="sm"
									className="mx-3"
									variant={page === pageNumber ? 'orange' : 'white'}
									onClick={() => setPage(page + 1)}
								>
									{pageNumber}
								</Button>
							)
						})}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
