import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'foco', label: 'Foco técnico' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#top" className="navbar__brand" onClick={handleNavClick}>
          <span className="navbar__brand-mark">CM</span>
          <span className="navbar__brand-text">rocha<span>moraes</span></span>
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className="navbar__cta" onClick={handleNavClick}>
            Vamos conversar
          </a>
        </nav>

        <button
          className={`navbar__toggle ${open ? 'navbar__toggle--open' : ''}`}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
