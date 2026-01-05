import React, { useState } from 'react'

const TodoApp = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!newTodo) {
            setError("Please enter add todo.")
        } else {
            setTodos([...todos, { text: newTodo, completed: false }]);

            setError("")
            setNewTodo("");
        }
    }

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    return (
        <div>
            <h2>Todo App</h2>

            { error && <p style={{color: "red"}}>{error}</p>}
            
            <form onSubmit={handleSubmit}>

                <input
                    type='text'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder='Todo name here'
                />
                <button type='submit'>Add Todo</button>
            </form>

            <br />
            <ul>
                {
                    todos && todos.map((todo, index) => (
                        <li key={index}>
                            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoApp
