export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-7" data-aos="fade-up">
            <div className="section-eyebrow">sys.about()</div>
            <h2 className="section-title">A little about my background</h2>
            <p className="section-sub">
              Aspiring software developer and AI &amp; machine learning enthusiast, focused
              on building intelligent systems and real-time web applications.
            </p>

            <div className="about-panel">
              <div className="edu-block">
                <p className="tag-chip mb-2">Education</p>
                <h5 className="mb-1">B.Tech, Computer Science Engineering</h5>
                <p className="text-darker mb-1">
                  Vikrant Institute of Technology &amp; Management, Gwalior
                </p>
                <p className="text-darker mb-0" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  2022 – 2026 &nbsp;·&nbsp; CGPA: 7.31
                </p>
              </div>

              <hr style={{ borderColor: 'var(--border)', margin: '1.8rem 0' }} />

              <p className="text-darker mb-0">
                I'm passionate about developing intelligent systems and real-time web
                applications using Python and machine learning — with a particular interest
                in retrieval-augmented generation, computer vision, and shipping models as
                usable, production-facing tools rather than notebooks.
              </p>
            </div>
          </div>

          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="150">
            <div className="row g-3 h-100 align-content-start">
              <div className="col-6">
                <div className="card-surface p-4 text-center h-100 d-flex flex-column justify-content-center">
                  <div className="about-stat">3+</div>
                  <div className="about-stat-label">flagship projects</div>
                </div>
              </div>
              <div className="col-6">
                <div className="card-surface p-4 text-center h-100 d-flex flex-column justify-content-center">
                  <div className="about-stat">4</div>
                  <div className="about-stat-label">certifications</div>
                </div>
              </div>
              <div className="col-6">
                <div className="card-surface p-4 text-center h-100 d-flex flex-column justify-content-center">
                  <div className="about-stat">2026</div>
                  <div className="about-stat-label">graduating</div>
                </div>
              </div>
              <div className="col-6">
                <div className="card-surface p-4 text-center h-100 d-flex flex-column justify-content-center">
                  <div className="about-stat">7.31</div>
                  <div className="about-stat-label">cgpa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
