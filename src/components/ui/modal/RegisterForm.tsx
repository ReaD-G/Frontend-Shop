import { Button, Input } from '@nextui-org/react'

import { IPhone } from '@/store/user/user.interface'
import { useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BiPhone } from 'react-icons/bi'
import { useFormState } from './FormContext'
import { useActions } from '@/hooks/useActions'

const RegisterForm = ({ onClose }: { onClose: () => void }) => {
	const [phone, setPhone] = useState('')
	const { register } = useActions()

	const { onHandleNext, step } = useFormState()

	const { handleSubmit, setValue, reset, getValues } = useForm<{
		phone: string
		lastName: string
		firstName: string
	}>({
		mode: 'onChange',
		defaultValues: {
			phone: '',
			lastName: '',
			firstName: ''
		}
	})
	console.log(step)

	const onSubmit: SubmitHandler<IPhone> = fields => {
		console.log('fields', fields)
		register(fields)
		onHandleNext()

		// reset()
		// onClose()
	}

	const handleLastName = e => {
		setValue('lastName', e.target.value)
	}
	const handleFirstName = e => {
		setValue('firstName', e.target.value)
	}

	const handlePhone = e => {
		setPhone(e.target.value)
		setValue('phone', e.target.value)
	}

	const isInvalid = useMemo(() => {
		if (phone === '') return false
	}, [phone])

	return (
		<form
			className="flex flex-1 flex-col gap-3"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				isRequired
				name="Имя"
				autoFocus
				// endContent={
				// 	<CiMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
				// }
				type="lastName"
				isInvalid={false}
				label="Имя"
				onChange={e => handleLastName(e)}
				placeholder="Введите имя"
				variant="bordered"
			/>
			<Input
				isRequired
				name="Фамилия"
				// endContent={
				// 	<CiMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
				// }
				type="firstName"
				isInvalid={false}
				label="Фамилия"
				onChange={e => handleFirstName(e)}
				placeholder="Введите фамилию"
				variant="bordered"
			/>
			<Input
				isRequired
				color={isInvalid ? 'danger' : 'default'}
				name="Номер телофона"
				label="Номер телефона"
				// placeholder='+375 (29) XXX XX XX'
				placeholder="Введите номер телефона"
				type="tel"
				inputMode="tel"
				variant="bordered"
				onChange={e => handlePhone(e)}
				errorMessage={
					isInvalid && 'Пожалуйста введите правильный номер телефона'
				}
				startContent={
					<BiPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
				}
			/>
			<Button
				className="text-white bg-red-primary px-5 py-2 rounded-md"
				type="submit"
				color="default"
			>
				Зарегистрироваться
			</Button>
			<Button
				className="px-5 py-2 rounded-md"
				color="default"
				variant="bordered"
				onPress={onClose}
			>
				Закрыть
			</Button>
		</form>
	)
}

export default RegisterForm
