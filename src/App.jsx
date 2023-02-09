import { useState } from 'react'

import { Header } from './components'
import Hero from './components/hero/Hero'
import FullPageContainer from './components/fullPageContainer/FullPageContainer'

function App() {

  return (
    <div className="app">
      <FullPageContainer>
        <Header />
        <Hero />
      </FullPageContainer>
      <FullPageContainer bg="dark">

      </FullPageContainer>
    </div>
  )
}

export default App
