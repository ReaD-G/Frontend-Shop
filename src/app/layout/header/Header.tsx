'use client'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import AuthModal from '@/ui/modal/AuthModal'
import RegisterModal from '@/ui/modal/RegisterModal'
import {
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
import cn from 'classnames'
import { Zeyada } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import HeaderProfile from './HeaderProfile'
import HeaderCart from './cart/cart-item/HeaderCart'

const zeyada = Zeyada({
	weight: '400',
	variable: '--font-zeyada',
	subsets: ['latin']
})

const Header: FC = () => {
	const { user } = useAuth()
	const { isAdminPanel } = useIsAdminPanel()

	const { push } = useRouter()
	const { logout } = useActions()
	const [modal, setModal] = useState('')

	const handleLogout = () => {
		push('/')
		logout()
		setIsMenuOpen(false)
	}
	
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const openAuthModal = () => {
		setIsMenuOpen(false)
		setModal('auth')
		onOpenChange()
	}

	const openRegisterModal = () => {
		setIsMenuOpen(false)
		setModal('register')
		onOpenChange()
	}

	const menuItems = user
		? [
				{ name: 'Главная', link: '/', color: 'foreground' },
				{ name: 'Все Товары', link: '/category/all', color: 'foreground' },
				{
					name: 'Женские Украшения',
					link: '/category/women',
					color: 'foreground'
				},
				{
					name: 'Мужские Украшения',
					link: '/category/men',
					color: 'foreground'
				},
				{ name: 'Корзина', link: '/checkout', color: 'foreground' },
				{ name: 'Выйти', onClick: handleLogout, color: 'danger' }
			]
		: [
				{ name: 'Главная', link: '/', color: 'foreground' },
				{ name: 'Все Товары', link: '/category/all', color: 'foreground' },
				{
					name: 'Женские Украшения',
					link: '/category/women',
					color: 'foreground'
				},
				{
					name: 'Мужские Украшения',
					link: '/category/men',
					color: 'foreground'
				},
				{ name: 'Войти', onClick: openAuthModal, color: 'danger' },
				{
					name: 'Зарегистрироваться',
					onClick: openRegisterModal,
					color: 'danger'
				}
			]

	const { isOpen, onOpenChange, onClose, getButtonProps, getDisclosureProps } =
		useDisclosure()

	const LogoComponent = () => (
		<NavbarBrand onClick={() => push('/')}>
			<span
				className={cn(
					'font-bold text-2xl mt-2 ml-2 hover:cursor-pointer',
					zeyada.className
				)}
			>
				STEVISH JEWELRY
			</span>
		</NavbarBrand>
	)

	return (
		<Navbar
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			classNames={{
				base: 'flex items-center container bg-white px-6 sm:px-0',
				wrapper: 'px-0 border-b border-[#d4d4d4]'
			}}
			maxWidth="full"
			position="static"
		>
			<NavbarContent className="lg:hidden" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>
			<NavbarContent className="lg:hidden" justify="center">
				<LogoComponent />
			</NavbarContent>
			<NavbarContent className="lg:flex hidden" justify="start">
				<LogoComponent />
			</NavbarContent>
			<NavbarContent className="lg:flex hidden gap-5 xl:gap-8" justify="center">
				<NavbarItem>
					<Link
						color="foreground"
						href="/"
						className="font-normal text-base text-black"
					>
						Главная
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						color="foreground"
						href="/category/all"
						className="font-normal text-base text-black"
					>
						Все Товары
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						color="foreground"
						href="/category/women"
						className="font-normal text-base text-black"
					>
						Женские Украшения
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						color="foreground"
						href="/category/men"
						className="font-normal text-base text-black"
					>
						Мужские Украшения
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				{!user ? (
					<>
						<NavbarItem className="hidden sm:flex">
							<Link
								className="text-black bg-lilac px-5 py-2 rounded-md cursor-pointer"
								onClick={openAuthModal}
							>
								Войти
							</Link>
						</NavbarItem>
						<NavbarItem className="hidden md:flex">
							<Link
								onClick={openRegisterModal}
								className="cursor-pointer text-black bg-lilac px-5 py-2 rounded-md"
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
								className="hover:text-lilac transition-colors duration-200 text-black text-lg sm:inline-block hidden"
							>
								<MdOutlineAdminPanelSettings size={29} />
							</Link>
						)}
						<Link href="/favorites" className="text-black hover:text-lilac">
							<AiOutlineHeart size={28} />
						</Link>
						<HeaderCart />
						<HeaderProfile />
					</>
				)}
			</NavbarContent>
			<NavbarMenu className="bg-transparent ">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className="w-full text-lg"
							href={item.link}
							onClick={item.onClick}
							size="lg"
							color={
								item.color as
									| 'foreground'
									| 'danger'
									| 'primary'
									| 'secondary'
									| 'success'
									| 'warning'
							}
						>
							{item.name}
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
