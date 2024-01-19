import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/services/user.service'
import { IProduct } from '@/types/product.interface'
import { cn } from '@nextui-org/react'
import { useMutation } from '@tanstack/react-query'
import { BsFillSuitHeartFill, BsSuitHeart } from 'react-icons/bs'

const FavoriteButton: FC<{
	product: IProduct
	sizeIcon?: number
	className?: string
}> = ({ product, sizeIcon = 25, className }) => {
	const { profile } = useProfile()
	const { addToFavorites, removeFromFavorites } = useActions()

	if (!profile) return null

	const isExists = profile.favorites.some(
		favorite => favorite.id === product.id
	)

	const { mutate } = useMutation(['toggle favorite'], () =>
		UserService.toggleFavorite(product.id)
	)

	const handlerFavorites = () => {
		isExists
			? removeFromFavorites({ id: product.id })
			: addToFavorites({ product })
		mutate()
	}

	return (
		<button onClick={handlerFavorites} className={cn('text-black', className)}>
			{isExists ? (
				<BsFillSuitHeartFill size={sizeIcon} />
			) : (
				<BsSuitHeart size={sizeIcon} />
			)}
		</button>
	)
}

export default FavoriteButton
