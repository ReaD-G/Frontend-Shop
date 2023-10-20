'use client'

import { PropsWithChildren } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

export default function LayoutProvider({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className="flex relative flex-col min-h-screen items-center">
			<Header />
			{/* <main className="dark ">{children}</main> */}
			<div className="items-center min-h-screen flex flex-col dark w-full">
				{children}
			</div>
			<Footer />
		</div>
	)
}
