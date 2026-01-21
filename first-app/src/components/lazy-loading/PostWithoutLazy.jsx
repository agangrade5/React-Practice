import React, { useState } from 'react'
import PostData from './PostData';

const PostWithoutLazy = () => {

    const [showPost, setShowPost] = useState(false);

    return (
        <div>
            <button onClick={() => setShowPost(true)}>Show Posts</button>
            {showPost && (
                <PostData />
            )}
        </div>
    )
}

export default PostWithoutLazy
