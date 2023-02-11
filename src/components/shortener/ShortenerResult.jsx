import React from 'react'
import "./shortenerResult.css"
import "./shortener.css"
import Button from '../button/Button'
import { useState } from 'react'

function ShortenerResult({ longUrl, shortUrl }) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClick(){
    setIsClicked(true)
    console.log(shortUrl)
    navigator.clipboard.writeText(shortUrl)
  }

  return (
    <div className='result'>
      <p>{longUrl}</p>
      <div className="result--wrapper">
        <a href={shortUrl}>{shortUrl}</a>
        <div className="result--button">
          {
            <Button 
              fullWidth 
              variant="primary" 
              clickHandler={handleClick} 
              classes={isClicked ? "button--copied" : ""}
            >
              {isClicked ? "Copied" : "Copy"}
            </Button>
          }
        </div>
      </div>
    </div>
  )
}

export default ShortenerResult