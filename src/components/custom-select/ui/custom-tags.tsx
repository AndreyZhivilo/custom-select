import { ReactNode } from "react"
import type { Option } from '../types'
import React from "react"
import { cx } from "../styles"



export function CustomTags<T>({
	tags,
	onDelete,
	tagRender
}: {
	tags: Option<T>[]
	onDelete: (label: string) => void,
	tagRender: (props: { label: string, value: T, onClose: () => void }) => ReactNode
}) {
	return (
		<div className={cx('wrap_tags')}>{tags.map(tag => {
			return (
				<React.Fragment key={tag.label}>{
					tagRender({
						label: tag.label,
						value: tag.value,
						onClose: () => onDelete(tag.label)
					})
				}</React.Fragment>
			)
		})}</div>
	)
}