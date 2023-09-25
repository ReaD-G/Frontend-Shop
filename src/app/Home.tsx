'use client'

import { TypePaginationProducts } from '@/types/product.interface'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import Layout from '@/ui/layout/Layout'
import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Layout>
			<CatalogPagination title="Freshed products" data={{ products, length }} />
		</Layout>
	)
}

export default Home
