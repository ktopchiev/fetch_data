import React from 'react'

const CommentItem = ({ item }) => {
    return (
        <li className='commentItem' style={{ listStyleType: "none" }}>
            <p id="name" style={{fontWeight: "bold"}}>
                {item.name}
            </p>
            <p>
                {item.email}
            </p>
            <p>
                {item.body}
            </p>
        </li>
    )
}

export default CommentItem