import React, { useState } from 'react'

const useAdvancedForm = (initialValues = {}, callback) => {
    const [formData, setFormData] = useState(initialValues);

    // handle input change
    const handleChange = (e => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox" && name === "language") {
            setFormData((prev) => ({
                ...prev,
                language: checked
                    ? [...prev.language, value]
                    : prev.language.filter((lang) => lang !== value)
            }));
        } else if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
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

export default useAdvancedForm