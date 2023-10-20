'use client'

import { FC } from 'react'
import AdminListItem from './AdminListItem'
import { IListItem } from './admin-list.interface'

interface IAdminList {
	listItems?: IListItem[]
	isLoading: boolean

	removeHandler?: (id: number) => void
}

const AdminList: FC<IAdminList> = ({ listItems = [], removeHandler }) => {
	return listItems.map(listItem => (
		<AdminListItem
			key={listItem.id}
			removeHandler={
				removeHandler ? () => removeHandler(listItem.id) : undefined
			}
			listItem={listItem}
		/>
	))
}

export default AdminList
