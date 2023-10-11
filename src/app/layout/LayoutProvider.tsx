'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

export default function LayoutProvider({
	children
}: PropsWithChildren<unknown>) {
	const pathname = usePathname()

	return pathname !== '/auth' ? (
		<div className="bg-secondary">
			<Header />
			<div
				className="grid"
				style={{
					gridTemplateColumns: '.8fr 4fr'
				}}
			>
				<Sidebar />
				<main className="p-12 pb-52 bg-bg-color rounded-tl-lg">{children}</main>
			</div>
		</div>
	) : (
		<>{children}</>
	)
}
