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
	{ value: 'москва', label: 'Москва' }, 
	{ value: 'тула', label: 'Тула' },
	{ value: 'тверь', label: 'Тверь' },
	{ value: 'анадырь', label: 'Анадырь' },
	{ value: 'уфа', label: 'Уфа' },
	{ value: 'ростов-на-дону', label: 'Ростов-на-дону' },
	{ value: 'краснодар', label: 'Краснодар' },
	{ value: 'махачкала', label: 'Махачкала' },
	{ value: 'ставрополь', label: 'Ставрополь' },
	{ value: 'нальчик', label: 'Нальчик' },
	{ value: 'владикавказ', label: 'Владикавказ' },
	{ value: 'сочи', label: 'Сочи' }
]

export const sapmpleOptions2 = [
	{ value: 'Кузнецов И.', label: 'Кузнецов И.' }, 
	{ value: 'Петров В.', label: 'Петров В.' },
	{ value: 'Макаров Д.', label: 'Макаров Д.' },
	{ value: 'Ковалев В.', label: 'Ковалев В.' },
	{ value: 'Кудрявцев И.', label: 'Кудрявцев И.' },
	{ value: 'Сафонов М.', label: 'Сафонов М.' },
	{ value: 'Волков А.', label: 'Волков А.' },
	{ value: 'Черников М.', label: 'Черников М.' },

]

export const optionsWithAvatar = [
	{value: {id: 1, avatar: 'avatar.jpg', name: 'Кузнецов. И', mail: 'sample@gmail.com'}, label: 'Кузнецов. И'},
	{value: {id: 2, avatar: 'avatar.jpg', name: 'Петров. В', mail: 'sample@gmail.com'}, label: 'Петров. В'},
	{value: {id: 3, avatar: 'avatar.jpg', name: 'Макаров. Д', mail: 'sample@gmail.com'}, label: 'Макаров. Д'},
	{value: {id: 4, avatar: 'avatar.jpg', name: 'Ковалев. В', mail: 'sample@gmail.com'}, label: 'Ковалев. В'},
	{value: {id: 5, avatar: 'avatar.jpg', name: 'Кудрявцев. И', mail: 'sample@gmail.com'}, label: 'Кудрявцев. И'},
]