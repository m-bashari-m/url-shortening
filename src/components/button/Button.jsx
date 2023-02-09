import React from 'react'
import "../../index.css"
import "./button.css"

function Button({ fullRound, variant, children }) {
  return (
    <button 
      className={
        `button 
        ${fullRound ? "button--round" : ""} 
        ${variant === "primary"
          ? "button--primary" 
          : "button--secondary"}`
      }
    >
      {children}
    </button>
  )
}

export default Button