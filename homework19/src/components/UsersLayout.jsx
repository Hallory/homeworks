import React from 'react';
import { useOutlet } from 'react-router-dom';

const UsersLayout = ({children}) => {
    const outlet = useOutlet();
    return (
        <div className='usersLayout'>
            <div>
                <button>Back</button>
            </div>
            <div>
                {outlet}
            </div>
        </div>
    );
};

export default UsersLayout;