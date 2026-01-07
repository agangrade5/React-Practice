import React, { useState } from 'react'

const ParentComponent = () => {
    const [text, setText] = useState("");
    return (
        <div>
            <InputBoxComponent setText={setText} />
            <h3>Typed: {text}</h3>
        </div>
    )
}

const InputBoxComponent = ({ setText }) => {
    return (
        <input type='text' name='name' onChange={(e) => setText(e.target.value)} placeholder='Please enter text here' />
    )
}

const StateLifting = () => {
    return (
        <div>
            <ParentComponent />
        </div>
    )
}

export default StateLifting
