import React from 'react'
import './style.css'

const TodoShow = ({ handleshowFilter }) => (
  <div className="div-button">
    <div className="div-right">
      <button className="show-button" onClick={() => handleshowFilter(true, true)}>Show All</button>
      <button className="show-button" onClick={() => handleshowFilter(false, true)}>Show Finish</button>
      <button className="show-button" onClick={() => handleshowFilter(true, false)}>Show UnFinish</button>
    </div>
  </div>
  )
TodoShow.propTypes = {
  handleshowFilter: React.PropTypes.func.isRequired
}

export default TodoShow