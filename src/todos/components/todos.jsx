import React from 'react'
import AddTodo from './addToDo'
import TodoList from './todoList'

import './todos.css'

export default () => {
  return (
    <div className='todos'>
      <AddTodo />
      <TodoList />
    </div>
  )
}
