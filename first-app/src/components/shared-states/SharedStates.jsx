import React, { useState } from 'react'

const ParentComponent = () => {
    const [text, setText] = useState("");
    return (
        <div>
            <InputBoxComponent setText={setText} />
            <DisplayComponent text={text} />
        </div>
    )
}

const InputBoxComponent = ({ setText }) => {
    return (
        <input type='text' name='name' onChange={(e) => setText(e.target.value)} placeholder='Please enter text here' />
    )
}

const DisplayComponent = ({ text }) => {
    return (
        <div>
            <h3>Typed: {text}</h3>
        </div>
    )
}

const SharedStates = () => {
    return (
        <div>
            <ParentComponent />
        </div>
    )
}

export default SharedStates
