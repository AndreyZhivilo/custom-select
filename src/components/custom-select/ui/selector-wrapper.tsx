import { ReactNode } from "react";
import { cx } from "../styles";
import { ArrowIcon } from "./arrow-icon";

export function SelectorWrapper({
	isOpen,
	disabled,
	onClick,
	children
}: {
	isOpen: boolean,
	disabled: boolean,
	onClick: () => void,
	children: ReactNode
}) {

	return (
		<div className={cx('wrap_selector', { 'disabled': disabled })} onClick={onClick}>
			{children}
			<ArrowIcon isOpen={isOpen} />
		</div>
	)

}