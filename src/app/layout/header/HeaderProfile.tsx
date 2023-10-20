'use client'

import { useActions } from '@/hooks/useActions'
import { useProfile } from '@/hooks/useProfile'
import {
	Avatar,
	AvatarIcon,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	const { logout } = useActions()
	const { push } = useRouter()

	const handleLogout = () => {
		push('/')
		logout()
	}

	if (!profile?.avatarPath) return null

	return (
		<Dropdown placement="bottom-end" backdrop="blur">
			<DropdownTrigger>
				<Avatar
					classNames={{
						base: 'bg-gradient-to-br from-[#FFB457] to-[#FF705B] sm:flex hidden',
						icon: 'text-white/80'
					}}
					as="button"
					className="transition-transform border-white border-2"
					size="md"
					icon={<AvatarIcon />}
				/>
			</DropdownTrigger>
			<DropdownMenu aria-label="Profile Actions" variant="flat">
				<DropdownItem textValue="profile" key="profile" className="h-14 gap-2">
					<p className="font-semibold">Signed in as</p>
					<p className="font-semibold">{profile.email}</p>
				</DropdownItem>
				<DropdownItem
					textValue="orders"
					onClick={() => push('/my-orders')}
					key="orders"
				>
					My orders
				</DropdownItem>
				<DropdownItem
					textValue="logout"
					key="logout"
					color="danger"
					onClick={handleLogout}
				>
					Log Out
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}

export default HeaderProfile
