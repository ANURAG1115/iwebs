import { useEffect, useRef, useState } from "react";
import Icon from "../components/Icon";
import "./Home.css";
import heroWorkspace from "../assets/images/hero-team-workspace.jpg";
import phpLogo from "../assets/technologies/php.svg";
import laravelLogo from "../assets/technologies/laravel.svg";
import codeigniterLogo from "../assets/technologies/codeigniter.svg";
import mysqlLogo from "../assets/technologies/mysql.svg";
import javascriptLogo from "../assets/technologies/javascript.svg";
import typescriptLogo from "../assets/technologies/typescript.svg";
import reactLogo from "../assets/technologies/react.svg";
import nextjsLogo from "../assets/technologies/nextjs.svg";
import nodejsLogo from "../assets/technologies/nodejs.svg";
import flutterLogo from "../assets/technologies/flutter.svg";
import androidLogo from "../assets/technologies/android.svg";
import wordpressLogo from "../assets/technologies/wordpress.svg";
import woocommerceLogo from "../assets/technologies/woocommerce.svg";
import bootstrapLogo from "../assets/technologies/bootstrap.svg";
import jqueryLogo from "../assets/technologies/jquery.svg";
import firebaseLogo from "../assets/technologies/firebase.svg";
import awsLogo from "../assets/technologies/aws.svg";
import gitLogo from "../assets/technologies/git.svg";
import dockerLogo from "../assets/technologies/docker.svg";
import figmaLogo from "../assets/technologies/figma.svg";

const services = [
  [
    "web",
    "Website Design & Development",
    "Fast, responsive and conversion-focused websites built around your business.",
  ],
  [
    "cart",
    "Ecommerce Development",
    "Powerful online stores with payments, products, inventory and order management.",
  ],
  [
    "mobile",
    "Mobile App Development",
    "Reliable Android, iOS and cross-platform apps with seamless user journeys.",
  ],
  [
    "code",
    "Custom Software",
    "Workflow-specific software that removes bottlenecks and powers productivity.",
  ],
  [
    "users",
    "CRM & ERP Solutions",
    "Bring leads, sales, inventory, billing, teams and reporting into one system.",
  ],
  [
    "network",
    "B2B & B2C Portals",
    "Dealer portals, marketplaces and customer platforms designed to scale.",
  ],
  [
    "megaphone",
    "Digital Marketing",
    "SEO, social media and performance campaigns that drive qualified growth.",
  ],
  [
    "shield",
    "Hosting & Support",
    "Secure hosting, email, backups, maintenance and dependable technical support.",
  ],
];

const audiences = [
  [
    "Small Businesses",
    "Website · Google Business · WhatsApp",
    "Start your digital journey",
  ],
  [
    "Startups",
    "MVP · Mobile App · Admin Panel",
    "Turn your idea into a product",
  ],
  [
    "Growing Businesses",
    "CRM · ERP · Ecommerce · Automation",
    "Scale your operations",
  ],
  ["Enterprises", "Portals · APIs · Business Systems", "Build without limits"],
];

const projects = [
  ["One9 Wellness Studio", "https://myone9.com/"],
  ["Nexteonix", "https://nexteonix.com/"],
  ["Bollywood Product", "https://www.bollywoodproduct.com/"],
  ["Voyogen Logistics Private Limited", "https://www.voyogen.com/"],
  ["The Textos", "https://thetextos.com/"],
  ["Abhinav Samaj New Delhi", "https://abhinavsamaj.org/"],
  ["RV Care Foundation", "https://www.rvcarengo.org/"],
  ["MEDYSYSTEM", "https://medysystems.com/"],
  ["Red Planet Travels & Sports", "https://www.redplanet.co.in/"],
  ["Youth The Power Foundation", "https://www.ytpf.org/"],
  ["AS Group India", "https://indiaajs.com/"],
  ["Hirenzaa", "https://www.hirenzaa.com/"],
  ["HCTM", "https://hctm.in/"],
  ["Shri Rajnish Air Ambulance", "https://www.shrirajnishairambulance.in/"],
];

const reasons = [
  [
    "Custom development",
    "A solution shaped around your business—not a template forced onto it.",
  ],
  [
    "Mobile responsive",
    "Every experience is carefully tested across desktop, tablet and mobile.",
  ],
  [
    "Scalable architecture",
    "Your platform can evolve as your customers, team and operations grow.",
  ],
  [
    "Direct technical support",
    "Speak with the people who understand and build your system.",
  ],
  [
    "Practical investment",
    "Clear options for small businesses, growing teams and enterprises.",
  ],
  [
    "Long-term partnership",
    "Maintenance, improvements and technical guidance after launch.",
  ],
];

