import React from 'react'
import "./fadeIn.css"

function FadeIn({ children }) {
  return (
    <div className='fade-in'>
      {children}
    </div>
  )
}

export default FadeIn