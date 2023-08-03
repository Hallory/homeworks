import React, { useState, useRef } from 'react';
import User from './User/User'
import module from './Users.module.css'
const Users = ({searchValue}) => {

    
    return (
        <div className={module.users__container}>
            {/* {contacts.map((contact)=>
                <User contact={contact} key={contact.phone}/>
            )} */}
        </div>
    );
};

export default Users;