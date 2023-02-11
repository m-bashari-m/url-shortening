import React from 'react'
import "../../index.css"
import "./button.css"

function Button(props) {
  return (
    <button 
      className={
        `button 
        ${props.fullRound ? "button--round" : ""} 
        ${
          props.variant === "primary" 
          ? "button--primary" 
          : "button--secondary"
        }
        ${props.fullWidth ? "button--stretch" : ""}
        ${props.classes}
        `
      }
      onClick={props.clickHandler}
    >
      {props.children}
    </button>
  )
}

export default Button