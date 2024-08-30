import { useSelectState } from '../model/useSelectState';
import { CustomTags } from './custom-tags';
import { DefaultTags } from './default-tags';
import { cx } from '../styles'
import type { SelectProps } from '../types'
import { DefaultOptionsList } from './default-options-list';
import { CustomOptionsList } from './custom-options-list';
import { SelectorWrapper } from './selector-wrapper';



export function CustomSelect<T>({
	options,
	mode = 'single',
	disabled = false,
	placeholder = 'placeholder',
	onChange,
	tagRender,
	optionRender,
	dropdownRender,
}: SelectProps<T>) {

	const {
		selected,
		isOpen,
		isSelected,
		onOptionDelete,
		onOptionClick,
		toggleOpen
	} = useSelectState<T>({ mode, disabled, onChange })


	let selector = (
		<span className={cx('placeholder')}>{placeholder}</span>
	)

	if (selected.length !== 0) {
		if (mode === 'single') {
			selector = <span>{selected[0].label}</span>
		}
		if (mode === 'multiple') {
			if (tagRender) {
				selector = <CustomTags<T> tags={selected} tagRender={tagRender} onDelete={onOptionDelete} />
			} else {
				selector = <DefaultTags<T> tags={selected} onDelete={onOptionDelete} />
			}
		}
	}

	let optionsList = optionRender
		? <CustomOptionsList options={options} isSelected={isSelected} onOptionClick={onOptionClick} optionRender={optionRender} />
		: <DefaultOptionsList options={options} isSelected={isSelected} onOptionClick={onOptionClick} />


	return (
		<div className={cx("wrap")}>
			<SelectorWrapper isOpen={isOpen} disabled={disabled} onClick={toggleOpen}>
				{selector}
			</SelectorWrapper>
			<div className={cx('wrap_dropdown', { 'visually-hidden': !isOpen })} role='listbox'>
				{dropdownRender
					? <>{dropdownRender(optionsList)}</>
					: <>{optionsList}</>
				}
			</div>
		</div>

	);
}
