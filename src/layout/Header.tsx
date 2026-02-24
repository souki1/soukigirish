import { useState } from "react"

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Cyber & AI", href: "#cyber" },
  { label: "Awards", href: "#awards" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-heading font-bold text-xl tracking-tight text-white">
          Girish
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors tracking-wide"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex font-heading text-sm font-semibold px-5 py-2.5 rounded-full border border-zinc-600 text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            Connect
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`w-5 h-0.5 bg-current transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-current transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-800/50 bg-[#0a0a0b] px-6 py-6 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="text-base font-medium text-[var(--accent)]" onClick={() => setOpen(false)}>
            Connect
          </a>
        </div>
      )}
    </header>
  )
}
