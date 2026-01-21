import React from 'react'
import Posts from './Posts'

const PostData = () => {
    const { data, error, loading } = Posts(
        'https://jsonplaceholder.typicode.com/posts'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    console.log('aaaa');
    
    return (
        <div>
            <h1>PostData</h1>
            <ul>
                {
                    data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PostData