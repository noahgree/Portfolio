export default function ProjectCard({ project }) {
  return (
    <div className="card card-border bg-base-200">
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="opacity-80">{project.description}</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="badge badge-outline">
              {t}
            </span>
          ))}
        </div>

        <div className="card-actions justify-end mt-4">
          {project.links.repo ? (
            <a className="btn btn-sm btn-soft" href={project.links.repo} target="_blank" rel="noreferrer">
              Repo
            </a>
          ) : null}
          {project.links.demo ? (
            <a className="btn btn-sm btn-primary" href={project.links.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}
