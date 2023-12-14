import { useState } from 'react'

import { Image } from '@nextui-org/react'
import cn from 'classnames'

interface IPrioductGallery {
	images: { fileUrl: string; fileKey: string }[]
}

export function ProductsGallery({ images }: IPrioductGallery) {
	const [activeIndex, setActiveIndex] = useState(0)
	const image = images.length
		? images[activeIndex].fileUrl
		: '/images/noImage.png'
	return (
		<div className="lg:flex lg:items-start">
			<div className="lg:order-2 lg:ml-5">
				<div className="max-w-xl overflow-hidden">
					<Image
						src={image}
						alt=""
						width={400}
						height={400}
						// className="rounded-lg overflow-cover max-w-full h-full w-full"
						className="rounded-lg overflow-cover max-w-full"
						draggable={false}
					/>
				</div>
			</div>
			<div className="lg:mt-0 mt-2 lg-order-1 lg:w-31 lg:flex-col">
				<div className="flex flex-row items-start lg:flex-col">
					{images.map((image, index) => (
						<button
							key={index}
							className={cn(
								'flex-0 aspect-square duration-300 hover:shadow-md mr-5 last:mr-0 border-b-2 border-solid transition-all rounded-lg overflow-hidden inline-block',
								{
									'shadow-md border-primary': index === activeIndex,
									'border-transparent': index !== activeIndex
								}
							)}
							onClick={() => setActiveIndex(index)}
						>
							<Image
								src={image.fileUrl}
								alt=""
								width={75}
								height={75}
								draggable={false}
								className="object-cover"
							/>
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProductsGallery
