import { instance } from '@/api/api.interceptor'

export const UploadService = {
	async delete(fileKey: string) {
		console.log(fileKey)
		return instance<string>({
			url: `upload/${fileKey}`,
			method: 'DELETE'
		})
	}
}