const technologies = [
  ["PHP", phpLogo],
  ["Laravel", laravelLogo],
  ["CodeIgniter", codeigniterLogo],
  ["MySQL", mysqlLogo],
  ["JavaScript", javascriptLogo],
  ["TypeScript", typescriptLogo],
  ["React", reactLogo],
  ["Next.js", nextjsLogo],
  ["Node.js", nodejsLogo],
  ["Flutter", flutterLogo],
  ["Android", androidLogo],
  ["WordPress", wordpressLogo],
  ["WooCommerce", woocommerceLogo],
  ["Bootstrap", bootstrapLogo],
  ["jQuery", jqueryLogo],
  ["Firebase", firebaseLogo],
  ["AWS", awsLogo],
  ["Git", gitLogo],
  ["Docker", dockerLogo],
  ["Figma", figmaLogo],
];

const pricing = [
  [
    "Business Website",
    "₹3,500",
    "A focused online presence for small businesses and professionals.",
  ],
  [
    "Dynamic Website",
    "₹6,000",
    "Easy-to-manage content with the functionality your business needs.",
  ],
  [
    "Ecommerce Store",
    "₹15,000",
    "Products, payments and order management in one complete store.",
  ],
  [
    "Digital Marketing",
    "₹3,000 / month",
    "A practical starting plan for visibility, content and lead generation.",
  ],
];

const faqs = [
  [
    "How much does a professional website cost?",
    "The cost depends on pages, features, integrations and the level of custom design. Share your requirements and we will provide a clear, itemised estimate.",
  ],
  [
    "How long does website development take?",
    "A focused business website can typically be delivered in a few weeks. Ecommerce and custom platforms require more time based on scope and integrations.",
  ],
  [
    "Can you build software around our existing workflow?",
    "Yes. We study how your team currently works, identify bottlenecks and build CRM, ERP, portals or automation around the process.",
  ],
  [
    "Do you provide support after launch?",
    "Yes. We provide deployment, training, maintenance, backups, security updates and ongoing technical support based on your needs.",
  ],
  [
    "Can you integrate payments and third-party APIs?",
    "Yes. We can integrate payment gateways, messaging, shipping, accounting, social platforms and other third-party services.",
  ],
  [
    "Do you develop ecommerce websites?",
    "Yes. We build ecommerce stores with product management, secure payments, order workflows, shipping and inventory integrations.",
  ],
  [
    "Can you build Android and iOS mobile apps?",
    "Yes. We develop mobile experiences for Android, iOS and cross-platform requirements, together with the required admin system and APIs.",
  ],
  [
    "Do you provide SEO and digital marketing?",
    "Yes. Our services can include technical SEO, local visibility, social media, content and lead-generation campaigns.",
  ],
  [
    "Can you maintain an existing website or application?",
    "Yes. We can review an existing system and provide maintenance, performance improvements, backups, security updates and feature development.",
  ],
  [
    "Can you develop a CRM or ERP for our workflow?",
    "Yes. We can build modular CRM and ERP systems for leads, sales, billing, inventory, employees, production and reporting.",
  ],
];

