import React, { useReducer } from 'react'

const initialState = {
    count: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'RESET':
            return { count: 0 }
        default:
            return state;
    }
}

const CountReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>useReducer Counter</h1>
            <p>Count: {state.count}</p>

            <button onClick={() => dispatch({ type: 'INCREMENT' })}>
                INCREMENT
            </button>

            {" | "}

            <button onClick={() => dispatch({ type: 'DECREMENT' })}>
                DECREMENT
            </button>

            {" | "}

            <button onClick={() => dispatch({ type: 'RESET' })}>
                RESET
            </button>
        </div>
    )
}

export default CountReducer
