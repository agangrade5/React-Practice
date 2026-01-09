import React, { useReducer } from 'react'

const initialState = {
    isChecked: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_CHECKBOX':
            return { isChecked: !state.isChecked }
        default:
            return state;
    }
}

const CheckboxToggle = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>useReducer Checkbox Toggle</h1>

            <label>
                <input
                    type="checkbox"
                    checked={state.isChecked}
                    onChange={() => dispatch({ type: 'TOGGLE_CHECKBOX' })}
                />
                Accept Terms & Conditions
            </label>

            <p>Status: {state.isChecked ? 'Checked ✅' : 'Unchecked ❌'}</p>
        </div>
    )
}

export default CheckboxToggle