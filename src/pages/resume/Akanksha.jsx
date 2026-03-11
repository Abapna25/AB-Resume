import { Music2, Palette, Languages, Linkedin, Github } from 'lucide-react'

const EXPERIENCE = [
  {
    title: 'Account Manager',
    org: 'Tyrula LLC',
    location: 'McLean, VA (Remote)',
    dates: 'Jan 2025 – Present',
    bullets: [
      'Promoted to Account Manager overseeing client relationships and delivery across multiple concurrent government and healthcare projects, managing a team of 10+.',
      'Serve as primary point of contact for FDA client engagement, leading Strategy & Operations as Senior Analyst requiring active public trust clearance.',
      'Drive account growth strategy by identifying expansion opportunities, managing SOW renewals, and aligning delivery roadmaps.',
      'Lead cross-functional collaboration across engineering, analytics, and design teams using Jira, Confluence, and SharePoint.',
    ],
  },
  {
    title: 'Project Manager, Business Strategy',
    org: 'Tyrula LLC',
    location: 'McLean, VA (Hybrid)',
    dates: 'Aug 2023 – Dec 2024',
    bullets: [
      'Led ACHA web application development integrating Power BI and Azure Data Factory delivering real-time data visualization to 900+ institutions, achieving 20% increase in data access efficiency.',
      'Promoted from individual contributor to PM within 3 months; scaled team from 3 to 10 members.',
      'Pioneered company-wide AI governance program — led Microsoft Copilot pilot increasing AI proficiency by 30%.',
      'Established Agile processes improving project turnaround by 25%.',
      'Mentored 3 interns, all of whom returned for winter placements.',
    ],
  },
  {
    title: 'Senior Analyst, Strategy & Operations',
    org: 'Compass / E15 Group — Washington Nationals',
    location: 'Washington, DC (Hybrid)',
    dates: 'Jan 2022 – Aug 2023',
    bullets: [
      'Led strategic discussions on F&B sales, pricing, and quality assurance driving 15% increase in profit margin.',
      'Built PowerApps mobile application for resource allocation, approved for company-wide rollout.',
      'Automated aggregation of millions of POS records reducing reporting man-hours by 80%.',
      'Built Tableau dashboards for senior leadership financial and operational decisions.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    org: 'Accenture',
    location: 'Bengaluru, India',
    dates: 'Aug 2018 – Aug 2019',
    bullets: [
      'Automated AutoCAD triage workflows improving efficiency by 30%.',
      'Improved reporting efficacy by 90% using Python macros.',
      'Mentored 60+ new recruits across a year-long project.',
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
            Project Manager &amp; Strategy &amp; Analytics Professional
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
                <a href="mailto:bapna.akanksha@gmail.com">bapna.akanksha@gmail.com</a>
                <a
                  href="https://www.linkedin.com/in/akanksha-bapna-927972102/"
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
                Results-driven Project Manager and Strategy &amp; Analytics professional with 6+ years of experience spanning software engineering, data analytics, and business strategy. Proven track record managing cross-functional teams, delivering data-driven solutions, and driving AI/ML adoption across enterprise and government clients. Holds active public trust clearance. Expertise in Agile delivery, stakeholder management, and translating complex data into actionable business insights.
              </p>
            </section>

            {/* ── EXPERIENCE ── */}
            <section className="resume-section" aria-labelledby="a-experience">
              <h2 id="a-experience" className="resume-section-title">Experience</h2>
              {EXPERIENCE.map(({ title, org, location, dates, bullets }) => (
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