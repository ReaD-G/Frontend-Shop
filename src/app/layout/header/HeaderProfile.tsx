'use client'

import { useActions } from '@/hooks/useActions'
import { useOutside } from '@/hooks/useOutside'
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

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	console.log(profile)
	const { logout } = useActions()
	const { push } = useRouter()

	const { isShow, ref, setIsShow } = useOutside(false)

	const handleLogout = () => {
		console.log('logout')
		// logout()
		// push('/auth')
	}

	if (!profile?.avatarPath) return null

	return (
		// <div className="relative" ref={ref}>
		// 	<button onClick={() => setIsShow(!isShow)}>
		// 		{profile?.avatarPath && (
		// 			<Image
		// 				width={50}
		// 				height={50}
		// 				src={profile?.avatarPath}
		// 				alt="profile"
		// 				className="rounded-full border-primary border border-solid animate-opacity"
		// 			/>
		// 		)}
		// 	</button>
		// 	{isShow && (
		// 		<div
		// 			className="absolute w-40 right-2 z-20"
		// 			style={{
		// 				top: 'calc(100% + 1rem)'
		// 			}}
		// 		>
		// 			<Link
		// 				href="/my-orders"
		// 				className="bg-white shadow py-2 px-4 block w-full rounded-md hover:text-primary duration-300 transition-colors"
		// 			>
		// 				My orders
		// 			</Link>
		// 		</div>
		// 	)}
		// </div>
		<Dropdown placement="bottom-end" backdrop="blur">
			<DropdownTrigger>
				<Avatar
					isBordered
					as="button"
					className="transition-transform"
					color="secondary"
					size="sm"
					src={profile?.avatarPath}
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
