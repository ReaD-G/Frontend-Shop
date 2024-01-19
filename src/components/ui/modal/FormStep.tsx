import { useFormState } from './FormContext'
import OtpForm from './OtpForm'
import RegisterForm from './RegisterForm'

export function FormStep({ onClose }: { onClose: () => void }) {
	const { step } = useFormState()

	switch (step) {
		case 1:
			return <RegisterForm onClose={onClose} />
		case 2:
			return <OtpForm onClose={onClose} />
	}
}
