export default function ProjectCard({ project }) {
  const imgSrc =
    project.imageSrc ??
    `https://picsum.photos/seed/${encodeURIComponent(project.title)}/600/600`

  const imgAlt = `${project.title} preview`

  return (
    <div className="card card-side card-border bg-base-200">
      <figure className="w-28 shrink-0 sm:w-40">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </figure>

      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="opacity-80">{project.description}</p>

        <div className="mt-2 flex flex-wrap gap-2">
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
        </div>
      </div>
    </div>
  )
}
