import React, { Component } from 'react'
import logo from './assets/logo.svg'
import TodoInput from '../TodoInput'
import TodoShow from '../TodoShow'
import TodoList from '../TodoList'
import './style.css'

class App extends Component {
  state = {
    todos: [],
    show: {
      finish: true,
      unfinish: true
    }
  }

  showAll = () => {
    this.setState({
      show: {
        finish: true,
        unfinish: true
      }
    })
  }

  showFinish = () => {
    this.setState({
      show: {
        finish: true,
        unfinish: false
      }
    })
  }

  showUnfinish = () => {
    this.setState({
      show: {
        finish: false,
        unfinish: true
      }
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
          <TodoShow handleShowAll={this.showAll} handleShowFinish={this.showFinish} handleShowUnfinish={this.showUnfinish} />
          <TodoInput handleInput={this.addInput} />
          <TodoList {...this.state} handleChange={this.clickChange} handleRemove={this.clickRemove} />
        </div>
      </div>
    )
  }
}

export default App
