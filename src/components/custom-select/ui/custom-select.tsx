import React, { useRef } from 'react';
import { useSelectState } from '../model/useSelectState';
import { CustomTags } from './custom-tags';
import { DefaultTags } from './default-tags';
import { cx } from '../styles'
import { DefaultOptionsList } from './default-options-list';
import { CustomOptionsList } from './custom-options-list';
import { SearchInput } from './search-input';
import { Selector } from './selector'
import type { SelectProps } from '../types'
import { CreateOption } from './createOption';
import { mockAPIRequest } from '../../../lib';
import { useClickOutside } from '../../../lib';


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

	const selectRef = useRef(null)
	useClickOutside(selectRef, closeDropdown)


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
		search={searchInput}
		content={selectorContent}
		disabled={disabled}
		isOpen={isOpen}
		onClick={toggleOpen}
		error={error}
	/>


	let optionsList = optionRender
		? <CustomOptionsList options={options} isSelected={isSelected} onOptionClick={onOptionClick} optionRender={optionRender} />
		: <DefaultOptionsList options={options} isSelected={isSelected} onOptionClick={onOptionClick} />

	let dropdown = dropdownRender
		? <React.Fragment>{dropdownRender(optionsList)}</React.Fragment>
		: <React.Fragment>{optionsList}</React.Fragment>

	if (createOptionAsync && showSearch) {
		dropdown = <>{dropdown} <CreateOption isLoading={loading} onClick={() => createOption(search, mockAPIRequest)} /></>
	}

	return (
		<div className={cx("wrap")} ref={selectRef}>
			{selector}
			<div className={cx('wrap_dropdown', { 'visually-hidden': !isOpen })} role='listbox'>
				{dropdown}
			</div>
		</div>

	);
}
