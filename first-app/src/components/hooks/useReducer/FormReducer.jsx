import React, { useReducer } from 'react'

const initialFormData = {
    username: "",
    email: ""
}

const reducer = ((state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
});

const FormReducer = () => {
    const [formData, dispatch] = useReducer(reducer, initialFormData);

    const handleChange = ((e) => {
        dispatch({
            name: e.target.name,
            value: e.target.value,
        })
    });

    return (
        <div>
            <h1>useReducer Form Data</h1>
            <form>
                <input 
                    type='text'
                    name='username'
                    placeholder='Enter username'
                    value={formData.username}
                    onChange={handleChange}
                />
                <input 
                    type='email'
                    name='email'
                    placeholder='Enter email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <p>Username: {formData.username}, Email: {formData.email}</p>
            </form>
        </div>
    )
}

export default FormReducer
