import {Button} from "../"
import React, { useState } from 'react'
import "./shortener.css"

function Shortener() {
  const [link, setLink] = useState("")

  function handleSubmit(e){
    e.preventDefault()
  }

  return (
    <div className='shortener'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Shorten a link here..." 
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button variant="primary" type="submit">Shorten It!</Button>
      </form>
    </div>
  )
}

export default Shortener