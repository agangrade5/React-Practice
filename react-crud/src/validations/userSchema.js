import * as yup from 'yup';

const userSchema = yup.object({
    name: yup
        .string()
        .min(3, 'Name must be at least 3 characters')
        .max(20, 'Name must not exceed 20 characters')
        .required('Name is required'),
    username: yup
        .string()
        .required('Username is required'),
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    age: yup
        .number()
        .typeError('Age must be a number')
        .integer('Age must be an integer')
        .positive('Age must be a positive number')
        .min(18, 'You must be at least 18 years old')
        .required('Age is required'),
});

export default userSchema;