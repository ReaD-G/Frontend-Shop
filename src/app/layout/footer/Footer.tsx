'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { SlSocialVkontakte } from 'react-icons/sl'

const ContactItem = () => {
	return (
		<div className="flex sm:items-center flex-col">
			<div className="flex items-start flex-col">
				<span className="sm:flex text-lg hidden underline underline-offset-2">
					Контакты
				</span>
				<div className="flex flex-col">
					<span>Адресс: ......</span>
					<span>Телефон: 8029*******</span>
					<span>Telegram и Viber: 8029*******</span>
					<span>Email: test@test.ru</span>
					<div className="flex gap-3 mt-2">
						<Link href="#">
							<BsInstagram className="text-white" />
						</Link>
						<Link href="#">
							<BsTelegram className="text-white" />
						</Link>
						<Link href="#">
							<SlSocialVkontakte className="text-white" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

const NavigationItem = () => {
	return (
		<div className="flex sm:items-center flex-col">
			<div className="flex items-start flex-col">
				<span className="sm:flex text-lg hidden underline underline-offset-2">
					Навигация
				</span>
				<div className="flex flex-col">
					<Link className="hover:underline" href="#">
						Контакты
					</Link>
					<Link className="hover:underline" href="#">
						Оплата и Доставка
					</Link>
					<Link className="hover:underline" href="#">
						Договор Оферты
					</Link>
				</div>
			</div>
		</div>
	)
}

const ClientItem = () => {
	return (
		<div className="flex sm:items-center flex-col">
			<div className="flex items-start flex-col">
				<span className="sm:flex text-lg hidden underline underline-offset-2">
					Для клиента
				</span>
				<div className="flex flex-col">
					<Link className="hover:underline" href="#">
						Оформление Заказа
					</Link>
					<Link className="hover:underline" href="/favorites">
						Избранные Товары
					</Link>
					<Link className="hover:underline" href="#">
						Профиль
					</Link>
					<Link className="hover:underline" href="/my-orders">
						Ваш Заказ
					</Link>
					<Link className="hover:underline" href="/checkout">
						Корзина
					</Link>
				</div>
			</div>
		</div>
	)
}

// update footer for disign

const Footer: React.FC = () => {
	return (
		<footer className="bg-black/50 py-5 text-white w-full px-6 items-center flex flex-col">
			<div className="container sm:grid sm:grid-cols-3 hidden justify-center w-full gap-3">
				<ContactItem />
				<NavigationItem />
				<ClientItem />
			</div>
			<Accordion fullWidth className="flex-col w-full flex sm:hidden">
				<AccordionItem key="1" aria-label="Контакты" title="Контакты">
					<ContactItem />
				</AccordionItem>
				<AccordionItem key="2" aria-label="Навигация" title="Навигация">
					<NavigationItem />
				</AccordionItem>
				<AccordionItem key="3" aria-label="Для клиента" title="Для клиента">
					<ClientItem />
				</AccordionItem>
			</Accordion>
			<p className="font-semibold text-center mt-10">
				Copyright © 2023 Интернет-магазин бижутерии.
			</p>
		</footer>
	)
}

export default Footer
