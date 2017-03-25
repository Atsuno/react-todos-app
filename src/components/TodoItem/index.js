import React from 'react'
import './style.css'

const TodoItem = ({ id, text, finish, handleChange, handleRemove }) => {
  const clickChange = () => handleChange(id)
  const clickRemove = () => handleRemove(id)
  const finishItem = finish ? 'finish' : 'unfinish'

  return (
    <div className="div-text">
      <li>
        <span className={finishItem} onClick={clickChange}>{text}</span>
        <button className="item-button" onClick={clickRemove}>x</button>
      </li>
    </div>
  )
}

TodoItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  finish: React.PropTypes.bool.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired
}

export default TodoItem