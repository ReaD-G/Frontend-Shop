'use client'

import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import AuthModal from '@/ui/modal/AuthModal'
import {
	Button,
	Image,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	useDisclosure
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/cart-item/HeaderCart'

const Header: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()
	const { push } = useRouter()

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const menuItems = ['Favorites', 'Search', 'My orders', 'Cart', 'Log Out']

	const { isOpen, onOpenChange, onClose } = useDisclosure()

	const LogoComponent = () => (
		<NavbarBrand onClick={() => push('/')}>
			<Image width={180} height={17} src="/images/name.svg" alt="name" />
		</NavbarBrand>
	)

	return (
		<Navbar
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			classNames={{
				base: 'flex items-center container bg-[#161616] px-6 sm:px-0',
				wrapper: 'px-0 border-b border-[#323232]'
			}}
			maxWidth="full"
			position="static"
		>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>

			<NavbarContent className="sm:flex hidden" justify="start">
				<LogoComponent />
			</NavbarContent>

			<NavbarContent className="sm:hidden" justify="center">
				<LogoComponent />
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4 w-full" justify="start">
				<Search />
			</NavbarContent>

			<NavbarContent justify="end">
				{!user ? (
					<>
						<NavbarItem className="hidden sm:flex">
							<Link onClick={onOpenChange}>Login</Link>
						</NavbarItem>
						<NavbarItem>
							<Button as={Link} color="primary" href="#" variant="flat">
								Sign Up
							</Button>
						</NavbarItem>
					</>
				) : (
					<>
						{user?.isAdmin && !isAdminPanel && (
							<Link
								href="/admin"
								className="hover:text-primary transition-colors duration-200 text-white text-lg sm:inline-block hidden"
							>
								<MdOutlineAdminPanelSettings size={29} />
							</Link>
						)}
						<Link href="/favorites" className="text-white">
							<AiOutlineHeart size={28} />
						</Link>
						<HeaderCart />
						<HeaderProfile />
					</>
				)}
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className="w-full"
							color={
								index === 2
									? 'warning'
									: index === menuItems.length - 1
									? 'danger'
									: 'foreground'
							}
							href="#"
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>

			{/* AUTH MODAL */}
			<AuthModal isOpen={isOpen} onClose={onClose} />
		</Navbar>
	)
}

export default Header
