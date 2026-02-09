import * as yup from 'yup';

const passwordSchema = yup
    .string()
    .min(6, 'Password should be at least 6 characters')
    .max(20, 'Password should not exceed 20 characters')
    .required('Password is required')
    .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least one uppercase letter, one number, and one special character');

export default passwordSchema;