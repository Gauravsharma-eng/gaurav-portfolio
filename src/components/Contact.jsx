import { useState } from 'react'

const CONTACT_INFO = [
  { icon: 'bi-envelope', label: 'Email', value: 'gauravsharma27390@gmail.com', href: 'mailto:gauravsharma27390@gmail.com' },
  { icon: 'bi-telephone', label: 'Phone', value: '+91-7489121989', href: 'tel:+917489121989' },
  { icon: 'bi-linkedin', label: 'LinkedIn', value: 'gaurav-sharma-aa584a257', href: 'https://linkedin.com/in/gaurav-sharma-aa584a257/' },
  { icon: 'bi-github', label: 'GitHub', value: 'Gauravsharma-eng', href: 'https://github.com/Gauravsharma-eng' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: this is a front-end-only demo submit handler.
    // Wire this up to a real endpoint (e.g. Formspree, EmailJS, or your
    // own API route) before deploying to production.
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="bg-elevated">
      <div className="container">
        <div data-aos="fade-up">
          <div className="section-eyebrow">sys.contact()</div>
          <h2 className="section-title">Let's build something</h2>
          <p className="section-sub">
            Open to ML engineering, AI/LLM, and applied research roles — feel free to reach out.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-panel h-100">
              {CONTACT_INFO.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-info-row text-decoration-none"
                >
                  <span className="contact-info-icon"><i className={`bi ${item.icon}`}></i></span>
                  <span>
                    <span className="d-block text-muted" style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>{item.label}</span>
                    <span className="d-block" style={{ color: 'var(--text)' }}>{item.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
            <form className="contact-panel" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label text-muted small">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    className="form-control form-control-dark"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label text-muted small">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    className="form-control form-control-dark"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label text-muted small">Message</label>
                  <textarea
                    id="message" name="message" rows="5" required
                    className="form-control form-control-dark"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-12 d-flex align-items-center gap-3">
                  <button type="submit" className="btn-primary-glow">
                    <i className="bi bi-send me-2"></i>Send message
                  </button>
                  {status === 'sent' && (
                    <span style={{ color: 'var(--success)', fontSize: '0.9rem' }}>
                      <i className="bi bi-check-circle me-1"></i>Message ready — connect a backend to deliver it.
                    </span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
