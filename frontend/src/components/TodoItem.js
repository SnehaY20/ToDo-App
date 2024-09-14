import React, { useState } from 'react';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.title); 

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing && newText.trim()) {
      editTodo(todo.id, newText);  
    }
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span> 
      )}
      <div className="todo-actions">
        {isEditing ? (
          <FaSave onClick={handleEdit} style={{ color: '#00c853' }} />
        ) : (
          <FaEdit onClick={handleEdit} className="edit-icon" />
        )}
        <FaTrash onClick={() => deleteTodo(todo.id)} className="delete-icon" />
      </div>
    </li>
  );
};

export default TodoItem;
