import { Image } from '@nextui-org/react'
import { FC } from 'react'

interface ISlide {
	img: string
	title: string
	mainTitle: string
	price: string
}

const Slide: FC<ISlide> = ({ img, title, mainTitle, price }) => {
	return (
		<div className="outline-none border-none relative">
			{/* <div className="absolute z-20 left-[30px] md:left-[70px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
				<h3 className="text-white text-xl lg:text-2xl">{title}</h3>
				<h2 className="text-black text-2xl md:text-[30px] lg:text-4xl font-bold leading-[1.2]">
					{mainTitle}
				</h2>

				<h3 className="text-[24px] text-zinc-500">
					начинается с{' '}
					<b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
				</h3>
				<div className="bg-blue-500 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blue-400">
					Смотерть
				</div>
			</div> */}
			<Image
				className="h-[300px] rounded-xl object-cover object-right md:object-left-bottom"
				src={img}
				alt="banner"
				height={300}
				width={2000}
			/>
		</div>
	)
}

export default Slide
