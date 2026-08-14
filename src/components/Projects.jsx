const PROJECTS = [
  {
    icon: 'bi-chat-square-text',
    title: 'DocuMind AI — RAG-Powered PDF Chatbot',
    description:
      'A retrieval-augmented chatbot that answers questions over your own PDFs using a local LLaMA3 model, FAISS vector search, and a Streamlit front end.',
    tags: ['Ollama (LLaMA3)', 'FAISS', 'Streamlit', 'Hugging Face'],
    github: 'https://github.com/Gauravsharma-eng',
  },
  {
    icon: 'bi-file-earmark-person',
    title: 'AI-Powered Resume Screening System',
    description:
      'Ranks and shortlists resumes against a job description using TF-IDF vectorization and cosine similarity, cutting manual screening time.',
    tags: ['TF-IDF', 'Cosine Similarity', 'NLP'],
    github: 'https://github.com/Gauravsharma-eng/ai-powered-resume-screen-system.git',
  },
  {
    icon: 'bi-camera-video',
    title: 'Deepfake Video Detection System',
    description:
      'A ResNet50-based deep learning model that flags manipulated video frames in real time, built with PyTorch and OpenCV.',
    tags: ['ResNet50', 'PyTorch', 'Deep Learning', 'OpenCV'],
    github: 'https://github.com/Gauravsharma-eng',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-elevated">
      <div className="container">
        <div data-aos="fade-up">
          <div className="section-eyebrow">sys.projects()</div>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-sub">
            A few things I've shipped — spanning generative AI, classical NLP, and computer vision.
          </p>
        </div>

        <div className="row g-4">
          {PROJECTS.map((project, i) => (
            <div className="col-md-6 col-lg-4" key={project.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="card-surface project-card">
                <div className="project-icon">
                  <i className={`bi ${project.icon}`}></i>
                </div>
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <div>
                  {project.tags.map((tag) => (
                    <span className="tag-chip me-2 mb-2" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
