import React, { useState } from 'react';
import Layout from './Layout/Layout';
import First from './components/FirstScreen/FirstScreen';
import Game from './components/Game/Game';

const App = () => {
	const [toggleScreen, setToggleScreen] = useState(false);
	
	return (
		<Layout>
			{
				!toggleScreen 
				? <First toggle = {toggleScreen} setToggle = { setToggleScreen } /> 
				: <Game toggle = {toggleScreen} setToggle = { setToggleScreen } />
			}
		</Layout>
	);
};

export default App;