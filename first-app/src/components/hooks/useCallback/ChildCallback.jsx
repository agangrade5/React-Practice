import React from "react";

const ChildCallback = ({click}) => {
    console.log("Child Rendered");
    return <button onClick={click}>Child Button</button>
}

export default React.memo(ChildCallback)