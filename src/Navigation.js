const Navigation = ({ setSource }) => {
    
    return (
        <header className='listsNav'>
                <button
                    type='button'
                    onClick={ () => {
                        setSource('users');
                        console.log('source was set to users')
                    }}
                >
                    users
                </button>
                <button 
                    type='button'
                    onClick={ () => {
                        setSource('posts');
                        console.log('source was set to posts')
                    }}
                >
                    posts
                </button>
                <button 
                    type='button'
                    onClick={ () => setSource('comments')}
                >
                    comments
                </button>
        </header>
    )
}

export default Navigation