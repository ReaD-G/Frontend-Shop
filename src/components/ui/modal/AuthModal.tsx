import {
	Button,
	Input,
	Link,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader
} from '@nextui-org/react'
import { type FC } from 'react'

import { CiLock, CiMail } from 'react-icons/ci'

interface IModal {
	isOpen: boolean
	onClose: () => void
}

const AuthModal: FC<IModal> = ({ isOpen, onClose }) => {
	return (
		<Modal backdrop="blur" isOpen={isOpen} placement="center" onClose={onClose}>
			<ModalContent>
				{onClose => (
					<>
						<ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
						<ModalBody>
							<Input
								autoFocus
								endContent={
									<CiMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
								}
								label="Email"
								placeholder="Enter your email"
								variant="bordered"
							/>
							<Input
								endContent={
									<CiLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
								}
								label="Password"
								placeholder="Enter your password"
								type="password"
								variant="bordered"
							/>
							<div className="flex py-2 px-1 justify-between">
								<Link color="primary" href="#" size="sm">
									Forgot password?
								</Link>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button color="danger" variant="flat" onPress={onClose}>
								Close
							</Button>
							<Button color="primary" onPress={onClose}>
								Sign in
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}

export default AuthModal
