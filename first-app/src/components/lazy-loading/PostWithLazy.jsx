import React, { useState, Suspense, lazy } from 'react'
const PostData = lazy(() => import('./PostData'));

const PostWithLazy = () => {

    const [showPost, setShowPost] = useState(false);

    return (
        <div>
            <button onClick={() => setShowPost(true)}>Show Posts</button>
            {showPost && (
                <Suspense fallback={<p>lazy loading...</p>}>
                    <PostData />
                </Suspense>
            )}
        </div>
    )
}

export default PostWithLazy
