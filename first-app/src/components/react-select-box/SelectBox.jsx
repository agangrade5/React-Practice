import React, { useState } from 'react'
import Select from 'react-select'
import CreatableSelectBox from 'react-select/creatable';
import AsyncSelect from 'react-select/async';

const SelectBox = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'kiwi', label: 'Kiwi' },
        { value: 'watermelon', label: 'Watermelon' },
        { value: 'papaya', label: 'Papaya' },
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: '1px solid red',
            borderRadius: '4px',
            borderWidth: '4px',
            padding: '5px',
        }),
        option: (provided) => ({
            ...provided,
            padding: '10px',
            cursor: 'pointer',
            color: 'blue',
            backgroundColor: 'pink',
            '&:hover': {
                backgroundColor: '#f0f0f0',
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'green',
            fontWeight: 'bold',
        }),
    };

    const loadOptionData = async (inputValue) => {
        return fetch(`https://jsonplaceholder.typicode.com/users?name=${inputValue}`)
            .then((res) => res.json())
            .then((data) => data.map((user) => ({
                value: user.id, label: user.name
            })));
    };

    return (
        <div>
            <h2>React Select Box Example</h2>
            {/* basic select box example */}
            <Select
                options={options}
                placeholder="Select a fruit"
                value={selectedOption}
                isSearchable={false}
                onChange={setSelectedOption}
                isClearable
                styles={customStyles}
            />

            {
                selectedOption && (
                    <div className='mt-3'>
                        <strong>Selected Fruit:</strong> {selectedOption.label}
                    </div>
                )
            }
            <br />

            {/* creatable select box example */}
            <CreatableSelectBox
                options={options}
                placeholder="Select or create a fruit"
                isMulti
            />
            <br />

            {/* async select box example */}
            <AsyncSelect
                cacheOptions
                loadOptions={loadOptionData}
                placeholder="Search for a user"
                defaultOptions
                isClearable
            />
            <br />

        </div >
    )
}

export default SelectBox