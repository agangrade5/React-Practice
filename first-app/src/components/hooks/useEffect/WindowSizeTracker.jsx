import React, { useEffect, useState } from 'react'

const WindowSizeTracker = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Unsubscribed from resize event.")
        }
    }, []);

    return (
        <div>
            <h1>Window Width Tracker</h1>
            <p>Current Width: {width}px</p>
        </div>
    )
}

export default WindowSizeTracker
