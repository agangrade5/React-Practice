import { useState, useCallback} from 'react'
import ChildCallback from './ChildCallback';

const ParentCallback = (() => {
    const [count, setCount] = useState(0)  

    const handleClick = useCallback(() => {
        console.log("Button Clicked")
    }, [])
    
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Parent Button</button>

            <ChildCallback click={handleClick} />
        </div>
    )
});

export default ParentCallback