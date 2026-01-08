import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-2 opacity-80">Things I've been working on.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  )
}
