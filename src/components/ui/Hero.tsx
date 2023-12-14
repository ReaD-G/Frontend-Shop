'use client'

import { Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Hero = () => {
	// var settings = {
	// 	dots: false,
	// 	infinite: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	pauseOnHover: true
	// }

	// const slideData = [
	// 	{
	// 		id: 0,
	// 		img: '/images/1.jpg',
	// 		title: 'Добро пожаловать',
	// 		mainTitle:
	// 			'Это один из самых брендовых и современных магазинов с бижутерией ручной работы',
	// 		price: ''
	// 	},
	// 	{
	// 		id: 1,
	// 		img: '/images/2.jpg',
	// 		title: 'Трендовый товар',
	// 		mainTitle: '',
	// 		price: '25 Br'
	// 	}
	// ]
	const [searchTerm, setSearchTerm] = useState<string>('')

	const { push } = useRouter()

	const onSearch = e => {
		setSearchTerm(e)
	}

	const handleClear = () => {
		setSearchTerm('')
	}

	const handleSearch = () => {
		push(`/explorer?searchTerm=${searchTerm}`)
		setSearchTerm('')
	}

	return (
		<div className="container hidden sm:flex my-5 flex-row items-center justify-between rounded-lg ">
			{/* <Slider {...settings}>
				{slideData.map(item => (
					<Slide
						img={item.img}
						key={item.id}
						title={item.title}
						price={item.price}
						mainTitle={item.mainTitle}
					/>
				))}
			</Slider> */}
			<div className="flex flex-col w-2/3">
				<span className="text-3xl font-semibold text-white">
					Откройте для себя лучшую коллекцию украшений для мужчин и женщин.
				</span>
				<span className="text-lg mt-2">
					Делайте покупки по категориям, брендам или просматривайте наши
					избранные товары!
				</span>
				{/* <div className="mt-2 flex flex-row gap-5 w-2/3">
					<Search
						searchTerm={searchTerm}
						onClear={handleClear}
						onSearch={onSearch}
					/>
					<Button
						className="bg-red-primary text-white w-1/3 shadow-lg hover:bg-red-700"
						variant="solid"
						onClick={handleSearch}
					>
						Поиск
					</Button>
				</div> */}
			</div>
			<Image
				width={300}
				isBlurred
				src="./images/iconHero.jpeg"
				alt="iconHero"
			/>
		</div>
	)
}

export default Hero
