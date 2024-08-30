import { useState, useRef, useEffect } from "react";
import type { Option } from "../types";

export function useSelectState<T>({
	mode,
	disabled,
	onChange
}: {
	mode: 'single' | 'multiple' ,
	disabled: boolean,
	onChange: (value: T | T[]) => void,
}){
	const [selected, setSelected] = useState<Option<T>[]>([])
	const [isOpen, setIsOpen] = useState(false)
	const selectedMapRef = useRef<{ [key: string]: T }>()

	const toggleOpen = () => {
		if (disabled) return
		setIsOpen(prev => !prev)
	}

	const isSelected = (label: string) => Boolean(selectedMapRef.current?.[label])

	const onOptionClick = (option: Option<T>) => {
		setIsOpen(false)
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
	
	return {
		selected, 
		isOpen,
		isSelected, 
		onOptionDelete, 
		onOptionClick,
		toggleOpen
	}
}