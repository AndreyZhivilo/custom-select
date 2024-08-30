import { ReactNode } from "react"

export type Option<T> = {
	value: T
	label: string
}


export type SelectProps<T> = {
	options: Option<T>[],
	onChange: (value: T | T[]) => void,
	mode?: 'single' | 'multiple' 
	disabled?: boolean
	placeholder?: string
	tagRender?: (props: {label: string, value: T, onClose: () => void}) => ReactNode
	optionRender?: (props: {label: string, value: T, onClick: () => void, isSelected: boolean}) => ReactNode
}