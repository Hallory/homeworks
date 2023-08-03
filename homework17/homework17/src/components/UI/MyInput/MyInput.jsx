import React from 'react';
const MyInput = ({...props}) => {
    return (
        <input {...props}  >
            {props.children}
        </input>
    );
};

export default MyInput;