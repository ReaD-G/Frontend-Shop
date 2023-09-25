import type { PropsWithChildren } from 'react'

import '@/assets/styles/globals.scss'
import Providers from '@/providers/Providers'

import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/app.constans'
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

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang="ru">
			<body>
				<Providers>{children}</Providers>
				<div id="model"></div>
			</body>
		</html>
	)
}
