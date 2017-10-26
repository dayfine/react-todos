import React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

import {addTodo} from '../actions.js'

const AddTodo = props => {
  const {onSubmit} = props
  return (
    <div className='add-todo'>
      <form onSubmit={onSubmit}>
        <input className='new-todo' name='todo' laceholder='Enter Your To-Do' />
        <RaisedButton className='add-btn' type='submit'>
          Add
        </RaisedButton>
      </form>
    </div>
  )
}

const mapDispatch = dispatch => ({
  onSubmit (ev) {
    ev.preventDefault()
    const inputValue = ev.target.todo.value
    if (!inputValue.trim()) return

    dispatch(addTodo(inputValue))
    ev.target.todo.value = ''
  }
})

export default connect(null, mapDispatch)(AddTodo)
