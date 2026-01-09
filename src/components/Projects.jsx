import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-6 grid gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  )
}
