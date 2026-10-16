const QA_FOCUS = [
  'Estratégia de testes',
  'Testes funcionais e exploratórios',
  'Testes de APIs e integração',
  'Testes Automatizados',
  'Segurança (OWASP, RBAC, IDOR)',
  'Validação de dados',
  'Critérios de aceite e rastreabilidade',
  'Análise de causa raiz',
]

const ENGINEERING_FOCUS = [
  'Backend Development',
  'Node.js',
  'TypeScript',
  'APIs REST',
  'SQL',
  'Arquitetura de Software',
  'Modelagem de dados',
]

const SOFT_SKILLS = [
  'Liderança em qualidade',
  'Comunicação técnica',
  'Pensamento analítico',
  'Visão sistêmica',
  'Colaboração com times multidisciplinares',
  'Proatividade',
  'Aprendizado contínuo',
]

export default function Skills() {
  return (
    <section id="foco" className="section section--alt">
      <div className="container">
        <p className="section__kicker">{'// foco técnico'}</p>
        <h2 className="section__title">Onde eu entrego mais valor</h2>
        <p className="skills__lead">
          Uno Quality Engineering e Engenharia de Software: da estratégia de testes e da
          segurança ao desenvolvimento backend, sempre com foco em sistemas confiáveis.
        </p>

        <div className="skills__grid">
          <div className="skills__block">
            <h3>🧪 Quality Engineering</h3>
            <ul className="skills__tags">
              {QA_FOCUS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skills__block">
            <h3>🔧 Backend &amp; Engenharia</h3>
            <ul className="skills__tags">
              {ENGINEERING_FOCUS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skills__block skills__block--wide">
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
