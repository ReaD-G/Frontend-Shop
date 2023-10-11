import { CategoryService } from '@/services/categoty.service'
import { ProductService } from '@/services/product/product.service'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import Catalog from '@/ui/catalog/Catalog'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
	const categories = await CategoryService.getAll()

	const paths = categories.data.map(category => {
		return {
			params: {
				slug: category.slug
			}
		}
	})

	return paths
}

async function getProducts(params: TypeParamSlug) {
	const { data: products } = await ProductService.getByCategory(
		params?.slug as string
	)
	const { data: category } = await CategoryService.getBySlug(
		params?.slug as string
	)
	return {
		products,
		category
	}
}

export async function generateMetadata({
	params
}: IPageSlugParam): Promise<Metadata> {
	const { products, category } = await getProducts(params)
	return {
		title: category.name,
		description: `Random description about ${category.name}`,
		openGraph: {
			images: products[0].images.length
				? products[0].images[0].fileUrl
				: '/images/noImage.png',
			description: `Random description about ${category.name}`
		}
	}
}

export default async function CategoryPage({ params }: IPageSlugParam) {
	const { products, category } = await getProducts(params)
	return <Catalog products={products || []} title={category.name} />
}
