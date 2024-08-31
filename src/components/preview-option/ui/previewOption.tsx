import { CheckIcon } from "./checkIcon"
import cn from 'classnames'

export function PreviewOption({
	avatar,
	name,
	mail,
	onClick,
	isSelected,
}: {
	avatar: string,
	name: string,
	mail: string,
	onClick: () => void,
	isSelected: boolean
}) {
	return (
		<div className={cn("flex items-center gap-3 py-4 px-5 mb-1", { 'bg-slate-100': isSelected })} onClick={onClick}>
			<img className='w-[32px] h-[32px] rounded-full' src={avatar} width={32} height={32} />
			<div className="flex flex-col grow">
				<span className="block">{name}</span>
				<span className="block">{mail}</span>
			</div>
			<CheckIcon />
		</div>
	)
}