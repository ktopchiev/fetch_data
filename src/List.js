import React from 'react'
import UserItem from './UserItem'
import PostItem from './PostItem'
import CommentItem from './CommentItem'

const List = ({ list, source }) => {

    switch (source) {
        case "users":
            return (
                <ul>
                    {
                        list.map((item) =>
                            <UserItem
                                key={item.id}
                                item={item}
                            />
                        )
                    }

                </ul>
            )
        case "posts":
            return (
                <ul>
                    {
                        list.map((item) =>
                            <PostItem
                                key={item.id}
                                item={item}
                            />
                        )
                    }

                </ul>
            )
        case "comments":
            return (
                <ul>
                    {
                        list.map((item) =>
                            <CommentItem
                                key={item.id}
                                item={item}
                            />
                        )
                    }

                </ul>
            )

        default:
            break;
    }
}

export default List