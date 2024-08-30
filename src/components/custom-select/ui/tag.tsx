import { CrossIcon } from './cross-icon'
import css from './custom-select.module.css'
import cn from 'classnames/bind'
import type { SyntheticEvent } from 'react'

const cx = cn.bind(css)

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