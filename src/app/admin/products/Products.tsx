'use client'

import { IProduct } from '@/types/product.interface'
import Heading from '@/ui/Heading'
import Catalog from '@/ui/catalog/Catalog'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const Products = ({
	products,
	createUrl,
	handleDelete
}: {
	products: IProduct[]
	createUrl: string
	handleDelete: (id: number) => void
}) => {
	const { push } = useRouter()

	const handleCreate = () => {
		push(createUrl)
	}

	return (
		<div className="flex w-full flex-col">
			<div className="flex justify-between w-full items-center">
				<Heading className="text-xl text-semibold">Все продукты</Heading>
				<Button
					onClick={handleCreate}
					size="md"
					className="bg-transparent hover:text-lilac"
				>
					<span className="text-xl">Создать</span>
				</Button>
			</div>
			<Catalog
				removeHandler={handleDelete}
				isUpdate
				isAll
				products={products || []}
			/>
		</div>
	)
}

export default Products
