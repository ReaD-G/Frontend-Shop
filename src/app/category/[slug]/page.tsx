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
	const { products: allProducts } = await ProductService.getAll()

	const { data: products } =
		params?.slug !== 'all' &&
		(await ProductService.getByCategory(params?.slug as string))
	const { data: category } =
		params?.slug !== 'all' &&
		(await CategoryService.getBySlug(params?.slug as string))

	return {
		products: params?.slug === 'all' ? allProducts : products,
		category: params?.slug !== 'all' && category
	}
}

export async function generateMetadata({
	params
}: IPageSlugParam): Promise<Metadata> {
	const { products, category } = await getProducts(params)
	const categoryName = category ? category.name : 'Все'
	return {
		title: categoryName,
		description: `Random description about ${categoryName}`,
		openGraph: {
			images: products[0].images.length
				? products[0].images[0].fileUrl
				: '/images/noImage.png',
			description: `Random description about ${categoryName}`
		}
	}
}

export default async function CategoryPage({ params }: IPageSlugParam) {
	const { products, category } = await getProducts(params)
	const categoryName = category ? `${category.name} Украшения` : 'Все Украшения'
	return <Catalog isAll products={products || []} title={categoryName} />
}
