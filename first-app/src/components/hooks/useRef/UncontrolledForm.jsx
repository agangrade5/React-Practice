import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name: ', nameRef.current.value);
        console.log('Email: ', emailRef.current.value);
    }
    
    return (
        <div>
            <h2>Uncontrolled Form Example</h2>
            <form onSubmit={handleSubmit}>

                <label>Name: </label>
                <input
                    type='text'
                    ref={nameRef}
                    placeholder='name here'
                />
                <br />

                <label>Email: </label>
                <input 
                    type='email' 
                    ref={emailRef}
                    placeholder='email here' 
                />
                <br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledForm
