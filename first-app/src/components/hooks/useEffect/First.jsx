import React, { useEffect, useState } from 'react'

const First = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `Count ${count}`;
        console.log('Component Re-rendered!');
    }, [name, count]);

    return (
        <div>
            <h1>Use Effect: Render testing </h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default First
