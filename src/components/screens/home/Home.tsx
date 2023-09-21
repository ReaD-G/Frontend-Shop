import { TypePaginationProducts } from '@/types/product.interface'
import Meta from '@/ui/Meta'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import Layout from '@/ui/layout/Layout'
import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title="Home">
			<Layout>
				{/* Carousel */}
				<CatalogPagination
					title="Freshed products"
					data={{ products, length }}
				/>
			</Layout>
		</Meta>
	)
}

export default Home
