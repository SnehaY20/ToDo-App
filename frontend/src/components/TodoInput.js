import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Add your new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoInput;
