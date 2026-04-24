import { Music2, Palette, Languages, Linkedin, Github } from 'lucide-react'

const EXPERIENCE = [
  {
    title: 'Account Manager',
    org: 'Tyrula LLC',
    location: 'Portland, OR (Remote)',
    dates: 'Jan 2025 – Present',
    bullets: [
      'Oversees a 10-person cross-functional organization, having established the client engagement model, delivery cadence, and team accountability structures from the ground up upon joining',
      'Leads strategy and operations for a federal healthcare client, independently managing regulatory complexity while sustaining delivery momentum spanning engineering, analytics, and compliance workstreams',
      'Drives growth across healthcare and federal verticals by identifying expansion opportunities, structuring SOW renewals, and aligning delivery roadmaps to client objectives without a dedicated sales or strategy function',
      'Shepherds the company through CMMI appraisal by completing institute-required training and coordinating cross-functional participation across audit phases to validate process maturity',
      'Manages ISO audit readiness by coordinating artifact collection, stakeholder interviews, and post-audit remediation spanning the full organization',
    ],
  },
  {
    title: 'Project Manager, Business Strategy',
    org: 'Tyrula LLC',
    location: 'McLean, VA (Hybrid)',
    dates: 'Aug 2023 – Dec 2024',
    bullets: [
      'Architected a Power BI and Azure Data Factory data platform with no existing infrastructure or inherited process, delivering real-time data access to 900+ healthcare institutions and achieving a 20% improvement in efficiency',
      'Earned a promotion to Project Manager within three months of joining, scaled the team from 3 to 10 members, authored every process document and workflow from scratch, and maintained on-schedule delivery throughout',
      'Designed and launched the company\'s AI governance program, piloting Microsoft Copilot organization-wide to increase employee AI proficiency by 30%, developing the ML training curriculum, and authoring the AI Acceptable Use Policy',
      'Established the Agile operating model where none had existed, standing up sprint cadences, retrospectives, capacity planning, and budget forecasting, reducing project turnaround by 25%',
      'Contributed directly to CEO-level planning on AI roadmap and financial positioning, shaping the recommendations rather than preparing the materials',
      'Mentored three interns through a 10-week program, all of whom returned for winter placements, and coached a new hire through a career transition resulting in a 10% salary increase and a move into federal contracting',
    ],
  },
  {
    title: 'Senior Analyst, Strategy & Operations',
    org: 'Compass / E15 Group — Washington Nationals',
    location: 'Washington, DC (Hybrid)',
    dates: 'Jan 2022 – Aug 2023',
    bullets: [
      'Assessed 10 to 15 technology and F&B vendors per season by attending pitch meetings, conducting ROI and cost-benefit analysis, and making partnership recommendations on stadium technology deployments including self-checkout systems; following onboarding, analyzed vendor sales data to advise on menu performance and product mix optimization',
      'Led analytics for non-sporting events including concerts at Nationals Park and Audi Field, developing dynamic pricing strategy on specialty and alcoholic beverage items, drawing on market research and demographic data to shape product mix decisions, and running ROI and cost-benefit analysis to support pricing recommendations',
      'Designed and developed a PowerApps staff management application hosted on Microsoft Teams, replacing a paper-based master roster with a live system, enabling managers to scan employee barcodes, view assigned concession postings, and reassign staff in real time throughout a venue with 350+ temporary workers',
      'Engineered pre-event production PAR models for every concession location, calculating hourly item-level output targets based on attendance volume to prevent kitchen backlog, minimize food waste, and inform monthly supply chain inventory ordering and pre-game stocking',
      'Automated the aggregation of millions of POS records from multiple sources using SQL, eliminating 80% of manual reporting hours and freeing the team to focus on decision-making rather than data wrangling',
      'Served as the embedded operations strategist for F&B and venue functions spanning three properties, Nationals Park, Audi Field, and FedEx Field, covering pricing strategy, inventory planning, staffing models, and vendor analysis across different sports calendars, ownership structures, and event types',
      'Constructed staffing PAR models calibrated to per-event ticket sales, translating attendance projections into location-level headcount requirements for an average of 350 temporary staff per game',
      'Produced Tableau dashboards for Nationals Park and Audi Field, giving senior leadership direct visibility into aggregated financial and operational performance used in monthly strategic reviews and per-cap improvement recommendations',
    ],
  },
  {
    title: 'Associate Software Engineer',
    org: 'Accenture',
    location: 'Bengaluru, India',
    dates: 'Aug 2018 – Aug 2019',
    bullets: [
      'Emerged as the primary liaison to visiting Australian leadership within six months of joining, representing a 100+ person polylingual team as the face of delivery for one of Accenture India\'s largest active engagements',
      'Designated subject matter expert for all incoming team members, authoring the onboarding methodology and training staff on network triage, AutoCAD analysis, and escalation protocols',
      'Programmed Python macros aggregating team status data and auto-generating executive presentations, improving reporting efficacy by 90% and eliminating a recurring manual process',
      'Identified a structural bottleneck in the AutoCAD triage workflow and engineered a centralized automation dashboard, improving team efficiency by 30% across both shifts',
    ],
  },
]

