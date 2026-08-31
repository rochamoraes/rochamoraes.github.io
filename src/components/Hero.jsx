import profile from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__kicker">
            <span className="dot" /> Em constante evolução técnica
          </p>
          <h1>
            César Augusto <br />
            <span className="hero__highlight">da Rocha Moraes</span>
          </h1>
          <p className="hero__role">
            Senior QA Engineer <span className="hero__sep">·</span> Automação, APIs &amp; SQL{' '}
            <span className="hero__sep">·</span> Backend Engineering
          </p>
          <p className="hero__pitch">
            Mais de 15 anos de tecnologia evoluindo de Quality Engineering para Engenharia de
            Software com foco em Backend, unindo pensamento sistêmico, validações sólidas e
            arquitetura bem estruturada para construir sistemas confiáveis.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contato">
              Entrar em contato
            </a>
            <a
              className="btn btn--ghost"
              href="https://github.com/rochamoraes"
              target="_blank"
              rel="noreferrer"
            >
              Ver GitHub
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img src={profile} alt="Foto de César Augusto da Rocha Moraes" />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-number">15+</span>
            <span className="hero__badge-label">anos em tecnologia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
