'use client'

import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import AuthModal from '@/ui/modal/AuthModal'
import RegisterModal from '@/ui/modal/RegisterModal'
import {
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
import HeaderCart from './cart/cart-item/HeaderCart'

const Header: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()
	const { push } = useRouter()
	const [modal, setModal] = useState('')

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const menuItems = [
		'Главная',
		'Все Товары',
		'Женские Украшения',
		'Мужские Украшения',
		'Корзина',
		'Выйти'
	]

	const { isOpen, onOpenChange, onClose, getButtonProps, getDisclosureProps } =
		useDisclosure()

	const openAuthModal = () => {
		setModal('auth')
		onOpenChange()
	}

	const openRegisterModal = () => {
		setModal('register')
		onOpenChange()
	}

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
			<NavbarContent className="lg:hidden" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>
			<NavbarContent className="lg:hidden pr-3" justify="center">
				<LogoComponent />
			</NavbarContent>
			<NavbarContent className="lg:flex hidden" justify="start">
				<LogoComponent />
			</NavbarContent>
			<NavbarContent className="lg:flex hidden gap-5 xl:gap-8" justify="center">
				<NavbarItem>
					<Link color="foreground" href="/" className="font-normal text-sm">
						Главная
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#" className="font-normal text-sm">
						Все Товары
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#" className="font-normal text-sm">
						Женские Украшения
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#" className="font-normal text-sm">
						Мужские Украшения
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				{!user ? (
					<>
						<NavbarItem className="hidden sm:flex">
							<Link
								className="text-white bg-red-primary px-5 py-2 rounded-md cursor-pointer"
								onClick={openAuthModal}
							>
								Войти
							</Link>
						</NavbarItem>
						<NavbarItem className="hidden md:flex">
							<Link
								onClick={openRegisterModal}
								className="cursor-pointer text-white bg-red-primary px-5 py-2 rounded-md"
							>
								Зарегистрироваться
							</Link>
						</NavbarItem>
					</>
				) : (
					<>
						{user?.isAdmin && !isAdminPanel && (
							<Link
								href="/admin"
								className="hover:text-red-primary transition-colors duration-200 text-white text-lg sm:inline-block hidden"
							>
								<MdOutlineAdminPanelSettings size={29} />
							</Link>
						)}
						<Link
							href="/favorites"
							className="text-white hover:text-red-primary"
						>
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
			{modal === 'auth' && <AuthModal isOpen={isOpen} onClose={onClose} />}
			{/* RegisterModal */}
			{modal === 'register' && (
				<RegisterModal isOpen={isOpen} onClose={onClose} />
			)}
		</Navbar>
	)
}

export default Header
