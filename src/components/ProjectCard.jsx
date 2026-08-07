export default function ProjectCard({ project }) {
	return (
		<div className="card card-border bg-base-200 items-stretch">
			<div className="card-body">
				<h3 className="card-title">{project.title}</h3>
				<p className="opacity-80 grow-0">{project.description}</p>
				{project.bullets?.length > 0 ? (
					<ul className="list-disc space-y-1 pl-5 opacity-80">
						{project.bullets.map((bullet) => (
							<li key={bullet}>{bullet}</li>
						))}
					</ul>
				) : null}

				<div className="mt-2 flex flex-wrap gap-2 grow">
					{project.tech.map((t) => (
						<span key={t} className="badge badge-soft">
							{t}
						</span>
					))}
				</div>
				{Object.keys(project.links).length > 0 ? (
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
								Site
							</a>
						) : null}
					</div>
				) : null}
			</div>
		</div>
	);
}
