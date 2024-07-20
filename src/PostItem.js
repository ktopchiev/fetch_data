import React from 'react'

const PostItem = ({ item }) => {
    return (
        <li className='postItem'>
            <p className="title">
                {item.title}
            </p>
            <p>
                {item.body}
            </p>
        </li>
    )
}

export default PostItem