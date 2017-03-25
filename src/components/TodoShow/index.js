import React from 'react'
import './style.css'

const TodoShow = ({ handleShowAll, handleShowFinish, handleShowUnfinish }) => {
  const showAll = () => handleShowAll()
  const showFinish = () => handleShowFinish()
  const showUnfinish = () => handleShowUnfinish()

  return (
    <div className="div-button">
      <div className="div-right">
        <button className="show-button" onClick={showAll}>Show All</button>
        <button className="show-button" onClick={showFinish}>Show Finish</button>
        <button className="show-button" onClick={showUnfinish}>Show UnFinish</button>
      </div>
    </div>
  )
}
TodoShow.propTypes = {
  handleShowAll: React.PropTypes.objectOf(React.PropTypes.bool.isRequired).isRequired,
  handleShowFinish: React.PropTypes.objectOf(React.PropTypes.bool.isRequired).isRequired,
  handleShowUnfinish: React.PropTypes.objectOf(React.PropTypes.bool.isRequired).isRequired
}

export default TodoShow