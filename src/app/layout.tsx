import type { PropsWithChildren } from 'react'

import '@/assets/styles/globals.scss'
import Providers from '@/providers/Providers'

import { Golos_Text } from 'next/font/google'

import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/app.constans'

import Header from '@/app/layout/header/Header'
import Sidebar from '@/app/layout/sidebar/Sidebar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.svg'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		// Update emails
		emails: ['info@bruli-shop.com']
	}
}

const golos = Golos_Text({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-exo'
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang="en" className={golos.variable}>
			<body>
				<Providers>
					<div className=" bg-secondary">
						<Header />
						<div
							className="grid"
							style={{
								gridTemplateColumns: '.8fr 4fr'
							}}
						>
							<Sidebar />
							<main className="p-12 pb-52 bg-bg-color rounded-tl-lg">
								{children}
							</main>
						</div>
					</div>
				</Providers>
				<div id="modal"></div>
			</body>
		</html>
	)
}
