import React from 'react'
import "./message.css"

function Message({ heading, message, type, onEnd }) {
  return (
    <div 
      className={`message message-${type}`}
      onAnimationEnd={onEnd}
    >
      <h2>{heading}</h2>
      <p>{message}</p>
    </div>
  )
}

export default Message