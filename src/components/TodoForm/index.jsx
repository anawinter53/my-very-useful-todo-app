import React, { useState } from 'react'

export default function TodoForm() {
  const [value, setValue] = useState('')

  return (
    <form className='TodoForm'> 
        <input type='text' className='todo-input' placeholder='What is the task you do today?' onClick={(e) => console.log(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
