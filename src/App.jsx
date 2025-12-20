import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Education from "./components/Education"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <section id="top">
          <Hero />
        </section>

        <section id="education" className="mx-auto max-w-5xl px-4 py-12">
          <Education />
        </section>

        <section id="projects" className="mx-auto max-w-5xl px-4 py-12">
          <Projects />
        </section>

        <section id="skills" className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p className="mt-2 opacity-80">...</p>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 opacity-80">...</p>
        </section>
      </main>
    </div>
  )
}

export default App
