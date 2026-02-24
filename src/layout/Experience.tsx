const experience = [
  {
    period: "Jul 2025 – Present",
    role: "Software Engineer II",
    company: "Reliance IQ",
    location: "Chicago, IL",
    bullets: [
      "Design and implement scalable ingestion pipelines with Python and Flask to extract, validate, and structure high-volume web-based pricing and vendor data, reducing data onboarding time and improving downstream processing reliability.",
      "Applied LLM-based NLP for entity extraction, metadata tagging, and normalization to improve data quality and downstream usability.",
      "Build secure, production-ready backend APIs with Node.js, Python, and Git that enable internal intelligence platforms to handle requests faster and with higher reliability.",
      "Developed full-stack features using React and TypeScript to enable efficient data exploration, search, and filtering workflows.",
      "Partnered with product and design teams to ship dashboards and workflow improvements that increased platform adoption.",
      "Evaluated scraping frameworks, AI models, and third-party APIs using Git and Flask, which guided architecture choices that enhanced system scalability and made future maintenance easier.",
    ],
  },
  {
    period: "Jan 2023 – Aug 2023",
    role: "Software Developer",
    company: "Itvedant Education Pvt. Ltd.",
    location: "Hyderabad, India",
    bullets: [
      "Migrated a legacy monolithic application to a Spring Boot microservices architecture using Docker containers and adhering to 12-factor app principles, which reduced deployment time by 30% and enabled independent scaling of services.",
      "Designed and implemented RESTful APIs with Spring MVC and JPA, integrating them with MySQL databases, which delivered a modular backend that supported a 25% increase in concurrent users.",
      "Enabled asynchronous service communication using Apache Kafka to improve reliability and performance.",
      "Improved application observability by migrating logging from Log4j to Logback.",
      "Contributed to Agile Scrum delivery through sprint planning and issue tracking in Jira, helping the team complete sprints on schedule and reduce open defects by 20%.",
    ],
  },
  {
    period: "Sep 2021 – Nov 2022",
    role: "Trainee Software Engineer",
    company: "IvyCompTech",
    location: "Hyderabad, India",
    bullets: [
      "Developed backend services for a high-traffic online gaming platform using Java and Spring Boot, enabling the system to handle thousands of concurrent users.",
      "Built RESTful APIs with Spring Boot and JAX-RS in Java, delivering transactional and user-facing services that reduced response time for client requests.",
      "Supported the migration to microservices with Spring Boot, improving system modularity and scalability, which allowed independent deployment of new features.",
      "Used Dynatrace to monitor application performance, quickly pinpointing production issues and restoring service stability.",
      "Developed backend components with Spring MVC, Hibernate, and JDBC, applying dependency-injection patterns that simplified code maintenance and reduced bugs.",
    ],
  },
]

const education = [
  {
    period: "Aug 2023 – May 2025",
    degree: "Master of Science, Cybersecurity",
    institution: "Eastern Illinois University",
    location: "Charleston, IL",
  },
  {
    period: "Jun 2017 – Jun 2021",
    degree: "Bachelor of Science, Computer Science",
    institution: "Holy Mary Institute of Technology & Science",
    location: "Hyderabad, India",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#0a0a0b]">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase mb-4">
          Experience
        </p>
        <p className="text-zinc-400 text-lg mb-4 max-w-xl">
          A timeline of my professional journey, key roles, and contributions.
        </p>
        <h2 className="font-heading font-bold text-5xl md:text-6xl tracking-tight text-white mb-16">
          CAREER
        </h2>

        <div className="space-y-0">
          {experience.map((job, i) => (
            <div
              key={i}
              className="group border-b border-zinc-800/80 py-12 md:py-14 first:pt-0 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <span className="font-mono text-sm text-zinc-500 shrink-0 md:w-40">
                  {job.period}
                </span>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-2xl text-white mb-1">
                    {job.role}
                  </h3>
                  <p className="text-[var(--accent)] font-medium mb-1">{job.company}</p>
                  <p className="text-zinc-500 text-sm mb-6">{job.location}</p>
                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-zinc-400">
                        <span className="text-[var(--accent)] mt-1.5">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-white mt-20 mb-10">
          EDUCATION
        </h2>
        <div className="space-y-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 py-6 border-b border-zinc-800/80 last:border-0"
            >
              <span className="font-mono text-sm text-zinc-500 shrink-0 md:w-40">
                {edu.period}
              </span>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-xl text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-[var(--accent)] font-medium">{edu.institution}</p>
                <p className="text-zinc-500 text-sm">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
