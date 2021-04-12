import React, { useState } from 'react';
import classes from './Game.module.css';
import ButtonRestart from '../UI/Buttons/ButtonRestart/ButtonRestart';
import Victory from '../../components/Victory/Victory';

const isWinner = (count, squares, setSquares, setCount, setWin) => {
    const winnerLine = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    const w = count % 2 === 0 ? 'X' : 'O';

    for (let i = 0; i < winnerLine.length; i++) {
        let line = winnerLine[i];

        if (squares[line[0]] === w &&
            squares[line[1]] === w &&
            squares[line[2]] === w
        ) {
            setWin(w + ' - Победил');
            setSquares(Array(9).fill(null));
            setCount(0);
        }
    }
    
    if (!squares.includes(null)) {
        setWin('Ничья');
    }
};

const clickHandler = (event, squares, setSquares, count, setCount, setWin) => {
    let data = event.target.getAttribute('data');
    let currentSquare = squares[data];

    if (currentSquare === null) {
        currentSquare = count % 2 === 0 ? 'X' : 'O';

        squares[data] = currentSquare;
        
        setCount(count + 1);
        setSquares(squares);
    } else {
        alert('Так Нельзя!');
    }

    isWinner(count, squares, setSquares, setCount, setWin);
};

const Game = props => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [count, setCount] = useState(0);
    
    const [win, setWin] = useState(false);

    return (
        <div className = {classes.Wrap}>
            {
                win 
                
                ?   <Victory
                        user = {win}
                        clickSet = {() => props.setToggle(!props.toggle)}
                        clickRest = {() => [
                            setSquares(Array(9).fill(null)),
                            setCount(0),
                            setWin(false)
                        ]}
                    />

                :   <div className = {classes.Game}>
                        <div className = {classes.Squares}>
                            {squares.map((item, index) => {
                                return (
                                    <div 
                                        key = {index}
                                        className = {classes.Square}
                                        onClick = {
                                            event => clickHandler(event, 
                                                squares, setSquares,
                                                count, setCount, setWin
                                            )
                                        }
                                        data = {index}
                                    >{item}</div>
                                )
                            })}
                        </div>

                        <div className = {classes.Buttons}>
                            <ButtonRestart click = {() => {
                                setSquares(Array(9).fill(null))
                                setCount(0)
                            }}>Рестарт</ButtonRestart>
                            
                            <ButtonRestart 
                                click = {() => props.setToggle(!props.toggle)}
                            >Выйти</ButtonRestart>
                        </div>
                    </div>
            }
        </div>
    )
};

export default Game;