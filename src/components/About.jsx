export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <p className="section__kicker">{'// sobre'}</p>
        <h2 className="section__title">Qualidade e engenharia caminhando juntas</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              Sou <strong>Senior QA Engineer</strong> com mais de 15 anos de experiência em
              tecnologia. Hoje lidero a qualidade de aplicações web, da estratégia de testes à
              validação em produção, e venho expandindo minha atuação para a Engenharia de
              Software com foco em Backend.
            </p>
            <p>
              Minha trajetória é multidisciplinar: passei por desenvolvimento e suporte, Business
              Intelligence, infraestrutura de TI, automação de processos e modelagem de dados.
              Essa bagagem me dá visão sistêmica sobre arquitetura, integrações, fluxo de dados e
              o impacto técnico das decisões de produto.
            </p>
            <p>
              Ao longo da carreira, atuei da definição de estratégias de teste e análise de
              requisitos a testes de integração, APIs, segurança, validação de dados e automação.
              Essa base em qualidade orienta a forma como desenvolvo software: com foco em
              robustez, escalabilidade e prevenção de falhas.
            </p>
            <p>
              Atualmente curso <strong>Engenharia de Software</strong> na Universidade Católica de
              Brasília e aprofundo minha atuação em desenvolvimento backend com{' '}
              <strong>Node.js</strong>, <strong>TypeScript</strong>, <strong>SQL</strong> e
              arquitetura de APIs. Antes, o MBA em IA, Data Science e Big Data no Ibmec reforçou
              minha visão orientada a dados.
            </p>
          </div>

          <aside className="about__card">
            <h3>🎯 Objetivo profissional</h3>
            <p>
              Unir Quality Engineering e Engenharia de Software em uma atuação integrada:
              liderando a qualidade e desenvolvendo sistemas backend escaláveis, resilientes e
              orientados ao negócio.
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
