import { useEffect } from 'react'
import { routePath } from '../routePaths'

const seoByRoute = {
  '/': {
    title: 'iWebs Technology | Websites, Software & Business Automation',
    description: 'iWebs Technology builds professional websites, ecommerce platforms, mobile apps, CRM, ERP and custom business software.',
    type: 'WebPage',
  },
  '/services': {
    title: 'Web, App & Software Development Services | iWebs Technology',
    description: 'Explore website development, ecommerce, mobile apps, custom software, CRM, ERP, digital marketing, hosting and support services.',
    type: 'CollectionPage',
  },
  '/solutions': {
    title: 'CRM, ERP & Business Automation Solutions | iWebs Technology',
    description: 'Connected CRM, ERP, ecommerce, dealer portal, booking and workflow automation solutions designed around your business.',
    type: 'CollectionPage',
  },
  '/portfolio': {
    title: 'Website & Software Portfolio | iWebs Technology',
    description: 'Explore live website projects delivered by iWebs Technology across ecommerce, healthcare, logistics, travel and social impact.',
    type: 'CollectionPage',
  },
  '/why-us': {
    title: 'Why Choose iWebs Technology | Your Digital Technology Partner',
    description: 'Discover our business-first approach, transparent delivery, custom development standards and long-term technology support.',
    type: 'AboutPage',
  },
  '/pricing': {
    title: 'Website & Custom Software Pricing | iWebs Technology',
    description: 'Review transparent starting prices for business websites, growth websites, ecommerce and custom software development.',
    type: 'WebPage',
  },
  '/contact': {
    title: 'Contact iWebs Technology | Discuss Your Digital Project',
    description: 'Contact iWebs Technology for website, ecommerce, mobile app, CRM, ERP and custom software development requirements.',
    type: 'ContactPage',
  },
}

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    const [name, key] = attribute
    element.setAttribute(name, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

export default function Seo({ route }) {
  useEffect(() => {
    const seo = seoByRoute[route] || seoByRoute['/']
    const siteRoot = `${window.location.origin}${routePath('/')}`
    const canonicalUrl = `${window.location.origin}${routePath(route)}`
    const imageUrl = `${siteRoot}og-iwebs.jpg`

    document.title = seo.title
    setMeta('meta[name="description"]', ['name', 'description'], seo.description)
    setMeta('meta[name="robots"]', ['name', 'robots'], 'index, follow, max-image-preview:large')
    setMeta('meta[property="og:title"]', ['property', 'og:title'], seo.title)
    setMeta('meta[property="og:description"]', ['property', 'og:description'], seo.description)
    setMeta('meta[property="og:url"]', ['property', 'og:url'], canonicalUrl)
    setMeta('meta[property="og:image"]', ['property', 'og:image'], imageUrl)
    setMeta('meta[name="twitter:title"]', ['name', 'twitter:title'], seo.title)
    setMeta('meta[name="twitter:description"]', ['name', 'twitter:description'], seo.description)
    setMeta('meta[name="twitter:image"]', ['name', 'twitter:image'], imageUrl)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    const graph = [
      {
        '@type': 'Organization',
        '@id': `${siteRoot}#organization`,
        name: 'iWebs Technology',
        url: siteRoot,
        logo: `${siteRoot}logo.png`,
        image: imageUrl,
        email: 'info@iwebstechnology.com',
        telephone: '+91-9999107112',
        areaServed: 'India',
        sameAs: ['https://www.iwebstechnology.com/'],
      },
      {
        '@type': seo.type,
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: seo.title,
        description: seo.description,
        isPartOf: { '@id': `${siteRoot}#website` },
        about: { '@id': `${siteRoot}#organization` },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteRoot}#website`,
        url: siteRoot,
        name: 'iWebs Technology',
        publisher: { '@id': `${siteRoot}#organization` },
        inLanguage: 'en-IN',
      },
    ]

    if (route !== '/') {
      graph.push({
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteRoot },
          { '@type': 'ListItem', position: 2, name: seo.title.split('|')[0].trim(), item: canonicalUrl },
        ],
      })
    }

    const structuredData = document.getElementById('seo-structured-data')
    if (structuredData) {
      structuredData.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
    }
  }, [route])

  return null
}
