import { useEffect, useState } from 'react'

export default function Loader({ active }) {
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    if (!active) {
      const timeout = setTimeout(() => setMounted(false), 500)
      return () => clearTimeout(timeout)
    }
  }, [active])

  if (!mounted) return null

  return (
    <div className={`loader ${active ? '' : 'loader--hidden'}`} aria-hidden={!active}>
      <div className="loader__inner">
        <div className="loader__mark">CM</div>
        <div className="loader__bar">
          <span />
        </div>
        <p className="loader__text">carregando portfólio</p>
      </div>
    </div>
  )
}
