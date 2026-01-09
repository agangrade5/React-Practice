import React, { useMemo, useState } from 'react'

const Parent = () => {
    const [count, setCount] = useState(0);

    const user = useMemo(() => (
        {
            name: "Parent User",
            age: 20
        }
    ), []);

    console.log("Parent Component Rendered!");

    return (
        <div>
            <h2>Parent Count: {count}</h2>
            <button 
                onClick={() => setCount(count + 1)}
            >Increase Count</button>
            <Child user={user} />
        </div>
    )
}

// every time rendered (jab bhi parent rendered hoga tab tab child bhi rendered hoga esi se bachne ke liye useMeno ka use kate hai.)
/* const Child = (({ user }) => {
    console.log("Child Component Rendered!");
    return (
        <h3>User: {user.name}</h3>
    )
});*/

// ab only parent rendered hoga child only first time rendered hoga
const Child = React.memo(({ user }) => {
    console.log("Child Component Rendered!");
    return (
        <h3>User: {user.name}</h3>
    )
});

// useMemo => is a cache

export default Parent
