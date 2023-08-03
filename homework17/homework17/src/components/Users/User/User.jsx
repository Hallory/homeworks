import React from 'react';
import module from './User.module.css'
const User = ({contact}) => {
    return (
        <div className={module.user__container}>
            
            <div>{contact.firstName} {contact.lastName}</div>
            <div>{contact.phone}</div>
            <div>{contact.gender}</div>
            
        </div>
    );
};

export default User;