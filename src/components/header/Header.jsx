import React, { useState } from 'react'
import { Button } from "../"

import "./header.css"
import "../../index.css"
import logo from "../../images/logo.svg"
import toggleButton from "../../images/iconmonstr-menu-lined.svg"
import FadeIn from '../fadeIn/FadeIn'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleClick(){
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <React.Fragment>
    <nav className='header'>
      <img src={logo} alt="shortly logo" className="header--logo" />
      <div className="header--menu">
        <div className="wrapper">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        
        <div className="wrapper">
          <Button fullRound variant="secondary">Login</Button>
          <Button fullRound variant="primary">Sign Up</Button>
        </div>
      </div>

      <img 
          src={toggleButton} 
          alt="menu toggler" 
          className='header--menu-toggle'
          onClick={handleClick}
      />
    </nav>

    {
      isMenuOpen && 
      <FadeIn>
        <div className="container">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>

          <hr />

          <Button fullRound={true} variant="secondary" fullWidth>Login</Button>
          <Button fullRound={true} variant="primary" fullWidth>Sign Up</Button>
        </div>
      </FadeIn>
    }

  </React.Fragment>

  )
}

export default Header