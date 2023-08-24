import React from 'react';
import axios from 'axios';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
    const handleToggle = async () => {
        try {
            const updatedTodo = { ...todo, completed: !todo.completed };
            await axios.put('/api/update', updatedTodo);
            onUpdate(updatedTodo);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete('/api/delete', { data: { id: todo.id } });
            onDelete(todo.id);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
            {todo.text}
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;
