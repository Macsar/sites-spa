import React from 'react';
import classes from './FirstScreen.module.css';
import ButtonStart from '../UI/Buttons/ButtonStart/ButtonStart';

export default props => (
    <div className = {classes.FirstScreen}>
        <h1 className = {classes.Title}>Крестики - Нолики</h1>
        <ButtonStart click = {() => props.setToggle(!props.toggle)}>Начать</ButtonStart>
    </div>
);