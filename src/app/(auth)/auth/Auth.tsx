'use client'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { IEmailPassword } from '@/store/user/user.interface'
import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuthRedirect } from './useAuthRedirect'
import { validEmail } from './valid-email'

const Auth: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const { login, register } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') {
			login(data)
		} else {
			register(data)
		}
		reset()
	}

	return (
		<section className="flex h-screen">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="rounded-lg bg-white shadow-sm p-8 m-auto w-1/3 h-1/2 flex items-center flex-col justify-between"
			>
				<div className="flex flex-col w-full">
					{isLoading ? (
						<Loader />
					) : (
						<>
							<Heading className="text-xl capitalize text-center mb-4">
								{type}
							</Heading>
							<Field
								placeholder="Email"
								error={errors.email?.message}
								{...formRegister('email', {
									required: 'Email is required',
									pattern: {
										value: validEmail,
										message: 'Please enter a valid email address'
									}
								})}
							/>
							<Field
								placeholder="Password"
								error={errors.password?.message}
								type="password"
								{...formRegister('password', {
									required: 'Password is required',
									minLength: {
										value: 6,
										message: 'Min length should more 6 symbols'
									}
								})}
							/>
						</>
					)}
				</div>
				<div className='w-full'>
					<Button type="submit" className="w-full" variant="orange">
						Let's go
					</Button>
					<button
						type="button"
						className=" underline text-gray w-full mt-2"
						onClick={() => setType(type === 'login' ? 'register' : 'login')}
					>
						{type === 'login' ? 'Register' : 'Login'}
					</button>
				</div>
			</form>
		</section>
	)
}

export default Auth
