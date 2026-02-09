import * as yup from 'yup';
import emailSchema from './fields/email.schema';
import passwordSchema from './fields/password.schema';

const loginSchema = yup.object({
    email: emailSchema,
    password: passwordSchema,
});

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
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
});

export { loginSchema, registerSchema };