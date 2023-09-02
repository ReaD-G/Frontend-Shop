/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.unsplash.com']
	},
	env: {
		SERVER_URL: process.env.SERVER_URL
	}
}

module.exports = nextConfig
