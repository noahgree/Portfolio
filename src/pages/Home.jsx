import Hero from "../components/Hero";
import Education from "../components/Education";
import Projects from "../components/Projects";
import BodyClassHelper from "../components/BodyClassHelper";

export default function Home() {
	return (
		<>
			<BodyClassHelper
				className="bg-base-100"
				title="RNG's Portfolio"
				icon="/github-mark.svg"
			/>

			<main className="grain">
				<div className="bg-base-100">
					<section id="top">
						<Hero />
					</section>

					<section id="education" className="mx-auto max-w-4xl px-4 py-12">
						<Education />
					</section>

					<section id="projects" className="mx-auto max-w-4xl px-4 py-6">
						<Projects />
					</section>
				</div>
			</main>
		</>
	);
}
