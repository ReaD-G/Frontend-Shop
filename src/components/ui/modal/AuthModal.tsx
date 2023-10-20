import { useActions } from '@/hooks/useActions'
import { IEmailPassword } from '@/store/user/user.interface'
import { validEmail } from '@/utils/valid-email'
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
import { useMemo, useState, type FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { CiLock, CiMail } from 'react-icons/ci'

interface IModal {
	isOpen: boolean
	onClose: () => void
}

/// Update form for use phone number

const AuthModal: FC<IModal> = ({ isOpen, onClose }) => {
	const { login, register } = useActions()
	const [email, setEmail] = useState('')

	const [type, setType] = useState<'login' | 'register'>('login')

	const { handleSubmit, setValue, reset, getValues } = useForm<IEmailPassword>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit: SubmitHandler<IEmailPassword> = fields => {
		if (type === 'login') {
			login(fields)
		} else {
			register(fields)
		}
		reset()
		onClose()
	}

	const validateEmail = value => value.match(validEmail)

	const handleEmail = e => {
		setEmail(e.target.value)
		setValue('email', e.target.value)
	}

	const isInvalid = useMemo(() => {
		if (email === '') return false
		return validateEmail(email) ? false : true
	}, [email])

	return (
		<Modal
			className="dark"
			backdrop="blur"
			isOpen={isOpen}
			placement="center"
			onClose={onClose}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
							<ModalBody>
								<Input
									isRequired
									color={isInvalid ? 'danger' : 'default'}
									name="Email"
									autoFocus
									endContent={
										<CiMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
									}
									type="email"
									isInvalid={false}
									label="Email"
									onChange={e => handleEmail(e)}
									placeholder="Enter your email"
									variant="bordered"
									errorMessage={isInvalid && 'Please enter a valid email'}
								/>
								<Input
									endContent={
										<CiLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
									}
									label="Password"
									placeholder="Enter your password"
									type="password"
									variant="bordered"
									onChange={e => setValue('password', e.target.value)}
								/>
								<div className="flex py-2 px-1 justify-between">
									<Link color="primary" href="#" size="sm">
										Forgot password?
									</Link>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button type="submit" color="primary">
									Sign in
								</Button>
								<Button color="danger" variant="flat" onPress={onClose}>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</form>
		</Modal>
	)
}

export default AuthModal
