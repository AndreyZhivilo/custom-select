import { PreviewTag } from "./previewTag"
import type { OptionWithAvatar } from "../../../config";

export function renderPreviewTag({
	value,
	label,
	onClose
}: {
	value: OptionWithAvatar["value"],
	label: string,
	onClose: () => void
}) {
	return <PreviewTag avatar={value.avatar} label={label} onClose={onClose} />
}