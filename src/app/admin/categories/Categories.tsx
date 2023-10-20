'use client'

import AdminList from '@/ui/admin/admin-list/AdminList'
import { FC } from 'react'
import { useAdminCategories } from './useAdminCategories'

const Categories: FC = () => {
	const { data, isFetching, mutate } = useAdminCategories()

	return (
		<div className="flex w-[100%] flex-col">
			<AdminList
				isLoading={isFetching}
				listItems={data}
				removeHandler={mutate}
			/>
		</div>
	)
}

export default Categories
