import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import { PropsWithChildren, type FC } from 'react'

interface IModal {
	isOpen: boolean
	onClose: () => void
}

const ModalDialog: FC<PropsWithChildren<IModal>> = ({
	isOpen,
	onClose,
	children
}) => {
	return (
		<Modal backdrop="blur" isOpen={isOpen} placement="center" onClose={onClose}>
			<ModalContent>
				{onClose => (
					<>
						<ModalHeader className="flex flex-col gap-1" />
						<ModalBody>{children}</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}

export default ModalDialog
