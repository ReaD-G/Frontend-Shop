import { saveToStorageProfile } from '@/services/auth/auth.helper'
import { UserService } from '@/services/user.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getProfile = createAsyncThunk(
	'users/profile',
	async (_, thunkApi) => {
		try {
			const { data: profile } = await UserService.getProfile()
			saveToStorageProfile(profile)
			return profile
		} catch (error) {
			return thunkApi.rejectWithValue(error) as any
		}
	}
)
