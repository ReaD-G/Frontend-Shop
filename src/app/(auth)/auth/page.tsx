import { NO_INDEX_PAGE } from '@/constants/app.constans'
import type { Metadata } from 'next'
import Auth from './Auth'

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE
}

export default function AuthPage() {
	return <Auth />
}
