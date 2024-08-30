import { ReactNode } from "react"
import { cx } from "../styles"
import { SearchIcon } from "./search-icon"
import { ArrowIcon } from "./arrow-icon"


export function Selector({
	search,
	content,
	disabled = false,
	isOpen = false,
	onClick
}: {
	search?: ReactNode,
	content?: ReactNode,
	disabled?: boolean,
	isOpen?: boolean,
	onClick: () => void
}) {
	return (
		<div className={cx('wrap_selector', { 'disabled': disabled })} onClick={onClick}>
			{Boolean(search) && <SearchIcon />}
			{content}
			{search}
			{!Boolean(search) && <ArrowIcon isOpen={isOpen} />}
		</div>
	)
}