import React from 'react';
import classes from './Victory.module.css';
import ButtonRestart from '../UI/Buttons/ButtonRestart/ButtonRestart';
import ButtonStart from '../UI/Buttons/ButtonStart/ButtonStart';

export default props => (
    <div className = {classes.Victory}>
        <div className = {classes.Title}>
            {props.user}
        </div>

        <div className = {classes.Button}>
            <ButtonRestart click = {props.clickRest}>Рестарт</ButtonRestart>
            <ButtonStart click = {props.clickSet}>Выйти</ButtonStart>
        </div>
    </div>
);