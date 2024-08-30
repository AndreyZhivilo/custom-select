import { PlusIcon } from "./plus-icon"
import { cx } from '../styles'
import { LoadingIcon } from "./loading-icon"

export function CreateOption({
	onClick,
	isLoading,
}: {
	onClick: () => void,
	isLoading: boolean,
}) {
	return (
		<div className={cx("create_option")} onClick={onClick}>
			{isLoading ? <LoadingIcon /> : <PlusIcon />}
			<div>Создать</div>
		</div>
	)
}