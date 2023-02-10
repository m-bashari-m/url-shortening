import React from 'react'
import "../../index.css"
import "./button.css"

function Button({ fullRound, fullWidth, variant, type, children }) {
  return (
    <button 
      className={
        `button 
        ${fullRound ? "button--round" : ""} 
        ${variant === "primary" ? "button--primary" : "button--secondary"}
        ${fullWidth ? "button--stretch" : ""}
        `
      }
      type={type ? type : "button"}
    >
      {children}
    </button>
  )
}

export default Button