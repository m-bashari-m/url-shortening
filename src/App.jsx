import { 
  Header,
  Shortener, 
  Hero, 
  FullPageContainer
} from './components'

function App() {

  return (
    <div className="app">
      <FullPageContainer>
        <Header />
        <Hero />
      </FullPageContainer>
      <Shortener />
      <FullPageContainer bg="dark">

      </FullPageContainer>
    </div>
  )
}

export default App
