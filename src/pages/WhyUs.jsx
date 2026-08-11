import { PageHero, PageCta } from './PageParts'
import teamImage from '../assets/images/why-us-team.jpg'
import './Pages.css'

const values = [
  ['Business before technology','We first understand what must improve for your customers, team or operations. Technology is selected only after the goal is clear.'],
  ['Clarity throughout delivery','Scope, milestones and decisions are communicated in plain language, so you always know what is being built and why.'],
  ['Partnership after launch','A launch is the beginning of real usage. We stay available for support, improvement and the next stage of growth.'],
]

export default function WhyUs() {
  return <main className="inner-page">
    <PageHero kicker="Why iWebs Technology" title="A technology partner that understands the work behind the screen." description="Good software is not only about attractive interfaces or modern code. It must be practical for your team, reliable for your customers and valuable for your business." points={['Direct access to the technical team','Recommendations without unnecessary complexity','Quality checks across devices and workflows','Long-term support and transparent communication']} image={teamImage} imageAlt="iWebs technology team collaborating in a workspace" imageLabel="Strategy, design and development together" />
    <section className="page-section"><div className="page-container"><div className="stats-grid"><div className="stat"><strong>360°</strong><span>Digital capability</span></div><div className="stat"><strong>1 team</strong><span>Strategy to support</span></div><div className="stat"><strong>100%</strong><span>Responsive delivery</span></div><div className="stat"><strong>Long-term</strong><span>Technology partnership</span></div></div></div></section>
    <section className="page-section soft"><div className="page-container"><div className="page-title center"><div className="page-kicker">How we think</div><h2>Professional work built on practical values.</h2><p>These principles shape our recommendations, our development process and the way we communicate.</p></div><div className="values-grid">{values.map(([title,text]) => <article className="value-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="page-section"><div className="page-container split-section"><div className="split-copy"><div className="page-kicker">The difference</div><h2>We build for everyday use—not just launch day.</h2><p>We consider the people who will manage content, follow leads, approve orders, create reports and support customers after the system goes live. That operational understanding produces simpler interfaces and more useful software.</p></div><div className="feature-panel"><h3>Our working standards</h3><ul><li>Responsive design and accessible interactions</li><li>Secure, maintainable development practices</li><li>Testing before every important release</li><li>Clear ownership of accounts and project assets</li><li>Training and documentation where required</li><li>Honest advice about cost and complexity</li></ul></div></div></section>
    <PageCta title="Looking for a dependable technology team?" text="Let us understand your priorities and show you how we would approach the project."/>
  </main>
}
