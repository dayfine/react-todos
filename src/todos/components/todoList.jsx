import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './todoItem'
import { FilterTypes } from '../../constants.js'

const TodoList = ({todos, onClickTodo}) => {
  return (
    <ul className='todo-list'>
      {
      todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
        />
        ))
    }
    </ul>
  )
}

const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed)
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed)
    default:
      console.log(filter)
      throw new Error('unsupported filter')
  }
}

const mapState = state => ({
  todos: selectVisibleTodos(state.todos, state.filter)
})

export default connect(mapState)(TodoList)
