import React from 'react'

const hocWithStyle = (WrappedComponent) => {

    const style = {
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#f0f8ff'
    };

    return (props) => {
        return (
            <div style={style}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default hocWithStyle