import { CrossIcon } from "../../custom-select/ui/cross-icon"

export function PreviewTag({ avatar, label, onClose }: { avatar: string, label: string, onClose: () => void }) {
	return (
		<div className="flex gap-2 items-center text-purple-700 bg-slate-100 rounded py-1 px-2 font-semibold">
			<img width={16} height={16} src={avatar} className="w-[16px] h-[16] block rounded-full" />
			<span>{label}</span>
			<CrossIcon onIconClick={(e: React.SyntheticEvent) => {
				e.stopPropagation()
				onClose()
			}} />
		</div>
	)
}