import { Input } from '@nextui-org/react'
import { FC } from 'react'
import { IField } from './field.interface'

const Field: FC<IField> = ({
	defaultValue,
	placeholder,
	name,
	label,
	type = 'text',
	inputHandler,
	isRequired,
	startContent
}) => {
	return (
		<Input
			defaultValue={defaultValue}
			radius="lg"
			classNames={{
				label: 'text-lg text-semibold',
				input: 'bg-transparent text-md text-normal placeholder:text-gray',
				innerWrapper: 'bg-transparent',
				inputWrapper:
					'shadow-xl px-4 py-2 mb-5 border-gray border group-data-[hover=true]:border-lilac'
			}}
			color="primary"
			labelPlacement="outside"
			isRequired={isRequired}
			startContent={startContent}
			name={name}
			type={type}
			label={label}
			onChange={inputHandler}
			placeholder={placeholder}
			variant="bordered"
		/>
	)
}

Field.displayName = 'Field'

export default Field
