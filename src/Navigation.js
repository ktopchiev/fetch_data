import React, { useRef } from 'react'

const Navigation = ({ fetchUsers, fetchPosts, fetchComments }) => {
    
    return (
        <header className='listsNav'>
                <button
                    type='button'
                    onClick={fetchUsers}
                >
                    users
                </button>
                <button 
                    type='button'
                    onClick={fetchPosts}
                >
                    posts
                </button>
                <button 
                    type='button'
                    onClick={fetchComments}
                >
                    comments
                </button>
        </header>
    )
}

export default Navigation