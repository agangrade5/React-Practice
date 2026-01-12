import React from 'react'
import useToggle from './hooks/useToggle'

const ToggleTest = () => {
    const [isOpen, toggleOpen] = useToggle();
    const [isTest, toggleTest] = useToggle()

    return (
        <div>
            <h2>Custom Hook: Toggle Example</h2>
            <div>
                <button onClick={toggleOpen}>Toggle</button>
                {isOpen && <p>Hello, this is visible!</p>}
            </div>
            <div>
                <button onClick={toggleTest}>Toggle Test</button>
                {isTest && <p>Hello, this is testing!</p>}
            </div>
        </div>
    )
}

export default ToggleTest
