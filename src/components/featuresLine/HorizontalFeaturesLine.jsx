import React from 'react'
import "./horizontalFeaturesLine.css"
import Card from './Card'

import brandRecognition from "../../images/icon-brand-recognition.svg"
import detailedRecords from "../../images/icon-detailed-records.svg"
import fullyCustomizable from "../../images/icon-fully-customizable.svg"


function HorizontalFeaturesLine() {
  return (
    <div className='horizontal'>
      <div className="horizontal--line"></div>
      <Card image={brandRecognition}>
        <h2>Brand Recognition</h2>
        <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</p>
      </Card>

      <Card image={detailedRecords}>
        <h2>Detailed dRecords</h2>
        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
      </Card>

      <Card image={fullyCustomizable}>
        <h2>Fully Customizable</h2>
        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
      </Card>
    </div>
  )
}

export default HorizontalFeaturesLine