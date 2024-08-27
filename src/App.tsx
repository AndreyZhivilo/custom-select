import { CustomSelect } from './components/custom-select'
import { options } from './config'
import { useState } from 'react'



function App() {
	const [currentOption, setCurrentOption] = useState<string>()

	return (
		<>
			<div className="container">{currentOption}</div>

			<div className='container pt-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quo quam expedita nobis error inventore repudiandae cum vel! Nobis voluptatibus, alias culpa velit ipsum impedit voluptatum sequi voluptates rerum tempore!</div>
			<div className='container flex items-center justify-center'>
				<CustomSelect
					options={options}
					onChange={setCurrentOption}
					mode='single'
				/>
			</div>
			<div className='container'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quo quam expedita nobis error inventore repudiandae cum vel! Nobis voluptatibus, alias culpa velit ipsum impedit voluptatum sequi voluptates rerum tempore!</div>
		</>
	)
}

export default App
