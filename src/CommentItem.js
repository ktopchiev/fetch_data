import React from 'react'

const CommentItem = ({ item }) => {
    return (
        <li className='commentItem'>
            <p className="name">
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