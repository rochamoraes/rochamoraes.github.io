export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <p className="section__kicker">// sobre</p>
        <h2 className="section__title">Qualidade e engenharia caminhando juntas</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              Sou <strong>Senior QA Engineer</strong> com mais de 15 anos de experiência em
              tecnologia, atuando de forma estratégica em Quality Engineering e evoluindo minha
              atuação para Engenharia de Software com foco em Backend.
            </p>
            <p>
              Minha trajetória é multidisciplinar, com passagens por Business Intelligence,
              infraestrutura de TI, automação de processos e modelagem de dados, o que me dá
              visão sistêmica sobre arquitetura, integrações, fluxo de dados e impacto técnico
              das decisões de produto.
            </p>
            <p>
              Ao longo da carreira, atuei desde a definição de estratégias de teste e análise de
              requisitos até testes de integração, APIs, validação de dados e automação. Essa
              base sólida em qualidade me permite desenvolver soluções com foco em robustez,
              escalabilidade e prevenção de falhas.
            </p>
            <p>
              Atualmente aprofundo minha atuação em desenvolvimento backend utilizando{' '}
              <strong>Node.js</strong>, <strong>TypeScript</strong>, <strong>SQL</strong> e
              arquitetura de APIs, integrando princípios de engenharia de software, boas práticas
              de código e pensamento sistêmico à construção de sistemas confiáveis.
            </p>
          </div>

          <aside className="about__card">
            <h3>🎯 Objetivo profissional</h3>
            <p>
              Consolidar minha atuação como Software Engineer com forte base em Quality
              Engineering, contribuindo para sistemas escaláveis, resilientes e orientados ao
              negócio.
            </p>
            <div className="about__quote">
              “Sistemas bem projetados nascem de decisões técnicas conscientes, validações sólidas
              e arquitetura bem estruturada.”
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
