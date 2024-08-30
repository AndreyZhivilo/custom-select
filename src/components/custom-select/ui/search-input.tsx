import { cx } from '../styles'

export function SearchInput({
	value,
	onChange,
	plaiceholder = '',
}: {
	value: string,
	onChange: (value: string) => void,
	plaiceholder?: string,
}) {
	return (
		<input
			className={cx('search_input')}
			value={value}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
			placeholder={plaiceholder}
		/>
	)
}