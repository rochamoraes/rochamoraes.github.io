export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} César Augusto da Rocha Moraes · Senior QA Engineer</span>
        <span className="footer__made">
          Construído com React + Vite ·{' '}
          <a
            href="https://github.com/rochamoraes/rochamoraes.github.io"
            target="_blank"
            rel="noreferrer"
          >
            código no GitHub
          </a>
        </span>
      </div>
    </footer>
  )
}
