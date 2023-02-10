import React from 'react'
import "./links.css"

function Links() {
  return (
    <div className='links'>
      <div className="links--row">
        <h4>Features</h4>
        <ul>
          <li><a href="#">Link Shortening</a></li>
          <li><a href="#">Branded Links</a></li>
          <li><a href="#">Analytics</a></li>
        </ul>
      </div>

      <div className="links--row">
      <h4>Resources</h4>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Developers</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>

      <div className="links--row">
      <h4>Company</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Links