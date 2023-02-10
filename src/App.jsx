import { 
  Header,
  Shortener, 
  Hero, 
  FullPageContainer,
  TimeLine
} from './components'
import TimeLine from './components/timeLine/TimeLine'

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
