import React from 'react'

const ParentComponent = () => {
    const parentProp = "Parent Data";
    return <ChildComponent childProp={parentProp} />
}

const ChildComponent = ({ childProp }) => {
    return <GrandChildComponent grandChildProp={childProp} />
}

const GrandChildComponent = ({ grandChildProp }) => {
    return `My name is ${grandChildProp}`;
}

const PropsDrilling = () => {
    return (
        <div>
            <ParentComponent />
        </div>
    )
}

export default PropsDrilling
