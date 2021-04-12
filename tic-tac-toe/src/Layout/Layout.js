import React from 'react';
import classes from './Layout.module.css';

const Layout = props => {
    return (
        <>
            <div className = {classes.Wrap}></div>
            <main className = {classes.Layout}>
                {props.children}
            </main>
        </>
    )
};

export default Layout;