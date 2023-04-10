import React, {useEffect, useState} from 'react'
import TodoForm from '../TodoForm'
import {v4 as uuidv4} from 'uuid'

export default function ToDoWrapper() {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log('add triggered')
  }

  useEffect(() => {
   console.log(todos)
  }, [todos])

  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}

