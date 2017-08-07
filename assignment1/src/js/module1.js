import React from 'react'
import {render} from 'react-dom'
import image1 from '../images/image1.jpg'
const App =() => (
	<div className="app">
		<h1>heading</h1>
		<img src={image1} alt="image1" height="100" width="100" />
		<input type="text" placeholder="search" />
	</div>
)

export default App;