import React from 'react'
import FeaturesLineHeading from './FeaturesLineHeading'
import HorizontalFeaturesLine from './HorizontalFeaturesLine'

import { useMedia } from '../../hooks/useMedia'
import VerticalFeaturesLine from './VerticalFeaturesLine'

import "./featuresLine.css"


function FeaturesLine() {
  const size = useMedia()

  return (
    <div className='features-line'>
      <FeaturesLineHeading />
      {
        size === "lg" 
        ? <HorizontalFeaturesLine />
        : <VerticalFeaturesLine />
      }
    </div>
  )
}

export default FeaturesLine