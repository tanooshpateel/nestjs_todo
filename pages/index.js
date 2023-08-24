import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from '../components/TodoList';
import NewTodoForm from '../components/NewTodoForm';

const Home = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('/api/read');
            setTodos(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdate = async (updatedTodo) => {
        try {
            const updatedTodos = todos.map((todo) =>
                todo.id === updatedTodo.id ? updatedTodo : todo
            );
            setTodos(updatedTodos);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (deletedId) => {
        try {
            const updatedTodos = todos.filter((todo) => todo.id !== deletedId);
            setTodos(updatedTodos);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleAdd = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
            <NewTodoForm onAdd={handleAdd} />
        </div>
    );
};

export default Home;
