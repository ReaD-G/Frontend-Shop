'use client'

import AdminList from '@/ui/admin/admin-list/AdminList'
import { FC } from 'react'
import { useAdminReviews } from './useAdminReviews'

const Reviews: FC = () => {
	const { data, isFetching } = useAdminReviews()

	return (
		<div className="flex flex-col w-full">
			<AdminList isLoading={isFetching} listItems={data} />
		</div>
	)
}

export default Reviews
