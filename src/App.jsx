import React, { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun, Github, Mail } from 'lucide-react'

const useTheme = () => {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute('data-theme') || 'dark'
  )
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}

const LinkedInIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 448 512" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M100.3 448H7.4V149.5h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1-.5 53.8-.5s53.8 24.6 53.8 54.3c0 29.7-24.1 54.3-53.8 54.3zm394.2 339.9h-92.7V302.4c0-34.7-12.4-58.5-43.4-58.5-23.7 0-37.8 15.9-44 31.3-2.3 5.4-2.9 13-2.9 20.6V448H172.3s1.2-244.6 0-269.9h92.7v38.3c12.3-19 34.3-46.1 83.3-46.1 60.8 0 106.4 39.7 106.4 125V448z"
    />
  </svg>
)

const Nav = ({ onToggleTheme, theme }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="nav-wrap">
      <div className="container nav">
        <a href="#home" className="brand">Likith</a>

        {/* Desktop nav */}
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>

        <div className="socials">
          <a
            className="icon-btn"
            href="https://github.com/likith17"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            className="icon-btn"
            href="https://www.linkedin.com/in/likith-podalakuru"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="mobile-only" style={{ display: 'flex', gap: 8 }}>
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-btn" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <>
          <div className="backdrop" onClick={() => setOpen(false)} />
          <div className="sheet">
            <div className="sheet-head">
              <span style={{ fontWeight: 800, color: 'var(--accent)' }}>Menu</span>
              <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>
            <div className="sheet-body">
              <a className="sheet-link" href="#about" onClick={() => setOpen(false)}>
                About
              </a>
              <a className="sheet-link" href="#education" onClick={() => setOpen(false)}>
                Education
              </a>
              <a className="sheet-link" href="#portfolio" onClick={() => setOpen(false)}>
                Experience & Projects
              </a>
              <a className="sheet-link" href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const SectionHeader = ({ kicker, title, sub }) => (
  <div className="section-head">
    {kicker && <div className="kicker">{kicker}</div>}
    <h2>{title}</h2>
    {sub && <p className="muted">{sub}</p>}
  </div>
)

const Hero = () => (
  <section id="home" className="section">
    <div className="container">
      <div className="grid">
        <div className="panel">
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>Hi, I’m Likith Podalakuru</h1>
          <p className="muted" style={{ maxWidth: 720 }}>
            Graduate Computer Science student at Binghamton University with industry experience delivering
            resilient production systems at Tata Consultancy Services. I thrive at the intersection of
            machine learning, data storytelling, and scalable software.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <a href="#portfolio" className="btn btn-primary">See Experience</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
        <div className="card hover">
          <h3>Currently</h3>
          <p className="muted">
            Exploring AI-driven decision making, search strategies, and real-time analytics while pursuing
            the Artificial Intelligence track at Binghamton University.
          </p>
          <div style={{ marginTop: 12 }}>
            <span className="badge">Machine Learning</span>
            <span className="badge">AI Systems</span>
            <span className="badge">Full-stack</span>
            <span className="badge">Data Storytelling</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <SectionHeader
        kicker="About"
        title="Curious, analytical, and driven to build useful AI"
        sub="I love taking complex problems, grounding them in data, and shipping thoughtful user experiences."
      />
      <div className="grid">
        <div className="card hover">
          <h3>AI-Focused Graduate Student</h3>
          <p className="muted">
            Pursuing an M.S. in Computer Science (Artificial Intelligence track) at Binghamton University,
            building expertise in machine learning, intelligent systems, and algorithmic design.
          </p>
        </div>
        <div className="card hover">
          <h3>Systems Engineer Mindset</h3>
          <p className="muted">
            Spent three years at Tata Consultancy Services resolving mission-critical issues, optimizing
            performance, and coordinating cross-functional teams during production incidents.
          </p>
        </div>
        <div className="card hover">
          <h3>Always Learning</h3>
          <p className="muted">
            From blockchain research to deep learning surveillance and smart navigation projects, I keep
            experimenting with new frameworks, datasets, and storytelling formats.
          </p>
        </div>
      </div>
    </div>
  </section>
)

const Education = () => (
  <section id="education" className="section">
    <div className="container">
      <SectionHeader kicker="Education" title="Where I sharpened my craft" />
      <div className="timeline">
        <div className="card line-left hover">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <strong>Binghamton University, State University of New York</strong>
            <span className="muted">Dec 2025 (exp.)</span>
          </div>
          <p className="muted">M.S. in Computer Science — Artificial Intelligence Track • GPA: 3.22/4.00</p>
          <p>
            Coursework: Machine Learning, AI, Programming for the Web, Algorithms, Programming Languages,
            IoT, System Programming.
          </p>
        </div>
        <div className="card line-left hover">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <strong>Vellore Institute of Technology, Bangalore</strong>
            <span className="muted">Aug 2023 – Jun 2024</span>
          </div>
          <p className="muted">Post-Graduation Certification Program in Artificial Intelligence — GPA: 3.6/4.0</p>
          <p>
            Coursework: Probability &amp; Statistics, DBMS, Data Mining, Big Data Analytics, Data Visualization,
            Fundamentals of AI, Intro to ML &amp; DL.
          </p>
        </div>
        <div className="card line-left hover">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <strong>SRM Valliammai College of Engineering, Chennai</strong>
            <span className="muted">Aug 2016 – Apr 2020</span>
          </div>
          <p className="muted">B.E. in Computer Science</p>
          <p>
            Coursework: Programming &amp; Data Structures, Cloud Computing, Data Warehousing &amp; Mining, DBMS,
            Graph Theory, Cyber Forensics, Probability &amp; Queuing Theory, Artificial Intelligence.
          </p>
        </div>
      </div>
    </div>
  </section>
)

const Portfolio = () => (
  <section id="portfolio" className="section">
    <div className="container">
      <SectionHeader
        kicker="Experience"
        title="Industry work, academic projects, and research"
        sub="A snapshot of the projects and impact areas I’m most proud of."
      />

      {/* Work Experience */}
      <div style={{ marginBottom: 22 }}>
        <h3 style={{ marginBottom: 10 }}>Professional Experience</h3>
        <div className="timeline">
          <div className="card line-left hover">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <strong>Systems Engineer — Tata Consultancy Services</strong>
              <span className="muted">Jan 2021 – Sep 2023 • Chennai, India</span>
            </div>
            <ul style={{ margin: '8px 0 0 18px' }}>
              <li>
                Investigated and resolved ServiceNow and Jira incidents by debugging C++ and Assembly code to
                maintain business-critical services.
              </li>
              <li>
                Partnered with cross-functional teams to ship new features improving stability and aligning
                with evolving client requirements.
              </li>
              <li>
                Monitored production loads, coordinated communications, and served as the primary point of
                contact during incidents.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div style={{ marginBottom: 22 }}>
        <h3 style={{ marginBottom: 10 }}>Selected Projects</h3>
        <div className="grid">
          <div className="card hover">
            <strong>Battleship AI</strong>
            <p className="muted">
              Built an AI fleet navigation system leveraging DFS, BFS, UCS, and A* search to detect enemies,
              avoid obstacles, and maneuver efficiently on grid-based maps.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Search Algorithms</span>
              <span className="badge">Pathfinding</span>
              <span className="badge">Python</span>
            </div>
          </div>
          <div className="card hover">
            <strong>Traffic Monitoring &amp; Surveillance</strong>
            <p className="muted">
              Implemented vehicle detection for dense urban traffic using a fine-tuned YOLOv8 model,
              optimizing hyperparameters for scalable deployment.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">YOLOv8</span>
              <span className="badge">Computer Vision</span>
              <span className="badge">Python</span>
            </div>
          </div>
          <div className="card hover">
            <strong>Prediction of Malevolent Files</strong>
            <p className="muted">
              Engineered ML pipelines to classify malware by processing large feature sets and improving
              executable threat detection accuracy.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Machine Learning</span>
              <span className="badge">Security</span>
              <span className="badge">Scikit-learn</span>
            </div>
          </div>
          <div className="card hover">
            <strong>Impact of Electric Vehicles on the Environment</strong>
            <p className="muted">
              Analyzed EV trip and charging datasets to surface insights on urban planning, emissions, and
              sustainable mobility adoption.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Data Analysis</span>
              <span className="badge">Visualization</span>
              <span className="badge">Python</span>
            </div>
          </div>
        </div>
      </div>

      {/* Publication */}
      <div style={{ marginBottom: 22 }}>
        <h3 style={{ marginBottom: 10 }}>Publication</h3>
        <div className="card hover">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <strong>“Proof of Work” Generation Using Blockchain</strong>
            <a
              className="btn"
              href="https://www.ijariie.com/AdminUploadPdf/Proof_of_Work_generation_using_Blockchain_jiip.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Read
            </a>
          </div>
          <p className="muted" style={{ marginTop: 8 }}>
            International Journal of Advance Research and Innovative Ideas in Education, Vol. 6, Issue 1, 2020
          </p>
          <p>
            Co-authored research exploring blockchain-driven proof-of-work mechanisms with Ashwin R and Dr.
            M. Senthil Kumar.
          </p>
        </div>
      </div>

      {/* Leadership & Volunteering */}
      <div style={{ marginBottom: 22 }}>
        <h3 style={{ marginBottom: 10 }}>Leadership &amp; Volunteering</h3>
        <div className="grid">
          <div className="card hover">
            <strong>Red Cross Service Day — MLK Jr. Day of Service</strong>
            <p className="muted">
              Assisted inventory management and logistics in Endicott, NY to support the American Red Cross’s
              emergency response readiness.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Service</span>
              <span className="badge">Logistics</span>
            </div>
          </div>
          <div className="card hover">
            <strong>Technical Events Coordinator — SRM Valliammai College</strong>
            <p className="muted">
              Organized department symposiums, managed speaker lineups, and drove student engagement for
              campus-wide technical events.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Leadership</span>
              <span className="badge">Event Management</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 style={{ marginBottom: 10 }}>Technical Skills &amp; Certifications</h3>
        <div className="card">
          <div style={{ display: 'grid', gap: 14 }}>
            <div>
              <strong>Languages:</strong>
              <p className="muted">Python, R, JavaScript, TypeScript, Go, Rust, C++, Java</p>
            </div>
            <div>
              <strong>Frameworks &amp; Libraries:</strong>
              <p className="muted">TensorFlow, Scikit-learn, Flask, Django, React, Express.js, Apache Spark</p>
            </div>
            <div>
              <strong>Platforms &amp; Tools:</strong>
              <p className="muted">Docker, Kubernetes, AWS, Azure, Git, Jira, Power BI, Tableau, Hugging Face, MongoDB, MySQL, Linux</p>
            </div>
            <div>
              <strong>Certifications:</strong>
              <p className="muted">AWS Certified Cloud Practitioner, Microsoft Azure Data Fundamentals, PCEP — Python Certified Entry-Level Programmer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <SectionHeader kicker="Contact" title="Let’s build something together" />
      <div className="grid">
        <div className="card hover">
          <p className="muted">
            Open to internships, research collaborations, and full-time opportunities in AI, ML engineering,
            and data-intensive product development.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 14, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="mailto:lpodalakuru@binghamton.edu">
              <Mail size={16} style={{ marginRight: 8 }} /> Email Me
            </a>
            <a className="btn" href="https://github.com/likith17" target="_blank" rel="noreferrer">
              <Github size={16} style={{ marginRight: 8 }} /> GitHub
            </a>
            <a className="btn" href="https://www.linkedin.com/in/likith-podalakuru" target="_blank" rel="noreferrer">
              <LinkedInIcon style={{ marginRight: 8 }} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer">© {new Date().getFullYear()} Likith Podalakuru</div>
    </div>
  </section>
)

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <Nav onToggleTheme={toggle} theme={theme} />
      <Hero />
      <About />
      <Education />
      <Portfolio />
      <Contact />
    </>
  )
}
