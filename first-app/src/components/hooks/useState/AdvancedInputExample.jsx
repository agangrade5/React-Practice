import React, { useState } from 'react'

const AdvancedInputExample = () => {
    const [formData, setFormData] = useState({
        gender: "",
        country: "india",
        language: [],
        agree: false
    });

    //console.clear();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        //console.log(e.target);
        
        console.log(name);
        console.log(value);
        console.log(type);
        console.log(checked);

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
    }

    return (
        <div>
            <h2>Advanced (checkbox, radio button, select box) Input Form Example</h2>
            <form onSubmit={handleSubmit}>
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

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AdvancedInputExample
