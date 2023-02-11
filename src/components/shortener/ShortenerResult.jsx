import React, { useEffect } from 'react'
import "./shortenerResult.css"
import "./shortener.css"
import Button from '../button/Button'
import { useState } from 'react'

function ShortenerResult({ longUrl, shortUrl }) {
  const [isClicked, setIsClicked] = useState(false)
  const [canBeCopied, setCanBeCopied] = useState(false)

  useEffect(() => {
    if (window.isSecureContext && navigator.clipboard){
      setCanBeCopied(true)
    }
  }, [])

  function handleClick(){
    setIsClicked(true)
    window.navigator.clipboard.writeText(shortUrl)
  }


  return (
    <div className='result'>
      <p>{longUrl}</p>
      <div className="result--wrapper">
        <a 
          href={`https://${shortUrl}`}
          target="_blank"
        >{shortUrl}</a>
        <div className="result--button">
          {
            canBeCopied && 
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