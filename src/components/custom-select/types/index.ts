export type Option = {
	value: any
	label: string
}


export type SelectProps = {
	options: Option[],
	onChange: (value: any) => void,
	mode?: 'single' | 'multiple' | 'tags'
}