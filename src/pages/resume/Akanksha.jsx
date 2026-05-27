import { Music2, Palette, Languages, Linkedin, Github } from 'lucide-react'

const CAREER_IMPACT = [
  { number: '$1.4M+', label: 'Revenue unlocked via CBA & predictive ops' },
  { number: '$3M+', label: 'Federal contracts de-risked via AI governance' },
  { number: '28×', label: 'ROI on enterprise AI rollout' },
]

const EXPERIENCE = [
  {
    title: 'Account Manager',
    org: 'Tyrula LLC',
    location: 'Portland, OR (Remote)',
    dates: 'Jan 2025 – Present',
    desc: 'No structure, nothing inherited. Built the client engagement model, delivery cadence, and team accountability framework from zero while running active federal and healthcare accounts simultaneously.',
    bullets: [
      'Directs a 10-person team spanning FDA, CMS, and healthcare clients. Sole point of contact for a federal client juggling regulatory, engineering, and analytics workstreams simultaneously.',
      'Automated FDA contract reporting on day one and cut 3 hrs/week of manual work before the seat was even warm.',
      'Drives BD without a dedicated sales function. Pinpoints expansion opportunities, structures SOW renewals, and keeps delivery tightly aligned to client goals portfolio-wide.',
      'Passed ISO audit and coordinated CMMI appraisal organization-wide. Both leveraged compliance frameworks personally authored in the prior role.',
    ],
  },
  {
    title: 'Project Manager, Business Strategy',
    org: 'Tyrula LLC',
    location: 'McLean, VA (Hybrid)',
    dates: 'Aug 2023 – Dec 2024',
    desc: 'Day one: the client expected all 14 platform reports live in 10 weeks. The internal team was mid-build on a separate feature with no plan to stop. Restructured both delivery tracks, scoped the feature down to cut dev load, and hired a dedicated BA to run requirements in parallel. Both shipped on time and secured a $1M/year client relationship.',
    bullets: [
      'Engineered ACHA\'s first live data platform from nothing (Power BI + Azure Data Factory). Replaced a static PDF across 900+ institutions with real-time benchmarking, generating ~$135K/year in new member revenue, reclaiming ~$60K/year in staff capacity, and establishing the org\'s primary acquisition asset at national conferences.',
      'Caught 48% scope creep (~1,200 hrs on a 2,500 hr contract) and designed a Change Management SOP that made the cost of every client request impossible to ignore. Clawed back ~$105K in additional revenue. SOP now standard across Tyrula\'s PM Center of Excellence.',
      'Launched the company\'s AI governance program and drove Copilot adoption across 35 employees at 28x ROI (~$359K/year in productivity). Authored the AI Acceptable Use Policy covering HIPAA, FedRAMP, and CUI. Passed ISO audit and actively protected $3M+ in federal contracts from compliance exposure.',
      'Promoted to PM in 3 months, fastest on the cohort. Grew the team from 3 to 10 and built an onboarding system that had people fully productive within weeks. Two direct hires now generating $180K+/year across FDA, CMS, and ACHA. Championed an intern\'s raise from $70K to $110K through relentless internal advocacy.',
      'Stood up Agile where none existed. Client calls fell from 2 hrs to 30 min, firedrills dropped to near zero, and cut ~$102K/year in communication overhead.',
      'Shaped CEO decisions personally: AI roadmap, key hires, and contract expansion strategy.',
    ],
  },
  {
    title: 'Senior Analyst, Strategy & Operations',
    org: 'Compass / E15 Group — Washington Nationals',
    location: 'Washington, DC (Hybrid)',
    dates: 'Jan 2022 – Aug 2023',
    desc: 'Operations strategist at Nationals Park, Audi Field, and FedEx Field. Three venues, three ownership structures, three event calendars. One person responsible for pricing, inventory, staffing, and vendor strategy at all of them.',
    bullets: [
      'Developed a Python/R predictive platform combining POS records, ticket sales, opponent history, and inning-level patterns. Precisely shaped venue open/close decisions, food prep timing, and staffing levels. Delivered ~$150K/year in waste reduction (confirmed by accounting) and ~$80K/year in staffing savings. CBA/ROI analysis unlocked a self-checkout rollout that produced 8% revenue growth (~$1.4M). Extended to Audi Field and deliberately left self-sustaining.',
      'Coded and deployed a PowerApps staff management app entirely solo. Replaced a paper roster only one person could decipher with real-time badge scanning across 150 locations and 650 staff. Saved ~$55K/year in labor, wiped out DC wage compliance exposure, and removed a ~$200K/game-day single-point-of-failure risk. Demoed to Levy leadership for enterprise rollout.',
      'Evaluated 10-15 technology and F&B vendors per season and developed dynamic pricing strategy for concerts and non-sporting events. Pricing restructure delivered a 2-3% revenue lift on a $15-20M F&B base.',
      'Produced Tableau dashboards for senior leadership at Nationals Park and Audi Field, used directly in monthly strategic reviews and per-cap improvement decisions.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    org: 'Accenture',
    location: 'Bengaluru, India',
    dates: 'Aug 2018 – Aug 2019',
    desc: 'National broadband infrastructure rollout for the Australian government. 60-person team, 1,800+ triage tickets per day. First job out of college.',
    bullets: [
      'Identified a structural bottleneck in the national triage workflow and proposed a fix that sharply reduced wrong technician dispatches and unnecessary senior escalations. Became the de facto onboarding authority and personally trained 60+ new recruits over the year.',
      'Wrote Python macros that pulled daily status data from 60 team members and auto-generated executive presentations overnight. Eliminated manual spreadsheet reconciliation entirely and saved management ~$7K/year.',
      'Within 6 months, became the primary liaison to visiting Australian leadership and represented a 100+ person team on one of Accenture India\'s largest active engagements.',
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

            {/* ── CAREER IMPACT ── */}
            <section className="resume-section" aria-labelledby="a-impact" style={{ marginBottom: 'var(--sp-3)' }}>
              <h2 id="a-impact" className="resume-section-title">Career Impact</h2>
              <div className="resume-impact-grid">
                {CAREER_IMPACT.map(({ number, label }) => (
                  <div key={number} className="resume-impact-stat">
                    <span className="resume-impact-number">{number}</span>
                    <span className="resume-impact-label">{label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SUMMARY ── */}
            <section className="resume-section" aria-labelledby="a-summary">
              <h2 id="a-summary" className="resume-section-title">Professional Summary</h2>
              <p className="resume-summary">
                <strong>8 YoE</strong> building the operating infrastructure executives depend on. Same pattern every time: walk in with no playbook, no inherited process, and leave behind systems that outlast the engagement. The industry changes. The approach doesn't.
              </p>
              <p className="resume-summary" style={{ fontStyle: 'italic', borderLeft: '2px solid var(--border)', paddingLeft: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                Grew up in a military household that relocated constantly, then a diplomatic posting across two continents. Always the newcomer in rooms where everyone else already knew the rules. Got very good at building the foundation before anyone else knew one was missing.
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
                    {desc && (
                      <p className="resume-entry-note" style={{ fontStyle: 'italic', borderLeft: '2px solid var(--border)', paddingLeft: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                        {desc}
                      </p>
                    )}
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