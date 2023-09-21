import { instance } from '@/api/api.interceptor'
import { IFullUser, IUser } from '@/types/user.interface'

const USERS = '/users'

type TypeData = {
	email: string
	name?: string
	avatarPath?: string
	password?: string
	phone?: number
}

export const UserService = {
	async getProfile() {
		return instance<IFullUser>({
			url: `${USERS}/profile`,
			method: 'GET'
		})
	},

	async updateProfile(data: TypeData) {
		return instance<IUser>({
			url: `${USERS}/profile`,
			method: 'PUT',
			data
		})
	},

	async toggleFavorite(productId: string | number) {
		return instance<IUser>({
			url: `${USERS}/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	}
}
