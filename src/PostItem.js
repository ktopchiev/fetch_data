import React from 'react'

const PostItem = ({ item }) => {
    return (
        <li className='postItem'>
            <p className="title" style={{ fontWeight: "bold" }}>
                {item.title}
            </p>
            <p>
                {item.body}
            </p>
        </li>
    )
}

export default PostItem