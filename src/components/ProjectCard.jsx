export default function ProjectCard({ project }) {
  return (
    <div className="card card-border bg-base-200 items-stretch">
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="opacity-80 grow-0">{project.description}</p>

        <div className="mt-2 flex flex-wrap gap-2 grow">
          {project.tech.map((t) => (
            <span key={t} className="badge badge-soft">
              {t}
            </span>
          ))}
        </div>

        <div className="card-actions mt-4 justify-end">
          {project.links.repo ? (
            <a
              className="btn btn-sm btn-soft btn-info"
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              className="btn btn-sm btn-success btn-soft"
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          ) : null}
          {project.links.product ? (
            <a
              className="btn btn-sm btn-success btn-soft"
              href={project.links.product}
              target="_blank"
              rel="noreferrer"
            >
              Product Page
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}
