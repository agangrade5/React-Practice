import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => {
                if(prev === 60) {
                    return setSeconds(0);
                } 
                return prev + 1;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log('Timer Cleared!')
        }
    }, []);

    return (
        <div>
            <h1>Use Effect: Timer testing </h1>
            <h2>Seconds: {seconds}</h2>
        </div>
    )
}

export default Timer
