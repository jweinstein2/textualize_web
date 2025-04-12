import './App.css'
import Hero from "./components/Hero"
import Privacy from './components/Privacy'
import Footer from './components/Footer'
import DownloadButton from './components/DownloadButton'

function App() {
  return (
    <div className="container">
      <Hero />
      <Privacy />
      <Footer />
    </div>
  )
}

export default App
