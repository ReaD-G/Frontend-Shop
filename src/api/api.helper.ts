export const getContentType = () => ({
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': 'http://localhost:3000',
	'Access-Control-Allow-Credentials': 'true',
	'Access-Control-Allow-Methods': 'GET,DELETE,PATCH,POST,PUT',
	'Access-Control-Allow-Headers':
		'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
})

export const errorCatch = (error: any): string => {
	const message = error?.response?.data?.message

	return message
		? typeof error.response.data.message === 'object'
			? message[0]
			: message
		: error.message
}
