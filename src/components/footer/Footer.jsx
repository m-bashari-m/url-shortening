import React from 'react'
import "./footer.css"
import logo from "../../images/logo-white.svg"
import Icons from './Icons'
import Links from './Links'

function Footer() {
  return (
    <div className='footer'>
      <div className="wrapper">
        <img src={logo} alt="shortly logo for footer" />
      </div>

      <div className="wrapper">
        <Links />
      </div>

      <div className="wrapper">
        <Icons />
      </div>
    </div>
  )
}

export default Footer