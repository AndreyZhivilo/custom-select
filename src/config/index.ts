export type SampleOption = {
	value: string
	label: string
}

export type OptionWithAvatar = {
	value: {
		id: number
		avatar: string
		name: string
		mail: string
	},
	label: string
}

export const sapmpleOptions = [
	{ value: 'sample1', label: 'sample 1' }, 
	{ value: 'sample2', label: 'sample 2' },
	{ value: 'sample3', label: 'sample 3' },
	{ value: 'sample4', label: 'sample 4' },
	{ value: 'sample5', label: 'sample 5' },
	{ value: 'sample6', label: 'sample 6' },
	{ value: 'sample7', label: 'sample 7' },
	{ value: 'sample8', label: 'sample 8' },
	{ value: 'sample9', label: 'sample 9' },
	{ value: 'sample10', label: 'sample 10' },
	{ value: 'sampl11', label: 'sample 11' },
	{ value: 'sample12', label: 'sample 12' }
]

export const optionsWithAvatar = [
	{value: {id: 1, avatar: '/avatar.jpg', name: 'Кузнецов. И', mail: 'sample@gmail.com'}, label: 'Кузнецов. И'},
	{value: {id: 2, avatar: '/avatar.jpg', name: 'Петров. В', mail: 'sample@gmail.com'}, label: 'Петров. В'},
	{value: {id: 3, avatar: '/avatar.jpg', name: 'Макаров. Д', mail: 'sample@gmail.com'}, label: 'Макаров. Д'},
	{value: {id: 4, avatar: '/avatar.jpg', name: 'Ковалев. В', mail: 'sample@gmail.com'}, label: 'Ковалев. В'},
	{value: {id: 5, avatar: '/avatar.jpg', name: 'Кудрявцев. И', mail: 'sample@gmail.com'}, label: 'Кудрявцев. И'},
]