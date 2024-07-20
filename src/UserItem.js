import React from 'react'

const UserItem = ({ item }) => {
    return (
        <li className='userItem'>
            <p className="name">
                {item.name}
            </p>
            <p>
                username: {item.username}
            </p>
            <p>
                email: {item.email}
            </p>
        </li>
    )
}

export default UserItem