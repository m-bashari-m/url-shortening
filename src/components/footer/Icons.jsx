import React from 'react'

import facebook from "../../images/icon-facebook.svg"
import twitter from "../../images/icon-twitter.svg"
import pinterest from "../../images/icon-pinterest.svg"
import instagram from "../../images/icon-instagram.svg"

function Icons() {
  return (
    <div className='icons'>
      <a href="#">
        <img src={facebook} alt="facebook icon" />
      </a>
      <a href="#">
        <img src={twitter} alt="facebook icon" />
      </a>
      <a href="#">
        <img src={pinterest} alt="facebook icon" />
      </a>
      <a href="#">
        <img src={instagram} alt="facebook icon" />
      </a>
    </div>
  )
}

export default Icons