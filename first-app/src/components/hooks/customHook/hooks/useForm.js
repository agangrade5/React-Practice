import React, { useState } from 'react'

const useForm = (initialValues = {}, callback) => {
    const [formData, setFormData] = useState(initialValues);

    // handle input change
    const handleChange = (e => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    });

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (callback) callback(formData);
    }

    // reset form
    const resetForm = () => setFormData(initialValues);

    return {
        formData,
        handleChange,
        handleSubmit,
        resetForm
    }
}

export default useForm