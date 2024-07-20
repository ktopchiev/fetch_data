import React from 'react'

const UserItem = ({ item }) => {
    return (
        <li className='userItem' style={{ listStyleType: "none" }}>
            <p id="name" style={{fontWeight: "bold"}}>
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