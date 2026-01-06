import React, { useEffect, useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState(() => {
        const getLocalExpenseData = localStorage.getItem("localExpenses");
        return getLocalExpenseData ? JSON.parse(getLocalExpenseData) : [];
    });

    // add expense
    const addExpense = (expense) => {
        setExpenses((prev) => [...prev, expense])
    }

    // delete expense
    const deleteExpense = (id) => {
        setExpenses((prev) => prev.filter((item) => item.id !== id))
    }

    // local storage save data
    useEffect(() => {
        localStorage.setItem("localExpenses", JSON.stringify(expenses))
    }, [expenses]);

    // total expenses amount from reduce function
    const totalExpenses = expenses.reduce((accumulator, expense) => {
        return accumulator + expense.amount
    }, 0);

    return (
        <div className="app-container">
            <h1>💰 Expense Tracker</h1>
            <ExpenseForm onAdd={addExpense} />
            <h3 className="total">Total Expense: ₹{totalExpenses.toFixed(2)}</h3>
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </div>
    )
}

export default ExpenseTracker
