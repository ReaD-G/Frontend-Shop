'use client'

import { TypeProductData } from '@/services/product/product.types'
import Heading from '@/ui/Heading'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import { UploadButton } from '@/utils/uploadthing'
import Image from 'next/image'
import { ChangeEvent, FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TiDeleteOutline } from 'react-icons/ti'

import { UploadService } from '@/services/upload.service'
import { IProductFields } from './product-fields.interface'
import { useAdminCreateProduct } from './useAdminCreateProduct'

import { Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const CreateProduct: FC = () => {
	const { push } = useRouter()
	const { createProduct, updateNewProduct, category } = useAdminCreateProduct()
	const [images, setImages] = useState<{ fileUrl: string; fileKey: string }[]>(
		[]
	)

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const {
			target: { value }
		} = event
		const categoryId = category.find(item => item.name === value).id
		setValue('categoryId', categoryId)
	}

	const handleDelete = async (key: string) => {
		await UploadService.delete(key)
		const newArrayImages = images.filter(image => image.fileKey !== key)
		setImages(newArrayImages)
	}

	const { handleSubmit, setValue } = useForm<IProductFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<TypeProductData> = async fields => {
		const { data: id } = await createProduct()
		const updateProduct = {
			name: fields.name,
			description: fields.description,
			images: images,
			price: +fields.price,
			categoryId: fields.categoryId,
			slug: ''
		}

		updateNewProduct({ itemProduct: updateProduct, id: +id })
		push('/admin')
	}

	const imgList = (
		<div className="overflow-auto flex flex-row gap-5">
			{images.map(image => (
				<div key={image.fileKey} className="relative bg-white rounded-xl">
					<div
						className="absolute p-1 right-1 z-1 rounded cursor-pointer active:opacity-5"
						onClick={() => handleDelete(image.fileKey)}
					>
						<TiDeleteOutline className="text-red rounded bg-white" />
					</div>
					<Image
						className="rounded-xl"
						src={image.fileUrl}
						width={200}
						height={200}
						alt={image.fileUrl}
					/>
				</div>
			))}
		</div>
	)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="rounded-lg shadow-sm p-8 m-auto w-full h-full flex items-center flex-col justify-between container"
		>
			<div className="flex flex-col w-full">
				<Heading className="text-xl text-center mb-4">Создать продукт</Heading>

				{/* Upload images  */}
				<div className="flex flex-col items-center">
					{imgList}
					<UploadButton
						className="ut-button:bg-black"
						endpoint="imageUploader"
						onClientUploadComplete={res => {
							if (res) {
								setImages([...images, ...res])
							}
						}}
						onUploadError={(error: Error) => {
							console.log(`ERROR! ${error.message}`)
						}}
					/>
				</div>
				<Field
					defaultValue={''}
					placeholder="Name product"
					onChange={e => setValue('name', e.target.value)}
				/>
				<Field
					defaultValue={''}
					placeholder="Description product"
					onChange={e => setValue('description', e.target.value)}
				/>
				<Field
					defaultValue={0}
					type="number"
					placeholder="Price"
					onChange={e => setValue('price', e.target.value)}
				/>
				<Select
					isRequired
					variant="bordered"
					label="Category"
					placeholder="Select category"
					disallowEmptySelection
					defaultSelectedKeys={[]}
					className="w-full mb-5"
					onChange={handleChange}
				>
					{category?.map(item => (
						<SelectItem key={item.name} value={item.name}>
							{item.name}
						</SelectItem>
					))}
				</Select>
			</div>
			<Button type="submit" className="w-full mb-5" variant="orange">
				Create
			</Button>
			<Button className="w-full" variant="white" onClick={() => push('/admin')}>
				Cancel
			</Button>
		</form>
	)
}

export default CreateProduct
