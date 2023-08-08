import React, { useEffect, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const controller = new AbortController();
     fetch('https://jsonplaceholder.typicode.com/users', {
        signal:controller.signal
     })
           .then((response)=>response.json())
           .then((data)=> setUsers(data))
           .catch(error=>{
            console.log('some fetch:', error)
           })
           .finally(()=>{
            console.log('end fetch')
           })
          return () =>{
            controller.abort();
          }
    })
    const onCLickUserCard = (userId)=>{
        generatePath('/users/:id',{
            id:userId
        })
    }
    return (
        <div>
            {users.map((user)=>
                <div className='user'>{user.name}:{user.id}
                    <button onClick={onCLickUserCard}></button>
                </div>
            )}
            <br />
            <Link to="details">Details</Link>
            <br />
            <Link to="create">Create</Link>
            <br />
            <Link to="edit">Edit</Link>
        </div>
    );
};

export default Users;