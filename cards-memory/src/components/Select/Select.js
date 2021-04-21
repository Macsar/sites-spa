// Импорты функции
import styles from './Select.module.css';

// Импорт компонентов
import Button from '../Button/Button';

// Импорты redux'а
import { connect } from 'react-redux';
import { genArray } from '../../store/actions/cards';

const Select = ({ generatedArray, colors }) => {
    return (
        <div className = {styles.select}>
            <Button click = {
                () => generatedArray(Array(16).fill(null))
            }>4x4</Button>

            <Button disabled = {colors.length > 0 ? false : true} click = {
                () => generatedArray(Array(36).fill(null))
            }>6x6</Button>
        </div>
    )
};

function mapStateToProps(state) {
	return { 
        cards: state.data.cards,
        colors: state.colors.colors16
    };
};

function mapDispatchToProps(dispatch) {
	return {
		generatedArray: array => dispatch(genArray(array))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);