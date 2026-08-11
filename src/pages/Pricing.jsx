import { PageHero, PageCta } from './PageParts'
import pricingImage from '../assets/images/pricing-consultation.jpg'
import './Pages.css'

const plans = [
  ['Business website','₹25,000+','For businesses that need a credible, responsive online presence.',['Custom page design','Mobile responsive layout','Contact and enquiry forms','Basic SEO setup','Launch assistance']],
  ['Growth website','₹55,000+','For businesses needing stronger content, conversions and integrations.',['Everything in Business','Advanced sections and pages','CMS or catalogue','Analytics integration','Performance optimisation']],
  ['Custom platform','Custom quote','For ecommerce, CRM, ERP, portals, apps and workflow automation.',['Requirement discovery','UX and system planning','Role-based dashboards','API and payment integrations','Testing, deployment and training']],
]

export default function Pricing() {
  return <main className="inner-page">
    <PageHero kicker="Pricing approach" title="Clear starting points, scoped around your requirement." description="Every project is different, but pricing should still be understandable. These starting ranges help you plan; the final proposal is based on pages, features, integrations and delivery needs." points={['Written scope and cost breakdown','Milestone-based payment options','No unnecessary feature bundling','Third-party charges identified separately']} image={pricingImage} imageAlt="Ecommerce website interface" imageLabel="Scope matched to business needs" />
    <section className="page-section"><div className="page-container"><div className="page-title center"><div className="page-kicker">Project plans</div><h2>Choose the right starting level.</h2><p>We confirm an exact quote after a short requirement discussion.</p></div><div className="price-page-grid">{plans.map(([name,price,text,features],index) => <article className={`price-page-card ${index===1?'featured':''}`} key={name}><small>{name}</small><h2>{price}</h2><p>{text}</p><ul>{features.map(feature => <li key={feature}>{feature}</li>)}</ul><a className={`button ${index===1?'button-primary':'button-light'}`} href="/contact">Request exact quote</a></article>)}</div></div></section>
    <section className="page-section soft"><div className="page-container split-section"><div className="split-copy"><div className="page-kicker">What affects cost</div><h2>A quote should reflect the work—not guesswork.</h2><p>Design depth, number of user roles, business rules, data migration, integrations, reporting and testing all influence effort. We identify these factors before committing to delivery.</p></div><div className="feature-panel"><h3>Usually priced separately</h3><ul><li>Domain, hosting and business email</li><li>Paid themes, plugins or licensed assets</li><li>Payment gateway and messaging charges</li><li>Large-scale content entry or data migration</li><li>Ongoing marketing and maintenance plans</li></ul></div></div></section>
    <PageCta title="Need a precise estimate?" text="Send your requirements or existing website link. We will review the scope and recommend a suitable plan."/>
  </main>
}
