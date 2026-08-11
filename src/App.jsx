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
import { getCurrentRoute } from './routePaths'
import Seo from './components/Seo'

const routes = {
  '/': Home,
  '/services': Services,
  '/solutions': Solutions,
  '/portfolio': Portfolio,
  '/why-us': WhyUs,
  '/pricing': Pricing,
  '/contact': Contact,
}

function App() {
  const [route, setRoute] = useState(getCurrentRoute)

  useEffect(() => {
    const handleRoute = () => {
      setRoute(getCurrentRoute())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('popstate', handleRoute)
    return () => window.removeEventListener('popstate', handleRoute)
  }, [])

  const Page = routes[route] || Home

  return (
    <>
      <Seo route={route} />
      <Header currentRoute={route} />
      <Page />
      <Footer />
    </>
  )
}

export default App
