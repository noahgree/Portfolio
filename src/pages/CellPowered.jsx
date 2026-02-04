import Navbar from "../components/cell-powered/Navbar";
import Hero from "../components/cell-powered/Hero";
import Content from "../components/cell-powered/Content";
import BodyClassHelper from "../components/BodyClassHelper";
import grainTexture from "../assets/grainTexture.png";

export default function CellPowered() {
	return (
		<>
			<BodyClassHelper
				className="relative bg-black/60"
				title="Cell Powered"
				icon="/iconDark.png"
			/>
			<div
				className="pointer-events-none fixed inset-0 hidden bg-repeat opacity-[0.03] sm:block"
				style={{
					backgroundImage: `url(${grainTexture.src ?? grainTexture})`,
					backgroundSize: "128px 128px",
				}}
				aria-hidden
			/>

			<main className="px-4 py-10 min-h-screen min-w-screen">
				<Navbar />
				<Hero />
				<Content />
			</main>
		</>
	);
}
