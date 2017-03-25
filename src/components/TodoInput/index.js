import React, { Component } from 'react'
import './style.css'

class TodoInput extends Component {
  state = {
    inputText: ''
  }

  inputChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  eventEnter = event => {
    if (event.key === 'Enter' && this.state.inputText.length) {
      this.props.handleInput(this.state.inputText)
      this.setState({
        inputText: ''
      })
    }
  }

  render() {
    return (
      <div className="div-input">
        <input
          className="input" type="text" placeholder="What would you to do ?"
          onKeyPress={this.eventEnter} value={this.state.inputText} onChange={this.inputChange}
        />
      </div>
    )
  }
}

TodoInput.propTypes = {
  handleInput: React.PropTypes.func.isRequired
}

export default TodoInput