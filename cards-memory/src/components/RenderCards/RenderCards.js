// Импорты функции
import { useState, useEffect } from 'react';
import styles from './RenderCards.module.css';

// Импорт компонентов
import Button from '../Button/Button';

// Остальные импорты
import classnames from 'classnames';

// Импорты redux'а
import { connect } from 'react-redux';
import { addObjects } from '../../store/actions/cards';

const RenderCards = ({ colors, cards, addObjects, stateGames, setStateGames }) => {  
    const [tmpClick, setTmpClick] = useState(null);
    const [indexCard, setIndexCard] = useState(null);
    const [indexNextCard, setIndexNextCard] = useState(null);
    
    useEffect(() => {
        let count = 0;
        let cardsTmp = [];

		// генерация массива объектов
        for (let i = 0; i < cards.length; i++) {
            cardsTmp.push(
                { id: count, color: colors[count] }, 
                { id: count, color: colors[count] }
            );
            
            count++;
			// добавляем i, поскольку общее количество карточек / 2
            i++;
        };

        // перемешивание объектов
        for (let i = cardsTmp.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = cardsTmp[i];
            cardsTmp[i] = cardsTmp[j];
            cardsTmp[j] = temp;
        }

		// добавляем карточки в общий массив
        addObjects(cardsTmp);
    }, [cards.length, colors, addObjects]);

    const memoryCards = (id, index) => {
        let cardsTmp = [...cards];
        let result = null;

        if (indexCard !== null && indexNextCard === null) {
            setIndexNextCard(index);
        }
        
        if (tmpClick === id && indexCard !== index) {
            result = cardsTmp.filter((item) => {
                return item.id !== tmpClick
            });
            
            setTimeout(() => {
                setTmpClick(null);
                setIndexCard(null);
                setIndexNextCard(null);
                
                return addObjects(result);
            }, 1000);
        } else if (tmpClick) {
            setTimeout(() => {
                setTmpClick(null);
                setIndexCard(null);
                setIndexNextCard(null);
            }, 500)
        } else {
            setTmpClick(id);
            setIndexCard(index);
        }
    };

    return (
        <div className = {styles.wrap}>
            <div className = {styles.cards}>
                {
                    cards[cards.length - 1] !== null &&
						cards.map((item, index) => {
                            return <div
                                key = {index}
                                className = { classnames(styles.card, styles.card_default) }
                                style = {{
                                    background: indexCard === index || indexNextCard === index
                                    ? cards[index].color
                                    : ''   
                                }}
                                onClick = {() => memoryCards(item.id, index)}
                            />
						})
                }
            </div>
        
            <div className = {styles.buttons}>
                <Button click = {() => 
					addObjects([])
                }>Рестарт</Button>
                
                <Button click = {() => [
					setStateGames(!stateGames),
					addObjects([])
                ]}>Выход</Button>
            </div>
        </div>
    )
};

function mapStateToProps(state) {
	return {
        cards: state.data.cards,
        colors: state.colors.colors8
    };
};

function mapDispatchToProps(dispatch) {
	return {
		addObjects: array => dispatch(addObjects(array))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderCards);