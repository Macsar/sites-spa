import React from 'react';
import styles from './Button.module.css';
import classnames from 'classnames';

const Button = props => {
    return <button 
        className = {classnames(styles.btn, props.disabled ? styles.disabled : '')}
        onClick = {props.click}
        disabled = {props.disabled}
    >{ props.children }</button>
};

export default Button;