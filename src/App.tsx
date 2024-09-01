import { CustomSelect } from './components/custom-select'
import { renderPreviewOption } from './components/preview-option'
import { renderPreviewTag } from './components/preview-tag'
import { renderPreviewDropdown } from './components/preview-dropdown'
import { sapmpleOptions, sapmpleOptions2, optionsWithAvatar, type OptionWithAvatar } from './config'
import { mockAPIRequest } from './lib'



function App() {

	return (
		<div className='pb-32'>
			<div className='w-[900px] mx-auto pt-20'>
				<h1 className='text-6xl font-bold text-center mb-7'>Select + Combobox для React </h1>
			</div>
			<p className="w-[900px] mx-auto text-center mb-5">
				Это отдельный компонент Select. Работает аналогично компоненту из <a href='https://ant.design/components/select' className='text-blue-900'>AntDesign</a>. Может работать в режимах одиночного и множественного выбора.
			</p>
			<section className='w-[900px] mx-auto grid grid-cols-2 gap-7 mb-7'>
				<CustomSelect
					<string>
					options={sapmpleOptions}
					onChange={(value) => console.log(value)}
					mode='single'
					disabled={false}
					placeholder='Выбирите город'
				/>
				<CustomSelect
					<string>
					options={sapmpleOptions}
					onChange={(value) => console.log(value)}
					mode='multiple'
					disabled={false}
					placeholder='Выбирите города'
				/>
			</section>
			<p className='w-[900px] mx-auto text-center mb-5'>Если опций много можно включить режим текстового поиска.</p>
			<section className="w-[900px] mx-auto grid grid-cols-2 gap-7 mb-7">
				<CustomSelect
					<string>
					options={sapmpleOptions}
					onChange={(value) => console.log(value)}
					mode='single'
					disabled={false}
					placeholder='Выбирите город'
					showSearch={true}
				/>
				<CustomSelect
					<string>
					options={sapmpleOptions2}
					onChange={(value) => console.log(value)}
					mode='multiple'
					disabled={false}
					placeholder='Выбирите сотрудника'
					showSearch={true}
				/>
			</section>
			<p className='w-[900px] mx-auto text-center mb-5'>Внутрь можно передать собственные компоненты для отображения тегов, дропдауна и списка опций</p>
			<section className="w-[900px] mx-auto mb-7">
				<CustomSelect
					<OptionWithAvatar["value"]>
					options={optionsWithAvatar}
					onChange={(value) => console.log(value)}
					mode='multiple'
					placeholder='Выбирите сотрудника'
					tagRender={renderPreviewTag}
					optionRender={renderPreviewOption}
					dropdownRender={renderPreviewDropdown}
				/>
			</section>
			<section className="w-[900px] mx-auto grid grid-cols-2 gap-7 mb-7">
				<CustomSelect
					<string>
					options={sapmpleOptions}
					onChange={(value) => console.log(value)}
					mode='multiple'
					placeholder='Выбирите города'
					showSearch={true}
					createOptionAsync={mockAPIRequest}
				/>
				<p>А еще можно передать асинхронную функцию, чтобы пользователь мог добавлять елементы списка на удаленный сервер по API</p>
			</section>
			<section className="w-[900px] mx-auto mb-7">
				<div className='font-bold text-xl mb-4'>Дополнительные фичи:</div>
				<ul className='list-decimal pl-4'>
					<li className='mb-1'>Поддерживает TypeScript. Можно передать в него любой тип и он сохранит типизацию.</li>
					<li className='mb-1'>Есть свойство error, которое можно использовать если вы хотите дополнительно валидировать содержимое</li>
					<li className='mb-1'>Можно сделать селект неактивным с помощью свойства disabled</li>
				</ul>
			</section>
		</div>
	)
}

export default App
