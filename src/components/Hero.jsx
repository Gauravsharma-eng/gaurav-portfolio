export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="container position-relative">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="hero-kicker">
              <span className="status-dot"></span>
              open to ML / AI engineering roles
            </div>
            <h1>
              Hi, I'm <span className="highlight">Gaurav Sharma</span>
            </h1>
            <p className="role-line">Machine Learning Engineer · AI/LLM Specialist</p>
            <p className="summary">
              I build applied NLP and Generative AI systems — from retrieval-augmented
              chatbots to computer-vision pipelines — turning research-grade models into
              real, usable Python applications.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary-glow">View Projects</a>
              <a href="/Gaurav_Sharma_Resume.pdf" download="Gaurav_Sharma_Resume.pdf" className="btn-outline-glow">
  <i className="bi bi-download me-2"></i>Download Resume
</a>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="150">
            <div className="profile-image-container">
              <img src="/profile.jpg" alt="Gaurav Sharma - Profile" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
