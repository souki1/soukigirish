const works = [
  {
    num: "01",
    title: "AI-Powered Secure Data Intelligence Platform",
    description:
      "Designed and built an end-to-end AI-driven system that crawls, extracts, validates, and structures unstructured web data using LLMs. Implemented secure ingestion workflows, entity validation logic, normalized data models, role-based access controls, and secure APIs.",
    tags: ["Python", "LLMs", "Flask", "React", "PostgreSQL"],
  },
  {
    num: "02",
    title: "LLM-Enhanced Biometric Security System",
    description:
      "Developed a fingerprint recognition pipeline using LLM-assisted feature analysis and intelligent data augmentation. Built Python evaluation workflows to improve matching robustness against noisy biometric inputs.",
    tags: ["Python", "LLMs", "NLP", "Biometrics"],
  },
  {
    num: "03",
    title: "Enterprise Security Architecture (Capstone)",
    description:
      "Designed and implemented an enterprise-grade security architecture in Eve-NG, including firewall policies, VPN configuration, network segmentation, NAT, and cloud server integration using defense-in-depth principles.",
    tags: ["Eve-NG", "Cybersecurity", "Network Security"],
  },
]

export default function Works() {
  return (
    <section id="works" className="py-28 px-6 bg-[#111113]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase mb-4">
          Featured
        </p>
        <p className="text-zinc-400 text-lg mb-4 max-w-xl">
          Projects and research showcasing full-stack development, AI, and security.
        </p>
        <h2 className="font-heading font-bold text-5xl md:text-6xl tracking-tight text-white mb-20">
          WORKS
        </h2>

        <div className="space-y-6">
          {works.map((w) => (
            <div
              key={w.num}
              className="block group p-8 md:p-10 rounded-2xl border border-zinc-800 bg-[#0a0a0b]/50 hover:border-[var(--accent)]/40 hover:bg-[var(--accent-dim)] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <span className="font-mono text-sm text-[var(--accent)] block mb-2">
                    {w.num}
                  </span>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {w.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base max-w-2xl">
                    {w.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {w.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
