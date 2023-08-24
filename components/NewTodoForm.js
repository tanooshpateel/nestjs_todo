import React, { useState } from 'react';
import axios from 'axios';

const NewTodoForm = ({ onAdd }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newTodo.trim() === '') return;

        try {
            const response = await axios.post('/api/create', { text: newTodo });
            onAdd(response.data);
            setNewTodo('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodoForm;
