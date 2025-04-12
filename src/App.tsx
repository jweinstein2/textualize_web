import './App.css'
import Hero from "./components/Hero"
import Privacy from './components/Privacy'
import Footer from './components/Footer'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

posthog.init('phc_R24eFyS4g39gx6F3GrmxNb6HqeGX0dTWx7gfmWUNx2Q', {
  api_host: 'https://us.i.posthog.com',
})

function App() {
  return (
    <PostHogProvider client={posthog}>
    <div className="container">
      <Hero />
      <Privacy />
      <Footer />
    </div>
    </PostHogProvider>
  )
}

export default App
