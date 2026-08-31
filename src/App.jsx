import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const MIN_LOADER_MS = 1200

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const minDelay = new Promise((resolve) => setTimeout(resolve, MIN_LOADER_MS))
    const pageReady =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }))

    Promise.all([minDelay, pageReady]).then(() => setLoading(false))
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
  }, [loading])

  return (
    <>
      <Loader active={loading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
