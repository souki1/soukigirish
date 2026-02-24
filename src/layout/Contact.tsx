import { Mail, Linkedin, Github } from "lucide-react"
import resumePdf from "../assets/soukigirishkumarsoftware_Resume (1).pdf"

export default function Contact() {
  return (
    <section id="contact">
      <footer className="footer-grid relative bg-gradient-to-b from-zinc-100 to-zinc-200 text-[#0a0a0b] overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto pt-20 pb-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-24 md:mb-32">
            <div>
              <p className="font-mono text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">
                / Contact
              </p>
              <p className="text-zinc-700 text-base md:text-lg max-w-md mb-6">
                Open to new opportunities. Get in touch for full-time roles or projects.
              </p>
              <a
                href="mailto:soukigirishkumar44@gmail.com"
                className="inline-block font-heading font-semibold text-sm px-6 py-3 rounded-lg border-2 border-[#0a0a0b] hover:bg-[#0a0a0b] hover:text-white transition-colors"
              >
                Get in touch
              </a>
              <div className="mt-6 space-y-2">
                <a
                  href="mailto:soukigirishkumar44@gmail.com"
                  className="flex items-center gap-2 text-zinc-600 hover:text-[#0a0a0b] text-sm"
                >
                  <Mail className="w-4 h-4" />
                  soukigirishkumar44@gmail.com
                </a>
           
             
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <div>
                <p className="font-mono text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">
                  / Social
                </p>
                <div className="flex flex-wrap gap-6">
                  <a
                    href="mailto:soukigirishkumar44@gmail.com"
                    className="font-heading font-medium text-sm hover:underline"
                  >
                    Email
                  </a>
                  <a
                    href="https://linkedin.com/in/soukigirishkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-heading font-medium text-sm hover:underline"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/SOUKI1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-heading font-medium text-sm hover:underline"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
              <div>
                <p className="font-mono text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">
                  / Resources
                </p>
                <div className="flex flex-wrap gap-6">
                  <a href="#works" className="font-heading font-medium text-sm hover:underline">
                    Works
                  </a>
                  <a href="#experience" className="font-heading font-medium text-sm hover:underline">
                    Experience
                  </a>
                  <a href={resumePdf} target="_blank" rel="noopener noreferrer" download="Girish_Kumar_Souki_Resume.pdf" className="font-heading font-medium text-sm hover:underline">
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 md:mb-20">
            <p className="footer-3d-text" aria-hidden="true">
              Developer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-zinc-300/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0a0a0b] flex items-center justify-center text-white font-heading font-bold text-sm">
                G
              </div>
              <span className="font-mono text-xs text-zinc-500 uppercase">Girish Kumar Souki</span>
            </div>
            <p className="font-mono text-xs text-zinc-500">
              © {new Date().getFullYear()}
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#home" className="font-mono text-xs text-zinc-600 hover:text-[#0a0a0b] transition-colors">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
