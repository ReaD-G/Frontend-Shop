import { useActions } from '@/hooks/useActions'
import { IPhone } from '@/store/user/user.interface'
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader
} from '@nextui-org/react'
import { useMemo, useState, type FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BiPhone } from 'react-icons/bi'

interface IModal {
	isOpen: boolean
	onClose: () => void
}

/// Update form for use phone number

const AuthModal: FC<IModal> = ({ isOpen, onClose }) => {
	const { login, register } = useActions()
	// const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')

	const [type, setType] = useState<'login' | 'register'>('login')

	const { handleSubmit, setValue, reset, getValues } = useForm<IPhone>({
		mode: 'onChange',
		defaultValues: {
			phone: ''
			// email: '',
			// password: ''
		}
	})

	const onSubmit: SubmitHandler<IPhone> = fields => {
		if (type === 'login') {
			login(fields)
		} else {
			register(fields)
		}
		reset()
		onClose()
	}

	// const validateEmail = value => value.match(validEmail)

	// const handleEmail = e => {
	// 	setEmail(e.target.value)
	// 	setValue('email', e.target.value)
	// }

	const handlePhone = e => {
		setPhone(e.target.value)
		setValue('phone', e.target.value)
	}

	// const isInvalid = useMemo(() => {
	// 	if (email === '') return false
	// 	return validateEmail(email) ? false : true
	// }, [email])

	const isInvalid = useMemo(() => {
		if (phone === '') return false
	}, [phone])

	return (
		<Modal
			id="auth"
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
							<ModalHeader className="flex flex-col gap-1">Войти</ModalHeader>
							<ModalBody>
								<Input
									color={isInvalid ? 'danger' : 'default'}
									name="Номер телофона"
									label="Номер телефона"
									// placeholder='+375 (29) XXX XX XX'
									placeholder="Введите номер телефона"
									type="tel"
									inputMode="tel"
									autoFocus
									variant="bordered"
									onChange={e => handlePhone(e)}
									errorMessage={
										isInvalid && 'Пожалуйста введите правильный номер телефона'
									}
									startContent={
										<BiPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
									}
								/>
								{/* <Input
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
								/> */}
								{/* <div className="flex py-2 px-1 justify-between">
									<Link color="primary" href="#" size="sm">
										Забыл пароль?
									</Link>
								</div> */}
							</ModalBody>
							<ModalFooter>
								<Button
									className="text-white bg-red-primary px-5 py-2 rounded-md"
									type="submit"
									color="default"
								>
									Войти
								</Button>
								<Button
									className="px-5 py-2 rounded-md"
									// color="default"
									variant="bordered"
									onPress={onClose}
								>
									Закрыть
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
