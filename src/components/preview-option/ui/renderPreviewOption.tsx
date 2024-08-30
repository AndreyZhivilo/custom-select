import { PreviewOption } from "./previewOption";
import type { OptionWithAvatar } from "../../../config";

export function renderPreviewOption({
	value,
	onClick,
	isSelected
}: {
	value: OptionWithAvatar["value"],
	onClick: () => void,
	isSelected: boolean
}) {
	return <PreviewOption
		avatar={value.avatar}
		mail={value.mail}
		name={value.name}
		onClick={onClick}
		isSelected={isSelected}
	/>
}