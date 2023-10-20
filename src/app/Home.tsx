import { TypePaginationProducts } from '@/types/product.interface'
import Hero from '@/ui/Hero'
import Catalog from '@/ui/catalog/Catalog'

import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products }) => {
	return (
		<>
			<Hero />
			<Catalog title="Freshed products" products={products} />
		</>
	)
}

export default Home
