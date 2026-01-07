import React, { createContext, useContext } from 'react'

const UserContext = createContext();

const PropsDrillingContextMultipleValue = () => {
    const user = {
        name: "Parent User", 
        role: "Admin"
    };
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
    return <GrandChildComponent />
}

const GrandChildComponent = () => {
    const { name, role } = useContext(UserContext);
    return <p>Welcome {name} - your role is {role}</p>;
}

export default PropsDrillingContextMultipleValue
