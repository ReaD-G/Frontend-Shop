import { FC } from 'react'
import AdminActions from './admin-actions/AdminActions'
import { IAdminListItem } from './admin-list.interface'

const AdminListItem: FC<IAdminListItem> = ({ removeHandler, listItem }) => {
	return (
		<div className="flew w-full bg-white flex-row text-black/50 my-2 p-4 rounded-lg">
			<div className="flex flew-row w-full justify-between">
				{listItem.items.map(value => (
					<div key={value}>{value}</div>
				))}
				<AdminActions
					viewUrl={listItem.viewUrl}
					editUrl={listItem.editUrl}
					removeHandler={removeHandler}
				/>
			</div>
		</div>
	)
}

export default AdminListItem
