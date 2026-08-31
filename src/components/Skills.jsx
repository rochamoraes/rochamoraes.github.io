const TECH_FOCUS = [
  'Backend Development',
  'Node.js',
  'TypeScript',
  'APIs REST',
  'SQL',
  'Testes Automatizados',
  'Arquitetura de Software',
  'Segurança (OWASP, RBAC, IDOR)',
]

const SOFT_SKILLS = [
  'Comunicação técnica',
  'Pensamento analítico',
  'Visão sistêmica',
  'Proatividade',
  'Aprendizado contínuo',
]

export default function Skills() {
  return (
    <section id="foco" className="section section--alt">
      <div className="container">
        <p className="section__kicker">// foco técnico</p>
        <h2 className="section__title">Onde eu entrego mais valor</h2>

        <div className="skills__grid">
          <div className="skills__block">
            <h3>🔧 Foco técnico</h3>
            <ul className="skills__tags">
              {TECH_FOCUS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skills__block">
            <h3>🧩 Competências comportamentais</h3>
            <ul className="skills__tags skills__tags--muted">
              {SOFT_SKILLS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
