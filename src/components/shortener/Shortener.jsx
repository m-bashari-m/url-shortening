import "axios"
import {Button} from "../"
import React, { useEffect, useState } from 'react'
import ShortenerResult from "./ShortenerResult"
import "./shortener.css"
import FadeIn from "../fadeIn/FadeIn"

function Shortener() {
  const [link, setLink] = useState("")
  const [links, setLinks]  = useState([])

  const headers = {
    "Content-Type": "application/json",
    "apikey": "5ea5168dab01412585fcd8464f475da1",
  }

  function handleSubmit(e){
    e.preventDefault()

    const data = {
      destination: link,
      domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
          method: 'POST', // or 'PUT'
          headers: headers,
          body: JSON.stringify(data),
        })
      .then((response) => response.json())
      .then((data) => {
        setLinks(prevLinks => [...prevLinks, {longUrl: link, shortUrl: data.shortUrl}])
      })
      .catch((error) => {console.error('Error');})
  }

  return (
    <React.Fragment>
    <div className='shortener'>
      <div className="shortener--top"></div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Shorten a link here..." 
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button variant="primary" type="submit">Shorten It!</Button>
      </form>
      <div className="shortener--bottom"></div>
    </div>

    <div className="result-container">
      {
        links && 
        links.map((link, index) => {
          return (
            <FadeIn>
              <ShortenerResult key={index} longUrl={link.longUrl} shortUrl={link.shortUrl} />
            </FadeIn>
          )
        })
      }
    </div>
    </React.Fragment>
  )
}

export default Shortener