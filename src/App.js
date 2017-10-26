import React, { Component } from 'react'
import './App.css'
import {component as Filter} from './filter/'
import {component as Todos} from './todos/'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Filter />
        <Todos />
      </div>
    )
  }
}

export default App
