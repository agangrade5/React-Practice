import React, { useLayoutEffect, useRef } from 'react'

const ChatLayoutEffect = () => {
    const chatRef = useRef(null)

    useLayoutEffect(() => {
        const el = chatRef.current 
        el.scrollTop = el.scrollHeight;
    }, [])

    return (
            <div ref={chatRef} 
                style={{ 
                        height: "150px", 
                        width: "250px",
                        border:"1px solid #ccc", 
                        overflowY: "scroll"
                    }}>
                <p>Hello</p>
                <p>How are you ?</p>
                <p>Welcome to chat</p>
                <p>Testing.....</p>
                <p>Hello</p>
                <p>How are you ?</p>
                <p>Welcome to chat</p>
                <p>Testing.....</p>
            </div>
    )
}

export default ChatLayoutEffect