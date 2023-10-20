'use client'

import { useTypedSelector } from '@/hooks/useTypedSelector'
import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { TransitionGroup } from 'react-transition-group'
import CSSTransition from '../CSSTransitionGroup'
import styles from './Carousel.module.scss'
import CarouselNavigation from './CarouselNavigation'
import { ICarouselItem } from './carousel.interface'

interface ICarousel {
	items: ICarouselItem[]
	className?: string
}

const Carousel: FC<ICarousel> = ({ items, className = '' }) => {
	const { selectedItemIndex } = useTypedSelector(state => state.carousel)
	const selectdItem = items[selectedItemIndex]
	return (
		<section className={cn(className, 'relative')}>
			<CarouselNavigation />
			<TransitionGroup className="relative h-56">
				<CSSTransition
					key={selectdItem.title}
					timeout={500}
					classNames={{
						enter: styles['item-enter'],
						enterActive: styles['item-enter-active'],
						exit: styles['item-exit'],
						exitActive: styles['item-exit-enter']
					}}
					unmountOnExit
					mountOnEnter
				>
					<div
						className={styles.item}
						style={
							selectdItem.image
								? {
										backgroundImage: `url(${selectdItem.image})`
								  }
								: {}
						}
					>
						<h2>{selectdItem.title}</h2>
						<p>{selectdItem.description}</p>
						{selectdItem.link ? (
							<Link href={selectdItem.link} className="btn btn-white">
								Read more
							</Link>
						) : (
							<Link href="/explorer" className="btn btn-white">
								Browse products
							</Link>
						)}
					</div>
				</CSSTransition>
			</TransitionGroup>
		</section>
	)
}
export default Carousel
