'use client'
import { Button, Image } from '@nextui-org/react'
import { FC } from 'react'

const categoriesArray = [
	{
		id: '1',
		name: 'Мужские',
		image: './images/category/men.jpeg'
	},
	{
		id: '2',
		name: 'Женские',
		image: './images/category/women.jpeg'
	},
	{
		id: '3',
		name: 'Для детей',
		image: './images/category/cheild.jpeg'
	},
	{
		id: '4',
		name: 'Ожерелья',
		image: './images/category/necklace.jpeg'
	},
	{
		id: '5',
		name: 'Браслеты',
		image: './images/category/bracelet.jpeg'
	}
]
const Categories: FC = () => {
	return (
		<div className="flex flex-col items-center mb-5 container">
			<span className="text-2xl mb-4 font-semibold">Категории</span>
			<div className="sm:flex sm:flex-row grid grid-cols-2 gap-5 lg:gap-12 items-center justify-center">
				{categoriesArray.map(item => (
					<Button
						onClick={() => {
							// add function click
							console.log(item)
						}}
						variant="ghost"
						key={item.id}
						className="flex flex-col h-full items-center justify-center rounded-lg shadow-md shadow-red-primary border solid px-5 py-2 bg-[#323232] hover:shadow-red-400 last:col-span-full"
					>
						<span className="text-sm mb-2" key={item.id}>
							{item.name}
						</span>
						<Image sizes="100" src={item.image} alt={item.id} width={100} />
					</Button>
				))}
			</div>
		</div>
	)
}

export default Categories
