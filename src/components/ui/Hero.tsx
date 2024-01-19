'use client'

import { Image } from '@nextui-org/react'
import cn from 'classnames'
import { Caveat } from 'next/font/google'

const caveat = Caveat({
	weight: '400',
	variable: '--font-zeyada',
	subsets: ['latin']
})

const Hero = () => {
	return (
		<div className="container hidden sm:flex my-5 flex-row items-center justify-between rounded-lg ">
			<div className={cn('flex flex-col w-3/4', caveat.className)}>
				<span className="text-3xl font-semibold text-black">
					Откройте для себя лучшую коллекцию украшений для мужчин и женщин.
				</span>
				<span className="text-xl mt-2">
					Делайте покупки по категориям, брендам или просматривайте наши
					избранные товары!
				</span>
			</div>
			<Image isBlurred src="./favicon.png" alt="iconHero" />
		</div>
	)
}

export default Hero
