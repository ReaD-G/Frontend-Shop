import { CategoryService } from '@/services/categoty.service'
import { ProductService } from '@/services/product/product.service'
import { TypeProductData } from '@/services/product/product.types'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useAdminCreateProduct = () => {
	const { data: category } = useQuery(
		['get admin category'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const { mutateAsync: createProduct } = useMutation(['create product'], () =>
		ProductService.create()
	)

	const { mutate: updateNewProduct } = useMutation(
		['update product'],
		(data: { itemProduct: TypeProductData; id: number }) =>
			ProductService.update(data.id, data.itemProduct),

		{
			onSuccess({ data }) {
				console.log('data', data)
			}
		}
	)

	return { createProduct, category, updateNewProduct }
}
