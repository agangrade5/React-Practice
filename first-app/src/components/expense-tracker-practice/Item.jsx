import React from 'react'

const Item = ({ expense, onDelete}) => {
    return (
        <div className="expense-item" key={expense.id}>
            <span>{expense.title} </span>
            <span>₹{expense.amount.toFixed(2)}</span>
            <button onClick={() => onDelete(expense.id)}>❌</button>
        </div>
    )
}

export default Item