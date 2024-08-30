import { cx } from '../styles'
import { CrossIcon } from './cross-icon'
import type { SyntheticEvent } from 'react'


export function Tag({
	label,
	onDelete
}: {
	label: string,
	onDelete: (label: string) => void
}) {
	return (
		<div className={cx('tag')}>
			{label}
			<CrossIcon onIconClick={(e: SyntheticEvent<SVGSVGElement>) => {
				e.stopPropagation()
				onDelete(label)
			}} />
		</div>
	)
}