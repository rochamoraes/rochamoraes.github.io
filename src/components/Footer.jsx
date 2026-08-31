export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} César Augusto da Rocha Moraes</span>
        <span className="footer__made">Construído com React + Vite</span>
      </div>
    </footer>
  )
}
