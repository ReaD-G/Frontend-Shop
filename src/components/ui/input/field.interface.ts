import { InputHTMLAttributes } from 'react'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	defaultValue?:string
	name: string
	label: string
	type: string
	isRequired?: boolean
	startContent?: JSX.Element
	inputHandler: (e) => void
}
