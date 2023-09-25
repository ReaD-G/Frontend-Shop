import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import HeaderProfile from './HeaderProfile'
import HeaderCart from './cart/cart-item/HeaderCart'
import Search from './Search'

const Header: FC = () => {
	return (
		<header
			className=" bg-secondary w-full py-6 px-6 grid"
			style={{
				gridTemplateColumns: '1fr 3fr 1.2fr'
			}}
		>
			<Link className="text-center flex " href="/">
				<Image
					priority
					width={50}
					height={35}
					src="/images/logo.svg"
					alt="logo"
				/>
				<Image
					priority
					className="ml-3"
					width={200}
					height={35}
					src="/images/name.svg"
					alt="name"
				/>
			</Link>
			<Search />
			<div className="flex items-center justify-end gap-10">
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
