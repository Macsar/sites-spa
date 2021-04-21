// Импорты функции
import styles from './Game.module.css';
import Select from '../Select/Select';

// Импорт компонентов
import RenderCards from '../RenderCards/RenderCards';

// Импорты redux'а
import { connect } from 'react-redux';

const Game = ({ cards, setStateGames, stateGames }) => {
    return (
        <div className = {styles.wrap}>
            {
                !cards.length
                
                ?   <Select />
                
                :   cards.length 
                    ? <RenderCards setStateGames = {setStateGames} stateGames = {stateGames} /> 
                    : null
            }
        </div>
    )
};

function mapStateToProps(state) {
	return {
		cards: state.data.cards
	}
};

export default connect(mapStateToProps)(Game);