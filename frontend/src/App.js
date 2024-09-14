import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    axios.get('/api/v1/todo')  
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  const addTodo = (newTodo) => {
    axios.post('/api/v1/todo', { title: newTodo })  
      .then((response) => {
        setTodos([...todos, response.data]);
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });
  };

  const editTodo = (id, newText) => {
    axios.put(`/api/v1/todo/${id}`, { title: newText })  
      .then((response) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? response.data : todo
        );
        setTodos(updatedTodos);
      })
      .catch((error) => {
        console.error('Error updating todo:', error);
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`/api/v1/todo/${id}`)  
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo}  />
      <div className="todo-footer">
        {todos.length > 0 ? (
          <p>You have {todos.length} pending tasks</p>
        ) : (
          <p>No pending tasks</p>
        )}
      </div>
      {todos.length > 0 && (
        <button className="clear-btn" onClick={clearTodos}>Clear All</button>
      )}
    </div>
  );
};

export default App;
