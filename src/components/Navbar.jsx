const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          gaurav<span className="brand-accent">.</span>sharma
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="mainNav">
          <ul className="navbar-nav align-items-lg-center">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="d-flex ms-lg-2 mt-3 mt-lg-0">
            <a
              className="social-icon"
              href="https://github.com/Gauravsharma-eng"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              className="social-icon"
              href="https://linkedin.com/in/gaurav-sharma-aa584a257/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
