'use client'

import { TypeProductData } from '@/services/product/product.types'
import Heading from '@/ui/Heading'
import Field from '@/ui/input/Field'
import { UploadButton } from '@/utils/uploadthing'
import Image from 'next/image'
import { ChangeEvent, FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TiDeleteOutline } from 'react-icons/ti'

import { UploadService } from '@/services/upload.service'
import { IProductFields } from './product-fields.interface'
import { useAdminCreateProduct } from './useAdminCreateProduct'

import Loader from '@/ui/Loader'
import FieldArea from '@/ui/input/FieldArea'
import { Button, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const CreateProduct: FC = () => {
	const { push } = useRouter()
	const { createProduct, updateNewProduct, category, isFetching } =
		useAdminCreateProduct()
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

	const {
		handleSubmit,
		setValue,
		formState: { isSubmitSuccessful }
	} = useForm<IProductFields>({
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
		<div className="overflow-auto flex flex-row gap-5 mb-3">
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

	if (isFetching) {
		return <Loader />
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="rounded-lg shadow-sm p-8 mb-3 w-full xl:w-1/2 h-full flex items-center flex-col justify-between container"
		>
			<div className="flex flex-col w-full items-center">
				<Heading className="text-xl text-center mb-4">Создать продукт</Heading>
				{/* Upload images  */}
				<div className="flex flex-col items-center">
					{imgList}
					<UploadButton
						className="ut-button:bg-black mb-2"
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
					isRequired
					name="name"
					type="text"
					placeholder="Введите название украшения"
					label="Название украшения"
					inputHandler={e => setValue('name', e.target.value)}
				/>
				<FieldArea
					name="description"
					type="text"
					label="Описание украшения"
					inputHandler={e => setValue('description', e.target.value)}
					placeholder="Введите описание украшения"
				/>
				<Field
					isRequired
					name="price"
					type="number"
					label="Цена"
					placeholder="0.00"
					startContent={<span className="text-black/50">BYN</span>}
					inputHandler={e => setValue('price', e.target.value)}
				/>
				<Select
					labelPlacement="outside"
					variant="bordered"
					label="Категория"
					disallowEmptySelection
					defaultSelectedKeys={['Женские']}
					onChange={handleChange}
					listboxProps={{
						itemClasses: {
							title: 'text-[18px] placeholder:text-gray',
							base: 'data-[selectable=true]:focus:bg-lilac/30'
						}
					}}
					classNames={{
						base: 'text-md',
						label: 'text-lg text-semibold',
						innerWrapper: 'bg-transparent ',
						value: 'bg-transparent text-md text-normal placeholder:text-gray',
						trigger:
							'px-4 py-2 shadow-xl mb-5 mt-4 border-gray border data-[hover=true]:border-lilac data-[open=true]:border-lilac data-[focus=true]:border-lilac'
					}}
				>
					{category?.map(item => (
						<SelectItem key={item.name} value={item.name}>
							{item.name}
						</SelectItem>
					))}
				</Select>
			</div>
			<Button
				isLoading={isSubmitSuccessful}
				fullWidth
				radius="lg"
				type="submit"
				variant="bordered"
				className="text-semibold text-black text-lg border-gray hover:border-lilac border-1.5 hover:bg-lilac hover:text-white mb-2"
			>
				Создать
			</Button>
			<Button
				fullWidth
				radius="lg"
				variant="bordered"
				isDisabled={isSubmitSuccessful}
				size="md"
				className="text-semibold text-black text-lg border-gray hover:border-lilac border-1.5 hover:bg-lilac hover:text-white"
				onClick={() => push('/admin')}
			>
				Закрыть
			</Button>
		</form>
	)
}

export default CreateProduct
