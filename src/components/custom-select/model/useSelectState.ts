import { useState, useRef, useEffect } from "react";
import type { Option } from "../types";


export function useSelectState<T>({
	initialOptions,
	mode,
	disabled,
	onChange
}: {
	initialOptions: Option<T>[],
	mode: 'single' | 'multiple' ,
	disabled: boolean,
	onChange: (value: T | T[]) => void,
}){
	const [selected, setSelected] = useState<Option<T>[]>([])
	const [options, setOptions] = useState<Option<T>[]>(initialOptions)
	const [filteredOptions, setFilteredOptions] = useState<Option<T>[]>(initialOptions)
	const [isOpen, setIsOpen] = useState(false)
	const [search, setSearch] = useState<string>()
	const selectedMapRef = useRef<{ [key: string]: T }>()
	const [loading, setLoading] = useState(false)

	const toggleOpen = () => {
		if (disabled) return
		setIsOpen(prev => !prev)
	}

	const isSelected = (label: string) => Boolean(selectedMapRef.current?.[label])

	const onOptionClick = (option: Option<T>) => {
		setIsOpen(false)
		setSearch('')
		if (mode === 'single') {
			isSelected(option.label) || setSelected([option])
		}
		if (mode === 'multiple') {
			isSelected(option.label) || setSelected([...selected, option])
		}
	}

	const onOptionDelete = (label: string) => {
		setSelected(selected.filter(item => item.label !== label))
	}

	const onOptionAdd = (option: Option<T>) => {
		setOptions([...options, option])
	}

	const createOption = async (option: string, createOption: (option: string) => Promise<Option<T>>) => {
		setLoading(true)
		createOption(option)
		.then((data) => {				
				onOptionAdd(data)
				onOptionClick(data)
				setLoading(false)
		})
		.catch(e => console.warn(e))
		.finally(() => setLoading(false))	

	}

	const onSearch = (value: string) => {
		const searchString = value.toLocaleLowerCase()
		setSearch(searchString)
	}



	useEffect(() => {
		if (mode === 'single') {
			onChange(selected[0]?.value)
		}
		if (mode === 'multiple') {
			onChange(selected.map(item => item.value))
		}

		selectedMapRef.current = selected.reduce((acc, curr) => {
			acc[curr.label] = curr.value
			return acc
		}, {} as { [key: string]: T })

}, [selected])

	useEffect(() => {		
		if(search?.length) {
			if(!isOpen) setIsOpen(true)
			setFilteredOptions(options.filter(option => option.label.toLocaleLowerCase().includes(search)))
		} else {
			setFilteredOptions(options)
		}
	}, [search, isOpen])

	
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
		createOption
	}
}