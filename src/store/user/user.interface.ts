import { IUser } from '@/types/user.interface'

export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}

export interface IPhone {
	phone: ''
}

export interface IAuthResponse extends ITokens {
	data: any
	user: IUser
}
