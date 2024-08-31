import { cx } from '../styles'

export function SearchInput({
	value,
	onChange,
	onFocus,
	plaiceholder = '',
}: {
	value: string,
	onChange: (value: string) => void,
	onFocus?: () => void,
	plaiceholder?: string,
}) {
	return (
		<input
			className={cx('search_input')}
			value={value}
			onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
			placeholder={plaiceholder}
			onFocus={onFocus}
		/>
	)
}