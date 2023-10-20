'use client'

import Slider from 'react-slick'
import Slide from './Slide'

const Hero = () => {
	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: true
	}

	const slideData = [
		{
			id: 0,
			img: '/images/1.jpg',
			title: 'Добро пожаловать',
			mainTitle:
				'Это один из самых брендовых и современных магазинов с бижутерией ручной работы',
			price: ''
		},
		{
			id: 1,
			img: '/images/2.jpg',
			title: 'Трендовый товар',
			mainTitle: '',
			price: '25 Br'
		}
	]

	return (
		<div className="container py-6 sm:block hidden">
			<Slider {...settings}>
				{slideData.map(item => (
					<Slide
						img={item.img}
						key={item.id}
						title={item.title}
						price={item.price}
						mainTitle={item.mainTitle}
					/>
				))}
			</Slider>
		</div>
	)
}

export default Hero
