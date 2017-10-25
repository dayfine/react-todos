import React, { Component } from 'react'
import './App.css'
import {component as Filter} from './filter/'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Filter />
      </div>
    )
  }
}

export default App
