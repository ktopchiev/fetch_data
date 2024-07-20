import React from 'react'
import List from './List'

const Content = ({ list, source }) => {
    return (
        <>
            <List
                list={list}
                source={source}
            />
        </>
    )
}

export default Content