'use client'

import { TypeProductData } from '@/services/product/product.types'
import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Field from '@/ui/input/Field'
import { UploadButton } from '@/utils/uploadthing'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TiDeleteOutline } from 'react-icons/ti'

import { UploadService } from '@/services/upload.service'
import { IProductFields } from './product-fields.interface'
import { useAdminEditProduct } from './useAdminEditProduct'

import FieldArea from '@/ui/input/FieldArea'
import { Select, SelectItem } from '@nextui-org/react'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

const EditProduct: FC<{ id: number }> = ({ id }) => {
	const { push } = useRouter()
	const queryCache = useQueryClient()

	const [images, setImages] = useState<{ fileUrl: string; fileKey: string }[]>(
		[]
	)
	const { data, isFetching, mutateAsync, category } = useAdminEditProduct(
		id,
		push
	)

	useEffect(() => {
		if (data) {
			setImages(data.images)
		}
	}, [data])

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

	const onSubmit: SubmitHandler<TypeProductData> = fields => {
		const updateProduct = {
			name: fields.name || data.name,
			description: fields.description || data.description,
			images: images || data.images,
			price: +fields.price || +data.price,
			slug: data.slug,
			categoryId: fields.categoryId || data.category.id
		}
		mutateAsync(updateProduct)
		queryCache.invalidateQueries(['get admin products'])
	}

	if (isFetching) {
		return <Loader />
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

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="rounded-lg shadow-sm p-8 mb-3 w-full xl:w-1/2 h-full flex items-center flex-col justify-between container"
		>
			<div className="flex flex-col w-full">
				<Heading className="text-xl capitalize text-center mb-4">
					Обновить продукт
				</Heading>

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
					defaultValue={data.name}
					isRequired
					name="name"
					type="text"
					placeholder="Введите название украшения"
					label="Название украшения"
					inputHandler={e => setValue('name', e.target.value)}
				/>
				<FieldArea
					defaultValue={data.description}
					name="description"
					type="text"
					label="Описание украшения"
					inputHandler={e => setValue('description', e.target.value)}
					placeholder="Введите описание украшения"
				/>
				<Field
					defaultValue={data.price.toString()}
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
						<SelectItem key={item.name || data.category.name} value={item.name}>
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
				Обновить
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

export default EditProduct
