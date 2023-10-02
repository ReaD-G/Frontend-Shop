import { NO_INDEX_PAGE } from '@/constants/app.constans'
import type { Metadata } from 'next'
import Orders from './Orders'

export const metadata: Metadata = {
	title: 'Orders',
	...NO_INDEX_PAGE
}

export default function OrdersPage() {
	return <Orders />
}
