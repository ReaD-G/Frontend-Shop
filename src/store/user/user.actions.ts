import { errorCatch } from '@/api/api.helper'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, IPhone } from './user.interface'

// register
export const register = createAsyncThunk<IAuthResponse, IPhone>(
	'auth/register',
	async (data, thunkApi) => {
		try {
			const responce = await AuthService.main('register', data)
			console.log('responce', responce)
			return responce
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

// login
export const login = createAsyncThunk<IAuthResponse, IPhone>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const responce = await AuthService.main('login', data)
			return responce
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

// logout
export const logout = createAsyncThunk('auth/logout', async () => {
	removeFromStorage()
})

// checkAuth
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const responce = await AuthService.getNewTokens()

			return responce.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error) as any
		}
	}
)
