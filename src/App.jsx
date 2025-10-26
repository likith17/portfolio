import { useEffect, useMemo, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Cpu,
  Database,
  Brain,
  Monitor,
  Headphones,
  HardDrive,
  MemoryStick as Chip,
  MousePointer2,
  Sun,
  Moon,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

// ----- Theme hook (persisted + system preference) -----
function useTheme() {
  const getInitial = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    // put the theme on <html>
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // keep in sync if user changes OS theme
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      const saved = localStorage.getItem("theme");
      if (!saved) setTheme(e.matches ? "dark" : "light");
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}

// ----- Simple Section component with consistent spacing -----
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="h2">{title}</h2>
          {subtitle && <p className="muted">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const { theme, toggle } = useTheme();

  // Active nav highlight
  const sections = useMemo(
    () => [
      { id: "home", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  return (
    <div className="app">
      {/* Background */}
      <div aria-hidden className="bg-layers">
        <div className="bg-gradient" />
        <div className="bg-noise" />
        <div className="bg-vignette" />
      </div>

      {/* Header (sticky) */}
      <header className="site-header">
        <div className="container row">
          <a className="brand" href="#home">Likith.dev</a>
          <nav className="nav">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={active === s.id ? "nav-link active" : "nav-link"}
              >
                {s.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="icon-btn"
              aria-label="Toggle color theme"
              onClick={toggle}
              title="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              className="icon-btn"
              href="mailto:likith@example.com"
              aria-label="Email"
              title="Email"
            >
              <Mail size={18} />
            </a>
            <a
              className="icon-btn"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              className="icon-btn"
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero / About */}
      <Section
        id="home"
        title="Likith Podalakuru"
        subtitle="Developer • Data Engineer • ML Enthusiast"
      >
        <div className="glass hero">
          <p className="lead">
            I craft AI-driven web systems, data automation pipelines, and scalable apps
            using Python, Node, and modern cloud tooling—blending precision with creativity.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">
              See Projects <ChevronRight size={18} />
            </a>
            <a className="btn ghost" href="#contact">
              Contact <Mail size={18} />
            </a>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid">
          <div className="tile glass">
            <Code className="tile-icon" />
            <h3 className="h4">Apps</h3>
            <p className="muted">React • Node • FastAPI</p>
          </div>
          <div className="tile glass">
            <Database className="tile-icon" />
            <h3 className="h4">Infra</h3>
            <p className="muted">Postgres • Redis • S3</p>
          </div>
          <div className="tile glass">
            <Cpu className="tile-icon" />
            <h3 className="h4">Pipelines</h3>
            <p className="muted">ETL • Airflow • dbt • Docker</p>
          </div>
          <div className="tile glass">
            <Brain className="tile-icon" />
            <h3 className="h4">AI</h3>
            <p className="muted">LLMs • Retrieval • Agents</p>
          </div>
        </div>

        {/* Bonus “storefront” tile set in same theme */}
        <div className="grid mt">
          <div className="tile glass small">
            <Monitor className="tile-icon" />
            <div>Monitors</div>
          </div>
          <div className="tile glass small">
            <Headphones className="tile-icon" />
            <div>Headsets</div>
          </div>
          <div className="tile glass small">
            <HardDrive className="tile-icon" />
            <div>Storage</div>
          </div>
          <div className="tile glass small">
            <Chip className="tile-icon" />
            <div>Processors</div>
          </div>
          <div className="tile glass small">
            <MousePointer2 className="tile-icon" />
            <div>Mouse</div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        title="Projects"
        subtitle="Selected works. Clean, fast, and pragmatic."
      >
        <div className="grid cards">
          {[
            {
              name: "Hashassin (Rust)",
              desc:
                "Blazing-fast content hashing utility with multi-threaded I/O and zero-copy buffers.",
              href: "#",
            },
            {
              name: "Django Survey",
              desc:
                "Opinionated survey engine with analytics and exportable reports.",
              href: "#",
            },
            {
              name: "Loan Approval ML",
              desc:
                "End-to-end pipeline: feature store, model registry, and live scoring API.",
              href: "#",
            },
            {
              name: "Demand Forecasting",
              desc:
                "dbt + Airflow pipeline with Prophet/XGBoost ensembles and drift monitoring.",
              href: "#",
            },
          ].map((p) => (
            <a key={p.name} className="card glass" href={p.href}>
              <div className="card-head">
                <h3 className="h4">{p.name}</h3>
                <ExternalLink size={16} />
              </div>
              <p className="muted">{p.desc}</p>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get in touch">
        <div className="glass contact">
          <p className="muted">
            Got a problem to solve or an idea to ship? I’m open to freelance and
            full-time roles.
          </p>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const data = Object.fromEntries(new FormData(e.currentTarget));
              alert(
                `Thanks! I’ll reply soon.\n\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
              );
              e.currentTarget.reset();
            }}
          >
            <div className="row gap">
              <input name="name" placeholder="Your name" required />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me a bit about your project…"
              required
            />
            <button className="btn primary" type="submit">
              Send Message <Mail size={18} />
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container row spread">
          <span className="muted">© {new Date().getFullYear()} Likith</span>
          <div className="row gap">
            <a className="icon-btn" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18}/></a>
            <a className="icon-btn" href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
            <a className="icon-btn" href="mailto:likith@example.com"><Mail size={18}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
