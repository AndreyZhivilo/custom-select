import { useLayoutEffect, ReactNode, useRef, useState, CSSProperties } from 'react'
import { cx } from '../styles'

export function Dropdown({
	isOpen,
	selectorRect,
	children
}: {
	isOpen: boolean,
	selectorRect: { top: number, bottom: number, left: number, right: number } | undefined,
	children: ReactNode
}) {
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState<'top' | 'bottom'>('bottom')


	const transition = {
		transition: 'all 0.2s ease-in-out'
	}

	const positionBottom = {
		top: '110%',
		left: '0',
	}

	const positionTop = {
		bottom: '110%',
		left: '0',
	}

	const hidden = {
		opacity: '0',
		pointerEvents: 'none' as CSSProperties["pointerEvents"],
	}

	const visible = {
		opacity: '1',
		pointerEvents: 'all' as CSSProperties["pointerEvents"],
	}

	let styles = isOpen ? { ...transition, ...visible } : { ...transition, ...hidden }
	styles = position === 'bottom' ? { ...styles, ...positionBottom } : { ...styles, ...positionTop }

	useLayoutEffect(() => {
		const dropdownRect = dropdownRef.current?.getBoundingClientRect()
		if (selectorRect && dropdownRect) {
			const spaceBelow = window.innerHeight - selectorRect.bottom;
			const spaceAbove = selectorRect.top;
			if (spaceBelow < dropdownRect.height && spaceAbove > spaceBelow) {
				setPosition('top');
			} else {
				setPosition('bottom');
			}
		}

	})

	return (
		<div
			className={cx('wrap_dropdown')}
			ref={dropdownRef}
			role='listbox'
			style={styles}
		>
			{children}
		</div>
	)
}