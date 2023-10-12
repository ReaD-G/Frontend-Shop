'use client'

import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import ModalDialog from '@/ui/modal/ModalDialog'
import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	useDisclosure
} from '@nextui-org/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import HeaderProfile from './HeaderProfile'
import Search from './Search'

const Header: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()
	const { push } = useRouter()

	const { isOpen, onOpenChange, onClose } = useDisclosure()

	return (
		// <header
		// 	className="bg-secondary w-full py-6 px-6 grid"
		// 	style={{
		// 		gridTemplateColumns: '1fr 3fr 1fr'
		// 	}}
		// >
		// 	<Link className="text-center flex" href="/">
		// 		{isAdminPanel ? (
		// 			<h2 className="text-3xl text-white font-semibold">Admin Panel</h2>
		// 		) : (
		// 			<>
		// 				{/* <Image
		// 					priority
		// 					width={50}
		// 					height={35}
		// 					src="/images/logo.svg"
		// 					alt="logo"
		// 				/> */}
		// 				<Image
		// 					priority
		// 					className="ml-3"
		// 					width={180}
		// 					height={17}
		// 					src="/images/name.svg"
		// 					alt="name"
		// 				/>
		// 			</>
		// 		)}
		// 	</Link>
		// 	<Search />
		// 	<div className="flex items-center justify-end gap-10">
		// 		{user?.isAdmin && !isAdminPanel && (
		// 			<Link
		// 				href="/admin"
		// 				className="hover:text-primary transition-colors duration-200 text-white inline-block text=lg"
		// 			>
		// 				<MdOutlineAdminPanelSettings size={29} />
		// 			</Link>
		// 		)}
		// 		<Link href="/favorites" className="text-white">
		// 			<AiOutlineHeart size={28} />
		// 		</Link>
		// 		<HeaderCart />
		// 		<HeaderProfile />
		// 	</div>
		// </header>
		<Navbar maxWidth="full" position="sticky" className="bg-secondary">
			<NavbarBrand onClick={() => push('/')}>
				<Image
					priority
					className="ml-3"
					width={180}
					height={17}
					src="/images/name.svg"
					alt="name"
				/>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4 w-full" justify="start">
				<Search />
			</NavbarContent>
			<NavbarContent justify="end">
				{user ? (
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
					<HeaderProfile />
				)}
			</NavbarContent>
			<ModalDialog isOpen={isOpen} onClose={onClose} />
		</Navbar>
	)
}

export default Header
