const services = [
  ["OOH & DOOH", "Strategic planning and buying across premium roadside, street furniture, transit, airport and digital inventory."],
  ["Experiential", "Pop-ups, sampling, mobile tours, brand ambassadors and high-impact street activations."],
  ["Retail Media", "Shopper-focused solutions inside and around pharmacies, supermarkets, malls and lifestyle destinations."],
  ["Production", "Creative adaptation, printing, special builds, installations, permits, logistics and campaign certification."],
];

const steps = ["Brief", "Strategy", "Negotiation", "Production", "Launch", "POP & Reporting"];

export default function HomePage() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="North Point Media Group home">
          <span className="mark">N</span>
          <span>NORTH POINT<br /><small>MEDIA GROUP</small></span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#markets">Markets</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a className="navButton" href="#contact">Start a Campaign</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="shell heroGrid">
          <div>
            <p className="eyebrow">OUT-OF-HOME • EXPERIENTIAL • RETAIL MEDIA</p>
            <h1>Real-world media.<br />Local expertise.<br /><em>Measurable impact.</em></h1>
            <p className="heroCopy">
              North Point Media Group helps brands and international agencies plan and execute
              campaigns across the United States and Canada—from strategy and negotiation through
              production, installation and proof of performance.
            </p>
            <div className="actions">
              <a className="primary" href="#contact">Start a Campaign</a>
              <a className="secondary" href="#services">Explore Capabilities</a>
            </div>
          </div>
          <div className="heroVisual" aria-label="Abstract city media visualization">
            <div className="cityCard cardA"><span>NEW YORK</span><strong>DOOH</strong></div>
            <div className="cityCard cardB"><span>MIAMI</span><strong>EXPERIENTIAL</strong></div>
            <div className="cityCard cardC"><span>TORONTO</span><strong>TRANSIT</strong></div>
            <div className="pulse"></div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="shell trustGrid">
          <span>One trusted partner</span>
          <b>USA + CANADA</b>
          <span>Planning through POP</span>
          <b>OOH • DOOH • BTL</b>
        </div>
      </section>

      <section id="services" className="section shell">
        <div className="sectionHeading">
          <p className="eyebrow">CAPABILITIES</p>
          <h2>Integrated solutions built around the brief.</h2>
          <p>Flexible, market-specific planning with boutique service and end-to-end accountability.</p>
        </div>
        <div className="serviceGrid">
          {services.map(([title, text], index) => (
            <article className="serviceCard" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="markets" className="darkSection">
        <div className="shell marketGrid">
          <div>
            <p className="eyebrow light">MARKETS</p>
            <h2>National reach.<br />Local market intelligence.</h2>
            <p>
              Access to leading media owners and production partners across major and secondary
              markets in the United States and Canada.
            </p>
          </div>
          <div className="marketPanel">
            <div><strong>UNITED STATES</strong><span>Miami · New York · Los Angeles · Chicago · Dallas · Houston · Las Vegas · San Francisco · San Diego · Orlando</span></div>
            <div><strong>CANADA</strong><span>Toronto · Montreal · Vancouver · Calgary · Ottawa · Edmonton</span></div>
          </div>
        </div>
      </section>

      <section id="process" className="section shell">
        <div className="sectionHeading compact">
          <p className="eyebrow">HOW WE WORK</p>
          <h2>Clear from first brief to final certification.</h2>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="portalSection">
        <div className="shell portalGrid">
          <div>
            <p className="eyebrow">CLIENT PORTAL — COMING SOON</p>
            <h2>Campaign visibility beyond the media plan.</h2>
            <p>
              Future clients will be able to track production milestones, review live status,
              download POP photos and access campaign documents from one secure dashboard.
            </p>
          </div>
          <div className="dashboard">
            <div className="dashTop"><span>Campaign Dashboard</span><b>LIVE</b></div>
            <div className="dashBody">
              <div className="metric"><span>Production</span><strong>Complete</strong></div>
              <div className="metric"><span>Installation</span><strong>Complete</strong></div>
              <div className="metric"><span>POP Photos</span><strong>24 files</strong></div>
              <div className="progress"><i style={{ width: "86%" }}></i></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section shell about">
        <div>
          <p className="eyebrow">ABOUT NORTH POINT</p>
          <h2>Big-agency expertise.<br />Boutique attention.</h2>
        </div>
        <p>
          North Point Media Group was created to give brands and international agencies a reliable
          single point of contact for complex media execution across North America. We combine
          strategic thinking, transparent communication and hands-on market expertise.
        </p>
      </section>

      <section id="contact" className="contact">
        <div className="shell contactGrid">
          <div>
            <p className="eyebrow light">LET'S BUILD SOMETHING REAL</p>
            <h2>Bring us the brief.<br />We’ll map the solution.</h2>
          </div>
          <a className="contactButton" href="mailto:hello@northpointmediagroup.com">
            hello@northpointmediagroup.com
          </a>
        </div>
      </section>

      <footer className="shell footer">
        <div className="brand">
          <span className="mark">N</span>
          <span>NORTH POINT<br /><small>MEDIA GROUP</small></span>
        </div>
        <p>OOH • Experiential • Retail Media<br />United States & Canada</p>
        <p>© 2026 North Point Media Group</p>
      </footer>
    </main>
  );
}
