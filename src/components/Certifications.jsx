const CERTS = [
  { title: 'Data Analytics', issuer: 'Accenture' },
  { title: 'Data Analytics', issuer: 'Deloitte' },
  { title: 'Data Visualization', issuer: 'Tata Group' },
  { title: 'Introduction to Data Science', issuer: 'Cisco' },
]

const LANGUAGES = [
  { name: 'English', level: 'Fluent', pct: 90 },
  { name: 'Hindi', level: 'Native', pct: 100 },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7" data-aos="fade-up">
            <div className="section-eyebrow">sys.certifications()</div>
            <h2 className="section-title">Certifications</h2>
            <p className="section-sub">Structured, job-simulation programs I've completed alongside coursework.</p>

            <div className="card-surface p-4">
              {CERTS.map((cert) => (
                <div className="cert-item" key={`${cert.title}-${cert.issuer}`}>
                  <i className="bi bi-patch-check-fill cert-icon"></i>
                  <div>
                    <div className="fw-semibold">{cert.title}</div>
                    <div className="text-muted" style={{ fontSize: '0.88rem' }}>{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="150">
            <div className="section-eyebrow">sys.languages()</div>
            <h2 className="section-title">Languages</h2>
            <p className="section-sub">Comfortable communicating and collaborating in both.</p>

            <div className="card-surface p-4">
              {LANGUAGES.map((lang) => (
                <div className="mb-4" key={lang.name}>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">{lang.name}</span>
                    <span className="tag-chip">{lang.level}</span>
                  </div>
                  <div className="lang-bar-track">
                    <div className="lang-bar-fill" style={{ width: `${lang.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
