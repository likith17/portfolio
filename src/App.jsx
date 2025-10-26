import React, { useEffect, useState } from 'react'
import { Menu, X, ChevronDown, Moon, Sun, Github, Globe, Mail } from 'lucide-react'

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
    <path fill="currentColor" d="M100.3 448H7.4V149.5h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1-.5 53.8-.5s53.8 24.6 53.8 54.3c0 29.7-24.1 54.3-53.8 54.3zm394.2 339.9h-92.7V302.4c0-34.7-12.4-58.5-43.4-58.5-23.7 0-37.8 15.9-44 31.3-2.3 5.4-2.9 13-2.9 20.6V448H172.3s1.2-244.6 0-269.9h92.7v38.3c12.3-19 34.3-46.1 83.3-46.1 60.8 0 106.4 39.7 106.4 125V448z"/>
  </svg>
)

const Nav = ({ onToggleTheme, theme }) => {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <div className="nav-wrap">
      <div className="container nav">
        <a href="#home" className="brand">Likith</a>

        {/* Desktop nav */}
        <ul className="nav-list">
          <li className="nav-item"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}>
            <a className="nav-link" href="#about">
              About <ChevronDown className="caret" size={14}/>
            </a>
            {aboutOpen && (
              <div className="dropdown">
                <a href="#about" className="dropdown-item">Intro</a>
                <a href="#education" className="dropdown-item">Education</a>
              </div>
            )}
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>

        <div className="socials">
          <a className="icon-btn" href="https://github.com/likith17" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18}/>
          </a>
          <a className="icon-btn" href="https://www.linkedin.com/in/likith-podalakuru" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="mobile-only" style={{ display:'flex', gap:8 }}>
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <button className="icon-btn" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={18}/>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <>
          <div className="backdrop" onClick={() => setOpen(false)} />
          <div className="sheet">
            <div className="sheet-head">
              <span style={{fontWeight:800, color:'var(--accent)'}}>Menu</span>
              <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={18}/>
              </button>
            </div>
            <div className="sheet-body">
              <a className="sheet-link" href="#about" onClick={() => setOpen(false)}>About</a>
               {/* <div className="acc">
                <button className="acc-head" onClick={() => setAboutOpen((v)=>!v)}>
                  <span>About subsections</span>
                  <ChevronDown className={`chev ${aboutOpen ? 'rot':''}`} size={16}/>
                </button>
                {aboutOpen && (
                  <div className="acc-panel">
                    <a className="sheet-link" href="#about" onClick={() => setOpen(false)}>Intro</a>
                    <a className="sheet-link" href="#education" onClick={() => setOpen(false)}>Education</a>
                  </div> 
                )} 
              </div> */}

              <a className="sheet-link" href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
              <a className="sheet-link" href="#contact" onClick={() => setOpen(false)}>Contact</a>
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
          <h1 style={{fontSize:'clamp(32px, 5vw, 56px)'}}>Hi, I’m Likith</h1>
          <p className="muted" style={{maxWidth:720}}>
            ML Engineer • Full-stack tinkerer • Data storyteller. I design, build, and ship
            intelligent systems that feel fast, trustworthy, and delightful.
          </p>
          <div style={{display:'flex', gap:12, marginTop:16}}>
            <a href="#portfolio" className="btn btn-primary">See Portfolio</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
        <div className="card hover">
          <h3>Now</h3>
          <p className="muted">Exploring LLM tool-use, evals, and compact inference.</p>
          <div style={{marginTop:12}}>
            <span className="badge">Python</span>
            <span className="badge">React</span>
            <span className="badge">LLM</span>
            <span className="badge">MLOps</span>
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
        title="Short intro statement"
        sub="Curious by default. I like turning messy datasets into crisp products."
      />
      <div className="grid">
        <div className="card hover">
          <h3>What I do</h3>
          <p className="muted">
            I build ML-backed features end-to-end — from data to deployment — with a strong eye for UX.
          </p>
        </div>
        <div className="card hover">
          <h3>What I value</h3>
          <p className="muted">
            Clear metrics, tight feedback loops, and shipping small/fast toward big wins.
          </p>
        </div>
        <div className="card hover">
          <h3>Toolbox</h3>
          <p className="muted">Python, PyTorch, scikit-learn, FastAPI, React, Vite, Postgres, Docker.</p>
        </div>
      </div>
    </div>
  </section>
)

const Education = () => (
  <section id="education" className="section">
    <div className="container">
      <SectionHeader kicker="Education" title="Where I learned the craft" />
      <div className="timeline">
        <div className="card line-left hover">
          <h3>Degree • University</h3>
          <p className="muted">Specialization in ML / AI • YYYY – YYYY</p>
          <p>Key work: Thesis on XYZ, research assistant in ABC lab.</p>
        </div>
      </div>
    </div>
  </section>
)

