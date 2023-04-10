import React, { useState } from 'react'

export default function TodoForm({addTodo}) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    addTodo(value)
    console.log('value')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}> 
        <input type='text' className='todo-input' placeholder='What is the task you do today?' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
