import { NO_INDEX_PAGE } from '@/constants/app.constans'
import { Heading } from '@radix-ui/themes'
import type { Metadata } from 'next'
import Layout from '../layout'

export const metadata: Metadata = {
	title: 'Thanks',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return (
		<Layout>
			<Heading>Thanks</Heading>
		</Layout>
	)
}
