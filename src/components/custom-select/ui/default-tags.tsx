import { cx } from '../styles'
import type { Option } from '../types'
import { Tag } from './tag'

export function DefaultTags<T>({
	tags,
	onDelete
}: {
	tags: Option<T>[],
	onDelete: (label: string) => void,
}) {
	return (
		<div className={cx('wrap_tags')}>
			{tags.map(tag => {
				return <Tag key={tag.label} label={tag.label} onDelete={() => onDelete(tag.label)} />
			})}
		</div>
	)
}