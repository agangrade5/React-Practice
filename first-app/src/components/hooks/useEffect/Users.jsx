import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }, [])
    return (
        <div>
            <h1>Users Listing</h1>
            <ul>
                {
                    users && users.map((user, index) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Users
