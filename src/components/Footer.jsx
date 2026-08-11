import logo from '../assets/images/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="iWebs Technology" />
          <p>Your complete digital and business technology partner for websites, software, apps and automation.</p>
          <a className="footer-website" href="https://www.iwebstechnology.com/" target="_blank" rel="noreferrer">Visit our website <span className="footer-link-arrow" aria-hidden="true"></span></a>
        </div>
        <div className="footer-col"><h4>Company</h4><a href="/">Home</a><a href="/services">Services</a><a href="/portfolio">Portfolio</a><a href="/why-us">Why us</a><a href="/pricing">Pricing</a><a href="/contact">Contact</a></div>
        <div className="footer-col"><h4>Services</h4><a href="/services">Web development</a><a href="/services">Ecommerce</a><a href="/services">Mobile apps</a><a href="/solutions">CRM & ERP</a><a href="/solutions">Custom software</a></div>
        <div className="footer-col"><h4>Contact</h4><span>New Delhi, India</span><a href="tel:+919999107112">9999107112</a><a href="mailto:info@iwebstechnology.com">info@iwebstechnology.com</a><a href="https://www.iwebstechnology.com/" target="_blank" rel="noreferrer">www.iwebstechnology.com</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} iWebs Technology. All rights reserved.</span><span>Privacy Policy · Terms of Service</span></div>
    </footer>
  )
}
