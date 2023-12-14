import { TypePaginationProducts } from '@/types/product.interface'
import Hero from '@/ui/Hero'
import Catalog from '@/ui/catalog/Catalog'
// import Categories from '@/ui/categories/Categories'

import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products, categories }) => {
	return (
		<>
			<Hero />
			{/* <Categories /> */}
			<Catalog title="Последние Обновления" products={products} />
		</>
	)
}

export default Home
