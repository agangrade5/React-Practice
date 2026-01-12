import React from 'react'
import useAdvancedForm from './hooks/useAdvancedForm'

const Registration = () => {
    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        gender: '',
        country: '',
        language: '',
        agree: ''
    }

    const onFormSubmit = (values) => {
        console.log('Form Submitted: ', values);
    }

    const { formData, handleChange, handleSubmit, resetForm } = useAdvancedForm(initialValues, onFormSubmit)

    return (
        <div>
            <h2>Registration Form Example</h2>
            <form onSubmit={handleSubmit}>

                <label>First Name: </label>
                <input
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                    value={formData.first_name}
                    onChange={handleChange}
                />
                <br />

                <label>Last Name: </label>
                <input
                    type='text'
                    name='last_name'
                    placeholder='Last Name'
                    value={formData.last_name}
                    onChange={handleChange}
                />
                <br />

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

                <label>Gender: </label>
                <input
                    type='radio'
                    name='gender'
                    value='male'
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                />Male
                <input
                    type='radio'
                    name='gender'
                    value='female'
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                />Female
                <br />

                <label>Country: </label>
                <select 
                    name="country" 
                    value={formData.country}
                    onChange={handleChange}
                >
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>
                <br />

                <label>Language: </label>
                <input
                    type='checkbox'
                    name='language'
                    value='english'
                    checked={formData.language.includes('english')}
                    onChange={handleChange}
                />English
                <input
                    type='checkbox'
                    name='language'
                    value='hindi'
                    checked={formData.language.includes('hindi')}
                    onChange={handleChange}
                />Hindi
                <input
                    type='checkbox'
                    name='language'
                    value='spanish'
                    checked={formData.language.includes('spanish')}
                    onChange={handleChange}
                />Spanish
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                    />
                    I agree to terms and conditions
                </label>
                <br />


                <br />
                <button type='submit'>Submit</button> | 
                <button onClick={resetForm}> Reset Form</button>
            </form>
        </div>
    )
}

export default Registration