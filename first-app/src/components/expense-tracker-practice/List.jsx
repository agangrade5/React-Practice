import React from 'react'
import Item from './Item'

const List = ({ expenses, onDelete }) => {
    return (
        <div className="expense-list">
            {
                (expenses.length === 0) ? (
                    <p className="no-expense">No Expenses Yet</p>
                ) : (
                    expenses.map((expense) => (
                        <Item key={expense.id} expense={expense} onDelete={onDelete} />
                    ))
                )
            }
        </div>
    )
}

export default List