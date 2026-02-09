import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from './schema';

const YupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const onError = (errors) => {
        console.log(errors);
    }
    return (
        <div>
            <h2>Yup Form</h2>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" {...register("firstName")} placeholder='First name here' />
                    {errors.firstName && <span>{errors.firstName.message}</span>}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" {...register("lastName")} placeholder='Last name here' />
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" {...register("email")} placeholder='Email here' />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" {...register("password")}  />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" {...register("confirmPassword")}  />
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" name="age" {...register("age")}  />
                    {errors.age && <span>{errors.age.message}</span>}
                </div>
                <div>
                    <label>Skills:</label>
                    <input 
                        type="checkbox" 
                        name="skills" 
                        value="HTML" 
                        {...register("skills")} 
                    /> HTML
                    <input 
                        type="checkbox" 
                        name="skills" 
                        value="CSS" 
                        {...register("skills")} 
                    /> CSS
                    <input 
                        type="checkbox" 
                        name="skills" 
                        value="JavaScript" 
                        {...register("skills")} 
                    /> JavaScript
                    {errors.skills && <span>{errors.skills.message}</span>}
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default YupForm
