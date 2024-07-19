import React from 'react'

const Navigation = ({fetchUsers, fetchPosts, fetchComments}) => {
  return (
    <nav className='listsNav'>
        <button type='button' onClick={fetchUsers}>
            users
        </button>
        <button type='button' onClick={fetchPosts}>
            posts
        </button>
        <button type='button' onClick={fetchComments}>
            comments
        </button>
    </nav>
  )
}

export default Navigation