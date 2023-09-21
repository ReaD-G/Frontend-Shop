import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import HeaderProfile from './HeaderProfile'
import HeaderCart from './cart/cart-item/HeaderCart'

const Header: FC = () => {
	return (
		<header
			className=" bg-secondary w-full py-6 px-6 grid"
			style={{
				gridTemplateColumns: '1fr 3fr 1.2fr'
			}}
		>
			<Link className="justify-center text-center flex" href="/">
				<Image
					priority
					width={350}
					height={35}
					src="/images/logo.svg"
					alt="Shop"
				/>
			</Link>
			{/* <Search /> */}
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
