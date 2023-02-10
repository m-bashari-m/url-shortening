import React from 'react'
import "./card.css"

function Card({ image, children}) {
  return (
    <div className='card'>
      <div className="card--image-container">
        <img src={image} alt="feature line card image" />
      </div>
      {children}
    </div>
  )
}

export default Card