const ADDITIONAL_EXPERIENCE = [
  {
    title: 'Teaching Assistant',
    org: 'Smith School of Business, UMD',
    dates: 'Aug 2020 – Jun 2021',
    desc: 'Supported 20+ students across two analytics courses, improving class comprehension and average performance.',
  },
  {
    title: 'Consultant',
    org: 'Medhen Orphan Relief Effort',
    dates: 'Jun 2021 – Dec 2021',
    desc: 'Developed PR and social media strategy including a press kit for nonprofit outreach across digital and broadcast media.',
  },
  {
    title: 'Research Intern',
    org: 'CHIDS',
    dates: 'Jun 2021 – Dec 2021',
    desc: 'Conducted audience segmentation and A/B testing via Facebook to optimize HIV prevention messaging for South African adolescent girls.',
  },
  {
    title: 'Research Student',
    org: 'TIFR',
    dates: 'Jan 2018 – Aug 2018',
    desc: 'Optimized crystal growth conditions for nonlinear optics research, doubling crystal output size.',
  },
  {
    title: 'Intern',
    org: 'Coromandel Fertilizer',
    dates: 'May 2016 – Jun 2016',
    desc: 'Authored a process improvement paper targeting 99% sulphuric acid manufacturing efficiency.',
  },
]

const EDUCATION = [
  {
    degree: 'MS, Marketing Analytics',
    school: 'University of Maryland, Robert H. Smith School of Business',
    dates: 'Aug 2020 – Dec 2021',
    note: 'President, Smith Masters Student Association & Smith Masters Marketing Analytics Association',
  },
  {
    degree: 'B.Tech, Chemical Engineering',
    school: 'Manipal Institute of Technology',
    dates: '2014 – 2018',
    note: null,
  },
]

const SKILL_GROUPS = [
  {
    category: 'Analytics & BI',
    skills: ['Tableau', 'Power BI', 'SQL', 'Python', 'R', 'SAS', 'Google Analytics', 'Qualtrics'],
  },
  {
    category: 'Programming',
    skills: ['HTML', 'R', 'SAS', 'SQL', 'MATLAB', 'Aspen', 'Python'],
  },
  {
    category: 'Statistical Methods',
    skills: ['Regression', 'Machine Learning', 'A/B Testing', 'Clustering', 'MDS', 'PCA', 'EFA'],
  },
  {
    category: 'Cloud & Data',
    skills: ['AWS', 'Azure Data Factory', 'IBM Applied AI'],
  },
  {
    category: 'Project & Collaboration',
    skills: ['Jira', 'Confluence', 'SharePoint', 'Smartsheets', 'Microsoft Power Automate'],
  },
  {
    category: 'Reporting & Design',
    skills: ['Tableau', 'Canva', 'PowerApps'],
  },
  {
    category: 'Methodologies',
    skills: ['Agile / Scrum', 'Sprint Planning', 'Budget Forecasting', 'Stakeholder Management', 'AI Governance'],
  },
]

const CERTIFICATIONS = [
  'Public Trust Clearance (Active)',
  'IBM Applied AI Professional Certificate',
  'AWS Fundamentals Specialization',
  'SAS Programmer Specialization',
  'Machine Learning — Coursera / Stanford',
  'Tableau Data Visualization',
]

const SPOKEN_LANGUAGES = [
  { lang: 'English', level: 'Native' },
  { lang: 'Hindi', level: 'Native' },
  { lang: 'Malayalam', level: 'Intermediate' },
]

const INTERESTS = [
  { label: 'Classical Keyboard', Icon: Music2 },
  { label: 'Painting', Icon: Palette },
]

