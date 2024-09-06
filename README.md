# Кастомный Select + Combobox для React с поддержкой TypeScript

## Опции: 

`1. options: {label: string, value: Т}[]`

Массив опций. Каждая опция это объект. Поле label всегда строка. Поле value может быть любым типом данных.
	
`2. mode?: 'single' | 'multiple'`

Сколько опций можно выбрать одну или несколько. По умолчанию 'single'

`3. onChange: (value: T | T[] | null) => void`
	
Функция, в которую селект будет передавать выбранные значения
	
`4. disabled?: boolean`

Сделать селект неактинвным. По умолчанию false	
	
`5. placeholder?: string`

Плейсхолдер
	
`6. showSearch?: boolean`

Нужен ли текстовый поиск по опциям. По умолчанию false
	
`7. error?: boolean`
	
Нужен если вы как-то валидируете значение. По умолчанию false
	
`8. tagRender?: (props: {label: string, value: T, onClose: () => void}) => ReactNode`

Кастомный тег. Учитывается только если включен режим множественного выбора. Функция, которая возвращает ReactNode
	
`9. optionRender?: (props: {label: string, value: T, onClick: () => void, isSelected: boolean}) => ReactNode`

Кастомная опция. Функция, которая возвращает ReactNode
	
`10. dropdownRender?: (menu: ReactNode) => ReactNode`

Кастомный дропдаун. Функция, которая принимает компонент списка опций и возвращает ReactNode
	
`11. createOptionAsync?: (option: string) => Promise<Option<T>>`

Асинхронная функция, которая позволяет добавить свою опцию в список и на удаленный сервер через API. Принимает в себя строку. Должа возвращать промис, который резолвиться объектом с опцией {label: string, value: Т}. Опция добавляется в спискок и в массив с выбранными опциями. Работает только при включенном поиске. 
