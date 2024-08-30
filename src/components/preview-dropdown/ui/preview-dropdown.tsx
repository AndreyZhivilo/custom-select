import { ReactNode } from "react"

export function PreviewDropdown({
	menu
}: {
	menu: ReactNode
}) {
	return (
		<>
			{menu}
			<span>Custom Part</span>
		</>
	)
}