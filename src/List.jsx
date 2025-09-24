import React from 'react'
import TodoItem from './TodoItem'

const List = ({ filteredTodos, keyValue, onToggle, onDelete, onEdit }) => {
  return (
    <div className='todo-list'>
        {filteredTodos.map((todo) => (
            <TodoItem 
                keyValue={keyValue}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
                onEdit={onEdit}
            />
        ))}
    </div>
  )
}

export default List