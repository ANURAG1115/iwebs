import Icon from '../components/Icon'
import { PageHero, ProcessSection, PageCta } from './PageParts'
import serviceImage from '../assets/images/services-team.jpg'
import webImage from '../assets/images/solution-b2b.jpg'
import storeImage from '../assets/images/solution-ecommerce.jpg'
import crmImage from '../assets/images/solution-crm.jpg'
import './Pages.css'

const services = [
  ['web','Website design & development','Professional websites built to explain your value clearly, load quickly and convert visitors into enquiries.',['Corporate websites','Landing pages','Responsive UI','CMS integration']],
  ['cart','Ecommerce development','Complete online stores designed around products, payments, inventory, fulfilment and repeat customers.',['Product catalogue','Payment gateway','Order management','WooCommerce solutions']],
  ['mobile','Mobile app development','Reliable Android, iOS and cross-platform applications with simple user journeys and secure APIs.',['Flutter applications','Customer apps','Team applications','App maintenance']],
  ['code','Custom software','Purpose-built web applications that replace spreadsheets, repeated manual work and disconnected tools.',['Admin panels','Workflow automation','Custom dashboards','API integrations']],
  ['users','CRM & ERP systems','Connected systems for leads, sales, billing, inventory, employees and management reporting.',['Lead management','Sales pipeline','Inventory & billing','Role-based access']],
  ['network','B2B & B2C portals','Secure portals that connect dealers, vendors, customers, teams and operational information.',['Dealer portals','Customer dashboards','Marketplaces','Partner management']],
  ['megaphone','Digital marketing','Practical campaigns focused on visibility, quality leads and measurable business outcomes.',['Search optimisation','Social campaigns','Content support','Performance reporting']],
  ['shield','Hosting & support','Ongoing technical care that keeps your website or application secure, available and up to date.',['Cloud deployment','Backups','Security updates','Priority support']],
]

export default function Services() {
  return <main className="inner-page">
    <PageHero kicker="Our services" title="Digital services built around real business goals." description="From your first website to a connected business platform, iWebs Technology provides strategy, design, development and ongoing support under one roof." points={['One accountable technology partner','Solutions matched to your budget and stage','Clear communication and documented delivery','Support after the product goes live']} image={serviceImage} imageAlt="Responsive mobile application interface" imageLabel="Web, mobile and business platforms" />
    <section className="page-section"><div className="page-container"><div className="page-title center"><div className="page-kicker">Complete capabilities</div><h2>Everything needed to build and grow online.</h2><p>Choose one focused service or combine capabilities into a complete digital solution.</p></div><div className="detail-grid">{services.map(([icon,title,text,items]) => <article className="detail-card" key={title}><div className="icon-box"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
    <section className="page-section soft"><div className="page-container split-section"><div className="split-copy"><div className="page-kicker">Flexible engagement</div><h2>Start with what you need today.</h2><p>We can deliver a complete new product, improve an existing system or work as your long-term technology team. Every engagement begins with understanding the business problem—not pushing unnecessary features.</p></div><div className="feature-panel"><h3>Ways we can work together</h3><ul><li>Fixed-scope website or application projects</li><li>Phased MVP and product development</li><li>Dedicated monthly development support</li><li>Maintenance and performance improvement</li><li>Technology consultation and system planning</li></ul></div></div></section>
    <section className="page-section"><div className="page-container"><div className="page-title"><div className="page-kicker">What we create</div><h2>Designed for the screen your customers use.</h2><p>Every interface is planned for clarity, consistency and responsive use across devices.</p></div><div className="image-showcase"><figure><img src={webImage} alt="Business portal interface"/><figcaption>Business websites & portals</figcaption></figure><figure><img src={storeImage} alt="Ecommerce store interface"/><figcaption>Ecommerce experiences</figcaption></figure><figure><img src={crmImage} alt="CRM dashboard interface"/><figcaption>CRM & operations</figcaption></figure></div></div></section>
    <ProcessSection/><PageCta title="Which service fits your requirement?" text="Share your current challenge and we will help you choose the right scope, technology and starting point."/>
  </main>
}
