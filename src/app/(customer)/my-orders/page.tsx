import { NO_INDEX_PAGE } from '@/constants/app.constans'
import type { Metadata } from 'next'
import MyOrders from './MyOrders'

export const metadata: Metadata = {
	title: 'My Orders',
	...NO_INDEX_PAGE
}

export default function MyOrdersPage() {
	return <MyOrders />
}
