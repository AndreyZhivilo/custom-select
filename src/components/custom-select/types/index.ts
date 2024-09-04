import { ReactNode } from "react"

export type Option<T> = {
	value: T
	label: string
}


export type SelectProps<T> = {
	options: Option<T>[],
	mode?: 'single' | 'multiple' 
	disabled?: boolean
	placeholder?: string
	showSearch?: boolean
	error?: boolean
	onChange: (value: T | T[] | null) => void,
	tagRender?: (props: {label: string, value: T, onClose: () => void}) => ReactNode
	optionRender?: (props: {label: string, value: T, onClick: () => void, isSelected: boolean}) => ReactNode
	dropdownRender?: (menu: ReactNode) => ReactNode
	createOptionAsync?: (option: string) => Promise<Option<T>>
}