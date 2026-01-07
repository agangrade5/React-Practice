import React, { useEffect, useEffectEvent, useState } from 'react'

const TimerEvent = () => {
    const [count, setCount] = useState(0);

    const onTrick = useEffectEvent(() => {
        console.log(`Use Effect Inside Count: ${count}`);
        setCount((c) => c + 1);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            onTrick();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Use Effect Event - Timer Example</h1>
            <p>Count: {count}</p>
        </div>
    )
}

export default TimerEvent
