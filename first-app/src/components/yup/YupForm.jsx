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
            <h2 className="text-2xl font-bold mb-4">Yup Form</h2>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="mb-4">
                    <label className="block text-gray-700">First Name:</label>
                    <input
                        type="text"
                        {...register("firstName")}
                        className="border border-gray-400 p-2 w-full"
                    />
                    {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Last Name:</label>
                    <input
                        type="text"
                        {...register("lastName")}
                        className="border border-gray-400 p-2 w-full"
                    />
                    {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        {...register("email")}
                        className="border border-gray-400 p-2 w-full"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        {...register("password")}
                        className="border border-gray-400 p-2 w-full"
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Confirm Password:</label>
                    <input
                        type="password"
                        {...register("confirmPassword")}
                        className="border border-gray-400 p-2 w-full"
                    />
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Age:</label>
                    <input
                        type="number"
                        {...register("age")}
                        className="border border-gray-400 p-2 w-full"
                    />
                    {errors.age && <p className="text-red-500">{errors.age.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Skills:</label>
                    <input
                        type="checkbox"
                        {...register("skills")}
                        className="border border-gray-400 p-2 w-full"
                    />HTML
                    <input
                        type="checkbox"
                        {...register("skills")}
                        className="border border-gray-400 p-2 w-full"
                    />CSS
                    <input
                        type="checkbox"
                        {...register("skills")}
                        className="border border-gray-400 p-2 w-full"
                    />JavaScript
                    {errors.skills && <p className="text-red-500">{errors.skills.message}</p>}
                </div>

                <button type="submit" className="bg-blue-500 text-black py-2 px-4 rounded">Submit</button>

            </form>
        </div>
    )
}

export default YupForm
