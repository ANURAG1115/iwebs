import { useEffect, useState } from 'react'
import { PageHero, PageCta } from './PageParts'
import portfolioImage from '../assets/images/portfolio-design.jpg'
import './Pages.css'

const projects = [
  ['One9 Wellness Studio','https://myone9.com/'],['Nexteonix','https://nexteonix.com/'],['Bollywood Product','https://www.bollywoodproduct.com/'],['Voyogen Logistics','https://www.voyogen.com/'],['The Textos','https://thetextos.com/'],['Abhinav Samaj New Delhi','https://abhinavsamaj.org/'],['RV Care Foundation','https://www.rvcarengo.org/'],['MEDYSYSTEM','https://medysystems.com/'],['Red Planet Travels & Sports','https://www.redplanet.co.in/'],['Youth The Power Foundation','https://www.ytpf.org/'],['AS Group India','https://indiaajs.com/'],['Hirenzaa','https://www.hirenzaa.com/'],['HCTM','https://hctm.in/'],['Shri Rajnish Air Ambulance','https://www.shrirajnishairambulance.in/'],
]

export default function Portfolio() {
  const [active, setActive] = useState(null)
  useEffect(() => {
    if (!active) return undefined
    const close = (event) => event.key === 'Escape' && setActive(null)
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', close)
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener('keydown', close) }
  }, [active])
  return <main className="inner-page">
    <PageHero kicker="Selected work" title="Real websites for organisations with real goals." description="Explore websites delivered across wellness, ecommerce, logistics, healthcare, travel, education and social impact." points={['Live previews instead of static mockups','Responsive business websites','Different industries and user groups','Open any project in a larger viewer']} image={portfolioImage} imageAlt="B2B website project interface" imageLabel="Selected digital experiences" />
    <section className="page-section"><div className="page-container"><div className="page-title"><div className="page-kicker">Our portfolio</div><h2>Browse our work without leaving this website.</h2><p>Select “Large preview” to interact with a project in an expanded viewer, or open it directly in a new tab.</p></div><div className="portfolio-page-grid">{projects.map(([name,url],index) => <article className="portfolio-browser" key={url}><div className="portfolio-browser-head"><strong>{name}</strong><a href={url} target="_blank" rel="noreferrer">Visit ↗</a></div><div className="portfolio-frame-wrap"><iframe src={url} title={`${name} website preview`} loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" referrerPolicy="strict-origin-when-cross-origin" /></div><div className="portfolio-meta"><span>{String(index+1).padStart(2,'0')} · {new URL(url).hostname.replace('www.','')}</span><button type="button" className="preview-large-button" onClick={() => setActive({name,url})}>Large preview</button></div></article>)}</div></div></section>
    <PageCta title="Want your project to be next?" text="Tell us what you are building and we will help turn it into a clear, dependable digital experience."/>
    {active && <div className="website-modal" role="dialog" aria-modal="true" aria-label={`${active.name} website preview`} onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}><div className="website-modal-window"><div className="website-modal-bar"><div><strong>{active.name}</strong><span>{active.url}</span></div><div className="website-modal-actions"><a href={active.url} target="_blank" rel="noreferrer">Open in new tab ↗</a><button type="button" onClick={() => setActive(null)} aria-label="Close preview">×</button></div></div><iframe src={active.url} title={`${active.name} large website preview`} sandbox="allow-scripts allow-same-origin allow-forms allow-popups" referrerPolicy="strict-origin-when-cross-origin" /></div></div>}
  </main>
}
