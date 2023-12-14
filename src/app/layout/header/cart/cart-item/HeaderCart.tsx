'use client'

import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import SquareButton from '@/ui/button/SquareButton'
import { convertPrice } from '@/utils/convertPrice'
import { Link } from '@nextui-org/react'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import styles from './Cart.module.scss'
import CartItem from './CartItem'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	return (
		<div className="relative sm:flex hidden" ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={items.length}
			/>
			{isShow && (
				<div className={styles.cartWrapper}>
					<div className="font-normal text-lg mb-5">Моя корзина</div>
					<div className={styles.cart}>
						{items.length ? (
							items.map(item => <CartItem item={item} key={item.id} />)
						) : (
							<div className="font-light">Корзина пуста!</div>
						)}
					</div>

					<div className={styles.footer}>
						<div>Общая цена:</div>
						<div>{convertPrice(total)}</div>
					</div>
					{!!items.length && (
						<div className="text-center mt-7 mb-5">
							<Link
								className="text-white bg-red-primary px-5 py-2 rounded-md"
								href="/checkout"
								onClick={() => setIsShow(false)}
							>
								Перейти к оплате
							</Link>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Cart
