const Navigation = ({ source, setSource }) => {

    return (
        <header className='listsNav'>
            <button
                className={source === 'users' ? 'focused' : null}
                type='button'
                onClick={() => {
                    setSource('users');
                    console.log('source was set to users')
                }}
            >
                users
            </button>
            <button
                className={source === 'posts' ? 'focused' : null}
                type='button'
                onClick={() => {
                    setSource('posts');
                    console.log('source was set to posts')
                }}
            >
                posts
            </button>
            <button
                className={source === 'comments' ? 'focused' : null}
                type='button'
                onClick={() => setSource('comments')}
            >
                comments
            </button>
        </header>
    )
}

export default Navigation