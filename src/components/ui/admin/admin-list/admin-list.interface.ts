export interface IListItem {
	id: number
	editUrl?: string
	viewUrl?: string
	createUrl?: string
	items: string[]
}

export interface IAdminListItem {
	listItem: IListItem
	removeHandler?: () => void
}
