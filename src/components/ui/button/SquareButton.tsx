import { Badge } from '@nextui-org/react'
import { FC } from 'react'
import { IconType } from 'react-icons'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }) => {
	return (
		<button onClick={onClick} className="flex items-center justify-center">
			<Badge
				size="sm"
				className="text-black bg-white border-1 border-lilac hover:border-lilac"
				content={number}
				isDot
				isOneChar
				isInvisible={!number}
				shape="rectangle"
			>
				<Icon
					className="h-[28px] w-[28px] text-black hover:text-lilac"
					size={21}
				/>
			</Badge>
		</button>
	)
}

export default SquareButton
