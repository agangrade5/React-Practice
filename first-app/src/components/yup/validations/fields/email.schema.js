import * as yup from 'yup';

const emailSchema = yup
    .string()
    .email('Invalid email address')
    .required('Email is required');

export default emailSchema;