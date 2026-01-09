import Hero from "../components/Hero"
import Education from "../components/Education"
import Projects from "../components/Projects"

export default function Home() {
   return (
      <>
         <main>
            <section id="top">
               <Hero />
            </section>

            <section id="education" className="mx-auto max-w-4xl px-4 py-12">
               <Education />
            </section>

            <section id="projects" className="mx-auto max-w-4xl px-4 py-6">
               <Projects />
            </section>
         </main>
      </>
   );
}
