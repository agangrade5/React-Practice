import React from 'react'

const PostList = ({ name, data, loading, error }) => {
    return (
        <div>
            <h2>{ name }</h2>

            {loading && <p>Loading...</p>}

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            {!loading && !error && (
                <ul>
                    {
                        data.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}

export default PostList
