import React from 'react';
import module from './MyInput.module.css'
const MyInput = ({...props}) => {
    return (
        <input className={module.myInput} {...props}>
            {props.children}
        </input>
    );
};

export default MyInput;