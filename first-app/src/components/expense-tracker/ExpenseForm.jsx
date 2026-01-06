import React, { useRef, useState } from 'react'

const ExpenseForm = ({onAdd}) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const titleRef = useRef();

    const [error, setError] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !amount) {
            setError("Please enter all fields.");
        } else {
            const newExpense = {
                id: Date.now(), 
                title, 
                amount: parseFloat(amount)
            }
            onAdd(newExpense);
            
            setTitle("");
            setAmount("");
            setError("");
            titleRef.current.focus();
        }
    }

    return (
        <>
            {
                error && <p style={{color: "red"}}>{error}</p>
            }
            <form className="expense-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Expense Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    ref={titleRef} 
                />
                <input 
                    type="number" 
                    placeholder="Amount ₹" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                />
                <button type="submit">Add Expense</button>
            </form>
        </>
    )
}

export default ExpenseForm
