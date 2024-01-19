import cn from 'classnames'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import {
	A11y,
	Controller,
	FreeMode,
	Navigation,
	Pagination,
	Scrollbar
} from 'swiper/modules'
import { Swiper, useSwiper } from 'swiper/react'

import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/free-mode'

const SwiperButtonNext = ({ children }) => {
	const swiper = useSwiper()
	return <button onClick={() => swiper.slideNext()}>{children}</button>
}

const SwiperButtonPrev = ({ children }) => {
	const swiper = useSwiper()
	return <button onClick={() => swiper.slidePrev()}>{children}</button>
}

const SwiperWrapper = ({ children, length }) => {
	const [lastSlide, setlastSlide] = useState(true)
	const [firstSlide, setFirstSlide] = useState(false)
	const visibleArrow = () => {
		let className = 'hidden'
		switch (length) {
			case 2:
				className = 'sm:hidden flex'
				break
			case 3:
				className = 'sm:flex md:hidden'
				break
			case 4:
				className = 'md:flex lg:hidden'
				break
			case 5:
				className = 'xl:hidden'
				break
		}
		return className
	}

	return (
		<Swiper
			onSlideChange={swiper => {
				swiper.isBeginning ? setFirstSlide(false) : setFirstSlide(true)
				swiper.isEnd ? setlastSlide(false) : setlastSlide(true)
			}}
			slidesPerView={1}
			pagination={{ clickable: true }}
			speed={600}
			navigation
			spaceBetween={10}
			breakpoints={{
				340: {
					slidesPerView: 1
				},
				460: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				},
				1280: {
					slidesPerView: 5
				},
				1536: {
					slidesPerView: 6
				}
			}}
			freeMode
			className="relative"
			modules={[FreeMode, Navigation, Pagination, Scrollbar, A11y, Controller]}
		>
			<div
				className={cn(
					'w-[40px] items-center justify-center flex rounded-l-lg absolute top-1/3 bottom-1/3 left-1.5 z-50 pr-6',
					visibleArrow()
				)}
			>
				{firstSlide && (
					<SwiperButtonPrev>
						<IoIosArrowDropleft className="w-[35px] h-[35px] text-gray bg-white rounded-full cursor-pointer hover:text-lilac" />
					</SwiperButtonPrev>
				)}
			</div>
			{children}
			<div
				className={cn(
					'items-center justify-center flex w-[40px] rounded-r-lg absolute top-1/3 bottom-1/3 right-1.5 pl-6 z-50',
					visibleArrow()
				)}
			>
				{lastSlide && (
					<SwiperButtonNext>
						<IoIosArrowDropright className="w-[35px] h-[35px] text-gray bg-white rounded-full cursor-pointer hover:text-lilac" />
					</SwiperButtonNext>
				)}
			</div>
		</Swiper>
	)
}

export default SwiperWrapper
