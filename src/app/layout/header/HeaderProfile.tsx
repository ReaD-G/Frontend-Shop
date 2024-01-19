'use client'

import { useActions } from '@/hooks/useActions'
import { useProfile } from '@/hooks/useProfile'
import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { BiUser } from 'react-icons/bi'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	const { logout } = useActions()
	const { push } = useRouter()

	const handleLogout = () => {
		push('/')
		logout()
	}

	return (
		<Dropdown placement="bottom-end" backdrop="blur">
			<DropdownTrigger>
				<Avatar
					classNames={{
						base: 'bg-transparent sm:flex hidden',
						icon: 'text-black hover:text-lilac'
					}}
					as="button"
					className="transition-transform "
					size="md"
					icon={<BiUser size={28} />}
				/>
			</DropdownTrigger>
			<DropdownMenu aria-label="Profile Actions" variant="flat">
				{profile?.phone && (
					<DropdownItem
						textValue="profile"
						key="profile"
						className="h-14 gap-2"
					>
						<p className="font-semibold text-base">Номер телефона</p>
						<p className="font-semibold text-base">{profile.phone}</p>
					</DropdownItem>
				)}
				<DropdownItem
					textValue="orders"
					onClick={() => push('/my-orders')}
					key="orders"
				>
					<span className="text-base">Мои заказы</span>
				</DropdownItem>
				<DropdownItem
					textValue="logout"
					key="logout"
					color="danger"
					onClick={handleLogout}
				>
					<span className="text-base">Выйти</span>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}

export default HeaderProfile
