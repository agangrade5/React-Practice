import React, {useState, useCallback} from 'react'

const CounterCallback = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
        console.log("Increment function load!");
    }, []); // [] => only first time load, not dependency means every time load

    console.log("Parent Component Rendered!");

    return (
        <div>
            <h1>CounterCallback</h1>
            <h2>Count: {count}</h2>
            <button 
                onClick={increment}
            >Increase Count</button>
        </div>
    )
}

export default CounterCallback