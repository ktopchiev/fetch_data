import React from 'react'
import List from './List'

const Content = ({ list }) => {
    return (
        <main>
            <List
                list={list}
            />
        </main>
    )
}

export default Content