/** @type {import('next').NextConfig} */

const nextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET,DELETE,PATCH,POST,PUT'
					},
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
					}
				]
			}
		]
	},
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	},
	images: {
		domains: [
			'images.unsplash.com',
			'loremflickr.com',
			'utfs.io',
			'www.aptronixindia.com',
			'cloudflare-ipfs.com',
			'avatars.githubsercontent.com',
			'avatars.githubusercontent.com'
		]
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
