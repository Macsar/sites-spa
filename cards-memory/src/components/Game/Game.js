// Импорты функции
import styles from './Game.module.css';
import Select from '../Select/Select';

// Импорт компонентов
import RenderCards from '../RenderCards/RenderCards';

// Импорты redux'а
import { connect } from 'react-redux';

const Game = ({ cards, setStateGames, stateGames }) => <div 
	className = {styles.wrap}
>
	{
		!cards.length
		
		? 	<Select />
		
		: 	<RenderCards 
				setStateGames = {setStateGames} 
				stateGames = {stateGames} 
			/>
	}
</div>

function mapStateToProps(state) {
	return {
		cards: state.data.cards
	}
};

export default connect(mapStateToProps)(Game);