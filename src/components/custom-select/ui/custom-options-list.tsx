import React from 'react'
import { cx } from '../styles'
import type { Option } from '../types'

export function CustomOptionsList<T>({
	options,
	isSelected,
	onOptionClick,
	optionRender,
}: {
	options: Option<T>[],
	isSelected: (label: string) => boolean,
	onOptionClick: (option: Option<T>) => void,
	optionRender: ((props: {
		label: string;
		value: T;
		onClick: () => void;
		isSelected: boolean;
	}) => React.ReactNode) | undefined
}) {
	if (!optionRender) return null
	return (
		<div className={cx('list')}>
			{options.map(option => {
				return (
					<React.Fragment key={option.label}>
						{optionRender({
							label: option.label,
							value: option.value,
							onClick: () => onOptionClick(option),
							isSelected: isSelected(option.label)
						})}
					</React.Fragment>
				)
			})}
		</div>
	)
}