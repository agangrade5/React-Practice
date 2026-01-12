import React from 'react'
import useForm from './hooks/useForm'

const LoginForm = () => {
    
    const initialValues = {
        email: '',
        password: ''
    }

    const onFormSubmit = (values) => {
        console.log('Form Submitted: ', values);
    }

    const { formData, handleChange, handleSubmit, resetForm } = useForm(initialValues, onFormSubmit)

    return (
        <div>
            <h2>Login Form Example</h2>
            <form onSubmit={handleSubmit}>

                <label>Email: </label>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />

                <label>Password: </label>
                <input 
                    type='password' 
                    name='password'
                    placeholder='Password'
                    value={formData.password} 
                    onChange={handleChange}
                />
                <br />
                <br />

                <button type='submit'>Submit</button> | 
                <button onClick={resetForm}> Reset Form</button>
            </form>
        </div>
    )
}

export default LoginForm
