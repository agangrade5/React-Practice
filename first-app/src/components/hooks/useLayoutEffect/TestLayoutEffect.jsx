import React, { useEffect, useLayoutEffect, useState } from 'react'

const TestLayoutEffect = () => {
    // te hook html ke bad render hua
    useEffect(() => {
        console.log("useEffect Message!");
    }, []);

    // ye hook html se bhi phle chala fir html render hui
    useLayoutEffect(() => {
        console.log("useLayoutEffect Message!");
    }, []);

    return (
        <div>
            <h1>useLayoutEffect</h1>
        </div>
    )
}

export default TestLayoutEffect
