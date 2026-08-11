import { useState } from 'react'
import logo from '../assets/images/logo.png'
import './Header.css'
import { routePath } from '../routePaths'

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Solutions', '/solutions'],
  ['Portfolio', '/portfolio'],
  ['Why us', '/why-us'],
  ['Pricing', '/pricing'],
  ['Contact', '/contact'],
]

export default function Header({ currentRoute = '/' }) {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href={routePath('/')} aria-label="iWebs Technology home">
          <img className="brand-logo" src={logo} alt="iWebs Technology" />
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a className={currentRoute === href ? 'active' : ''} key={href} href={routePath(href)} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="call-link" href="tel:+919999107112">9999107112</a>
          <a className="button button-primary" href={routePath('/contact')}>Get free quote <span>↗</span></a>
          <button className="menu-btn" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
