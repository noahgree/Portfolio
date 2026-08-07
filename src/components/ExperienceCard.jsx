export default function ExperienceCard({ experience }) {
	return (
		<div className="card card-border bg-base-200">
			<div className="card-body grid gap-6 sm:grid-cols-[minmax(0,1fr)_12rem] sm:items-center">
				<div>
					<h3 className="card-title">{experience.title}</h3>
					{experience.company ? (
						<p className="text-sm opacity-70">{experience.company}</p>
					) : null}
					<p className="mt-4 opacity-80">{experience.description}</p>
					{experience.bullets?.length > 0 ? (
						<ul className="mt-3 list-disc space-y-1 pl-5 opacity-80">
							{experience.bullets.map((bullet) => (
								<li key={bullet}>{bullet}</li>
							))}
						</ul>
					) : null}

					<div className="mt-4 flex flex-wrap gap-2">
						{experience.tech.map((technology) => (
							<span key={technology} className="badge badge-soft">
								{technology}
							</span>
						))}
					</div>
					{Object.keys(experience.links).length > 0 ? (
						<div className="card-actions mt-4 justify-start">
							{experience.links.repo ? (
								<a
									className="btn btn-sm btn-soft btn-info"
									href={experience.links.repo}
									target="_blank"
									rel="noreferrer"
								>
									Repo
								</a>
							) : null}
							{experience.links.demo ? (
								<a
									className="btn btn-sm btn-success btn-soft"
									href={experience.links.demo}
									target="_blank"
									rel="noreferrer"
								>
									Demo
								</a>
							) : null}
							{experience.links.product ? (
								<a
									className="btn btn-sm btn-success btn-soft"
									href={experience.links.product}
									target="_blank"
									rel="noreferrer"
								>
									Site
								</a>
							) : null}
						</div>
					) : null}
				</div>

				{experience.imageSrc ? (
					<div className="order-first w-full sm:order-last sm:w-48 sm:justify-self-end">
						<div className="overflow-hidden rounded">
							<img
								src={experience.imageSrc}
								alt=""
								className="aspect-video w-full object-cover sm:aspect-square"
							/>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}
