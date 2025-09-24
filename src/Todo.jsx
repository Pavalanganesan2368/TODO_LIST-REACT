import React, { useEffect, useState } from 'react'
import Form from './Form';
import List from './List';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const savedTodos = localStorage.getItem('todo');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();

        if(inputValue.trim() !== '') {
            const newTodo = {
                id : Date.now(),
                text : inputValue.trim(),
                completed: false,
                createdAt: new Date().toLocaleString()
            };

            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    }

    console.log(todos[0]);
    


    const filteredTodos = todos.filter(todo => {
        switch (filter) {
            case 'active' :
                return !todo.completed;
            case 'completed':
                return todo.completed;
            default:
                return true;
        }
    });

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => (
            todo.id === id ? {...todo, completed: !todo.completed } : todo
        )));
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id, newText) => {
        if (newText.trim() !== '') {
            setTodos(todos.map(todo => (
                todo.id === id ? { ...todo, text: newText.trim() } : todo
            )));
        }
    }


    return (
      <div className='todo-container'>
        <h1>Todo List</h1>

        <Form 
            addTodo={addTodo}
            inputValue={inputValue}
            setInputValue={setInputValue}
        />

        <List 
            filteredTodos={filteredTodos}
            keyValue={todos.map((todo) => todo.id)}
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
        />
      </div>
    )
}

export default Todo