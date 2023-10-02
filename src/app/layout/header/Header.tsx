'use client'

import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/cart-item/HeaderCart'

const Header: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()

	return (
		<header
			className=" bg-secondary w-full py-6 px-6 grid"
			style={{
				gridTemplateColumns: '1fr 3fr 1.2fr'
			}}
		>
			<Link className="text-center flex " href="/">
				{isAdminPanel ? (
					<h2 className="text-3xl text-white font-semibold">Admin Panel</h2>
				) : (
					<>
						{/* <Image
							priority
							width={50}
							height={35}
							src="/images/logo.svg"
							alt="logo"
						/> */}
						<Image
							priority
							className="ml-3"
							width={180}
							height={17}
							src="/images/name.svg"
							alt="name"
						/>
					</>
				)}
			</Link>
			<Search />
			<div className="flex items-center justify-end gap-10">
				{user?.isAdmin && !isAdminPanel && (
					<Link
						href="/admin"
						className="hover:text-primary transition-colors duration-200 text-white inline-block text=lg"
					>
						<MdOutlineAdminPanelSettings size={29} />
					</Link>
				)}
				<Link href="/favorites" className="text-white">
					<AiOutlineHeart size={28} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
