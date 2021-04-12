import React from 'react';
import classes from './ButtonRestart.module.css';

export default props => (
    <button className = {classes.Button} onClick = {props.click}>{props.children}</button>
);