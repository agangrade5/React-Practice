import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0); 
    const [isVisible, setIsVisible] = useState(false); 

    const [student, setStudent] = useState({
        name: "jhon",
        email: "jhon@test.com",
        age: 20
    });

    return (
        <div>
            <h2>Count Increase : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrese</button>

            <br />
            <h2>Button Text</h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                { isVisible ? 'Hide' : 'Show'} Text
            </button>
            { isVisible && '<p>This is secret message</p>'}

            <br />
            <h2>Student details</h2>
            <p>Name: {student.name}</p>
            <button onClick={() => setStudent({...student, name: "newUpdate"})}>Name Change</button>
            <p>Email: {student.email}</p>
            <button onClick={() => setStudent({...student, email: "newUpdate@test.com"})}>Email Change</button>
            <p>Age: {student.age}</p>
            <button onClick={() => setStudent({...student, age: student.age + 1})}>Age Increase</button>
        </div>
    )
}

export default Counter
