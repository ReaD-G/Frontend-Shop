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
				variant="faded"
				size="sm"
				className="text-black bg-white"
				disableOutline
				content={number}
				isDot
				isInvisible={!number}
				shape="circle"
			>
				<Icon
					className="h-[28px] w-[28px] text-secondary hover:text-red-primary "
					size={21}
				/>
			</Badge>
		</button>
	)
}

export default SquareButton
