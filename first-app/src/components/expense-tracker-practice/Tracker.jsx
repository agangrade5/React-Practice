import React, { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'

const Tracker = () => {
    const [expenses, setExpenses] = useState(() => {
        const getLocalData = localStorage.getItem("expensesData");
        return getLocalData ? JSON.parse(getLocalData) : [];
    });

    // add expenses
    const addExpense = (expense) => {
        setExpenses((prev) => [...prev, expense]);
    }

    // delete expense
    const deleteExpense = (id) => {
        setExpenses((prev) => prev.filter((item) => item.id != id))
    }

    // set localstorage data
    useEffect(() => {
        localStorage.setItem("expensesData", JSON.stringify(expenses))
    }, [expenses]);

    // total expenses
    const totalExpenses = expenses.reduce((accumulator, item) => {
        return accumulator + item.amount;
    }, 0)

    return (
        <div className="app-container">
            <h1>💰 Expense Tracker</h1>
            <Form onAdd={addExpense} />
            <h3 className="total">Total Expense: ₹{totalExpenses.toFixed(2)}</h3>
            <List expenses={expenses} onDelete={deleteExpense} />
        </div>
    )
}

export default Tracker
