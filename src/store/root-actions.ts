import { filtersSlice } from '@/app/explorer/filters/filters.slice'
import { cartSlice } from './cart/cart.slice'
import * as profileAction from './profile/profile.actions'
import * as userActions from './user/user.actions'
import { profileSlice } from './profile/profile.slice'

export const rootActions = {
	...userActions,
	...profileAction,
	...profileSlice.actions,
	...cartSlice.actions,
	...filtersSlice.actions
}
