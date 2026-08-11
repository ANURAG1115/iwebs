import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Portfolio from './pages/Portfolio'
import WhyUs from './pages/WhyUs'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

const routes = {
  '/': Home,
  '/services': Services,
  '/solutions': Solutions,
  '/portfolio': Portfolio,
  '/why-us': WhyUs,
  '/pricing': Pricing,
  '/contact': Contact,
}

const getRoute = () => {
  const hash = window.location.hash
  return hash.startsWith('#/') ? hash.slice(1).split('?')[0] : '/'
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const handleRoute = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', handleRoute)
    return () => window.removeEventListener('hashchange', handleRoute)
  }, [])

  const Page = routes[route] || Home

  return (
    <>
      <Header currentRoute={route} />
      <Page />
      <Footer />
    </>
  )
}

export default App
