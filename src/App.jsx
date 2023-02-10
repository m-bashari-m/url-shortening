import { 
  Header,
  Shortener, 
  Hero, 
  FullPageContainer,
  FeaturesLine,
  Boost,
  Footer,
} from './components'

function App() {

  return (
    <div className="app">
        <Header />
        <Hero />
        <Shortener />
        <FeaturesLine />
        <Boost />
        <Footer />
    </div>
  )
}

export default App
