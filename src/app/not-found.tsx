import Heading from '@/ui/Heading'
import Layout from '@/ui/layout/Layout'
import Link from 'next/link'

export default function NotFound() {
	return (
		<Layout>
			<Heading>Not Found</Heading>
			<p>Could not find requested resourse</p>
			<p>
				View{' '}
				<Link href="/explorer" className="text-primary">
					all products
				</Link>
			</p>
		</Layout>
	)
}
