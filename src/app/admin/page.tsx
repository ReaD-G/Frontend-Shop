import { NO_INDEX_PAGE } from '@/constants/app.constans'
import type { Metadata } from 'next'
import AdminPanel from './AdminPanel'

export const metadata: Metadata = {
	title: 'Admin Panel',
	...NO_INDEX_PAGE
}

export default function AdminPanelPage() {
	return <AdminPanel />
}
