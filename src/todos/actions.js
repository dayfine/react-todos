
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js'

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
