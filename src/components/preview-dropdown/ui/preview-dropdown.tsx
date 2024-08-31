import { ReactNode } from "react"

export function PreviewDropdown({
	menu
}: {
	menu: ReactNode
}) {
	return (
		<div>
			{menu}
			<div className="p-5 bg-slate-50 rounded-lg">Сюда можно добавить свой элемент</div>
		</div>
	)
}