import { useState, useMemo } from "react";
import type { Option } from "../types";


export function useSelectState<T>({
	initialOptions,
	mode,
	disabled,
	onChange,
	
}: {
	initialOptions: Option<T>[],
	mode: 'single' | 'multiple' ,
	disabled: boolean,
	onChange: (value: T | T[] | null) => void,
}){
	const [selected, setSelected] = useState<Option<T>[]>([])
	const [options, setOptions] = useState<Option<T>[]>(initialOptions)
	const [isOpen, setIsOpen] = useState(false)
	const [search, setSearch] = useState<string>()
	const [loading, setLoading] = useState(false)

	const selectedMap = useMemo(() => selected.reduce((acc, curr) => {
			acc[curr.label] = curr.value
			return acc
		}, {} as { [key: string]: T }), [selected])


	const filteredOptions = useMemo(() => {
		const searchString = search?.toLocaleLowerCase().trim()
		if(searchString?.length) {
			return options.filter(option => option.label.toLocaleLowerCase().includes(searchString))
		} 
		return options
	}, [search, options])

	const toggleOpen = () => {
		if (disabled) return
		setIsOpen(prev => !prev)
	}

	const openDropdown = () => {
		setIsOpen(true)
	}

	const closeDropdown = () => {
		setIsOpen(false)
	}

	const isSelected = (label: string) => Boolean(selectedMap[label])


	const onOptionSelect = (option: Option<T>) => {
			if (mode === 'single') {				
				onChange(option.value)
				setSelected([option])
				
			}
			if (mode === 'multiple') {
				const selectedOptions = [...selected, option]
				onChange(selectedOptions.map(option => option.value))
				setSelected(selectedOptions)
				
			}
	}

	const onOptionDelete = (label: string) => {
		const selectedOptions = selected.filter(item => item.label !== label)
		const selectedValues = selectedOptions.map(option => option.value)
		onChange(selectedValues.length ? selectedValues : null)
		setSelected(selectedOptions)
	}

	const onOptionAdd = (option: Option<T>) => {
		setOptions([...options, option])
	}

	const onOptionClick = (option: Option<T>) => {
		closeDropdown()
		setSearch('')
		isSelected(option.label)? onOptionDelete(option.label) : onOptionSelect(option)
	}

	const createOption = async (label: string, createOptionAsync: (label: string) => Promise<Option<T>>) => {
		if(label.length === 0) return 
		setLoading(true)
		createOptionAsync(label)
		.then((data) => {				
				onOptionAdd(data)
				onOptionClick(data)
				setLoading(false)
		})
		.catch(e => console.warn(e))
		.finally(() => setLoading(false))	

	}

	const onSearch = (value: string) => {
		setSearch(value)
	}

	
	return {
		search,
		options: filteredOptions,
		selected, 
		isOpen,
		loading,
		isSelected, 
		onOptionDelete, 
		onOptionClick,
		toggleOpen,
		onSearch,
		createOption,
		openDropdown,
		closeDropdown
	}
}