export default function Home() {
  const portfolioRef = useRef(null);
  const portfolioPausedRef = useRef(false);
  const [activeProject, setActiveProject] = useState(null);

  const movePortfolio = (direction) => {
    const slider = portfolioRef.current;
    if (!slider) return;
    const slide = slider.firstElementChild;
    const gap = Number.parseFloat(window.getComputedStyle(slider).columnGap) || 0;
    const step =
      (slide?.getBoundingClientRect().width || slider.clientWidth) + gap;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    let nextPosition = slider.scrollLeft + step * direction;
    if (direction > 0 && slider.scrollLeft >= maxScroll - 10) nextPosition = 0;
    if (direction < 0 && slider.scrollLeft <= 10) nextPosition = maxScroll;
    slider.scrollTo({ left: nextPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const autoSlide = window.setInterval(() => {
      if (!portfolioPausedRef.current) movePortfolio(1);
    }, 6500);
    return () => window.clearInterval(autoSlide);
  }, []);

  useEffect(() => {
    if (!activeProject) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject]);

  return (
    <main>
      <section className="hero-section" id="home">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow">Complete digital technology partner</div>
            <h1>
              Build online.
              <br />
              Work smarter.
              <br />
              <span className="accent">Grow faster.</span>
            </h1>
            <p>
              Websites, ecommerce, mobile apps and custom business
              software—thoughtfully built to turn your ideas into measurable
              growth.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/contact">
                Get free consultation <span>↗</span>
              </a>
              <a className="button button-light" href="/portfolio">
                Explore our work <span>↓</span>
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack">
                <span>UI</span>
                <span>UX</span>
                <span>DEV</span>
              </div>
              <span>Strategy, design and development—all under one roof.</span>
            </div>
          </div>
          <div className="hero-photo reveal">
            <img
              src={heroWorkspace}
              alt="Business owners reviewing a web dashboard and mobile application"
            />
            <div className="hero-photo-caption">
              <span>Built around your workflow</span>
              <strong>Web + Software + Apps</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-item">
            <strong>Business-first</strong>
            <span>Solutions shaped around your goals</span>
          </div>
          <div className="trust-item">
            <strong>End-to-end</strong>
            <span>From discovery to deployment</span>
          </div>
          <div className="trust-item">
            <strong>Built to scale</strong>
            <span>Technology that grows with you</span>
          </div>
          <div className="trust-item">
            <strong>Ongoing support</strong>
            <span>A partner beyond the launch</span>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head center reveal">
            <div className="eyebrow">What we do</div>
            <h2>
              One technology partner.
              <br />
              <span className="accent">Every digital solution.</span>
            </h2>
            <p>
              Everything your business needs to establish, operate and grow in a
              connected world.
            </p>
          </div>
          <div className="services-grid">
            {services.map(([icon, title, text]) => (
              <article className="service-card reveal" key={title}>
                <div className="icon-box">
                  <Icon name={icon} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="text-link" href="/services">
                  Learn more <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Built for your stage</div>
            <h2>
              What can we build <span className="accent">for you?</span>
            </h2>
            <p>
              Whether you are starting up or scaling operations, the right
              solution starts with where you are today.
            </p>
          </div>
          <div className="audience-grid">
            {audiences.map(([title, text, link], i) => (
              <article
                className="audience-card reveal"
                data-number={`0${i + 1}`}
                key={title}
              >
                <small>For {title}</small>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="text-link" href="/solutions">
                  {link} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="solutions">
        <div className="container system-grid">
          <div className="system-copy reveal">
            <div className="eyebrow">Beyond websites</div>
            <h2>
              We build complete{" "}
              <span className="accent">business systems.</span>
            </h2>
            <p>
              Your business may need more than an online presence. We connect
              customer journeys, teams and operations so information flows—and
              your business moves.
            </p>
            <ul className="check-list">
              <li>Lead management</li>
              <li>Dealer portals</li>
              <li>Inventory control</li>
              <li>Sales automation</li>
              <li>Billing systems</li>
              <li>Live reporting</li>
            </ul>
          </div>
          <div className="workflow reveal">
            <div className="flow-head">
              <b>Your connected workflow</b>
              <span>Always in sync</span>
            </div>
            <div className="flow-map">
              {[
                ["W", "Website"],
                ["L", "Leads"],
                ["C", "CRM"],
                ["S", "Sales"],
                ["₹", "Invoice"],
                ["I", "Inventory"],
                ["A", "Automation"],
                ["R", "Reports"],
              ].map(([icon, label]) => (
                <div className="flow-node" key={label}>
                  <div className="flow-icon">{icon}</div>
                  <b>{label}</b>
                  <span>Connected data</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section portfolio-section" id="portfolio">
        <div className="container">
          <div className="work-heading reveal">
            <div className="section-head">
              <div className="eyebrow">Our portfolio</div>
              <h2>Websites we have <span className="accent">worked on.</span></h2>
              <p>Explore selected projects and visit each website to see the complete experience.</p>
            </div>
            <div
              className="portfolio-controls"
              aria-label="Portfolio slider controls"
            >
              <span className="autoplay-status">
                <i></i> Auto
              </span>
              <button
                type="button"
                onClick={() => movePortfolio(-1)}
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => movePortfolio(1)}
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </div>
          <div
            className="portfolio-slider compact reveal"
            ref={portfolioRef}
            onMouseEnter={() => {
              portfolioPausedRef.current = true;
            }}
            onMouseLeave={() => {
              portfolioPausedRef.current = false;
            }}
            onFocusCapture={() => {
              portfolioPausedRef.current = true;
            }}
            onBlurCapture={() => {
              portfolioPausedRef.current = false;
            }}
          >
            {projects.map(([name, url], index) => (
              <article className="portfolio-link-card" key={url}>
                <div className="portfolio-live-preview">
                  <iframe
                    src={url}
                    title={`${name} website preview`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                  <button
                    type="button"
                    className="portfolio-preview-trigger"
                    onClick={() => setActiveProject({ name, url })}
                    aria-label={`Open ${name} website in a large preview`}
                  >
                    <span>Click to explore</span>
                  </button>
                </div>
                <span className="portfolio-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="portfolio-domain">{new URL(url).hostname.replace("www.", "")}</div>
                <h3>{name}</h3>
                <a href={url} target="_blank" rel="noreferrer">
                  Visit website <span className="button-arrow" aria-hidden="true"></span>
                </a>
              </article>
            ))}
          </div>
          <p className="portfolio-note">
            Projects move automatically. Hover over the slider to pause.
          </p>
        </div>
      </section>

      <section className="section why-section" id="why-us">
        <div className="container why-grid">
          <div className="why-intro reveal">
            <div className="eyebrow">Why iWebs Technology</div>
            <h2>
              Technology that works for{" "}
              <span className="accent">your business.</span>
            </h2>
            <p>
              Good technology should make work simpler, support your team and
              create room for growth. That is the standard we bring to every
              project.
            </p>
            <a className="text-link" href="/why-us">
              Talk to our team <span>→</span>
            </a>
          </div>
          <div className="reason-list">
            {reasons.map(([title, text], index) => (
              <article className="reason-item reveal" key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="technology-strip"
        aria-label="Technologies we work with"
      >
        <div className="container technology-heading reveal">
          <span>Technology, selected with purpose</span>
          <strong>Tools we work with</strong>
        </div>
        <div className="technology-marquee reveal">
          <div className="technology-track">
            {[...technologies, ...technologies].map(([name, logo], index) => (
              <div
                className="technology-item"
                key={`${name}-${index}`}
                aria-hidden={index >= technologies.length}
              >
                <img src={logo} alt="" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container">
          <div className="section-head center reveal">
            <div className="eyebrow">How we work</div>
            <h2>
              Clear process. <span className="accent">Confident delivery.</span>
            </h2>
            <p>
              A collaborative, transparent path from the first conversation to
              successful launch.
            </p>
          </div>
          <div className="process-grid">
            {[
              [
                "01",
                "Understand",
                "We listen to your business, users and goals before suggesting a solution.",
              ],
              [
                "02",
                "Plan",
                "We define features, technology, timelines and a practical roadmap.",
              ],
              [
                "03",
                "Build",
                "Design, development, testing and integrations happen in focused stages.",
              ],
              [
                "04",
                "Launch & Support",
                "We deploy, train your team and stay available as you grow.",
              ],
            ].map(([num, title, text]) => (
              <article className="process-step reveal" key={num}>
                <div className="step-num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="container">
          <div className="pricing-heading reveal">
            <div className="section-head">
              <div className="eyebrow">Straightforward starting points</div>
              <h2>
                Plans for where your{" "}
                <span className="accent">business is today.</span>
              </h2>
              <p>
                Start with a practical foundation, then add features as your
                requirements grow.
              </p>
            </div>
            <div className="pricing-note">
              <strong>Need something custom?</strong>
              <span>
                CRM, ERP, portals and apps are estimated after understanding
                your workflow.
              </span>
            </div>
          </div>
          <div className="pricing-grid">
            {pricing.map(([title, price, text], index) => (
              <article
                className={`price-card reveal ${index === 1 ? "featured" : ""}`}
                key={title}
              >
                {index === 1 && (
                  <span className="price-label">Popular start</span>
                )}
                <small>{title}</small>
                <div className="price">
                  <span>Starting</span>
                  <strong>{price}</strong>
                </div>
                <p>{text}</p>
                <a className="text-link" href="/contact">
                  Get exact quote <span>→</span>
                </a>
              </article>
            ))}
          </div>
          <p className="pricing-disclaimer">
            Final pricing depends on design, features, integrations and project
            requirements. Taxes and third-party service charges may apply.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container faq-grid">
          <div className="faq-intro reveal">
            <div className="eyebrow">Common questions</div>
            <h2>
              Answers before <span className="accent">we begin.</span>
            </h2>
            <p>
              Still have a question? Tell us what you are planning and our team
              will guide you.
            </p>
            <a className="text-link" href="/contact">
              Ask us anything →
            </a>
          </div>
          <div className="faq-list reveal">
            {faqs.map(([q, a], i) => (
              <details className="faq-item" key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="cta-wrap reveal">
            <div>
              <div className="eyebrow">Start a project</div>
              <h2>Ready to build something better?</h2>
              <p>
                Share your goals with us. We will recommend the right approach
                and give you a clear path forward.
              </p>
            </div>
            <div className="cta-actions">
              <a
                className="button button-white"
                href="mailto:info@iwebstechnology.com"
              >
                Email our team{" "}
                <span className="button-arrow" aria-hidden="true"></span>
              </a>
              <a className="button button-light" href="tel:+919999107112">
                Call 9999107112
              </a>
            </div>
          </div>
        </div>
      </section>

      {activeProject && (
        <div
          className="website-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.name} website preview`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProject(null);
          }}
        >
          <div className="website-modal-window">
            <div className="website-modal-bar">
              <div>
                <strong>{activeProject.name}</strong>
                <span>{activeProject.url}</span>
              </div>
              <div className="website-modal-actions">
                <a href={activeProject.url} target="_blank" rel="noreferrer">
                  Open in new tab <span aria-hidden="true">↗</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close website preview"
                >
                  ×
                </button>
              </div>
            </div>
            <iframe
              src={activeProject.url}
              title={`${activeProject.name} large website preview`}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      )}
    </main>
  );
}
