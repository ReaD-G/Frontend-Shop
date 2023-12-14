'use client'

import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { useAdminProducts } from './useAdminProducts'

const Products: FC = () => {
	const { data, isFetching, mutate } = useAdminProducts()
	const { push } = useRouter()

	const handleCreate = () => {
		push(data.createUrl)
	}

	return (
		<div className="flex w-full flex-col">
			<div className="flex justify-between w-full items-center">
				<Heading>Products</Heading>
				<Button onClick={handleCreate} variant="light">
					Create
				</Button>
			</div>
			<AdminList
				isLoading={isFetching}
				listItems={data?.products}
				removeHandler={mutate}
			/>
		</div>
	)
}

export default Products
