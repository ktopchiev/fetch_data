import React from 'react'

const PostItem = ({ item }) => {
    return (
        <li className='postItem' style={{ listStyleType: "none" }}>
            <p id="name" style={{fontWeight: "bold"}}>
                {item.title}
            </p>
            <p>
                {item.body}
            </p>
        </li>
    )
}

export default PostItem