import React, { useState } from 'react'

const MultiInputExample = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div>
            <h2>Multi Input Form Example</h2>
            <form onSubmit={handleSubmit}>

                <label>Name: </label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
                <br />

                <label>Email: </label>
                <input 
                    type='email' 
                    name='email'
                    value={formData.email} 
                    onChange={handleChange}
                />
                <br />

                <label>Age: </label>
                <input 
                    type='number' 
                    name='age'
                    value={formData.age} 
                    onChange={handleChange}
                />
                <br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default MultiInputExample
