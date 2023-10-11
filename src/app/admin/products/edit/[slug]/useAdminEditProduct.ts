import { CategoryService } from '@/services/categoty.service'
import { ProductService } from '@/services/product/product.service'
import { TypeProductData } from '@/services/product/product.types'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useAdminEditProduct = (id: number) => {
	const { data, isFetching, refetch } = useQuery(
		['get admin product by id'],
		() => ProductService.getById(id),
		{
			select: ({ data }) => data
		}
	)

	const { data: category } = useQuery(
		['get admin category'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const { mutate } = useMutation(
		['update product'],
		(data: TypeProductData) => ProductService.update(id, data),
		{
			onSuccess({ data }) {
				refetch()
			}
		}
	)

	return { data, isFetching, mutate, category }
}
