const skills = [
  "Python",
  "TypeScript",
  "JavaScript",
  "Java",
  "React",
  "Angular",
  "Node.js",
  "Flask",
  "Spring Boot",
  "PostgreSQL",
  "MongoDB",
  "GCP",
  "LLMs",
  "NLP",
  "REST APIs",
  "Tailwind",
  "Git",
  "Jenkins",
  "Databricks",
  "AI"
]

export default function Skills() {
  const row = [...skills, ...skills, ...skills]
  return (
    <section id="skills" className="py-28 px-6 bg-[#111113] overflow-hidden">
      <div className="max-w-4xl mx-auto mb-20">
        <p className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase mb-4">
          Arsenal
        </p>
        <p className="text-zinc-400 text-lg mb-4 max-w-xl">
          Languages, frameworks, and tools I use to build scalable full-stack and AI-enabled systems.
        </p>
        <h2 className="font-heading font-bold text-5xl md:text-6xl tracking-tight text-white">
          SKILLS
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
          {row.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="font-heading font-bold text-2xl md:text-3xl text-zinc-600 hover:text-[var(--accent)] transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
