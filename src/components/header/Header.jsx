import React from 'react'
import "./Header.css"
import logo from "../../images/logo.svg"
import {Button} from "../"

function Header() {
  return (
    <nav className='header'>
      <img src={logo} alt="shortly logo" className="header--logo" />
      <div className="header--menu">
        <Button fullRound={true} variant="primary">Login</Button>
        <Button fullRound={true} variant="secondary">Sign Up</Button>
      </div>
    </nav>
  )
}

export default Header