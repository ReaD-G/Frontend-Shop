import { instance } from '@/api/api.interceptor'

export const UploadService = {
	async delete(fileKey: string) {
		return instance<string>({
			url: `upload/${fileKey}`,
			method: 'DELETE'
		})
	}
}
