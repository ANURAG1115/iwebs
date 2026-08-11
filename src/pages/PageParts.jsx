import './Pages.css'

export function PageHero({ kicker, title, description, points, image, imageAlt = '', imageLabel }) {
  return (
    <section className="page-hero">
      <div className="page-container page-hero-grid">
        <div>
          <div className="page-kicker">{kicker}</div>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="page-actions">
            <a className="button button-primary" href="/contact">Discuss your project ↗</a>
            <a className="button button-light" href="tel:+919999107112">Call 9999107112</a>
          </div>
        </div>
        <div className="page-hero-visual">
          {image && <figure className="page-hero-image"><img src={image} alt={imageAlt} />{imageLabel && <figcaption>{imageLabel}</figcaption>}</figure>}
          <aside className="page-hero-panel">
            <small>What you can expect</small>
            <h2>A clear, business-first approach from idea to launch.</h2>
            <div className="hero-points">
              {points.map((point) => <div className="hero-point" key={point}>{point}</div>)}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  const steps = [
    ['01', 'Discovery', 'We understand your goals, users, workflow and current challenges.'],
    ['02', 'Planning', 'We define scope, architecture, milestones and a realistic delivery plan.'],
    ['03', 'Build & test', 'Design and development progress in reviewable stages with quality checks.'],
    ['04', 'Launch & support', 'We deploy, train your team and continue improving the product.'],
  ]
  return (
    <section className="page-section dark">
      <div className="page-container">
        <div className="page-title"><div className="page-kicker">Our process</div><h2>Predictable steps. No hidden surprises.</h2><p>You stay informed throughout the project and approve important decisions before development moves ahead.</p></div>
        <div className="steps-row">{steps.map(([number,title,text]) => <article className="page-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
  )
}

export function PageCta({ title = 'Have a project in mind?', text = 'Tell us what you want to improve. We will suggest a practical way forward.' }) {
  return <section className="page-cta"><div className="page-container"><div className="page-cta-box"><div><h2>{title}</h2><p>{text}</p></div><a className="button button-white" href="/contact">Get a free consultation ↗</a></div></div></section>
}
