import { cx } from '../styles'
import type { Option } from '../types'

export function DefaultOptionsList<T>({
	options,
	isSelected,
	onOptionClick,
}: {
	options: Option<T>[],
	isSelected: (label: string) => boolean,
	onOptionClick: (option: Option<T>) => void,
}) {
	if (options.length === 0) return <div className={cx('list', 'text_gray')}>Ничего не найдено...</div>
	return (
		<div className={cx('list')}>
			{options.map(option => {
				return (
					<div
						className={cx('list_item', { 'list_item_selected': isSelected(option.label) })}
						key={option.label}
						onClick={() => onOptionClick(option)}
					>
						{option.label}
					</div>
				)
			})}
		</div>
	)
}