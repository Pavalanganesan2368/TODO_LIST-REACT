import React, { useState } from 'react'

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();      
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    }
  }


  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed}  
        onChange={() => onToggle(todo.id)}
        className='todo-checkbox'
      />

      {
        isEditing ? (
        <form style={{ flex: 1}}>
          <input 
            type='text'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyPress}
            className='edit-input'
            autoFocus
          />
        </form>
        ) : (
        <span 
          className="todo-text"
          onDoubleClick={() => setIsEditing(true)}>
            {todo.text}
        </span>
        )}

        <div className="todo-actions">
          <button
            onClick={handleEdit}
            className='edit-button'
            title={isEditing ? 'SAVE' : 'EDIT'}
            type='button'
          >
            {isEditing ? 'SAVE' : 'EDIT'}
          </button>

          <button
            onClick={() => onDelete(todo.id)}
            className='delete-button'
            title='Delete'
            type='button'
          >
            DELETE
          </button>
        </div>
    </div>
  );
};

export default TodoItem