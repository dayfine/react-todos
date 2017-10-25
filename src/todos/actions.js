const ADD_TODO = 'TODO/ADD'
const TOGGLE_TODO = 'TODO/TOGGLE'
const REMOVE_TODO = 'TODO/REMOVE'

let nextTodoId = 10

export const addTodo = text => ({
  type: ADD_TODO,
  completed: false,
  id: nextTodoId++,
  text: text
})

export const toggleTodo = id => ({
  id,
  type: TOGGLE_TODO
})

export const removeTodo = id => ({
  id,
  type: REMOVE_TODO
})
