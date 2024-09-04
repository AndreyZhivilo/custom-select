import { useRef, useState } from 'react';
import { useSelectState } from '../model/useSelectState';
import { CustomTags } from './custom-tags';
import { DefaultTags } from './default-tags';
import { DefaultOptionsList } from './default-options-list';
import { CustomOptionsList } from './custom-options-list';
import { SearchInput } from './search-input';
import { Selector } from './selector'
import { CreateOption } from './createOption';
import { mockAPIRequest } from '../../../lib';
import { useClickOutside } from '../lib';
import { cx } from '../styles'
import type { SelectProps } from '../types'
import { Dropdown } from './dropdown';


export function CustomSelect<T>({
	options: initialOptions,
	mode = 'single',
	disabled = false,
	placeholder = 'placeholder',
	showSearch = false,
	error = false,
	onChange,
	tagRender,
	optionRender,
	dropdownRender,
	createOptionAsync
}: SelectProps<T>) {

	const [selectorRect, setSelectorRect] = useState<{ top: number, left: number, bottom: number, right: number }>();

	const selectRootRef = useRef<HTMLDivElement>(null)

	const selectorRef = useRef<HTMLDivElement>(null)

	const {
		options,
		selected,
		isOpen,
		search = '',
		loading,
		isSelected,
		onOptionDelete,
		onOptionClick,
		toggleOpen,
		onSearch,
		createOption,
		openDropdown,
		closeDropdown,
	} = useSelectState<T>({ mode, disabled, initialOptions, onChange })

	useClickOutside(selectRootRef, closeDropdown)

	const onSelectorClick = () => {
		const rect = selectorRef.current?.getBoundingClientRect()
		if (rect) {
			setSelectorRect({
				left: rect.left,
				top: rect.top,
				right: rect.right,
				bottom: rect.bottom,
			});
		}
		toggleOpen()
	}


	const searchInput = showSearch
		&& !(mode === 'single' && selected.length && !isOpen)
		&& <SearchInput value={search} onChange={onSearch} plaiceholder={placeholder} onFocus={openDropdown} />

	const selectorContent = Boolean(selected.length)
		? (mode === 'multiple'
			? (tagRender
				? <CustomTags<T> tags={selected} tagRender={tagRender} onDelete={onOptionDelete} />
				: <DefaultTags<T> tags={selected} onDelete={onOptionDelete} />)
			: !(showSearch && isOpen) && <span className={cx('single_content')}>{selected[0].label}</span>
		)
		: (!showSearch && <div className={cx('placeholder')}>{placeholder}</div>)

	let selector = <Selector
		ref={selectorRef}
		search={searchInput}
		content={selectorContent}
		disabled={disabled}
		isOpen={isOpen}
		onClick={onSelectorClick}
		error={error}
	/>


	let optionsList = optionRender
		? <CustomOptionsList options={options} isSelected={isSelected} onOptionClick={onOptionClick} optionRender={optionRender} />
		: <DefaultOptionsList options={options} isSelected={isSelected} onOptionClick={onOptionClick} />

	let dropdown = dropdownRender
		? <>{dropdownRender(optionsList)}</>
		: <>{optionsList}</>

	if (createOptionAsync && showSearch) {
		dropdown = <>{dropdown} <CreateOption isLoading={loading} onClick={() => createOption(search, mockAPIRequest)} /></>
	}

	return (
		<div className={cx("wrap")} ref={selectRootRef}>
			{selector}
			<Dropdown isOpen={isOpen} selectorRect={selectorRect}>
				{dropdown}
			</Dropdown>
		</div>

	);
}
