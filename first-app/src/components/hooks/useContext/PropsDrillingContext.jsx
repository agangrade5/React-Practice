import React, { createContext, useContext } from 'react'

const UserContext = createContext();

const PropsDrillingContext = () => {
    const user = "Parent User";
    return (
        <UserContext.Provider value={user}>
            <ParentComponent />
        </UserContext.Provider>
    )
}

const ParentComponent = () => {
    return <ChildComponent />
}

const ChildComponent = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h2>I'm in ChildComponent :- {user}</h2>
            <GrandChildComponent />
        </div>
    )
}

const GrandChildComponent = () => {
    const user = useContext(UserContext);
    return `I'm in GrandChildComponent :- ${user}`;
}

export default PropsDrillingContext
