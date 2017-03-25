import React, { Component } from 'react'
import logo from './assets/logo.svg'
import TodoInput from '../TodoInput'
import TodoShow from '../TodoShow'
import TodoList from '../TodoList'
import Srearch from '../Search'
import './style.css'

class App extends Component {
  state = {
    todos: [],
    show: {
      finish: true,
      unfinish: true
    }
  }

  showFilter = (finish, unfinish) => {
    this.setState({
      show: { finish, unfinish }
    })
  }

  addInput = text => {
    const todos = this.state.todos
    this.setState({
      todos: [
        ...todos,
        {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          text,
          finish: false
        }
      ]
    })
  }

  clickChange = id => {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === id ? { ...todo, finish: !todo.finish } : todo)
    })
  }

  clickRemove = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="div-body">
          <Srearch /> <TodoShow handleshowFilter={this.showFilter} /> <TodoInput handleInput={this.addInput} />
          <TodoList {...this.state} handleChange={this.clickChange} handleRemove={this.clickRemove} />
        </div>
      </div>
    )
  }
}

export default App