const Portfolio = () => (
  <section id="portfolio" className="section">
    <div className="container">
      <SectionHeader
        kicker="Portfolio"
        title="Work, projects, paper & contributions"
        sub="A compact overview with links to repos and write-ups."
      />

      {/* Work Experience */}
      <div style={{marginBottom:22}}>
        <h3 style={{marginBottom:10}}>Work Experience</h3>
        <div className="timeline">
          <div className="card line-left hover">
            <div style={{display:'flex', justifyContent:'space-between', gap:12}}>
              <strong>ML Engineer • Company</strong>
              <span className="muted">YYYY – Present</span>
            </div>
            <ul style={{margin:'8px 0 0 18px'}}>
              <li>Designed & shipped a ranking model improving CTR by 9.2%.</li>
              <li>Productionized with FastAPI + Docker + CI, 0-downtime rollouts.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div style={{marginBottom:22}}>
        <h3 style={{marginBottom:10}}>Projects</h3>
        <div className="grid">
          <div className="card hover">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <strong>Smart Annotator</strong>
              <a className="icon-btn" href="https://github.com/yourusername/smart-annotator" target="_blank" rel="noreferrer" aria-label="Open repo">
                <Github size={18}/>
              </a>
            </div>
            <p className="muted">Interactive active-learning annotation with on-the-fly suggestions.</p>
            <div style={{marginTop:8}}>
              <span className="badge">React</span>
              <span className="badge">FastAPI</span>
              <span className="badge">Active Learning</span>
            </div>
          </div>
          <div className="card hover">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <strong>LLM Evals Kit</strong>
              <a className="icon-btn" href="https://github.com/yourusername/llm-evals-kit" target="_blank" rel="noreferrer" aria-label="Open repo">
                <Github size={18}/>
              </a>
            </div>
            <p className="muted">Lightweight harness for reproducible LLM evaluation pipelines.</p>
            <div style={{marginTop:8}}>
              <span className="badge">Python</span>
              <span className="badge">LLM</span>
              <span className="badge">Metrics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Published Paper */}
      <div style={{marginBottom:22}}>
        <h3 style={{marginBottom:10}}>Published Paper</h3>
        <div className="card hover">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <strong>Title of Your Paper</strong>
            <a className="btn" href="https://doi.org/your-doi-or-arxiv" target="_blank" rel="noreferrer">Read</a>
          </div>
          <p className="muted" style={{marginTop:8}}>Conference/Journal • Year • Co-authors</p>
          <p>One-line summary that sells the idea and your role.</p>
        </div>
      </div>

      {/* Contributions */}
      <div style={{marginBottom:22}}>
        <h3 style={{marginBottom:10}}>Contributions</h3>
        <div className="grid">
          <div className="card hover">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <strong>Open-source</strong>
              <a className="icon-btn" href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                <Github size={18}/>
              </a>
            </div>
            <p className="muted">Issues, PRs, small libs. Highlights linked in repos above.</p>
          </div>
          <div className="card hover">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <strong>Kaggle</strong>
              <a className="icon-btn" href="https://www.kaggle.com/yourprofile" target="_blank" rel="noreferrer">
                <Globe size={18}/>
              </a>
            </div>
            <p className="muted">Notebooks + comps. Focus on clean features & baselines.</p>
          </div>
          <div className="card hover">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <strong>X / Blog</strong>
              <a className="icon-btn" href="https://x.com/yourhandle" target="_blank" rel="noreferrer">
                <Globe size={18}/>
              </a>
            </div>
            <p className="muted">Short write-ups on experiments, learnings, and visuals.</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 style={{marginBottom:10}}>Skills</h3>
        <div className="card">
          {[
            'Python','PyTorch','scikit-learn','Pandas','FastAPI',
            'React','Vite','Postgres','Docker','GitHub Actions',
            'LangChain','OpenAI','Weights & Biases'
          ].map(s => <span key={s} className="badge">{s}</span>)}
        </div>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <SectionHeader kicker="Contact" title="Let’s build something" />
      <div className="grid">
        <div className="card hover">
          <p className="muted">Open to collaboration, contract, or full-time opportunities.</p>
          <div style={{display:'flex', gap:12, marginTop:14}}>
            <a className="btn btn-primary" href="mailto:youremail@example.com">
              <Mail size={16} style={{marginRight:8}}/> Email me
            </a>
            <a className="btn" href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <Github size={16} style={{marginRight:8}}/> GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="footer">© {new Date().getFullYear()} Likith</div>
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
