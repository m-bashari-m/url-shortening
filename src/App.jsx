import { 
  Header,
  Shortener, 
  Hero, 
  FullPageContainer,
  TimeLine
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
        <TimeLine />
      </FullPageContainer>
    </div>
  )
}

export default App
