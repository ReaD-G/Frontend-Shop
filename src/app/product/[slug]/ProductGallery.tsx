import cn from 'classnames'
import Image from 'next/image'
import { useState } from 'react'

interface IPrioductGallery {
	images: { fileUrl: string; fileKey: string }[]
}

export function ProductsGallery({ images }: IPrioductGallery) {
	const [activeIndex, setActiveIndex] = useState(0)
	const image = images.length
		? images[activeIndex].fileUrl
		: '/images/noImage.png'
	return (
		<div>
			<Image
				src={image}
				alt=""
				width={500}
				height={500}
				className="rounded-lg overflow-hidden"
				priority
				draggable={false}
			/>
			<div
				className="mt-6"
				style={{ width: '500px', overflowX: 'auto', whiteSpace: 'nowrap' }}
			>
				{images.map((image, index) => (
					<button
						key={index}
						className={cn(
							'duration-300 hover:shadow-md mr-5 last:mr-0 border-b-2 border-solid transition-all rounded-lg overflow-hidden inline-block',
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
							width={100}
							height={100}
							priority
							draggable={false}
						/>
					</button>
				))}
			</div>
		</div>
	)
}

export default ProductsGallery
