import styles from './Button.module.css';
import classnames from 'classnames';

const Button = ({ disabled, click, children }) => {
    return <button 
        className = {classnames(styles.btn, disabled ? styles.disabled : '')}
        onClick = {click}
        disabled = {disabled}
    >{ children }</button>
};

export default Button;