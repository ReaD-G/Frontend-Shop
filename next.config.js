/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'images.unsplash.com',
			'loremflickr.com',
			'www.aptronixindia.com',
			'cloudflare-ipfs.com'
		]
	},
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	}
}

module.exports = nextConfig
