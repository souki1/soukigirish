import Header from "./layout/Header"
import Hero from "./layout/Hero"
import Experience from "./layout/Experience"
import Skills from "./layout/Skills"
import CybersecurityAI from "./layout/CybersecurityAI"
import Awards from "./layout/Awards"
import Works from "./layout/Works"
import Contact from "./layout/Contact"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CybersecurityAI />
      <Experience />
      <Skills />
      <Awards />
      <Works />
      <Contact />
    </>
  )
}
