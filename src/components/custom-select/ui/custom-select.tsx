import css from './custom-select.module.css'
import cn from 'classnames/bind'
import { useState, useEffect } from 'react';
import { Icon } from './icon'
import type { SelectProps, Option } from '../types'

const cx = cn.bind(css)

export function CustomSelect({ options, onChange, mode = 'single' }: SelectProps) {

	const [isOpen, setIsOpen] = useState(false)

	const [selected, setSelected] = useState<Option[]>([])

	const toggleOpen = () => setIsOpen(prev => !prev)

	const onOptionClick = (value: Option) => {
		setIsOpen(false)
		setSelected([value])
	}

	useEffect(() => {
		if (selected.length) {
			onChange(selected[0].value)
		}

	}, [selected])

	return (
		<div className={cx("wrap")}>
			<div className={cx('wrap_selector')} onClick={toggleOpen}>
				{mode === 'single' ? (
					selected.length === 0
						? <span className={cx('placeholder')}>Placeholder</span>
						: selected[0].label
				) : 'Здесь будет кусок кода для мультирежима'}

				<Icon isOpen={isOpen} />
			</div>
			<div className={cx('wrap_dropdown', { 'visually-hidden': !isOpen })} role='listbox'>
				<div className={cx('list')}>
					{options.map(option => {
						return (
							<div className={cx('list_item')} key={option.value} onClick={() => onOptionClick(option)}>
								{option.label}
							</div>
						)
					})}
				</div>
			</div>
		</div>

	);
}
