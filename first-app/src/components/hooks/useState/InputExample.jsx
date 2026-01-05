import React, { useState } from 'react'

const InputExample = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email);
    }

    return (
        <div>
            <h2>Simple Input Form Example</h2>
            <form onSubmit={handleSubmit}>

                <label>Name: </label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

                <label>Email: </label>
                <input 
                    type='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default InputExample
