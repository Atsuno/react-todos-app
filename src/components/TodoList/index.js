import React from 'react'
import TodoItem from '../TodoItem'
import './style.css'

const TodoList = ({ todos, show, handleChange, handleRemove }) => (
  <ul>
    { todos.filter(todo => (todo.finish && show.finish) || (!todo.finish && show.unfinish))
      .map(todo =>
        <TodoItem key={todo.id} {...todo} handleChange={handleChange} handleRemove={handleRemove} />)
    }
  </ul>
)

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(
    React.PropTypes.shape(
      {
        id: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
        finish: React.PropTypes.bool.isRequired
      }
    )).isRequired,
  show: React.PropTypes.objectOf(
    React.PropTypes.shape({
      finish: React.PropTypes.bool.isRequired,
      unfinish: React.PropTypes.bool.isRequired
    })
  ).isRequired,
  handleChange: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired
}

export default TodoList