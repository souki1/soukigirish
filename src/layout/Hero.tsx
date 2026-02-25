import { useState, useEffect } from "react"
import HeroThreeBackground from "./HeroThreeBackground"
import resumePdf from "../assets/SoukiGirishKumar_Resume.pdf"

const NAME = "Girish Kumar Souki"

export default function Hero() {
  const [loading, setLoading] = useState(true)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const duration = 1800
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min(100, Math.floor((elapsed / duration) * 100))
      setPercent(p)
      if (p < 100) requestAnimationFrame(tick)
      else {
        setTimeout(() => setLoading(false), 200)
      }
    }
    requestAnimationFrame(tick)
  }, [])

  if (loading) {
    return (
      <section className="fixed inset-0 z-[100] bg-[#0a0a0b] flex flex-col items-center justify-center">
        <p className="font-mono text-sm text-zinc-500 tracking-widest uppercase mb-2">
          Loading
        </p>
        <p className="font-heading font-bold text-4xl text-white tabular-nums">
          {percent}%
        </p>
      </section>
    )
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 relative overflow-hidden"
    >
      <HeroThreeBackground />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <p className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase mb-6">
          Hello, I'm {NAME.split(" ")[0]}
        </p>
        <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-white mb-6">
          Software Engineer II<br />
          <span className="text-[var(--accent)]">Full-Stack & AI</span>
        </h1>
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#contact"
            className="inline-flex items-center font-heading font-semibold px-8 py-4 rounded-full bg-[var(--accent)] text-[#0a0a0b] hover:bg-cyan-300 transition-colors"
          >
            Connect
          </a>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            download="Girish_Kumar_Souki_Resume.pdf"
            className="inline-flex items-center font-heading font-semibold px-8 py-4 rounded-full border-2 border-zinc-600 text-white hover:border-white hover:bg-white/5 transition-all"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-6 right-6 flex justify-center z-10">
        <a
          href="#experience"
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors"
          aria-label="Scroll to experience"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <span className="block w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
            <span className="w-1 h-1.5 rounded-full bg-current animate-bounce" />
          </span>
        </a>
      </div>
    </section>
  )
}
