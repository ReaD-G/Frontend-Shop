import type { PropsWithChildren } from 'react'

import '@/assets/styles/globals.scss'
import Providers from '@/providers/Providers'

import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/app.constans'

import type { Metadata } from 'next'

import cn from 'classnames'
import { Caveat } from 'next/font/google'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import LayoutProvider from './layout/LayoutProvider'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.png'
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

const caveat = Caveat({
	weight: '600',
	subsets: ['latin']
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		// <ClerkProvider> // Later update the login method for the web application
		<html lang="ru">
			<head />
			<body className={cn('min-h-screen', caveat.className)}>
				<Providers>
					<LayoutProvider>{children}</LayoutProvider>
				</Providers>
			</body>
		</html>
	)
}
