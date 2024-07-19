import React from 'react'

const Item = (item) => {
  return (
    <li className='item'>
        {JSON.stringify(item)}
    </li>
  )
}

export default Item