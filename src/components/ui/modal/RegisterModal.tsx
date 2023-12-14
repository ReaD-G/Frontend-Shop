import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader
} from '@nextui-org/react'
import { type FC } from 'react'
import { FormProvider } from './FormContext'
import { FormStep } from './FormStep'

interface IRegistModal {
	isOpen: boolean
	onClose: () => void
}

const RegisterModal: FC<IRegistModal> = ({ isOpen, onClose }) => {
	return (
		<Modal
			id="register"
			className="dark"
			backdrop="blur"
			isOpen={isOpen}
			placement="center"
			onClose={onClose}
		>
			<ModalContent>
				{onClose => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Зарегистрироваться
						</ModalHeader>
						<ModalBody>
							<FormProvider>
								<FormStep onClose={onClose} />
							</FormProvider>
						</ModalBody>
						<ModalFooter />
					</>
				)}
			</ModalContent>
		</Modal>
	)
}

export default RegisterModal
