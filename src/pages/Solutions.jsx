import { PageHero, ProcessSection, PageCta } from './PageParts'
import solutionImage from '../assets/images/solutions-workflow.jpg'
import './Pages.css'

const solutions = [
  ['01','CRM & sales automation','Capture leads from your website and campaigns, assign follow-ups, track opportunities and understand your complete sales pipeline.'],
  ['02','ERP & operations','Bring inventory, purchases, billing, employees, production and reporting into one controlled business system.'],
  ['03','Ecommerce ecosystems','Connect storefronts with payments, stock, shipping, customer communication and management dashboards.'],
  ['04','Dealer and distributor portals','Give partners secure access to products, pricing, orders, documents, payments and performance information.'],
  ['05','Booking and service platforms','Manage availability, appointments, service requests, payments, reminders and customer histories.'],
  ['06','Reporting and automation','Turn scattered data into useful dashboards and automate repetitive notifications, approvals and data movement.'],
]

export default function Solutions() {
  return <main className="inner-page">
    <PageHero kicker="Business solutions" title="Systems that simplify work and support growth." description="We design connected software around the way your business actually operates—helping teams work faster, serve customers better and make decisions with reliable data." points={['Workflow mapped before development','Secure roles and permissions','Integrations with your existing tools','Architecture designed to scale']} image={solutionImage} imageAlt="Connected CRM dashboard" imageLabel="Connected data. Clear decisions." />
    <section className="page-section"><div className="page-container"><div className="page-title"><div className="page-kicker">What we solve</div><h2>One connected view of your business.</h2><p>Our solutions remove data gaps between websites, sales teams, operations and management.</p></div><div className="solution-list">{solutions.map(([num,title,text]) => <article className="solution-row" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="page-section soft"><div className="page-container split-section"><div className="split-copy"><div className="page-kicker">Built for your workflow</div><h2>Custom where it matters. Familiar where it helps.</h2><p>Your team should not have to redesign its entire operation around rigid software. We retain the processes that create value, simplify the ones that slow people down and introduce automation carefully.</p></div><div className="feature-panel"><h3>A typical connected system</h3><ul><li>Website and campaign lead capture</li><li>Central customer and vendor records</li><li>Sales, quotation and approval workflow</li><li>Orders, invoices and payment status</li><li>Management dashboards and reports</li><li>Email, SMS and third-party API integration</li></ul></div></div></section>
    <ProcessSection/><PageCta title="Let us map your workflow." text="A short discovery conversation can identify the best opportunities for integration and automation."/>
  </main>
}
