import React, { useRef, useState } from 'react'

const Form = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const titleRef = useRef();

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
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form className="expense-form" onSubmit={handleSubmit}>
                <input 
                    placeholder="Expense Title" 
                    type="text" 
                    name='title'
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    ref={titleRef} 
                />
                <input 
                    placeholder="Amount ₹" 
                    type="number" 
                    name='amount'
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                />
                <button type="submit">Add Expense</button>
            </form>
        </div>
    )
}

export default Form