import { ReactNode, forwardRef } from "react"
import { cx } from "../styles"
import { SearchIcon } from "./search-icon"
import { ArrowIcon } from "./arrow-icon"

type SelectorProps = {
	search?: ReactNode,
	content?: ReactNode,
	disabled?: boolean,
	isOpen?: boolean,
	error: boolean,
	onClick: () => void
}


export const Selector = forwardRef(function (props: SelectorProps, ref: React.ForwardedRef<HTMLDivElement>) {
	const {
		search,
		content,
		disabled = false,
		isOpen = false,
		error = false,
		onClick
	} = props
	return (
		<div className={cx('wrap_selector', { 'disabled': disabled }, { 'error': error })} onClick={onClick} ref={ref}>
			{Boolean(search) && <SearchIcon />}
			{content}
			{search}
			{!Boolean(search) && <ArrowIcon isOpen={isOpen} />}
		</div>
	)
})