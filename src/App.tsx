import { CustomSelect } from './components/custom-select'
import { renderPreviewOption } from './components/previewOption'
import { renderPreviewTag } from './components/previewTag/ui/renderPreviewTag'
import { sapmpleOptions, optionsWithAvatar, type SampleOption, type OptionWithAvatar } from './config'
import { useState } from 'react'



function App() {
	const [currentOption1, setCurrentOption1] = useState<SampleOption["value"] | SampleOption["value"][]>()
	const [currentOption2, setCurrentOption2] = useState<OptionWithAvatar["value"] | OptionWithAvatar["value"][]>()


	return (
		<>
			<div className="container">{JSON.stringify(currentOption1)}</div>
			<div className="container">{JSON.stringify(currentOption2)}</div>

			<div className='container pt-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quo quam expedita nobis error inventore repudiandae cum vel! Nobis voluptatibus, alias culpa velit ipsum impedit voluptatum sequi voluptates rerum tempore!</div>
			<div className='container flex items-center justify-center'>
				<CustomSelect
					<string>
					options={sapmpleOptions}
					onChange={(value) => setCurrentOption1(value)}
					mode='multiple'
					disabled={false}
					placeholder='Плейсхолдер'
				/>
			</div>
			<div className='container'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quo quam expedita nobis error inventore repudiandae cum vel! Nobis voluptatibus, alias culpa velit ipsum impedit voluptatum sequi voluptates rerum tempore!</div>
			<div className="container">
				<CustomSelect
					<OptionWithAvatar["value"]>
					options={optionsWithAvatar}
					onChange={(value) => setCurrentOption2(value)}
					mode='multiple'
					placeholder='Плейсхолдер'
					tagRender={renderPreviewTag}
					optionRender={renderPreviewOption}
				/>
			</div>
		</>
	)
}

export default App
