import OtpInput from 'react-otp-input'

import { IPhone } from '@/store/user/user.interface'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormState } from './FormContext'

const OptForm = ({ onClose }: { onClose: () => void }) => {
	const [otp, setOtp] = useState('')
	const { onHandleNext, step } = useFormState()

	const { handleSubmit, setValue, reset, getValues } = useForm<{
		otp: string
	}>({
		mode: 'onChange',
		defaultValues: {
			otp: ''
		}
	})

	const handleLastName = e => {
		setValue('otp', e.target.value)
	}

	const onSubmit: SubmitHandler<IPhone> = fields => {
		console.log(fields)
		// onHandleNext()

		// register(fields)
		// reset()
		// onClose()
	}

	console.log('otp', otp)

	return (
		<form
			className="flex flex-1 flex-col gap-3"
			onSubmit={handleSubmit(onSubmit)}
		>
			<OtpInput
				value={otp}
				onChange={setOtp}
				numInputs={6}
				renderSeparator={<span>-</span>}
				containerStyle={{ display: 'flex', justifyContent: 'center' }}
				inputType="tel"
				shouldAutoFocus
				inputStyle={{
					width: 40,
					height: 50,
					margin: '0 10px',
					borderRadius: 10,
					boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
				}}
				renderInput={props => <input type="number" {...props} />}
			/>
		</form>
	)
}

export default OptForm
