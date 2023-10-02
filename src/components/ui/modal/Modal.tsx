import type { FC, PropsWithChildren } from 'react'
import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { RiCloseFill } from 'react-icons/ri'
import styles from './Modal.module.scss'

interface IModal {
	isOpen: boolean
	closeModal: () => void
}

const Modal: FC<PropsWithChildren<IModal>> = ({
	children,
	isOpen,
	closeModal
}) => {
	const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'))

	if (!isOpen || !modalRef.current) {
		return null
	}

	return createPortal(
		(
			<div className={styles.overlay}>
				<div className={styles.window}>
					<button onClick={closeModal}>
						<RiCloseFill />
					</button>
					{children}
				</div>
			</div>
		) as any,
		modalRef.current
	)
}

export default Modal
