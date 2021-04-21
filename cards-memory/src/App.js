import { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Game from './components/Game/Game';

const App = () => {
	const [stateGames, setStateGames] = useState(false);

	return (
		<div className = {styles.wrap}>
			{
				!stateGames
				
				? 	<>
						<h1>Запомнить Карточки</h1>
						<Button click = {() => setStateGames(!stateGames)}>Начать</Button>
					</>
				
				: 	<Game setStateGames = {setStateGames} stateGames = {stateGames} />
			}
		</div>
	);
};

export default App;