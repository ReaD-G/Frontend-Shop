'use client'

import { ProductService } from '@/services/product/product.service'
import { TypePaginationProducts } from '@/types/product.interface'

import Catalog from '@/ui/catalog/Catalog'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import Search from '../layout/header/Search'
import Filters from './filters/Filters'
import Pagination from './pagination/Pagination'
import SortDropdown from './sort/SortDropdown'
import { useFilters } from './useFilters'

interface IProductExplorer {
	initialProducts: TypePaginationProducts
}

const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
	const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()
	const [searchTerm, setSearchTerm] = useState<string>(queryParams.searchTerm)

	const { data, isFetching } = useQuery(
		['product explorer', queryParams],
		() => ProductService.getAll(queryParams),
		{
			initialData: initialProducts,
			enabled: isFilterUpdated
		}
	)

	const { replace } = useRouter()

	const handleSearch = e => {
		setSearchTerm(e)
		replace(`/explorer?searchTerm=${e}`)
	}

	const handleClear = () => {
		setSearchTerm('')
	}

	return (
		<div className="container">
			<div className="mt-4 flex flex-row items-center justify-between mb-7 ">
				<div className="flex w-1/2">
					<Search
						searchTerm={searchTerm}
						onClear={handleClear}
						onSearch={handleSearch}
					/>
				</div>
				<SortDropdown />
			</div>
			<div className="flex flex-row container justify-between">
				<div className="w-1/3">
					<Filters />
				</div>
				<div>
					<Catalog products={data.products} isLoading={isFetching} />
					<Pagination
						changePage={page => updateQueryParams('page', page.toString())}
						currentPage={queryParams.page}
						numberPages={data.length / +queryParams.perPage}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProductExplorer
