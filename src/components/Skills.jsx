const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: 'bi-code-slash',
    skills: ['Python', 'JavaScript', 'SQL (MySQL)'],
  },
  {
    title: 'AI / Machine Learning',
    icon: 'bi-cpu',
    skills: ['NLP', 'Deep Learning', 'CNN', 'ResNet50', 'Computer Vision', 'OpenCV', 'TensorFlow'],
  },
  {
    title: 'Generative AI',
    icon: 'bi-stars',
    skills: ['RAG', 'LangChain', 'Ollama (LLaMA3)', 'Hugging Face', 'Prompt Engineering'],
  },
  {
    title: 'Databases & Tools',
    icon: 'bi-database',
    skills: ['FAISS', 'Vector Embeddings', 'Streamlit', 'Flask', 'GitHub', 'HF Spaces'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-elevated">
      <div className="container">
        <div data-aos="fade-up">
          <div className="section-eyebrow">sys.skills()</div>
          <h2 className="section-title">Technical skills</h2>
          <p className="section-sub">
            The languages, models, and tools I reach for when turning an idea into a working
            AI system.
          </p>
        </div>

        <div className="row g-4">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div className="col-md-6 col-lg-3" key={cat.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="skill-category">
                <div className="skill-category-title">
                  <i className={`bi ${cat.icon} me-2`}></i>{cat.title}
                </div>
                <div>
                  {cat.skills.map((skill) => (
                    <span className="skill-badge" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
