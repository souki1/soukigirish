const certifications = [
  {
    title: "Databricks Certified Generative AI Engineer Associate",
    description: "Databricks certification in generative AI engineering. Girish Kumar Souki.",
    year: "Databricks",
    url: "https://credentials.databricks.com/aea3d589-ae60-471f-a3dd-53315fd48184#acc.dHXCiONf",
  },
  {
    title: "Databricks Badges",
    description: "Earned Databricks badges in data and AI workflows.",
    year: "Databricks",
    url: "https://credentials.databricks.com/aea3d589-ae60-471f-a3dd-53315fd48184#acc.dHXCiONf",
  },
]

export default function Awards() {
  return (
    <section id="awards" className="py-28 px-6 bg-[#0a0a0b]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase mb-4">
          Certifications
        </p>
        <p className="text-zinc-400 text-lg mb-4 max-w-xl">
          Professional certifications and credentials.
        </p>
        <h2 className="font-heading font-bold text-5xl md:text-6xl tracking-tight text-white mb-16">
          CERTIFICATIONS
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((a, i) => {
            const Card = a.url ? "a" : "div"
            return (
              <Card
                key={i}
                href={a.url}
                target={a.url ? "_blank" : undefined}
                rel={a.url ? "noopener noreferrer" : undefined}
                className="group p-8 rounded-2xl border border-zinc-800 bg-[#111113]/50 hover:border-zinc-600 hover:bg-[#111113] transition-all block no-underline"
              >
                <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {a.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {a.description}
                </p>
                <span className="font-mono text-xs text-[var(--accent)]">
                  {a.year}
                  {a.url && " → View credential"}
                </span>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
