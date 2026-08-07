import { experience } from "../data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
	return (
		<div>
			<h2 className="text-2xl font-semibold">Experience</h2>

			<div className="mt-6 grid gap-4">
				{experience.map((item) => (
					<ExperienceCard key={item.title} experience={item} />
				))}
			</div>
		</div>
	);
}
