/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')
const { withUt } = require('uploadthing/tw')
const { nextui } = require('@nextui-org/react')

const colors = {
	foreground: '#ECEDEE', // or 50 to 900 DEFAULT
	background: '#000000', // or DEFAULT
	transparent: twColors.transparent,
	black: '#000',
	gray: '#CDCDCD',
	white: twColors.white,
	primary: {
		DEFAULT: '#FF9902'
	},
	secondary: {
		DEFAULT: '#fff'
	},
	'bg-color': '#F2F2F5',
	aqua: '#268697',
	red: twColors.red[400]
}

module.exports = withUt({
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9xl': '9.2rem'
			},
			zIndex: {
				1: 1,
				2: 2,
				3: 3
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	darkMode: 'class',
	plugins: [
		require('tailwindcss-animate'),
		nextui({
			prefix: 'nextui', // prefix for themes variables
			addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
			defaultTheme: 'dark', // default theme from the themes object
			defaultExtendTheme: 'dark', // default theme to extend on custom themes
			layout: {
				disabledOpacity: '0.3', // opacity-[0.3]
				radius: {
					small: '2px', // rounded-small
					medium: '4px', // rounded-medium
					large: '6px' // rounded-large
				},
				borderWidth: {
					small: '1px', // border-small
					medium: '1px', // border-medium
					large: '2px' // border-large
				}
			},
			themes: {
				dark: {
					colors
				}
			}
		})
	]
})
