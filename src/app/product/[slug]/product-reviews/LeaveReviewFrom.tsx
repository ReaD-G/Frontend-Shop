'use client'

import { ReviewService } from '@/services/review.service'
import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'

import { Button } from '@nextui-org/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Rating } from 'react-simple-star-rating'
import { IReviewFields } from './review-fields.interface'

const LeaveReviewForm: FC<{ productId: number }> = ({ productId }) => {
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm<IReviewFields>({
		mode: 'onChange'
	})

	const qyeryClient = useQueryClient()

	const { mutate, isSuccess, isLoading } = useMutation(
		['leave review'],
		(data: IReviewFields) => ReviewService.leave(productId, data),
		{
			onSuccess: () => {
				qyeryClient.invalidateQueries(['get product', productId])
			}
		}
	)

	const onSubmit: SubmitHandler<IReviewFields> = data => {
		mutate(data)
		reset()
	}

	if (isSuccess) return <div>✅ Review successfully published!</div>

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Heading className="text-center mb-2 text-2xl">Оставить отзыв</Heading>
			{isLoading ? (
				<Loader className="min-h-[200px]" />
			) : (
				<div className="flex justify-between flex-col items-center">
					<Controller
						control={control}
						name="rating"
						render={({ field: { onChange, value } }) => (
							<Rating
								onClick={onChange}
								initialValue={value}
								SVGstyle={{
									display: 'inline-block'
								}}
								size={30}
								transition
							/>
						)}
						rules={{
							required: 'Rating is required'
						}}
					/>
					<textarea
						{...formRegister('text', {
							required: 'Text is required'
						})}
						placeholder="Напиши свой отзыв..."
						className="rounded-md border border-gray/70 bg-white p-3 block mt-4 resize-none w-full text-sm min-h-[110px]"
					/>

					{Object.entries(errors) && (
						<ul className="text-red animate-opacity text-sm list-disc pl-4 mt-3">
							{Object.entries(errors).map(([_, error]) => (
								<li key={error.message}>{error?.message}</li>
							))}
						</ul>
					)}

					<Button
						type="submit"
						className="text-semibold text-black text-lg border-gray hover:border-lilac border-1.5 mb-3 hover:bg-lilac hover:text-white"
						variant="bordered"
						radius="lg"
						size="md"
						fullWidth
					>
						Отправить
					</Button>
				</div>
			)}
		</form>
	)
}

export default LeaveReviewForm
