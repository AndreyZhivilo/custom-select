import React, { useState, useEffect, useRef } from 'react';
import css from './custom-select.module.css'
import cn from 'classnames/bind'
import { ArrowIcon } from './arrow-icon'
import type { SelectProps, Option } from '../types'
import { Tag } from './tag';


const cx = cn.bind(css)

export function CustomSelect<T>({
	options,
	onChange,
	mode = 'single',
	disabled = false,
	placeholder = 'placeholder',
	tagRender,
	optionRender,
}: SelectProps<T>) {

	const [isOpen, setIsOpen] = useState(false)

	const [selected, setSelected] = useState<Option<T>[]>([])

	const selectedMapRef = useRef<{ [key: string]: T }>()

	const toggleOpen = () => {
		if (disabled) return
		setIsOpen(prev => !prev)
	}

	const onOptionClick = (option: Option<T>) => {
		// if (disabled) return

		setIsOpen(false)
		if (mode === 'single') {
			selectedMapRef.current?.[option.label] ?? setSelected([option])
		}
		if (mode === 'multiple') {
			selectedMapRef.current?.[option.label] ?? setSelected([...selected, option])
		}
	}

	const onOptionDelete = (label: string) => {
		setSelected(selected.filter(item => item.label !== label))
	}

	useEffect(() => {
		if (selected.length) {
			if (mode === 'single') {
				onChange(selected[0].value)
			}
			if (mode === 'multiple') {
				onChange(selected.map(item => item.value))
			}
		}

		selectedMapRef.current = selected.reduce((acc, curr) => {
			acc[curr.label] = curr.value
			return acc
		}, {} as { [key: string]: T })

	}, [selected])

	let selector = (
		<span className={cx('placeholder')}>{placeholder}</span>
	)

	if (selected.length !== 0) {
		if (mode === 'single') {
			selector = (
				<span>{selected[0].label}</span>
			)
		}
		if (mode === 'multiple') {
			selector = (
				<div className={cx('wrap_tags')}>
					{selected.map(item => {
						if (!tagRender) {
							return <Tag key={item.label} label={item.label} onDelete={onOptionDelete} />
						} else {
							return <React.Fragment key={item.label}>{tagRender({
								label: item.label,
								value: item.value,
								onClose: () => onOptionDelete(item.label)
							})}</React.Fragment>
						}
					})}
				</div>
			)
		}
	}

	return (
		<div className={cx("wrap")}>
			<div className={cx('wrap_selector', { 'disabled': disabled })} onClick={toggleOpen}>
				{selector}
				<ArrowIcon isOpen={isOpen} />
			</div>
			<div className={cx('wrap_dropdown', { 'visually-hidden': !isOpen })} role='listbox'>
				<div className={cx('list')}>
					{options.map(option => {
						if (optionRender) return (
							<React.Fragment key={option.label}>{optionRender({
								label: option.label,
								value: option.value,
								onClick: () => onOptionClick(option),
								isSelected: Boolean(selectedMapRef.current?.[option.label])
							})}</React.Fragment>
						)
						return (
							<div
								className={cx('list_item', { 'list_item_selected': Boolean(selectedMapRef.current?.[option.label]) })}
								key={option.label}
								onClick={() => onOptionClick(option)}
							>
								{option.label}
							</div>
						)
					})}
				</div>
			</div>
		</div>

	);
}
