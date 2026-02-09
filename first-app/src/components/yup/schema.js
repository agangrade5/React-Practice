import * as yup from 'yup';

const registerSchema = yup.object({
    firstName: yup
        .string()
        .required('First name is required')
        .trim()
        .lowercase()
        .test('is-not-admin', 'Admin is not allowed as first name', (value) => value !== 'admin'),
    lastName: yup
        .string()
        .required('Last name is required'),
    email: yup
        .string()
        .when('age', {
            is: (age) => age >= 18, // If age is 18 or above, email is required and must be valid
            then: schema => schema
                .email('Invalid email address')
                .required('Email is required if age is 18 or above'),
            otherwise: schema => schema
                .notRequired()
        }),
        /* .email('Invalid email address')
        .required('Email is required')
        .test('is-email-unique', 'Email address is already in use', async (value) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`);
            const data = await response.json();
            return data.length === 0; // Return true if email is unique, false if it already exists
        }), */
    password: yup
        .string()
        .min(6, 'Password should be at least 6 characters')
        .max(20, 'Password should not exceed 20 characters')
        .required('Password is required')
        .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least one uppercase letter, one number, and one special character'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    age: yup
        .number()
        .typeError('Age must be a number')
        .required('Age is required')
        .positive('Age must be a positive number')
        .integer('Age must be an integer'),
    skills: yup
        .array()
        .of(yup.string())
        .min(2, 'At least two skills must be selected')
        .max(3, 'You can select a maximum of three skills')
        .required('Skills are required'),
});

export default registerSchema;