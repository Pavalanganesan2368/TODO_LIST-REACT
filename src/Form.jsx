import React from 'react'

const Form = ({ addTodo, inputValue, setInputValue }) => {
  return (
    <form onSubmit={addTodo} className='todo-form'>
        <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='What needs to be done?'
            className='todo-input'
        />

        <button type='submit' className='add-button'>Add Todo</button>
    </form>
  )
}

export default Form