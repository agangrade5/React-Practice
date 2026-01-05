import React, { useState } from 'react'

const BasicValidationForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            setError("Please Fill all fields");
        } else {
            setError("");
            console.log("Form Submitted: ", {name, email});
            alert("Form submitted successfully");
        }
    }

    return (
        <div>
            <h2>Basic Validation Form</h2>

            { error && <p style={{color: "red"}}>{error}</p> }

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

export default BasicValidationForm
