import { CategoryService } from '@/services/categoty.service'
import { ProductService } from '@/services/product/product.service'
import { TypeProductData } from '@/services/product/product.types'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useAdminEditProduct = (id: number, push: (string) => void) => {
	const { data, isFetching } = useQuery(
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

	const { mutateAsync } = useMutation(
		['update product'],
		(data: TypeProductData) => ProductService.update(id, data),
		{
			onSuccess({ data }) {
				push('/admin')
				// add toast message
			}
		}
	)

	return { data, isFetching, mutateAsync, category }
}
