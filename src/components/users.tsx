'use client'

import React, { useEffect, useState } from 'react';

const UsersComponent = () => {
    const [users, setUsers] = useState<{name: string; age: number;}[]>([{name: 'John', age: 20}]);

    useEffect(() => {
        // fetch('https://api.example.com/users')
        // .then(response => response.json())
        // .then(data => setUsers(data.users));
        const response = [{name: 'John', age: 20}, {name: 'Jane', age: 21}];
        setUsers(response);
    }, []);

    return (<div>
        <p className='text-red-500'>Users!</p>
        {users.map((user, index) => (
            <div key={index}>
                <p className='text-red-900'>{user.name}</p>
                <p className='text-red-900'>{user.age}</p>
            </div>
        ))}

        <button onClick={() => {
            const newUsers = users.map(user => user.name === 'John' ? {...user, name: 'Jane'} : {...user, name: 'John'});
            setUsers(newUsers);
            //Print the users to console
            console.log("Button pressed -> Users: ", users);
        }}>
            Press me to switch users
        </button>
    </div>);
};

export default UsersComponent;