export default function AkankshaResume() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero" aria-labelledby="akanksha-page-heading">
        <div className="container resume-hero__inner">
          <p className="eyebrow eyebrow--light">Resume</p>
          <span className="gold-rule gold-rule--lg" aria-hidden="true" />
          <h1 id="akanksha-page-heading" className="resume-hero__name">
            Akanksha Bapna
          </h1>
          <p className="resume-hero__role">
            Chief of Staff &amp; Operations Leader | Data-Driven Builder
          </p>
        </div>
      </section>

      {/* ── RESUME BODY ── */}
      <div className="resume-body">
        <div className="container">
          <article className="resume-page" aria-label="Akanksha Bapna's resume">

            {/* ── CONTACT HEADER ── */}
            <header className="resume-header">
              <address className="resume-contact-row" style={{ fontStyle: 'normal' }}>
                <span className="resume-contact-location">
                  <span aria-hidden="true">📍</span> Portland Metro Area, OR
                </span>
                <a href="mailto:ardenvalellc@gmail.com">ardenvalellc@gmail.com</a>
                <a
                  href="https://www.linkedin.com/in/akanksha-bapna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Akanksha Bapna on LinkedIn"
                >
                  <Linkedin size={14} color="var(--gold)" strokeWidth={1.75} aria-hidden="true" className="resume-contact-icon" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Abapna25"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Akanksha Bapna on GitHub"
                >
                  <Github size={14} color="var(--gold)" strokeWidth={1.75} aria-hidden="true" className="resume-contact-icon" />
                  GitHub
                </a>
              </address>
            </header>

            {/* ── SUMMARY ── */}
            <section className="resume-section" aria-labelledby="a-summary">
              <h2 id="a-summary" className="resume-section-title">Professional Summary</h2>
              <p className="resume-summary">
                Operator and builder with 8+ years turning ambiguity into infrastructure. Background spans healthcare data platforms, venue and stadium operations, and AI governance. Track record of scaling teams, shipping tools without dedicated engineering resources, and contributing directly to executive strategy. Leads with data, communicates across every level of an organization, and takes full ownership of outcomes.
              </p>
              <p className="resume-summary">
                Spent a lifetime being the newcomer in rooms where everyone else already knew the rules, and building the foundation before anyone else knew one was missing.
              </p>
            </section>

            {/* ── EXPERIENCE ── */}
            <section className="resume-section" aria-labelledby="a-experience">
              <h2 id="a-experience" className="resume-section-title">Experience</h2>
              {EXPERIENCE.map(({ title, org, location, dates, desc, bullets }) => (
                <div key={title + org} className="resume-entry">
                  <div className="resume-entry-header">
                    <span className="resume-entry-title">{title}</span>
                    <span className="resume-entry-date">{dates}</span>
                  </div>
                  <p className="resume-entry-org">
                    {org}
                    <span className="resume-entry-location">— {location}</span>
                  </p>
                  <div className="resume-entry-desc">
                    {desc && <p className="resume-entry-note">{desc}</p>}
                    <ul>{bullets.map(b => <li key={b}>{b}</li>)}</ul>
                  </div>
                </div>
              ))}
            </section>

            {/* ── ADDITIONAL EXPERIENCE ── */}
            <section className="resume-section resume-section--secondary" aria-labelledby="a-additional">
              <h2 id="a-additional" className="resume-section-title resume-section-title--secondary">Additional Experience</h2>
              <div className="resume-addl-list">
                {ADDITIONAL_EXPERIENCE.map(({ title, org, dates, desc }) => (
                  <div key={title + org} className="resume-addl-entry">
                    <div className="resume-addl-meta">
                      <span className="resume-addl-title">{title}</span>
                      <span className="resume-addl-org">{org}</span>
                      <span className="resume-addl-date">{dates}</span>
                    </div>
                    <p className="resume-addl-desc">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── EDUCATION ── */}
            <section className="resume-section" aria-labelledby="a-edu">
              <h2 id="a-edu" className="resume-section-title">Education</h2>
              {EDUCATION.map(({ degree, school, dates, note }) => (
                <div key={degree} className="resume-entry">
                  <div className="resume-entry-header">
                    <span className="resume-entry-title">{degree}</span>
                    <span className="resume-entry-date">{dates}</span>
                  </div>
                  <p className="resume-entry-org">{school}</p>
                  {note && <p className="resume-entry-note">{note}</p>}
                </div>
              ))}
            </section>

            {/* ── SKILLS ── */}
            <section className="resume-section" aria-labelledby="a-skills">
              <h2 id="a-skills" className="resume-section-title">Skills</h2>
              <div className="resume-skills-table">
                {SKILL_GROUPS.map(({ category, skills }) => (
                  <div key={category} className="resume-skills-row">
                    <span className="resume-skill-category">{category}</span>
                    <p className="resume-skill-values" aria-label={`${category}: ${skills.join(', ')}`}>
                      {skills.join(' | ')}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── LANGUAGES & INTERESTS ── */}
            <section className="resume-section" aria-labelledby="a-extra">
              <h2 id="a-extra" className="resume-section-title">Languages &amp; Interests</h2>
              <div className="resume-extra-grid">

                <div>
                  <p className="resume-extra-label">Languages</p>
                  <ul className="resume-icon-list" aria-label="Spoken languages">
                    {SPOKEN_LANGUAGES.map(({ lang, level }) => (
                      <li key={lang} className="resume-icon-row">
                        <Languages size={15} color="var(--gold)" strokeWidth={1.5} aria-hidden="true" className="resume-icon-row__icon" />
                        <span>
                          {lang}
                          <span className="resume-icon-row__level">— {level}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="resume-extra-label">Interests</p>
                  <ul className="resume-icon-list" aria-label="Personal interests">
                    {INTERESTS.map(({ label, Icon }) => (
                      <li key={label} className="resume-icon-row">
                        <Icon size={15} color="var(--gold)" strokeWidth={1.5} aria-hidden="true" className="resume-icon-row__icon" />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </section>

            {/* ── CERTIFICATIONS ── */}
            <section className="resume-section" aria-labelledby="a-certs">
              <h2 id="a-certs" className="resume-section-title">Certifications</h2>
              <ul className="resume-certs-list" aria-label="Certifications">
                {CERTIFICATIONS.map(cert => (
                  <li key={cert} className="resume-cert-item">
                    <span className="resume-cert-dot" aria-hidden="true" />
                    {cert}
                  </li>
                ))}
              </ul>
            </section>

          </article>
        </div>
      </div>
    </>
  )
}