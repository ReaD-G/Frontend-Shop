import type { PropsWithChildren } from 'react'

import '@/assets/styles/globals.scss'
import Providers from '@/providers/Providers'

import { Golos_Text } from 'next/font/google'

import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/app.constans'

import type { Metadata } from 'next'
import LayoutProvider from './layout/LayoutProvider'

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
		<html lang="ru" className={golos.variable}>
			<body>
				<Providers>
					<LayoutProvider>{children}</LayoutProvider>
				</Providers>
				<div id="modal" />
			</body>
		</html>
	)
}
