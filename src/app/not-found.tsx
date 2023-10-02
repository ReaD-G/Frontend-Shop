import Heading from '@/ui/Heading'
import Link from 'next/link'

export default function NotFound() {
	return (
		<>
			<Heading>Not Found</Heading>
			<p>Could not find requested resourse</p>
			<p>
				View{' '}
				<Link href="/explorer" className="text-primary">
					all products
				</Link>
			</p>
		</>
	)
}
