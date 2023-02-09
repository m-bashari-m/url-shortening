import React from 'react'
import { Button } from "../"
import "./hero.css"
import heroImage from "../../images/illustration-working.svg"

function Hero() {
  return (
    <section className="hero">
      <div className="hero--content">
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition adn get detailed insights on how your links are performing.</p>
        <Button variant="primary" fullRound fullWidth={false}>Get Started</Button>
      </div>

      <img src={heroImage} alt="an image of a person working with computer" />
    </section>
  )
}

export default Hero