import { IFullUser } from '@/types/user.interface'
import { getStoreLocal } from '@/utils/local-storage'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getProfile } from './profile.actions'
import { saveToStorageProfile } from '@/services/auth/auth.helper'

const initialState: { profile: IFullUser } = {
	profile: getStoreLocal('profile')
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		addToFavorites: (state, action: PayloadAction<any>) => {
			const isExist = state.profile.favorites.some(
				favorite => favorite.id === action.payload.product.id
			)
			if (!isExist) state.profile.favorites.push({ ...action.payload.product })
			saveToStorageProfile(state.profile)
		},
		removeFromFavorites: (state, action: PayloadAction<{ id: number }>) => {
			state.profile.favorites = state.profile.favorites.filter(
				item => item.id !== action.payload.id
			)
			saveToStorageProfile(state.profile)
		}
	},
	extraReducers: builder => {
		builder.addCase(getProfile.fulfilled, (state, { payload }) => {
			state.profile = payload
		})
	}
})
